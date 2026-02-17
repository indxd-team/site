// =============================================
// VERIFIED SITES DATA - START
// =============================================
const verifiedSites = [
    // Sustainable Brands
    {
        name: "Patagonia",
        url: "https://patagonia.com",
        category: "Sustainable Brands",
        description: "Patagonia is an outdoor clothing company known for its commitment to environmental sustainability and activism. They donate 1% of sales to environmental organizations and are a certified B Corporation.",
        keywords: "sustainable, eco-friendly, clothing, outdoor, environment",
        clicks: 42
    },
    {
        name: "Allbirds",
        url: "https://allbirds.com",
        category: "Sustainable Brands",
        description: "Allbirds creates sustainable footwear using natural materials like merino wool, tree fibers, and sugarcane. They are committed to reducing their carbon footprint and have achieved carbon neutrality.",
        keywords: "shoes, sustainable, wool, eco-friendly, footwear",
        clicks: 38
    },
    {
        name: "Tentree",
        url: "https://tentree.com",
        category: "Sustainable Brands",
        description: "Tentree is an apparel company that plants 10 trees for every item purchased. They use sustainable materials and are committed to reforestation efforts worldwide.",
        keywords: "clothing, trees, planting, sustainable, eco",
        clicks: 29
    },
    {
        name: "Package Free",
        url: "https://packagefreeshop.com",
        category: "Sustainable Brands",
        description: "Package Free offers a wide range of zero-waste products to help people reduce their environmental impact. From reusable containers to compostable items, they make sustainable living accessible.",
        keywords: "zero waste, sustainable, eco, products, plastic-free",
        clicks: 31
    },
    {
        name: "Ethique",
        url: "https://ethique.com",
        category: "Sustainable Brands",
        description: "Ethique creates solid beauty bars that eliminate plastic packaging. Their products are vegan, cruelty-free, and biodegradable, making them an eco-friendly alternative to traditional beauty products.",
        keywords: "beauty, shampoo, conditioner, plastic-free, sustainable",
        clicks: 27
    },

    // Privacy-First Tech
    {
        name: "Signal",
        url: "https://signal.org",
        category: "Privacy-First Tech", 
        description: "Signal is a private messaging app with end-to-end encryption for all communications. It's open-source, independently audited, and doesn't collect user data.",
        keywords: "private, secure, messaging, encrypted, communication",
        clicks: 87
    },
    {
        name: "ProtonMail",
        url: "https://protonmail.com",
        category: "Privacy-First Tech",
        description: "ProtonMail is a secure email service with end-to-end encryption and zero-access encryption. Based in Switzerland, it benefits from strong privacy laws.",
        keywords: "email, secure, private, encrypted, communication",
        clicks: 72
    },
    {
        name: "DuckDuckGo",
        url: "https://duckduckgo.com",
        category: "Privacy-First Tech",
        description: "DuckDuckGo is a privacy-focused search engine that doesn't track your searches or create search history profiles. It provides unbiased results without filter bubbles.",
        keywords: "search, private, anonymous, no tracking",
        clicks: 156
    },
    {
        name: "Brave Browser",
        url: "https://brave.com",
        category: "Privacy-First Tech",
        description: "Brave is a privacy-focused browser that blocks trackers and ads by default. It also offers a unique rewards system for users who opt into privacy-respecting ads.",
        keywords: "browser, private, secure, ad-blocker",
        clicks: 68
    },
    {
        name: "Mullvad VPN",
        url: "https://mullvad.net",
        category: "Privacy-First Tech",
        description: "Mullvad is a privacy-focused VPN service that doesn't require personal information to sign up. They accept anonymous payments and have a strict no-logs policy.",
        keywords: "vpn, private, secure, anonymous",
        clicks: 45
    },

    // Verified News
    {
        name: "Newscord",
        url: "https://newscord.org",
        category: "Verified News",
        description: "Newscord is an independent news platform with community verification processes. It focuses on transparency in reporting and provides context for complex stories.",
        keywords: "news, independent, verified, journalism, media",
        clicks: 256
    },
    {
        name: "Aljazeera",
        url: "https://aljazeera.com",
        category: "Verified News",
        description: "Aljazeera is a Qatar-based international news network providing comprehensive coverage of Middle Eastern and global affairs with a focus on Arab perspectives.",
        keywords: "news, middle east, international, journalism, arab world",
        clicks: 198
    },
    {
        name: "Andalou Agency",
        url: "https://aa.com.tr",
        category: "Verified News", 
        description: "Anadolu Agency is Turkey's premier news agency providing global coverage with special emphasis on Middle Eastern affairs and Turkish foreign policy.",
        keywords: "news, turkey, middle east, agency, international",
        clicks: 167
    },
    {
        name: "Middle East Eye",
        url: "https://middleeasteye.net",
        category: "Verified News",
        description: "Middle East Eye is an independent online news organization covering the Middle East and North Africa, providing in-depth analysis and ground reporting.",
        keywords: "middle east, north africa, analysis, news, investigation",
        clicks: 142
    },
    {
        name: "IMEU",
        url: "https://imeu.org",
        category: "Verified News",
        description: "The Institute for Middle East Understanding provides facts, analysis, experts, and digital resources about Palestine and Palestinians for journalists.",
        keywords: "palestine, facts, analysis, resources, media",
        clicks: 134
    },
    {
        name: "Roya News",
        url: "https://royanews.tv",
        category: "Verified News",
        description: "Roya News is a Jordanian news network providing comprehensive coverage of Jordanian, Palestinian, and regional news with a focus on human stories.",
        keywords: "jordan, palestine, news, arab, regional",
        clicks: 89
    },
    {
        name: "Sourced Press",
        url: "https://sourcedpress.com",
        category: "Verified News",
        description: "Sourced Press is an independent investigative journalism platform focusing on underreported stories with rigorous fact-checking and source verification.",
        keywords: "investigative, journalism, independent, verification, sources",
        clicks: 78
    },

    // Knowledge Hubs
    {
        name: "Khan Academy",
        url: "https://khanacademy.org",
        category: "Knowledge Hubs",
        description: "Khan Academy offers free online educational resources covering a wide range of subjects. Their mission is to provide free, world-class education for anyone, anywhere.",
        keywords: "education, learning, free, courses, tutorials",
        clicks: 421
    },
    {
        name: "Coursera",
        url: "https://coursera.org",
        category: "Knowledge Hubs",
        description: "Coursera partners with top universities and organizations to offer online courses, specializations, and degrees. They make quality education accessible to learners worldwide.",
        keywords: "courses, learning, university, online education",
        clicks: 203
    },
    {
        name: "edX",
        url: "https://edx.org",
        category: "Knowledge Hubs",
        description: "edX is an online learning platform founded by Harvard and MIT. It offers university-level courses in a wide range of disciplines to learners worldwide.",
        keywords: "courses, harvard, mit, online learning",
        clicks: 189
    },
    {
        name: "Internet Archive",
        url: "https://archive.org",
        category: "Knowledge Hubs",
        description: "The Internet Archive is a digital library with millions of free books, movies, software, music, and websites. It's dedicated to preserving digital content for future generations.",
        keywords: "archive, library, digital, books, media",
        clicks: 178
    },
    {
        name: "Project Gutenberg",
        url: "https://gutenberg.org",
        category: "Knowledge Hubs",
        description: "Project Gutenberg offers over 60,000 free eBooks in the public domain. It's the oldest digital library and a pioneer in free electronic book distribution.",
        keywords: "ebooks, free, public domain, library, books",
        clicks: 156
    },

    // Social Impact
    {
        name: "Charity Navigator",
        url: "https://charitynavigator.org",
        category: "Social Impact",
        description: "Charity Navigator evaluates and rates thousands of charities based on their financial health, accountability, and transparency. It helps donors make informed giving decisions.",
        keywords: "charity, rating, nonprofit, evaluation",
        clicks: 67
    },
    {
        name: "GlobalGiving",
        url: "https://globalgiving.org",
        category: "Social Impact",
        description: "GlobalGiving is a global crowdfunding community that connects donors with grassroots projects around the world. They vet all projects to ensure they're legitimate and effective.",
        keywords: "crowdfunding, nonprofit, global, donations",
        clicks: 53
    },
    {
        name: "Kiva",
        url: "https://kiva.org",
        category: "Social Impact",
        description: "Kiva is a micro-lending platform that allows people to lend money to low-income entrepreneurs and students in over 80 countries. Loans start at just $25.",
        keywords: "microfinance, lending, social, entrepreneurs",
        clicks: 78
    },
    {
        name: "DonorsChoose",
        url: "https://donorschoose.org",
        category: "Social Impact",
        description: "DonorsChoose is a crowdfunding platform specifically for public school teachers. Teachers can request resources for their classrooms, and donors can choose which projects to fund.",
        keywords: "education, crowdfunding, teachers, schools",
        clicks: 62
    },
    {
        name: "Idealist",
        url: "https://idealist.org",
        category: "Social Impact",
        description: "Idealist connects people with volunteering opportunities, jobs, internships, and events at mission-driven organizations. It's a hub for finding ways to make a difference.",
        keywords: "volunteer, jobs, nonprofit, opportunities",
        clicks: 49
    },

    // Creative Commons
    {
        name: "Creative Commons",
        url: "https://creativecommons.org",
        category: "Creative Commons",
        description: "Creative Commons provides free, easy-to-use copyright licenses that allow creators to share their work with specific permissions. Their licenses are used worldwide to enable sharing and collaboration.",
        keywords: "licenses, creative, open, sharing",
        clicks: 88
    },
    {
        name: "Unsplash",
        url: "https://unsplash.com",
        category: "Creative Commons",
        description: "Unsplash is a platform for freely usable images contributed by photographers worldwide. All photos can be used for free for commercial and noncommercial purposes.",
        keywords: "photos, images, free, stock, creative",
        clicks: 156
    },
    {
        name: "Pixabay",
        url: "https://pixabay.com",
        category: "Creative Commons",
        description: "Pixabay offers over 2 million high-quality stock photos, illustrations, and vectors that are free to use without attribution. All content is released under Creative Commons CC0.",
        keywords: "images, photos, free, public domain",
        clicks: 134
    },
    {
        name: "Freesound",
        url: "https://freesound.org",
        category: "Creative Commons",
        description: "Freesound is a collaborative database of audio snippets, samples, recordings, and bleeps released under Creative Commons licenses. It's a valuable resource for musicians and sound designers.",
        keywords: "audio, sounds, free, creative",
        clicks: 67
    },
    {
        name: "Openclipart",
        url: "https://openclipart.org",
        category: "Creative Commons",
        description: "Openclipart is a public domain clip art library with thousands of vector graphics that can be used freely for any purpose. All clipart is released under CC0 Public Domain Dedication.",
        keywords: "clip art, vector, free, public domain",
        clicks: 45
    },

    // Palestinian Liberation
    {
        name: "Electronic Intifada",
        url: "https://electronicintifada.net",
        category: "Palestinian Liberation",
        description: "Electronic Intifada is an independent online news publication focusing on the Israeli-Palestinian conflict from a Palestinian perspective. It provides analysis, news, and opinion pieces.",
        keywords: "palestine, news, middle east, liberation, rights",
        clicks: 65
    },
    {
        name: "BDS Movement",
        url: "https://bdsmovement.net",
        category: "Palestinian Liberation", 
        description: "The BDS Movement (Boycott, Divestment, Sanctions) works to end international support for Israel's oppression of Palestinians. It promotes nonviolent pressure on Israel to comply with international law.",
        keywords: "palestine, boycott, divestment, sanctions, rights",
        clicks: 89
    },
    {
        name: "Mondoweiss",
        url: "https://mondoweiss.net",
        category: "Palestinian Liberation",
        description: "Mondoweiss is a news website devoted to covering American foreign policy in the Middle East, chiefly from a progressive Jewish perspective. It provides critical coverage of the Israel-Palestine conflict.",
        keywords: "palestine, news, israel, foreign policy",
        clicks: 57
    },
    {
        name: "Al-Shabaka",
        url: "https://al-shabaka.org",
        category: "Palestinian Liberation",
        description: "Al-Shabaka is an independent, non-partisan Palestinian policy network. Their mission is to educate and foster public debate on Palestinian human rights and self-determination.",
        keywords: "palestine, policy, analysis, think tank",
        clicks: 42
    },
    {
        name: "Addameer",
        url: "https://addameer.org",
        category: "Palestinian Liberation",
        description: "Addameer is a Palestinian non-governmental organization that works to support Palestinian political prisoners held in Israeli and Palestinian prisons. They provide legal and advocacy support.",
        keywords: "palestine, prisoners, human rights, legal",
        clicks: 38
    },

    // Health & Wellness
    {
        name: "Mayo Clinic",
        url: "https://mayoclinic.org",
        category: "Health & Wellness",
        description: "Mayo Clinic is a nonprofit academic medical center focused on integrated clinical practice, education, and research. They provide expert, whole-person care to everyone who needs healing.",
        keywords: "health, medical, clinic, wellness, doctors",
        clicks: 189
    },
    {
        name: "WebMD",
        url: "https://webmd.com",
        category: "Health & Wellness",
        description: "WebMD provides valuable health information, tools for managing your health, and support to those who seek information. They offer credible, in-depth health news and features.",
        keywords: "health, information, symptoms, conditions",
        clicks: 234
    },
    {
        name: "Healthline",
        url: "https://healthline.com",
        category: "Health & Wellness",
        description: "Healthline provides medically reviewed health information and news. Their content is created by healthcare professionals and reviewed by medical experts for accuracy.",
        keywords: "health, wellness, medical, information",
        clicks: 178
    },
    {
        name: "CDC",
        url: "https://cdc.gov",
        category: "Health & Wellness",
        description: "The Centers for Disease Control and Prevention is the national public health agency of the United States. It works to protect public health and safety through disease control and prevention.",
        keywords: "health, disease, prevention, public health",
        clicks: 156
    },
    {
        name: "WHO",
        url: "https://who.int",
        category: "Health & Wellness",
        description: "The World Health Organization is a specialized agency of the United Nations responsible for international public health. It provides leadership on global health matters.",
        keywords: "health, global, world, organization",
        clicks: 142
    },

    // Verified Connect Families (3 active, others deactivated as templates)
    {
        name: "Ahmed Family - Gaza Relief",
        url: "https://gofundme.com/ahmed-family-gaza",
        category: "Verified Connect",
        description: "The Ahmed family lost their home in northern Gaza during the recent conflict. They need support for temporary shelter, food, and medical care for their three young children.",
        keywords: "gaza, family, emergency, shelter, medical",
        clicks: 89,
        type: "family",
        location: "Gaza, Palestine",
        story: "After their home was destroyed, the Ahmed family has been living in temporary shelters. Father Youssef was injured and needs ongoing medical care. They hope to find stable housing and rebuild their lives.",
        imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Fatima & Children - Medical Fund",
        url: "https://chuffed.org/fatima-medical",
        category: "Verified Connect",
        description: "Fatima needs support for her daughter's ongoing cancer treatment. They've exhausted their savings and need help covering medical expenses and transportation to hospital visits.",
        keywords: "medical, cancer, treatment, children, healthcare",
        clicks: 67,
        type: "family",
        location: "Ramallah, Palestine",
        story: "Fatima's 8-year-old daughter Leila was diagnosed with leukemia last year. Treatment costs have been overwhelming, and they need help with medical bills, medications, and travel expenses for hospital visits.",
        imageUrl: "https://images.unsplash.com/photo-1516549655669-df4c6daf1bcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Mohammed Family - Education Fund",
        url: "https://gofundme.com/mohammed-education",
        category: "Verified Connect",
        description: "Support the Mohammed family's three university students who lost their scholarships due to financial hardship. Help them complete their education and build a better future.",
        keywords: "education, university, students, scholarships, future",
        clicks: 54,
        type: "family",
        location: "Hebron, Palestine",
        story: "Three siblings studying engineering, medicine, and computer science risk dropping out due to financial difficulties after their father lost his job. They're close to graduation and need help with tuition and living expenses.",
        imageUrl: "https://images.unsplash.com/photo-1524178234883-043d5c3f3cf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    // ========== DEACTIVATED TEMPLATES ==========
    // Copy, paste, uncomment, and modify to add more families.
    /*
    {
        name: "Samir's Small Business Recovery",
        url: "https://chuffed.org/samir-business",
        category: "Verified Connect",
        description: "Samir's small grocery store was damaged during recent unrest. Help him repair his store and restock inventory to support his family of seven.",
        keywords: "business, recovery, small business, livelihood, family",
        clicks: 42,
        type: "family",
        location: "Nablus, Palestine",
        story: "Samir's grocery store, which supported his extended family, was vandalized and looted. He needs help with repairs, security upgrades, and restocking inventory to get back on his feet.",
        imageUrl: "https://images.unsplash.com/photo-1602488283247-29bf1f5b148a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Layla's Art Therapy Program",
        url: "https://gofundme.com/layla-art-therapy",
        category: "Verified Connect",
        description: "Layla is an art therapist working with traumatized children in refugee camps. Support her program that provides healing through creative expression.",
        keywords: "therapy, children, trauma, art, mental health",
        clicks: 38,
        type: "family",
        location: "Jenin Refugee Camp, Palestine",
        story: "Layla runs a volunteer art therapy program for children affected by violence and displacement. She needs funds for art supplies, workshop space, and to expand the program to more children.",
        imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Elderly Care - Abu Ali & Family",
        url: "https://chuffed.org/abu-ali-care",
        category: "Verified Connect",
        description: "Support Abu Ali, an elderly man with mobility issues, and his family who care for him. They need help with medical equipment and home modifications.",
        keywords: "elderly, care, medical equipment, disability, family",
        clicks: 31,
        type: "family",
        location: "Bethlehem, Palestine",
        story: "Abu Ali, 78, has limited mobility after a stroke. His daughter and grandchildren care for him but struggle with medical expenses and needed home modifications for accessibility.",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Yousef Family - Home Reconstruction",
        url: "https://gofundme.com/yousef-family-home",
        category: "Verified Connect",
        description: "The Yousef family's home was partially destroyed in an airstrike. They need support to rebuild their home and replace damaged furniture and essentials.",
        keywords: "home, reconstruction, airstrike, shelter, emergency",
        clicks: 28,
        type: "family",
        location: "Gaza City, Palestine",
        story: "The Yousef family's apartment was hit by an airstrike, damaging two rooms and destroying their kitchen. They are currently living in one room and need funds to rebuild and replace essential items.",
        imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Aisha's Medical Treatment",
        url: "https://chuffed.org/aisha-medical",
        category: "Verified Connect",
        description: "Aisha, a 5-year-old girl, needs surgery to correct a congenital heart defect. Her family cannot afford the surgery and related medical expenses.",
        keywords: "medical, surgery, children, heart, healthcare",
        clicks: 35,
        type: "family",
        location: "Jerusalem, Palestine",
        story: "Aisha was born with a heart condition that requires surgery. The surgery is available but her family cannot afford it. They need help to cover the surgery and post-operative care.",
        imageUrl: "https://images.unsplash.com/photo-1516549655669-df4c6daf1bcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Hassan's University Tuition",
        url: "https://gofundme.com/hassan-tuition",
        category: "Verified Connect",
        description: "Hassan is a brilliant student who got accepted to study computer science at a university but cannot afford the tuition fees.",
        keywords: "education, university, tuition, student, computer science",
        clicks: 22,
        type: "family",
        location: "Ramallah, Palestine",
        story: "Hassan comes from a low-income family and has been accepted to study computer science. He needs help to cover his tuition fees for the first year so he can start his studies.",
        imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Nadia's Orphanage Support",
        url: "https://chuffed.org/nadia-orphanage",
        category: "Verified Connect",
        description: "Nadia runs a small orphanage for 20 children and needs support to provide food, education, and shelter for the children.",
        keywords: "orphanage, children, education, shelter, food",
        clicks: 45,
        type: "family",
        location: "Bethlehem, Palestine",
        story: "Nadia's orphanage is struggling to provide for the children due to rising costs. She needs funds to cover food, school supplies, and maintenance of the building.",
        imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6957b67b9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Omar's Wheelchair Accessible Van",
        url: "https://gofundme.com/omar-van",
        category: "Verified Connect",
        description: "Omar is a wheelchair user and needs a wheelchair accessible van to be able to get to work and medical appointments.",
        keywords: "disability, wheelchair, accessible, transportation, mobility",
        clicks: 18,
        type: "family",
        location: "Hebron, Palestine",
        story: "Omar's old wheelchair accessible van broke down and he cannot afford a new one. He needs a van to maintain his independence and continue working.",
        imageUrl: "https://images.unsplash.com/photo-1563720223485-8d6d5c5f2c15?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Rana's Women's Shelter",
        url: "https://chuffed.org/rana-shelter",
        category: "Verified Connect",
        description: "Rana runs a shelter for women and children fleeing domestic violence. The shelter needs funds to expand and provide more services.",
        keywords: "women, shelter, domestic violence, support, safety",
        clicks: 39,
        type: "family",
        location: "Nablus, Palestine",
        story: "Rana's shelter is currently at capacity and she wants to expand to help more women and children. She needs funds to rent a larger space and hire additional staff.",
        imageUrl: "https://images.unsplash.com/photo-1519452639340-7f0d4e494d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
    */
    // ========== END DEACTIVATED TEMPLATES ==========
];
// =============================================
// VERIFIED SITES DATA - END
// =============================================