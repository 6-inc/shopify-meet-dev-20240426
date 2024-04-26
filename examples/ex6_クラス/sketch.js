const canvas_wrap = document.getElementById("canvas_wrap");
console.log(canvas_wrap);
const canvas_width = canvas_wrap.clientHeight;

const style = "height: " + canvas_width + "px;";
canvas_wrap.setAttribute("style", style);
const canvas_height = canvas_wrap.clientHeight;

const fr = 60;

let frame = 0;
let dots = [];
const numDots = 30; // ドットの数

function setup() {
    canvas = createCanvas(canvas_width, canvas_height);
    canvas.parent("canvas_wrap");
    frameRate(fr);
    smooth();

    // ドットのインスタンスを配列に追加
    for (let i = 0; i < numDots; i++) {
        let x = random(width);
        let y = random(height);
        dots.push(new Dot(x, y));
    }
}

function draw() {
    background(255);
    // 全てのドットを動かし、表示する
    dots.forEach((dot) => {
        dot.move();
        dot.display();
    });
}

class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.baseRadius = 30; // 基本の半径
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.xOff = random(1000);
        this.yOff = random(1000);
        this.maxSpeed = 3;
    }

    display() {
        push(); // 新しい描画設定を開始
        translate(this.x, this.y); // このドットの中心に座標系を移動
        let angle = atan2(this.vy, this.vx); // 速度ベクトルの角度を計算
        rotate(angle); // 描画を速度ベクトルの角度だけ回転
        let speed = sqrt(this.vx * this.vx + this.vy * this.vy);
        let stretch = map(speed, 0, this.maxSpeed, 1, 1.5); // 速度に応じて伸ばす比率を計算
        fill(0);
        ellipse(0, 0, this.baseRadius * stretch, this.baseRadius / stretch); // 伸ばした楕円を描画
        pop(); // 描画設定を元に戻す
    }

    move() {
        // ノイズを基に加速度を更新
        this.ax = map(noise(this.xOff), 0, 1, -0.2, 0.2);
        this.ay = map(noise(this.yOff), 0, 1, -0.2, 0.2);

        // 加速度を速度に加算
        this.vx += this.ax;
        this.vy += this.ay;

        // 速度が最大速度を超えた場合は速度を減少させる
        let speed = sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > this.maxSpeed) {
            this.vx *= this.maxSpeed / speed;
            this.vy *= this.maxSpeed / speed;
        }

        // 速度を位置に加算
        this.x += this.vx;
        this.y += this.vy;

        // ノイズのオフセットを増加
        this.xOff += 0.01;
        this.yOff += 0.01;

        // 壁にぶつかったら反射する
        if (this.x < 0 || this.x > canvas_width) {
            this.vx *= -1;
            this.x = constrain(this.x, 0, canvas_width);
        }
        if (this.y < 0 || this.y > canvas_height) {
            this.vy *= -1;
            this.y = constrain(this.y, 0, canvas_height);
        }
    }
}
