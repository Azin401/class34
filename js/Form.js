class Form {
    constructor(){
    this.button=createButton("play");
    this.input=createInput("name");
    this.greeting=createElement("h2");
    }

    display(){
       var title=createElement("h2");
       title.html("Car Racing Game");
       title.position(displayWidth/2-50,0);

       this.input.position(displayWidth/2-40,displayHeight/2-200);

       this.button.position(displayWidth/2+30,displayHeight/2-50);

       this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();
           this.greeting.html("Hello"+player.name);
           this.greeting.position(displayWidth/2-70,displayHeigth/4);
           player.name=this.input.value();
           playerCount=playerCount+1;
           player.index=playerCount;
           player.update();
           player.updateCount(playerCount);
           
       })
    }

    hide(){
       this.greeting.hide() ;
       this.input.hide();
       this.button.hide();
       this.title.hide();
    }
}