/**
 * ===================================================================
 * USER CONTENT CONFIGURATION FILE (Single Source of Truth)
 * ===================================================================
 * 
 * To update your website, simply edit the values below and save!
 * You NEVER need to touch index.html or compile anything.
 * 
 * Tips:
 *  - You can use standard JavaScript strings or multiline backticks (`...`).
 *  - Feel free to add/remove items in the arrays.
 *  - Relative image paths should point to the images/ folder.
 */

window.PORTFOLIO_DATA = {
  // -----------------------------------------------------------------
  // 1. PROFILE & BIO
  // -----------------------------------------------------------------
  profile: {
    name: "Shilong Li",
    preferredName: "Shilong",
    title: "R&D Analyst @ GEICO",
    location: "Washington-Baltimore Area",
    avatar: "images/profile/avatar.jpg",
    // Resume download is intentionally disabled (null) so the CV is not publicly downloadable.
    // Set to a file path (e.g. "files/cv.pdf") to re-enable the download button.
    resumeUrl: null,

    // Status badge shown in header & hero
    status: {
      available: true,
      text: "Exploring Data Analytics & Data-Driven Insights"
    },

    // Rotating animated titles / taglines in the hero banner
    taglines: [
      "Data Analytics & Data Engineering",
      "R&D Analyst @ GEICO",
      "Landscape & Astrophotographer",
      "Animal Rescue Foster Volunteer",
      "Always Learning & Building"
    ],

    motto: "Persistence and determination alone are omnipotent.",

    about: `Hi! I'm Shilong Li, currently a Research and Development Analyst at GEICO based in the Washington-Baltimore Area.

My focus centers on data and data analytics—encompassing data analysis, analytics engineering, data modeling, data governance, data quality, and data-driven business strategy—turning complex enterprise data into reliable, actionable insights.

I hold an M.S. from UC Irvine (June 2024) and a B.Eng. in Computer Science with Honors from SUSTech (June 2022), where my research involved large-scale empirical data studies of autonomous driving systems.

Beyond work, I am passionate about landscape & astrophotography, fostering shelter companion animals, and exploring national parks.`,

    // Social profiles
    social: {
      github: "https://github.com/lethal233",
      linkedin: "https://linkedin.com/in/shilong-li",
      googlescholar: "https://scholar.google.com/citations?user=OuQTuoEAAAAJ",
      instagram: "https://www.instagram.com/_shilongli",
      researchgate: "https://www.researchgate.net/profile/Shilong-Li-21",
      orcid: "https://orcid.org/0009-0006-8875-983X"
    }
  },

  // -----------------------------------------------------------------
  // 2. QUICK RECRUITER HIGHLIGHTS
  // -----------------------------------------------------------------
  highlights: [
    {
      metric: "FSE '24 & '25",
      label: "Peer-Reviewed Publications",
      subtext: "Large-scale empirical studies of autonomous driving systems at ACM FSE"
    },
    {
      metric: "M.S. + B.Eng.",
      label: "UC Irvine & SUSTech",
      subtext: "Graduate studies (UCI) & CS Honors (SUSTech, top 5%)"
    },
    {
      metric: "Data & Analytics",
      label: "GEICO R&D",
      subtext: "Enterprise data analytics, data modeling, governance, and data quality"
    },
    {
      metric: "10+ Rescues",
      label: "Foster Volunteer",
      subtext: "Rescue animal foster home with Irvine Animal Care Center"
    }
  ],

  // -----------------------------------------------------------------
  // 3. WORK & RESEARCH EXPERIENCES
  // -----------------------------------------------------------------
  // Types: "industry" | "research" | "teaching"
  experiences: [
    {
      id: "geico",
      type: "industry",
      role: "Research and Development Analyst",
      company: "GEICO",
      location: "Bethesda, MD",
      period: "2025.01 - Present",
      isCurrent: true,
      summary: "Driving data analytics, enterprise data governance, and reliable data pipelines within GEICO's R&D organization.",
      bullets: [
        "Building scalable data models, automated data validation, and analytics pipelines that power high-impact business decisions.",
        "Establishing data governance standards, schema consistency, and end-to-end data quality checks across cloud data environments."
      ],
      skills: ["SQL", "Python", "dbt", "Snowflake", "PowerBI", "Data Analytics", "Data Modeling", "Data Engineering", "Data Governance", "Data Quality"]
    },
    {
      id: "uci-ta",
      type: "teaching",
      role: "Graduate Teaching Assistant",
      company: "University of California, Irvine",
      location: "Irvine, CA",
      period: "2022.09 - 2024.06",
      summary: "Mentored 400+ undergraduate students across 6 academic quarters in requirements analysis and Java.",
      bullets: [
        "Head TA for INF 113: Requirements Analysis and Engineering (Spring 2023, Spring 2024).",
        "TA for ICS 45J: Programming in Java as a Second Language (Fall 2022, Winter 2023, Fall 2023, Winter 2024).",
        "Conducted weekly discussion sessions, designed automated grading scripts, and held 1-on-1 office hours."
      ],
      skills: ["Java", "Requirements Analysis", "Mentorship", "Curriculum Design"]
    },
    {
      id: "authentic8",
      type: "industry",
      role: "QA Engineering Intern",
      company: "Authentic8, Inc.",
      location: "Redwood City, CA",
      period: "2023.06 - 2023.09",
      summary: "Built automated quality-assurance and regression testing workflows for a cloud browser isolation security platform (Silo).",
      bullets: [
        "Built and maintained automated test pipelines using Python and Selenium, cutting manual regression test cycle time by 35%.",
        "Designed edge-case test suites for enterprise security policies and cross-platform browser sandboxing behaviors.",
        "Collaborated with distributed teams to integrate quality checks into Jenkins CI/CD workflows."
      ],
      skills: ["Python", "Selenium", "JIRA", "Xray", "Quality Assurance", "Automation Testing", "Regression Testing", "Cloud Security"]
    },
    {
      id: "sustech-ra",
      type: "research",
      role: "Undergraduate Research Assistant",
      company: "Southern University of Science and Technology",
      location: "Shenzhen, China",
      period: "2019.09 - 2022.06",
      summary: "Conducted research on web application testing, execution trace analysis, and record & replay frameworks under Prof. Yepang Liu.",
      bullets: [
        "Developed a record and replay framework for modern asynchronous web application testing, recognized with the Outstanding Graduation Thesis Award (Honored Thesis).",
        "Analyzed event scheduling nondeterminism in client-side JavaScript applications to boost replay fidelity.",
        "Earned the Outstanding Graduate Student Award and First-Class Merit Scholarships for top 5% academic achievement."
      ],
      skills: ["JavaScript", "Record & Replay", "Web Testing", "Program Analysis"]
    },
    {
      id: "lakala",
      type: "industry",
      role: "Software Engineer Intern",
      company: "Lakala Payment Co., Ltd.",
      location: "Shenzhen, China",
      period: "2021.09 - 2021.12",
      summary: "Built high-throughput transaction processing and transaction monitoring services for enterprise payment infrastructure.",
      bullets: [
        "Implemented microservices and API gateways in Go, handling high-concurrency payment processing and transaction verification.",
        "Researched blockchain and distributed ledger technologies (Hyperledger Fabric) for secure cross-institution settlement workflows."
      ],
      skills: ["Go", "Docker", "HyperLedger", "Distributed Systems"]
    },
    {
      id: "sustech-ta",
      type: "teaching",
      role: "Undergraduate Teaching Assistant",
      company: "Southern University of Science and Technology",
      location: "Shenzhen, China",
      period: "2020.09 - 2022.06",
      summary: "Served as TA for CS102A (Introduction to Java Programming) and CS207 (Digital Logic).",
      bullets: [
        "Recognized as Outstanding Teaching Assistant in June 2021.",
        "Led lab sessions, assisted students with hardware FPGA debugging, and evaluated programming assignments."
      ],
      skills: ["Java", "Digital Logic", "Verilog", "Student Mentorship"]
    }
  ],

  // -----------------------------------------------------------------
  // 4. EDUCATION & HONORS
  // -----------------------------------------------------------------
  education: [
    {
      degree: "M.S. in Software Engineering",
      institution: "University of California, Irvine (UCI)",
      period: "2022.09 - 2024.06",
      location: "Irvine, CA",
      link: "https://www.informatics.uci.edu/grad/ms-software-engineering/",
      thesis: "Transferring A Testing Technique Among Autonomous Driving Systems",
      advisor: "Prof. Joshua Garcia",
      details: "Focus on empirical data studies, quality assurance, cyber-physical systems, and autonomous driving platforms (Baidu Apollo, Autoware)."
    },
    {
      degree: "B.Eng. in Computer Science and Technology",
      institution: "Southern University of Science and Technology (SUSTech)",
      period: "2018.08 - 2022.07",
      location: "Shenzhen, China",
      link: "https://www.sustech.edu.cn/en/",
      thesis: "A Record and Replay Framework for Web Application Testing (Honored Thesis)",
      advisor: "Prof. Yepang Liu",
      details: "GPA: 3.86/4.00 (Class Rank ~5%). Honored Bachelor's Degree, Outstanding Graduate Student Award, First Class Merit Scholarship (2019, 2020, 2021)."
    }
  ],

  // -----------------------------------------------------------------
  // 5. PUBLICATIONS & PAPERS
  // -----------------------------------------------------------------
  publications: [
    {
      id: "fse2025",
      title: "A Comprehensive Study of Bug-Fix Patterns in Autonomous Driving Systems",
      authors: [
        "Yuntianyi Chen",
        "Yuqi Huai",
        "Yirui He",
        "Shilong Li",
        "Changnam Hong",
        "Qi Alfred Chen",
        "Joshua Garcia"
      ],
      venue: "ACM International Conference on the Foundations of Software Engineering (FSE 2025)",
      year: "2025",
      status: "Published",
      badge: "ACM FSE '25",
      pdfUrl: null,
      doiUrl: "https://doi.org/10.1145/3715733",
      summary: "First large-scale empirical investigation of bug fixes across production autonomous driving repositories, revealing recurring patterns, root causes, and guidance for automated testing.",
      bibtex: `@article{10.1145/3715733,
author = {Chen, Yuntianyi and Huai, Yuqi and He, Yirui and Li, Shilong and Hong, Changnam and Chen, Qi Alfred and Garcia, Joshua},
title = {A Comprehensive Study of Bug-Fix Patterns in Autonomous Driving Systems},
year = {2025},
issue_date = {July 2025},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
volume = {2},
number = {FSE},
url = {https://doi.org/10.1145/3715733},
doi = {10.1145/3715733},
journal = {Proc. ACM Softw. Eng.},
month = jun,
articleno = {FSE018},
numpages = {23},
keywords = {Bug-fix pattern, Autonomous driving systems, Empirical study}
}`
    },
    {
      id: "fse2024",
      title: "Misconfiguration Software Testing for Failure Emergence in Autonomous Driving Systems",
      authors: [
        "Yuntianyi Chen",
        "Yuqi Huai",
        "Shilong Li",
        "Changnam Hong",
        "Joshua Garcia"
      ],
      venue: "ACM International Conference on the Foundations of Software Engineering (FSE 2024)",
      year: "2024",
      status: "Published",
      badge: "ACM FSE '24",
      pdfUrl: null,
      doiUrl: "https://doi.org/10.1145/3660792",
      summary: "Presents a novel misconfiguration testing methodology for autonomous driving systems to detect safety hazards and critical system failures under subtle configuration anomalies.",
      bibtex: `
@article{10.1145/3660792,
author = {Chen, Yuntianyi and Huai, Yuqi and Li, Shilong and Hong, Changnam and Garcia, Joshua},
title = {Misconfiguration Software Testing for Failure Emergence in Autonomous Driving Systems},
year = {2024},
issue_date = {July 2024},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
volume = {1},
number = {FSE},
url = {https://doi.org/10.1145/3660792},
doi = {10.1145/3660792},
journal = {Proc. ACM Softw. Eng.},
month = jul,
articleno = {85},
numpages = {24},
keywords = {Autonomous driving systems, Software configuration}
}`
    }
  ],

  // -----------------------------------------------------------------
  // 6. TECHNICAL SKILLS & DOMAINS
  // -----------------------------------------------------------------
  skills: [
    {
      category: "Data Analytics & BI",
      icon: "trending-up",
      items: ["Data Analysis", "SQL", "Pandas", "PowerBI", "Streamlit", "Data Analytics Engineering", "Data-Driven Strategy"]
    },
    {
      category: "Data Engineering & Governance",
      icon: "database",
      items: ["Snowflake", "dbt", "ELT / ETL", "PySpark", "Data Modeling", "Schema Design", "Data Quality", "Data Governance"]
    },
    {
      category: "Statistical & Predictive Modeling",
      icon: "trending-up",
      items: ["Predictive Modeling", "Linear Regression", "Random Forest", "XGBoost", "NLP", "PyTorch"]
    },
    {
      category: "Languages",
      icon: "terminal",
      items: ["Python", "SQL", "R", "Java", "Go", "JavaScript / TypeScript", "C#", "Bash / Shell"]
    },
    {
      category: "Cloud & Data Platforms",
      icon: "cloud",
      items: ["Snowflake", "Azure DevOps", "GCP", "AWS", "Docker", "Linux / Unix"]
    },
    {
      category: "Tools & Quality Assurance",
      icon: "layers",
      items: ["Git", "GitHub", "Jira", "Xray", "Selenium", "Playwright", "Automated Testing"]
    },
    {
      category: "Autonomous Systems & Cyber-Physical",
      icon: "cpu",
      items: ["Baidu Apollo", "Autoware", "CARLA Simulator", "LGSVL Simulator", "ROS / Cyber RT", "Sensor Perception & Configs"]
    }
  ],

  // -----------------------------------------------------------------
  // 7. HOBBIES & CASUAL LIFE (Friendly to visitors)
  // -----------------------------------------------------------------
  hobbies: {
    // A. Photography Showcase (All 13 images categorized across images/portfolio/)
    photography: [
      {
        id: "star",
        title: "Milky Way & Starry Skies",
        location: "Dark Sky Wilderness",
        category: "Astrophotography",
        src: "images/portfolio/astrophotography/milky_way.jpg"
      },
      {
        id: "grandcanyon",
        title: "Grand Canyon Depths",
        location: "Grand Canyon National Park, AZ",
        category: "Landscape",
        src: "images/portfolio/landscape/grand_canyon.jpg"
      },
      {
        id: "grandcanyon_2",
        title: "Grand Canyon Sunset Vista",
        location: "Grand Canyon National Park, AZ",
        category: "Landscape",
        src: "images/portfolio/landscape/grand_canyon_sunset.jpg"
      },
      {
        id: "yosemite",
        title: "Yosemite Valley & Granite Walls",
        location: "Yosemite National Park, CA",
        category: "National Parks",
        src: "images/portfolio/national_parks/yosemite_valley.jpg"
      },
      {
        id: "yosemite_2",
        title: "Sierra Nevada Wilderness",
        location: "Yosemite National Park, CA",
        category: "National Parks",
        src: "images/portfolio/national_parks/yosemite_wilderness.jpg"
      },
      {
        id: "horseshoe",
        title: "Horseshoe Bend Colorado River",
        location: "Page, AZ",
        category: "Landscape",
        src: "images/portfolio/landscape/horseshoe_bend.jpg"
      },
      {
        id: "horseshoe_2",
        title: "Horseshoe Bend Dusks",
        location: "Page, AZ",
        category: "Landscape",
        src: "images/portfolio/landscape/horseshoe_bend_dusk.jpg"
      },
      {
        id: "channel_islands",
        title: "Channel Islands Sea Bluffs",
        location: "Channel Islands National Park, CA",
        category: "Ocean & Coastal",
        src: "images/portfolio/coastal/channel_islands.jpg"
      },
      {
        id: "hermosa",
        title: "Hermosa Beach Golden Hour",
        location: "Hermosa Beach, CA",
        category: "Ocean & Coastal",
        src: "images/portfolio/coastal/hermosa_beach.jpg"
      },
      {
        id: "sanjuan",
        title: "Mission San Juan Capistrano",
        location: "San Juan Capistrano, CA",
        category: "Architecture & History",
        src: "images/portfolio/architecture/san_juan_capistrano.jpg"
      },
      {
        id: "moon",
        title: "Lunar Surface & Craters",
        location: "Astrophotography",
        category: "Astrophotography",
        src: "images/portfolio/astrophotography/moon.jpg"
      },
      {
        id: "lastman",
        title: "Solitude on the Edge",
        location: "Southwest Canyonlands",
        category: "Adventure",
        src: "images/portfolio/adventure/last_man.jpg"
      },
      {
        id: "pop",
        title: "My Foster Cat Pop",
        location: "Irvine, CA",
        category: "Pets",
        src: "images/portfolio/pets/foster_cat_pop.jpg"
      }
    ],

    // B. Animal Fostering Highlight
    fostering: {
      organization: "Irvine Animal Care Center",
      role: "Volunteer Foster Parent",
      period: "2023.10 - 2024.10",
      location: "Irvine, CA",
      story: "Providing compassionate temporary homes for rescue dogs and cats awaiting adoption. From bottle-feeding neonatal kittens to rehabilitating timid rescue pups, fostering has been one of my most rewarding journeys.",
      instagramUrl: "https://www.instagram.com/_shilongli",
      storyHighlightUrl: "https://www.instagram.com/stories/highlights/17997739253052387/",
      instagramHandle: "@_shilongli",
      stats: [
        { label: "Foster Companions", value: "10+" },
        { label: "Adoption Success Rate", value: "100%" },
        { label: "Cuddles & Headbutts", value: "Infinite" }
      ]
    },

    // C. Travel, Wilderness & Points of Interest (Interactive Map)
    // -----------------------------------------------------------------
    // HOW TO ADD A NEW POINT OF INTEREST (POI):
    // Add an object to `places` below with:
    //   - id: Unique string identifier (e.g., "monument-valley")
    //   - name: Display name (e.g., "Monument Valley")
    //   - state: 2-letter state code (e.g., "AZ" or "UT")
    //   - category: One of "national-park", "scenic-drive", "poi", "coastal" (or custom)
    //   - coords: [latitude, longitude] in decimal degrees
    //   - highlight: A brief description or memorable moment
    //   - photoRef: (Optional) ID matching an image in `hobbies.photography` to link to Lightbox
    // -----------------------------------------------------------------
    travel: {
      title: "Exploration & Wilderness",
      summary: "Drawn to cross-country road trips, high-altitude alpine trails, dramatic coastal byways, and America's magnificent national parks.",
      categories: [
        { id: "all", label: "All Spots", icon: "🗺️" },
        { id: "national-park", label: "National Parks", icon: "🌲" },
        { id: "scenic-drive", label: "Scenic Byways", icon: "🚗" },
        { id: "poi", label: "Points of Interest", icon: "📍" },
        { id: "coastal", label: "Coast & Waters", icon: "🌊" }
      ],
      places: [
        {
          id: "yosemite",
          name: "Yosemite National Park",
          state: "CA",
          category: "national-park",
          coords: [37.8651, -119.5383],
          highlight: "Granite monoliths, El Capitan, Half Dome, Glacier Point & cascading valley waterfalls.",
          photoRef: "yosemite"
        },
        {
          id: "grand-canyon",
          name: "Grand Canyon National Park",
          state: "AZ",
          category: "national-park",
          coords: [36.0544, -112.1401],
          highlight: "Vast canyon depths carved by the Colorado River, fiery sunsets from South Rim vistas.",
          photoRef: "grandcanyon"
        },
        {
          id: "channel-islands",
          name: "Channel Islands National Park",
          state: "CA",
          category: "national-park",
          coords: [34.0069, -119.7785],
          highlight: "Remote Pacific island archipelago, sea caves, rugged cliffs, and pristine marine wilderness.",
          photoRef: "channel_islands"
        },
        {
          id: "joshua-tree",
          name: "Joshua Tree National Park",
          state: "CA",
          category: "national-park",
          coords: [33.8734, -115.9010],
          highlight: "Otherworldly yucca trees, surreal boulder labyrinths, and crystal-clear dark desert night skies."
        },
        {
          id: "shenandoah",
          name: "Shenandoah National Park",
          state: "VA",
          category: "national-park",
          coords: [38.2928, -78.6796],
          highlight: "Skyline Drive along the crest of the Blue Ridge Mountains, cascading hollows, and autumn foliage."
        },
        {
          id: "assateague",
          name: "Assateague Island National Seashore",
          state: "MD",
          category: "coastal",
          coords: [38.0898, -75.2045],
          highlight: "Wild horses roaming maritime dunes, salt marshes, and Atlantic ocean surf."
        },
        {
          id: "kings-canyon",
          name: "Kings Canyon National Park",
          state: "CA",
          category: "national-park",
          coords: [36.8879, -118.5551],
          highlight: "Glaciated alpine valleys, roaring river canyons deeper than the Grand Canyon, and pristine backcountry."
        },
        {
          id: "sequoia",
          name: "Sequoia National Park",
          state: "CA",
          category: "national-park",
          coords: [36.4864, -118.5658],
          highlight: "Cathedral-like ancient giant sequoia groves and high Sierra alpine peaks."
        },
        {
          id: "zion",
          name: "Zion National Park",
          state: "UT",
          category: "national-park",
          coords: [37.2982, -113.0263],
          highlight: "Towering red Navajo sandstone walls, Virgin River Narrows slot canyon, and Angels Landing spine."
        },
        {
          id: "bryce-canyon",
          name: "Bryce Canyon National Park",
          state: "UT",
          category: "national-park",
          coords: [37.5930, -112.1871],
          highlight: "World's largest concentration of crimson and ochre limestone hoodoos."
        },
        {
          id: "rocky-mountain",
          name: "Rocky Mountain National Park",
          state: "CO",
          category: "national-park",
          coords: [40.3428, -105.6836],
          highlight: "High-altitude Trail Ridge Road, subalpine glacial tarns, and 14,000+ ft continental divide peaks."
        },
        {
          id: "ca-hwy-1",
          name: "California Highway 1 (Big Sur)",
          state: "CA",
          category: "scenic-drive",
          coords: [36.2704, -121.8081],
          highlight: "Legendary Pacific Coast Highway winding high above crashing Pacific waves and Bixby Creek Bridge."
        },
        {
          id: "outer-banks",
          name: "North Carolina Outer Banks (NC-12)",
          state: "NC",
          category: "scenic-drive",
          coords: [35.2506, -75.5284],
          highlight: "Slender barrier island highway cutting through maritime sands, Cape Hatteras, and ocean winds."
        },
        {
          id: "horseshoe-bend",
          name: "Horseshoe Bend & Glen Canyon",
          state: "AZ",
          category: "poi",
          coords: [36.8790, -111.5105],
          highlight: "Spectacular 270-degree horseshoe-shaped meander of the Colorado River 1,000 feet below.",
          photoRef: "horseshoe"
        },
        {
          id: "san-juan-capistrano",
          name: "Mission San Juan Capistrano",
          state: "CA",
          category: "poi",
          coords: [33.5017, -117.6625],
          highlight: "Historic 18th-century Spanish colonial mission architecture, stone corridors, and lush courtyards.",
          photoRef: "sanjuan"
        },
        {
          id: "hermosa-beach",
          name: "Hermosa Beach & Pier",
          state: "CA",
          category: "coastal",
          coords: [33.8622, -118.4009],
          highlight: "Classic Southern California coastline, golden hour surf, and Pacific sunset reflections.",
          photoRef: "hermosa"
        },
        {
          id: "edwin-b-forsythe",
          name: "Edwin B. Forsythe National Wildlife Refuge",
          state: "NJ",
          category: "coastal",
          coords: [39.4678, -74.4449],
          highlight: "Expansive coastal salt marshes, scenic wildlife drive, and premier migratory bird haven along the Atlantic Flyway."
        },
        {
          id: "blackwater-refuge",
          name: "Blackwater National Wildlife Refuge",
          state: "MD",
          category: "coastal",
          coords: [38.4419, -76.1158],
          highlight: "The 'Everglades of the North' on the Chesapeake Bay, featuring tidal wetlands, bald eagle nesting, and scenic wildlife drive."
        },
        {
          id: "minnewaska",
          name: "Minnewaska State Park Preserve",
          state: "NY",
          category: "national-park",
          coords: [41.7289, -74.2372],
          highlight: "Dazzling white conglomerate cliffs, deep mountain sky lakes, dense hardwood forests, and sweeping Shawangunk Ridge vistas."
        },
        {
          id: "cape-may-point",
          name: "Cape May Point State Park",
          state: "NJ",
          category: "coastal",
          coords: [38.9329, -74.9619],
          highlight: "Historic 1859 Cape May Lighthouse, coastal dune trails, freshwater marshes, and famous raptor/monarch migration corridor."
        },
        {
          id: "first-landing",
          name: "First Landing State Park",
          state: "VA",
          category: "coastal",
          coords: [36.9189, -76.0469],
          highlight: "Chesapeake Bay maritime dune forest, bald cypress lagoons draped with Spanish moss, and serene sandy beaches."
        },
        {
          id: "md-25",
          name: "MD-25 (Falls Road Scenic Byway)",
          state: "MD",
          category: "scenic-drive",
          coords: [39.4883, -76.6853],
          highlight: "Historic scenic corridor winding through rural Maryland valleys, historic mill towns, and picturesque rolling horse country."
        },
        {
          id: "great-falls",
          name: "Great Falls Park",
          state: "MD/VA",
          category: "national-park",
          coords: [38.9986, -77.2539],
          highlight: "Dramatic Potomac River rapids plunging over jagged granite boulders into Mather Gorge along the Maryland & Virginia border."
        },
        {
          id: "sky-meadows",
          name: "Sky Meadows State Park",
          state: "VA",
          category: "national-park",
          coords: [38.9889, -77.9625],
          highlight: "Rolling pastures, Blue Ridge mountain ridge vistas, tranquil hiking trails, and direct connection to the Appalachian Trail."
        },
        {
          id: "greenbelt-park",
          name: "Greenbelt Park",
          state: "MD",
          category: "national-park",
          coords: [38.9942, -76.8978],
          highlight: "Peaceful 1,100-acre National Park Service woodland oasis in suburban Maryland with miles of tranquil forest hiking trails."
        },
        {
          id: "gravelly-point",
          name: "Gravelly Point",
          state: "VA",
          category: "poi",
          coords: [38.8653, -77.0389],
          highlight: "Iconic Potomac River waterfront park situated directly beneath the landing approach path of planes into Reagan National Airport."
        },
        {
          id: "georgetown-waterfront",
          name: "Georgetown Waterfront Park",
          state: "DC",
          category: "poi",
          coords: [38.9031, -77.0608],
          highlight: "Scenic Potomac River promenade with sweeping views of Theodore Roosevelt Island, Key Bridge, and historic Georgetown canals."
        }
      ],
      // Fallback string array for backward compatibility
      visitedParks: [
        "Yosemite National Park (CA)",
        "Grand Canyon National Park (AZ)",
        "Channel Islands National Park (CA)",
        "Joshua Tree National Park (CA)",
        "Shenandoah National Park (VA)",
        "Assateague Island National Seashore (MD)",
        "Kings Canyon National Park (CA)",
        "Sequoia National Park (CA)",
        "Zion National Park (UT)",
        "Bryce Canyon National Park (UT)",
        "Rocky Mountain National Park (CO)",
        "California Highway 1 (CA)",
        "North Carolina Outer Banks (NC)",
        "Horseshoe Bend & Glen Canyon (AZ)",
        "Mission San Juan Capistrano (CA)",
        "Hermosa Beach & Pier (CA)",
        "Edwin B. Forsythe National Wildlife Refuge (NJ)",
        "Blackwater National Wildlife Refuge (MD)",
        "Minnewaska State Park Preserve (NY)",
        "Cape May Point State Park (NJ)",
        "First Landing State Park (VA)",
        "MD-25 Falls Road Scenic Byway (MD)",
        "Great Falls Park (MD/VA)",
        "Sky Meadows State Park (VA)",
        "Greenbelt Park (MD)",
        "Gravelly Point (VA)",
        "Georgetown Waterfront Park (DC)"
      ]
    },

    // D. Open Source & Community Service
    community: [
      {
        name: "Alibaba fastjson & easyexcel",
        role: "Open Source Contributor",
        desc: "Contributed bug fixes and performance improvements to Alibaba's premier Java open source libraries with tens of thousands of GitHub stars."
      },
      {
        name: "SUSTech Application & Campus Handbooks",
        role: "Core Contributor",
        desc: "Co-authored and maintained sustech-application.com (SUSTech Study-Abroad Guide) and sustech.online, assisting thousands of students in study-abroad preparation and university life."
      },
      {
        name: "ICSE 2020",
        role: "Online Volunteer",
        desc: "Supported online operations for ICSE 2020, a premier international research conference."
      }
    ]
  },

  // -----------------------------------------------------------------
  // 8. INTERACTIVE TERMINAL COMMANDS (Tech Easter Eggs)
  // -----------------------------------------------------------------
  terminal: {
    welcomeMessage: `Antigravity Shell v2.4 (x86_64-shilong-sys)
Type 'help' to inspect available commands or click the suggestion chips.`,
    commands: {
      help: "Available commands:\n  • bio          - View brief autobiography\n  • exp          - List work & research experiences\n  • pub          - Show ACM FSE research publications\n  • skills       - Display categorized technical skills\n  • photos       - Jump to photography gallery\n  • map / travel - Open interactive National Parks & POI map\n  • foster       - View shelter animal foster story\n  • contact      - View social & professional links\n  • clear        - Clear terminal output\n  • sudo hire-shilong - Submit instant recruitment offer 🚀",
      bio: "Shilong Li - R&D Analyst @ GEICO | M.S. (UCI) | B.Eng. CS (SUSTech with Honors)\nBased in Washington-Baltimore Area. Focused on data analytics, data modeling, data governance, and data-driven decision making.",
      exp: "Experiences:\n  1. GEICO - Research and Development Analyst (2025.01 - Present)\n  2. UC Irvine - Graduate Teaching Assistant (2022.09 - 2024.06)\n  3. Authentic8 - QA Engineering Intern (2023.06 - 2023.09)\n  4. SUSTech - Undergraduate Research Assistant (2019.09 - 2022.06)\n  5. Lakala Payment - Software Engineer Intern (2021.09 - 2021.12)",
      pub: "Publications:\n  • [FSE 2025] Bug-Fix Patterns in Autonomous Driving Systems (ACM DOI: 10.1145/3715733)\n  • [FSE 2024] Misconfiguration Software Testing for Failure Emergence in ADS (ACM DOI: 10.1145/3660792)",
      skills: "Data Analytics & BI: Data Analysis, SQL, Pandas, PowerBI, Streamlit\nData Engineering & Governance: Snowflake, dbt, PySpark, ELT, Data Modeling, Schema Design, Data Quality\nStatistical & Predictive Modeling: Linear Regression, Random Forest, XGBoost, NLP, PyTorch\nLanguages: Python, SQL, R, Java, Go, JavaScript, C#, Bash\nCloud & Data Platforms: Snowflake, Azure DevOps, GCP, AWS\nAutonomous Systems: Apollo, Autoware, CARLA Simulator",
      photos: "Navigating to Photography Showcase: Astrophotography, Landscapes, and National Parks...",
      travel: "Exploration & Wilderness: 27+ visited National Parks, scenic byways, and points of interest across the United States. Navigating to Interactive Travel Map...",
      map: "Exploration & Wilderness: 27+ visited National Parks, scenic byways, and points of interest across the United States. Navigating to Interactive Travel Map...",
      foster: "Foster Volunteer @ Irvine Animal Care Center (2023 - 2024). Cared for 10+ shelter cats and dogs to prepare them for loving forever families! Check out Instagram @_shilongli for stories.",
      contact: "Connect with Shilong:\n  • LinkedIn: https://linkedin.com/in/shilong-li\n  • GitHub: https://github.com/lethal233\n  • Google Scholar: https://scholar.google.com/citations?user=OuQTuoEAAAAJ\n  • Instagram: https://www.instagram.com/_shilongli",
      hire: "✨ Access granted! Shilong is thrilled to connect about impactful data & analytics opportunities. Connect via LinkedIn: https://linkedin.com/in/shilong-li",
      resume: "Resume is available upon request. Please connect via LinkedIn: https://linkedin.com/in/shilong-li"
    }
  }
};
