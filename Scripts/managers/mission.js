var managers;
(function (managers) {
    var Mission = /** @class */ (function () {
        function Mission() {
        }
        // public properties
        // constructor
        // private methods
        // public methods
        Mission.Check = function () {
            // TODO: hardcoded mission objective for now.  Mabye scene should pass objective to the Mission manager?
            if (this.enemiesDestroyed >= this.mission1Objective) {
                managers.Game.currentState = config.Scene.OVER;
                if (managers.Game.scoreBoard.TotalDestroyed <=
                    managers.Game.scoreBoard.Destroyed) {
                    managers.Game.scoreBoard.TotalDestroyed =
                        managers.Game.scoreBoard.Destroyed;
                }
            }
        };
        Mission.Reset = function () {
            this.enemiesDestroyed = 0;
        };
        // private instance variables
        Mission.enemiesDestroyed = 0;
        Mission.mission1Objective = 5;
        return Mission;
    }());
    managers.Mission = Mission;
})(managers || (managers = {}));
//# sourceMappingURL=mission.js.map