import type { MetadataRoute } from 'next'

// Web app manifest. Drives the icon and name used by "Add to Home Screen" (phone) and
// "Install / Add to Dock" (desktop). Without it those flows fall back to a generic icon.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'FoqusLab',
    short_name: 'FoqusLab',
    description: 'Optometry board review. Study, drill, pass.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F4F6F9',
    theme_color: '#3B54FF',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
