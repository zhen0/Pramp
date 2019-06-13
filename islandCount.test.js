const islandCount = require("./islandCount");

test("[[1, 0,1,0]] to return 2", () => {
  expect(islandCount([[1, 0, 1, 0]])).toBe(2);
});

test("[[1,0,1,0],[0,1,1,1],[0,0,1,0]] to return 2", () => {
  expect(islandCount([[1, 0, 1, 0], [0, 1, 1, 1], [0, 0, 1, 0]])).toBe(2);
});

test("[[1, 0,1,0]] to return 2", () => {
  expect(islandCount([[1, 0, 1, 0]])).toBe(2);
});
