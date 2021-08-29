//IIFE - Immediately Invoked Function Expression
(function () {
    // game variables
    var canvas;
    var stage;
    var assetManager;
    var currentScene;
    var currentState;
    var scoreBoard;
    var textureMap;
    var assetManifest = [
        { id: "space", src: "./Assets/images/space.png" },
        { id: "ship", src: "./Assets/images/greenShip.gif" },
        { id: "textureMap", src: "./Assets/sprites/texturemap.png" },
        {
            id: "level1Music",
            src: "./Assets/audio/music/assets_music_02_Here_Comes_the_8-bit_Empire.mp3",
        },
        {
            id: "explosionSound",
            src: "./Assets/audio/soundfx/assets_audio_sfx_explosion.ogg",
        },
        {
            id: "firePhaser",
            src: "./Assets/audio/soundfx/assets_audio_sfx_firePhaser.wav",
        },
    ];
    function Init() {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManager = assetManager; // creates a reference to the global assetManager
        assetManager.installPlugin(createjs.Sound); // enable sound preloading
        assetManager.loadManifest(assetManifest); // preloads all assets listed in the manifest
        assetManager.on("complete", Start); // call Start when assets are finished loading
    }
    function Start() {
        console.log("%c Game Started...", "color: blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage; // passing a reference to the stage globally
        // stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);
        var textureData = {
            images: [assetManager.getResult("textureMap")],
            frames: [
                [1, 1, 150, 50, 0, 0, 0],
                [1, 53, 150, 50, 0, 0, 0],
                [153, 1, 65, 67, 0, -4, -3],
                [1, 105, 65, 67, 0, -5, -3],
                [220, 1, 67, 64, 0, -3, -5],
                [1, 174, 65, 66, 0, -3, -4],
                [68, 105, 67, 64, 0, -3, -4],
                [289, 1, 67, 64, 0, -3, -4],
                [68, 171, 64, 66, 0, -4, -3],
                [358, 1, 66, 64, 0, -3, -5],
                [426, 1, 65, 64, 0, -4, -2],
                [493, 1, 65, 65, 0, -4, -2],
                [153, 70, 65, 64, 0, -4, -6],
                [220, 67, 63, 67, 0, -3, -3],
                [285, 67, 63, 67, 0, -5, -3],
                [350, 67, 63, 66, 0, -4, -4],
                [415, 67, 64, 65, 0, -6, -4],
                [481, 68, 66, 63, 0, -3, -6],
                [549, 68, 64, 64, 0, -6, -4],
                [137, 136, 65, 63, 0, -5, -4],
                [204, 136, 65, 63, 0, -4, -3],
                [560, 1, 41, 40, 0, -3, 0],
                [603, 1, 10, 40, 0, -19, 0],
                [271, 136, 40, 40, 0, -4, 0],
                [560, 43, 26, 23, 0, -3, -5],
                [313, 136, 39, 40, 0, -4, 0],
                [588, 43, 24, 23, 0, -4, -4],
                [354, 135, 32, 40, 0, -7, 0],
                [134, 201, 32, 40, 0, -8, 0],
                [388, 135, 24, 40, 0, -12, 0],
                [168, 201, 32, 32, 0, 0, 0],
                [202, 201, 32, 32, 0, 0, 0],
                [236, 201, 32, 32, 0, 0, 0],
                [271, 178, 32, 32, 0, 0, 0],
                [305, 178, 32, 32, 0, 0, 0],
                [270, 212, 32, 32, 0, 0, 0],
                [304, 212, 32, 32, 0, 0, 0],
                [339, 178, 23, 40, 0, -12, 0],
                [364, 177, 32, 32, 0, 0, 0],
                [338, 220, 27, 28, 0, -3, -1],
                [367, 211, 32, 32, 0, 0, 0],
                [398, 177, 32, 32, 0, 0, 0],
                [401, 211, 32, 32, 0, 0, 0],
                [414, 135, 15, 40, 0, -16, 0],
                [431, 134, 32, 32, 0, 0, 0],
                [432, 168, 32, 32, 0, 0, 0],
                [435, 202, 32, 32, 0, 0, 0],
                [465, 134, 32, 32, 0, 0, 0],
                [466, 168, 32, 32, 0, 0, 0],
                [499, 133, 32, 32, 0, 0, 0],
                [500, 167, 32, 32, 0, 0, 0],
                [469, 202, 32, 32, 0, 0, 0],
                [503, 201, 32, 32, 0, 0, 0],
                [533, 134, 25, 26, 0, -4, -3],
                [560, 134, 26, 24, 0, -3, -4],
                [588, 134, 25, 24, 0, -4, -5],
                [534, 162, 24, 25, 0, -4, -3],
                [560, 160, 26, 24, 0, -3, -5],
                [588, 160, 24, 25, 0, -3, -3],
                [537, 189, 15, 40, 0, -17, 0],
                [554, 189, 21, 23, 0, -5, -5],
                [554, 214, 22, 22, 0, -5, -5],
                [577, 187, 20, 23, 0, -5, -5],
                [435, 236, 6, 14, 0, 0, 0],
                [443, 236, 6, 14, 0, 0, 0],
                [451, 236, 6, 14, 0, 0, 0],
                [459, 236, 6, 14, 0, 0, 0],
                [467, 236, 6, 14, 0, 0, 0],
                [475, 236, 6, 14, 0, 0, 0],
                [483, 236, 6, 14, 0, 0, 0],
                [491, 236, 6, 14, 0, 0, 0],
            ],
            animations: {
                resetButton: { frames: [0] },
                startButton: { frames: [1] },
                asteroid: {
                    frames: [
                        15, 8, 3, 16, 19, 20, 6, 9, 17, 7, 10, 11, 4, 12, 5, 13, 2, 18, 14,
                    ],
                },
                coin: { frames: [25, 27, 37, 43, 22, 59, 29, 28, 23, 21] },
                explosion: { frames: [61, 60, 55, 54, 57, 26, 53, 56, 58, 24, 62, 39] },
                enemy: { frames: [30, 31, 32, 33, 34, 35, 36, 38, 40, 41] },
                ship: { frames: [42, 44, 45, 46, 47, 48, 49, 50, 51, 52] },
                phaser: { frames: [63, 64, 65, 66, 67, 68, 69, 70] },
            },
        };
        // setup global spritesheet
        textureMap = new createjs.SpriteSheet(textureData);
        managers.Game.textureMap = textureMap;
        // setup global scoreboard and UI
        scoreBoard = new managers.ScoreBoard();
        managers.Game.scoreBoard = scoreBoard;
        // setup initial scene
        currentState = config.Scene.START;
        managers.Game.currentState = currentState;
        Main();
    }
    // this is the main game loop
    function Update() {
        currentScene.Update();
        if (currentState != managers.Game.currentState) {
            currentState = managers.Game.currentState;
            Main();
        }
        stage.update();
    }
    function Main() {
        // clean up current scene
        if (currentScene) {
            currentScene.Destroy();
            stage.removeAllChildren();
        }
        switch (currentState) {
            case config.Scene.START:
                currentScene = new scenes.Start();
                break;
            case config.Scene.PLAY:
                currentScene = new scenes.Play();
                break;
            case config.Scene.OVER:
                currentScene = new scenes.Over();
                break;
        }
        managers.Game.currentScene = currentScene;
        stage.addChild(currentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map