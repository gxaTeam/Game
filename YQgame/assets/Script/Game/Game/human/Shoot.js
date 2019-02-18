
cc.Class({
    extends: cc.Component,

    properties: {

        'Player': {
            default: null,
            type: cc.Node,
        },

        'shoot': false,

        'bullet': {
            default: null,
            type: cc.Prefab,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.on('touchstart', function () {
            this.shoot = true;
        }, this);

        this.node.on('touchend', function () {
            this.shoot = false;
        }, this);

        this.node.on('touchcancel', function () {
            this.shoot = false;
        }, this);
    },


    start() {

    },

    ShootBullte: function () {

        console.log('aaa');



    },

    update(dt) {
        if (this.shoot == true) {
            this.ShootBullte();
        }

    },
});
