// Main Content Data
// You can edit the content of the website here.
// Images can be local paths (e.g. "images/room1.jpg") or external URLs.

// Site Color Palette
// Change these colors to customize the entire site's look
const siteColors = {
    primary: '#D4AF37',      // Gold - used for CTAs, accents, highlights
    primaryHover: '#b89127ff', // Darker gold for hover states
    secondary: '#1a1a1a',    // Dark - used for text, headers, footer
    background: '#f9fafb'    // Light gray - page background
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
        title: "Mixed Dorm (8 Bed)",
        desc: "Spacious dormitory with privacy curtains, personal lockers, and reading lights.",
        image: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: "$15",
        badge: "Most Popular",
        features: ["Free Wi-Fi", "Air Conditioning", "Personal Locker"],
        link: "https://booking.com"
    },
    {
        title: "Female Dorm (6 Bed)",
        desc: "Secure and cozy dormitory exclusively for female travelers.",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: "$18",
        features: ["Ensuite Bathroom", "Hairdryer", "Vanity Mirror"],
        link: "https://booking.com"
    },
    {
        title: "Private Double Room",
        desc: "Perfect for couples or friends seeking extra privacy and comfort.",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: "$45",
        features: ["Queen Size Bed", "Smart TV", "Towels Included"],
        link: "https://booking.com"
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
        title: "Paid Breakfast",
        desc: "Delicious local start.",
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
        answer: "Absolutely! We provide fast, free Wi-Fi throughout the entire hostel, including all rooms and common areas."
    },
    {
        question: "Do accept card payments?",
        answer: "Yes, we accept card payments for all bookings."
    }
];
