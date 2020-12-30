class dustbin{
    constructor(x,y,width,height){
        var OPTIONS={'isStatic':true}
    this.body=Bodies.rectangle(600,610,20,100,OPTIONS)
    World.add(world,this.body)
    
    
    this.Body=Bodies.rectangle(770,610,20,100,OPTIONS)
    World.add(world,this.Body)
    
    this.Body1=Bodies.rectangle(685,650,150,20,OPTIONS)
    World.add(world,this.Body1)
    
    
    }
    
    display(){
    fill("white")
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,20,100)
    rect(this.Body.position.x,this.Body.position.y,20,100)
    rect(this.Body1.position.x,this.Body1.position.y,150,20)
    }}