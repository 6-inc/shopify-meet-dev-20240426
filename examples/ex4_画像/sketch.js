const canvas_wrap = document.getElementById("canvas_wrap");
console.log(canvas_wrap);
const canvas_width = canvas_wrap.clientHeight;

const style = "height: " + canvas_width + "px;";
canvas_wrap.setAttribute("style", style);
const canvas_height = canvas_wrap.clientHeight;

const fr = 30;

let img = null;

let step = 20;

function preload() {
    img = loadImage("cat.jpg");
    img.resize(canvas_width, canvas_height);
    image(img, 0, 0);
}

function setup() {
    canvas = createCanvas(canvas_width, canvas_height);
    canvas.parent("canvas_wrap");
    frameRate(fr);
    smooth();

    noStroke();
    image(img, 0, 0); // 画像を初めに全体に描画

    // 初期に全体にモザイクをかける
    for (let y = 0; y < canvas_height; y += step) {
        for (let x = 0; x < canvas_width; x += step) {
            const colorValue = img.get(x, y);
            fill(colorValue);
            rect(x, y, step, step);
        }
    }
}

function draw() {
    const radius = 50; // マウスの影響範囲の半径
    let mx = mouseX;
    let my = mouseY;

    // マウスの位置に基づいて元の画像を詳細に描画する
    for (
        let y = max(0, my - radius);
        y < min(canvas_height, my + radius);
        y += 5
    ) {
        for (
            let x = max(0, mx - radius);
            x < min(canvas_width, mx + radius);
            x += 5
        ) {
            const colorValue = img.get(x, y);
            fill(colorValue);
            rect(x, y, 1, 1); // マウスの周りだけ元の画像を詳細に描画
        }
    }
}
