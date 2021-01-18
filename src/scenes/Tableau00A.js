class Tableau00A extends Tableau{

    preload() {
        super.preload();
        this.load.image('star', 'assets/star.png');
    }
    create() {
        super.create();

 

        this.stars=this.physics.add.group();
        for(let i=1 ;i<=20;i++){
            this.stars.create(i*15,"star");
        }
        this.stars.children.iterate(function (child){ 
            child.setCollideWorldBounds(true);
            child.setBounce(1);
        });

    create(); {
       super.create();

        let groupeVert = this.physics.add.staticGroup();
        groupeVert.create(50, 250, 'ground');
        groupeVert.create(350, 260, 'ground');
        groupeVert.create(400, 270, 'ground');
        groupeVert.create(450, 280, 'ground');
        groupeVert.create(500, 290, 'ground');
        groupeVert.create(700, 300, 'ground');
    

        //quand le joueur touche une étoile on appelle la fonction ramasserEtoile
        this.physics.add.overlap(this.player, this.star1, this.ramasserEtoile, null, this);
        this.physics.add.overlap(this.player, this.star2, this.ramasserEtoile, null, this);
        this.physics.add.overlap(this.player, this.star3, this.ramasserEtoile, null, this);

    }
            //pour chacun des enfants du groupe
            groupeVert.children.iterate(function(child){
                child.setTintFill(0x00FF00); //applique une couleur verte
                child.setDisplaySize(40,50);//taille de l'objet
                child.setOrigin(0,0);//pour positionner plus facilement
                child.refreshBody();//dit au groupe d'appliquer les changements
            });
    
            this.physics.add.collider(this.player, groupeVert);//le joueur rebondit sur les plateformes du goupe vert
            this.physics.add.collider(this.star1, groupeVert);//l'étoile1 rebondit sur les plateformes du goupe vert
            this.physics.add.collider(this.star2, groupeVert);//l'étoile1 rebondit sur les plateformes du goupe vert
            this.physics.add.collider(this.star3, groupeVert);//l'étoile1 rebondit sur les plateformes du goupe vert

        }
    }
