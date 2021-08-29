var config;
(function (config) {
    var Key = /** @class */ (function () {
        function Key() {
        }
        // Keyboard Values
        Key.A = "a";
        Key.CRTL = "Control";
        Key.D = "d";
        Key.DOWN_ARROW = "ArrowDown";
        Key.ESCAPE = "Escape";
        Key.LEFT_ARROW = "ArrowLeft";
        Key.RIGHT_ARROW = "ArrowRight";
        Key.S = "s";
        Key.SHIFT = "Shift";
        Key.SPACEBAR = " ";
        Key.UP_ARROW = "ArrowUp";
        Key.W = "w";
        Key.P = "p"; // often used for pause
        return Key;
    }());
    config.Key = Key;
})(config || (config = {}));
//# sourceMappingURL=key.js.map