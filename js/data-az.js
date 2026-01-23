// Azerbaijani Language Content Data
// Bu fayl Azərbaycan dilində bütün məzmunu ehtiva edir
// Konfiqurasiya (rənglər, bağlantılar) config.js faylındadır

// UI Text
const uiText = {
    // Header/Navigation
    siteName: 'Daşlı Qala Hotel Gəncə',
    navRooms: 'Otaqlar',
    navServices: 'Xidmətlər',
    navExperiences: 'Təcrübələr',
    navGallery: 'Qalereya',
    navLocation: 'Ünvan',
    bookNow: 'Sifariş Et',

    // Meta Data
    metaTitle: 'Daşlı Qala Hotel - Gəncəni Kəşf Edin',
    metaDescription: 'Daşlı Qala Hoteldə tarix, rahatlıq və mədəniyyətin mükəmməl qarışığını yaşayın. Gəncədə yerləşən otelimizdə yerinizi bu gün sifariş edin!',
    metaKeywords: 'Daşlı Qala Hotel, Gəncə Otel, Azərbaycan Otel, Gəncə Qonaqlama, Hostel Gəncə, Daşlı Qala',

    // Hero Section
    heroTitle: 'Gəncəni bizimlə kəşf et',
    heroSubtitle: 'Daşlı Qala Hotel, münasib qiymətə rahatlıq və mədəniyyətin mükəmməl qarışığı',
    exploreRooms: 'Otaqlara bax',

    // Section Headings
    roomsTitle: 'Bizim Otaqlar',
    roomsSubtitle: 'Rahat, təmiz və səyahətçilər üçün dizayn edilmiş otaqlarımızı sizlərə təqdim edirik',
    featuresTitle: 'Hotel xidmətlərimiz',
    featuresSubtitle: 'Sizin rahatlığınız üçün hər şeyi biz artıq düşünmüşük',
    experiencesTitle: 'Gəncə Təcrübələri',
    experiencesSubtitle: 'Azərbaycanın ikinci ən böyük şəhərinin gizli incilərini kəşf edin',
    eventsTitle: 'Yerli Tədbirlər',
    eventsSubtitle: 'Gəncə şəhərində və ətraf rayonlarda keçirilən tədbirlərə qoşulun və unudulmaz təcrübələr yaşayın',
    galleryTitle: 'Qalereya',
    gallerySubtitle: 'Daşlı Qala Hoteldə turist həyatına bir nəzər',
    offersTitle: 'Xüsusi Təkliflər',
    offersSubtitle: 'Gəncə səfərlərinizdə bizimlə qənaət edin',
    faqTitle: 'Tez-tez Verilən Suallar',
    locationTitle: 'Xəritəyə keçid',
    locationDesc: 'Gəncənin mərkəzində, əsas meydandan cəmi 5 dəqiqəlik piyada məsafədə yerləşirik',

    // Buttons & Links
    viewAllActivities: 'Bütün fəaliyyətlərə bax',
    getDirections: 'İstiqamət Al',
    viewOnInstagram: 'Instagrama keçid',
    startingFrom: 'Qiymət',
    perNight: '/otaq',

    // Footer
    footerTagline: 'Gəncənin mərkəzində evinizdən uzaqda eviniz. Ən münasib qiymətə Gəncəyə səfər edib mədəniyyəti yaşayın, insanlarla tanış olun, tarixə toxunun.',
    quickLinks: 'Keçidlər',
    followUs: 'Bizi İzləyin',
    copyright: '© 2025 Daşlı Qala Hotel Gəncə. Bütün hüquqlar qorunur.'
};

const experiences = [
    {
        title: "Gəncə Şəhər Gəzintisi",
        desc: "Yerli bələdçimiz ilə tarixi küçələri, Şüşə Evi və Xan Bağını kəşf edin. Gəncənin gizli incilərini və zəngin tarixini kəşf edin.",
        image: "https://images.unsplash.com/photo-1544976735-d72b27464161?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        link: "https://instagram.com",
        classes: "md:col-span-2 lg:col-span-2",
        badge: "Pulsuz"
    },
    {
        title: "Şərab Dadımı",
        desc: "Yerli üzümlükləri ziyarət edin və regionun ən yaxşı şərablarını dadın. Şərab sevənlər üçün mükəmməl axşam.",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "https://instagram.com"
    },
    {
        title: "Hacıkənd Meşəsi Gəzintisi",
        desc: "Şəhərdən cəmi 30 dəqiqəlik məsafədə təbiətə qaçın. Hacıkənd Meşəsinin təmiz havasından və gözəl cığırlarından həzz alın.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "https://instagram.com"
    },
    {
        title: "Azərbaycan Yemək Dərsi",
        desc: "Dolma və Plov kimi ənənəvi Azərbaycan yeməklərini bişirməyi öyrənin. Dadlı praktiki təcrübə.",
        image: "https://images.unsplash.com/photo-1582234372722-c0d6d63322d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "https://instagram.com"
    }
];

// Room Data
const rooms = [
    {
        title: "Standart İki Nəfərlik Otaq",
        desc: "Gözəl şəhər mənzərəsi və rahat atmosfer təklif edən rahat iki nəfərlik otaq.",
        image: "images/room_image1.jpg",
        price: "120 ₼",
        badge: "Ən Populyar",
        features: ["Pulsuz Wi-Fi", "Kondisioner", "Yeni hamam", "Dəsmallar və başmaqlar"],
        link: "https://dashli-gala-hotel.hotelrunner.com/bv3/search?locale=en-US&currency=AZN"
    },
    {
        title: "Standart Üç Nəfərlik Otaq",
        desc: "Gözəl şəhər mənzərəsi və rahat atmosfer təklif edən rahat üç nəfərlik otaq.",
        image: "images/room_image2.jpg",
        price: "150 ₼",
        features: ["Pulsuz Wi-Fi", "Kondisioner", "Yeni hamam", "Dəsmallar və başmaqlar"],
        link: "https://dashli-gala-hotel.hotelrunner.com/bv3/search?locale=en-US&currency=AZN"
    },
    {
        title: "Delyuks Ailə Otağı",
        desc: "Delyuks aile otağı. Minimum 2 nəfər üçün başlayan qiymətlər.",
        image: "images/room_image3.jpg",
        price: "185 ₼",
        features: ["Pulsuz Wi-Fi", "Kondisioner", "Yeni hamam", "Dəsmallar və başmaqlar"],
        link: "https://dashli-gala-hotel.hotelrunner.com/bv3/search?locale=en-US&currency=AZN"
    },
    {
        title: "Ailə Süitləri",
        desc: "Ailə Süitləri. Minimum 2 nəfər üçün başlayan qiymətlər.",
        image: "images/room_image4.jpg",
        price: "195 ₼",
        features: ["Pulsuz Wi-Fi", "Kondisioner", "Yeni hamam", "Dəsmallar və başmaqlar"],
        link: "https://dashli-gala-hotel.hotelrunner.com/bv3/search?locale=en-US&currency=AZN"
    }
];

// Features Data
const features = [
    {
        title: "Pulsuz Sürətli Wi-Fi",
        desc: "Hər yerdə əlaqədə qalın.",
        iconPath: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a15.5 15.5 0 0114.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0",
        colorClass: "blue"
    },
    {
        title: "Pulsuz Səhər Yeməyi",
        desc: "Dadlı yerli səhər yeməyi.",
        iconPath: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
        colorClass: "yellow"
    },
    {
        title: "Pulsuz Parkinq",
        desc: "Avtomobiliniz üçün təhlükəsiz yer.",
        iconPath: "M5 10l7-7m0 0l7 7m-7-7v18",
        colorClass: "green"
    },
    {
        title: "Beynəlxalq turist Icma",
        desc: "Dünyanın hər yerindən səyahətçilərlə tanış olun.",
        iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
        colorClass: "red"
    },
    {
        title: "24/7 Qəbul",
        desc: "24/7 qəbul xidməti.",
        iconPath: "M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3",
        colorClass: "blue"
    },
    {
        title: "Çoxdilli Personal",
        desc: "ingəlis, rus, Azərbaycan dillində danışır",
        iconPath: "m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802",
        colorClass: "green"
    },
    {
        title: "Pullu Valet Parkinq",
        desc: "Pullu yer altı parkinqi",
        iconPath: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
        colorClass: "yellow"
    },
    {
        title: "Müxtəlif əyləncələr",
        desc: "Kompleks daxilində müxtəlif əyləncə imkanları",
        iconPath: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
        colorClass: "blue"
    }
];

// Events Data
const events = [
    {
        title: "Pub Gəzməsi Gecəsi",
        time: "Hər Cümə Axşamı",
        timeBadge: "20:00",
        desc: "Gəncənin ən yaxşı barlarını kəşf etmək üçün əfsanəvi bir gecəyə qoşulun. Pulsuz şotlar daxildir!",
        link: "https://instagram.com"
    },
    {
        title: "Milad Şam Yeməyi",
        time: "Dekabr 24 - Dekabr 25",
        timeBadge: "Bütün Gün",
        desc: "Azərbaycan üslubunda ənənəvi Milad şam yeməyi. Hər kəs yemək və ya içki gətirir.",
        link: "https://instagram.com"
    },
    {
        title: "Yeni İl Partiyası",
        time: "Dekabr 29 - Dekabr 30",
        timeBadge: "Bütün Gün",
        desc: "Azərbaycan üslubunda Yeni İl partiyası. Hər kəs yemək və ya içki gətirir.",
        link: "https://instagram.com"
    }
];

// Offers Data
const offers = [
    {
        title: "Erkən Bron Xüsusi Təklifi",
        discount: "20% ENDİRİM",
        description: "7+ gün əvvəl sifariş edin və qalmanızda böyük endirim əldə edin. Bütün otaq növləri üçün keçərlidir.",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-100",
        textColor: "text-blue-600",
        buttonColor: "bg-blue-600",
        buttonHover: "hover:bg-blue-700",
        link: "https://booking.com"
    },
    {
        title: "Daha Uzun Qalın, Daha Çox Qənaət Edin",
        discount: "25% ENDİRİM",
        description: "Bir həftə (7+ gecə) sifariş edin və eksklüziv endirimdən faydalanın. Rəqəmsal köçərilər üçün mükəmməl.",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-100",
        textColor: "text-purple-600",
        buttonColor: "bg-purple-600",
        buttonHover: "hover:bg-purple-700",
        link: "https://booking.com"
    },
    {
        title: "Tələbə Endirimi",
        discount: "İstənilən vaxt 15% ENDİRİM",
        description: "Qeydiyyat zamanı etibarlı tələbə bilətinizi göstərin və bütün qalma müddətində endirim əldə edin.",
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
        question: "Giriş və çıxış vaxtları?",
        answer: "Giriş saat 14:00-dan başlayır. Çıxış saat 11:00-a qədərdir. Erkən gəlsəniz və ya gec çıxsanız, baqaj saxlama təklif edirik."
    },
    {
        question: "Səhər yeməyi daxildirmi?",
        answer: "Səhər yeməyi kiçik əlavə ödəniş ($5) ilə mövcuddur. Yerli çörək, pendir, yumurta, mürəbbə və limitsiz çay/qəhvə daxildir."
    },
    {
        question: "Dolaplarınız varmı?",
        answer: "Bəli, bütün yataqxana çarpayıları şəxsi dolap ilə təchiz edilib. Öz qıfılınızı gətirin və ya qəbulda $2-ya alın."
    },
    {
        question: "Wi-Fi pulsuzmu?",
        answer: "Əlbəttə! Bütün otaqlar və ümumi sahələr daxil olmaqla, bütün hosteldə sürətli, pulsuz Wi-Fi təqdim edirik."
    },
    {
        question: "Kart ilə ödəniş qəbul edirsinizmi?",
        answer: "Bəli, bütün sifarişlər üçün kart ilə ödəniş qəbul edirik."
    }
];

// Gallery Data
const galleryItems = [
    {
        image: "images/room_image1.jpg",
        title: "Standart 2 nəfərlik otaqlar",
        caption: "Rahat standart iki nəfərlik otaqlarımız."
    },
    {
        image: "images/room_image2.jpg",
        title: "Standart 3 nəfərlik otaqlar",
        caption: "Standart üç nəfərlik otaqlarımızda gün batımından həzz alın."
    },
    {
        image: "images/room_image3.jpg",
        title: "Delyuks Ailə Otaqları",
        caption: "Təmiz və geniş ailə otaqları."
    },
    {
        image: "images/room_image4.jpg",
        title: "Ailə Süitləri",
        caption: "Ən yaxşı təcrübəniz üçün tam təchiz olunmuş ailəvi süitlər."
    },
    {
        image: "images/room_image5.jpg",
        title: "Delyuks Ailə Otaqları",
        caption: "Ən yaxşı təcrübəniz üçün gözəl təchiz olunmuş ailə otaqları."
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
