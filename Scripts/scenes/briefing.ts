module scenes {
  export class Briefing extends objects.Scene {
    // private instance variable
    private _missionLabel: objects.Label;
    private _detailsLabel: objects.Label;
    private _space: objects.Space;
    private _startButton: objects.Button;

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
      this._missionLabel = new objects.Label(
        "MISSION: Send Terra Prime Packing",
        "12px",
        "PressStart2P",
        "#FFFFFF",
        325,
        200,
        true
      );
      this._detailsLabel = new objects.Label(
        "Destroy 5 Terra Prime gunships",
        "10px",
        "PressStart2P",
        "#FFFFFF",
        325,
        240,
        true
      );

      this._startButton = new objects.Button("startButton", 320, 360, true);

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

      this.addChild(this._missionLabel);

      this.addChild(this._detailsLabel);

      this.addChild(this._startButton);

      this._startButton.on("click", () => {
        managers.Game.currentState = config.Scene.PLAY;
      });
    }
  }
}
