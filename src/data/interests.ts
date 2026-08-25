import type { LucideIcon } from "lucide-react";
import { Cpu, LineChart, Palette, Network, Rocket, Users } from "lucide-react";

export interface Interest {
  label: string;
  icon: LucideIcon;
}

export const interests: Interest[] = [
  { label: "AI / ML", icon: Cpu },
  { label: "Fintech", icon: LineChart },
  { label: "Product Design", icon: Palette },
  { label: "Systems Architecture", icon: Network },
  { label: "Startups", icon: Rocket },
  { label: "Developer Communities", icon: Users },
];
