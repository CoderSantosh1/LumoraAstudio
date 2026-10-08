import {
  Building2,
  CalendarDays,
  Camera,
  CircleUser,
  Gem,
  Lightbulb,
  MapPin,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/types";

/* Maps icon names used in /data/*.json to lucide components */
export const icons: Record<IconName, LucideIcon> = {
  camera: Camera,
  lightbulb: Lightbulb,
  trophy: Trophy,
  gem: Gem,
  "circle-user": CircleUser,
  "map-pin": MapPin,
  building: Building2,
  calendar: CalendarDays,
};
