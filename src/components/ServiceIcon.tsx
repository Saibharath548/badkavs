import {
  Code,
  Box,
  Palette,
  Music,
  Play,
  FileText,
  Layers,
  Image,
  Film,
  Layout,
  Wrench,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Code,
  Box,
  Palette,
  Music,
  Play,
  FileText,
  Layers,
  Image,
  Film,
  Layout,
  Wrench,
  Sparkles,
  HelpCircle,
};

interface ServiceIconProps {
  name: string;
  size?: number;
}

export default function ServiceIcon({ name, size = 22 }: ServiceIconProps) {
  const IconComponent = iconMap[name] ?? HelpCircle;
  return <IconComponent size={size} />;
}
