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
    // 背景の色で毎回塗りつぶす(R, G, B)
    background(0, 255, 0);

    // ぬりつぶしの色
    fill(255, 0, 255);

    // 円を描く
    ellipse(50 + frame, 50, 80, 80);

    // ぬりつぶしの色
    fill(0, 0, 255);

    // 四角形を描く
    rect(100, 200, 80, 80);

    // 指定のframeRateで実行されるdraw関数の実行のたびにframeをインクリメント
    frame++;
}
