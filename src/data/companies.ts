interface Company {
  name: string;
  logo: string;
  url?: string;
  role?: string;
  period?: string;
  impact?: {
    value?: number;  // in millions
    families?: number;
    other?: string[];
  };
}

export const companies: Company[] = [
  {
    name: 'ZS Associates',
    logo: '/images/companies/company1.png',  // Add your company logo here
    url: 'https://www.zs.com',
    role: 'Associate Consultant',
    period: '2016-2020',
    impact: {
      value: 100,
      families: 512000,
      other: [
        'Led strategic initiatives across pharmaceutical industry',
        'Developed innovative analytics solutions'
      ]
    }
  },
  {
    name: 'GAME',
    logo: '/images/companies/company2.png',
    url: 'https://massentrepreneurship.org',
    role: 'Product Owner',
    period: '2020-2022',
    impact: {
      value: 60,
      families: 2000,
      other: [
        'Built India\'s first SMB Accelerator',
        'Launched multiple successful products'
      ]
    }
  },

  
  // Add more companies as needed...
];

// You can add more companies by following the same format above
// Make sure to:
// 1. Add the company logo file to /public/images/companies/
// 2. Add a new entry in the companies array with the company details
// 3. The logo path should be relative to the public directory 