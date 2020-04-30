/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  const container = [];
  for (let i = 0; i < points.length; i++) {
    let distance = points[i][0] * points[i][0] + points[i][1] * points[i][1];
    container.push({ distance: Math.sqrt(distance), points: points[i] });
  }
  container.sort((a, b) => a.distance - b.distance);
  return container.slice(0, K).map(el => el.points);
};

console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1,
  ),
);
