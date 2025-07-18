// Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar-scroll');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Scroll fade animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-fade').forEach(el => {
            observer.observe(el);
        });

        // Mobile menu toggle (basic implementation)
        const mobileMenuBtn = document.querySelector('.md\\:hidden button');
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'md:hidden bg-white border-t border-gray-200 px-4 py-2';
        mobileMenu.innerHTML = `
            <a href="#home" class="block py-2 text-gray-700 hover:text-purple-600">Home</a>
            <a href="#how-it-works" class="block py-2 text-gray-700 hover:text-purple-600">How It Works</a>
            <a href="#industries" class="block py-2 text-gray-700 hover:text-purple-600">Industries</a>
            <a href="#danger-zone" class="block py-2 text-gray-700 hover:text-purple-600">Danger Zone</a>
            <a href="#become-verifier" class="block py-2 text-gray-700 hover:text-purple-600">Become a Verifier</a>
            <a href="#waitlist" class="block py-2 bg-purple-600 text-white rounded-lg text-center mt-2">Join Waitlist</a>
        `;
        mobileMenu.style.display = 'none';

        mobileMenuBtn.addEventListener('click', function() {
            if (mobileMenu.style.display === 'none') {
                mobileMenu.style.display = 'block';
                mobileMenuBtn.parentNode.parentNode.appendChild(mobileMenu);
            } else {
                mobileMenu.style.display = 'none';
            }
        });