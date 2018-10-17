var game = new Phaser.Game(screen.width, screen.height);
var largeur = screen.width;
var hauteur = screen.height;
var vitesse = 400;

var dodger = {
    preload : function() {
        game.load.image('fond', 'assets/fond.png');
        game.load.image('player', 'assets/player.png');
        game.load.image('mechant', 'assets/mechant.png');
    
    },
    create : function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        game.add.sprite(0, 0, 'fond');
        this.player = game.add.sprite(largeur*0.5, hauteur*0.7, 'player');
        this.player.anchor.set(0.5);
        
        game.physics.arcade.enable(this.player);
        
        this.vitesseChute = 100;
        
        this.cursors = game.input.keyboard.createCursorKeys();
        this.mechants = game.add.group();
        
        this.timer = game.time.events.loop(this.vitesseChute, this.ajouerUnMechant, this);
        
        this.timer2 = game.time.events.loop(2000, this.scoreadd, this);
        this.labelScore = game.add.text(20, 20, "0" + " points", {font : "38px Arial", fill : "#fff"});
        this.labelNiveau = game.add.text(20, 80, "niveau " + "0", {font : "38px Arial", fill : "#fff"});
        this.score = 0;
        this.niveau = 0;
        this.oldScore = 0;
        this.oldNiveau = 0;
        this.vitessegravite = 200;
        this.T = 0;

    },
    update : function() {
        
        if (this.input.keyboard.isDown(Phaser.Keyboard.T)==true && this.T == 0)
            {
                this.T = 1;
            }
        else if (this.input.keyboard.isDown(Phaser.Keyboard.F)==true && this.T == 1)
            {
                this.T = 0;
            }
        if(this.T == 0){
            game.physics.arcade.overlap(this.player, this.mechants, this.restartGame, null, this);
            
        }
        if (this.input.keyboard.isDown(Phaser.Keyboard.P)==true)
            {
                this.vitesseChute -= 90;
                this.vitessegravite += 100;    
                this.niveau += 8;
                this.score += 400;
            }
        
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;
        
        if (this.cursors.left.isDown || this.input.keyboard.isDown(Phaser.Keyboard.Q)==true)
            {
                this.player.body.velocity.x = vitesse * -1;
            }
        
        else if (this.cursors.right.isDown || this.input.keyboard.isDown(Phaser.Keyboard.D)==true)
            {
                this.player.body.velocity.x = vitesse;
            }
        
        else if (this.cursors.up.isDown || this.input.keyboard.isDown(Phaser.Keyboard.A)==true)
            {
                this.player.body.velocity.y = vitesse * -1;
            }
        
        else if (this.cursors.down.isDown || this.input.keyboard.isDown(Phaser.Keyboard.S)==true)
            {
                this.player.body.velocity.y = vitesse;
            }
        
        if (this.player.inWorld == false)
            {
               this.restartGame(); 
            }
        
    },
    restartGame: function(){
        game.state.start('dodger');
        
    },
    ajouerUnMechant : function(){
        var positionX = Math.floor(Math.random() * (largeur - 50)) + 1;
        var positionY = Math.floor(Math.random() * (hauteur * 0.16 - 50)) + 1;
        var mechant = game.add.sprite(positionX, positionY, 'mechant');
        game.physics.arcade.enable(mechant);
        mechant.body.gravity.y = this.vitessegravite;
        this.mechants.add(mechant);
        
        mechant.checkWorldBounds = true;
        mechant.outOfBoundsKill = true;
        
    },
    scoreadd : function() {
        this.score += 40;
        this.labelScore.text = this.score + " points";
        
        this.oldNiveau = this.niveau;
        
        if(this.score == this.oldScore + 80)
            {
                this.oldScore+=80;
                this.niveau++;
                
            }
        this.labelNiveau.text = "niveau " + this.niveau;
        
        if(this.oldNiveau == this.niveau + 1)
            {
                this.vitesseChute -= 20;
                this.vitessegravite += 25;
                vitesse +=10;
            }
    }
};

game.state.add('dodger', dodger);
game.state.start('dodger');