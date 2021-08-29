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
    var BitmapGameObject = /** @class */ (function (_super) {
        __extends(BitmapGameObject, _super);
        // constructors
        function BitmapGameObject(imageString) {
            var _this = _super.call(this, managers.Game.assetManager.getResult(imageString)) || this;
            _this.name = imageString;
            _this._initialize();
            return _this;
        }
        Object.defineProperty(BitmapGameObject.prototype, "Width", {
            // public properties
            get: function () {
                return this._width;
            },
            set: function (newValue) {
                this._width = newValue;
                this.HalfWidth = this._width * 0.5;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BitmapGameObject.prototype, "Height", {
            get: function () {
                return this._height;
            },
            set: function (newValue) {
                this._height = newValue;
                this.HalfHeight = this._height * 0.5;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BitmapGameObject.prototype, "HalfHeight", {
            get: function () {
                return this._halfHeight;
            },
            set: function (newValue) {
                this._halfHeight = newValue;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BitmapGameObject.prototype, "HalfWidth", {
            get: function () {
                return this._halfWidth;
            },
            set: function (newValue) {
                this._halfWidth = newValue;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BitmapGameObject.prototype, "Position", {
            get: function () {
                return this._position;
            },
            set: function (newPosition) {
                this._position = newPosition;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BitmapGameObject.prototype, "IsColliding", {
            get: function () {
                return this._isColliding;
            },
            set: function (newValue) {
                this._isColliding = newValue;
            },
            enumerable: false,
            configurable: true
        });
        // private methods
        BitmapGameObject.prototype._initialize = function () {
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
            this.Position = new util.Vector2(this.x, this.y);
            this.IsColliding = false;
        };
        BitmapGameObject.prototype._updatePosition = function () {
            this.Position.x = this.x;
            this.Position.y = this.y;
        };
        return BitmapGameObject;
    }(createjs.Bitmap));
    objects.BitmapGameObject = BitmapGameObject;
})(objects || (objects = {}));
//# sourceMappingURL=bitmapgameobject.js.map