game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function () {
        // reset the score
        game.data.score = 0;
        //sets where mario resets to
        me.levelDirector.loadLevel("JLevel01");
        this.resetPlayer(0, 360);

        // add our HUD to the game world
        this.HUD = new game.HUD.Container();
        me.game.world.addChild(this.HUD);
        //binds keys to names
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.LEFT, "left");
        me.input.bindKey(me.input.KEY.UP, "jump");
        me.input.bindKey(me.input.KEY.R, "restart");
    },
    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function () {
        // remove the HUD from the game world
        me.game.world.removeChild(this.HUD);
    }, 
    //resets the player character
    resetPlayer: function (x, y) {
        var player = me.pool.pull("mario", x, y, {});
        me.game.world.addChild(player, 6);
    }
});
