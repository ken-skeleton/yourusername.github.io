let position;
let velocity;
let enemyGroup;

let mySplite;

let doo;
let re;
let mi;
let fa;
let so;
let ra;
let si;
// ↑音の宣言

let x = 0;
//↑右端に⚪︎が行ったら、画面左端に⚪︎が戻るためのセットアップ


function preload() {
	doo = loadSound('maou_se_inst_piano2_1do.mp3');
	re = loadSound('maou_se_inst_piano2_2re.mp3');
	mi = loadSound('maou_se_inst_piano2_3mi.mp3');
	fa = loadSound('maou_se_inst_piano2_4fa.mp3');
	so = loadSound('maou_se_inst_piano2_5so.mp3');
	ra = loadSound('maou_se_inst_piano2_6ra.mp3');
	si = loadSound('maou_se_inst_piano2_7si.mp3');
}
// ↑音の鳴るエリア

function setup() {



	new Canvas(1200, 780);
	noStroke();
	world.gravity.y = 10;
	enemyGroup = new Group();

	position = new p5.Vector(0, 0);
	velocity = new p5.Vector(10, -14);
	//↑動く方向と強さ

	mySprite = new Sprite();
	mySprite.pos = position;
	mySprite.diameter = 120;
	mySprite.points = 0;
	mySprite.overlaps(enemyGroup, collect);
	//↑でっかい〇の設定



	// ブロック
	for (let i = 0; i < 150; i++) {
		let obstacle = new Sprite(random(0, width), random(0, height), 50, 50);
		obstacle.velocity.y = 5;
		obstacle.collider = 'static';
		enemyGroup.add(obstacle);
		// ちっちゃい□
	}
}

function collect(mySprite, enemyGroup) {
	let music = random([doo, re, mi, fa, so, ra, si]);
	enemyGroup.remove();
	mySprite.points += 1;
	music.play();
}
//↑ちっちゃい□に触ったらランダムに音を鳴らしてポイント加算

function draw() {
	background(255 * 0.9);
	clear();
	mySprite.text = mySprite.points;

	if (mySprite.position.x > width) {
		mySprite.position.x = 0;
	}
	//↑右端に⚪︎が行ったら、画面左端に⚪︎が戻るためのコード

	// マウスクリックしたら動く
	if (mouse.pressing()) {
		mySprite.velocity = new p5.Vector(5, -7);
	}
}
