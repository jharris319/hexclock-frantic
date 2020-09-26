function setupTransitions() {
  document.body.style.transition = 'background-color 1s linear';
}

function updateClock() {
  const d = new Date();
  const milliseconds = d.getTime() - d.setHours(0,0,0,0);

  const hex = '#' + (Math.round((milliseconds * 0.1942)).toString(16)).padStart(6, '0').toUpperCase();

  document.getElementById('clock').style.color = textColor(hex);

  document.getElementById('clock').innerHTML = hex;
  document.body.style.backgroundColor = hex;

  setTimeout(updateClock, 62.5);
}

function textColor(color) {
  const hex   = color.replace(/#/, '');
  const r     = parseInt(hex.substr(0, 2), 16);
  const g     = parseInt(hex.substr(2, 2), 16);
  const b     = parseInt(hex.substr(4, 2), 16);

  const luma = [
      0.299 * r,
      0.587 * g,
      0.114 * b
  ].reduce((a, b) => a + b) / 255;

  return luma > 0.5 ? "#000" : "#FFF";
};

updateClock();
setTimeout(setupTransitions, 62.5);