class Particle {
    position;
    velocity;
    size;

    constructor(position, velocity, size) {
        this.position = position;
        this.velocity = velocity;
        this.size = size;
    }

    resolvePosition(particle) {
        const betweenVec = particle.position.clone().subtract(this.position);
        const betweenLength = betweenVec.length();
        if (betweenLength >= this.size+particle.size) return;
        var deltaVec = null;
        // If the two particles lay exactly on top of each other we just move them to the side
        if (betweenLength == 0) {
            deltaVec = new Vector(0, (this.size+particle.size)*0.5);
        } else {
            const intersectionLength = this.size+particle.size-betweenLength;
            deltaVec = betweenVec.multiply((intersectionLength/betweenLength)*0.5);
        }
        particle.position.add(deltaVec);
        this.position.add(deltaVec.multiply(-1));

        if (this.position.y+this.size > 720) {
            this.position.y = 720-this.size;
        }
        if (this.position.x+this.size > 720) {
            this.position.x = 720-this.size;
        } else if (this.position.x-this.size < 0) {
            this.position.x = 0+this.size;
        }
    }
}