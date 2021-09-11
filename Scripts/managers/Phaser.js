var managers;
(function (managers) {
    var Phaser = /** @class */ (function () {
        // constructor
        function Phaser(phaserNum) {
            if (phaserNum === void 0) { phaserNum = 10; }
            this.PhaserNum = phaserNum;
            this.Start();
        }
        Object.defineProperty(Phaser.prototype, "Phasers", {
            // public properties
            get: function () {
                return this._phasers;
            },
            set: function (newPhaserArray) {
                this._phasers = newPhaserArray;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Phaser.prototype, "PhaserNum", {
            get: function () {
                return this._phaserNum;
            },
            set: function (numberOfPhasers) {
                this._phaserNum = numberOfPhasers;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Phaser.prototype, "CurrentPhaser", {
            get: function () {
                return this._currentPhaser;
            },
            set: function (newPhaserPointer) {
                this._currentPhaser = newPhaserPointer;
            },
            enumerable: false,
            configurable: true
        });
        // private methods
        // public methods
        Phaser.prototype.Start = function () {
            // create the phasers container
            this.Phasers = new Array();
            // fill up phaser container
            for (var count = 0; count < this.PhaserNum; count++) {
                this.Phasers[count] = new objects.Phaser();
            }
            // set the current phaser to the first phaser object
            this._currentPhaserIndex = 0;
            this.CurrentPhaser = this.Phasers[this._currentPhaserIndex];
        };
        Phaser.prototype.Update = function () {
            this.Phasers.forEach(function (phaser) {
                phaser.Update();
            });
        };
        Phaser.prototype.FirePhaser = function (spawnPoint, direction) {
            this.CurrentPhaser.Position = spawnPoint;
            this.CurrentPhaser.x = spawnPoint.x;
            this.CurrentPhaser.y = spawnPoint.y;
            this.CurrentPhaser.Direction = direction;
            this.CurrentPhaser.IsInPlay = true;
            this._currentPhaserIndex++;
            if (this._currentPhaserIndex >= this.Phasers.length) {
                this._currentPhaserIndex = 0;
            }
            this.CurrentPhaser = this.Phasers[this._currentPhaserIndex];
            var firePhaser = createjs.Sound.play("firePhaser");
            firePhaser.volume = 0.1;
        };
        return Phaser;
    }());
    managers.Phaser = Phaser;
})(managers || (managers = {}));
//# sourceMappingURL=Phaser.js.map