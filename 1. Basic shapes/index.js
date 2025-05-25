const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// rectangle
ctx.fillStyle = "brown";
ctx.fillRect(50, 50, 500, 500); // Draw a brown square

// circle
ctx.beginPath();
ctx.arc(300, 300, 100, 0, Math.PI * 2); // Draw a circle with center (300, 300) and radius 100
ctx.fillStyle = "teal";
ctx.fill(); // Fill the circle with teal color

// stroke arc
ctx.beginPath(); // begin path
ctx.arc(300, 300, 100, 0, Math.PI); // Draw a circle with center (300, 300) and radius 100
ctx.fillStyle = "orange"; // Set the fill color to orange
// ctx.strokeStyle = "orange";
// ctx.stroke();
ctx.fill();

// filled arc
ctx.beginPath(); // begin path
ctx.moveTo(300, 300); // Move to center
ctx.arc(300, 300, 100, 0, (3 * Math.PI) / 2, true); // Draw a circle with center (300, 300) and radius 100
ctx.fillStyle = "purple";
ctx.fill(); // Fill the arc with purple color

// paths
ctx.beginPath(); // begin path
ctx.moveTo(100, 100); // Move to (100, 100)
ctx.lineTo(200, 100); // Draw line to (200, 100)
ctx.strokeStyle = "yellow"; // Set the stroke color to red
ctx.stroke();

// closed path
ctx.beginPath(); // begin path
ctx.moveTo(100, 150); // Move to (100, 150)
ctx.lineTo(200, 150);
ctx.lineTo(200, 220);
ctx.lineTo(100, 300);
ctx.closePath(); // Close the path
ctx.fillStyle = "pink"; // Set the fill color to pink
ctx.fill(); // Fill the closed path with pink color
