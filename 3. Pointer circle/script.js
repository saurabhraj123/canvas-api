const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const showCircle = (event) => {
  const radius = 25;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(event.offsetX, event.offsetY, radius, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(0, 128, 0, 0.3)"; // green with 30% opacity;
  ctx.strokeStyle = "green"; // green outline
  ctx.stroke();
  ctx.fill();
};

canvas.addEventListener("mousemove", (event) => {
  showCircle(event);
});
