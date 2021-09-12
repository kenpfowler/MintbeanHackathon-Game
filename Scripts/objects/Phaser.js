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
var objects;
(function (objects) {
    var Phaser = /** @class */ (function (_super) {
        __extends(Phaser, _super);
        // Constructor
        function Phaser() {
            var _this = _super.call(this, "phaser") || this;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Phaser.prototype, "Direction", {
            // public properties
            get: function () {
                return this._direction;
            },
            set: function (newDirection) {
                this._direction = newDirection;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Phaser.prototype, "IsInPlay", {
            get: function () {
                return this._isInPlay;
            },
            set: function (newState) {
                this._isInPlay = newState;
                if (!this._isInPlay) {
                    this.Reset();
                }
                this._velocity = util.Vector2.Mulitply(this.Direction, this._speed);
            },
            enumerable: false,
            configurable: true
        });
        // private methods
        Phaser.prototype._move = function () {
            this._updatePosition();
            this.Position = util.Vector2.Add(this.Position, this._velocity);
            this.x = this.Position.x;
            this.y = this.Position.y;
        };
        Phaser.prototype._checkBounds = function () {
            if (this.y > 480 + this.HalfHeight || this.y < -this.HalfHeight) {
                this.IsInPlay = false;
                this.Reset();
            }
        };
        // public methods
        // reset the phasers position off screen and clear direction
        Phaser.prototype.Reset = function () {
            this.x = -10000;
            this.y = -10000;
            this._updatePosition();
            this.Direction = util.Vector2.zero();
        };
        // give the phaser a speed and keep it out of play
        Phaser.prototype.Start = function () {
            this._speed = 15;
            this.IsInPlay = false;
        };
        // if the phaser is in play then cause it to move.  Make sure it doesn't exit the game area.
        Phaser.prototype.Update = function () {
            if (this.IsInPlay) {
                this._move();
                this._checkBounds();
            }
        };
        Phaser.prototype.Destroy = function () { };
        return Phaser;
    }(objects.SpriteGameObject));
    objects.Phaser = Phaser;
})(objects || (objects = {}));
//# sourceMappingURL=Phaser.js.map