const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "18 months ago",
        title: "Present and Future Outlooks of PLM in Manufacturing Industries",
        image: "images/blog-1.jpeg",
        link: "https://discover.3ds.com/present-and-future-outlooks-plm-manufacturing-industries"
    },
    {
        id: 2,
        date: "20 months ago",
        image: "images/blog-2.png",
        title: "The Impact of PLM Systems on the Digital Transformation of Manufacturing Companies",
        link: "https://www.researchgate.net/publication/379428525_The_Impact_of_PLM_Systems_on_the_Digital_Transformation_of_Manufacturing_Companies"
    },
    {
        "id": 4,
        "date": "Dec 14, 2010",
        "title": "Product Lifecycle Management — From Its History to Its New Role",
        "image": "/images/blog-5.jpeg",
        "link": "https://www.researchgate.net/publication/264814281_Product_lifecycle_management_-_From_its_history_to_its_new_role"
        },
];

const techStack = [
    {
        category: "PLM & 3DEXPERIENCE",
        items: [
            "ENOVIA",
            "DELMIA",
            "NETVIBES",
            "3DPlay",
            "PCS",
            "DS Tools"
        ]
    },
    {
        category: "Solution Architecture",
        items: [
            "Data Model",
            "TO-BE",
            "Integration",
            "Digital Thread",
            "Hybrid Cloud"
        ]
    },
    {
        category: "Engineering Systems",
        items: [
            "PLM",
            "MBSE",
            "Mfg Flows",
            "Config Control",
            "Interop"
        ]
    },
    {
        category: "Technical Skills",
        items: [
            "REST APIs",
            "Automation",
            "CI/CD",
            "Git",
            "Infra"
        ]
    },
    {
        category: "Delivery & Consulting",
        items: [
            "Workshops",
            "MVPs",
            "Deployments",
            "Advisory"
        ]
    },
    {
        category: "Industries & Domains",
        items: [
            "Automotive",
            "Defense",
            "Energy",
            "Smart Cities",
            "Power Grid",
            "Aerospace"
        ]
    },
    {
        category: "Soft Skills",
        items: [
            "Teamwork",
            "Communication",
            "Leadership",
            "Problem-Solving",
            "Adaptability"
        ]
    },
    {
        category: "Work Methods",
        items: [
            "Agile",
            "Scrum",
            "Kanban",
            "Cross-Team Work",
            "Tech Workshops"
        ]
    },
    {
        category: "Workplace Tools",
        items: [
            "Jira",
            "Confluence",
            "Office Suite",
            "Teams",
            "Notion"
        ]
    }
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/ibenaissaboukhari-gif",
    },
    {
        id: 2,
        text: "Website",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "www.benaissaboukhari.com",
    },
    {
        id: 3,
        text: "Send Me an Email",
        icon: "/icons/email.svg",
        bg: "#ff866b",
        link: "mailto:ibenaissa.boukhari@gmail.com",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/benaissaboukhari/?originalSubdomain=fr",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/Benaissa-4.jpeg",
    },
    {
        id: 2,
        img: "/images/Benaissa-5.jpeg",
    },
    {
        id: 3,
        img: "/images/Benaissa-6.jpeg",
    },
    {
        id: 4,
        img: "/images/Benaissa-7.jpeg",
    },
    {
        id: 5,
        img: "/images/Benaissa-8.jpeg",
    },
    {
        id: 6,
        img: "/images/Benaissa-9.jpg",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project Renault

        {
            id: 5,
            name: "Technical Context",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-40 left-90",
            windowPosition: "top-[15vh] left-[30vw]",
            children: [
                // FILE 1 — Brands & Tools
                {
                    id: 1,
                    name: "Brands & Tools.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Main 3DEXPERIENCE Brands & Tools",
                        "",
                        "ENOVIA:",
                        "- Project Management",
                        "- Change Management",
                        "- Issue Management",
                        "- Document Management",
                        "- Configuration Management",
                        "",
                        "DELMIA:",
                        "- Manufacturing Item Definition",
                        "- Process Planning",
                        "- Work Instructions Authoring",
                        "- Resource & Process Engineering",
                        "- Manufacturing Collaboration",
                        "",
                        "NETVIBES:",
                        "- Governance Dashboards",
                        "- Data Analytics",
                        "",
                        "Other Tools:",
                        "- 3DEXPERIENCE Base roles Apps",
                        "- Digital Mockup Suite",
                        "- Performance PCS Tools",
                        "- APIs & Web Services integrations",
                        "- Other Dassault Systèmes Internal CATIA Magic"
                    ]
                },

                // FILE 2 — Platforms & Environments
                {
                    id: 2,
                    name: "Platforms & Environments.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-28 left-72",
                    description: [
                        "Platforms & Environments",
                        "",
                        "3DEXPERIENCE Platform:",
                        "- Collaborative spaces & P&O",
                        "- Data lifecycle & maturity",
                        "- Role-based widgets",
                        "",
                        "Cloud Environments:",
                        "- Private & Public cloud",
                        "- DBS Configuration",
                        "- Secure Cloud Implementations",
                        "",
                        "On-Premises:",
                        "- TXO ",
                        "- Upgrade Experience",
                        "- Infrastructure Collaboration (IT, R&D)",
                        "",
                        "Collaboration Context:",
                        "- Extended Engineering",
                        "- Cross-domain Process Integration"
                    ]
                },

                // FILE 3 — Architect Role
                {
                    id: 3,
                    name: "Architect Role.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-52 left-20",
                    description: [
                        "Solution Architect Responsibilities",
                        "",
                        "Core Activities:",
                        "- Process Analysis (AS-IS)",
                        "- TO-BE Definition",
                        "- Functional & Technical Architecture",
                        "- Data Model Structuring",
                        "",
                        "Collaboration:",
                        "- Workshops with Engineering & Business Teams",
                        "- Alignment with Integrators",
                        "- Guidance for MVP Delivery",
                        "- Support for User Enablement",
                        "",
                        "Focus:",
                        "- Ensuring coherence between business needs and platform capabilities",
                        "- Improving efficiency and digital continuity"
                    ]
                }
            ]
        },
        // ▶ Project NEXTER
        {
            id: 6,
            name: "Projects",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-30 right-80",
            windowPosition: "top-[20vh] left-[20vw]",
            children: [

                // FILE 1 — Renault
                {
                    id: 1,
                    name: "Renault.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Renault —  (Solution Architect)",
                        "",
                        "Industry: Automotive",
                        "",
                        "Context:",
                        "Cloud-based PLM transformation program using ENOVIA, NETVIBES, and 3DPlay.",
                        "",
                        "Key Missions:",
                        "- Designed PLM process architecture",
                        "- Defined TO-BE workflows for engineering teams",
                        "- Supported program governance and collaboration",
                        "- Guided MVP delivery & validation",
                        "",
                        "Impact:",
                        "Improved engineering continuity, process clarity, and cross-domain alignment."
                    ]
                },

                // FILE 2 — Nexter
                {
                    id: 2,
                    name: "Nexter.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-72",
                    description: [
                        "Nexter — (Solution Architect)",
                        "",
                        "Industry: Defense",
                        "",
                        "Context:",
                        "PLM support across DMU, Change Management, and Issue Management.",
                        "",
                        "Key Missions:",
                        "- Led DMU (Digital Mockup) validation",
                        "- Improved Issue & Change workflows",
                        "- Supported platform configuration",
                        "- Contributed to SecNumCloud migration activities",
                        "",
                        "Impact:",
                        "Strengthened engineering review processes and compliance workflows."
                    ]
                },

                // FILE 3 — EDF
                {
                    id: 3,
                    name: "EDF.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-38 left-10",
                    description: [
                        "EDF — (Solution Architect)",
                        "",
                        "Industry: Energy & Utilities",
                        "",
                        "Context:",
                        "Document Management, Audit Management, and Project workflows on ENOVIA.",
                        "",
                        "Key Missions:",
                        "- Supported on-prem migration from 20x to 22x",
                        "- Designed audit & document workflows",
                        "- Delivered a custom dashboard widget",
                        "",
                        "Impact:",
                        "Improved compliance traceability and operational efficiency."
                    ]
                },

                // FILE 4 — NEOM
                {
                    id: 4,
                    name: "NEOM.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-38 left-72",
                    description: [
                        "NEOM — (Solution Architect)",
                        "",
                        "Industry: Smart Cities",
                        "",
                        "Context:",
                        "Digital Twin and asset lifecycle management for large-scale infrastructure.",
                        "",
                        "Key Missions:",
                        "- Structured asset models",
                        "- Designed MOC (Management of Change) workflows",
                        "- Defined document & issue flows",
                        "- Delivered initial production MVP",
                        "",
                        "Impact:",
                        "Established the foundations of the digital twin and improved operational traceability."
                    ]
                },

                // FILE 5 — R&D PCS & QA
                {
                    id: 5,
                    name: "R&D — PCS & QA.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-52 left-40",
                    description: [
                        "Dassault Systèmes — PCS & QA (R&D)",
                        "",
                        "Domain: Performance & Quality Engineering",
                        "",
                        "Context:",
                        "Work on the Design Review Suite and platform performance validation.",
                        "",
                        "Key Missions:",
                        "- PCS (Performance, Capacity, Scalability) testing",
                        "- Benchmark & infra preparation",
                        "- Automation of regression scenarios",
                        "- Stabilization of Design Review Suite",
                        "",
                        "Impact:",
                        "Improved platform robustness and performance for large industrial clients."
                    ]
                }
            ]
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Traveling-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-5 left-5",
            imageUrl: "/images/Benaissa-4.jpeg",
        },
        {
            id: 2,
            name: "Football-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-18 right-52",
            imageUrl: "/images/Benaissa-5.jpeg",
        },
        {
            id: 3,
            name: "Flying-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/Benaissa-3.jpeg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-40 left-5",
            subtitle: "Beyond Screens ! Meet the guy behind the code ! ",
            image: "/images/Benaissa.jpg",
            description: [
                "Hey! I’m Benaissa 👋, a curious mind who loves building things, understanding how they work, and making them look good along the way.",
                "I’m passionate about design, technology, and crafting digital experiences that feel smooth, intuitive, and meaningful.",
                "Whether it’s architecture, product thinking, or hands-on development, I enjoy bringing clarity and structure to complex systems.",
                "Outside of work, you’ll probably find me traveling, exploring new cultures, or enjoying anything related to aviation and skydiving.",
                "I’m driven by learning, creativity, and the desire to constantly improve both in what I build and who I become.",

            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.gif",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };