var game = new Phaser.Game(600, 600);

var dodger = {
    preload: function() {
        //Chargement image
        game.load.image('fond', 'assets/fond.png');
        game.load.image('player', 'assets/player.png');
    },
    create: function() {
        //setup + affichage
        game.add.sprite(0, 0, 'fond');
        this.player = game.add.sprite(300, 500, 'player').anchor.set(0.5);
    },
    update: function() {
        //Logique du jeu
    }
};

game.state.add('dodger', dodger);
game.state.start('dodger');