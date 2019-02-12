// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        Rocker: {
            type: require("Rocker"),
            default: null,
        },

        speed: 100,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() { },

    start() {

    },

    update(dt) {
        if (this.Rocker.dir.mag() < 0.5) {
            return;
        }

        var vx = this.Rocker.dir.x * this.speed;
        var vy = this.Rocker.dir.y * this.speed;

        var sx = vx * dt;
        var sy = vy * dt;

        this.node.x += sx;
        this.node.y += sy;

        var r = Math.atan2(this.Rocker.dir.y, this.Rocker.dir.x);
        var degree = r * 180 / (Math.PI);
        degree = 360 - degree + 90;
        this.node.rotation = degree;

    },
});
