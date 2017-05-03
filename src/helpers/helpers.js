export function randomization() {
const seed = Math.floor(Math.random() * 8 + 1);
  switch(seed) {
    case 1:
      return 'a';
    case 2: 
      return 'b';
    case 3:
      return 'c';
    case 4: 
      return 'd';
    case 5:
      return 'e';
    case 6:
      return 'f';
    case 7: 
      return 'g';
    case 8: 
      return 'h';
    default: 
      return 'a';
  }         
}