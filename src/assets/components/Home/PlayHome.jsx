import React, { useState, useEffect, useRef } from "react";
import Title from "../common/Title";
import arrow from "../../images/arrow.svg";
import { motion } from "motion/react";
import { NavLink, useNavigate } from "react-router-dom";

const GRID_WIDTH = 16;
const GRID_HEIGHT = 12;

const initialSnake = [
  { x: 5, y: 5 },
  { x: 4, y: 5 },
  { x: 3, y: 5 },
];

const initialDirection = { x: 1, y: 0 };

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
  const navigate = useNavigate();

  const directionRef = useRef(initialDirection);

  // Change snake direction
  const changeDirection = (newDirection) => {
    const current = directionRef.current;

    // Prevent reversing into yourself
    if (newDirection.x + current.x === 0 && newDirection.y + current.y === 0) {
      return;
    }

    directionRef.current = newDirection;
  };

  // Start / Restart game
  const startGame = () => {
    setSnake(initialSnake);
    setFood({ x: 10, y: 5 });
    setScore(0);
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
      changeDirection(newDirection);
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
    <div className="w-full overflow-hidden font-space">
      <Title name="play" />

      <div
        id="container"
        className="flex w-full min-h-[600px] flex-col border-y-2 border-[#171717] lg:flex-row"
      >
        {/* LEFT CONTAINER */}
        <div className="relative flex min-h-[420px] w-full flex-col overflow-hidden bg-[#365CFF] p-5 text-[#F4F1E9] sm:min-h-[500px] sm:p-8 lg:min-h-[600px] lg:w-1/2">
          {/* Decorative Circle */}
          <div className="absolute right-5 top-5 h-14 w-14 rounded-full border-2 border-[#171717] bg-[#FFE65C] sm:right-10 sm:top-10 sm:h-20 sm:w-20" />

          <h1 className="relative z-10 max-w-full text-[clamp(3.5rem,10vw,9rem)] font-black uppercase leading-[0.85] tracking-tight">
            FUN STUFF
            <span className="block text-[#FFE65C]">HERE!!</span>
          </h1>

          {/* Game Page Button */}
          <motion.div
            whileHover={{
              color: "#FFE65C",
              x: 8,
            }}
            className="absolute bottom-12 right-5 flex max-w-fit cursor-pointer items-center gap-3 px-3 py-2 font-bold sm:bottom-20 sm:right-10 sm:px-5 lg:bottom-30 lg:right-20"
          >
            <button
              onClick={() => {
                navigate("/play");
                window.scrollTo(0, 0);
              }}
              className="text-xs sm:text-sm lg:text-base"
            >
              ENTER PLAYAREA
            </button>

            <img
              className="h-6 w-6 invert rotate-135 sm:h-8 sm:w-8"
              src={arrow}
              alt="Arrow"
            />
          </motion.div>
        </div>

        {/* RIGHT CONTAINER - SNAKE GAME */}
        <div className="relative flex min-h-[420px] w-full flex-1 items-center justify-center overflow-hidden border-t-2 border-[#171717] bg-[#FFE65C] p-4 sm:min-h-[500px] sm:p-8 lg:min-h-[600px] lg:w-1/2 lg:border-l-2 lg:border-t-0">
          {!started ? (
            /* GAME START SCREEN */
            <motion.button
              onClick={startGame}
              whileHover={{ scale: 1.05, rotate: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex aspect-square w-52 max-w-[80%] items-center justify-center border-2 border-[#171717] bg-[#FF82AD] shadow-[8px_8px_0px_#171717] sm:w-64 sm:shadow-[10px_10px_0px_#171717]"
            >
              <span className="text-4xl font-black uppercase leading-none text-[#171717] sm:text-5xl">
                Let's
                <br />
                Play!
                <span className="mt-4 block text-xs tracking-widest sm:text-sm">
                  CLICK TO START →
                </span>
              </span>
            </motion.button>
          ) : (
            /* GAME SCREEN */
            <div className="flex w-full max-w-[500px] flex-col items-center">
              {/* Score */}
              <div className="mb-4 flex w-full items-center justify-between gap-2">
                <h2 className="text-lg font-black uppercase text-[#171717] sm:text-2xl">
                  Snake Game
                </h2>

                <div className="whitespace-nowrap bg-[#171717] px-3 py-2 text-xs font-black text-[#FFE65C] sm:px-4 sm:text-sm">
                  SCORE: {score}
                </div>
              </div>

              {/* Game Board */}
              <div
                className="relative w-full border-2 border-[#171717] bg-[#F4F1E9] shadow-[5px_5px_0px_#171717] sm:shadow-[6px_6px_0px_#171717]"
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
                          min-w-0 min-h-0 border-[0.5px] border-[#171717]/10
                          ${isSnake ? "bg-[#365CFF]" : ""}
                          ${isHead ? "bg-[#171717]" : ""}
                          ${isFood ? "scale-75 rounded-full bg-[#FF82AD]" : ""}
                        `}
                      />
                    );
                  },
                )}

                {/* Game Over */}
                {gameOver && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#171717]/90 p-3 text-center">
                    <h2 className="text-2xl font-black text-[#FFE65C] sm:text-4xl">
                      GAME OVER!
                    </h2>

                    <p className="mt-2 text-sm font-bold text-[#F4F1E9]">
                      FINAL SCORE: {score}
                    </p>

                    <button
                      onClick={startGame}
                      className="mt-4 border-2 border-[#F4F1E9] bg-[#FF82AD] px-4 py-2 text-xs font-black uppercase text-[#171717] transition-colors hover:bg-[#FFE65C] sm:px-6 sm:py-3 sm:text-sm"
                    >
                      Play Again ↻
                    </button>
                  </div>
                )}
              </div>

              {/* Desktop Instructions */}
              <p className="mt-5 hidden text-center text-xs font-bold uppercase text-[#171717] sm:block">
                Use ↑ ↓ ← → or WASD to move
              </p>

              {/* Mobile Direction Controls */}
              <div className="mt-5 grid grid-cols-3 gap-2 sm:hidden">
                <div />

                <button
                  onClick={() => changeDirection({ x: 0, y: -1 })}
                  disabled={gameOver}
                  className="h-12 w-14 border-2 border-[#171717] bg-[#F4F1E9] text-xl font-black active:bg-[#FF82AD] disabled:opacity-40"
                >
                  ↑
                </button>

                <div />

                <button
                  onClick={() => changeDirection({ x: -1, y: 0 })}
                  disabled={gameOver}
                  className="h-12 w-14 border-2 border-[#171717] bg-[#F4F1E9] text-xl font-black active:bg-[#FF82AD] disabled:opacity-40"
                >
                  ←
                </button>

                <button
                  onClick={() => changeDirection({ x: 0, y: 1 })}
                  disabled={gameOver}
                  className="h-12 w-14 border-2 border-[#171717] bg-[#F4F1E9] text-xl font-black active:bg-[#FF82AD] disabled:opacity-40"
                >
                  ↓
                </button>

                <button
                  onClick={() => changeDirection({ x: 1, y: 0 })}
                  disabled={gameOver}
                  className="h-12 w-14 border-2 border-[#171717] bg-[#F4F1E9] text-xl font-black active:bg-[#FF82AD] disabled:opacity-40"
                >
                  →
                </button>
              </div>

              {/* Restart */}
              <button
                onClick={startGame}
                className="mt-4 text-xs font-black uppercase text-[#171717] underline underline-offset-4"
              >
                Restart Game ↻
              </button>
            </div>
          )}

          <span className="pointer-events-none absolute bottom-3 right-3 text-[9px] font-bold uppercase tracking-widest text-[#171717] sm:bottom-5 sm:right-5 sm:text-xs">
            Explore • Experiment • Enjoy
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayHome;
