class Plank {
    constructor(x,y,w,h) {
        var options = {
            'restitution': 0.3,
        }
        this.w=w;
        this.h=h;
        this.body = Bodies.rectangle(x, y, this.w,this.h,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        rectMode(CENTER);
        rect(0, 0, this.w,this.h);
        pop();
    }

};