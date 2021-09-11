var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // public properties
        // constructor
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Play.prototype.Start = function () {
            this._asteroidNum = 3;
            this._space = new objects.Space();
            this._enemy = new objects.Enemy();
            this._player = new objects.Player();
            managers.Game.player = this._player;
            // Instantiates a new Array container of Type objects.Asteroid
            this._asteroids = new Array();
            // Fill the asteroid Array with asteroids
            for (var count = 0; count < this._asteroidNum; count++) {
                this._asteroids[count] = new objects.Asteroid();
            }
            // play background engine sound when the level starts
            this._level1Music = createjs.Sound.play("level1Music");
            this._level1Music.volume = 0.1;
            this._level1Music.loop = -1; // loop forever
            // instantiates a new phaser manager
            this._phaserManager = new managers.Phaser();
            managers.Game.phaserManager = this._phaserManager;
            this.SetupInput();
            this.Main();
        };
        Play.prototype.SetupInput = function () {
            managers.Input.Start();
            // this.on("mousedown", managers.Input.OnLeftMouseDown);
        };
        Play.prototype.Update = function () {
            var _this = this;
            managers.Input.gamepad1.Update();
            if (managers.Input.gamepad1.Buttons[0] &&
                createjs.Ticker.getTicks() % 7 == 0) {
                managers.Game.phaserManager.FirePhaser(managers.Game.player.PhaserSpawn, util.Vector2.up());
            }
            this._space.Update();
            this._player.Update();
            // Update Each asteroid in the asteroid Array
            this._asteroids.forEach(function (asteroid) {
                asteroid.Update();
                managers.Collision.Check(_this._player, asteroid);
            });
            this._enemy.Update();
            managers.Collision.Check(this._player, this._enemy);
            this._phaserManager.Update();
            this._phaserManager.Phasers.forEach(function (phaser) {
                managers.Collision.Check(_this._player, phaser);
                managers.Collision.Check(phaser, _this._enemy);
            });
            managers.Mission.Check();
        };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
            this._level1Music.stop();
            // this.off("mousedown", managers.Input.OnLeftMouseDown);
        };
        Play.prototype.Reset = function () { };
        Play.prototype.Main = function () {
            var _this = this;
            // add space background to the scene
            this.addChild(this._space);
            // add enemy to the scene
            this.addChild(this._enemy);
            // adds player to the scene
            this.addChild(this._player);
            // adds phasers to the scene
            this._phaserManager.Phasers.forEach(function (phaser) {
                _this.addChild(phaser);
            });
            // adds Each asteroid in the asteroid Array to the Scene
            this._asteroids.forEach(function (asteroid) {
                _this.addChild(asteroid);
            });
            // add ScoreBoard UI to the Scene
            managers.Game.scoreBoard.AddGameUI(this);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map