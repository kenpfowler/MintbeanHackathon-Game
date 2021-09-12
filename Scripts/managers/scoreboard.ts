module managers {
  export class ScoreBoard {
    // private instance variables
    private _destroyed: number;
    private _lives: number;
    private _totalDestroyed: number;

    private _destroyedLabel: objects.Label;
    private _livesLabel: objects.Label;
    private _totalDestroyedLabel: objects.Label;

    // public properties
    get Destroyed(): number {
      return this._destroyed;
    }

    set Destroyed(newValue: number) {
      this._destroyed = newValue;
      this._destroyedLabel.text =
        "Destroyed: " +
        this._destroyed +
        "/" +
        managers.Mission.mission1Objective;
    }

    get Lives(): number {
      return this._lives;
    }

    set Lives(newValue: number) {
      this._lives = newValue;
      this._livesLabel.text = "Lives: " + this._lives;
    }

    get TotalDestroyed(): number {
      return this._totalDestroyed;
    }

    set TotalDestroyed(newValue: number) {
      this._totalDestroyed = newValue;
      this._totalDestroyedLabel.text =
        "Destroyed: " +
        this._totalDestroyed +
        "/" +
        managers.Mission.mission1Objective;
    }

    // constructor

    /**
     * Creates an instance of ScoreBoard.
     * @param {boolean} [isGameOver=false]
     */
    constructor(
      livesNum: number = 5,
      scoreNum: number = 0,
      highScoreNum: number = 0
    ) {
      this.Start();

      this.Lives = livesNum;
      this.Destroyed = scoreNum;
      this.TotalDestroyed = highScoreNum;
    }

    // private methods

    // public methods

    // Initialize Objects
    public Start(): void {
      this._destroyedLabel = new objects.Label(
        "Destroyed: 99999",
        "20px",
        "PressStart2P",
        "#FFFFFF",
        350,
        10,
        false
      );
      this._livesLabel = new objects.Label(
        "Lives: 99",
        "20px",
        "PressStart2P",
        "#FFFFFF",
        20,
        10,
        false
      );
      this._totalDestroyedLabel = new objects.Label(
        "Destroyed: 999999",
        "30px",
        "PressStart2P",
        "#FFFFFF",
        245,
        140,
        true
      );
    }

    public AddGameUI(currentScene: objects.Scene): void {
      currentScene.addChild(this._livesLabel);
      currentScene.addChild(this._destroyedLabel);
    }

    public AddTotalDestroyedLabel(currentScene: objects.Scene): void {
      currentScene.addChild(this._totalDestroyedLabel);
    }

    public Reset(livesNum: number = 5, scoreNum: number = 0): void {
      this.Lives = livesNum;
      this.Destroyed = scoreNum;
    }
  }
}
