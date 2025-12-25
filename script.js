function simulate() {
  const N0 = parseFloat(document.getElementById("n0").value);
  const lambda = parseFloat(document.getElementById("lambda").value);
  const t = parseFloat(document.getElementById("time").value);

  const Nt = N0 * Math.exp(-lambda * t);
  const decayed = N0 - Nt;
  const halfLife = Math.log(2) / lambda;

  document.getElementById("remaining").textContent =
    `Remaining nuclei N(t): ${Nt.toFixed(2)}`;

  document.getElementById("decayed").textContent =
    `Decayed nuclei: ${decayed.toFixed(2)}`;

  document.getElementById("halfLife").textContent =
    `Half-life T½: ${halfLife.toFixed(2)}`;

  drawGraph(N0, lambda);
}

function drawGraph(N0, lambda) {
  const canvas = document.getElementById("chart");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.moveTo(0, canvas.height);

  for (let t = 0; t <= 50; t += 0.5) {
    const Nt = N0 * Math.exp(-lambda * t);
    const x = (t / 50) * canvas.width;
    const y = canvas.height - (Nt / N0) * canvas.height;
    ctx.lineTo(x, y);
  }

  ctx.strokeStyle = "blue";
  ctx.lineWidth = 2;
  ctx.stroke();
}
