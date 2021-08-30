module managers {
  export class Mission {
    // private instance variables
    public static enemiesDestroyed: number = 0;
    public static mission1Objective: number = 5;

    // public properties

    // constructor

    // private methods

    // public methods
    public static Check(): void {
      // TODO: hardcoded mission objective for now.  Mabye scene should pass objective to the Mission manager?
      if (this.enemiesDestroyed >= this.mission1Objective) {
        managers.Game.currentState = config.Scene.OVER;
      }
    }

    public static Reset(): void {
      this.enemiesDestroyed = 0;
    }

    // Initialize Objects
  }
}
