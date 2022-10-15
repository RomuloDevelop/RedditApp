const THOUSANDS = 1000;
const MILLIONS = 1000000;

export const addNumberSuffix = (value: number) => {
  if (value > THOUSANDS) {
    return (value / THOUSANDS).toFixed(1) + 'K';
  } else if (value > MILLIONS) {
    return (value / MILLIONS).toFixed(1) + 'M';
  }
  return value;
};
