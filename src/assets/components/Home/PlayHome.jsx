import React, { useState, useEffect, useRef } from "react";
import Title from "../common/Title";
import arrow from "../../images/arrow.svg";
import { motion } from "motion/react";

const GRID_WIDTH = 16;
const GRID_HEIGHT = 12;

const initialSnake = [
  { x: 5, y: 5 },
  { x: 4, y: 5 },
  { x: 3, y: 5 },
];

const randomFood = (snake) => {
  let position;

  do {
    position = {
      x: Math.floor(Math.random() * GRID_WIDTH),
      y: Math.floor(Math.random() * GRID_HEIGHT),
    };
  } while (
    snake.some(
      (segment) => segment.x === position.x && segment.y === position.y,
    )
  );

  return position;
};

const PlayHome = () => {
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState({ x: 10, y: 5 });
  const [score, setScore] = useState(0);
  const [direction, setDirection] = useState({ x: 1, y: 0 });

  const directionRef = useRef(direction);

  const startGame = () => {
    setSnake(initialSnake);
    setFood({ x: 10, y: 5 });
    setScore(0);

    const initialDirection = { x: 1, y: 0 };
    setDirection(initialDirection);
    directionRef.current = initialDirection;

    setGameOver(false);
    setStarted(true);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      const keys = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
        w: { x: 0, y: -1 },
        s: { x: 0, y: 1 },
        a: { x: -1, y: 0 },
        d: { x: 1, y: 0 },
      };

      const newDirection = keys[e.key] || keys[e.key.toLowerCase()];

      if (!newDirection || !started || gameOver) return;

      e.preventDefault();

      const current = directionRef.current;

      // Prevent reversing into yourself
      if (
        newDirection.x + current.x === 0 &&
        newDirection.y + current.y === 0
      ) {
        return;
      }

      directionRef.current = newDirection;
      setDirection(newDirection);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [started, gameOver]);

  // Game loop
  useEffect(() => {
    if (!started || gameOver) return;

    const interval = setInterval(() => {
      setSnake((currentSnake) => {
        const currentDirection = directionRef.current;

        const head = {
          x: currentSnake[0].x + currentDirection.x,
          y: currentSnake[0].y + currentDirection.y,
        };

        const eating = head.x === food.x && head.y === food.y;

        const body = eating ? currentSnake : currentSnake.slice(0, -1);

        const hitWall =
          head.x < 0 ||
          head.x >= GRID_WIDTH ||
          head.y < 0 ||
          head.y >= GRID_HEIGHT;

        const hitSelf = body.some(
          (segment) => segment.x === head.x && segment.y === head.y,
        );

        if (hitWall || hitSelf) {
          setGameOver(true);
          return currentSnake;
        }

        const newSnake = [head, ...currentSnake];

        if (eating) {
          setScore((previous) => previous + 10);
          setFood(randomFood(newSnake));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [started, gameOver, food]);

  return (
    <div>
      <Title name="play" />

      <div
        id="container"
        className="w-full min-h-[600px] flex border-y-2 border-[#171717]"
      >
        {/* LEFT CONTAINER */}
        <div className="w-1/2 min-h-full bg-[#365CFF] text-[#F4F1E9] p-3 font-space flex flex-col relative overflow-hidden">
          <div className="absolute top-5 right-5 w-20 h-20 rounded-full bg-[#FFE65C] border-2 border-[#171717]" />

          <h1 className="text-9xl w-70 font-black uppercase leading-[0.85] tracking-tight">
            FUN STUFF <span className="text-[#FFE65C]">HERE!!</span>
          </h1>

          <motion.div
            whileHover={{
              color: "#FFE65C",
              x: 8,
            }}
            className="absolute bottom-30 right-20 flex gap-3 max-w-fit px-5 py-1 font-bold cursor-pointer"
          >
            <button>ENTER PLAYAREA</button>
            <img className="invert rotate-135" src={arrow} alt="Arrow" />
          </motion.div>
        </div>

        {/* RIGHT CONTAINER - SNAKE GAME */}
        <div className="w-1/2 min-h-full bg-[#FFE65C] relative overflow-hidden flex items-center justify-center border-l-2 border-[#171717] p-5">
          {!started ? (
            /* GAME START SCREEN */
            <motion.button
              onClick={startGame}
              whileHover={{ scale: 1.05, rotate: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-64 h-64 bg-[#FF82AD] border-2 border-[#171717] shadow-[10px_10px_0px_#171717] rotate-[-8deg] flex items-center justify-center cursor-pointer"
            >
              <span className="text-5xl font-black text-[#171717] uppercase text-center leading-none">
                Let's
                <br />
                Play!
                <span className="block text-sm mt-4 tracking-widest">
                  CLICK TO START →
                </span>
              </span>
            </motion.button>
          ) : (
            /* GAME SCREEN */
            <div className="w-full max-w-[500px] flex flex-col items-center">
              {/* Score */}
              <div className="w-full flex items-center justify-between mb-4">
                <h2 className="text-2xl font-black uppercase text-[#171717]">
                  Snake Game
                </h2>

                <div className="bg-[#171717] text-[#FFE65C] px-4 py-2 font-black">
                  SCORE: {score}
                </div>
              </div>

              {/* Game Board */}
              <div
                className="relative w-full border-2 border-[#171717] bg-[#F4F1E9] shadow-[6px_6px_0px_#171717]"
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${GRID_WIDTH}, minmax(0, 1fr))`,
                  gridTemplateRows: `repeat(${GRID_HEIGHT}, minmax(0, 1fr))`,
                  aspectRatio: `${GRID_WIDTH} / ${GRID_HEIGHT}`,
                }}
              >
                {Array.from(
                  { length: GRID_WIDTH * GRID_HEIGHT },
                  (_, index) => {
                    const x = index % GRID_WIDTH;
                    const y = Math.floor(index / GRID_WIDTH);

                    const isSnake = snake.some(
                      (segment) => segment.x === x && segment.y === y,
                    );

                    const isHead = snake[0].x === x && snake[0].y === y;

                    const isFood = food.x === x && food.y === y;

                    return (
                      <div
                        key={index}
                        className={`
                          border-[0.5px] border-[#171717]/10
                          ${isSnake ? "bg-[#365CFF]" : ""}
                          ${isHead ? "bg-[#171717]" : ""}
                          ${isFood ? "bg-[#FF82AD] rounded-full scale-75" : ""}
                        `}
                      />
                    );
                  },
                )}

                {/* Game Over Overlay */}
                {gameOver && (
                  <div className="absolute inset-0 bg-[#171717]/90 flex flex-col items-center justify-center text-center p-4">
                    <h2 className="text-4xl font-black text-[#FFE65C]">
                      GAME OVER!
                    </h2>

                    <p className="text-[#F4F1E9] font-bold mt-2">
                      FINAL SCORE: {score}
                    </p>

                    <button
                      onClick={startGame}
                      className="mt-5 px-6 py-3 bg-[#FF82AD] border-2 border-[#F4F1E9] text-[#171717] font-black uppercase hover:bg-[#FFE65C] transition-colors"
                    >
                      Play Again ↻
                    </button>
                  </div>
                )}
              </div>

              {/* Controls */}
              <p className="mt-5 text-xs font-bold uppercase text-[#171717] text-center">
                Use ↑ ↓ ← → or WASD to move
              </p>

              <button
                onClick={startGame}
                className="mt-3 text-xs font-black uppercase underline text-[#171717]"
              >
                Restart Game
              </button>
            </div>
          )}

          <span className="absolute bottom-5 right-5 text-xs font-bold uppercase tracking-widest text-[#171717]">
            Explore • Experiment • Enjoy
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayHome;
