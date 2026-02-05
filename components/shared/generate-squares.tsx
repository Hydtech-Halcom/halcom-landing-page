type Square = [number, number];

interface GenerateSquaresOptions {
  count?: number; // jumlah kotak
  maxX?: number; // grid width
  maxY?: number; // grid height
  minDistance?: number; // jarak minimum antar kotak (opsional)
  seed?: number; // biar konsisten
}

export function generateSquares({ count = 10, maxX = 16, maxY = 16, minDistance = 2, seed = 1 }: GenerateSquaresOptions = {}): Square[] {
  const squares: Square[] = [];
  let s = seed;

  const random = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };

  while (squares.length < count) {
    const x = Math.floor(random() * maxX);
    const y = Math.floor(random() * maxY);

    const isTooClose = squares.some(([sx, sy]) => Math.abs(sx - x) < minDistance && Math.abs(sy - y) < minDistance);

    if (!isTooClose) {
      squares.push([x, y]);
    }
  }

  return squares;
}
