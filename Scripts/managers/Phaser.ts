module managers {
  export class Phaser {
    // private instance variables
    private _phasers: objects.Phaser[];
    private _phaserNum: number;
    private _currentPhaser: objects.Phaser;
    private _currentPhaserIndex: number;

    // public properties
    get Phasers(): objects.Phaser[] {
      return this._phasers;
    }

    set Phasers(newPhaserArray: objects.Phaser[]) {
      this._phasers = newPhaserArray;
    }

    get PhaserNum(): number {
      return this._phaserNum;
    }

    set PhaserNum(numberOfPhasers: number) {
      this._phaserNum = numberOfPhasers;
    }

    get CurrentPhaser(): objects.Phaser {
      return this._currentPhaser;
    }

    set CurrentPhaser(newPhaserPointer: objects.Phaser) {
      this._currentPhaser = newPhaserPointer;
    }

    // constructor
    constructor(phaserNum: number = 10) {
      this.PhaserNum = phaserNum;

      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      // create the phasers container
      this.Phasers = new Array<objects.Phaser>();

      // fill up phaser container
      for (let count = 0; count < this.PhaserNum; count++) {
        this.Phasers[count] = new objects.Phaser();
      }

      // set the current phaser to the first phaser object
      this._currentPhaserIndex = 0;
      this.CurrentPhaser = this.Phasers[this._currentPhaserIndex];
    }

    public Update(): void {
      this.Phasers.forEach((phaser) => {
        phaser.Update();
      });
    }

    public FirePhaser(spawnPoint: util.Vector2, direction: util.Vector2): void {
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
      let firePhaser = createjs.Sound.play("firePhaser");
      firePhaser.volume = 0.1;
    }
  }
}
