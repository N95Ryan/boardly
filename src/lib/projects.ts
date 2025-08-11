import { ProjectKey } from "@/lib/types";

export const PROJECT_LABELS: Record<ProjectKey, string> = {
  "mobile-app": "Mobile App",
  "website-redesign": "Website Redesign",
  "design-system": "Design System",
  "wireframes": "Wireframes",
};

export function isProjectKey(value: string): value is ProjectKey {
  return Object.prototype.hasOwnProperty.call(PROJECT_LABELS, value);
}


