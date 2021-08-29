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
            this._cloudNum = 3;
            this._ocean = new objects.Ocean();
            this._island = new objects.Island();
            this._enemy = new objects.Enemy();
            this._player = new objects.Player();
            managers.Game.player = this._player;
            // Instantiates a new Array container of Type objects.Cloud
            this._clouds = new Array();
            // Fill the Cloud Array with Clouds
            for (var count = 0; count < this._cloudNum; count++) {
                this._clouds[count] = new objects.Cloud();
            }
            // play background engine sound when the level starts
            this._engineSound = createjs.Sound.play("engineSound");
            this._engineSound.volume = 0.1;
            this._engineSound.loop = -1; // loop forever
            // instantiates a new bullet manager
            this._bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this._bulletManager;
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
                managers.Game.bulletManager.FireBullet(managers.Game.player.BulletSpawn, util.Vector2.up());
            }
            this._ocean.Update();
            this._player.Update();
            this._island.Update();
            // check if player and island are colliding
            managers.Collision.Check(this._player, this._island.Coin);
            // Update Each cloud in the Cloud Array
            this._clouds.forEach(function (cloud) {
                cloud.Update();
                managers.Collision.Check(_this._player, cloud);
            });
            this._enemy.Update();
            managers.Collision.Check(this._player, this._enemy);
            this._bulletManager.Update();
            this._bulletManager.Bullets.forEach(function (bullet) {
                managers.Collision.Check(_this._player, bullet);
                managers.Collision.Check(bullet, _this._enemy);
            });
        };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
            this._engineSound.stop();
            // this.off("mousedown", managers.Input.OnLeftMouseDown);
        };
        Play.prototype.Reset = function () { };
        Play.prototype.Main = function () {
            var _this = this;
            // adds ocean to the scene
            this.addChild(this._ocean);
            // adds island to the scene
            this.addChild(this._island);
            this.addChild(this._island.Coin);
            this.addChild(this._enemy);
            // adds player to the scene
            this.addChild(this._player);
            // adds bullets to the scene
            this._bulletManager.Bullets.forEach(function (bullet) {
                _this.addChild(bullet);
            });
            // adds Each Cloud in the Cloud Array to the Scene
            this._clouds.forEach(function (cloud) {
                _this.addChild(cloud);
            });
            // add ScoreBoard UI to the Scene
            managers.Game.scoreBoard.AddGameUI(this);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map