document.addEventListener('DOMContentLoaded', () => {
    /* -----------------------------
       Hamburger Menu Toggle
    ------------------------------ */
    const hamburger = document.querySelector('.hamburger');
    const navMenu   = document.querySelector('.nav-menu');
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  
    /* -----------------------------
       Testimonial Slider
    ------------------------------ */
    let testimonialIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
      });
    }
    setInterval(() => {
      testimonialIndex = (testimonialIndex + 1) % testimonials.length;
      showTestimonial(testimonialIndex);
    }, 5000);
  
    /* -----------------------------
       FAQ Accordion Toggle
    ------------------------------ */
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
      });
    });
  
    /* -----------------------------
       Age Group Selector for Programs
    ------------------------------ */
    const ageSelect = document.getElementById('age-select');
    const programItems = document.querySelectorAll('.program');
    ageSelect.addEventListener('change', (e) => {
      const selected = e.target.value;
      programItems.forEach(item => {
        if (selected === 'all' || item.getAttribute('data-age') === selected) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  
    /* -----------------------------
       Gallery Carousel
    ------------------------------ */
    let galleryIndex = 0;
    const galleryImages = document.querySelectorAll('.gallery-carousel img');
    setInterval(() => {
      galleryImages.forEach((img, index) => {
        img.style.transform = `translateX(-${galleryIndex * 100}%)`;
      });
      galleryIndex = (galleryIndex + 1) % galleryImages.length;
    }, 4000);
  
    /* -----------------------------
       Animated Counting Statistics
    ------------------------------ */
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const updateCount = () => {
        const current = +counter.innerText;
        const increment = target / 200;
        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  
    /* -----------------------------
       Newsletter Signup Handler
    ------------------------------ */
    const newsletterForm = document.getElementById('newsletter-signup');
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for subscribing!');
    });
  
    /* -----------------------------
       Contact Form Handler
    ------------------------------ */
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Your message has been sent!');
      contactForm.reset();
    });
  
    /* -----------------------------
        Interactive Calendar (Simple Example)
    ------------------------------ */
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
      const today = new Date();
      const month = today.getMonth();
      const year = today.getFullYear();
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      let calendarHTML = '<table class="calendar-table"><tr>';
      const daysOfWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
      daysOfWeek.forEach(day => calendarHTML += `<th>${day}</th>`);
      calendarHTML += '</tr><tr>';
      for (let i = 0; i < firstDay; i++){
        calendarHTML += '<td></td>';
      }
      for (let day = 1; day <= daysInMonth; day++){
        if ((firstDay + day - 1) % 7 === 0 && day !== 1){
          calendarHTML += '</tr><tr>';
        }
        calendarHTML += `<td>${day}</td>`;
      }
      calendarHTML += '</tr></table>';
      calendarEl.innerHTML = calendarHTML;
    }
  });
  