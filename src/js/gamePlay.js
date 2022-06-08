export default class GamePlay {
    constructor() {
        this.dead = document.getElementById("dead");
        this.lost = document.getElementById("lost");
    }

    getDead() {
        dead.textContent = Number(dead.textContent) + 1;
    }

    getLost() {
        lost.textContent = Number(lost.textContent) + 1;
    }

    reset() {
       dead.textContent = 0;
       lost.textContent = 0;
    }
}