import  { useState } from "react";

const App = () => {
  const [showLove, setShowLove] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: "80%", left: "0%" });

  const moveNoButton = () => {
    const randomTop = Math.random() * 110 + 10; // Random position between 10% and 90%
    const randomLeft = Math.random() * 180 + 10; // Random position between 10% and 90%
    setNoButtonPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  const handleYesClick = () => {
    setShowLove(true);
  };

  const handleNoClick = () => {
    moveNoButton();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-400 via-red-300 to-yellow-200 relative font-sans">
      {/* Cute Teddy */}
      <div className="mb-6 animate-bounce">
        <img
          src="https://emojicdn.elk.sh/🧸"
          alt="Cute Teddy"
          className="w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48"
        />
      </div>

      {/* Question */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white shadow-md">
        Will You Be My Valentine? 💖
      </h1>

      {/* Buttons */}
      <div className="mt-8 relative flex items-center justify-center gap-6">
        {/* Yes Button */}
        <button
          className="bg-gradient-to-r from-green-400 to-green-600 text-white text-sm sm:text-base lg:text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
          onClick={handleYesClick}
        >
          Yes 💕
        </button>

        {/* No Button */}
        <button
          className="bg-gradient-to-r from-red-400 to-red-600 text-white text-sm sm:text-base lg:text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out absolute"
          style={{
            top: noButtonPosition.top,
            left: noButtonPosition.left,
            transform: "translate(-80%, 50%)",
          }}
          onClick={handleNoClick}
        >
          No 😅
        </button>
      </div>

      {/* Love Pop-Up */}
      {showLove && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-gradient-to-br from-pink-300 via-red-200 to-yellow-200 p-8 sm:p-12 rounded-xl shadow-2xl text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-red-600 font-extrabold animate-pulse">
              I ❤️ You!
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
