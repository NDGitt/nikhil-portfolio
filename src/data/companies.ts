interface Company {
  name: string;
  logo: string;
  url?: string;
  role?: string;
  period?: string;
  impact?: {
    other?: string[];
  };
  partners?: Array<{
    name: string;
    logo: string;
  }>;
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
        '💡 Led strategic analytics and product initiatives for Fortune 100 pharma clients',
        '🚀 Built automation tools and alignment platforms that saved $1M+ and generated $600K+ in new business',
        '🌍 Launched ZS India\'s first pro bono consulting arm, impacting 500K+ lives'
      ]
    }
  },
  {
    name: 'Global Alliance for Mass Entrepreneurship (GAME)',
    logo: '/images/companies/game-logo.png',
    url: 'https://massentrepreneurship.org',
    role: 'Senior Product Manager',
    period: '2020-2022',
    impact: {
      other: [
        '🚀 Built India’s first accelerator for small and medium-sized businesses (SMBs), backed by the Gates and Rockefeller Foundations',
        '📈 Launched GTM programs that drove $23M in revenue and created 2,000+ jobs',
        '💰 Scaled monetization from 0 to $200K ARR through pricing, partnerships, and B2B strategy'
      ]
    },
    partners: [
      {
        name: 'Bill & Melinda Gates Foundation',
        logo: '/images/partners/gates-foundation-logo.png'
      },
      {
        name: 'Rockefeller Foundation',
        logo: '/images/partners/rockefeller-logo.png'
      }
    ]
  },
  {
    name: 'Vellom',
    logo: '/images/companies/vellom-logo.png',
    url: 'https://vellom.com',
    role: 'Independent Consultant - Product and Strategy',
    period: '2022-2023',
    impact: {
      other: [
        '💼 Overhauled cash flow and HR systems for SMBs, cutting cash cycles by 60% and hiring time by 50%',
        '📊 Uncovered $100M in untapped government funding; insights shaped national entrepreneurship strategy with McKinsey'
      ]
    },
    partners: [
      {
        name: 'McKinsey & Company',
        logo: '/images/partners/mckinsey-logo.png'
      }
    ]
  },
  {
    name: 'Epson',
    logo: '/images/companies/epson-logo.png',
    url: 'https://epson.com',
    role: 'Product Management MBA Intern',
    period: 'Summer 2024',
    impact: {
      other: [
        '📊 Defined GTM & pricing for $280M healthcare scanner segment',
        '📈 Built Excel KPI dashboards — adopted by sales & marketing leadership',
        '🤝 Proposed vendor partnership model — projected to grow scanner sales by 20% YoY'
      ]
    }
  }
];

// You can add more companies by following the same format above
// Make sure to:
// 1. Add the company logo file to /public/images/companies/
// 2. Add a new entry in the companies array with the company details
// 3. The logo path should be relative to the public directory 