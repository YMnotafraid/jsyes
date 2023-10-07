function red() {
    console.log("red");
}

function green() {
    console.log("green");
}

function yellow() {
    console.log("yellow");
}

function light(color, time) {
    return new Promise((r) => {
        setTimeout(() => {
            r();
            color();
        }, time);
    });
}
async function step() {
    await light(red, 3000);
    await light(green, 2000);
    await light(yellow, 1000);
}
step();