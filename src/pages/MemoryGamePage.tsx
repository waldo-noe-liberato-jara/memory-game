//COMPONENTS
import MemoryCards from "../components/MemoryCards";
import MemoryLevel from "../components/MemoryLevel";
import MemoryPlayedTime from "../components/MemoryPlayedTime";
import MemoryReset from "../components/MemoryReset";
import MemoryTimer from "../components/MemoryTimer";
import MemoryTurn from "../components/MemoryTurn";
import Modal from "../components/modal/Modal";
import { useMemoryGame } from "../hooks/useMemoryGame";

function MemoryGamePage() {
  const {
    cards,
    level,
    seconds,
    minutes,
    totalMilliseconds,
    turn,
    gameOver,
    timeIsOver,
    showModal,
    handleReset,
    handleSelectCard,
    handleSelectLevel,
    handleCloseModal,
  } = useMemoryGame();

  const titleModal = gameOver
    ? "¡Felicidades!"
    : timeIsOver
    ? "Se acabó el tiempo"
    : "";
  const buttonModal = gameOver
    ? "Volver a jugar"
    : timeIsOver
    ? "Volver a intentar"
    : "";

  return (
    <div className="min-h-screen flex flex-col items-center gap-5 px-4 py-6">
      <div className="w-full max-w-125 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Memory Game</h1>
        <MemoryReset onReset={handleReset} />
      </div>

      <div className="w-full max-w-125 flex justify-between items-center">
        <MemoryTimer seconds={seconds} minutes={minutes} />
        <MemoryTurn turn={turn} />
      </div>

      <MemoryCards
        cards={cards}
        level={level}
        onSelectCard={handleSelectCard}
      />
      <Modal show={showModal} onClose={handleCloseModal}>
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-bold text-center">{titleModal}</p>

          <div className="w-full flex gap-2">
            <div className="flex-1 flex flex-col justify-center items-center bg-black rounded-lg py-8">
              <p className="text-base text-white">Time</p>
              <MemoryPlayedTime
                milliseconds={level.duration - totalMilliseconds}
              />
            </div>

            <div className="flex-1 flex flex-col justify-center items-center bg-black rounded-lg py-8">
              <p className="text-base text-white">Moves</p>
              <p className="font-inter text-base text-white font-medium">
                {turn}
              </p>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="w-full bg-black rounded-lg px-2 py-1 cursor-pointer"
          >
            <span className="text-base text-white">{buttonModal}</span>
          </button>
        </div>
      </Modal>
      <MemoryLevel onSelectLevel={handleSelectLevel} />
    </div>
  );
}

export default MemoryGamePage;
