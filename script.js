// JAVASCRIPT
// 1. Preloader Logic
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
});

// 2. Mobile Menu Toggle
function toggleMenu() {
    const nav = document.getElementById('nav-list');
    nav.classList.toggle('active');
}

// 3. Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 4. Smooth Scrolling Logic
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

            const navList = document.getElementById('nav-list');
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        }
    });
});

// 5. Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    root: null,
    threshold: 0.15,
    rootMargin: "0px"
});

revealElements.forEach(el => revealObserver.observe(el));

// 6. Parallax Effect
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    heroBg.style.transform = `translateY(${scrollPosition * 0.5}px) scale(1.1)`;
});


// < !--SCHEMA MARKUP(JSON - LD) - This tells Google EXACTLY what your business is-- >
    // <script type="application/ld+json">
    type =  "application/ld+json" > {
            "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": "Eedee Interiors",
        "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
        "@id": "https://www.yourwebsite.com",
        "url": "https://www.promiseeedeeinterior.com",
        "telephone": "+2348107974034",
        "priceRange": "$$$",
        "address": {
            "@type": "500",
        "streetAddress": "45 pipeline Rumuokwurisi",
        "addressLocality": "portharcourt",
        "addressRegion": "Cross River State",
        "postalCode": "",
        "addressCountry": "Nigeria"
  },
        "geo": {
            "@type": "GeoCoordinates",
        "latitude": 40.7128,
        "longitude": -74.0060
  },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
  },
        "sameAs": [
        "https://www.facebook.com/",
        "https://www.instagram.com/yourprofile"
        ]
}
