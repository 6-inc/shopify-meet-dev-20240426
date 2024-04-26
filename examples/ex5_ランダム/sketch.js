const canvas_wrap = document.getElementById("canvas_wrap");
console.log(canvas_wrap);
const canvas_width = canvas_wrap.clientHeight;

const style = "height: " + canvas_width + "px;";
canvas_wrap.setAttribute("style", style);
const canvas_height = canvas_wrap.clientHeight;

const fr = 1;

let frame = 0;

function setup() {
    // common
    canvas = createCanvas(canvas_width, canvas_height);
    canvas.parent("canvas_wrap");
    frameRate(fr);
    smooth();

    background(200, 200, 200);

    // 通常のランダム
    beginShape();
    fill(0, 0, 0, 0);
    for (let i = 0; i < width; i += 10) {
        vertex(i + frame, height / 3 + random(-20, 20));
    }
    endShape();

    // パーリンノイズ
    // 連続性のあるランダムとなる。
    // 例：２次元だと線（ひも）、3次元だと面（地形）、4次元だと立体（濃度）など
    beginShape();
    for (let i = 0; i < width; i += 10) {
        vertex(i, (2 * height) / 3 + 100 * (0.5 - noise(i * 0.01)));
    }
    endShape();
}
