import { NextRequest, NextResponse } from "next/server";

const AIRTABLE_TOKEN = process.env.TOKEN;
const AIRTABLE_BASE_ID = process.env.BASE_ID;
const AIRTABLE_TABLE_NAME = "Builder Applications";

interface ApplicationData {
  name: string;
  email: string;
  twitter: string;
  projectName: string;
  projectDescription: string;
  lifiUsage: string;
  lifiIntegrationDetails: string;
  projectStage: string;
  projectUrl: string;
  githubUrl: string;
  additionalInfo: string;
}

// Map form values to Airtable-friendly labels
const PROJECT_STAGE_MAP: Record<string, string> = {
  idea: "Idea / Concept",
  prototype: "Prototype / MVP",
  beta: "Beta / Early Users",
  launched: "Launched / In Production",
};

const LIFI_USAGE_MAP: Record<string, string> = {
  sdk: "LI.FI SDK",
  api: "LI.FI API",
  widget: "LI.FI Widget",
  planning: "Planning to integrate",
};

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables
    if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID) {
      console.error("Missing Airtable credentials");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const data: ApplicationData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.projectName || !data.projectDescription) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Prepare Airtable record - only include fields that exist in the table
    const fields: Record<string, string> = {
      "Full Name": data.name,
      "Email": data.email,
      "Project Name": data.projectName,
      "Project Description": data.projectDescription,
      "Project Stage": PROJECT_STAGE_MAP[data.projectStage] || data.projectStage,
      "LI.FI Integration": LIFI_USAGE_MAP[data.lifiUsage] || data.lifiUsage,
      "LI.FI Usage Details": data.lifiIntegrationDetails,
    };

    // Only add optional fields if they have values
    if (data.twitter) fields["Twitter Handle"] = data.twitter;
    if (data.projectUrl) fields["Project URL"] = data.projectUrl;
    if (data.githubUrl) fields["GitHub URL"] = data.githubUrl;
    if (data.additionalInfo) fields["Additional Info"] = data.additionalInfo;

    const airtableRecord = { fields };

    // Submit to Airtable
    const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;
    
    console.log("Submitting to:", airtableUrl);
    console.log("Fields:", JSON.stringify(fields, null, 2));
    
    const response = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(airtableRecord),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Airtable error:", errorData);
      return NextResponse.json(
        { error: "Failed to submit application", details: errorData },
        { status: response.status }
      );
    }

    const result = await response.json();
    
    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
      id: result.id,
    });
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
