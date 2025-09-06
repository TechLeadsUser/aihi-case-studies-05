export type SuccessStory = {
  slug: string;
  title: string;
  industry: string;
  excerpt: string;
  thumbnail: string;   // card image
  hero?: string;       // optional banner for inner page
  techStackVersion?: string;
  modules?: string[];
  customerOverview?: string;
  sections: {
    businessRequirements: string[];
    solutions: string[];
    benefits: string[];
  };
};

export const successStories: SuccessStory[] = [
  /* 1) Oracle EBS Implementation – Legacy Consolidation */
  {
    slug: "oracle-ebs-legacy-consolidation",
    title: "Oracle EBS Implementation consolidating disparate Legacy Systems",
    industry: "Interior Construction & Manufacturing",
    excerpt:
      "Unified FIN/HRMS/MFG/SCM across multiple units with real-time reporting, automation and a scalable global model.",
    thumbnail: "/images/success/ebs-legacy-card.jpg",
    hero: "/images/success/ebs-legacy-hero.jpg",
    techStackVersion: "Rel. 12.2.10",
    modules: ["FIN", "HRMS", "MFG", "SCM"],
    customerOverview:
      "A leading interior contractor with multiple manufacturing and contracting units.",
    sections: {
      businessRequirements: [
        "Implement unified Financial, Supply Chain and HR modules across all units.",
        "Improve reporting with real-time visibility across financial and supply chain processes.",
        "Automate to reduce manual data entry and operational costs in legacy systems.",
        "Deliver a scalable solution that grows with global operations."
      ],
      solutions: [
        "Configured multi-org and many inventory orgs; baseline setups.",
        "Converted 20+ master and transactional data elements from multiple legacy systems with mapping, extraction and validation.",
        "Designed & tested multiple custom procurement workflows for compatibility.",
        "Ran extensive user enablement with training manuals to overcome initial resistance."
      ],
      benefits: [
        "Optimized MFG structure enabling global order release.",
        "Secured, role-based access with SSO.",
        "Automated period-end closing, reporting and notifications.",
        "Reduced implementation time and migration risk; customizable dashboards.",
        "Integrated, robust platform supporting growth and long-term value."
      ]
    }
  },

  /* 2) Oracle EBS Support & Enhancements */
  {
    slug: "oracle-ebs-support-enhancements",
    title: "Oracle EBS Support & Enhancements Project",
    industry: "Manufacturing",
    excerpt:
      "Stabilized and enhanced EBS (FIN/SCM/HRMS). Introduced integrations, SOPs, reporting and 40% effort savings.",
    thumbnail: "/images/success/ebs-support-card.jpg",
    hero: "/images/success/ebs-support-hero.jpg",
    techStackVersion: "Rel. 12.2.9",
    modules: ["FIN", "HRMS", "SCM"],
    customerOverview:
      "A growing American Telecom manufacturer with presence across America, Europe and APAC.",
    sections: {
      businessRequirements: [
        "Support existing EBS across FIN, SCM and HRMS in multiple locations.",
        "Centralize platform for managing financial data.",
        "Modernize operations, streamline processes and improve analytics for decisions.",
        "Streamline vendor management (i-Supplier).",
        "Enhance AR module for efficient cashflow."
      ],
      solutions: [
        "Closed gaps with best practices and AIM-based enhancements.",
        "Built complex integrations across Supply Chain, Finance, HR and 3rd-party apps for near real-time sync.",
        "Provided application-level access and real-time insights for Production Quality & Performance.",
        "Established SOPs for recurring period-end closing activities."
      ],
      benefits: [
        "Optimized end-to-end processes across FIN/SCM/MFG/HR; better UX.",
        "Reduced interfacing risk with real-time visibility and customizable reports/dashboards.",
        "Integrated GL and effective consolidation/close.",
        "Reporting reduced manual effort and costs by up to 40%.",
        "Established patch upgrade and post-clone mechanisms.",
        "Seamless OIC integrations with 3rd-party systems."
      ]
    }
  },

  /* 3) Oracle Fusion HCM – PeopleSoft to Oracle */
  {
    slug: "oracle-fusion-hcm-peoplesoft-to-oracle",
    title: "Oracle Fusion HCM Implementation & Support (PeopleSoft to Oracle)",
    industry: "HR Services",
    excerpt:
      "Process re-engineering, secure RBAC, and robust migration strategy from PeopleSoft to Oracle Cloud HCM.",
    thumbnail: "/images/success/hcm-fusion-card.jpg",
    hero: "/images/success/hcm-fusion-hero.jpg",
    techStackVersion: "R13 19C",
    modules: ["Core", "ORC", "Absence", "Payroll", "Talent"],
    customerOverview: "A HR Services company.",
    sections: {
      businessRequirements: [
        "Re-engineer HR processes to align with out-of-the-box Oracle functionality—minimize customizations.",
        "Implement configurations/extensions for unique needs while adhering to Oracle standards.",
        "Provide one self-service portal for employees (incl. learning).",
        "Ensure regulatory compliance for audits."
      ],
      solutions: [
        "Defined data model and migration strategy (mapping, transformation, validation) from PeopleSoft to Oracle Cloud HCM.",
        "Designed RBAC security for sensitive HR data and regulatory compliance.",
        "Managed roadmap & deployment using standard + custom solution packs across complexity tiers.",
        "Provided real-time managerial access and dashboards to improve quality & performance."
      ],
      benefits: [
        "Future-ready scalability for new modules and growth.",
        "Integration framework for seamless flow between Oracle HCM and 3rd-party systems.",
        "Compliance & certification management.",
        "Introduced role-based dashboards and functions.",
        "Developed reports/alerts tailored to business needs."
      ]
    }
  },

  /* 4) Oracle CX Cloud – Customer Service Transformation */
  {
    slug: "oracle-cx-cloud-implementation-support",
    title: "Oracle CX Cloud Implementation & Support",
    industry: "Manufacturing",
    excerpt:
      "Transformed Customer Service portal to Oracle CX Cloud with OIC integrations, analytics and subscription billing.",
    thumbnail: "/images/success/cx-cloud-1-card.jpg",
    hero: "/images/success/cx-cloud-1-hero.jpg",
    techStackVersion: "Oracle CX Cloud",
    modules: ["Sales", "Customers"],
    customerOverview:
      "A growing American Food Industry with presence in North America, Brazil and Europe.",
    sections: {
      businessRequirements: [
        "Transform legacy Customer Service portal to Oracle CX Cloud.",
        "Create service requests for defective products.",
        "Assign service requests to representatives.",
        "Integrate with Customer master systems.",
        "Implement Subscription Management with usage-based billing."
      ],
      solutions: [
        "Implemented Oracle CX Cloud to replace legacy portal.",
        "Enabled Service/Sales/Customers modules; loaded SR data from legacy via integrations.",
        "Built analytics and reporting for SR status and backlogs.",
        "Implemented Subscription Management to track warranty & usage-based billing.",
        "Integrated Customer master via OIC middleware."
      ],
      benefits: [
        "Large manual-effort reduction via inbound call automation.",
        "Secured, role-based access with SSO.",
        "Integrated solutions for Sales and Services.",
        "Lower maintenance effort after moving to digital cloud platform.",
        "≈$5M savings by automating data entry from inbound telesales calls."
      ]
    }
  },

  /* 5) Oracle CX Cloud – Subscription & OIC Integrations (variant) */
  {
    slug: "oracle-cx-cloud-subscription-oic",
    title: "Oracle CX Cloud Implementation & Support — Subscription & OIC",
    industry: "Manufacturing",
    excerpt:
      "Focused case on subscription billing, OIC integrations and CS automation delivering measurable savings.",
    thumbnail: "/images/success/cx-cloud-2-card.jpg",
    hero: "/images/success/cx-cloud-2-hero.jpg",
    techStackVersion: "Oracle CX Cloud",
    modules: ["Sales", "Customers"],
    customerOverview:
      "Same portfolio—expanded program emphasizing subscription billing and OIC connectivity.",
    sections: {
      businessRequirements: [
        "Usage-based subscription management and warranty tracking.",
        "Seamless SR intake and routing from inbound calls.",
        "Data unification across customer, sales and service."
      ],
      solutions: [
        "CX Cloud + OIC patterns for SR load, customer master sync and downstream updates.",
        "Billing/invoicing logic aligned to usage and warranty contexts.",
        "Operational analytics to monitor backlog, SLAs and throughput."
      ],
      benefits: [
        "Faster SR turnaround and better SLA adherence.",
        "Unified customer data across touchpoints.",
        "Sustained OPEX reduction from automated intake and billing."
      ]
    }
  }
];