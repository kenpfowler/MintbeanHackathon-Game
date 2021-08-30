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
    var Briefing = /** @class */ (function (_super) {
        __extends(Briefing, _super);
        // public properties
        // constructor
        function Briefing() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Briefing.prototype.Start = function () {
            this._space = new objects.Space();
            this._missionLabel = new objects.Label("MISSION: Send Terra Prime Packing", "12px", "PressStart2P", "#FFFFFF", 325, 200, true);
            this._detailsLabel = new objects.Label("Destroy 5 Terra Prime gunships", "10px", "PressStart2P", "#FFFFFF", 325, 240, true);
            this._startButton = new objects.Button("startButton", 320, 360, true);
            this.Main();
        };
        Briefing.prototype.Update = function () {
            this._space.Update();
        };
        Briefing.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Briefing.prototype.Reset = function () { };
        Briefing.prototype.Main = function () {
            // adds ocean to the stage
            this.addChild(this._space);
            this.addChild(this._missionLabel);
            this.addChild(this._detailsLabel);
            this.addChild(this._startButton);
            this._startButton.on("click", function () {
                managers.Game.currentState = config.Scene.PLAY;
            });
        };
        return Briefing;
    }(objects.Scene));
    scenes.Briefing = Briefing;
})(scenes || (scenes = {}));
//# sourceMappingURL=briefing.js.map