//COMPONENTS
import { ReactNode } from "react";
import MemoryCards from "../components/MemoryCards";
import MemoryLevel from "../components/MemoryLevel";
import MemoryLose from "../components/MemoryLose";
import MemoryReset from "../components/MemoryReset";
import MemoryTimer from "../components/MemoryTimer";
import MemoryTurn from "../components/MemoryTurn";
import MemoryWon from "../components/MemoryWon";
import Modal from "../components/modal/Modal";
import { useMemoryGame } from "../hooks/useMemoryGame";

function MemoryGamePage() {
  const {
    cards,
    level,
    selectedLevel,
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

  const contentModal = (): ReactNode => {
    if (gameOver) {
      return (
        <MemoryWon
          onReset={handleReset}
          millisecondsPlayed={level.duration - totalMilliseconds}
          turn={turn}
        />
      );
    } else if (timeIsOver) {
      return <MemoryLose onReset={handleReset} />;
    }
  };

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
        {contentModal()}
      </Modal>
      <MemoryLevel
        level={level}
        selectedLevel={selectedLevel}
        onSelectLevel={handleSelectLevel}
      />
    </div>
  );
}

export default MemoryGamePage;
