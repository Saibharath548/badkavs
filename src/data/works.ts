import roadToNinjaImg from '@/assets/projects/road-to-ninja.png';
import uiImg from '@/assets/projects/ui-unwanted-internship.png';
import magnetManiacImg from '@/assets/projects/magnet-maniac.png';
import bakersEditionImg from '@/assets/projects/2048-bakers-edition.png';
import escSimImg from '@/assets/projects/esc-sim.png';
import faceitImg from '@/assets/projects/faceit.jpg';
import pixelAdventureVideo from '@/assets/projects/pixel-adventure.webm';
import modularBuildingKitImg from '@/assets/projects/modular-building-kit.png';
import advanceOutlineShaderImg from '@/assets/projects/advance-outline-shader.png';

export type WorkCategory = 'games' | 'art' | 'other';

export interface Work {
  id: string;
  title: string;
  description: string;
  category: WorkCategory;
  tags?: string[];
  image?: string;
  video?: string;
  /** Link to itch.io, ArtStation, YouTube, Unity Asset Store, etc. */
  link?: string;
  linkLabel?: string;
}

/**
 * Works showcase data for BADCAWS.
 * Categorized into Games, Art, and Other.
 */
export const works: Work[] = [
  // ── Games ──────────────────────────────────────────────────────────
  {
    id: 'road-to-ninja',
    title: 'Road To Ninja',
    description:
      'A tactical ninja-themed Ludo board game where strategy meets jutsu powers! Race your pawns across multi-zone board tracks, take refuge in safe villages, and turn the tide with cards like Teleportation, Pawn Swaps, and Rinnegan Nullification.',
    category: 'games',
    tags: ['Strategy', 'Board Game', 'Unity', 'HTML5', 'Card Abilities'],
    image: roadToNinjaImg,
    link: 'https://itiskiruhere.itch.io/road-to-ninja',
    linkLabel: 'Play on itch.io',
  },
  {
    id: 'ui-unwanted-internship',
    title: 'UI (Unwanted Internship)',
    description:
      'A 3D sci-fi puzzle mystery of logic, mechanics, and drone exploration. Trapped inside an elevator by The Collector, retrieve three lost relics scattered across different timelines to win your freedom.',
    category: 'games',
    tags: ['3D Puzzle', 'Sci-Fi', 'Mystery', 'Drone Exploration', 'Physics'],
    image: uiImg,
    link: 'https://itiskiruhere.itch.io/ui',
    linkLabel: 'Play on itch.io',
  },
  {
    id: 'magnet-maniac',
    title: 'Magnet Maniac',
    description:
      'A 3D puzzle-platformer where magnetism is your way forward. Traverse intricate chambers, manipulate polarities, and solve spatial physics puzzles to restore the broken Core of the world.',
    category: 'games',
    tags: ['3D Platformer', 'Physics Puzzle', 'Magnetism', 'Action'],
    image: magnetManiacImg,
    link: 'https://saibharath2006.itch.io/magnet-maniac',
    linkLabel: 'Play on itch.io',
  },
  {
    id: '2048-bakers-edition',
    title: "2048: Baker's Edition",
    description:
      'A sweet twist on classic 2048 puzzle mechanics. Slide, merge, and bake your way through recipes, manage kitchen power-ups, serve hungry customers in time, and compete on the global online leaderboard.',
    category: 'games',
    tags: ['Casual Puzzle', 'Android', 'Online Leaderboard', 'Power-ups'],
    image: bakersEditionImg,
    link: 'https://itiskiruhere.itch.io/2048-bakers-edition',
    linkLabel: 'Play on itch.io',
  },
  {
    id: 'esc-sim',
    title: 'Esc Sim',
    description:
      'A quirky first-person 3D escape room packed with secrets, hidden clues, and physics interactions. Search every corner and experiment with objects to solve your way out of the study room.',
    category: 'games',
    tags: ['3D Escape Room', 'Simulation', 'Puzzle', 'First-Person'],
    image: escSimImg,
    link: 'https://itiskiruhere.itch.io/esc-sim',
    linkLabel: 'Play on itch.io',
  },
  {
    id: 'faceit',
    title: 'FACEit',
    description:
      'A psychological turn-based, text-driven experience about confronting emotions hidden behind masks — anger, fear, sadness, denial, and emptiness. Defeat the masks and uncover what lies beneath.',
    category: 'games',
    tags: ['Turn-Based', 'Psychological', 'Pixel Art', 'Text-Based', '2D'],
    image: faceitImg,
    link: 'https://t0cks1ck.itch.io/faceit',
    linkLabel: 'Play on itch.io',
  },
  {
    id: 'pixel-platformer',
    title: 'Pixel Platformer',
    description:
      'A fast-paced 2D platformer where players parkour through vibrant handcrafted levels, collecting fruits for points and picking up power-ups to enhance agility and overcome challenging obstacles.',
    category: 'games',
    tags: ['2D Platformer', 'Pixel Art', 'Parkour', 'Fast-Paced'],
    video: pixelAdventureVideo,
    link: 'https://t0cks1ck.itch.io/pixel-platformer',
    linkLabel: 'Play on itch.io',
  },

  // ── Art (3D / 2D / Assets) ─────────────────────────────────────────
  {
    id: 'modular-building-kit',
    title: 'Modular Building Kit',
    description:
      'A fully modular 3D building pack designed for game-ready usage. Optimized for rapid environment creation and flexible assembly, allowing creators to produce diverse architectural structures and layouts efficiently.',
    category: 'art',
    tags: ['3D Environment', 'Modular Assets', 'Blender', 'Game Ready', 'Props'],
    image: modularBuildingKitImg,
    link: 'https://itiskiruhere.itch.io/modular-building-kit',
    linkLabel: 'View on itch.io',
  },
  {
    id: 'unity-advance-outline-shader',
    title: 'Advance Outline Shader (Unity)',
    description:
      'High-performance custom outline shader developed for Unity. Features clean silhouette extraction, adjustable line thickness, customizable colors, and depth/normal edge detection engineered for stylized visuals and VFX.',
    category: 'art',
    tags: ['Unity Asset Store', 'Custom Shader', 'HLSL', 'Outline VFX', 'Game Ready'],
    image: advanceOutlineShaderImg,
    link: 'https://assetstore.unity.com/publishers/105358',
    linkLabel: 'View on Unity Asset Store',
  },
];
