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
    name: 'Liberate',
    logo: '/images/companies/liberate-logo.png',
    url: 'https://www.liberateinc.com',
    role: 'AI Agent Product Manager',
    period: 'Jan 2025–Present',
    impact: {
      other: [
        '🏢 Building AI agents that automate FNOL, claims, and ops for enterprise insurance carriers at a $72M-backed startup',
        '🔍 Running discovery and co-design workshops with enterprise customers to scope use cases and turn business needs into agent requirements',
        '🚀 Owning end-to-end AI deployments from kickoff to adoption, as the single point of contact between customers and engineering'
      ]
    }
  },
  {
    name: 'Vellom',
    logo: '/images/companies/vellom-logo.png',
    url: 'https://vellom.com',
    role: 'Independent Consultant - AI Product and Strategy',
    period: '2022-2023',
    impact: {
      other: [
        '🤖 Built LLM-powered tools for SMBs, automating cash flow tracking, invoice parsing, and WhatsApp-based collections; reduced cash cycles by 60%',
        '⚙️ Deployed scalable AI workflows, processing PDFs and emails with GPT-3 to automate real-world business tasks'
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
    name: 'Global Alliance for Mass Entrepreneurship (GAME)',
    logo: '/images/companies/game-logo.png',
    url: 'https://massentrepreneurship.org',
    role: 'Senior Product Manager',
    period: '2020-2022',
    impact: {
      other: [
        '🚀 Built India\u2019s first accelerator for small and medium-sized businesses (SMBs), backed by the Gates and Rockefeller Foundations',
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
  }
];

// You can add more companies by following the same format above
// Make sure to:
// 1. Add the company logo file to /public/images/companies/
// 2. Add a new entry in the companies array with the company details
// 3. The logo path should be relative to the public directory
