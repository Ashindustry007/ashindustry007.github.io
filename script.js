// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Dropdown functionality
const dropdown = document.querySelector('.dropdown');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (dropdown && dropdownToggle) {
    // Desktop hover
    dropdown.addEventListener('mouseenter', () => {
        dropdownMenu.classList.add('show');
    });

    dropdown.addEventListener('mouseleave', () => {
        dropdownMenu.classList.remove('show');
    });

    // Mobile click
    dropdownToggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdownMenu.classList.toggle('show');
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navLink) {
                document.querySelectorAll('.nav-menu a').forEach(link => {
                    link.classList.remove('active');
                });
                navLink.classList.add('active');
            }
        }
    });
});

// Toggle Course Category (for courses.html)
function toggleCategory(element) {
    const list = element.nextElementSibling;
    const toggle = element.querySelector('.category-toggle');

    if (list && toggle) {
        list.classList.toggle('active');
        toggle.classList.toggle('active');
    }
}

// Toggle Course Details (for courses.html)
function toggleCourse(element) {
    const details = element.querySelector('.course-details');
    const toggle = element.querySelector('.course-toggle');

    if (details && toggle) {
        details.classList.toggle('active');
        toggle.classList.toggle('active');
    }
}

// Gallery lightbox functionality (for photography.html)
function openLightbox(imageSrc, title, caption) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
            <img src="${imageSrc}" alt="${title}">
            <div class="lightbox-caption">
                <h3>${title}</h3>
                <p>${caption}</p>
            </div>
        </div>
    `;
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';

    // Close on click outside
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    if (lightbox) {
        lightbox.remove();
        document.body.style.overflow = 'auto';
    }
}

// Add keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Initialize all interactive elements on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add click listeners to all course categories
    document.querySelectorAll('.category-header').forEach(header => {
        header.addEventListener('click', function() {
            toggleCategory(this);
        });
    });

    // Add click listeners to all course items
    document.querySelectorAll('.course-item').forEach(item => {
        item.addEventListener('click', function(e) {
            // Only toggle if not clicking on a link
            if (!e.target.closest('a')) {
                toggleCourse(this);
            }
        });
    });

    // Add click listeners to all gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const title = this.querySelector('.gallery-title')?.textContent || 'Untitled';
            const caption = this.querySelector('.gallery-caption')?.textContent || '';
            if (img) {
                openLightbox(img.src, title, caption);
            }
        });
    });
});
