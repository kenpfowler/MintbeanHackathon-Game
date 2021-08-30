namespace scenes {
  export class Over extends objects.Scene {
    // private instance variable
    private _gameOverLabel: objects.Label;
    private _space: objects.Space;
    private _restartButton: objects.Button;
    private _successLabel: objects.Label;

    // public properties

    // constructor
    constructor() {
      super();

      this.Start();
    }

    // private methods

    // public methods

    public Start(): void {
      this._space = new objects.Space();
      this._gameOverLabel = new objects.Label(
        "Game Over",
        "30px",
        "PressStart2P",
        "#FFFFFF",
        320,
        240,
        true
      );

      this._successLabel = new objects.Label(
        "MISSION COMPLETE!",
        "30px",
        "PressStart2P",
        "#FFFFFF",
        320,
        240,
        true
      );

      this._restartButton = new objects.Button("resetButton", 320, 360, true);

      this.Main();
    }

    public Update(): void {
      this._space.Update();
    }

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Reset(): void {}

    public Main(): void {
      // adds ocean to the stage

      this.addChild(this._space);

      if (
        managers.Mission.enemiesDestroyed >=
          managers.Mission.mission1Objective &&
        managers.Game.scoreBoard.Lives != 0
      ) {
        this.addChild(this._successLabel);
      } else {
        this.addChild(this._gameOverLabel);
      }

      this.addChild(this._restartButton);

      this._restartButton.on("click", function () {
        managers.Game.currentState = config.Scene.PLAY;
        managers.Mission.Reset();
        managers.Game.scoreBoard.Reset();
      });

      managers.Game.scoreBoard.AddHighScore(this);
    }
  }
}
