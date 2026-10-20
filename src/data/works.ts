export type WorkCategory = 'games' | 'art' | 'other';

export interface Work {
  id: string;
  title: string;
  description: string;
  category: WorkCategory;
  tags?: string[];
  image?: string;
  /** Link to itch.io, ArtStation, YouTube, etc. */
  link?: string;
  linkLabel?: string;
}

/**
 * Works showcase data.
 * Add entries here to have them appear on the Our Works page automatically.
 * Set `image` to a URL or an imported asset path.
 */
export const works: Work[] = [
  // ── Games ──────────────────────────────────────────────────────────
  {
    id: 'game-example',
    title: 'Project Alpha',
    description:
      'A fast-paced 3D action platformer built in Unreal Engine 5. Features custom movement mechanics, AI enemies, and a hand-crafted level designed for speedrunning.',
    category: 'games',
    tags: ['Unreal Engine 5', 'C++', 'Blueprints', 'Single Player'],
  },

  // ── Art (3D / 2D) ────────────────────────────────────────────────
  {
    id: 'art-example',
    title: 'Sci-Fi Environment Concept',
    description:
      'A modular sci-fi corridor environment built in Blender and textured in Substance Painter. Designed for use in real-time game engines with optimised LODs.',
    category: 'art',
    tags: ['Blender', 'Substance Painter', '3D Art', 'Environment'],
  },

  // ── Other ──────────────────────────────────────────────────────────
  {
    id: 'other-example',
    title: 'Game Reveal Trailer',
    description:
      'Official reveal trailer for Project Alpha — edited in DaVinci Resolve with custom sound design, motion graphics, and colour grading.',
    category: 'other',
    tags: ['Video Editing', 'DaVinci Resolve', 'Motion Graphics'],
  },
];
