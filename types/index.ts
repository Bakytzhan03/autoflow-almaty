import type { LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  basePrice: number;
  icon: LucideIcon;
  popular?: boolean;
};

export type CarType = {
  id: string;
  label: string;
  coefficient: number;
};

export type Complexity = {
  id: string;
  label: string;
  hint: string;
  coefficient: number;
};

export type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Testimonial = {
  name: string;
  car: string;
  text: string;
};
