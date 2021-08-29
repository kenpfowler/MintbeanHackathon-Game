var managers;
(function (managers) {
    var Input = /** @class */ (function () {
        function Input() {
        }
        Input.Start = function () {
            this.enabled = true;
            document.addEventListener("keydown", this.onKeyDown.bind(this), false);
            document.addEventListener("keyup", this.onKeyUp.bind(this), false);
            this.gamepad1 = new managers.GamePad(0);
        };
        Input.Stop = function () {
            this.enabled = false;
            document.removeEventListener("keydown", this.onKeyDown.bind(this), false);
            document.removeEventListener("keyup", this.onKeyUp.bind(this), false);
        };
        Input.onKeyDown = function (event) {
            switch (event.key) {
                case config.Key.UP_ARROW:
                case config.Key.W:
                    this.moveForward = true;
                    break;
                case config.Key.LEFT_ARROW:
                case config.Key.A:
                    this.moveLeft = true;
                    break;
                case config.Key.DOWN_ARROW:
                case config.Key.S:
                    this.moveBackward = true;
                    break;
                case config.Key.RIGHT_ARROW:
                case config.Key.D:
                    this.moveRight = true;
                    break;
                case config.Key.SPACEBAR:
                    this.fire = true;
                    break;
                case config.Key.P:
                    this.enabled = this.enabled ? false : true;
            }
        };
        Input.onKeyUp = function (event) {
            switch (event.key) {
                case config.Key.UP_ARROW:
                case config.Key.W:
                    this.moveForward = false;
                    break;
                case config.Key.LEFT_ARROW:
                case config.Key.A:
                    this.moveLeft = false;
                    break;
                case config.Key.DOWN_ARROW:
                case config.Key.S:
                    this.moveBackward = false;
                    break;
                case config.Key.RIGHT_ARROW:
                case config.Key.D:
                    this.moveRight = false;
                    break;
                case config.Key.SPACEBAR:
                    this.fire = false;
                    break;
            }
        };
        Input.LeftButtonDown = false;
        Input.fire = false;
        Input.moveBackward = false;
        Input.moveForward = false;
        Input.moveLeft = false;
        Input.moveRight = false;
        Input.enabled = true;
        return Input;
    }());
    managers.Input = Input;
})(managers || (managers = {}));
//# sourceMappingURL=input.js.map