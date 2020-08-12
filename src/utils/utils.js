function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // Максимум и минимум включаются
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getRandomIntInclusive };
