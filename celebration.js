// Celebration titles
const celebrationTitles = [
    "Firewall Whisperer",
    "Patch Master",
    "Digital Ninja",
    "The Exploit Exorcist",
    "Byte Guardian",
    "Root Access Royalty",
    "Crypto Commander",
    "Phish Slayer",
    "Zero-Day Hero",
    "The Encryptor",
    "Net Sentinel",
    "Red Team Rockstar",
    "The Bug Hunter",
    "Token Titan",
    "Cyber Sage",
    "Packet Paladin",
    "Malware Mercenary",
    "The Boolean Boss",
    "Code Shield",
    "The Kernel Keeper"
];

// Firework colors
const fireworkColors = [
    '#ff0000', // Red
    '#00ff00', // Green
    '#0000ff', // Blue
    '#ffff00', // Yellow
    '#ff00ff', // Magenta
    '#00ffff', // Cyan
    '#ff8800', // Orange
    '#ff0088', // Pink
    '#88ff00', // Lime
    '#0088ff'  // Light Blue
];

class Firework {
    constructor(x, y, targetX, targetY, color) {
        this.x = x;
        this.y = y;
        this.targetX = targetX;
        this.targetY = targetY;
        this.color = color;
        this.speed = 2;
        this.angle = Math.atan2(targetY - y, targetX - x);
        this.velocity = {
            x: Math.cos(this.angle) * this.speed,
            y: Math.sin(this.angle) * this.speed
        };
        this.particles = [];
        this.exploded = false;
    }

    update() {
        if (!this.exploded) {
            this.x += this.velocity.x;
            this.y += this.velocity.y;

            if (Math.abs(this.x - this.targetX) < 5 && Math.abs(this.y - this.targetY) < 5) {
                this.explode();
            }
        }

        this.particles.forEach((particle, index) => {
            particle.update();
            if (particle.alpha <= 0) {
                this.particles.splice(index, 1);
            }
        });
    }

    explode() {
        this.exploded = true;
        for (let i = 0; i < 50; i++) {
            const angle = (Math.PI * 2 * i) / 50;
            const speed = 2 + Math.random() * 2;
            this.particles.push(new Particle(
                this.x,
                this.y,
                Math.cos(angle) * speed,
                Math.sin(angle) * speed,
                this.color
            ));
        }
    }

    draw(ctx) {
        if (!this.exploded) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        this.particles.forEach(particle => particle.draw(ctx));
    }
}

class Particle {
    constructor(x, y, vx, vy, color) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.alpha = 1;
        this.gravity = 0.1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;
        this.alpha -= 0.01;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.hexToRgb(this.color)}, ${this.alpha})`;
        ctx.fill();
    }

    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? 
            `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
            '255, 255, 255';
    }
}

class Celebration {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.fireworks = [];
        this.animationId = null;
        this.setupCanvas();
    }

    setupCanvas() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '9999';
        document.body.appendChild(this.canvas);
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    getRandomTitle() {
        return celebrationTitles[Math.floor(Math.random() * celebrationTitles.length)];
    }

    createFirework() {
        const startX = Math.random() * this.canvas.width;
        const startY = this.canvas.height;
        const targetX = Math.random() * this.canvas.width;
        const targetY = Math.random() * (this.canvas.height * 0.6);
        const color = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];
        this.fireworks.push(new Firework(startX, startY, targetX, targetY, color));
    }

    animate() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        if (Math.random() < 0.05) {
            this.createFirework();
        }

        this.fireworks.forEach((firework, index) => {
            firework.update();
            firework.draw(this.ctx);
            if (firework.exploded && firework.particles.length === 0) {
                this.fireworks.splice(index, 1);
            }
        });

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    showStreakMessage(streak) {
        const title = this.getRandomTitle();
        const message = document.createElement('div');
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.fontFamily = 'Orbitron, sans-serif';
        message.style.fontSize = '3em';
        message.style.color = '#00ffff';
        message.style.textAlign = 'center';
        message.style.textShadow = '0 0 10px #00ffff';
        message.style.zIndex = '10000';
        message.style.opacity = '0';
        message.style.transition = 'opacity 0.5s ease-in-out';
        message.innerHTML = `Streak ${streak} – ${title}!`;

        document.body.appendChild(message);
        setTimeout(() => message.style.opacity = '1', 100);
        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => message.remove(), 500);
        }, 2000);
    }

    celebrate(streak) {
        if (streak % 5 === 0) {
            this.showStreakMessage(streak);
            this.animate();
            setTimeout(() => {
                cancelAnimationFrame(this.animationId);
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.fireworks = [];
            }, 2000);
        }
    }
}

// Export the Celebration class
window.Celebration = Celebration; 