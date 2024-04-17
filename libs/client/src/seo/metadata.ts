import { metaKeywords } from './keywords';

const baseURL = 'https://igot.ai';

export const defaultMetadata = {
  metadataBase: new URL(baseURL),
  title: {
    default: 'iGOT.ai - GPT Development with Zero Prompting effort',
    template: '%s | iGOT AI',
  },
  description:
    'iGOT AI: Revolutionize AI Engine Creation Without Coding – Build, Define, Explore, Execute. Unleash the power of GPT with no prompting effort. Tailor complexity, automate routines, and transform your business operations with ease.',
  keywords: metaKeywords.join(', '),
  creator: 'Paul Ng',
  publisher: 'iGOT.ai',
  applicationName: 'iGOT.ai',
  category: 'No-Code AI Engine Building with GPT',
  authors: [
    {
      name: 'Paul Ng',
      url: 'https://www.paulaan.me',
    },
  ],
  appLinks: {
    web: {
      url: baseURL,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseURL,
    siteName: 'iGOT.ai',
    title: 'iGOT AI - No-Code AI Engine Building with GPT',
    description:
      'Empower your business with iGOT AI, the platform that simplifies building custom AI engines using GPT. Define complexity, automate tasks, and execute plans with no coding required.',
    images: [
      {
        url: `${baseURL}/images/seo_image.png`,
        width: 1600,
        height: 900,
        alt: 'iGOT.ai - GPT Development with Zero Prompting effort',
      },
    ],
    emails: ['paul@igot.ai'],
    phoneNumbers: [''], // TODO: add phone number
    countryName: 'Vietnam',
  },
  twitter: {
    creator: '@igot.ai',
    site: '@Keos',
    card: 'summary_large_image',
    title: 'iGOT AI - No-Code AI Engine Building with GPT',
    description:
      'Empower your business with iGOT AI, the platform that simplifies building custom AI engines using GPT. Define complexity, automate tasks, and execute plans with no coding required.',
    images: [
      {
        url: `${baseURL}/images/seo_image.png`,
        width: 1600,
        height: 900,
        alt: 'iGOT.ai - GPT Development with Zero Prompting effort',
      },
    ],
  },
};
