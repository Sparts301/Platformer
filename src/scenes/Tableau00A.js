class Tableau00A extends Tableau{
    
    preload() {
        super.preload();
        this.load.image('star', 'assets/star.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('Ghost', 'assets/Ghost.png');
        this.load.image('Snake', 'assets/Snake.png');
        this.load.image('monster-fly', 'assets/Snakewing.png');
    }
    create() {
        console.log("a")
        super.create();

        this.star1=this.physics.add.sprite(200,100,"star");
        this.star1.setCollideWorldBounds(true);
        this.star1.setBounce(0);
        this.physics.add.overlap(this.player, this.star1, this.ramasserEtoile, null, this);

        //la plateforme rouge
        let rouge=this.physics.add.sprite(10,200,"ground");
        
        rouge.setDisplaySize(250,50)//taille de l'objet
        rouge.setTintFill(0xFF0000);//applique une couleur rouge
        rouge.setOrigin(0,0);//pour positionner plus facilement
        rouge.body.allowGravity=0; //la gravité n'a pas d'effet ici
        rouge.setImmovable(true); //ne bouge pas quand on rentre dedans
        this.physics.add.collider(this.player, rouge);//le joueur rebondit dessus
        this.physics.add.collider(this.star1, rouge);//l'étoile1 rebondit dessus

        console.log("c")
        
        //autre méthodes

        //un groupe de plateformes statiques
        let groupeVert = this.physics.add.staticGroup();
        groupeVert.create(300, 250, 'ground');
        groupeVert.create(350, 260, 'ground');
        groupeVert.create(400, 270, 'ground');
        groupeVert.create(450, 280, 'ground');
        groupeVert.create(500, 290, 'ground');
        groupeVert.create(700, 400, 'ground');

        //pour chacun des enfants du groupe
        groupeVert.children.iterate(function (child) {
            child.setTintFill(0x00FF00); //applique une couleur verte
            child.setDisplaySize(40,50);//taille de l'objet
            child.setOrigin(0,0);//pour positionner plus facilement
            child.refreshBody();//dit au groupe d'appliquer les changements
        });

        console.log("d")

        this.physics.add.collider(this.player, groupeVert);//le joueur rebondit sur les plateformes du goupe vert

        this.monstre=this.physics.add.sprite(300,this.sys.canvas.height-70,"Ghost");
        this.monstre.setOrigin(9,0);
        this.monstre.setDisplaySize(64,64);
        this.monstre.setCollideWorldBounds(true);
        this.monstre.setBounce(1.1);
        this.monstre.setVelocityX(55);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this)

        this.monstre=this.physics.add.sprite(300,this.sys.canvas.height-70,"Snake");
        this.monstre.setOrigin(0,0);
        this.monstre.setDisplaySize(64,64);
        this.monstre.setCollideWorldBounds(true);
        this.monstre.setBounce(0.85);
        this.monstre.setVelocityX(800);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this)


        new MonsterFly(this,480,150);




    }

}
