const islandCount = require("./islandCount");

test("[0,1,0] to return 1", () => {
  expect(islandCount([0, 1, 0])).toBe(1);
});
