const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const clearBtn = document.querySelector("#clear-btn");

let isMouseDown = false;

// This code will show some gap between the lines as thhe mousemove event is not fired continuously that fast
// const mousePosition = {
//   x: undefined,
//   y: undefined,
// };

// const drawCircle = () => {
//   ctx.beginPath();
//   ctx.arc(mousePosition.x, mousePosition.y, 10, 0, Math.PI * 2);
//   ctx.fillStyle = "brown";
//   ctx.fill();
// };

// document.addEventListener("mousedown", (event) => {
//   isMouseDown = true;
//   console.log({ event });
//   mousePosition.x = event.x;
//   mousePosition.y = event.y;
//   drawCircle();
// });

// document.addEventListener("mouseup", () => {
//   isMouseDown = false;
// });

// document.addEventListener("mousemove", (event) => {
//   console.log("mousemove");
//   if (isMouseDown) {
//     mousePosition.x = event.x;
//     mousePosition.y = event.y;
//     drawCircle();
//   }
// });

// my code
const previousMousePosition = {
  x: undefined,
  y: undefined,
};

const drawLine = (event) => {
  if (
    previousMousePosition.x === undefined ||
    previousMousePosition.y === undefined
  ) {
    return;
  }

  ctx.beginPath();
  ctx.moveTo(previousMousePosition.x, previousMousePosition.y);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.stroke();
};

canvas.addEventListener("mousedown", (event) => {
  isMouseDown = true;
  previousMousePosition.x = event.offsetX;
  previousMousePosition.y = event.offsetY;
  drawLine(event);
});

canvas.addEventListener("mouseup", () => {
  isMouseDown = false;
});

canvas.addEventListener("mousemove", (event) => {
  if (!isMouseDown) return;

  drawLine(event);

  previousMousePosition.x = event.offsetX;
  previousMousePosition.y = event.offsetY;
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  previousMousePosition.x = undefined;
  previousMousePosition.y = undefined;
});
