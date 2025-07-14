// おふざけ版

let player;
let enemyGroup;
let tigauyo, orotimaru;

function preload() {
	// 音声ファイルの読み込み（ファイルが存在しない場合はエラーをキャッチ）
	try {
		tigauyo = loadSound('2025-05-26 17-40-46.mp3');
		orotimaru = loadSound('2025-05-26 17-40-40_1.mp3');
	} catch (error) {
		console.log('音声ファイルが見つかりません。音声なしで実行します。');
	}
}
// ↑画像

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);

	player = createSprite(200, 500, 50, 50);

	leftwall = new Sprite(0, windowHeight / 2, 10, height, 'static');
	rightwall = new Sprite(windowWidth, windowHeight / 2, 10, height, 'static');
	//↑壁

	enemyGroup = new Group();
	wallGroup = new Group();
}
// ↑グループ作成

function draw() {
	background(100);

	player.moveTowards(mouse);

	if (frameCount % 30 === 0) {
		let obstacle = new Sprite(random(0, width), 0, random(5, 100), random(5, 100));
		obstacle.velocity.y = 5;
		enemyGroup.add(obstacle);
	}
// ↑降ってくる奴ら

	if (enemyGroup.overlap(leftwall)) {
		enemyGroup.color = 'white';
		if (tigauyo) tigauyo.play();
	}
// ↑左の壁に当たったら「それは違うよ！」って言って□が白くなる

	if (enemyGroup.overlap(rightwall)) {
		enemyGroup.color = 'black';
		if (orotimaru) orotimaru.play();
	}
// ↑右の壁に当たったら「潜影蛇手！」って言って□黒くなる

	if (player.collide(enemyGroup)) {
		console.log("その言葉 斬らせてもらう！")
	}
// ↑当たった時の判定確認用特に意味はない。反論ショーダウン好き
}
