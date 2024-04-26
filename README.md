# p5jsハンズオン
Shopify開発勉強会のハンズオンpart  

## 手順
下記の手順に従って進めます。

### 1. ベースとなるhtmlのダウンロード
本レポジトリをgit cloneします。
```
git clone git@github.com:6-inc/shopify-meet-dev-20240426.git
```

### 2. p5jsの基礎について把握します。
[p5.js](https://p5js.org/)はビジュアルプログラミングソフトProcessing（言語はJava）をJavaScriptで記述・実行できるようにしたJSライブラリです。

### 3. exampleの処理を実行してみましょう。
#### サーバーの起動（Node.jsを使います）
下記コマンドでサーバーが起動します。  
server.jsの実装は[MDN ドキュメント](https://developer.mozilla.org/ja/docs/Learn/Server-side/Node_server_without_framework)より
```
cd examples/ex1_描画の基本
node server.js
```
これで、[http://127.0.0.1:8125/](http://127.0.0.1:8125/)にアクセスするとcanvasが表示されるはずです。
#### sketch.jsの処理を見る。
- canvasを生成し埋め込む処理
- setup関数
- draw関数

index.htmlではp5.jsをcdnから読み込んでいます。

##### setup関数
canvasを生成した初回のみ生成される。  
一度だけ実行したい処理を記述。

##### draw関数
マイフレームごとに実行される関数です。


#### 他の例も同様に実行してみましょう。
サーバーを止める処理は「Ctrl + c」

#### 使える関数はこちらに
[p5.js リファレンス](https://p5js.org/reference/)

### 発表をしましょう
希望者のみ発表してもらいます。
