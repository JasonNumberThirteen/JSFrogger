// CANVAS
const GAME_WINDOW_CANVAS_ID = "gameWindow";
const GAME_WINDOW_CANVAS_IMAGE_RENDERING = "pixelated";

// WINDOW
const GAME_WINDOW_SCALE = 3;
const GAME_WINDOW_WIDTH = 256;
const GAME_WINDOW_HEIGHT = 144;
const HALF_OF_GAME_WINDOW_WIDTH = GAME_WINDOW_WIDTH*0.5;
const HALF_OF_GAME_WINDOW_HEIGHT = GAME_WINDOW_HEIGHT*0.5;

// FONT
const GAME_FONT_NAME = "Press Start 2P";
const GAME_FONT_SIZE = 8;

// INPUT KEYS
const KEYDOWN_KEY = "keydown";
const GAME_START_KEY = "enter";
const PLAYER_UP_MOVEMENT_KEY = "w";
const PLAYER_DOWN_MOVEMENT_KEY = "s";
const PLAYER_LEFT_MOVEMENT_KEY = "a";
const PLAYER_RIGHT_MOVEMENT_KEY = "d";

// STRING LITERALS
const TIME_TEXT = "TIME";
const LEVEL_TEXT = "LEVEL";
const CREDITS_TEXT = "© JASON 2025";
const GAME_OVER_TEXT = "GAME OVER";
const START_GAME_TEXT = "START GAME";
const HIGH_SCORE_HEADER_TEXT = "HI-SCORE";
const PLAYER_SCORE_HEADER_TEXT = "1-UP";

// COLOR KEYS
const RED_COLOR = "#f00";
const BLACK_COLOR = "#000";
const ORANGE_COLOR = "#e09000";
const YELLOW_COLOR = "#ff0";
const DARK_BLUE_COLOR = "#004";
const SEA_GREEN_COLOR = "#03fcca";
const BRIGHT_RED_COLOR = "#b53120";
const BRIGHT_BLUE_COLOR = "#155fd9";
const PALE_YELLOW_COLOR = "#ffefaf";

// SPRITE FILENAMES
const FLY_SPRITE_FILENAME = "assets/sprites/single/game/fly.png";
const FIELD_SPRITE_FILENAME = "assets/sprites/single/game/field.png";
const GAME_LOGO_SPRITE_FILENAME = "assets/sprites/single/mainMenu/gameLogo.png";
const SAVED_FROG_SPRITE_FILENAME = "assets/sprites/single/game/savedFrog.png";
const PLAYER_LIFE_SPRITE_FILENAME = "assets/sprites/single/game/playerLife.png";
const MAIN_MENU_CURSOR_SPRITE_FILENAME = "assets/sprites/single/mainMenu/mainMenuCursor.png";

// SPRITE SHEET FILENAMES
const PLAYER_SPRITE_SHEET_FILENAME = "assets/sprites/sheets/game/player.png";
const TURTLE_SPRITE_SHEET_FILENAME = "assets/sprites/sheets/game/turtle.png";
const VEHICLES_SPRITE_SHEET_FILENAME = "assets/sprites/sheets/game/vehicles.png";
const WOODEN_LOG_SPRITE_SHEET_FILENAME = "assets/sprites/sheets/game/woodenLog.png";

// DURATIONS
const FADE_SCREEN_FADE_DURATION = 1;
const MAIN_MENU_CURSOR_MOVEMENT_TIME = 1;
const START_GAME_TEXT_UI_BLINK_DELAY = 1;
const START_GAME_TEXT_UI_BLINK_DELAY_ON_GAME_START = 0.03125;
const CURRENT_LEVEL_TEXT_UI_FADE_START_DELAY = 1;
const CURRENT_LEVEL_TEXT_UI_FADE_DURATION = 0.5;
const GAME_START_DELAY = 1;
const NEXT_SCENE_LOAD_IN_GAME_SCENE_DELAY = 1;
const FLY_APPEARANCE_DURATION = 10;
const FLY_DISAPPEARANCE_DURATION = 15;
const LEVEL_TIME = 60;
const PLAYER_HAZARDOUS_POSITION_CHECK_FREQUENCY = 1/15;
const BONUS_POINTS_TEXT_UI_DISPLAY_DURATION = 3;

// TEXT ALIGNMENT KEYS
const TEXT_ALIGNED_TO_LEFT_KEY = "left";
const TEXT_ALIGNED_TO_RIGHT_KEY = "right";
const TEXT_ALIGNED_TO_CENTER_KEY = "center";

// SCENE NAMES KEYS
const MAIN_MENU_SCENE_NAME_KEY = "MAIN_MENU";
const GAME_SCENE_NAME_KEY = "GAME";

// LOCAL STORAGE VALUES KEYS
const PLAYER_SCORE_VALUE_KEY = "playerScore";
const HIGH_SCORE_VALUE_KEY = "highScore";

// POINTS
const POINTS_FOR_STEP_CLOSER_TO_FIELD_DESTINATIONS = 10;
const POINTS_FOR_REACHING_FIELD_DESTINATION = 200;
const POINTS_FOR_EATING_FLY = 200;

// OBJECTS
const OBJECTS_MOVEMENT_SPEED_UPPER_BOUND = 50;
const OBJECTS_MOVEMENT_SPEED_GROWTH_MULTIPLIER_PER_LEVEL = 0.1;
const OBJECTS_MOVEMENT_SPEED_GROWTH_MULTIPLIER_PER_SAVED_FROG = 0.1;

// PLAYER LIVES SPRITES GROUP PANEL UI
const PLAYER_LIVES_SPRITES_GROUP_PANEL_UI_OFFSET_FROM_EDGES = 4;
const PLAYER_LIVES_SPRITES_GROUP_PANEL_UI_OFFSET_BETWEEN_SPRITES = 4;

// LEVEL TIMER PANEL UI
const LEVEL_TIMER_PANEL_UI_WIDTH = 80;
const LEVEL_TIMER_PANEL_UI_HEIGHT = 8;

// MISCELLANEOUS
const GAME_FPS = 60;
const PIXELS_UNIT = "px";
const EMPTY_STRING = "";
const INITIAL_HIGH_SCORE = 5000;
const PLAYER_INITIAL_LIVES = 3;
const CHANCE_FOR_HIDING_TURTLES_GROUP = 0.75;
const DESTINATION_POSITION_X_THRESHOLD = 2;
const MAIN_MENU_CURSOR_MOVEMENT_AMPLITUDE = 4;
const REMAINING_TIME_PROGRESS_BAR_UI_BORDER_THICKNESS = 1;