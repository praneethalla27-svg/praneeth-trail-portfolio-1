import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const notes = [
  {
    id: 1,
    x: 150,
    y: 100,
    rotate: -8,
    color: "bg-[#FFE65C]",
    title: "A LITTLE CHAOS",
    description: "Ideas are everywhere. That's the point.",
  },
  {
    id: 2,
    x: 550,
    y: 180,
    rotate: 6,
    color: "bg-[#365CFF] text-white",
    title: "EXPERIMENT",
    description: "Trying things just to see what happens.",
  },
  {
    id: 3,
    x: 1100,
    y: 100,
    rotate: -5,
    color: "bg-[#FF82AD]",
    title: "CREATIVITY",
    description: "Think outside the box. Then break the box.",
  },
  {
    id: 4,
    x: 350,
    y: 600,
    rotate: 5,
    color: "bg-[#171717] text-[#FFE65C]",
    title: "BUILD. BREAK. REPEAT.",
    description: "The best ideas start with curiosity.",
  },
];

const games = [
  {
    id: "click",
    x: 800,
    y: 400,
    emoji: "🎯",
    title: "CLICK RUSH",
    description: "How fast are your fingers?",
    color: "bg-[#FFE65C]",
  },
  {
    id: "rps",
    x: 1400,
    y: 150,
    emoji: "✊",
    title: "ROCK PAPER SCISSORS",
    description: "Can you beat the computer?",
    color: "bg-[#FF82AD]",
  },
  {
    id: "memory",
    x: 1500,
    y: 700,
    emoji: "🧠",
    title: "MEMORY MATCH",
    description: "Test your memory skills.",
    color: "bg-[#365CFF] text-white",
  },
];

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

const Play = () => {
  const [entered, setEntered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [activeGame, setActiveGame] = useState(null);

  const dragRef = useRef(null);

  // Click Rush
  const [clickScore, setClickScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [clickRunning, setClickRunning] = useState(false);
  const [targetPosition, setTargetPosition] = useState({
    x: 45,
    y: 45,
  });

  // Rock Paper Scissors
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [rpsResult, setRpsResult] = useState("");

  // Memory Match
  const [memoryCards, setMemoryCards] = useState(() =>
    shuffle([
      "🍕",
      "🚀",
      "🎮",
      "🐱",
      "🔥",
      "⚡",
      "🍕",
      "🚀",
      "🎮",
      "🐱",
      "🔥",
      "⚡",
    ]),
  );
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [memoryLocked, setMemoryLocked] = useState(false);

  // Click Rush timer
  useEffect(() => {
    if (!clickRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((time) => {
        if (time <= 1) {
          setClickRunning(false);
          return 0;
        }

        return time - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [clickRunning]);

  const startClickRush = () => {
    setClickScore(0);
    setTimeLeft(15);
    setTargetPosition({ x: 45, y: 45 });
    setClickRunning(true);
  };

  const hitTarget = () => {
    if (!clickRunning) return;

    setClickScore((score) => score + 1);

    setTargetPosition({
      x: Math.floor(Math.random() * 75) + 10,
      y: Math.floor(Math.random() * 65) + 15,
    });
  };

  // Rock Paper Scissors
  const playRPS = (choice) => {
    const options = ["Rock", "Paper", "Scissors"];
    const computer = options[Math.floor(Math.random() * 3)];

    setPlayerChoice(choice);
    setComputerChoice(computer);

    if (choice === computer) {
      setRpsResult("IT'S A DRAW!");
    } else if (
      (choice === "Rock" && computer === "Scissors") ||
      (choice === "Paper" && computer === "Rock") ||
      (choice === "Scissors" && computer === "Paper")
    ) {
      setRpsResult("YOU WIN! 🎉");
    } else {
      setRpsResult("COMPUTER WINS!");
    }
  };

  // Memory Match
  const resetMemory = () => {
    setMemoryCards(
      shuffle([
        "🍕",
        "🚀",
        "🎮",
        "🐱",
        "🔥",
        "⚡",
        "🍕",
        "🚀",
        "🎮",
        "🐱",
        "🔥",
        "⚡",
      ]),
    );
    setSelectedCards([]);
    setMatchedCards([]);
    setMemoryLocked(false);
  };

  const flipCard = (index) => {
    if (
      memoryLocked ||
      selectedCards.includes(index) ||
      matchedCards.includes(index)
    ) {
      return;
    }

    if (selectedCards.length === 0) {
      setSelectedCards([index]);
      return;
    }

    const firstIndex = selectedCards[0];
    setSelectedCards([firstIndex, index]);
    setMemoryLocked(true);

    if (memoryCards[firstIndex] === memoryCards[index]) {
      setMatchedCards((previous) => [...previous, firstIndex, index]);
      setSelectedCards([]);
      setMemoryLocked(false);
    } else {
      setTimeout(() => {
        setSelectedCards([]);
        setMemoryLocked(false);
      }, 750);
    }
  };

  // Canvas dragging
  const handlePointerDown = (e) => {
    if (e.button !== 0 || activeGame) return;

    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: position.x,
      initialY: position.y,
    };

    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current) return;

    setPosition({
      x: dragRef.current.initialX + e.clientX - dragRef.current.startX,
      y: dragRef.current.initialY + e.clientY - dragRef.current.startY,
    });
  };

  const handlePointerUp = () => {
    dragRef.current = null;
    setIsDragging(false);
  };

  const openGame = (game) => {
    setActiveGame(game);
    setClickRunning(false);
    setClickScore(0);
    setTimeLeft(15);
    setPlayerChoice("");
    setComputerChoice("");
    setRpsResult("");
    resetMemory();
  };

  const closeGame = () => {
    setActiveGame(null);
    setClickRunning(false);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#F4F1E9] text-[#171717]">
      <AnimatePresence mode="wait">
        {!entered ? (
          /* WELCOME SCREEN */
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute left-20 top-20 h-28 w-28 rounded-full border-[3px] border-[#365CFF] max-sm:h-16 max-sm:w-16"
            />

            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-28 right-20 h-24 w-24 border-2 border-[#171717] bg-[#FF82AD]"
            />

            <span className="mb-6 text-center text-sm font-black uppercase tracking-[0.4em] text-[#365CFF]">
              A place for everything random
            </span>

            <h1 className="text-center text-[clamp(3rem,10vw,9rem)] font-black uppercase leading-[0.85] tracking-tighter">
              WELCOME TO
              <br />
              <span className="text-[#365CFF]">MY MADNESS.</span>
            </h1>

            <p className="mt-8 max-w-md text-center font-medium text-[#777777]">
              No rules. No limits. Just games, experiments, creativity and a
              little bit of chaos.
            </p>

            <motion.button
              onClick={() => setEntered(true)}
              whileHover={{ x: -5, y: -5 }}
              whileTap={{ scale: 0.96 }}
              className="mt-12 border-2 border-[#171717] bg-[#FFE65C] px-10 py-5 text-lg font-black uppercase shadow-[6px_6px_0px_#171717]"
            >
              ENTER THE MADNESS ↗
            </motion.button>

            <span className="absolute bottom-8 text-xs font-bold uppercase tracking-widest text-[#777777]">
              Best explored with curiosity
            </span>
          </motion.div>
        ) : (
          /* INFINITE PLAYGROUND */
          <motion.div
            key="playground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 overflow-hidden"
          >
            {/* TOP BAR */}
            <div className="absolute left-0 top-0 z-50 flex w-full items-center justify-between border-b-2 border-[#171717] bg-[#F4F1E9]/90 px-6 py-4 backdrop-blur-md">
              <div>
                <h2 className="text-xl font-black uppercase">
                  MY MADNESS<span className="text-[#365CFF]">.</span>
                </h2>
                <p className="text-[9px] font-bold uppercase tracking-widest text-[#777777]">
                  The infinite playground
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setPosition({ x: 0, y: 0 })}
                  className="border-2 border-[#171717] bg-[#FFE65C] px-4 py-2 text-xs font-black uppercase"
                >
                  Reset view ↺
                </button>

                <button
                  onClick={() => setEntered(false)}
                  className="border-2 border-[#171717] bg-[#365CFF] px-4 py-2 text-xs font-black uppercase text-white"
                >
                  Exit ✕
                </button>
              </div>
            </div>

            {/* CANVAS */}
            <div
              className={`absolute inset-0 overflow-hidden ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              style={{
                touchAction: "none",
                backgroundColor: "#F4F1E9",
                backgroundImage: `
                  linear-gradient(#17171712 1px, transparent 1px),
                  linear-gradient(90deg, #17171712 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
                backgroundPosition: `${position.x}px ${position.y}px`,
              }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              <div
                className="absolute left-0 top-0"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                }}
              >
                {/* FLOATING NOTES */}
                {notes.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    className={`absolute w-64 border-2 border-[#171717] p-6 shadow-[7px_7px_0px_#171717] ${item.color}`}
                    style={{
                      left: item.x,
                      top: item.y,
                      rotate: item.rotate,
                    }}
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">
                      NOTE / 0{item.id}
                    </span>

                    <h3 className="mt-5 text-2xl font-black uppercase leading-tight">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}

                {/* GAME CARDS */}
                {games.map((game) => (
                  <motion.button
                    key={game.id}
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={() => openGame(game)}
                    whileHover={{ scale: 1.08, rotate: 0, y: -8 }}
                    whileTap={{ scale: 0.95 }}
                    className={`absolute flex w-64 flex-col items-start border-2 border-[#171717] p-6 text-left shadow-[8px_8px_0px_#171717] ${game.color}`}
                    style={{
                      left: game.x,
                      top: game.y,
                    }}
                  >
                    <span className="text-5xl">{game.emoji}</span>

                    <h3 className="mt-5 text-2xl font-black uppercase">
                      {game.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold">
                      {game.description}
                    </p>

                    <span className="mt-5 border-t-2 border-current pt-3 text-xs font-black uppercase">
                      PLAY GAME ↗
                    </span>
                  </motion.button>
                ))}

                {/* DECORATIONS */}
                <div className="absolute left-[1250px] top-[100px] h-28 w-28 rounded-full border-[12px] border-[#365CFF]" />

                <div className="absolute left-[100px] top-[850px] h-24 w-24 rotate-12 border-2 border-[#171717] bg-[#FF82AD]" />

                <div className="absolute left-[600px] top-[1050px] rotate-[-8deg] border-2 border-[#171717] bg-[#365CFF] px-8 py-5 text-3xl font-black uppercase text-white shadow-[7px_7px_0px_#171717]">
                  THINK DIFFERENT.
                </div>
              </div>
            </div>

            {/* GAME MODAL */}
            <AnimatePresence>
              {activeGame && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-[100] flex items-center justify-center bg-[#171717]/70 p-4 backdrop-blur-sm"
                  onPointerDown={(e) => e.stopPropagation()}
                >
                  <motion.div
                    initial={{ scale: 0.8, y: 30 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.8, y: 30 }}
                    className="relative w-full max-w-lg border-2 border-[#171717] bg-[#F4F1E9] p-6 shadow-[10px_10px_0px_#171717] sm:p-8"
                  >
                    <button
                      onClick={closeGame}
                      className="absolute right-4 top-4 border-2 border-[#171717] bg-[#FF82AD] px-3 py-1 font-black"
                    >
                      ✕
                    </button>

                    {/* CLICK RUSH */}
                    {activeGame.id === "click" && (
                      <div className="text-center">
                        <span className="text-5xl">🎯</span>
                        <h2 className="mt-3 text-3xl font-black uppercase">
                          CLICK RUSH
                        </h2>
                        <p className="mt-2 text-sm font-semibold text-[#777777]">
                          Hit the target before time runs out!
                        </p>

                        <div className="mt-6 flex justify-between border-2 border-[#171717] bg-[#FFE65C] p-4 font-black">
                          <span>SCORE: {clickScore}</span>
                          <span>TIME: {timeLeft}s</span>
                        </div>

                        <div className="relative mt-5 h-64 overflow-hidden border-2 border-[#171717] bg-white">
                          {clickRunning ? (
                            <button
                              onClick={hitTarget}
                              style={{
                                left: `${targetPosition.x}%`,
                                top: `${targetPosition.y}%`,
                              }}
                              className="absolute -translate-x-1/2 -translate-y-1/2 text-4xl transition-all"
                            >
                              🎯
                            </button>
                          ) : (
                            <div className="flex h-full flex-col items-center justify-center">
                              <h3 className="text-3xl font-black">
                                {timeLeft === 0 ? "TIME'S UP!" : "READY?"}
                              </h3>
                              {timeLeft === 0 && (
                                <p className="mt-2 font-bold">
                                  You scored {clickScore} points!
                                </p>
                              )}
                              <button
                                onClick={startClickRush}
                                className="mt-5 border-2 border-[#171717] bg-[#365CFF] px-7 py-3 font-black uppercase text-white"
                              >
                                {timeLeft === 0 ? "PLAY AGAIN" : "START GAME"}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* ROCK PAPER SCISSORS */}
                    {activeGame.id === "rps" && (
                      <div className="text-center">
                        <span className="text-5xl">✊</span>
                        <h2 className="mt-3 text-3xl font-black uppercase">
                          ROCK PAPER SCISSORS
                        </h2>
                        <p className="mt-2 text-sm font-semibold text-[#777777]">
                          Choose your weapon!
                        </p>

                        <div className="mt-8 flex justify-center gap-3">
                          {[
                            { name: "Rock", emoji: "✊" },
                            { name: "Paper", emoji: "✋" },
                            { name: "Scissors", emoji: "✌️" },
                          ].map((choice) => (
                            <button
                              key={choice.name}
                              onClick={() => playRPS(choice.name)}
                              className="flex h-20 w-20 flex-col items-center justify-center border-2 border-[#171717] bg-[#FFE65C] text-3xl shadow-[3px_3px_0px_#171717] transition-transform hover:-translate-y-1"
                            >
                              {choice.emoji}
                              <span className="mt-1 text-[9px] font-black uppercase">
                                {choice.name}
                              </span>
                            </button>
                          ))}
                        </div>

                        {rpsResult && (
                          <div className="mt-8 border-2 border-[#171717] bg-[#FF82AD] p-5">
                            <p className="text-2xl font-black">{rpsResult}</p>
                            <p className="mt-3 font-bold">
                              YOU: {playerChoice} vs COMPUTER: {computerChoice}
                            </p>
                            <button
                              onClick={() => {
                                setPlayerChoice("");
                                setComputerChoice("");
                                setRpsResult("");
                              }}
                              className="mt-4 bg-[#171717] px-5 py-2 font-black uppercase text-white"
                            >
                              PLAY AGAIN
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* MEMORY MATCH */}
                    {activeGame.id === "memory" && (
                      <div className="text-center">
                        <span className="text-5xl">🧠</span>
                        <h2 className="mt-3 text-3xl font-black uppercase">
                          MEMORY MATCH
                        </h2>
                        <p className="mt-2 text-sm font-semibold text-[#777777]">
                          Find all 6 matching pairs.
                        </p>

                        <div className="mx-auto mt-6 grid max-w-xs grid-cols-4 gap-2">
                          {memoryCards.map((card, index) => {
                            const revealed =
                              selectedCards.includes(index) ||
                              matchedCards.includes(index);

                            return (
                              <button
                                key={index}
                                onClick={() => flipCard(index)}
                                className={`flex aspect-square items-center justify-center border-2 border-[#171717] text-2xl font-black transition-colors ${
                                  revealed
                                    ? "bg-[#FFE65C]"
                                    : "bg-[#365CFF] text-white hover:bg-[#FF82AD]"
                                }`}
                              >
                                {revealed ? card : "?"}
                              </button>
                            );
                          })}
                        </div>

                        <p className="mt-5 font-black uppercase">
                          PAIRS: {matchedCards.length / 2} / 6
                        </p>

                        {matchedCards.length === 12 && (
                          <p className="mt-3 text-xl font-black text-[#365CFF]">
                            YOU DID IT! 🎉
                          </p>
                        )}

                        <button
                          onClick={resetMemory}
                          className="mt-4 border-2 border-[#171717] bg-[#FF82AD] px-6 py-2 font-black uppercase"
                        >
                          RESTART ↻
                        </button>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* BOTTOM HELPER */}
            {!activeGame && (
              <div className="pointer-events-none absolute bottom-5 left-1/2 z-40 -translate-x-1/2 whitespace-nowrap border-2 border-[#171717] bg-[#FFE65C] px-5 py-3 text-[10px] font-black uppercase tracking-widest shadow-[4px_4px_0px_#171717]">
                ↔ Drag anywhere to explore ↕
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Play;
