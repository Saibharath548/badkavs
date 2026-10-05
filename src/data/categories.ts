export interface Category {
  id: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'development',
    name: 'Development',
    description: 'Programming, technical art, and shader development services.',
  },
  {
    id: 'art',
    name: 'Art',
    description: '2D art, 3D art, texturing, and animation services.',
  },
  {
    id: 'design',
    name: 'Design',
    description: 'Game design, documentation, and UI/UX design services.',
  },
  {
    id: 'media',
    name: 'Media',
    description: 'Photo editing, video editing, and audio services.',
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
