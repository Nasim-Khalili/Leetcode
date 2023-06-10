var nextGreatestLetter = function (letters, target) {
   for (letter of letters) {
    if (letter > target) {
        return letter;
    }
   }
   return letters[0];

}
var nextGreatestLetter = function (letters, target) {
   const indexOffFirstLargest = letters.findIndex((letter) => letter > target);
   return letters(indexOffFirstLargest === -1 ? 0 : indexOffFirstLargest)
};