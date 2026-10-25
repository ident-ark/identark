// ===== THREE.JS SETUP =====
let scene, camera, renderer, particles = [];

function initThreeJS() {
  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0f0f1e, 2000, 10000);

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
  );

  camera.position.z = 100;

  const canvas = document.getElementById('canvas3d');

  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x0f0f1e, 0.1);

  createParticles();

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0x00d9ff, 1);
  pointLight.position.set(100, 100, 100);
  scene.add(pointLight);

  window.addEventListener('resize', onWindowResize);

  animate();
}

function createParticles() {
  const geometry = new THREE.BufferGeometry();

  const particleCount = 200;

  const posArray = new Float32Array(particleCount * 3);
  const colorArray = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    posArray[i] = (Math.random() - 0.5) * 2000;
    posArray[i + 1] = (Math.random() - 0.5) * 2000;
    posArray[i + 2] = (Math.random() - 0.5) * 2000;

    const color = new THREE.Color(0x00d9ff);

    color.setHSL(Math.random() * 0.1 + 0.5, 0.6, 0.5);

    colorArray[i] = color.r;
    colorArray[i + 1] = color.g;
    colorArray[i + 2] = color.b;
  }

  geometry.setAttribute(
    'position',
    new THREE.BufferAttribute(posArray, 3)
  );

  geometry.setAttribute(
    'color',
    new THREE.BufferAttribute(colorArray, 3)
  );

  const material = new THREE.PointsMaterial({
    size: 2,
    vertexColors: true,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.6,
  });

  const points = new THREE.Points(geometry, material);

  scene.add(points);

  particles.push(points);
}

function animate() {
  requestAnimationFrame(animate);

  particles.forEach((p) => {
    p.rotation.x += 0.0001;
    p.rotation.y += 0.0002;
  });

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// ===== SCROLL ANIMATIONS =====
function observeElements() {
  const options = {
    threshold: 0.08,
    rootMargin: '0px 0px -80px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            entry.target.classList.add('in-view');
            }, entry.target.dataset.delay || 0);
        });

        observer.unobserve(entry.target);
      }
    });
  }, options);

  const elementsToObserve = document.querySelectorAll(`
  section,
  .hero-content,
  .service-card,
  .process-step,
  .stat-item,
  .section-header,
  .cta-section,
  .footer,
  .fade-in
`);

  elementsToObserve.forEach((el, index) => {

  el.dataset.delay = index * 80;

  if (!el.classList.contains('fade-in')) {
    el.classList.add('fade-in');
  }

  observer.observe(el);
});
}

// ===== SMOOTH SCROLL =====
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener(
      'click',
      function (e) {
        e.preventDefault();

        const target = document.querySelector(
          this.getAttribute('href')
        );

        if (target) {
          const offset = 90;

          const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            offset;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }
      },
      { passive: true }
    );
  });
}

// ===== NAVBAR EFFECT =====
function setupNavbarScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener(
    'scroll',
    () => {
      const scrolled = window.scrollY;

      requestAnimationFrame(() => {
        if (scrolled > 50) {
          navbar.style.background =
            'rgba(15, 15, 30, 0.92)';

          navbar.style.boxShadow =
            '0 4px 20px rgba(0, 217, 255, 0.08)';
        } else {
          navbar.style.background =
            'rgba(15, 15, 30, 0.75)';

          navbar.style.boxShadow = 'none';
        }
      });
    },
    { passive: true }
  );
}

// ===== HERO PARALLAX =====
function setupHeroParallax() {
  const heroContent = document.querySelector('.hero-content');
  const floatingCards = document.querySelector('.floating-cards');

  let ticking = false;

  window.addEventListener(
    'scroll',
    () => {
      const scrolled = window.pageYOffset;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroContent) {
            heroContent.style.transform = `
              translate3d(0, ${scrolled * 0.12}px, 0)
            `;
          }

          if (floatingCards) {
            floatingCards.style.transform = `
              translate3d(
                -50%,
                calc(-50% + ${scrolled * 0.06}px),
                0
              )
            `;
          }

          ticking = false;
        });

        ticking = true;
      }
    },
    { passive: true }
  );
}

// ===== MOUSE PARALLAX =====
function setupMouseParallax() {
  const cards = document.querySelectorAll('.card');

  document.addEventListener('mousemove', (e) => {
    const x =
      ((e.clientX / window.innerWidth) - 0.5) * 20;

    const y =
      ((e.clientY / window.innerHeight) - 0.5) * 20;

    requestAnimationFrame(() => {
      cards.forEach((card) => {
        card.style.transform = `
          translate3d(
            ${x * 0.35}px,
            ${y * 0.35}px,
            0
          )
        `;
      });
    });
  });
}

// ===== BUTTON EFFECTS =====
function setupButtonInteractions() {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', function (event) {
      const ripple = document.createElement('span');

      ripple.classList.add('ripple');

      this.appendChild(ripple);

      const rect = this.getBoundingClientRect();

      const size = Math.max(rect.width, rect.height);

      const x =
        event.clientX - rect.left - size / 2;

      const y =
        event.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height =
        size + 'px';

      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';

      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// ===== HAMBURGER =====
function setupHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-open');
  });
}

// ===== FORM =====
function setupFormInteractions() {
  const emailInput = document.querySelector('.cta-input');

  const scheduleBtn = document.querySelector(
    '.cta-section .btn-primary'
  );

  if (scheduleBtn && emailInput && scheduleBtn.tagName === 'BUTTON') {
    scheduleBtn.addEventListener('click', () => {
      if (emailInput && emailInput.value) {
        alert(
          `We'll send you a meeting link to ${emailInput.value}`
        );

        emailInput.value = '';
      } else {
        alert('Please enter your email address');
      }
    });
  }
}

// ===== COUNTERS =====
function animateCounters() {
  const counters =
    document.querySelectorAll('.stat-number');

  let hasAnimated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;

          counters.forEach((counter) => {
            const target = counter.textContent;

            const finalValue =
              target.replace(/[^0-9]/g, '');

            animateValue(
              counter,
              0,
              parseInt(finalValue),
              1800
            );
          });
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  counters.forEach((counter) =>
    observer.observe(counter)
  );
}

function animateValue(
  element,
  start,
  end,
  duration
) {
  let startTimestamp = null;

  const step = (timestamp) => {
    if (!startTimestamp)
      startTimestamp = timestamp;

    const progress = Math.min(
      (timestamp - startTimestamp) / duration,
      1
    );

    const value = Math.floor(
      progress * (end - start) + start
    );

    let formatted = value.toString();

    if (element.textContent.includes('M')) {
      formatted =
        (value / 1000000).toFixed(0) + 'M+';
    } else if (
      element.textContent.includes('%')
    ) {
      formatted = value + '%';
    } else if (
      element.textContent.includes('7')
    ) {
      formatted = value + '/7';
    }

    element.textContent = formatted;

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

// ===== CURSOR GLOW =====
function setupCursorGlow() {
  const interactiveElements =
    document.querySelectorAll(
      '.btn, .nav-link, .service-card'
    );

  interactiveElements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      el.style.background = `
        radial-gradient(
          circle at ${x}px ${y}px,
          rgba(0, 217, 255, 0.08),
          transparent 75%
        )
      `;
    });

    el.addEventListener('mouseleave', () => {
      el.style.background = '';
    });
  });
}

// ===== PAGE LOAD =====
window.addEventListener('load', () => {
  initThreeJS();

  observeElements();

  setupSmoothScroll();

  setupNavbarScroll();

  setupHeroParallax();

  setupMouseParallax();

  setupButtonInteractions();

  setupHamburger();

  setupFormInteractions();

  animateCounters();

  setupCursorGlow();

  document
    .querySelectorAll('.word')
    .forEach((word, index) => {
      word.style.animationDelay = `
        ${0.3 + index * 0.1}s
      `;
    });
});

// ===== RIPPLE CSS =====
const style = document.createElement('style');

style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.45);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

document.head.appendChild(style);