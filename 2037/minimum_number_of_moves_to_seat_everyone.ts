export function minMovesToSeat(seats: number[], students: number[]): number {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  return seats.reduce((sum, seat, i) => sum + Math.abs(seat - students[i]), 0);
}
