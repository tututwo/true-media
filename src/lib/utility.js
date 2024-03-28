import * as d3 from "d3";
export function getTopNByOpponent(data, column, n) {
  // Group data by opponent
  const groupedData = d3.group(data, (d) => d.opponent);

  // Get top N players with the highest value for the specified column for each opponent
  return Array.from(groupedData, ([opponent, players]) => {
    return {
      opponent,
      topN: players.sort((a, b) => b[column] - a[column]).slice(0, n)
    };
  });
}
