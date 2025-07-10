//your JS code here. If required.

const container = document.getElementById("board");
const SQUARES = 800;

// Generate random color
function getRandomColor() {
  const chars = "0123456789ABCDEF";
  let color = "#";
  for(let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
}

for(let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    const color = getRandomColor();
    square.style.backgroundColor = color;

   
    setTimeout(() => {
      square.style.backgroundColor = "#1d1d1d";
    }, 1000);
  });

  container.appendChild(square);
}
