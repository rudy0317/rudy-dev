export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  images?: string[];
}

export interface ProjectItem {
  title: string;
  category: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
  images?: string[];
}

export interface PortfolioData {
  profile: {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    github: string;
    linkedin: string;
    photo: string;
    summary: string;
  };
  stats: { value: string; label: string }[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  groupedCertifications: {
    category: string;
    color: string;
    certs: { name: string; pdf: string }[];
  }[];
  skills: {
    webDev: string[];
    devops: string[];
    networking: string[];
    ftth: string[];
  };
  education: {
    institution: string;
    degree: string;
    period: string;
    detail: string;
  }[];
  labels: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    contact: string;
    expTitle: string;
    expSub: string;
    projTitle: string;
    projSub: string;
    skillsTitle: string;
    skillsSub: string;
    eduTitle: string;
    certTitle: string;
  };
}

export const PORTFOLIO_DATA: PortfolioData = {
  labels: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    contact: "Get In Touch",
    expTitle: "Work Experience",
    expSub: "Field-tested in telecom, FTTH infrastructure, & enterprise software.",
    projTitle: "Featured Projects",
    projSub: "Telecom FTTH operations, 600-core PLN splicing, hospital networks, & internal tools.",
    skillsTitle: "Technical Capabilities",
    skillsSub: "Fullstack development + FTTH telecom network operational skills.",
    eduTitle: "Education",
    certTitle: "Certifications & Verification"
  },
  profile: {
    name: "RUDY",
    title: "Fullstack Developer & Infrastructure-Aware Engineer",
    location: "Banjarmasin, South Kalimantan, Indonesia",
    phone: "089630078446",
    email: "rudy2310010148@gmail.com",
    github: "https://github.com/rudy0317",
    linkedin: "https://www.linkedin.com/in/rudyyy",
    photo: "assets/FotoDiri.jpg",
    summary: "I am Rudy, a Fullstack Developer and Infrastructure-Aware Engineer combining software development expertise with hands-on field network engineering. Operational experience spans FTTH access network maintenance (ODP/ODC/FTM), 600-core PLN fiber optic fusion splicing, and enterprise MikroTik RouterOS routing. At Telkom Akses and across various infrastructure initiatives, this deep network domain knowledge is leveraged to architect robust, high-performance web applications (Laravel, React, CodeIgniter) seamlessly integrated with core infrastructure."
  },
  stats: [
    { value: "3.80", label: "GPA at UNISKA MAB (Sem 1-5)" },
    { value: "5+ YRS", label: "Field & Dev Experience" },
    { value: ">99%", label: "SLA Network Recovery" },
    { value: "1000+", label: "Core FO Spliced (PLN & Outage)" }
  ],
  experience: [
    {
      company: "Telkom Akses",
      role: "Web Developer / Fullstack & DevOps",
      period: "May 2026 - Present",
      location: "Banjarmasin, South Kalimantan",
      points: [
        "Develop and maintain fullstack web applications for operational & infrastructure monitoring.",
        "Handle server deployment, environment configuration, and infrastructure management.",
        "Bridge FTTH network systems & routing architectures with web-based internal tools.",
        "Ensure application performance, high stability, and seamless system integration."
      ]
    },
    {
      company: "PT Upaya Tehnik",
      role: "Network Engineer - Access / IOAN",
      period: "Jan 2023 - Apr 2026",
      location: "Banjarmasin, South Kalimantan",
      points: [
        "Troubleshoot FTTH issues from customer side to optical network (ODP-ODC-FTM).",
        "Verify service status via OLT (ONT status, LOS/LOF, VLAN binding).",
        "Perform fault isolation prior to escalation to minimize downtime.",
        "Handle outage recovery and consistently maintain SLA >99%."
      ],
      images: ["assets/Upaya Teknik/Evidance.jpeg"]
    },
    {
      company: "PT Upaya Tehnik",
      role: "Quality Engineer - FTTH Access",
      period: "Apr 2021 - Dec 2022",
      location: "Banjarmasin, South Kalimantan",
      points: [
        "Supported rapid network recovery during major mass outages.",
        "Cross-checked field data with FTTH optical topology maps.",
        "Collaborated with operations team to uphold strict network quality standards."
      ],
      images: ["assets/Upaya Teknik/QE.jpeg"]
    },
    {
      company: "PT Upaya Tehnik",
      role: "Network Assurance (Internship)",
      period: "Jan 2020 - Mar 2020",
      location: "Banjarmasin, South Kalimantan",
      points: [
        "Assisted in service recovery and optical line quality verification.",
        "Learned network assurance procedures and escalation workflows."
      ]
    }
  ] as ExperienceItem[],
  projects: [
    {
      title: "Campus & Hospital Network Infrastructure (MikroTik)",
      category: "Networking & Infra",
      period: "Feb 2026",
      location: "Banjarmasin",
      description: [
        "Installed structured cabling and configured core MikroTik routers for campus & hospital local networks.",
        "Implemented VLAN segmentation, PPPoE server, and PCQ / Queue Tree bandwidth management.",
        "Ensured stable network connectivity with zero downtime during daily hospital operations."
      ],
      tech: ["MikroTik RouterOS", "VLAN", "PPPoE", "Queue Tree", "PCQ"],
      images: ["assets/Kampus dan Hospital/IKG.jpeg", "assets/Kampus dan Hospital/Setting.jpeg"]
    },
    {
      title: "Fiber Optic Jointer - PLN 600-Core Cable Project",
      category: "FTTH & Fiber",
      period: "Dec 2025",
      location: "Banjarmasin",
      description: [
        "Executed high-precision fusion splicing for 600-core fiber optic trunk cable in PLN infrastructure.",
        "Maintained minimal signal loss (<0.02dB per joint) across all optical lines.",
        "Ensured strict compliance with K3 safety and technical standards during high-risk field operations."
      ],
      tech: ["Fusion Splicer", "OTDR", "600-Core Cable", "FTM", "K3 Safety"],
      images: ["assets/PLN/Evidance.jpg", "assets/PLN/PLN FO.png"]
    },
    {
      title: "Fullstack FTTH & Server Monitoring Web Apps",
      category: "Fullstack & DevOps",
      period: "2026",
      location: "Telkom Akses",
      description: [
        "Built web-based dashboard connecting OLT/Router status APIs with real-time operational UI.",
        "Configured Docker containers and automated server deployment for internal tools."
      ],
      tech: ["Laravel", "React", "Docker", "REST API", "TailwindCSS"]
    },
    {
      title: "Enterprise Home Lab Network Infrastructure",
      category: "Networking & Infra",
      period: "2021 - Present",
      location: "Banjarmasin",
      description: [
        "Built personal enterprise-grade home lab to simulate VLAN, PPPoE authentication, and failover routing.",
        "Tested containerized network services using Docker & Linux environments."
      ],
      tech: ["MikroTik", "Linux Server", "Docker", "VLAN", "WireGuard"],
      images: ["assets/Homelab/Mikrotikjpg.jpg"]
    }
  ] as ProjectItem[],
  groupedCertifications: [
    {
      category: "Cisco Networking Academy",
      color: "var(--accent-cyan)",
      certs: [
        { name: "CCNA - Enterprise Networking & Security", pdf: "assets/CCNA/CCNA-_Enterprise_Networking-_Security-_and_Automation_certificate_rudy2310010148-gmail-com_45135a13-4536-4d12-9e51-85cd76c021bc.pdf" },
        { name: "CCNA - Introduction to Networks", pdf: "assets/CCNA/CCNA-_Introduction_to_Networks_certificate_rudy2310010148-gmail-com_11ede699-5583-4031-b7b7-80dd898c1515.pdf" },
        { name: "CCNA - Switching & Routing Essentials", pdf: "assets/CCNA/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_rudy2310010148-gmail-com_bd66296d-8ceb-455d-b654-8e3e4c83c8ce.pdf" },
        { name: "Cisco Network Basics", pdf: "assets/Cisco Network Basics/Networking_Basics_certificate_rudy2310010148-gmail-com_73275acc-a7e6-4f57-8066-b184300188a0.pdf" },
        { name: "Cisco Cyber Security Essentials", pdf: "assets/Cisco Cyber Security/Introduction_to_Cybersecurity_certificate_rudy2310010148-gmail-com_c6555847-04db-45cf-8f8d-59590e91fef2.pdf" }
      ]
    },
    {
      category: "Telkom Akses Certifications",
      color: "var(--accent-emerald)",
      certs: [
        { name: "Assurance Basic", pdf: "assets/Telkom Akses/Assurance Basic.pdf" },
        { name: "Provisioning Basic", pdf: "assets/Telkom Akses/Provisioning Basic.pdf" },
        { name: "Service Deploy Technician", pdf: "assets/Telkom Akses/Serivce Deploy Technician.pdf" },
        { name: "Indihome 3P Network", pdf: "assets/Telkom Akses/Indihome 3P.pdf" },
        { name: "K3 Basic & Safety Standards", pdf: "assets/Telkom Akses/K3.pdf" },
        { name: "Code of Conduct", pdf: "assets/Telkom Akses/Code of Conduct.pdf" },
        { name: "E-Learning AKHLAK", pdf: "assets/Telkom Akses/E-Learning Akhlak.pdf" },
        { name: "Effective Communication & Interpersonal Skill", pdf: "assets/Telkom Akses/Efective Communication & Interpersonal Skill.pdf" }
      ]
    },
    {
      category: "IBM Credly Certifications",
      color: "var(--accent-amber)",
      certs: [
        { name: "Code Generation & Optimization Using IBM", pdf: "assets/IBM/Credly Code Generation and Optimization Using IBM.pdf" },
        { name: "Data Classification & Security", pdf: "assets/IBM/Data Classification .pdf" }
      ]
    },
    {
      category: "Academic & University",
      color: "var(--accent-cyan)",
      certs: [
        { name: "Web Development Practicum 2", pdf: "assets/Praktikum Kampus/Praktikum Pemrograman Web 2.pdf" },
        { name: "Data Science Certificate", pdf: "assets/Praktikum Kampus/Data Science.pdf" },
        { name: "Graphic Design Practicum", pdf: "assets/Praktikum Kampus/Praktikum Desain Grafis.pdf" },
        { name: "Commercial Suite Application Practicum (PPN)", pdf: "assets/Praktikum Kampus/Praktikum Program Paket Niaga (ppn).pdf" }
      ]
    }
  ],
  skills: {
    webDev: ["Laravel", "React.js", "TypeScript", "CodeIgniter", "Python", "REST API", "TailwindCSS", "HTML5/CSS3"],
    devops: ["Docker", "Linux Server Admin", "Git / GitHub", "Nginx", "CI/CD (Learning)", "System Deployment"],
    networking: ["TCP/IP", "VLAN", "Routing & Switching", "MikroTik RouterOS", "PPPoE", "Queue Tree / PCQ"],
    ftth: ["OLT (ZTE/Huawei)", "ONT Config", "ODP / ODC / FTM", "OTDR Splicing", "Fault Isolation", "SLA Assurance"]
  },
  education: [
    {
      institution: "Universitas Islam Kalimantan Selatan (UNISKA MAB)",
      degree: "Informatics Engineering",
      period: "Expected 2027",
      detail: "GPA: 3.8 / 4.0 (Semester 1-5)"
    },
    {
      institution: "SMKN 1 Banjarmasin",
      degree: "Computer & Network Engineering (TKJ)",
      period: "2018 - 2021",
      detail: "Final Score: 84.50"
    }
  ]
};
