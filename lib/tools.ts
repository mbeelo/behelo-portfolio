export interface Tool {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  status: 'live' | 'prototype' | 'coming soon';
  ctaText: string;
  ctaHref?: string;
  section: 'focus' | 'learning' | 'trust' | 'culture' | 'physical';
}

export const tools: Tool[] = [
  // Focus section (2 tiles)
  {
    id: 'task-roulette',
    name: 'Task Roulette',
    description: 'Smart task selection based on your energy and time. Get the right task for right now.',
    thumbnail: '/task-roulette.png',
    status: 'live',
    ctaText: 'Try it',
    ctaHref: 'https://task-roulette.com/?utm_source=behelo&utm_medium=website&utm_campaign=tool_click&utm_content=focus_section',
    section: 'focus'
  },
  {
    id: 'chainflow',
    name: 'Chainflow',
    description: 'Sequential timer for workouts & productivity. Custom chains that flow seamlessly from exercise to exercise.',
    thumbnail: '/chainflow.png',
    status: 'live',
    ctaText: 'Try it',
    ctaHref: 'https://chainflow.app/?utm_source=behelo&utm_medium=website&utm_campaign=tool_click&utm_content=focus_section',
    section: 'focus'
  },

  // Learning section (2 tiles)
  {
    id: 'eduba',
    name: 'Eduba',
    description: 'Remember what you read. Most tools help you read more. Eduba helps you remember more using texts worth learning.',
    thumbnail: '/eduba.png',
    status: 'live',
    ctaText: 'Try it',
    ctaHref: 'https://eduba.co/?utm_source=behelo&utm_medium=website&utm_campaign=tool_click&utm_content=learning_section',
    section: 'learning'
  },
  {
    id: 'afterimage',
    name: 'Afterimage',
    description: 'Daily drawing practice tracker with progress visualization and technique notes.',
    thumbnail: '/afterimage.png',
    status: 'coming soon',
    ctaText: 'Coming Soon',
    section: 'learning'
  },

  // Trust section (1 tile)
  {
    id: 'trustright',
    name: 'TrustRight',
    description: 'Trust the web, again. Find out who owns the sites you visit and where their money goes.',
    thumbnail: '/trustright.png',
    status: 'coming soon',
    ctaText: 'Coming Soon',
    section: 'trust'
  },

  // Culture section (1 tile)
  {
    id: 'cultural-bookstore',
    name: 'Cultural Bookstore',
    description: 'Digital marketplace for cultural knowledge, stories, and traditions. Discover and purchase heritage content.',
    thumbnail: '/libraryimg.png',
    status: 'coming soon',
    ctaText: 'Coming Soon',
    section: 'culture'
  },

  // Physical Tools section (2 tiles)
  {
    id: 'scrollable-wall',
    name: 'Scrollable Wall',
    description: 'Wall-mounted butcher paper roll system with crank mechanism for continuous drawing and writing surface.',
    thumbnail: 'https://picsum.photos/400/225?random=7',
    status: 'prototype',
    ctaText: 'View build',
    section: 'physical'
  },
  {
    id: 'modular-laukh',
    name: 'Modular Laukh',
    description: 'Collapsible easel system that fits in a backpack for plein air painting.',
    thumbnail: 'https://picsum.photos/400/225?random=8',
    status: 'prototype',
    ctaText: 'See plans',
    section: 'physical'
  }
];

export function getToolsBySection(section: Tool['section']): Tool[] {
  return tools.filter(tool => tool.section === section);
}