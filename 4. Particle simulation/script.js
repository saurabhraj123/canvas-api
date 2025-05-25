const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = 5 + Math.random() * 5; // Random radius between 5 and 10
    this.color = `rgba(0, 128, 0, ${Math.random()})`; // Random opacity
    this.speedX = (Math.random() - 0.5) * 2; // Random speed in x direction
    this.speedY = (Math.random() - 0.5) * 2; // Random speed in y direction
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off the walls
    if (this.x < 0 || this.x > canvas.width) {
      this.speedX *= -1;
    }
    if (this.y < 0 || this.y > canvas.height) {
      this.speedY *= -1;
    }
  }
}

const particles = [];
for (let i = 0; i < 100; i++) {
  particles.push(new Particle());
}

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(animate);
};

animate();
