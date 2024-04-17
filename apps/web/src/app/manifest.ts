import { defaultMetadata } from '@igot.ai/client';
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  const { applicationName, description } = defaultMetadata;
  return {
    name: applicationName,
    short_name: applicationName,
    description,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
