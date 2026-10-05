export type ServiceStatus = 'available' | 'coming-soon' | 'unavailable';

export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  status: ServiceStatus;
  category: string;
  featured: boolean;
  icon: string;
  capabilities: string[];
  technologies?: string[];
  deliverables?: string[];
}

export const services: Service[] = [
  {
    id: 'game-programming',
    name: 'Game Programming',
    slug: 'game-programming',
    shortDescription:
      'Gameplay systems, mechanics, tools, and technical implementation for games.',
    description:
      'From core gameplay mechanics to complex systems programming, BADKAVS delivers robust and optimized game code. We handle gameplay programming, player controllers, AI systems, editor scripting, tools development, optimization, debugging, and technical implementation — bringing your game design to life with clean, maintainable code.',
    status: 'available',
    category: 'development',
    featured: true,
    icon: 'Code',
    capabilities: [
      'Gameplay programming',
      'Game mechanics implementation',
      'Systems programming',
      'Player controllers',
      'AI systems',
      'Tools development',
      'Editor scripting',
      'Optimization',
      'Debugging & bug fixing',
      'Technical implementation',
    ],
    technologies: ['Unity', 'C#', 'Unreal Engine', 'C++'],
    deliverables: [
      'Game-ready code modules',
      'Systems documentation',
      'Technical implementation',
      'Optimized builds',
      'Bug fix reports',
    ],
  },
  {
    id: '3d-art',
    name: '3D Art',
    slug: '3d-art',
    shortDescription:
      'Game-ready 3D models, environments, characters, and assets.',
    description:
      'BADKAVS creates high-quality 3D art tailored for games. Whether you need detailed characters, immersive environments, hard-surface props, or stylized assets, we produce game-ready models optimized for real-time rendering.',
    status: 'available',
    category: 'art',
    featured: true,
    icon: 'Box',
    capabilities: [
      '3D modeling',
      'Game-ready assets',
      'Props & objects',
      'Environment art',
      'Character modeling',
      'Hard-surface modeling',
      'Low-poly assets',
      'High-poly assets',
      'Stylized assets',
      'Game asset preparation',
    ],
    technologies: ['Blender', 'Maya', 'ZBrush'],
    deliverables: [
      'Game-ready 3D models',
      'Optimized meshes',
      'Asset packages',
      'Model sheets',
    ],
  },
  {
    id: '2d-art',
    name: '2D Art',
    slug: '2d-art',
    shortDescription:
      'Concept art, illustrations, sprites, icons, and visual development.',
    description:
      'BADKAVS produces compelling 2D art that sets the visual direction for your project. From concept art and character designs to game-ready sprites, icons, and promotional artwork, we bring ideas to life on canvas.',
    status: 'available',
    category: 'art',
    featured: true,
    icon: 'Palette',
    capabilities: [
      'Concept art',
      'Game assets',
      'Illustrations',
      'Icons & UI elements',
      'Sprite creation',
      'Character concepts',
      'Environment concepts',
      'Promotional artwork',
      'Visual development',
    ],
    technologies: ['Photoshop', 'Clip Studio Paint', 'Procreate'],
    deliverables: [
      'Concept art sheets',
      'Game-ready sprites',
      'Icon sets',
      'Illustration packages',
      'Visual development guides',
    ],
  },
  {
    id: 'audio',
    name: 'Audio',
    slug: 'audio',
    shortDescription:
      'Sound design, music, and audio production for games and creative projects.',
    description:
      'BADKAVS is planning to offer audio services for games and creative projects. This service is currently in development and not yet available. Stay tuned for updates on our audio capabilities.',
    status: 'coming-soon',
    category: 'media',
    featured: false,
    icon: 'Music',
    capabilities: [],
    technologies: [],
    deliverables: [],
  },
  {
    id: 'animation',
    name: 'Animation',
    slug: 'animation',
    shortDescription:
      'Character animation, 3D animation, rigging, and game animation assets.',
    description:
      'BADKAVS delivers fluid, expressive animation that brings characters and worlds to life. We handle character animation, 3D animation, rigging support, and animation implementation to ensure your game feels dynamic and responsive.',
    status: 'available',
    category: 'art',
    featured: true,
    icon: 'Play',
    capabilities: [
      'Character animation',
      '3D animation',
      'Game animation',
      'Rigging support',
      'Animation implementation',
      'Animation assets',
    ],
    technologies: ['Blender', 'Maya', 'Unity'],
    deliverables: [
      'Animation clips',
      'Rigged characters',
      'Animation state machines',
      'Motion libraries',
    ],
  },
  {
    id: 'game-design',
    name: 'Game Design & Documentation',
    slug: 'game-design',
    shortDescription:
      'From a raw game idea to structured, development-ready game design documentation.',
    description:
      'BADKAVS transforms raw ideas into structured, development-ready game concepts. We craft comprehensive game design documentation covering core gameplay loops, mechanics, systems design, progression, economy, level design, and complete feature specifications — giving your team a clear roadmap from concept to completion.',
    status: 'available',
    category: 'design',
    featured: true,
    icon: 'FileText',
    capabilities: [
      'Game ideas & concepts',
      'Core gameplay loops',
      'Gameplay mechanics design',
      'Systems design',
      'Progression systems',
      'Economy design',
      'Level design concepts',
      'Player experience design',
      'Game Design Documents (GDD)',
      'Technical Design Documents (TDD)',
      'Feature specifications',
      'Development planning',
      'Complete documentation packages',
    ],
    technologies: ['Notion', 'Figma', 'Miro', 'Google Docs'],
    deliverables: [
      'Game Design Document (GDD)',
      'Technical Design Document (TDD)',
      'Feature specification sheets',
      'Systems design breakdowns',
      'Development roadmaps',
    ],
  },
  {
    id: '3d-texturing',
    name: '3D Texturing',
    slug: '3d-texturing',
    shortDescription:
      'PBR texturing, materials, and surface detailing for game assets.',
    description:
      'BADKAVS provides professional texturing that makes your 3D assets look their best. From PBR materials and surface detailing to stylized and realistic textures, we create optimized, game-ready textures that bring models to life.',
    status: 'available',
    category: 'art',
    featured: false,
    icon: 'Layers',
    capabilities: [
      'PBR texturing',
      'Material creation',
      'Game-ready textures',
      'Surface detailing',
      'Texture optimization',
      'Stylized textures',
      'Realistic textures',
    ],
    technologies: ['Substance Painter', 'Substance Designer', 'Photoshop'],
    deliverables: [
      'Texture maps (albedo, normal, roughness, etc.)',
      'Material libraries',
      'Optimized texture atlases',
    ],
  },
  {
    id: 'photo-editing',
    name: 'Photo Editing',
    slug: 'photo-editing',
    shortDescription:
      'Image cleanup, retouching, compositing, and promotional image preparation.',
    description:
      'BADKAVS offers professional photo editing for games and creative projects. We handle image cleanup, retouching, background removal, compositing, color correction, and promotional image preparation.',
    status: 'available',
    category: 'media',
    featured: false,
    icon: 'Image',
    capabilities: [
      'Image cleanup',
      'Retouching',
      'Background removal',
      'Compositing',
      'Color correction',
      'Promotional image preparation',
    ],
    technologies: ['Photoshop', 'Lightroom'],
    deliverables: [
      'Edited images',
      'Promotional materials',
      'Composited artwork',
      'Color-corrected assets',
    ],
  },
  {
    id: 'video-editing',
    name: 'Video Editing',
    slug: 'video-editing',
    shortDescription:
      'Game trailers, gameplay videos, social media clips, and video production.',
    description:
      'BADKAVS produces engaging video content for games and creative projects. From game trailers and gameplay videos to social media clips and promotional content, we deliver polished video with motion graphics support and post-production.',
    status: 'available',
    category: 'media',
    featured: false,
    icon: 'Film',
    capabilities: [
      'Game trailers',
      'Gameplay videos',
      'Promotional videos',
      'Social media clips',
      'YouTube videos',
      'Video editing',
      'Motion graphics support',
      'Basic post-production',
    ],
    technologies: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    deliverables: [
      'Edited video files',
      'Game trailers',
      'Social media clips',
      'Promotional video packages',
    ],
  },
  {
    id: 'ui-ux-design',
    name: 'UI & UX Design',
    slug: 'ui-ux-design',
    shortDescription:
      'Game UI, menus, HUDs, wireframes, prototypes, and UX flows.',
    description:
      'BADKAVS designs intuitive, visually compelling game interfaces. We create menus, HUDs, inventory systems, settings screens, navigation flows, wireframes, and prototypes — from Figma designs to Unity UI implementation.',
    status: 'available',
    category: 'design',
    featured: true,
    icon: 'Layout',
    capabilities: [
      'Game menus',
      'HUDs',
      'Inventory interfaces',
      'Settings screens',
      'Navigation design',
      'UX flows',
      'Wireframes',
      'Prototypes',
      'UI systems',
      'Figma designs',
      'Unity UI implementation',
    ],
    technologies: ['Figma', 'Unity'],
    deliverables: [
      'UI design files',
      'Wireframe packages',
      'Interactive prototypes',
      'UI implementation in engine',
      'Style guides',
    ],
  },
  {
    id: 'technical-artist',
    name: 'Technical Artist',
    slug: 'technical-artist',
    shortDescription:
      'Bridging art and engineering — pipelines, rendering, tools, and optimization.',
    description:
      'BADKAVS bridges the gap between art and engineering. Our technical art services cover asset pipelines, rendering workflows, material systems, performance optimization, artist tools, and shader integration — ensuring your art looks great and runs smoothly.',
    status: 'available',
    category: 'development',
    featured: false,
    icon: 'Wrench',
    capabilities: [
      'Art/engineering pipeline support',
      'Unity technical art',
      'Asset pipelines',
      'Rendering workflows',
      'Material workflows',
      'Performance optimization',
      'Artist tools',
      'Technical problem solving',
      'Art implementation',
      'Shader integration',
    ],
    technologies: ['Unity', 'Shader Graph', 'HLSL', 'Python'],
    deliverables: [
      'Pipeline tools',
      'Optimized art workflows',
      'Technical documentation',
      'Performance reports',
    ],
  },
  {
    id: 'shader-programming',
    name: 'Shader Programming',
    slug: 'shader-programming',
    shortDescription:
      'Custom shaders, visual effects, materials, and rendering solutions.',
    description:
      'BADKAVS creates custom shaders and visual effects that define your game\'s look. From HLSL code and Shader Graph setups to stylized rendering, surface effects, and shader optimization, we deliver visual solutions that perform.',
    status: 'available',
    category: 'development',
    featured: false,
    icon: 'Sparkles',
    capabilities: [
      'Unity shaders',
      'HLSL programming',
      'Shader Graph',
      'Custom visual effects',
      'Material creation',
      'Rendering effects',
      'Stylized rendering',
      'Surface effects',
      'Shader optimization',
    ],
    technologies: ['Unity', 'HLSL', 'Shader Graph', 'GLSL'],
    deliverables: [
      'Custom shader files',
      'Shader documentation',
      'Material presets',
      'Visual effect packages',
    ],
  },
];

/* ─── Helper functions ─── */

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter((s) => s.category === category);
}

export function getServicesByStatus(status: ServiceStatus): Service[] {
  return services.filter((s) => s.status === status);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}
