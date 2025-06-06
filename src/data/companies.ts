interface Company {
  name: string;
  logo: string;
  url?: string;
  role?: string;
  period?: string;
  impact?: {
    other?: string[];
  };
}

export const companies: Company[] = [
  {
    name: 'ZS Associates',
    logo: '/images/companies/zs-logo.png',
    url: 'https://www.zs.com',
    role: 'Associate Consultant',
    period: '2016-2020',
    impact: {
      other: [
        'Led strategic initiatives across pharmaceutical industry',
        'Developed innovative analytics solutions for Fortune 500 clients'
      ]
    }
  },
  {
    name: 'Global Alliance for Mass Entrepreneurship (GAME)',
    logo: '/images/companies/game-logo.png',
    url: 'https://massentrepreneurship.org',
    role: 'Product Owner',
    period: '2020-2022',
    impact: {
      other: [
        'Built India\'s first SMB Accelerator',
        'Launched multiple successful products reaching 2000+ entrepreneurs'
      ]
    }
  },
  {
    name: 'Vellom',
    logo: '/images/companies/vellom-logo.png',
    url: 'https://vellom.com',
    role: 'Product Strategy Lead',
    period: '2022-2023',
    impact: {
      other: [
        'Led product strategy for AI-powered compliance platform',
        'Drove 3x growth in user engagement metrics'
      ]
    }
  },
  {
    name: 'Epson',
    logo: '/images/companies/epson-logo.png',
    url: 'https://epson.com',
    role: 'MBA Product Management Intern',
    period: 'Summer 2023',
    impact: {
      other: [
        'Developing go-to-market strategy for new product line',
        'Leading cross-functional teams for product launch'
      ]
    }
  }
];

// You can add more companies by following the same format above
// Make sure to:
// 1. Add the company logo file to /public/images/companies/
// 2. Add a new entry in the companies array with the company details
// 3. The logo path should be relative to the public directory 