// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.getElementById('nav-menu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Page Navigation
const pageLinks = document.querySelectorAll('a[data-page]');
const pages = document.querySelectorAll('.page-content');

pageLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        // Show selected page
        document.getElementById(pageId).classList.add('active');
        
        // Update active navigation
        pageLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });
        
        // Set all links with the same data-page to active
        document.querySelectorAll(`a[data-page="${pageId}"]`).forEach(activeLink => {
            activeLink.classList.add('active');
        });
        
        // Close mobile menu if open
        navMenu.classList.remove('active');
        
        // Scroll to top
        window.scrollTo(0, 0);
    });
});

// Simple Testimonial Slider (could be expanded with more functionality)
const testimonials = [
    {
        img: 'https://source.unsplash.com/random/200x200/?portrait,woman',
        text: '"Joining Trail Blazers has been life-changing! I\'ve explored places I never knew existed and made amazing friends who share my passion for the outdoors."',
        author: 'Sarah Johnson'
    },
    {
        img: 'https://source.unsplash.com/random/200x200/?portrait,man',
        text: '"The guided hikes are exceptional - the leaders are knowledgeable about local ecology and history, making each trek both fun and educational."',
        author: 'Michael Chen'
    },
    {
        img: 'https://source.unsplash.com/random/200x200/?portrait,woman,2',
        text: '"As a beginner hiker, I was nervous about joining, but everyone was so welcoming and supportive. Now I\'m planning my first overnight backpacking trip!"',
        author: 'Emma Rodriguez'
    }
];

let currentTestimonial = 0;
const testimonialSlide = document.querySelector('.testimonial-slide');

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    testimonialSlide.innerHTML = `
        <div class="testimonial-img" style="background-image: url('${testimonial.img}');"></div>
        <p class="testimonial-text">${testimonial.text}</p>
        <p class="testimonial-author">${testimonial.author}</p>
    `;
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

// Initial testimonial
updateTestimonial();

// Change testimonial every 5 seconds
setInterval(updateTestimonial, 5000);