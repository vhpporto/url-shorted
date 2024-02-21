const MIN_LENGTH = 5;
const MAX_LENGTH = 10;
export default function generateUrlShorted() {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < getRandomSize()) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
}

function getRandomSize() {
  return Math.floor(Math.random() * (MAX_LENGTH - MIN_LENGTH + 1) + MIN_LENGTH);
}
