const letterBtn   = document.querySelector('.LetterBtn');
const letterEmo   = document.querySelector('.LetterEmo');
const letterPaper = document.querySelector('.LetterPaper');
const closeBtn    = document.querySelector('.CloseBtn');
const letters     = document.querySelectorAll('.LetterPaper > img');
const birthdayBtn = document.querySelector('.BirthdayBtn');
const birthdayImg = document.querySelector('.BirthdayImg');

let emoVisible = false;
let paperOpen  = false;
let index      = 0;

letters.forEach(img => img.classList.remove('active'));
letterPaper.classList.remove('show');
letterEmo.style.opacity = '0';
letterEmo.style.pointerEvents = 'none';

letterBtn.addEventListener('click', () => {
    if (emoVisible || paperOpen) return;
    emoVisible = true;
    letterEmo.style.opacity = '1';
    letterEmo.style.top = '43%';
    setTimeout(() => {
        letterEmo.classList.add('active');
        letterEmo.style.pointerEvents = 'auto';
    }, 800);
});

letterEmo.addEventListener('click', () => {
    if (!emoVisible || paperOpen) return;

    paperOpen = true;
    letters.forEach(img => img.classList.remove('active'));
    letters[index].classList.add('active');
    letterPaper.classList.add('show');

    if (index === letters.length - 1) launchFireworks();

    letterEmo.classList.remove('active');
    letterEmo.style.pointerEvents = 'none';
});

closeBtn.addEventListener('click', () => {
    if (!paperOpen) return;

    paperOpen = false;
    emoVisible = false;

    letterPaper.classList.remove('show');
    letters.forEach(img => img.classList.remove('active'));

    index = (index + 1) % letters.length;

    letterEmo.style.opacity = '0';
    letterEmo.style.top = '38%';
    letterEmo.classList.remove('active');
    letterEmo.style.pointerEvents = 'none';
});

function launchFireworks() {
    const box = document.querySelector('.fireworks');
    box.innerHTML = '';

    const colors = ['#ff4d6d','#ffd93d','#6ae3ff','#b983ff','#ff9f1c','#7CFFCB'];

    createBurst(box, colors, 60);
    setTimeout(() => createBurst(box, colors, 40, true), 300);
    setTimeout(() => box.innerHTML = '', 1800);
}

function createBurst(box, colors, count, random = false) {
    for (let i = 0; i < count; i++) {
        const s = document.createElement('span');
        s.className = 'firework sparkle';

        const a = Math.random() * Math.PI * 2;
        const d = 160 + Math.random() * 140;
        const c = colors[Math.floor(Math.random() * colors.length)];

        s.style.setProperty('--x', `${Math.cos(a) * d}px`);
        s.style.setProperty('--y', `${Math.sin(a) * d}px`);
        s.style.setProperty('--size', `${4 + Math.random() * 6}px`);
        s.style.setProperty('--color', c);

        if (random) {
            s.style.left = `${40 + Math.random() * 20}%`;
            s.style.top  = `${40 + Math.random() * 20}%`;
        }

        box.appendChild(s);
    }
}

birthdayBtn.addEventListener('click', () => {
    if (birthdayImg.classList.contains('show')) return;

    birthdayImg.classList.add('show');
    launchBirthdayFireworks();

    setTimeout(() => {
        birthdayImg.classList.remove('show');
    }, 3000);
});

function launchBirthdayFireworks() {
    const box = document.querySelector('.birthday-fireworks');
    box.innerHTML = '';

    const colors = ['#ff4d4d','#ffd93d','#4dff88','#4dd2ff','#b84dff','#ffffff'];

    for (let b = 0; b < 6; b++) {
        setTimeout(() => {
            const cx = Math.random() * innerWidth;
            const cy = Math.random() * innerHeight * 0.7;

            for (let i = 0; i < 36; i++) {
                const s = document.createElement('span');
                s.className = 'firework sparkle';

                const a = Math.random() * Math.PI * 2;
                const d = 120 + Math.random() * 120;
                const c = colors[Math.floor(Math.random() * colors.length)];

                s.style.left = `${cx}px`;
                s.style.top  = `${cy}px`;
                s.style.setProperty('--x', `${Math.cos(a) * d}px`);
                s.style.setProperty('--y', `${Math.sin(a) * d}px`);
                s.style.setProperty('--color', c);
                s.style.setProperty('--size', `${4 + Math.random() * 6}px`);

                box.appendChild(s);
            }
        }, b * 260);
    }

    setTimeout(() => box.innerHTML = '', 2500);
}