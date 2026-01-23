// English Language Content Data
// This file contains all content in English
// Configuration (colors, links) is in config.js

// UI Text
const uiText = {
    // Header/Navigation
    siteName: 'Dashli Gala Hotel',
    navRooms: 'Rooms',
    navServices: 'Services',
    navExperiences: 'Experiences',
    navGallery: 'Gallery',
    navLocation: 'Location',
    bookNow: 'Book Now',

    // Meta Data
    metaTitle: 'Dashli Gala Hotel - Experience Ganja',
    metaDescription: 'Experience the perfect blend of history, comfort, and culture at Dashli Gala Hotel in Ganja, Azerbaijan. Book your stay today!',
    metaKeywords: 'Dashli Gala Hotel, Ganja Hotel, Azerbaijan Hotel, Ganja Accommodation, Hostel Ganja, Dashli Gala',

    // Hero Section
    heroTitle: 'Experience Ganja',
    heroSubtitle: 'The perfect blend of history, comfort, and culture at Dashli Gala Hotel.',
    exploreRooms: 'Explore Rooms',

    // Section Headings
    roomsTitle: 'Our Rooms',
    roomsSubtitle: 'Comfortable, clean, and designed for travelers.',
    featuresTitle: 'Hotel Features',
    featuresSubtitle: 'Everything you need for a comfortable stay.',
    experiencesTitle: 'Ganja Experiences',
    experiencesSubtitle: 'Discover the hidden gems of Azerbaijan\'s second largest city.',
    eventsTitle: 'Upcoming Events',
    eventsSubtitle: 'Join the fun and meet new friends.',
    galleryTitle: 'Gallery',
    gallerySubtitle: 'A glimpse into the Dashli Gala Hotel life.',
    offersTitle: 'Special Offers',
    offersSubtitle: 'Save money on your adventures.',
    faqTitle: 'Frequently Asked Questions',
    locationTitle: 'Find Us',
    locationDesc: 'Located in the heart of Ganja, just 5 minutes walk from the main square.',

    // Buttons & Links
    viewAllActivities: 'View all activities',
    getDirections: 'Get Directions',
    viewOnInstagram: 'View on Instagram',
    startingFrom: 'Starting from',
    perNight: '/night',

    // Footer
    footerTagline: 'Your home away from home in the heart of Azerbaijan. Experience the culture, meet the people, live the history.',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    copyright: '© 2025 Dashli Gala Hotel. All rights reserved.'
};

const experiences = [
    {
        title: "Ganja City Walking Tour",
        desc: "Explore the historic streets, the Bottle House, and the Khan's Garden with our local guide. Discover the hidden gems and rich history of Ganja.",
        image: "https://images.unsplash.com/photo-1544976735-d72b27464161?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        link: "https://instagram.com",
        classes: "md:col-span-2 lg:col-span-2",
        badge: "Free"
    },
    {
        title: "Wine Tasting",
        desc: "Visit local vineyards and taste the finest wines of the region. A perfect evening for wine lovers.",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "https://instagram.com"
    },
    {
        title: "Hajikand Forest Hike",
        desc: "Escape to nature just 30 mins away from the city. Enjoy the fresh air and beautiful trails of Hajikand Forest.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "https://instagram.com"
    },
    {
        title: "Azeri Cooking Class",
        desc: "Learn to cook traditional Azeri dishes like Dolma and Plov. A delicious hands-on experience.",
        image: "https://images.unsplash.com/photo-1582234372722-c0d6d63322d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "https://instagram.com"
    }
];

// Room Data
const rooms = [
    {
        title: "Standard Double or Twin Room",
        desc: "A comfortable double or twin room offering beautiful city views and a cozy atmosphere.",
        image: "images/room_image1.jpg",
        price: "120 ₼",
        badge: "Most Popular",
        features: ["Free Wi-Fi", "Air conditioning", "Modern Bathroom", "Towels and slippers"],
        link: "https://dashli-gala-hotel.hotelrunner.com/bv3/search?locale=en-US&currency=AZN"
    },
    {
        title: "Standard Triple Room",
        desc: "A comfortable triple room offering beautiful city views and a cozy atmosphere.",
        image: "images/room_image2.jpg",
        price: "150 ₼",
        features: ["Free Wi-Fi", "Air conditioning", "Modern Bathroom", "Towels and slippers"],
        link: "https://dashli-gala-hotel.hotelrunner.com/bv3/search?locale=en-US&currency=AZN"
    },
    {
        title: "Deluxe Family Room",
        desc: "A comfortable family room offering beautiful city views and a cozy atmosphere.",
        image: "images/room_image3.jpg",
        price: "185 ₼",
        features: ["Free Wi-Fi", "Air conditioning", "Modern Bathroom", "Towels and slippers"],
        link: "https://dashli-gala-hotel.hotelrunner.com/bv3/search?locale=en-US&currency=AZN"
    },
    {
        title: "Family Suite",
        desc: "A comfortable family suite offering beautiful city views and a cozy atmosphere.",
        image: "images/room_image4.jpg",
        price: "195 ₼",
        features: ["Free Wi-Fi", "Air conditioning", "Modern Bathroom", "Towels and slippers"],
        link: "https://dashli-gala-hotel.hotelrunner.com/bv3/search?locale=en-US&currency=AZN"
    }
];

// Features Data
const features = [
    {
        title: "Free Fast Wi-Fi",
        desc: "Stay connected everywhere.",
        iconPath: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a15.5 15.5 0 0114.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0",
        colorClass: "blue"
    },
    {
        title: "Free Breakfast",
        desc: "Delicious local breakfast.",
        iconPath: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
        colorClass: "yellow"
    },
    {
        title: "Free Parking",
        desc: "Secure spot for your car.",
        iconPath: "M5 10l7-7m0 0l7 7m-7-7v18",
        colorClass: "green"
    },
    {
        title: "Community",
        desc: "Meet travelers worldwide.",
        iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
        colorClass: "red"
    },
    {
        title: "24/7 Reception",
        desc: "24/7 reception service.",
        iconPath: "M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3",
        colorClass: "blue"
    },
    {
        title: "Multi Language",
        desc: "Staff speaks English, Russian, Azerbaijani",
        iconPath: "m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802",
        colorClass: "green"
    },
    {
        title: "Paid Valet Parking",
        desc: "Paid underground parking",
        iconPath: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
        colorClass: "yellow"
    },
    {
        title: "Entertainment",
        desc: "Large selection of family entertainment",
        iconPath: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
        colorClass: "blue"
    }
];

// Events Data
const events = [
    {
        title: "Pub Crawl Night",
        time: "Every Thursday",
        timeBadge: "20:00",
        desc: "Join us for a legendary night out exploring the best bars in Ganja. Free shots included!",
        link: "https://instagram.com"
    },
    {
        title: "Christmas Dinner",
        time: "Dec 24 - Dec 25",
        timeBadge: "All Day",
        desc: "Traditional Azeri-style Christmas dinner. Everyone brings a dish or drink to share.",
        link: "https://instagram.com"
    },
    {
        title: "New Year Party",
        time: "Dec 29 - Dec 30",
        timeBadge: "All Day",
        desc: "Azeri-style New Year party. Everyone brings a dish or drink to share.",
        link: "https://instagram.com"
    }
];

// Offers Data
const offers = [
    {
        title: "Early Bird Special",
        discount: "20% OFF",
        description: "Book 7+ days in advance and save big on your stay. Valid for all room types.",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-100",
        textColor: "text-blue-600",
        buttonColor: "bg-blue-600",
        buttonHover: "hover:bg-blue-700",
        link: "https://booking.com"
    },
    {
        title: "Stay Longer, Save More",
        discount: "25% OFF",
        description: "Book a week (7+ nights) and enjoy exclusive savings. Perfect for digital nomads.",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-100",
        textColor: "text-purple-600",
        buttonColor: "bg-purple-600",
        buttonHover: "hover:bg-purple-700",
        link: "https://booking.com"
    },
    {
        title: "Student Saver",
        discount: "15% OFF anytime",
        description: "Show your valid student ID upon check-in and get a discount on your entire stay.",
        bgColor: "bg-green-50",
        borderColor: "border-green-100",
        textColor: "text-green-600",
        buttonColor: "bg-green-600",
        buttonHover: "hover:bg-green-700",
        link: "https://booking.com"
    }
];

// FAQ Data
const faqs = [
    {
        question: "Check-in and Check-out times?",
        answer: "Check-in is from 14:00 PM onwards. Check-out is until 11:00 AM. We offer luggage storage if you arrive early or leave late."
    },
    {
        question: "Is breakfast included?",
        answer: "Breakfast is available for a small extra fee of $5. It includes local breads, cheeses, eggs, jams, and unlimited tea/coffee."
    },
    {
        question: "Do you have lockers?",
        answer: "Yes, all dorm beds come with a personal locker. Bring your own padlock or purchase one at reception for $2."
    },
    {
        question: "Is Wi-Fi free?",
        answer: "Absolutely! We provide fast, free Wi-Fi throughout the entire Hotel, including all rooms and common areas."
    },
    {
        question: "Do accept card payments?",
        answer: "Yes, we accept card payments for all bookings."
    }
];

// Gallery Data
const galleryItems = [
    {
        image: "images/room_image1.jpg",
        title: "Standard Double or Twin Room",
        caption: "Our cozy standard double or twin rooms."
    },
    {
        image: "images/room_image2.jpg",
        title: "Standard Triple Room",
        caption: "Enjoy the sunset from our standard triple rooms."
    },
    {
        image: "images/room_image3.jpg",
        title: "Deluxe Family Rooms",
        caption: "Clean and large family rooms."
    },
    {
        image: "images/room_image4.jpg",
        title: "Family Suites",
        caption: "Fully equipped family suites for your best experience."
    },
    {
        image: "images/room_image5.jpg",
        title: "Deluxe Family Rooms",
        caption: "Nicely equipped family rooms for your best experience."
    },
    {
        image: "images/general_image.jpg",
        title: "Hotel building",
        caption: "Our hotel building."
    },
    {
        image: "images/bathroom1.jpg",
        title: "Hotel Bathroom",
        caption: "Clean and large hotel bathrooms."
    },
    {
        image: "images/bathroom2.jpg",
        title: "Hotel Bathroom",
        caption: "Clean and large hotel bathrooms."
    },
    {
        image: "images/general_image2.jpg",
        title: "Cozy and Large Spaces",
        caption: "Relax in our cozy and large corridors and lounges."
    },
    {
        image: "images/Deluxe-Family-Room-sitting-area.jpg",
        title: "Deluxe Family Room Sitting Area",
        caption: "Relax in our cozy and large sitting area."
    },
    {
        image: "images/Family-Suite1.jpg",
        title: "Family Suite",
        caption: "Relax in our family suite."
    },
    {
        image: "images/general-entrance.jpg",
        title: "Hotel Reception",
        caption: "Our hotel reception."
    }
];

