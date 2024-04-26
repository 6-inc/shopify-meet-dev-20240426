const canvas_wrap = document.getElementById("canvas_wrap");
console.log(canvas_wrap);
const canvas_width = canvas_wrap.clientHeight;

const style = "height: " + canvas_width + "px;";
canvas_wrap.setAttribute("style", style);
const canvas_height = canvas_wrap.clientHeight;

const fr = 30;

function setup() {
    // 初期設定の処理をここに記述
    canvas = createCanvas(canvas_width, canvas_height);
    canvas.parent("canvas_wrap");
    frameRate(fr);
    smooth();
}

function draw() {
    // フレームごとに実行される処理をここに記述
}
