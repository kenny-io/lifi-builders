"use client";

import { useState, FormEvent } from "react";
import { ChevronRight } from "@/components/icons";

const PROJECT_STAGES = [
  { value: "idea", label: "Idea / Concept" },
  { value: "prototype", label: "Prototype / MVP" },
  { value: "beta", label: "Beta / Early Users" },
  { value: "launched", label: "Launched / In Production" },
];

const LIFI_USAGE = [
  { value: "sdk", label: "LI.FI SDK" },
  { value: "api", label: "LI.FI API" },
  { value: "widget", label: "LI.FI Widget" },
  { value: "planning", label: "Planning to integrate" },
];

interface FormData {
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

function FormSection({ 
  number, 
  title, 
  children 
}: { 
  number: string; 
  title: string; 
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {/* Section card with gradient border */}
      <div className="relative rounded-2xl bg-gradient-to-b from-border/50 to-transparent p-px">
        <div className="rounded-2xl bg-bg-card/80 backdrop-blur-sm p-6 sm:p-8">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-pink/20 to-pink/5 border border-pink/20">
              <span className="font-mono text-sm font-bold text-pink">{number}</span>
            </div>
            <h2 className="font-mono text-lg font-semibold text-text-primary tracking-tight">
              {title}
            </h2>
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
}

function FormField({
  label,
  required,
  children,
  hint,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-1.5 font-mono text-sm text-text-secondary">
        {label}
        {required && <span className="text-pink">*</span>}
      </label>
      {children}
      {hint && (
        <p className="font-mono text-xs text-text-secondary/60">{hint}</p>
      )}
    </div>
  );
}

function Input({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full px-4 py-3.5 bg-bg-default/50 border border-border rounded-xl text-text-primary font-mono text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-pink/50 focus:ring-2 focus:ring-pink/10 focus:bg-bg-default transition-all duration-200"
    />
  );
}

function Textarea({
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="w-full px-4 py-3.5 bg-bg-default/50 border border-border rounded-xl text-text-primary font-mono text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-pink/50 focus:ring-2 focus:ring-pink/10 focus:bg-bg-default transition-all duration-200 resize-none"
    />
  );
}

function Select({
  options,
  placeholder,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: { value: string; label: string }[];
  placeholder: string;
}) {
  return (
    <div className="relative">
      <select
        {...props}
        className="w-full px-4 py-3.5 bg-bg-default/50 border border-border rounded-xl text-text-primary font-mono text-sm focus:outline-none focus:border-pink/50 focus:ring-2 focus:ring-pink/10 focus:bg-bg-default transition-all duration-200 appearance-none cursor-pointer"
      >
        <option value="" disabled className="text-text-secondary/40">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

export function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    twitter: "",
    projectName: "",
    projectDescription: "",
    lifiUsage: "",
    lifiIntegrationDetails: "",
    projectStage: "",
    projectUrl: "",
    githubUrl: "",
    additionalInfo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit application");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink/5 via-pink/10 to-pink/5 rounded-3xl blur-3xl" />
        <div className="relative rounded-2xl bg-gradient-to-b from-border/50 to-transparent p-px">
          <div className="rounded-2xl bg-bg-card/90 backdrop-blur-sm p-12 text-center">
            {/* Success icon with glow */}
            <div className="relative inline-flex mb-8">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl" />
              <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-full flex items-center justify-center border border-emerald-500/20">
                <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            
            <h2 className="font-mono text-2xl font-bold text-text-primary mb-3">
              Application Submitted
            </h2>
            <p className="text-text-secondary max-w-md mx-auto mb-8">
              Thank you for applying to the LI.FI Builders Program. We&apos;ll review your application and get back to you within 2 weeks.
            </p>
            
            <a
              href="/"
              className="inline-flex items-center gap-2 font-mono text-sm text-pink hover:text-pink-hover transition-colors group"
            >
              <span>Back to Home</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Section 1: Personal Information */}
      <FormSection number="01" title="Personal Information">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField label="Full Name" required>
            <Input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="satoshi nakamoto"
            />
          </FormField>
          
          <FormField label="Email Address" required>
            <Input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="satoshi@bitcoin.org"
            />
          </FormField>
          
          <div className="sm:col-span-2">
            <FormField label="Twitter / X Handle" hint="Optional, but helps us find you">
              <Input
                type="text"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
                placeholder="@satoshi"
              />
            </FormField>
          </div>
        </div>
      </FormSection>

      {/* Section 2: Project Information */}
      <FormSection number="02" title="Project Information">
        <div className="space-y-6">
          <FormField label="Project Name" required>
            <Input
              type="text"
              name="projectName"
              required
              value={formData.projectName}
              onChange={handleChange}
              placeholder="My Cross-Chain App"
            />
          </FormField>
          
          <FormField label="Project Description" required hint="What problem does it solve? Who is your target user?">
            <Textarea
              name="projectDescription"
              required
              rows={4}
              value={formData.projectDescription}
              onChange={handleChange}
              placeholder="Describe your project in a few sentences..."
            />
          </FormField>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField label="Project Stage" required>
              <Select
                name="projectStage"
                required
                value={formData.projectStage}
                onChange={handleChange}
                placeholder="Select stage"
                options={PROJECT_STAGES}
              />
            </FormField>
            
            <FormField label="LI.FI Integration" required>
              <Select
                name="lifiUsage"
                required
                value={formData.lifiUsage}
                onChange={handleChange}
                placeholder="Select integration type"
                options={LIFI_USAGE}
              />
            </FormField>
          </div>
          
          <FormField label="How are you using LI.FI?" required hint="Features, chains, specific use cases">
            <Textarea
              name="lifiIntegrationDetails"
              required
              rows={3}
              value={formData.lifiIntegrationDetails}
              onChange={handleChange}
              placeholder="Describe how LI.FI powers your project..."
            />
          </FormField>
        </div>
      </FormSection>

      {/* Section 3: Links */}
      <FormSection number="03" title="Links">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField label="Project URL" hint="Live site or demo">
            <Input
              type="url"
              name="projectUrl"
              value={formData.projectUrl}
              onChange={handleChange}
              placeholder="https://myproject.xyz"
            />
          </FormField>
          
          <FormField label="GitHub Repository" hint="Public or private">
            <Input
              type="url"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              placeholder="https://github.com/user/repo"
            />
          </FormField>
        </div>
      </FormSection>

      {/* Section 4: Additional Info */}
      <FormSection number="04" title="Additional Information">
        <FormField label="Anything else?" hint="Team, experience, timeline, or other relevant info">
          <Textarea
            name="additionalInfo"
            rows={3}
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Tell us more about yourself or your project..."
          />
        </FormField>
      </FormSection>

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
          <p className="font-mono text-sm text-red-400">{error}</p>
        </div>
      )}

      {/* Submit Section */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-pink to-pink-hover p-px font-mono text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-pink/25 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="relative flex items-center justify-center gap-2 rounded-[11px] bg-pink text-bg-default px-8 py-4 transition-all duration-300 group-hover:bg-transparent group-hover:text-pink">
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit Application</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </div>
        </button>
        
        <p className="text-center font-mono text-xs text-text-secondary/60 mt-4">
          By submitting, you agree to our{" "}
          <a href="#" className="text-text-secondary hover:text-pink transition-colors">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-text-secondary hover:text-pink transition-colors">
            Privacy Policy
          </a>
        </p>
      </div>
    </form>
  );
}
