module objects {
  export class Space extends objects.BitmapGameObject {
    // private instance variables
    private verticalSpeed: number;

    // public properties

    // constructor
    constructor() {
      super("space");

      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      if (this.y >= 0) {
        this.Reset();
      }
    }

    private _move(): void {
      this.y += this.verticalSpeed;
    }

    // public methods

    public Reset(): void {
      // TODO: Image resets abruptly because of the background isnt uniform
      // FIXES? Make image longer, find uniform backround, end level at image end instead of resetting.
      this.y = -2720;
    }

    public Start(): void {
      this.Reset();
      this.verticalSpeed = 0.5; // 5 px per frame
    }

    public Update(): void {
      this._move();
      this._checkBounds();
    }

    public Destroy(): void {}
  }
}
