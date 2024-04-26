const canvas_wrap = document.getElementById("canvas_wrap");
console.log(canvas_wrap);
const canvas_width = canvas_wrap.clientHeight;

const style = "height: " + canvas_width + "px;";
canvas_wrap.setAttribute("style", style);
const canvas_height = canvas_wrap.clientHeight;

const fr = 30;

let frame = 0;

function setup() {
    // common
    canvas = createCanvas(canvas_width, canvas_height);
    canvas.parent("canvas_wrap");
    frameRate(fr);
    smooth();
}

function draw() {
    colorMode(RGB, 255);
    // 背景の色で毎回塗りつぶす(R, G, B)
    background(50, 50, 50);

    // ぬりつぶしの色
    colorMode(HSL);
    console.log(frame);
    fill(frame, 50, 50);

    // 円を描く
    ellipse(canvas_width / 2, canvas_height / 2, 200, 200);

    // 指定のframeRateで実行されるdraw関数の実行のたびにframeをインクリメント
    frame++;
}
