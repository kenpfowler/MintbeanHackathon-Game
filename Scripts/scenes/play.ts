namespace scenes {
  export class Play extends objects.Scene {
    // private instance variable
    private _player: objects.Player;
    private _space: objects.Space;
    private _asteroidNum: number;
    private _asteroids: objects.Asteroid[];
    private _enemy: objects.Enemy;
    private _level1Music: createjs.AbstractSoundInstance;
    private _phaserManager: managers.Phaser;
    private _gamepadManager: managers.GamePad;

    // public properties

    // constructor
    constructor() {
      super();

      this.Start();
    }

    // private methods

    // public methods

    public Start(): void {
      this._asteroidNum = 3;

      this._space = new objects.Space();

      this._enemy = new objects.Enemy();

      this._player = new objects.Player();
      managers.Game.player = this._player;

      // Instantiates a new Array container of Type objects.Asteroid
      this._asteroids = new Array<objects.Asteroid>();

      // Fill the asteroid Array with asteroids
      for (let count = 0; count < this._asteroidNum; count++) {
        this._asteroids[count] = new objects.Asteroid();
      }

      // play background engine sound when the level starts
      this._level1Music = createjs.Sound.play("level1Music");
      this._level1Music.volume = 0.1;
      this._level1Music.loop = -1; // loop forever

      // instantiates a new phaser manager
      this._phaserManager = new managers.Phaser();
      managers.Game.phaserManager = this._phaserManager;

      this.SetupInput();

      this.Main();
    }

    public SetupInput(): void {
      managers.Input.Start();
      // this.on("mousedown", managers.Input.OnLeftMouseDown);
    }

    public Update(): void {
      managers.Input.gamepad1.Update();
      if (
        managers.Input.gamepad1.Buttons[0] &&
        createjs.Ticker.getTicks() % 7 == 0
      ) {
        managers.Game.phaserManager.FirePhaser(
          managers.Game.player.PhaserSpawn,
          util.Vector2.up()
        );
      }

      this._space.Update();
      this._player.Update();

      // Update Each asteroid in the asteroid Array
      this._asteroids.forEach((asteroid) => {
        asteroid.Update();
        managers.Collision.Check(this._player, asteroid);
      });

      this._enemy.Update();
      managers.Collision.Check(this._player, this._enemy);

      this._phaserManager.Update();
      this._phaserManager.Phasers.forEach((phaser) => {
        managers.Collision.Check(this._player, phaser);
        managers.Collision.Check(phaser, this._enemy);
      });

      managers.Mission.Check();
    }

    public Destroy(): void {
      this.removeAllChildren();
      this._level1Music.stop();
      // this.off("mousedown", managers.Input.OnLeftMouseDown);
    }

    public Reset(): void {}

    public Main(): void {
      // add space background to the scene
      this.addChild(this._space);

      // add enemy to the scene
      this.addChild(this._enemy);

      // adds player to the scene
      this.addChild(this._player);

      // adds phasers to the scene
      this._phaserManager.Phasers.forEach((phaser) => {
        this.addChild(phaser);
      });

      // adds Each asteroid in the asteroid Array to the Scene
      this._asteroids.forEach((asteroid) => {
        this.addChild(asteroid);
      });

      // add ScoreBoard UI to the Scene
      managers.Game.scoreBoard.AddGameUI(this);
    }
  }
}
