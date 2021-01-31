/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Fakher HANNAFI",
  logo_name: "FakherHannafi",
  nickname: "Cloud, Data and Devops Engineer",
  subTitle:
    "I am very passionate about Cloud, Data and Devops technologies. \n I try to help people design, implement and operate IT solutions made for business needs.\n Continuous learning is my philosophy in life, I love exploring new technolgies by taking certifications and contributing in the community. Apart from IT, I like reading about Investment and Communication.",
  resumeLink:
    "https://drive.google.com/file/d/1za2GpmcdYKLq47pR0IZt_rqDzJ_kxiKl/view?usp=sharing",
  portfolio_repository: "https://github.com/fakhrovski",
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
    link: "https://fakhrovski.medium.com/",
    fontAwesomeIcon: "fa-medium", // Reference https://fontawesome.com/icons/medium?style=brands
    backgroundColor: "#12100E", // Reference https://simpleicons.org/?q=medium
  },
  {
    name: "Github",
    link: "https://github.com/fakhrovski",
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
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
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
      ],
    },
    {
      title: "Data & Machine Learning ",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Design and implement Data Solutions like Data Lake, Data Warehousing, Data Virtualization, Data Storage, Data Visualization, etc...",
        "⚡ Develop MLOPS pipelines to deploy data science models to production.",
        "⚡ Automate integration and of Data, Model and Code pipelines across environments.",
      ],
      softwareSkills: [
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C80F",
          },
        },
        {
          skillName: "Elastic",
          fontAwesomeClassname: "simple-icons:elastic",
          style: {
            color: "#66b5ae",
          },
        },
        {
          skillName: "Oracle",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#f80000",
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
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Snowflake",
          fontAwesomeClassname: "simple-icons:snowflake",
          style: {
            backgroundColor: "transparent",
            color: "#A0E3F6",
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
          skillName: "Anaconda",
          fontAwesomeClassname: "simple-icons:anaconda",
          style: {
            color: "#3EB049",
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
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            backgroundColor: "transparent",
            color: "#ff0000",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            backgroundColor: "transparent",
            color: "#f34f29",
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
        {
          skillName: "Sonarqube",
          fontAwesomeClassname: "simple-icons:sonarqube",
          style: {
            backgroundColor: "transparent",
            color: "#8Dc63F",
          },
        },
        {
          skillName: "Selenium",
          fontAwesomeClassname: "simple-icons:selenium",
          style: {
            backgroundColor: "transparent",
            color: "#66cc00",
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
      ],
    },
    {
      title: "Fullstack Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build responsive website front end using popular web frameworks",
        "⚡ Develop mobile applications using Ionic",
        "⚡ Creat Restful APIs with NodeJs, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#dd1b16",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "VueJS",
          fontAwesomeClassname: "simple-icons:vuejs",
          style: {
            color: "#41B883",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Ionic",
          fontAwesomeClassname: "simple-icons:ionic",
          style: {
            backgroundColor: "transparent",
            color: "#498AFF",
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
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            backgroundColor: "transparent",
            color: "#563d7c",
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
      ],
    },

    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications with Adobe XD",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Use Adobe After Effect for marketing videos",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Adobe After Effect",
          fontAwesomeClassname: "simple-icons:adobe",
          style: {
            color: "#ff0000",
          },
        },
      ],
    },
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
      website_link: "http://www.supcom.mincom.tn/Fr/accueil_46_3",
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
      title: "CKAD",
      subtitle: "Cloud Native Computing Foundation",
      logo_path: "ckad_from_cncfsite.png",
      certificate_link:
        "https://www.youracclaim.com/badges/d7b257ff-3b0e-43e1-a915-97ead07f0cb9/public_url",
      alt_name: "CKAD",
      color_code: "#e1e1e1",
    },
    {
      title: "Terraform Associate",
      subtitle: "Hashicorp",
      logo_path: "Terraform-Associate-Badge.png",
      certificate_link:
        "https://www.youracclaim.com/badges/233f10be-b100-40ad-a69e-eb2cd526f9f3/public_url",
      alt_name: "Terraform",
      color_code: "#e1e1e1",
    },
    {
      title: "Vault Associate",
      subtitle: "Hashicorp",
      logo_path: "Vault-Associate-Badge.png",
      certificate_link:
        "https://www.youracclaim.com/badges/a1abedc2-5498-4b5e-b687-a913b0695cdd/public_url",
      alt_name: "Vault",
      color_code: "#e1e1e1",
    },
    {
      title: "Jenkins Engineer",
      subtitle: "Jenkins",
      logo_path: "jenkins.png",
      certificate_link:
        "https://certificates.cloudbees.com/90df21b8-f6ab-45bc-a2be-e443f50f4fb1",
      alt_name: "Vault",
      color_code: "#e1e1e1",
    },
    {
      title: "Solutions Architect Associate",
      subtitle: "Amazon Web Services",
      logo_path: "AWS-SolArchitect-Associate-2020.png",
      certificate_link:
        "https://www.youracclaim.com/badges/73b73dcb-1183-4262-b2f0-34bc0c28b173/public_url",
      alt_name: "Certified Solutions Architect Associate",
      color_code: "#e1e1e1",
    },
    {
      title: "Sysops Administrator Associate",
      subtitle: "Amazon Web Services",
      logo_path: "AWS-SysOpAdmin-Associate-2020.png",
      certificate_link:
        "https://www.youracclaim.com/badges/53396833-983b-49e5-876f-17085aefe4dc/public_url",
      alt_name: "Certified Administrator Associate",
      color_code: "#e1e1e1",
    },
    {
      title: "Cloud Practioner",
      subtitle: "Amazon Web Services",
      logo_path: "AWS-CloudPractitioner-2020.png",
      certificate_link:
        "https://www.youracclaim.com/badges/cbbd4474-41eb-4dc3-a92c-f0a0e6dc5681/public_url",
      alt_name: "Certified Cloud Practioner",
      color_code: "#e1e1e1",
    },
    {
      title: "Developer Associate",
      subtitle: "Amazon Web Services",
      logo_path: "AWS-Developer-Associate.png",
      certificate_link:
        "https://www.youracclaim.com/badges/874eda02-a769-4dd0-8d17-a2de1231acc0/public_url",
      alt_name: "Certified Developer Associate",
      color_code: "#e1e1e1",
    },
    {
      title: "Devops Engineer Expert",
      subtitle: "Microsoft Azure",
      logo_path: "CERT-Expert-DevOps-Engineer.png",
      certificate_link:
        "https://www.youracclaim.com/badges/48d0d4e2-a82e-4928-823a-1cf37c6d3b67/public_url",
      alt_name: "Devops Engineer Expert",
      color_code: "#e1e1e1",
    },
    {
      title: "Administrator Associate",
      subtitle: "Microsoft Azure",
      logo_path: "azure-administrator-associate.png",
      certificate_link:
        "https://www.youracclaim.com/badges/47043561-0443-48f2-a5cb-2c1bee6b4180/public_url",
      alt_name: "Administrator Associate",
      color_code: "#e1e1e1",
    },
    {
      title: "Developer Associate",
      subtitle: "Microsoft Azure",
      logo_path: "azure-developer-associate-600x600.png",
      certificate_link:
        "https://www.youracclaim.com/badges/55b2bdcc-a7f6-484f-874c-d8d4d03fee27/public_url",
      alt_name: "Developer Associate",
      color_code: "#e1e1e1",
    },
    {
      title: "Data Fundamentals",
      subtitle: "Microsoft Azure",
      logo_path: "azure-data-fundamentals-600x600.png",
      certificate_link:
        "https://www.youracclaim.com/badges/c025f70b-6feb-4898-bff3-36bf24e92d45/public_url",
      alt_name: "Data Fundamentals",
      color_code: "#e1e1e1",
    },
    {
      title: "Azure Fundamentals",
      subtitle: "Microsoft Azure",
      logo_path: "Azure.Fundamental_Icon.png",
      certificate_link:
        "https://www.youracclaim.com/badges/a5599282-f742-4f85-b955-58c65c26d89d/public_url",
      alt_name: "azure fundamentals",
      color_code: "#e1e1e1",
    },
    {
      title: "Data Analyst Associate",
      subtitle: "Microsoft",
      logo_path: "CERT-Associate-Data-Analyst-600x600.png",
      certificate_link:
        "https://www.youracclaim.com/badges/3e0f2d52-9ff7-49c5-976f-951c05477c4a/public_url",
      alt_name: "data analyst",
      color_code: "#e1e1e1",
    },
    {
      title: "Multi-cloud Network Engineer Associate",
      subtitle: "Aviatrix",
      logo_path: "aceAssociatetBadgeArtboard_1.png",
      certificate_link:
        "https://www.youracclaim.com/badges/ac46103b-c871-454a-8ea9-b5690390711f/public_url",
      alt_name: "aviatrix network engineer",
      color_code: "#e1e1e1",
    },
    {
      title: "Professional Scrum Master 1",
      subtitle: "Scrum.org",
      logo_path: "psm1.png",
      certificate_link:
        "https://drive.google.com/file/d/1Np0XF8Lp99kaLGcngStGzi-czhxU19N0/view?usp=drive_open",
      alt_name: "psm1",
      color_code: "#e1e1e1",
    },
    {
      title: "ITIL4",
      subtitle: "Axelos",
      logo_path: "itil4.png",
      certificate_link:
        "https://drive.google.com/file/d/1lJYQBcqZ0-Dv7yxFksf2dKOeER-GjyZ_/view",
      alt_name: "itil4",
      color_code: "#e1e1e1",
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
    },
    {
      title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1bniXNpOnMoTcBLoO0_LC1z-DEolj500N/view?usp=sharing",
      alt_name: "mlaz",
      color_code: "#e1e1e1",
    },
    {
      title: "Angular Crash course for busy developers",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1Qr2uxmbdnQZwDLjUwPpCa36pZx_qjoXJ/view?usp=sharing",
      alt_name: "ng",
      color_code: "#e1e1e1",
    },
    {
      title: "Rapid Prototyping with Ionic",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1rQibGI3GHGfIhJ-2JBEpzRGQraL7l9ga/view?usp=sharing",
      alt_name: "ng",
      color_code: "#e1e1e1",
    },
    {
      title: "CCNA Routing and Switching",
      subtitle: "Cisco Networking Academy",
      logo_path: "ccna.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1AqrceRDKcIRLLVPJ2xljA4agOC0_PNCb/view?usp=sharing",
      alt_name: "ng",
      color_code: "#e1e1e1",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Professional positions, missions and internships",
  description:
    "I have worked with some well established companies and also in small startups as a Web Developer, Devops Engineer, AWS Administrator, Data Architect and ML Engineer",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "AWS/Data Engineer",
          company: "GRTGAZ",
          company_url: "http://www.grtgaz.com/",
          logo_path: "grtgaz.png",
          duration: "October 2020 - PRESENT",
          location: "Paris, France",
          description:
            "I am working on AWS account administration and also developing MLOPS pipelines in order to industrialize Machine Learning Models.",
          color: "#0879bf",
        },
        {
          title: "Cloud Consultant",
          company: "DEVOTEAM REVOLVE",
          company_url: "https://revolve.team/",
          logo_path: "revolve.jpg",
          duration: "October 2020 - PRESENT",
          location: "Paris, France",
          description:
            "I am working in ML community. My role is to contribute to build a MLOPS service offer and help customers develop their ML maturity from small to big organizations",
          color: "#0879bf",
        },
        {
          title: "Tech Lead",
          company: "BPCE IT",
          company_url: "https://www.bpce-it.fr/",
          logo_path: "bpce-it.jpeg",
          duration: "April 2019 - Sept 2020",
          location: "Aix En Provence, France",
          description:
            "I have participated in lot of data and web projects during almost two years. I developed 3 web applications for automation needs, I helped as a Cloud Engineer to migrate OnPrem cold Data from OnPrem Servers to AWS cloud. I was nominated Tech Lead in a program that had a goal to industrialize Data Science models to Production. I was also nominated as Tech lead in a strategic project which aims to deploy a Data Virtualization solution in BPCE private cloud.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer",
          company: "Orange",
          company_url: "https://www.orange.com/en",
          logo_path: "orange.png",
          duration: "May 2018 -  March 2019",
          location: "Grenoble, France",
          description:
            "I have worked on project of developing and deploying a realtime monitoring tool for a B2B messaging application. I used VueJs, NodeJs to code, JEST to test, and Openshift to deploy.",
          color: "#ee3c26",
        },
        {
          title: "Web Developer",
          company: "XeConcepts",
          company_url: "https://www.jobi.tn/company.html/xeconcepts",
          logo_path: "xeconcepts.jpeg",
          duration: "June 2017 - Septembre 2018",
          location: "Sousse, Tunisia",
          description:
            "I worked on a e-marketing hybrid application with Ionic framework.",
          color: "#0071C5",
        },
      ],
    },
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
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_Fakher.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "My Latest Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://fakhrovski.medium.com/",
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
    subtitle: "+91 8320758513",
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
