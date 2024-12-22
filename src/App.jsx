import  { useState } from "react";

const App = () => {
  const [showLove, setShowLove] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: "80%", left: "0%" });

  const moveNoButton = () => {
    const randomTop = Math.random() * 120 + 40; // Random position between 10% and 90%
    const randomLeft = Math.random() * 130 + 30; // Random position between 10% and 90%
    setNoButtonPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  const handleYesClick = () => {
    setShowLove(true);
  };

  const handleNoClick = () => {
    moveNoButton(); // Move the button to a random position
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100 relative">
      {/* Cute Teddy */}
      <div className="mb-6">
        <img
          src="https://emojicdn.elk.sh/🧸"
          alt="Cute Teddy"
          className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 animate-bounce"
        />
      </div>

      {/* Question */}
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-pink-600">
        Will You Be My Valentine? 💖
      </h1>

      {/* Buttons */}
      <div className="mt-6 relative">
        {/* Yes Button */}
        <button
          className="bg-green-500 text-white text-sm sm:text-base lg:text-lg px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-green-600 transition"
          onClick={handleYesClick}
        >
          Yes 💕
        </button>

        {/* No Button */}
        <button
          className="bg-red-500 text-white text-sm sm:text-base lg:text-lg px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-red-600 transition absolute"
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-pink-500 animate-pulse">
              I ❤️ You!
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
