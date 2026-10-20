export type WorkCategory = 'games' | '3d-art' | '2d-art' | 'other';

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
  // {
  //   id: 'game-1',
  //   title: 'Project Alpha',
  //   description: 'A fast-paced 3D action platformer built in Unreal Engine 5.',
  //   category: 'games',
  //   tags: ['Unreal Engine 5', 'C++', 'Multiplayer'],
  //   link: 'https://badkavs.itch.io/project-alpha',
  //   linkLabel: 'Play on itch.io',
  // },

  // ── 3D Art ─────────────────────────────────────────────────────────
  // {
  //   id: '3d-1',
  //   title: 'Sci-Fi Corridor',
  //   description: 'A modular sci-fi environment built in Blender, textured in Substance Painter.',
  //   category: '3d-art',
  //   tags: ['Blender', 'Substance Painter', 'Environment'],
  //   link: 'https://www.artstation.com/artwork/...',
  //   linkLabel: 'View on ArtStation',
  // },

  // ── 2D Art ─────────────────────────────────────────────────────────
  // {
  //   id: '2d-1',
  //   title: 'Character Concept Sheet',
  //   description: 'Full turn-around concept art for the protagonist of Project Alpha.',
  //   category: '2d-art',
  //   tags: ['Concept Art', 'Photoshop', 'Character Design'],
  // },

  // ── Other ──────────────────────────────────────────────────────────
  // {
  //   id: 'other-1',
  //   title: 'Game Trailer — Project Alpha',
  //   description: 'Official reveal trailer edited in DaVinci Resolve.',
  //   category: 'other',
  //   tags: ['Video Editing', 'DaVinci Resolve'],
  //   link: 'https://youtu.be/...',
  //   linkLabel: 'Watch on YouTube',
  // },
];
