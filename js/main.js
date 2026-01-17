/* ================= MOBILE NAV ================= */
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}


/* ================= COUNTDOWN TIMER ================= */
const eventDate = new Date("March 15, 2025 09:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const countdownBox = document.querySelector(".countdown");

if (daysEl && hoursEl && minutesEl && secondsEl) {

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
      clearInterval(timer);

      if (countdownBox) {
        countdownBox.classList.add("finished");
      }

      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

 if (secondsEl.textContent !== String(seconds).padStart(2, "0")) {
  animateTick(secondsEl);
}

daysEl.textContent = String(days).padStart(2, "0");
hoursEl.textContent = String(hours).padStart(2, "0");
minutesEl.textContent = String(minutes).padStart(2, "0");
secondsEl.textContent = String(seconds).padStart(2, "0");


  }, 1000);
}

function animateTick(el) {
  el.classList.add("tick");
  setTimeout(() => el.classList.remove("tick"), 200);
}
