import init, { generate_fm_signal } from './husamettinarabaci.js';

let animationId = null;
const canvas = document.getElementById('oscilloscope-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let t = 0;

function drawOscilloscope(signal) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    for (let x = 0; x < signal.length; x++) {
        const y = (signal[x] * 0.4 + 0.5) * canvas.height;
        if (x === 0) ctx.moveTo(x * (canvas.width / signal.length), y);
        else ctx.lineTo(x * (canvas.width / signal.length), y);
    }
    ctx.strokeStyle = '#4f8cff';
    ctx.lineWidth = 2;
    ctx.stroke();
}

async function animate() {
    const SIGNAL_LENGTH = canvas.width;
    const signal = generate_fm_signal(t, SIGNAL_LENGTH);
    drawOscilloscope(signal);
    t += 1;
    animationId = requestAnimationFrame(animate);
}

async function run() {
    await init();
    animate();
}

run();
