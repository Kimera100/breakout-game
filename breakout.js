const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;
ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
ctx.beginPath();
ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();
if (b.status === 1) ctx.fillRect(b.x, b.y, blockWidth, blockHeight);
function draw() {
    ctx.clearRect(0, 0, width, height);
    drawPaddle();
    drawBall();
    drawBlocks();
    update();
    requestAnimationFrame(draw);
}
draw();
canvas.addEventListener('touchmove', (e) => {
    let touch = e.touches[0];
    paddle.x = touch.clientX - paddle.width / 2;
});
window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    paddle.y = height - 60;
});
