var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function () {
        // constructor
        /**
         * Creates an instance of ScoreBoard.
         * @param {boolean} [isGameOver=false]
         */
        function ScoreBoard(livesNum, scoreNum, highScoreNum) {
            if (livesNum === void 0) { livesNum = 5; }
            if (scoreNum === void 0) { scoreNum = 0; }
            if (highScoreNum === void 0) { highScoreNum = 0; }
            this.Start();
            this.Lives = livesNum;
            this.Destroyed = scoreNum;
            this.TotalDestroyed = highScoreNum;
        }
        Object.defineProperty(ScoreBoard.prototype, "Destroyed", {
            // public properties
            get: function () {
                return this._destroyed;
            },
            set: function (newValue) {
                this._destroyed = newValue;
                this._destroyedLabel.text =
                    "Destroyed: " +
                        this._destroyed +
                        "/" +
                        managers.Mission.mission1Objective;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Lives", {
            get: function () {
                return this._lives;
            },
            set: function (newValue) {
                this._lives = newValue;
                this._livesLabel.text = "Lives: " + this._lives;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "TotalDestroyed", {
            get: function () {
                return this._totalDestroyed;
            },
            set: function (newValue) {
                this._totalDestroyed = newValue;
                this._totalDestroyedLabel.text =
                    "Destroyed: " +
                        this._totalDestroyed +
                        "/" +
                        managers.Mission.mission1Objective;
            },
            enumerable: false,
            configurable: true
        });
        // private methods
        // public methods
        // Initialize Objects
        ScoreBoard.prototype.Start = function () {
            this._destroyedLabel = new objects.Label("Destroyed: 99999", "20px", "PressStart2P", "#FFFFFF", 350, 10, false);
            this._livesLabel = new objects.Label("Lives: 99", "20px", "PressStart2P", "#FFFFFF", 20, 10, false);
            this._totalDestroyedLabel = new objects.Label("Destroyed: 999999", "30px", "PressStart2P", "#FFFFFF", 245, 140, true);
        };
        ScoreBoard.prototype.AddGameUI = function (currentScene) {
            currentScene.addChild(this._livesLabel);
            currentScene.addChild(this._destroyedLabel);
        };
        ScoreBoard.prototype.AddTotalDestroyedLabel = function (currentScene) {
            currentScene.addChild(this._totalDestroyedLabel);
        };
        ScoreBoard.prototype.Reset = function (livesNum, scoreNum) {
            if (livesNum === void 0) { livesNum = 5; }
            if (scoreNum === void 0) { scoreNum = 0; }
            this.Lives = livesNum;
            this.Destroyed = scoreNum;
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map