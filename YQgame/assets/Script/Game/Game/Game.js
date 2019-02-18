cc.Class({
    extends: cc.Component,

    properties: {
        'Player': {
            default: null,
            type: cc.Prefab,
        },

        'Bullet': cc.Prefab,

        'BulletSpeed': 100,

        'enemy': cc.Node,

        'Shoot': cc.Node,

        'ShootState': false,

        'SKill': cc.Node,

        'GameLayer': cc.Node,


    },


    onLoad: function () {

        this.onLoadShootKey();

    },

    onLoadShootKey: function () {
        this.Shoot.on('touchstart', function () {
            this.ShootState = true;

            this.ShootBullet(this.enemy.position);

        }, this);

        this.Shoot.on('touchend', function () {
            this.ShootState = false;
        }, this);

        this.Shoot.on('touchcancel', function () {
            this.ShootState = false;
        }, this);





    },

    ShootBullet: function (EnemyPos) {
        console.log('哒哒哒');

        var Bullet = cc.instantiate(this.Bullet);

        this.node.addChild(Bullet);

        Bullet.position = this.Player.position;

        // let x = EnemyPos.subSelf(Bullet.position);

        // EnemyPos = x.normalizeSelf();

        // Bullet.getComponent(cc.RigidBody).linearVelocity = EnemyPos.mulSelf(this.BulletSpeed);

        let BulletMove = cc.moveTo(0.2, EnemyPos.x, EnemyPos.y);

        Bullet.runAction(BulletMove);

    },


    update: function (dt) {

        if (this.ShootState) {


            // this.ShootBullet(this.enemy.position);
        }


    },


});
