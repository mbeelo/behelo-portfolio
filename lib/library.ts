export interface LibraryResource {
  id: string;
  title: string;
  author: {
    name: string;
    bio?: string;
    avatar?: string;
  };
  description: string;
  coverImage: string;
  category: 'language' | 'culture' | 'history' | 'education' | 'stories';
  culturalOrigin?: string; // e.g., "Bubi (Equatorial Guinea)"
  language: string; // e.g., "Bubi", "Spanish", "English"
  price: number; // 0 for free resources
  fileUrl?: string; // PDF download URL (for purchased items)
  previewUrl?: string; // Sample pages URL
  pageCount?: number;
  publishedDate: string;
  tags: string[];
  featured: boolean;
  downloadCount: number;
}

export interface LibraryCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const libraryCategories: LibraryCategory[] = [
  {
    id: 'language',
    name: 'Language Learning',
    description: 'Dictionaries, grammar guides, and language learning materials',
    icon: '📚'
  },
  {
    id: 'culture',
    name: 'Cultural Heritage',
    description: 'Traditions, customs, and cultural practices',
    icon: '🎭'
  },
  {
    id: 'history',
    name: 'Historical Records',
    description: 'Historical documents and accounts',
    icon: '📜'
  },
  {
    id: 'education',
    name: 'Educational Resources',
    description: 'Learning materials and educational content',
    icon: '🎓'
  },
  {
    id: 'stories',
    name: 'Stories & Literature',
    description: 'Folk tales, literature, and narrative works',
    icon: '📖'
  }
];

// Sample Bubi cultural resources data
export const libraryResources: LibraryResource[] = [
  {
    id: 'bubi-basic-dictionary',
    title: 'Essential Bubi Dictionary',
    author: {
      name: 'Dr. María Nsue',
      bio: 'Linguist and cultural preservationist from Equatorial Guinea',
      avatar: 'https://picsum.photos/100/100?random=20'
    },
    description: 'A comprehensive dictionary featuring over 1,000 essential Bubi words with pronunciation guides, cultural context, and usage examples.',
    coverImage: 'https://picsum.photos/300/400?random=10',
    category: 'language',
    culturalOrigin: 'Bubi (Equatorial Guinea)',
    language: 'Bubi/Spanish/English',
    price: 0, // Free resource
    previewUrl: '/previews/bubi-dictionary-preview.pdf',
    pageCount: 156,
    publishedDate: '2024-11-15',
    tags: ['dictionary', 'bubi', 'language learning', 'free'],
    featured: true,
    downloadCount: 342
  },
  {
    id: 'bubi-oral-traditions',
    title: 'Voices of Bioko: Oral Traditions',
    author: {
      name: 'Elder Joaquín Loho',
      bio: 'Traditional storyteller and keeper of Bubi oral history',
      avatar: 'https://picsum.photos/100/100?random=21'
    },
    description: 'A collection of traditional Bubi stories, legends, and oral histories passed down through generations, preserving the rich narrative tradition of Bioko Island.',
    coverImage: 'https://picsum.photos/300/400?random=11',
    category: 'stories',
    culturalOrigin: 'Bubi (Equatorial Guinea)',
    language: 'Bubi/Spanish',
    price: 12.99,
    previewUrl: '/previews/oral-traditions-preview.pdf',
    pageCount: 89,
    publishedDate: '2024-10-20',
    tags: ['oral history', 'stories', 'traditions', 'bubi'],
    featured: true,
    downloadCount: 127
  },
  {
    id: 'bubi-cultural-ceremonies',
    title: 'Sacred Ceremonies of the Bubi People',
    author: {
      name: 'Prof. Teresa Bolekia',
      bio: 'Anthropologist specializing in Central African cultures',
      avatar: 'https://picsum.photos/100/100?random=22'
    },
    description: 'An in-depth exploration of traditional Bubi ceremonies, rituals, and their cultural significance in modern times.',
    coverImage: 'https://picsum.photos/300/400?random=12',
    category: 'culture',
    culturalOrigin: 'Bubi (Equatorial Guinea)',
    language: 'Spanish/English',
    price: 18.50,
    previewUrl: '/previews/ceremonies-preview.pdf',
    pageCount: 234,
    publishedDate: '2024-09-30',
    tags: ['ceremonies', 'rituals', 'culture', 'anthropology'],
    featured: false,
    downloadCount: 89
  },
  {
    id: 'bubi-language-primer',
    title: 'Learn Bubi: A Beginner\'s Guide',
    author: {
      name: 'Carlos Nvó',
      bio: 'Language teacher and cultural educator',
      avatar: 'https://picsum.photos/100/100?random=23'
    },
    description: 'Start your journey learning Bubi with this beginner-friendly guide featuring basic vocabulary, simple phrases, and cultural insights.',
    coverImage: 'https://picsum.photos/300/400?random=13',
    category: 'education',
    culturalOrigin: 'Bubi (Equatorial Guinea)',
    language: 'Bubi/English',
    price: 0, // Free resource
    previewUrl: '/previews/language-primer-preview.pdf',
    pageCount: 67,
    publishedDate: '2024-12-01',
    tags: ['beginner', 'language learning', 'bubi', 'free'],
    featured: false,
    downloadCount: 156
  },
  {
    id: 'bioko-island-history',
    title: 'The History of Bioko Island',
    author: {
      name: 'Dr. Enrique Nvó Okenve',
      bio: 'Historian and researcher of Equatorial Guinean history',
      avatar: 'https://picsum.photos/100/100?random=24'
    },
    description: 'A comprehensive historical account of Bioko Island from pre-colonial times to the present, including the role of the Bubi people.',
    coverImage: 'https://picsum.photos/300/400?random=14',
    category: 'history',
    culturalOrigin: 'Bubi (Equatorial Guinea)',
    language: 'Spanish',
    price: 24.99,
    previewUrl: '/previews/bioko-history-preview.pdf',
    pageCount: 312,
    publishedDate: '2024-08-15',
    tags: ['history', 'bioko', 'colonial', 'bubi people'],
    featured: false,
    downloadCount: 78
  }
];

export function getFeaturedResources(): LibraryResource[] {
  return libraryResources.filter(resource => resource.featured);
}

export function getFreeResources(): LibraryResource[] {
  return libraryResources.filter(resource => resource.price === 0);
}

export function getResourcesByCategory(category: LibraryResource['category']): LibraryResource[] {
  return libraryResources.filter(resource => resource.category === category);
}

export function getResourceById(id: string): LibraryResource | undefined {
  return libraryResources.find(resource => resource.id === id);
}

export function searchResources(query: string): LibraryResource[] {
  const searchTerm = query.toLowerCase();
  return libraryResources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm) ||
    resource.description.toLowerCase().includes(searchTerm) ||
    resource.author.name.toLowerCase().includes(searchTerm) ||
    resource.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}