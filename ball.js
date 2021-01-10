class Ball{
    constructor(x, y, radius, angle){
        var options = {
            'density': 1,
            'frictionAir':0.005
        }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    this.angle = angle;
    World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIANS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}