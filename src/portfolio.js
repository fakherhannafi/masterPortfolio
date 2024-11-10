/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Fakher HANNAFI",
  logo_name: "FakherHannafi",
  nickname: "AI/Data Engineer, Blogger, Speaker",
  subTitle:
    "I am passionate about Data and AI, dedicated to helping companies leverage cutting-edge technology to meet their business needs. As a freelance consultant, I specialize in designing, developing, and managing AI agents and retrieval-augmented generation (RAG) systems. With a commitment to continuous learning, I actively explore cloud-native technologies, earn certifications, and contribute to industry communities. Beyond tech, I am a violinist and enjoy exploring topics related to investment and effective communication.",
  resumeLink:
    "https://drive.google.com/file/d/1za2GpmcdYKLq47pR0IZt_rqDzJ_kxiKl/view?usp=sharing",
  portfolio_repository: "https://github.com/fakherhannafi",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/fakher-hannafi/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Medium",
    link: "https://fakherhannafi.medium.com/",
    fontAwesomeIcon: "fa-medium", // Reference https://fontawesome.com/icons/medium?style=brands
    backgroundColor: "#12100E", // Reference https://simpleicons.org/?q=medium
  },
  {
    name: "Github",
    link: "https://github.com/fakherhannafi",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gitlab",
    link: "https://gitlab.com/fakhrovski",
    fontAwesomeIcon: "fa-gitlab", // Reference https://fontawesome.com/icons/gitlab?style=brands
    backgroundColor: "#FCA121", // Reference https://simpleicons.org/?q=gitlab
  },
  /*   {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UChRe72e5OFI0-3iVl5Ph4Pw",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  }, */
  /*   {
    name: "Gmail",
    link: "mailto:fakher.hannafi@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/fakhrovski",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  }, */
];

const skills = {
  data: [
    {
      title: "Data for Generative AI  ",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Empower Intelligent Data Retrieval: Implement and manage advanced RAG systems using Langchain, Elastic, and any LLM, enabling streamlined information access.",
        "⚡ Create Intelligent Virtual Assistants: Design and develop AI agents, from virtual assistants to workflow orchestration tools, using powerful frameworks like AutoGen and LangGraph.",
        "⚡ Optimize AI Performance and Financial Management: Oversee Agent and RAG platform operations with comprehensive monitoring, usage tracking, response evaluation and billing alerts for enhanced FinOps efficiency.        ",
        "⚡ Strategize Data Governance: Craft data governance strategies, encompassing metadata management, master data control, and data dictionaries for clear, consistent data usage.",
        "⚡ Streamline Model Deployment: Develop robust MLOps pipelines, seamlessly deploying machine learning models into production to drive AI-powered outcomes.",
      ],
      softwareSkills: [
        {
          skillName: "Elastic",
          fontAwesomeClassname: "simple-icons:elastic",
          style: {
            color: "#66b5ae",
          },
        },
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MySql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#00758F",
          },
        },
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C80F",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: {
            color: "#FFA500",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "Cloud Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Implement Cloud Based solutions to help companies find the best way to migrate seamlessly to the cloud",
        "⚡ Rehost/Replatform applications on IaaS instances along with integration of databases",
        "⚡ Administration of AWS accounts",
        "⚡ Ensure compliance in AWS Accounts with policy as code tools",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Devops",
      fileName: "DevopsImg",
      skills: [
        "⚡ Provision infrastucture with IaC tools",
        "⚡ Implement CI/CD pipelines",
        "⚡ Build Monitoring and Logging Systems for better observability",
        "⚡ Automate compliance with Policy As Code",
        "⚡ Build containerized application and run them in orchestrated platforms",
        "⚡ Promote GitOps approach for Operation Teams",
        "⚡ Centralize secret management in one place to improve access control governance",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            backgroundColor: "transparent",
            color: "#f34f29",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            backgroundColor: "transparent",
            color: "#ff0000",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            backgroundColor: "transparent",
            color: "#0052CC",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            backgroundColor: "transparent",
            color: "#623CE4",
          },
        },
        {
          skillName: "Vault",
          fontAwesomeClassname: "simple-icons:vault",
          style: {
            backgroundColor: "transparent",
            color: "#000000",
          },
        },
        {
          skillName: "Jfrog Artifactory",
          fontAwesomeClassname: "simple-icons:jfrog",
          style: {
            backgroundColor: "transparent",
            color: "#8Dc63F",
          },
        },
      ],
    },
    {
      title: "Fullstack Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop AI Agents Frontends with integration with existing Apps",
        "⚡ Build responsive website front end using popular web frameworks",
        "⚡ Creat Restful APIs with NodeJs, Express, Flask and FastAPI",
      ],
      softwareSkills: [
        {
          skillName: "Swagger",
          fontAwesomeClassname: "simple-icons:swagger",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#00a400",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            backgroundColor: "transparent",
            color: "#092E20",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications with Adobe XD",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Use Adobe After Effect for marketing videos",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Adobe After Effect",
    //       fontAwesomeClassname: "simple-icons:adobe",
    //       style: {
    //         color: "#ff0000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/Fakher_1919",
    },
    {
      siteName: "Udemy",
      iconifyClassname: "simple-icons:udemy",
      style: {
        color: "#C0362C",
      },
      profileLink: "https://gitlab.com/fakhrovski",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/fakhrovski",
    },
    {
      siteName: "Gitlab",
      iconifyClassname: "simple-icons:gitlab",
      style: {
        color: "#C0362C",
      },
      profileLink: "https://gitlab.com/fakhrovski",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Carthage, SupCom, Tunisia",
      subtitle: "IT and Telecommunication Engineering",
      logo_path: "supcom.png",
      alt_name: "Supcom",
      duration: "2015 - 2018",
      descriptions: [
        "⚡ Supcom is a higher school of communication in Tunisia which is responsible for the training of engineers in the field of ICT.",
        "⚡ I have studied basic software engineering subjects like Data Structures, Algorithms, Programming/Modeling Languages, Network models, DBMS, Operating Systems, etc...",
        "⚡ Apart from this, I have done MOOCS based on IT market needs like Devops, Cloud Computing, Data Analytics and Full Stack Development.",
        "⚡ At Sup'Com, we focused not only on technical aspects but also on soft skills like management and communication.",
        "⚡ I have participated in a lot of academic projects, problem solving contests and security hackathons",
        "⚡ I led a music club and animated a lot of events.",
      ],
      website_link: "https://www.supcom.tn/",
    },
    {
      title: "Preparatory Institute for engineering studies IPEIT, Tunisia",
      subtitle: "Advanced Mathematics and Physics",
      logo_path: "ipeit.png",
      alt_name: "IPEIT",
      duration: "2013 - 2015",
      descriptions: [
        "⚡ IPEIT is a higher education and research establishment authorized to provide preparatory training to students who will take national competitions to integrate the training cycles of engineers.",
        "⚡ I have studied Advanced Geometry, Algebra, Electromagnetism, Thermodynamics, Chemistry, Optics, Algorithms, etc...",
      ],
      website_link: "http://www.ipeit.rnu.tn/",
    },
    {
      title: "National Conservatory for Popular Arts Music",
      subtitle: "Diploma in Arabic Music",
      logo_path: "sol.jpg",
      alt_name: "SOL",
      duration: "2005 - 2010",
      descriptions: [
        "⚡ I passed the national exam and graduated as music teacher.",
        "⚡ I Learned how to interpret sheet music, guessing notes, playing violin, piano and percussions.",
        "⚡ I participated in several national events and competitions and we obtained several national prizes.",
      ],
      website_link:
        "https://www.ecoles.com.tn/culture/centre-national-de-musique-et-des-arts-populaires",
    },
  ],
};

const profCerts = {
  certifications: [
    {
      title: "AWS Data Analytics",
      subtitle: "Cloud Native Computing Foundation",
      logo_path: "ckad_from_cncfsite.png",
      certificate_link:
        "https://www.youracclaim.com/badges/c31c8fb5-c113-4a03-b29f-95cba02b3196/public_url",
      alt_name: "DataAnal",
      color_code: "#e1e1e1",
      credly_id: "c31c8fb5-c113-4a03-b29f-95cba02b3196",
    },
    {
      title: "AWS Devops Professional",
      subtitle: "Cloud Native Computing Foundation",
      logo_path: "ckad_from_cncfsite.png",
      certificate_link:
        "https://www.youracclaim.com/badges/408f4823-e158-4803-a77a-190d0c3f0672/public_url",
      alt_name: "CKAD",
      color_code: "#e1e1e1",
      credly_id: "408f4823-e158-4803-a77a-190d0c3f0672",
    },
    {
      title: "Solutions Architect Associate",
      subtitle: "Amazon Web Services",
      logo_path: "AWS-SolArchitect-Associate-2020.png",
      certificate_link:
        "https://www.youracclaim.com/badges/73b73dcb-1183-4262-b2f0-34bc0c28b173/public_url",
      alt_name: "Certified Solutions Architect Associate",
      color_code: "#e1e1e1",
      credly_id: "73b73dcb-1183-4262-b2f0-34bc0c28b173",
    },
    {
      title: "Sysops Administrator Associate",
      subtitle: "Amazon Web Services",
      logo_path: "AWS-SysOpAdmin-Associate-2020.png",
      certificate_link:
        "https://www.youracclaim.com/badges/53396833-983b-49e5-876f-17085aefe4dc/public_url",
      alt_name: "Certified Administrator Associate",
      color_code: "#e1e1e1",
      credly_id: "53396833-983b-49e5-876f-17085aefe4dc",
    },
    {
      title: "Cloud Practioner",
      subtitle: "Amazon Web Services",
      logo_path: "AWS-CloudPractitioner-2020.png",
      certificate_link:
        "https://www.youracclaim.com/badges/cbbd4474-41eb-4dc3-a92c-f0a0e6dc5681/public_url",
      alt_name: "Certified Cloud Practioner",
      color_code: "#e1e1e1",
      credly_id: "cbbd4474-41eb-4dc3-a92c-f0a0e6dc5681",
    },
    {
      title: "Developer Associate",
      subtitle: "Amazon Web Services",
      logo_path: "AWS-Developer-Associate.png",
      certificate_link:
        "https://www.youracclaim.com/badges/874eda02-a769-4dd0-8d17-a2de1231acc0/public_url",
      alt_name: "Certified Developer Associate",
      color_code: "#e1e1e1",
      credly_id: "874eda02-a769-4dd0-8d17-a2de1231acc0",
    },
    {
      title: "AWS Well-Architected Proficient",
      subtitle: "Technical Partner Accreditation",
      certificate_link:
        "https://www.youracclaim.com/badges/bd08a3e9-6aa2-4697-b686-9b5bf03b22ed/public_url",
      alt_name: "TechnicalPart",
      color_code: "#e1e1e1",
      credly_id: "bd08a3e9-6aa2-4697-b686-9b5bf03b22ed",
    },
    {
      title: "AWS Partner: Accreditation (Business)",
      subtitle: "Business Partner Accreditation",
      certificate_link:
        "https://www.youracclaim.com/badges/06d28fc3-4879-4a33-aa7d-39aae9bbd65a/public_url",
      alt_name: "BusinessPart",
      color_code: "#e1e1e1",
      credly_id: "06d28fc3-4879-4a33-aa7d-39aae9bbd65a",
    },
    {
      title: "AWS Partner: Accreditation (Technical)",
      subtitle: "Technical Partner Accreditation",
      certificate_link:
        "https://www.youracclaim.com/badges/6c067912-6151-4039-bb8d-ab900e3fc960/public_url",
      alt_name: "TechnicalPart",
      color_code: "#e1e1e1",
      credly_id: "6c067912-6151-4039-bb8d-ab900e3fc960",
    },

    {
      title: "CKA: Certified Kubernetes Administrator",
      certificate_link:
        "https://www.youracclaim.com/badges/2d935ca6-1c6c-48b0-8977-74d6d5ca1bd4/public_url",
      alt_name: "CKA",
      color_code: "#e1e1e1",
      credly_id: "2d935ca6-1c6c-48b0-8977-74d6d5ca1bd4",
    },
    {
      title: "CKAD",
      certificate_link:
        "https://www.youracclaim.com/badges/d7b257ff-3b0e-43e1-a915-97ead07f0cb9/public_url",
      alt_name: "CKAD",
      color_code: "#e1e1e1",
      credly_id: "d7b257ff-3b0e-43e1-a915-97ead07f0cb9",
    },
    {
      title: "Microsoft Certified: Azure Solutions Architect Expert",
      certificate_link:
        "https://www.youracclaim.com/badges/66d82017-2f61-4768-a215-9e11fef9ba88/public_url",
      alt_name: "SolArchiAzure",
      color_code: "#e1e1e1",
      credly_id: "66d82017-2f61-4768-a215-9e11fef9ba88",
    },
    {
      title: "Microsoft Certified: Azure Security Engineer Associate",
      certificate_link:
        "https://www.youracclaim.com/badges/c40afcd7-1c63-4928-84c5-b3eff01712ee/public_url",
      alt_name: "SecEngAzure",
      color_code: "#e1e1e1",
      credly_id: "c40afcd7-1c63-4928-84c5-b3eff01712ee",
    },

    /*     {
      title: "Jenkins Engineer",
      subtitle: "Jenkins",
      logo_path: "jenkins.png",
      certificate_link:
        "https://certificates.cloudbees.com/90df21b8-f6ab-45bc-a2be-e443f50f4fb1",
      alt_name: "Vault",
      color_code: "#e1e1e1",
      credly_id: "none40"
    }, */

    {
      title: "Devops Engineer Expert",
      subtitle: "Microsoft Azure",
      logo_path: "CERT-Expert-DevOps-Engineer.png",
      certificate_link:
        "https://www.youracclaim.com/badges/48d0d4e2-a82e-4928-823a-1cf37c6d3b67/public_url",
      alt_name: "Devops Engineer Expert",
      color_code: "#e1e1e1",
      credly_id: "48d0d4e2-a82e-4928-823a-1cf37c6d3b67",
    },
    {
      title: "Administrator Associate",
      subtitle: "Microsoft Azure",
      logo_path: "azure-administrator-associate.png",
      certificate_link:
        "https://www.youracclaim.com/badges/25d7ebc3-5ac7-496a-bef3-d612c81605fc/public_url",
      alt_name: "Administrator Associate",
      color_code: "#e1e1e1",
      credly_id: "25d7ebc3-5ac7-496a-bef3-d612c81605fc",
    },
    {
      title: "Developer Associate",
      subtitle: "Microsoft Azure",
      logo_path: "azure-developer-associate-600x600.png",
      certificate_link:
        "https://www.youracclaim.com/badges/55b2bdcc-a7f6-484f-874c-d8d4d03fee27/public_url",
      alt_name: "Developer Associate",
      color_code: "#e1e1e1",
      credly_id: "55b2bdcc-a7f6-484f-874c-d8d4d03fee27",
    },
    {
      title: "Data Fundamentals",
      subtitle: "Microsoft Azure",
      logo_path: "azure-data-fundamentals-600x600.png",
      certificate_link:
        "https://www.youracclaim.com/badges/c025f70b-6feb-4898-bff3-36bf24e92d45/public_url",
      alt_name: "Data Fundamentals",
      color_code: "#e1e1e1",
      credly_id: "c025f70b-6feb-4898-bff3-36bf24e92d45",
    },
    {
      title: "Azure Fundamentals",
      subtitle: "Microsoft Azure",
      logo_path: "Azure.Fundamental_Icon.png",
      certificate_link:
        "https://www.youracclaim.com/badges/a5599282-f742-4f85-b955-58c65c26d89d/public_url",
      alt_name: "azure fundamentals",
      color_code: "#e1e1e1",
      credly_id: "a5599282-f742-4f85-b955-58c65c26d89d",
    },
    {
      title: "Data Analyst Associate",
      subtitle: "Microsoft",
      logo_path: "CERT-Associate-Data-Analyst-600x600.png",
      certificate_link:
        "https://www.youracclaim.com/badges/3e0f2d52-9ff7-49c5-976f-951c05477c4a/public_url",
      alt_name: "data analyst",
      color_code: "#e1e1e1",
      credly_id: "3e0f2d52-9ff7-49c5-976f-951c05477c4a",
    },
    {
      title: "HashiCorp Certified: Vault Associate",
      certificate_link:
        "https://www.youracclaim.com/badges/684f3aef-2aea-43cd-8f85-9978889349a5/public_url",
      alt_name: "vaultHashicorp",
      color_code: "#e1e1e1",
      credly_id: "684f3aef-2aea-43cd-8f85-9978889349a5",
    },
    {
      title: "Terraform Associate",
      subtitle: "Hashicorp",
      logo_path: "Terraform-Associate-Badge.png",
      certificate_link:
        "https://www.youracclaim.com/badges/233f10be-b100-40ad-a69e-eb2cd526f9f3/public_url",
      alt_name: "Terraform",
      color_code: "#e1e1e1",
      credly_id: "233f10be-b100-40ad-a69e-eb2cd526f9f3",
    },
    {
      title: "Multi-cloud Network Engineer Associate",
      subtitle: "Aviatrix",
      logo_path: "aceAssociatetBadgeArtboard_1.png",
      certificate_link:
        "https://www.youracclaim.com/badges/ac46103b-c871-454a-8ea9-b5690390711f/public_url",
      alt_name: "aviatrix network engineer",
      color_code: "#e1e1e1",
      credly_id: "ac46103b-c871-454a-8ea9-b5690390711f",
    },
    {
      title: "Professional Scrum Master™ I (PSM I)",
      subtitle: "Aviatrix",
      logo_path: "aceAssociatetBadgeArtboard_1.png",
      certificate_link:
        "https://www.youracclaim.com/badges/9ca04e8d-3517-43f3-8d42-d452b7453175/public_url",
      alt_name: "psm",
      color_code: "#e1e1e1",
      credly_id: "9ca04e8d-3517-43f3-8d42-d452b7453175",
    },
    {
      title: "ITIL 4 ® Foundation",
      subtitle: "Itil4",
      logo_path: "aceAssociatetBadgeArtboard_1.png",
      certificate_link:
        "https://www.youracclaim.com/badges/38a2f393-c5a4-4fbf-b04b-67a95df29c71/public_url",
      alt_name: "psm",
      color_code: "#e1e1e1",
      credly_id: "38a2f393-c5a4-4fbf-b04b-67a95df29c71",
    },
    {
      title: "Certified SAFe® 5 Agilist",
      subtitle: "Safe 5",
      logo_path: "aceAssociatetBadgeArtboard_1.png",
      certificate_link:
        "https://www.youracclaim.com/badges/f2826cd8-e5ae-4c93-a205-b8f880282229/public_url",
      alt_name: "safe",
      color_code: "#e1e1e1",
      credly_id: "f2826cd8-e5ae-4c93-a205-b8f880282229",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data Network Principles",
      subtitle: "Institut Mines-Télécom",
      logo_path: "imt.jpg",
      certificate_link:
        "https://www.cvtrust.com/SmartDiploma/?xVyP15sFUKhhZYYSkTh/gZ+USyBrUQL+51c7cp1nHf9Qlno7xHUeqmlWDHvVj5gO",
      alt_name: "data-networks",
      color_code: "#e1e1e1",
      credly_id: "none10",
    },
    {
      title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1bniXNpOnMoTcBLoO0_LC1z-DEolj500N/view?usp=sharing",
      alt_name: "mlaz",
      color_code: "#e1e1e1",
      credly_id: "none11",
    },
    {
      title: "Angular Crash course for busy developers",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1Qr2uxmbdnQZwDLjUwPpCa36pZx_qjoXJ/view?usp=sharing",
      alt_name: "ng",
      color_code: "#e1e1e1",
      credly_id: "none12",
    },
    {
      title: "Rapid Prototyping with Ionic",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1rQibGI3GHGfIhJ-2JBEpzRGQraL7l9ga/view?usp=sharing",
      alt_name: "ng",
      color_code: "#e1e1e1",
      credly_id: "none13",
    },
    {
      title: "CCNA Routing and Switching",
      subtitle: "Cisco Networking Academy",
      logo_path: "ccna.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1AqrceRDKcIRLLVPJ2xljA4agOC0_PNCb/view?usp=sharing",
      alt_name: "ng",
      color_code: "#e1e1e1",
      credly_id: "none14",
    },
  ],
};

// Experience Page
const experience = {
  title: "My Core Mission",
  // subtitle: "BPCE Group ENGIE GRTGAZ",
  description:
    "I have collaborated with leading companies as Data Expert, primarily in the Financial and Energy sectors. My core mission is to maximize the value extracted from data, making it more accessible and impactful for end-users and businesses alike. Please see mission details below 👇",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Missions",
      experiences: [
        {
          title: "Data Consultant, Technical Lead",
          company: "BPCE BANK",
          company_url: "https://www.groupebpce.com/",
          logo_path: "bpce.png",
          duration: "August 2022 - PRESENT",
          location: "Paris, France",
          description:
            "I work as a tech lead to help customer build Data and AI services mainly for IT operation teams (around 2000 people).Elastic, Kafka, Openshift are core technologies. Missions: * Design and Develop first ever RAG for BPCE-IT entity to help users consume more efficiently internal knowledge. Auto-respond to service now ticket incidents and Chatbot integrations are two main usecases. We used Langchain, GPT 4o Mini and E5 multilingual NLP model for embedding.* Integrate Azure OpenAI for Elastic Observability Assistant. Usecases: Use natural language to query logs and create lens dashboards.* Lead the team technically by helping them adopt best practices of Software Development and Devops: Jira Confluence, Git, Jenkins, Docker, Ansible.* Presales with global production teams.* Onboarding teams around the world (US, Hong Kong, UK, Portugal) to Theia platform.* Help users interpret alerts (mainly fine-grained ones) generated by anomaly detection models. * Automate installation, configuration and deployment of Filebeat (data collection tool) on 40000 servers (Linux, Windows and AIX). * Design and implement data collection patterns for public cloud based and cloud native apps (Google Pubsub, Aws Sqs, Azure Event hub).",
          color: "#0879bf",
        },
        {
          title: "AWS Data Engineer",
          company: "BPI INVESTMENT BANK",
          company_url: "https://www.bpifrance.fr/",
          logo_path: "bpi.png",
          duration: "Jan 2022 - August 2022",
          location: "Paris, France",
          description:
            "Develop, build and run Data pipelines with aws data services for BPI France Client Counter. Key technologies: Glue, Athena, Redshift, Spark, Python, Gitlab, Jenkins, Datadog, Airflow.",
          color: "#0879bf",
        },
        {
          title: "AWS Data Architect",
          company: "ENGIE",
          company_url: "https://www.engie.com/",
          logo_path: "grtgaz.png",
          duration: "October 2020 - December 2021",
          location: "Paris, France",
          description:
            "I am working as a Sysops, Mlops in a Data Science team. I am also responsible for industrialization of critical Machine Learning Models.\n Data Engineering on Global Performance Cockpit Project aimed to raise operational/financial KPIs for the Top Management (Pyspark, Palantir Foundry, CommonDataHub). Design Data Governance Pattern for all GBU/BUs based on Collibra Software. Implement Collibra Edge and Data Quality for All group entities. Keywords: AWS EC2, Redshift, Glue, Lambda, CommonDataHub, Palantir Foundry, Python, Spark, Collibra Data Quality, Collibra Edge.",
          color: "#0879bf",
        },
        {
          title: "Senior Data Consultant, Speaker, Blogger",
          company: "DEVOTEAM REVOLVE",
          company_url: "https://devoteam.com/",
          logo_path: "devoteam.png",
          duration: "October 2020 - December 2021",
          location: "Paris, France",
          description:
            "I am working actively as a community builder. My role is to contribute to build a MLOPS service offer and help customers develop their ML maturity from small to big organizations. Mission: * Community Contributor * Help junior consultants onboard on AWS and Data. * Speaker in Salon Big Data in 2021 Edition. * Blogger. * Build Data Offer Proposition for the company",
          color: "#0879bf",
        },
        {
          title: "Junior Developer, Architect",
          company: "BPCE BANK",
          company_url: "https://www.bpce-it.fr/",
          logo_path: "bpce.png",
          duration: "April 2019 - Sept 2020",
          location: "Aix En Provence, France",
          description:
            "I have participated in lot of data and web projects during almost two years. I developed 3 web applications for automation needs, I helped as a Cloud Engineer to migrate OnPrem cold Data from OnPrem Servers to AWS cloud. I was Tech Lead participating in a program that had a goal to industrialize Data Science models for Production. I was nominated as technical product lead in a strategic project which aims to deploy a Data Virtualization solution hosted in the company's private cloud. Keywords: Denodo, Hadoop, Spark, Dataiku, Python",
          color: "#9b1578",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Software Engineer",
    //       company: "Orange",
    //       company_url: "https://www.orange.com/en",
    //       logo_path: "orange.png",
    //       duration: "May 2018 -  November 2018",
    //       location: "Grenoble, France",
    //       description:
    //         "I have worked on project of developing and deploying a realtime monitoring tool for a B2B messaging application. I used VueJs, NodeJs to code, JEST to test, and Openshift to deploy.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Web Developer",
    //       company: "XeConcepts",
    //       company_url: "https://www.jobi.tn/company.html/xeconcepts",
    //       logo_path: "xeconcepts.jpeg",
    //       duration: "June 2017 - Septembre 2018",
    //       location: "Sousse, Tunisia",
    //       description:
    //         "I worked on a e-marketing hybrid application with Ionic framework.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    /*     {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    }, */
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My open source projects makes use of vast variety of latest technology tools. My best experience is to create web projects and deploy them in AWS cloud.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_Fakher.png",
    description:
      "I am available to discuss about business opportunities, ideas and projects. You can invite me on Linkedin. Everyone is welcome!",
  },
  blogSection: {
    title: "My Latest Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://fakherhannafi.medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+33 7 86 89 52 46",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  profCerts,
  experience,
  projectsHeader,
  contactPageData,
};
