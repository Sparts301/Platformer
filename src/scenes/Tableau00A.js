class Tableau00A extends Tableau{
    
    preload() {
        super.preload();
        this.load.image('star', 'assets/star.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('monster', 'assets/Ghost.png');
        this.load.image('Snake', 'assets/Snake.png');
        this.load.image('monster-fly','assets/Snakewing.png');
        this.load.image('platform','assets/arbre01.png')
        this.load.image('1ereCouche','assets/soletavant.png')
        this.load.image('2eCouche','assets/fond.png')
        this.load.image('3eCouche','assets/nuage.png')

    }
    create() {
        console.log("a")
        super.create();

        let largeurDuTableau=2000;
        let hauteurDuTableau=600; //la hauteur est identique au cadre du jeu
        this.cameras.main.setBounds(0, 0, largeurDuTableau, hauteurDuTableau);
        this.physics.world.setBounds(0, 0, largeurDuTableau,  hauteurDuTableau);

        this.cameras.main.startFollow(this.player, false, 1.05, 1.05);

        this.sky3=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            '3eCouche'
        );
        this.sky3.setScrollFactor(0);
        this.sky3.setOrigin(0,0);



                //on ajoute une deuxième couche de ciel
        this.sky2=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            '2eCouche'
        );
        this.sky2.setScrollFactor(0);
        this.sky2.setOrigin(0,0);
        //this.sky2.alpha=0.2;
        //on change de ciel, on fait une tileSprite ce qui permet d'avoir une image qui se répète
        this.sky=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            '1ereCouche'
        );
        this.sky.setOrigin(0,0);
        this.sky.setScrollFactor(0);

        this.star1=this.physics.add.sprite(570,600,"star");
        this.star1.setCollideWorldBounds(true);
        this.star1.setBounce(0);
        this.physics.add.overlap(this.player, this.star1, this.ramasserEtoile, null, this);

        this.star2=this.physics.add.sprite(150,800,"star");
        this.star2.setCollideWorldBounds(true);
        this.star2.setBounce(0);
        this.physics.add.overlap(this.player, this.star2, this.ramasserEtoile, null, this)

        this.star3=this.physics.add.sprite(350,150,"star");
        this.star3.setCollideWorldBounds(true);
        this.star3.setBounce(0);
        this.physics.add.overlap(this.player, this.star3, this.ramasserEtoile, null, this)

        this.star4=this.physics.add.sprite(1450,150,"star");
        this.star4.setCollideWorldBounds(true);
        this.star4.setBounce(0);
        this.physics.add.overlap(this.player, this.star4, this.ramasserEtoile, null, this)


        this.star5=this.physics.add.sprite(1950,90,"star");
        this.star5.setCollideWorldBounds(true);
        this.star5.setBounce(1);
        this.physics.add.overlap(this.player, this.star5, this.ramasserEtoile, null, this)

        this.star6=this.physics.add.sprite(795,305,"star");
        this.star6.setCollideWorldBounds(true);
        this.star6.setBounce(1);
        this.physics.add.overlap(this.player, this.star6, this.ramasserEtoile, null, this)

        this.star7=this.physics.add.sprite(1490,380,"star");
        this.star7.setCollideWorldBounds(true);
        this.star7.setBounce(1);
        this.physics.add.overlap(this.player, this.star7, this.ramasserEtoile, null, this);


        console.log("b")

    
        let rouge=this.physics.add.sprite(1110,200,'ground');
        
        rouge.setDisplaySize(90,10)//taille de l'objet
        rouge.setTintFill(0xD1E40E);//applique une couleur rouge
        rouge.setOrigin(0,0);//pour positionner plus facilement
        rouge.body.allowGravity=1; //la gravité a de l'effet ici
        rouge.setImmovable(true); //ne bouge pas quand on rentre dedans
        this.physics.add.collider(this.player, rouge);//le joueur rebondit dessus
        rouge.setCollideWorldBounds(true);//la platforme reste dans le tableau
        rouge.setBounce(1);

        
        let jaune=this.physics.add.sprite(1690,200,'ground');
        
        jaune.setDisplaySize(90,10)//taille de l'objet
        jaune.setTintFill(0xD1E40E);//applique une couleur rouge
        jaune.setOrigin(0,0);//pour positionner plus facilement
        jaune.body.allowGravity=1; //la gravité a de l'effet ici
        jaune.setImmovable(true); //ne bouge pas quand on rentre dedans
        this.physics.add.collider(this.player, jaune);//le joueur rebondit dessus
        jaune.setCollideWorldBounds(true);//la platforme reste dans le tableau
        jaune.setBounce(1);

        let lolo=this.physics.add.sprite(10,200,'ground');
        lolo.setDisplaySize(50,10)//taille de l'objet
        lolo.setTintFill(0xD1E40E);//applique une couleur rouge
        lolo.setOrigin(0,0);//pour positionner plus facilement
        lolo.body.allowGravity=1; //la gravité a de l'effet ici
        lolo.setImmovable(true); //ne bouge pas quand on rentre dedans
        this.physics.add.collider(this.player, lolo);//le joueur rebondit dessus
        lolo.setCollideWorldBounds(true);//la platforme reste dans le tableau
        lolo.setBounce(0.9);


        
        //autre méthodes
        let bleu = this.physics.add.staticGroup();
        bleu.create(160, 520, 'ground');
        bleu.create(280, 450, 'ground');
        bleu.create(400, 385, 'ground');
        bleu.create(560, 290, 'ground');
        bleu.create(840, 290, 'ground');
        bleu.create(895, 290, 'ground');
        bleu.create(630, 290, 'ground');
        bleu.create(500, 1520,'ground');

        //pour chacun des enfants du groupe
       bleu.children.iterate(function (child) {
         child.setTintFill(0x047924); //applique une couleur bleu
         child.setDisplaySize(70,10);//taille de l'objet
         child.setOrigin(0,0);//pour positionner plus facilement
         child.refreshBody();//dit au groupe d'appliquer les changements
         child.setBounce(1);
        });

        this.physics.add.collider(this.player, bleu)



        let red = this.physics.add.staticGroup();
        red.create(550, 430, 'ground');

       red.children.iterate(function (child) {
         child.setTintFill(0x7F4D05); //applique une couleur bleu
         child.setDisplaySize(7,1000);//taille de l'objet
         child.setOrigin(0,0);//pour positionner plus facilement
         child.refreshBody();//dit au groupe d'appliquer les changements
        });

        this.physics.add.collider(this.player, red);

        //un groupe de plateformes statiques
        let groupeVert = this.physics.add.staticGroup();
        groupeVert.create(320, 185, 'ground');
        //groupeVert.create(840, 290, 'ground');
        groupeVert.create(550, 425, 'ground');
        groupeVert.create(800, 425, 'ground');
        groupeVert.create(1900, 180, 'ground');
        groupeVert.create(1350, 280, 'ground');


        //pour chacun des enfants du groupe
        groupeVert.children.iterate(function (child) {
            child.setTintFill(0xA52A2A); //applique une couleur verte
            child.setDisplaySize(240,10);//taille de l'objet
            child.setOrigin(0,0);//pour positionner plus facilement
            child.refreshBody();//dit au groupe d'appliquer les changements
        });
        this.physics.add.collider(this.player, groupeVert);
        this.physics.add.collider(this.star3, groupeVert);
        this.physics.add.collider(this.star4, groupeVert);
        this.physics.add.collider(this.star5, groupeVert);
        this.physics.add.collider(this.star6, groupeVert);

        
        


        //Monstre
       /* this.Ghost=this.physics.add.sprite(250,this.sys.canvas.height-70,"Ghost");
        this.Ghost.setOrigin(200,0);
        this.Ghost.setDisplaySize(64,64);
        this.Ghost.setCollideWorldBounds(true);
        this.Ghost.setBounce(1);
        this.Ghost.setVelocityX(100);
        this.physics.add.overlap(this.player, this.Ghost, this.hitSpike, null, this)
        this.physics.add.collider(this.Ghost, groupeVert)*/
        

        /*this.monstre=this.physics.add.sprite(250,this.sys.canvas.height-70,"Snake");
        this.monstre.setOrigin(0,0);
        this.monstre.setDisplaySize(64,64);
        this.monstre.setCollideWorldBounds(true);
        this.monstre.setBounce(0.4);
        this.monstre.setVelocityX(350);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this)
        this.physics.add.collider(this.monstre, red)*/


        new MonsterFly(this,480,150);
        new MonsterFly(this,1480,170);

        new Monster(this,860,520);
        new Monster(this,1350,520);
        new Monster(this,1750,520);


        new Snake(this,475,570);
        new Snake(this,975,395);


        
        
        this.player.setDepth(100);

        
    }
    update(){
        super.update();
        //le ciel se déplace moins vite que la caméra pour donner un effet paralax
        this.sky.tilePositionX=this.cameras.main.scrollX*0.6;
        //this.sky.tilePositionY=this.cameras.main.scrollY*0.2;
        //le deuxième ciel se déplace moins vite pour accentuer l'effet
        this.sky2.tilePositionX=this.cameras.main.scrollX*0.3+500;
        //this.sky2.tilePositionY=this.cameras.main.scrollY*0.1+30;
        //this.sky10.tilePositionX=this.cameras.main.scrollX*0;
        this.sky3.tilePositionX=this.cameras.main.scrollX*0.2;
        //this.sky3.tilePositionY=this.cameras.main.scrollY*0.05;
    }

}
