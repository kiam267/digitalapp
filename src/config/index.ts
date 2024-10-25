export const PRODUCT_CATEGORIES = [
  {
    label: 'UI Kits',
    value: 'ui_kists' as const,
    featured: [
      {
        name: 'Editor picks',
        href: '#',
        imageSrc: '/nav/ui-kits/mixed.jpg',
      },
      {
        name: 'New Arrivals',
        href: '#',
        imageSrc: '/nav/ui-kits/blue.jpg',
      },
      {
        name: 'Bestseller',
        href: '#',
        imageSrc: '/nav/ui-kits/purple.jpg',
      },
    ],
  },
  {
    label: 'Icon',
    value: 'icon' as const,
    featured: [
      {
        name: 'Favorite Icon Picks',
        href: '#',
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'New Arrivas',
        href: '#',
        imageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Bestselling iocns',
        href: '#',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
];