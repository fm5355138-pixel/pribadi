const DATA = {
  profile: {
    name: "Fadel Muhammad",
    avatar: "img/me.jpg",
    status: "Ayo Berkolaborasi",
    email: "fadelmuh185@email.com",
    github: "https://github.com/fm5355138-pixel",
    instagram: "https://www.instagram.com/fdelmhmmdd_/",
    linkedin: "#",
    whatsapp: "https://wa.me/6289509394128"
  },

  themes: [
    { id: "light", icon: "sun", title: "Light" },
    { id: "dark", icon: "moon", title: "Dark" },
    { id: "dim", icon: "bolt", title: "Yellow" },
    { id: "contrast", icon: "half", title: "Ramadan" },
    { id: "focus", icon: "heart", title: "Valentine" }
  ],

  nav: [
    { id: "beranda", label: "Beranda", icon: "home" },
    { id: "tentang", label: "Tentang", icon: "user" },
    { id: "pencapaian", label: "Pencapaian", icon: "award" },
    { id: "proyek", label: "Proyek", icon: "folder" },
    { id: "kegunaan", label: "Kegunaan", icon: "monitor" },
    { id: "kontak", label: "Kontak", icon: "mail" },
    { id: "links", label: "Playlist", icon: "spotify" }
  ],

  hero: {
    title: "Hi, saya Fadel Muhammad",
    subtitle: "Web Developer & UI/UX Design.",
    meta: [
      { icon: "location", text: "Kota Bekasi, Jawa Barat" },
      { icon: "briefcase", text: "Open to Collaboration" }
    ],
    p1: "Seorang Web Developer & UI/UX Design yang berdedikasi untuk membangun solusi digital yang berdampak. Saya spesialis dalam pengembangan platform web yang skalabel dan design tampilan yang user friendly menggunakan tech stack seperti PHP, TypeScript, Next.js, dan Figma.",
    p2: "Fokus saya adalah merancang arsitektur website yang terstruktur dengan baik, dan mudah dipelihara. Saya memadukan keahlian teknis dengan komunikasi proaktif dan kepemimpinan untuk memastikan setiap proyek memberikan kejelasan logis dan dampak nyata di dunia nyata."
  },

  skillTabs: [
    { id: "all", label: "Semua" },
    { id: "utama", label: "Utama" },
    { id: "frontend", label: "Front End" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "tools", label: "Alat" }
  ],

  skills: [
    { name: "HTML",       icon: "devicon-html5-plain colored",       category: ["utama","frontend"], colorClass: "skill-html" },
    { name: "CSS",        icon: "devicon-css3-plain colored",        category: ["utama","frontend"], colorClass: "skill-css" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored",  category: ["utama","frontend"], colorClass: "skill-js" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored",  category: ["utama","frontend"], colorClass: "skill-ts" },
    { name: "TailwindCSS",icon: "devicon-tailwindcss-plain colored", category: "frontend",           colorClass: "skill-tailwind" },
    { name: "Bootstrap",  icon: "devicon-bootstrap-plain colored",   category: "frontend",           colorClass: "skill-bootstrap" },
    { name: "PHP",        icon: "devicon-php-plain colored",         category: "backend",            colorClass: "skill-php" },
    { name: "Laravel",    icon: "devicon-laravel-plain colored",     category: "backend",            colorClass: "skill-laravel" },
    { name: "MySQL",      icon: "devicon-mysql-plain colored",       category: "database",           colorClass: "skill-mysql" },
    { name: "React.js",   icon: "devicon-react-original colored",    category: "frontend",           colorClass: "skill-react" },
    { name: "Next.js",    icon: "devicon-nextjs-plain",              category: "frontend",           colorClass: "skill-nextjs" },
    { name: "Git",        icon: "devicon-git-plain colored",         category: "tools",              colorClass: "skill-git" },
    { name: "GitHub",     icon: "devicon-github-original",           category: "tools",              colorClass: "skill-github" },
    { name: "npm",        icon: "devicon-npm-original-wordmark colored", category: "tools",          colorClass: "skill-npm" },
    { name: "Bun",        icon: "devicon-bun-plain colored",         category: "tools",              colorClass: "skill-bun" }
  ],

  about: {
    paragraphs: [
      {
        id: "Saya adalah seorang pelajar yang punya semangat tinggi di dunia teknologi, khususnya dalam membangun pengalaman digital yang menarik. Sebagai seseorang yang mendalami Web Development sekaligus UI/UX Design, saya sangat menikmati proses mengubah ide mentah menjadi sebuah produk visual yang estetik dan fungsional. Bagi saya, coding bukan cuma soal baris perintah, tapi soal bagaimana menciptakan solusi yang bermanfaat bagi orang banyak.",
        en: "I am a student with a deep passion for technology, especially in building engaging digital experiences. As someone who studies Web Development alongside UI/UX Design, I really enjoy the process of turning raw ideas into aesthetic and functional visual products. For me, coding is not just about lines of commands — it's about creating solutions that benefit many people."
      },
      {
        id: "Dalam hal teknis, saya sehari-hari berkutat dengan PHP dan TypeScript untuk membangun sisi engine website yang tangguh dan interaktif. Namun, sebelum masuk ke bagian kode, saya biasanya menuangkan kreativitas saya di Figma terlebih dahulu. Di sana, saya merancang tampilan antarmuka yang modern dan memastikan pengalaman pengguna (user experience) terasa mulus dan nyaman saat digunakan.",
        en: "On the technical side, I spend my days working with PHP and TypeScript to build robust, interactive website engines. But before jumping into code, I usually pour my creativity into Figma first. There, I craft modern interfaces and make sure the user experience feels smooth and comfortable to use."
      },
      {
        id: "Meskipun masih berstatus pelajar, saya selalu haus akan tantangan baru dan terus mengikuti perkembangan teknologi terbaru. Fokus utama saya adalah terus belajar, bereksperimen dengan berbagai desain, dan menghasilkan proyek-proyek web yang tidak hanya keren dilihat, tapi juga efisien secara performa.",
        en: "Even though I'm still a student, I'm always hungry for new challenges and keep up with the latest tech trends. My main focus is to keep learning, experimenting with different designs, and producing web projects that not only look great but also perform efficiently."
      }
    ],
    signature: "Fadel Muhammad",
    careers: [
      {
        role: { id: "Stan", en: "Stan" },
        company: { id: "Digital Treasury Service Stand", en: "Digital Treasury Service Stand" },
        period: { id: "#", en: "#" },
        detail: {
          id: "Sebagai staf pengembangan, membantu dalam merancang, membuat prototype, dan mengimplementasikan antarmuka aplikasi atau situs web yang intuitif, menarik, dan konsisten.",
          en: "As an engineering staff, assisting in designing, prototyping, and implementing intuitive, engaging, and consistent interfaces for applications and websites."
        },
        logo: "img/stan.webp"
      }
    ],
    education: [
      {
        name: { id: "SMP IT Al-Manar", en: "SMP IT Al-Manar" },
        meta: { id: "SMP - 2020 - 2024 - Kota Bekasi, Jawa Barat", en: "Junior High School - 2020 - 2024 - Bekasi City, West Java"},
        logo: "img/almanar.webp"
      },
      {
        name: { id: "SD Negeri Tp 7", en: "SD Negeri Tp 7" },
        meta: { id: "SD - 2013 - 2019 - Kota Bekasi, Jawa Barat", en: "Elementary School - 2013 - 2019 - Bekasi City, West Java" },
        logo: "img/sdn.jpg"
      },
      {
        name: { id: "TK OdaPusa", en: "TK OdaPusa" },
        meta: { id: "Taman Kanak-Kanak - 2012- 2013 - Kota Bekasi, Jawa Barat", en: "Kindergarten - 2012 - 2013 - Bekasi City, West Java" },
        logo: "img/tk.webp"
      }
    ]
  },

  projects: {
    typeTabs: [
      { key: "Semua", id: "Semua", en: "All" },
      { key: "Web", id: "Web", en: "Web" },
      { key: "Prototype", id: "Prototype", en: "Prototype" }
    ],
    categoryTabs: [
      { key: "Semua", id: "Semua", en: "All" },
      { key: "Proyek Pribadi", id: "Proyek Pribadi", en: "Personal Project" },
      { key: "Freelance", id: "Freelance", en: "Freelance" },
      { key: "Lomba", id: "Lomba", en: "Competition" }
    ],
    items: [
    
    ]
  },

  achievements: [
    {
      id: "ach-1",
      code: "#",
      title: "#",
      org: "#",
      type: "#",
      category: "#",
      date: { id: "#", en: "#" },
      image: "#",
      credentialUrl: "#"
    },
    {
      id: "ach-1",
      code: "#",
      title: "#",
      org: "#",
      type: "#",
      category: "#",
      date: { id: "#", en: "#" },
      image: "#",
      credentialUrl: "#"
    },
  ],

  uses: [
    {
      group: { id: "Perangkat Keras", en: "Hardware" },
      items: [
        {
          name: { id: "Laptop IDEAPAD", en: "IDEAPAD Laptop" },
          desc: {
            id: "Perangkat portable dengan spesifikasi Intel Core i3, RAM 8GB yang memungkinkan saya untuk bekerja dimana saja",
            en: "A portable rig with Intel Core i3, 8GB RAM that lets me work from anywhere."
          }
        },
        {
          name: { id: "Keyboard Mechanical Rexus", en: "Rexus Mechanical Keyboard" },
          desc: {
            id: "Keyboard Mechanical Red Switch yang memberikan pengalaman ketik serta meningkatkan kenyamanan saya dalam mengetik",
            en: "A Red Switch mechanical keyboard that gives a great typing feel and boosts my typing comfort."
          }
        },
        {
          name: { id: "Mouse Logitech Wireless", en: "Logitech Wireless Mouse" },
          desc: {
            id: "Mouse wireless untuk kenyamanan tanpa adanya gangguan kabel, dibekali dengan desain yang ergonimis sehingga nyaman saat digunakan",
            en: "A wireless mouse for cable-free comfort, with an ergonomic design that's pleasant to use."
          }
        }
      ]
    },
    {
      group: { id: "Editor", en: "Editor" },
      items: [
        {
          name: { id: "VS Code", en: "VS Code" },
          desc: {
            id: "Editor code yang saya gunakan sebagai alat utama untuk pengembangan website dengan ekosistem ekstensi yang sangat lengkap",
            en: "The code editor I use as my main tool for web development, with a very rich extension ecosystem."
          }
        },
      ]
    },
    {
      group: { id: "Terminal", en: "Terminal" },
      items: [
        {
          name: { id: "Windows Terminal", en: "Windows Terminal" },
          desc: { id: "Terminal utama di Windows", en: "My main terminal on Windows." }
        },
        {
          name: { id: "Git Bash", en: "Git Bash" },
          desc: { id: "Terminal berbasis Git untuk workflow", en: "Git-based terminal for my workflow." }
        },
        {
          name: { id: "Claude Code", en: "Claude Code" },
          desc: { id: "AI coding assistant di terminal", en: "An AI coding assistant inside the terminal." }
        },
        {
          name: { id: "Bun", en: "Bun" },
          desc: { id: "Runtime & package manager JavaScript cepat", en: "A fast JavaScript runtime & package manager." }
        }
      ]
    },
    {
      group: { id: "Aplikasi", en: "Apps" },
      items: [
        {
          name: { id: "Figma", en: "Figma" },
          desc: {
            id: "Platform desain kolaboratif utama yang saya gunakan untuk merancang wireframe, prototipe interaktif, hingga mengelola sistem desain yang konsisten",
            en: "My main collaborative design platform for wireframing, interactive prototyping, and maintaining a consistent design system."
          }
        },
        {
          name: { id: "Google Stitch", en: "Google Stitch" },
          desc: {
            id: " Alat bantu untuk integrasi aset desain yang memastikan setiap elemen visual selaras dengan standar pengembangan produk digital modern",
            en: "A helper for design-asset integration that ensures every visual element aligns with modern digital product standards."
          }
        }
      ]
    },
    {
      group: { id: "Tech Stack", en: "Tech Stack" },
      items: [
        {
          name: { id: "TypeScript", en: "TypeScript" },
          desc: { id: "Bahasa utama untuk proyek besar", en: "Main language for large projects." }
        },
        {
          name: { id: "JavaScript", en: "JavaScript" },
          desc: { id: "Fondasi pengembangan web", en: "The foundation of web development." }
        },
        {
          name: { id: "PHP", en: "PHP" },
          desc: { id: "Backend web klasik", en: "Classic web backend." }
        },
        {
          name: { id: "MySQL", en: "MySQL" },
          desc: { id: "Database relasional utama", en: "Main relational database." }
        },
        {
          name: { id: "Laravel", en: "Laravel" },
          desc: { id: "Framework PHP favorit saya", en: "My favorite PHP framework." }
        }
      ]
    }
  ],

  contacts: [
    {
      title: { id: "Tetap Terhubung", en: "Stay Connected" },
      desc: {
        id: "Hubungi saya melalui email untuk pertanyaan atau kolaborasi.",
        en: "Reach me via email for questions or collaboration."
      },
      button: { id: "Pergi ke Gmail", en: "Open Gmail" },
      icon: "mail",
      theme: "theme-red",
      full: true,
      url: "mailto:fadelmuh185@email.com"
    },
    {
      title: { id: "Sisi Lain Saya", en: "My Other Side" },
      desc: {
        id: "Berbagi cerita, hobi, dan keluh kesah saat ngoding.",
        en: "Sharing stories, hobbies, and complaints while coding."
      },
      button: { id: "Pergi ke Instagram", en: "Open Instagram" },
      icon: "instagram",
      theme: "theme-pink",
      url: "https://www.instagram.com/fdelmhmmdd_/"
    },
    {
      title: { id: "Mari Terhubung", en: "Let's Connect" },
      desc: {
        id: "Terhubung dengan saya secara profesional.",
        en: "Connect with me professionally."
      },
      button: { id: "Pergi ke Linkedin", en: "Open LinkedIn" },
      icon: "linkedin",
      theme: "theme-blue",
      url: "# "
    },
    {
      title: { id: "Bergabung dalam Keseruan", en: "Join the Fun" },
      desc: {
        id: "Tonton konten yang menarik dan menyenangkan.",
        en: "Watch fun and engaging content."
      },
      button: { id: "Pergi ke Tiktok", en: "Open TikTok" },
      icon: "music",
      theme: "theme-gray",
      url: "https://www.tiktok.com/@username719277"
    },
    {
      title: { id: "Jelajahi Kode", en: "Explore the Code" },
      desc: {
        id: "Jelajahi karya sumber terbuka saya.",
        en: "Explore my open-source work."
      },
      button: { id: "Pergi ke Github", en: "Open GitHub" },
      icon: "github",
      theme: "theme-navy",
      url: "https://github.com/fm5355138-pixel"
    }
  ],

};