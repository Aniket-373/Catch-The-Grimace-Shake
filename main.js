const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);
let player, shakes, dangers, cursors, scoreText, score, levelText, isPaused = false, isGameOver = false, level = 1, gameOverText, winnerText, gameOverBox, winnerBox, catchSound, hitSound;

function preload() {
    this.load.image('background', 'assets/background.jpg');
    this.load.image('grimaceShake', 'assets/grimaceShake.png');
    this.load.image('danger', 'assets/danger.png');
    this.load.spritesheet('player', 'assets/player.png', { frameWidth: 32, frameHeight: 48 });
    this.load.audio('catch', 'assets/catch.mp3');
    this.load.audio('hit', 'assets/hit.mp3');
}

function create() {
    this.add.image(400, 300, 'background');
    player = this.physics.add.sprite(400, 500, 'player');
    player.setCollideWorldBounds(true);

    shakes = this.physics.add.group();
    dangers = this.physics.add.group();

    this.time.addEvent({ delay: 2000, callback: spawnShake, callbackScope: this, loop: true });
    this.time.addEvent({ delay: 5000, callback: spawnDanger, callbackScope: this, loop: true });

    cursors = this.input.keyboard.createCursorKeys();
    scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
    levelText = this.add.text(16, 50, 'Level: 1', { fontSize: '32px', fill: '#000' });
    score = 0;

    this.physics.add.collider(player, shakes, catchShake, null, this);
    this.physics.add.collider(player, dangers, hitDanger, null, this);

    // Load sounds
    catchSound = this.sound.add('catch');
    hitSound = this.sound.add('hit');

    // Pause and Restart Buttons
    const pauseButton = document.getElementById('pauseButton');
    const restartButton = document.getElementById('restartButton');

    pauseButton.removeEventListener('click', togglePause);
    pauseButton.addEventListener('click', togglePause);

    restartButton.removeEventListener('click', restartGame);
    restartButton.addEventListener('click', restartGame);
}

function update() {
    if (isPaused || isGameOver) return;

    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
    } else {
        player.setVelocityX(0);
    }
}

function spawnShake() {
    if (isPaused || isGameOver) return;

    const x = Phaser.Math.Between(0, 800);
    const shake = shakes.create(x, 16, 'grimaceShake');
    shake.setBounce(0.5);
    shake.setCollideWorldBounds(true);
    shake.setVelocity(Phaser.Math.Between(-100, 100), 200 + level * 10);
    shake.setGravityY(300);
}

function spawnDanger() {
    if (isPaused || isGameOver) return;

    for (let i = 0; i < level; i++) {
        const x = Phaser.Math.Between(0, 800);
        const danger = dangers.create(x, 16, 'danger');
        danger.setBounce(1);
        danger.setCollideWorldBounds(true);
        danger.setVelocity(Phaser.Math.Between(-200, 200), 20 + level * 10);
    }
}

function catchShake(player, shake) {
    shake.disableBody(true, true);
    score += 10;
    scoreText.setText('Score: ' + score);
    catchSound.play();

    if (score >= 100) {
        displayWinner(this);
        this.physics.pause();
        isPaused = true;
    } else if (score % 30 === 0) { // Level up every 30 points
        level += 1;
        levelText.setText('Level: ' + level);
    }
}

function hitDanger(player, danger) {
    if (isGameOver) return;

    this.physics.pause();
    player.setTint(0xff0000);
    isPaused = true;
    isGameOver = true;
    hitSound.play();
    displayGameOver(this);
    player.clearTint();
}

function togglePause() {
    if (isGameOver) return;

    isPaused = !isPaused;
    if (isPaused) {
        game.scene.scenes[0].physics.pause();
        player.setTint(0x999999);
    } else {
        game.scene.scenes[0].physics.resume();
        player.clearTint();
    }
}

function restartGame() {
    isPaused = false;
    isGameOver = false;
    game.scene.scenes[0].scene.restart();
}

function displayGameOver(scene) {
    gameOverBox = scene.add.graphics();
    gameOverBox.fillStyle(0x000000, 0.8);
    gameOverBox.fillRect(150, 200, 500, 200);
    
    gameOverText = scene.add.text(400, 300, 'Game Over!! got Grimace Curse', { fontSize: '20px', fill: '#ff0000' }).setOrigin(0.5);
}

function displayWinner(scene) {
    winnerBox = scene.add.graphics();
    winnerBox.fillStyle(0x000000, 0.8);
    winnerBox.fillRect(150, 200, 500, 200);
    
    winnerText = scene.add.text(400, 300, 'Winner!! Player overcomed Grimace Curse', { fontSize: '20px', fill: '#00ff00' }).setOrigin(0.5);
}
