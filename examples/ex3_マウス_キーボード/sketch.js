const canvas_wrap = document.getElementById("canvas_wrap");
console.log(canvas_wrap);
const canvas_width = canvas_wrap.clientHeight;

const style = "height: " + canvas_width + "px;";
canvas_wrap.setAttribute("style", style);
const canvas_height = canvas_wrap.clientHeight;

const fr = 30;

let frame = 0;

let shapeType = "circle";

function setup() {
    // common
    canvas = createCanvas(canvas_width, canvas_height);
    canvas.parent("canvas_wrap");
    frameRate(fr);
    smooth();
    background(168);

    textSize(20);
    textAlign(CENTER);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    if (shapeType === "circle") {
        ellipse(mouseX, mouseY, 20, 20);
    } else if (shapeType === "rectangle") {
        rect(mouseX, mouseY, 20, 20);
    }

    if (keyIsPressed) {
        if (key === "c") {
            shapeType = "circle";
        } else if (key === "r") {
            shapeType = "rectangle";
        } else {
            shapeType = "nothing";
        }
    }

    fill(30, 80, 345);
    text(
        "キー「c」：円を描く" +
            "\n" +
            "キー「r」：四角形を描く" +
            "\n" +
            "その他のキー：何もしない",
        width / 2,
        (1 * height) / 10
    );
    // 指定のframeRateで実行されるdraw関数の実行のたびにframeをインクリメント
    frame++;
}
