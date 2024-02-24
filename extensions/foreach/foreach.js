
function calculateSquares(numbers) {
  numbers.forEach(number => {
    const sum = number + number;
    console.log(`Sum of ${number} + ${number} = ${sum}`);
  });
}

module.exports = {
  calculateSquares
};
