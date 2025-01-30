import { useState, useEffect } from "react";

const RandomUniqueNumbers = () => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    generateUniqueNumbers();
  }, []);

  const generateUniqueNumbers = () => {
    let arr = Array.from({ length: 30 }, (_, i) => (i-1) + 1); // [1, 2, 3, ..., 25]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
    setNumbers(arr);
  };

  return (
    <div>
      <h2>Unique Random Numbers (1-25)</h2>
      <p>{numbers.join(", ")}</p>
      <button onClick={generateUniqueNumbers}>Generate Again</button>
    </div>
  );
};

export default RandomUniqueNumbers;
