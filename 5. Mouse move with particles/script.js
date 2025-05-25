const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let hue = 0;
const mouse = {
  x: undefined,
  y: undefined,
};

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.radius = 5 + Math.random() * 5; // Random radius between 5 and 10
    // this.color = `rgba(0, 128, 0, ${Math.random()})`; // Random opacity
    this.color = `hsl(${hue}, 100%, 50%)`; // Random color
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

    if (this.radius > 0.2) this.radius -= 0.1;

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

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillStyle = "rgba(240, 248, 255, 0.1)";
  // ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();

    if (particle.radius <= 0.2) {
      const index = particles.indexOf(particle);
      particles.splice(index, 1);
    }
  });

  hue += 2;
  requestAnimationFrame(animate);
};

canvas.addEventListener("mousemove", (event) => {
  console.log({ event, mouse });
  mouse.x = event.offsetX;
  mouse.y = event.offsetY;

  for (let i = 0; i < 50; i++) {
    particles.push(new Particle());
  }
});

animate();
