import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWhatsAppMessage(details: {
  product?: string;
  name?: string;
  phone?: string;
  quantity?: string;
  location?: string;
  projectType?: string;
  message?: string;
}) {
  let text = `Hello Lemis Electronics,\nI have an enquiry regarding LED/Solar Lighting:`;
  if (details.product) text += `\n- Product: ${details.product}`;
  if (details.quantity) text += `\n- Quantity Required: ${details.quantity}`;
  if (details.projectType) text += `\n- Project Type: ${details.projectType}`;
  if (details.location) text += `\n- Location: ${details.location}`;
  if (details.name) text += `\n- Contact Name: ${details.name}`;
  if (details.phone) text += `\n- Phone: ${details.phone}`;
  if (details.message) text += `\n- Requirement Details: ${details.message}`;
  return encodeURIComponent(text);
}
