
const particles = [];

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

for (let i = 0; i < 20; i++) {
    const x = randomIntFromInterval(300, 500);
    const y = randomIntFromInterval(300, 500);
    particles.push(new Particle(new Vector(x, y), new Vector(0, 2), 50));
}



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let particle of particles) {
        ctx.beginPath();
        ctx.arc(particle.position.x, particle.position.y, particle.size, 0, 2*Math.PI);
        ctx.stroke(); 
    }
}

draw();

function resolveParticles(step) {
    if (step == 20) return;
    for (let particle of particles) {
        for (let particle2 of particles) {
            particle.resolvePosition(particle2);
        }
    }
    step+=1
    resolveParticles(step);
}


setInterval(() => {
    for (let particle of particles) {
        particle.position.add(particle.velocity);
        console.log(particle.position.y);
    }
    resolveParticles(0);
    draw();
}, 20);