var game = new Phaser.Game(screen.width -15, screen.height * 0.5 );

var crokojump = {
    
    preload : function(){
        game.load.image('fond', 'fond.jpg');
        game.load.image('player2', 'play.jpg');
        game.load.image('cactus', 'logo-atomique.png');
        game.load.image('oiseau', 'player.png');
        
    
    },
    create : function (){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        this.fond = game.add.sprite(0, 0, 'fond');
        this.fond.width = screen.width -15;
        this.fond.height = screen.height;
        bmd = game.make.bitmapData(800, 600);
        
        this.player = game.add.sprite(screen.width * 0.1, screen.height * 0.4, 'player2');
        this.player.anchor.set(0.5);
        this.player.width = 50;
        this.player.height = 50;
        this.player.checkWorldBounds = true;
        
        game.physics.arcade.enable(this.player);
        this.player.body.gravity.y = 4000 ;

        //this.player.body.immovable = true;
        this.player.body.collideWorldBounds = true;
         
        var line = new Phaser.Line(0, screen.height * 0.5, screen.width, screen.height * 0.5);
        this.graphics=game.add.graphics(0,0);
        this.graphics.lineStyle(3, 0x000000, 1);
        this.graphics.moveTo(line.start.x,line.start.y);//moving position of graphic if you draw mulitple lines
        this.graphics.lineTo(line.end.x,line.end.y);

        this.cactuss = game.add.group();
    
        this.timer = game.time.events.loop(2000, this.ajouterCactus, this);

        this.cursors = game.input.keyboard.createCursorKeys();
       	this.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        game.input.keyboard.addKeyCapture([ Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT, Phaser.Keyboard.SPACEBAR ]);
        
        this.T = 0;
        this.score = 0;
        this.niveau = 0;
        this.oldScore = 0;
        this.oldNiveau = 0;
        this.max = 4000;
        this.min = 3000
        this.vie = 4;
        
        this.timer2 = game.time.events.loop(2000, this.scoreadd, this);
        this.labelScore = game.add.text(20, 20, "0" + " points", {font : "38px Arial", fill : "0x000000"});
        this.labelNiveau = game.add.text(20, 80, "niveau " + "0", {font : "38px Arial", fill : "0x000000"});
        this.labelVie = game.add.text(500, 80, "vies " + "4", {font : "38px Arial", fill : "0x000000"});
        
        this.labelLv1 = game.add.text(800, 20, "Facile", {font : "28px Arial", fill : "0x140202"});
        /*this.labelLv2 = game.add.text(800, 80, "Moyen", {font : "38px Arial", fill : "0xe06868"});
        this.labelLv3 = game.add.text(800, 140, "Difficile" , {font : "38px Arial", fill : "0x908c8c"});*/
    
        
this.pres = false;
        
    },

    update : function(){
 //       this.player.y = screen.height * 0.37;
        //this.player.body.velocity.x = 0;
//               if (this.input.keyboard.isDown(Phaser.Keyboard.T)==true && this.T == 0)
//            {
//                this.T = 1;
//            }
//        else if (this.input.keyboard.isDown(Phaser.Keyboard.F)==true && this.T == 1)
//            {
//                this.T = 0;
//            }
//        
//                if(this.T == 1)
//            {
//            game.physics.arcade.collide(this.player, this.cactuss)
//            }
//        else if (this.T == 0)
//            {
               game.physics.arcade.overlap(this.player, this.cactuss, this.restartGame, null, this);
//            }
        
               if (this.cursors.up.isDown)
                    {
                        this.player.x +=30;
                    }
                if (this.cursors.down.isDown)
                    {
                        this.player.x -=30;
                    }
        
        
                if(this.niveau < 10)
                {
                    this.player.body.velocity.x = 0;
                }
        if (this.cursors.right.isDown)
            {
            if(this.niveau < 10)
                 this.player.body.velocity.x = 300;
                
                else
                    this.player.body.velocity.x += 10;
                if(this.player.y >= screen.height * 0.35)
                    {
                        if (this.spaceKey.downDuration(200))
                        {
                            this.player.body.velocity.y = -800;  
                        } 
                    }

                
            }
        else if (this.cursors.left.isDown)
            {
             if(this.niveau < 10)
                 this.player.body.velocity.x = -300;
                
                else
                    this.player.body.velocity.x -= 10;
                
             if(this.player.y >= screen.height * 0.35)
                {
                    if (this.spaceKey.downDuration(300))
                    {
                        this.player.body.velocity.y = -150;  
                    }                    
                        
                }

                
            }
        
        if (this.player.y >= screen.height * 0.35)
            {
                if (this.spaceKey.downDuration(200))
                    {
                        game.physics.arcade.overlap(this.player, this.cactuss, this.restartGame, null, this);
                        this.player.body.velocity.y = -800;
                        this.press = true;
                
                        if (this.cursors.right.isDown)
                            {
                                this.player.body.velocity.x += 10;
                
                            }
                    }
            }
        


                if(this.niveau <= 5)
                    {
                        this.labelLv1.text = "facile"
                    }
                else if(this.niveau <= 5 < this.niveau)
                    {
                        this.labelLv1.text = "moyen"
                    }
                else if(this.niveau <= 5)
                    {
                        this.labelLv1.text = "difficile"
                    }

        /*if(this.player.y <= screen.height * 0.3)
            {
                game.physics.arcade.overlap(this.player, this.cactuss, this.restartGame, null, this);
                this.player.loadTexture('oiseau', 0);
                this.player.width = 50;
                this.player.height = 50;
            }
        else
            {
                game.physics.arcade.overlap(this.player, this.cactuss, this.restartGame, null, this);
                this.player.loadTexture('player2', 0);
                this.player.width = 50;
                this.player.height = 50;
            }*/
        


        

        
        
        this.dalay = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        this.labelVie.text =" vies " + this.vie;
        
        
    },
    
    ajouterCactus : function(){
        setTimeout(this.ajouterCactus, this.dalay);
        
        var positionX = Math.floor(Math.random() * (screen.width - screen.width * 0.7)) + screen.width * 0.7;
        var positionY = screen.height * 0.47;
        var cactus1 = game.add.sprite(positionX, positionY, 'cactus');
        cactus1.anchor.set(0.5, 0.5);
        cactus1.width = 50;
        cactus1.height = 50;
        game.physics.arcade.enable(cactus1);
        cactus1.body.velocity.x = -250;
        this.cactuss.add(cactus1);
        
        cactus1.checkWorldBounds = true;
        cactus1.outOfBoundsKill = true;

    },
    restartGame : function(){
        this.player.body.enable = false;
        this.vie -= 0.5;
        this.player.x += 55;
        
        //this.player.body.enable = false;
        if(this.vie == 0)
            {
                alert(this.vie)
                game.state.start('crokojump');
            }
            
            
    
       this.player.body.enable = true;
        
    //alert('touché')
    },
    scoreadd : function() {
        this.score += 40;
        this.labelScore.text = this.score + " points";
        
        this.oldNiveau = this.niveau;
        
        if(this.score == this.oldScore + 80)
            {
                this.oldScore+=80;
                this.niveau++;
                this.max -=20;
                this.min -=20;
                
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

game.state.add('crokojump', crokojump);
game.state.start('crokojump');

