export const changeWord = (word) => {
    let newWord = "";
    const usedChar = new Set();
    while (newWord.length < word.length) {
      const randomIndex = Math.random() * word.length;
      const randomChar = word.charAt(randomIndex);

      if (!usedChar.has(randomChar)) {
        newWord += randomChar;
        usedChar.add(randomChar);
      }
    }

    return newWord;
  };