class Tableau00 extends Tableau{

    preload() {
        super.preload();
        this.load.image('star', 'assets/star.png');
        this.load.image('ground', 'assets/platform.png');
    }
    create() {
        super.create();

        //des étoiles
        this.star1=this.physics.add.sprite(200,150,"star");
        this.star1.setCollideWorldBounds(true);
        this.star1.setBounce(0);

        this.star2=this.physics.add.sprite(400,100,"star");
        this.star2.setCollideWorldBounds(true);
        this.star2.setBounce(0.5);

        this.star3=this.physics.add.sprite(800,150,"star");
        this.star3.setCollideWorldBounds(true);
        this.star3.setBounce(1);

        let groupeVert = this.physics.add.staticGroup();
        groupeVert.create(200, 185, 'ground');
        groupeVert.create(600, 275, 'ground');
        groupeVert.create(400, 385, 'ground');
        
        this.physics.add.collider(this.player, groupeVert);
        this.physics.add.collider(this.star1, groupeVert);//l'étoile1 rebondit dessus
        this.physics.add.collider(this.star2, groupeVert);//l'étoile2 rebondit dessus
        this.physics.add.collider(this.star3, groupeVert);//l'étoile3 rebondit dessus

        //quand le joueur touche une étoile on appelle la fonction ramasserEtoile
        this.physics.add.overlap(this.player, this.star1, this.ramasserEtoile, null, this);
        this.physics.add.overlap(this.player, this.star2, this.ramasserEtoile, null, this);
        this.physics.add.overlap(this.player, this.star3, this.ramasserEtoile, null, this);

    }

}

