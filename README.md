---
# Catch the Grimace Shake

A simple game built with Phaser where the player catches falling Grimace Shakes to gain points while avoiding dangers. The game includes multiple levels, pause and restart functionality, and sound effects for catching shakes and hitting dangers.

## Features
- Player movement with arrow keys
- Falling Grimace Shakes to catch for points
- Increasing levels and difficulty
- Dangers to avoid
- Sound effects for catching shakes and hitting dangers
- Pause and restart functionality
- Game over and winner messages

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 10 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/catch-the-grimace-shake.git
   cd catch-the-grimace-shake
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the game:
   ```bash
   npm start
   ```

   This will start a local server and open the game in your default browser.

## Project Structure

```
catch-the-grimace-shake/
├── assets/
│   ├── background.png
│   ├── grimaceShake.png
│   ├── danger.png
│   ├── player.png
│   ├── catch.mp3
│   └── hit.mp3
├── src/
│   └── main.js
├── index.html
├── package.json
└── node_modules/
```

### Assets
- `background.png`: Background image of the game.
- `grimaceShake.png`: Image of the Grimace Shake.
- `danger.png`: Image of the danger object.
- `player.png`: Sprite sheet for the player.
- `catch.mp3`: Sound effect for catching a Grimace Shake.
- `hit.mp3`: Sound effect for hitting a danger.

### Source Code
- `main.js`: Main JavaScript file containing the game logic.

### HTML
- `index.html`: HTML file to load the game.

### Dependencies
- `phaser`: Phaser game framework.

## Game Controls
- **Left Arrow**: Move left
- **Right Arrow**: Move right
- **Pause Button**: Pause the game
- **Restart Button**: Restart the game

## Game Play
1. Use the arrow keys to move the player left or right.
2. Catch the falling Grimace Shakes to gain points.
3. Avoid the dangers to prevent losing the game.
4. Gain 100 points to win the game.
5. The game gets progressively harder with each level.

## Sound Effects
- `catch.mp3`: Played when a Grimace Shake is caught.
- `hit.mp3`: Played when the player hits a danger.

## Winning and Losing
- **Winning**: Reach a score of 100 points to win the game and see the "Winner" message.
- **Losing**: Hit a danger to lose the game and see the "Game Over" message.

## Development

### Adding New Features
1. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```

2. Implement your feature and commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```

3. Push your branch to the repository:
   ```bash
   git push origin feature-name
   ```

4. Open a pull request to merge your changes into the main branch.


## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

