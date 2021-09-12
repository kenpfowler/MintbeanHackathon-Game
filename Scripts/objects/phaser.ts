module objects {
  export class Phaser extends objects.SpriteGameObject {
    // private instance variable
    private _speed: number;
    private _direction: util.Vector2;
    private _isInPlay: boolean;
    private _velocity: util.Vector2;

    // public properties
    get Direction(): util.Vector2 {
      return this._direction;
    }

    set Direction(newDirection: util.Vector2) {
      this._direction = newDirection;
    }

    get IsInPlay(): boolean {
      return this._isInPlay;
    }

    set IsInPlay(newState: boolean) {
      this._isInPlay = newState;
      if (!this._isInPlay) {
        this.Reset();
      }
      this._velocity = util.Vector2.Mulitply(this.Direction, this._speed);
    }

    // Constructor

    constructor() {
      super("phaser");
      this.Start();
    }

    // private methods
    private _move(): void {
      this._updatePosition();
      this.Position = util.Vector2.Add(this.Position, this._velocity);
      this.x = this.Position.x;
      this.y = this.Position.y;
    }

    private _checkBounds(): any {
      if (this.y > 480 + this.HalfHeight || this.y < -this.HalfHeight) {
        this.IsInPlay = false;
        this.Reset();
      }
    }

    // public methods

    // reset the phasers position off screen and clear direction
    public Reset(): void {
      this.x = -10000;
      this.y = -10000;
      this._updatePosition();
      this.Direction = util.Vector2.zero();
    }

    // give the phaser a speed and keep it out of play
    public Start(): void {
      this._speed = 15;
      this.IsInPlay = false;
    }

    // if the phaser is in play then cause it to move.  Make sure it doesn't exit the game area.
    public Update(): void {
      if (this.IsInPlay) {
        this._move();
        this._checkBounds();
      }
    }

    public Destroy(): void {}
  }
}
