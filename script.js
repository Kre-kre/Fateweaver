// FATEWEAVER - Mystical Experience

// Card data - NO underscores in paths
const CARDS = {
    characters: [
        { id: 'unreliable-narrator', name: 'The Unreliable Narrator', front: 'Assets/The Unreliable Narrator.png', back: 'Assets/IMG_1963.PNG' },
        { id: 'false-prophet', name: 'The False Prophet', front: 'Assets/The False Prophet.png', back: 'Assets/IMG_1963.PNG' },
        { id: 'tragic-hero', name: 'The Tragic Hero', front: 'Assets/The Tragic Hero.png', back: 'Assets/IMG_1963.PNG' },
        { id: 'shadow-self', name: 'The Shadow Self', front: 'Assets/The Shadow Self.png', back: 'Assets/IMG_1963.PNG' },
        { id: 'outlier', name: 'The Outlier', front: 'Assets/The Outlier.png', back: 'Assets/IMG_1963.PNG' }
    ],
    events: [
        { id: 'bargain', name: 'The Bargain', front: 'Assets/The Bargain.png', back: 'Assets/IMG_1965.PNG' },
        { id: 'betrayal', name: 'The Betrayal', front: 'Assets/The Betrayal.png', back: 'Assets/IMG_1965.PNG' },
        { id: 'revelation', name: 'The Revelation', front: 'Assets/The Revelation.png', back: 'Assets/IMG_1965.PNG' },
        { id: 'choice', name: 'The Choice', front: 'Assets/The Choice.png', back: 'Assets/IMG_1965.PNG' },
        { id: 'sacrifice', name: 'The Sacrifice', front: 'Assets/The Sacrifice.png', back: 'Assets/IMG_1965.PNG' }
    ],
    worlds: [
        { id: 'court', name: 'The Court', front: 'Assets/The Court.png', back: 'Assets/IMG_1964.PNG' },
        { id: 'case', name: 'The Case', front: 'Assets/The Case.png', back: 'Assets/IMG_1964.PNG' },
        { id: 'dystopia', name: 'The Dystopia', front: 'Assets/The Dystopia.png', back: 'Assets/IMG_1964.PNG' },
        { id: 'planet', name: 'The Planet', front: 'Assets/The Planet.png', back: 'Assets/IMG_1964.PNG' },
        { id: 'realm', name: 'The Realm', front: 'Assets/The Realm.png', back: 'Assets/IMG_1964.PNG' }
    ]
};

// State
let selectedGenre = null;
let selectedCards = { character: null, event: null, world: null };
let currentDeck = 'characters';
let currentStep = 1;

// DOM
const startScreen = document.getElementById('startScreen');
const genreScreen = document.getElementById('genreScreen');
const cardScreen = document.getElementById('cardScreen');
const revelationScreen = document.getElementById('revelationScreen');
const modal = document.getElementById('modal');

// RICH CONSTELLATION BACKGROUND
const canvas = document.getElementById('constellation');
const ctx = canvas.getContext('2d');
let particles = [];

function initConstellation() {
    resizeCanvas();
    createParticles();
    animateConstellation();
    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createParticles() {
    particles = [];
    const count = Math.floor((canvas.width * canvas.height) / 8000);
    
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.6 + 0.2,
            vx: (Math.random() - 0.5) * 0.15,
            vy: (Math.random() - 0.5) * 0.15,
            twinkle: Math.random() * 0.015 + 0.005,
            type: Math.random() > 0.7 ? 'star' : 'dot'
        });
    }
}

function animateConstellation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw particles
    particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        particle.opacity += Math.sin(Date.now() * particle.twinkle) * 0.003;
        particle.opacity = Math.max(0.1, Math.min(0.8, particle.opacity));
        
        if (particle.type === 'star') {
            // Draw 4-point star
            const spikes = 4;
            const outerRadius = particle.size * 2;
            const innerRadius = particle.size;
            
            ctx.beginPath();
            for (let i = 0; i < spikes * 2; i++) {
                const radius = i % 2 === 0 ? outerRadius : innerRadius;
                const angle = (i * Math.PI) / spikes;
                const x = particle.x + Math.cos(angle) * radius;
                const y = particle.y + Math.sin(angle) * radius;
                i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fillStyle = `rgba(201, 169, 97, ${particle.opacity})`;
            ctx.fill();
        } else {
            // Draw circle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(201, 169, 97, ${particle.opacity})`;
            ctx.fill();
            
            if (particle.size > 1.5) {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 175, 55, ${particle.opacity * 0.08})`;
                ctx.fill();
            }
        }
    });
    
    // Draw connections
    particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
            const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
            if (dist < 150) {
                const opacity = (1 - dist / 150) * 0.12;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(201, 169, 97, ${opacity})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        });
    });
    
    requestAnimationFrame(animateConstellation);
}

// INTERACTIONS
document.getElementById('beginBtn').addEventListener('click', () => {
    startScreen.classList.remove('active');
    setTimeout(() => genreScreen.classList.add('active'), 400);
});

document.querySelectorAll('.genre-orb').forEach(btn => {
    btn.addEventListener('click', () => {
        selectedGenre = btn.dataset.genre;
        genreScreen.classList.remove('active');
        setTimeout(() => {
            cardScreen.classList.add('active');
            loadDeck('characters');
        }, 400);
    });
});

// SHUFFLE FUNCTION - Randomizes array order
function shuffleArray(array) {
    const shuffled = [...array]; // Create a copy
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function loadDeck(deckType) {
    currentDeck = deckType;
    const cards = shuffleArray(CARDS[deckType]);
    const fan = document.getElementById('cardFan');
    const title = document.getElementById('deckTitle');
    
    const titles = {
        characters: 'Choose a Character',
        events: 'Choose an Event',
        worlds: 'Choose a World'
    };
    title.textContent = titles[deckType];
    
    // Update progress
    document.querySelectorAll('.progress-orb').forEach(orb => orb.classList.remove('active'));
    document.querySelector(`.progress-orb[data-step="${currentStep}"]`).classList.add('active');
    
    fan.innerHTML = '';
    
    const totalCards = cards.length;
    const fanAngle = 40; // Total fan spread in degrees
    const angleStep = fanAngle / (totalCards - 1);
    const startAngle = -fanAngle / 2;
    
    cards.forEach((card, index) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'fan-card';
        
        const angle = startAngle + (angleStep * index);
        const radius = 100;
        const offsetX = Math.sin(angle * Math.PI / 180) * radius;
        
        cardEl.style.transform = `translateX(${offsetX}px) rotate(${angle}deg)`;
        cardEl.style.zIndex = index;
        
        // Show card BACK
        cardEl.innerHTML = `<img src="${card.back}" alt="${card.name}">`;
        cardEl.dataset.cardId = card.id;
        cardEl.dataset.cardName = card.name;
        cardEl.dataset.cardFront = card.front;
        
        cardEl.addEventListener('click', () => selectCard(card, deckType, cardEl));
        
        fan.appendChild(cardEl);
    });
}

function selectCard(card, deckType, cardEl) {
    // Mark as selected
    cardEl.classList.add('selected');
    
    // Store selection
    if (deckType === 'characters') {
        selectedCards.character = card;
        currentStep = 2;
        setTimeout(() => loadDeck('events'), 600);
    } else if (deckType === 'events') {
        selectedCards.event = card;
        currentStep = 3;
        setTimeout(() => loadDeck('worlds'), 600);
    } else if (deckType === 'worlds') {
        selectedCards.world = card;
        setTimeout(showRevelation, 600);
    }
}

function showRevelation() {
    cardScreen.classList.remove('active');
    
    setTimeout(() => {
        revelationScreen.classList.add('active');
        
        // Create revealed cards
        const container = document.getElementById('revelationCards');
        container.innerHTML = '';
        
        const cardsToReveal = [
            selectedCards.character,
            selectedCards.event,
            selectedCards.world
        ];
        
        cardsToReveal.forEach(card => {
            const cardEl = document.createElement('div');
            cardEl.className = 'revealed-card';
            cardEl.innerHTML = `
                <img src="${card.front}" alt="${card.name}">
                <div class="card-name">${card.name}</div>
            `;
            container.appendChild(cardEl);
        });
        
        // Show prompt after cards reveal
        setTimeout(() => {
            const prompt = getRandomPrompt(
                selectedGenre,
                selectedCards.character.id,
                selectedCards.event.id,
                selectedCards.world.id
            );
            
            document.getElementById('promptText').textContent = prompt;
            document.getElementById('promptMeta').textContent = 
                `${selectedGenre.toUpperCase()} • ${selectedCards.character.name} • ${selectedCards.event.name} • ${selectedCards.world.name}`;
        }, 2000);
    }, 500);
}

document.getElementById('resetBtn').addEventListener('click', () => {
    modal.classList.add('active');
});

document.getElementById('confirmReset').addEventListener('click', () => {
    modal.classList.remove('active');
    resetApp();
});

document.getElementById('cancelReset').addEventListener('click', () => {
    modal.classList.remove('active');
});

function resetApp() {
    selectedCards = { character: null, event: null, world: null };
    selectedGenre = null;
    currentStep = 1;
    
    revelationScreen.classList.remove('active');
    setTimeout(() => startScreen.classList.add('active'), 400);
}

// Initialize
initConstellation();
console.log('FATEWEAVER experience loaded');
