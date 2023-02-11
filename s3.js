let can = document.getElementById("table")
let drew_ = can.getContext('2d')



const ball = {
    x: can.width / 2,
    y: can.height / 2,
    radius: 10,
    veIX: 5,
    veIY: 5,
    speed: 5,
    color: 'green'

}
const user = {
    x: 0,
    y: (can.height - 100) / 2,
    width: 10,
    height: 100,
    score: 0,
    color: 'red'
}

const cpu = {
    x: can.width - 10,
    y: (can.height - 100) / 2,
    width: 10,
    height: 100,
    score: 0,
    color: 'red'

}

const sep = {
    x: (can.width - 2) / 2,
    y: 0,
    width: 2,
    height: 10,
    score: 0,
    color: 'orange'

}

function drewRectangle(x, y, w, h, color) {
    drew_.fillStyle = color;
    drew_.fillRect(x, y, w, h)
}
function drewCircle(x, y, r, color) {
    drew_.fillStyle = color;
    drew_.beginPath();
    drew_.arc(x, y, r, 0, Math.PI * 2, true);
    drew_.closePath();
    drew_.fill();
}
function drewScore(text, x, y) {
    drew_.fillStyle = 'white';
    drew_.font = '60px Arial';
    drew_.fillText(text, x, y);

}

function drewSeprator() {
    for (let i = 0; i <= can.height; i += 20) {
        drewRectangle(sep.x, sep.y + i, sep.width, sep.height, sep.color);
    }
}

function restart() {
    ball.x = can.width / 2;
    ball.y = can.height / 2;
    ball.veIX = -ball.veIX;
    ball.speed = 5;

}
function detect_collision(ball, player) {
    player.top = player.y;
    player.bottom = player.y + player.height;
    player.left = player.x;
    player.right = player.x + player.width;

    ball.top = ball.y - ball.radius;
    ball.bottom = ball.y + ball.radius;
    ball.left = ball.x - ball.radius;
    ball.right = ball.x + ball.radius;

    return player.left < ball.right && player.top < ball.bottom && player.right > ball.left && player.bottom > ball.top;
}