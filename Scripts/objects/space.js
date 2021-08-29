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
    var Space = /** @class */ (function (_super) {
        __extends(Space, _super);
        // public properties
        // constructor
        function Space() {
            var _this = _super.call(this, "space") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Space.prototype._checkBounds = function () {
            if (this.y >= 0) {
                this.Reset();
            }
        };
        Space.prototype._move = function () {
            this.y += this.verticalSpeed;
        };
        // public methods
        Space.prototype.Reset = function () {
            // TODO: Image resets abruptly because of the background isnt uniform
            // FIXES? Make image longer, find uniform backround, end level at image end instead of resetting.
            this.y = -2720;
        };
        Space.prototype.Start = function () {
            this.Reset();
            this.verticalSpeed = 0.3; // 0.1 px per frame
        };
        Space.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Space.prototype.Destroy = function () { };
        return Space;
    }(objects.BitmapGameObject));
    objects.Space = Space;
})(objects || (objects = {}));
//# sourceMappingURL=space.js.map