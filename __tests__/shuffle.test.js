const { Type } = require("selenium-webdriver/lib/logging");
const shuffle = require("../src/shuffle");
let testData = [1,2,3,4]

describe("shuffle should...", () => {
  test('Returned array length should equal given array length', () => {
    let shuffledArray = shuffle(testData)
    expect(shuffledArray).toHaveLength(testData.length)
  })
  test('Returned object is an array', () => {
    let shuffledArray = shuffle(testData)
    expect(Array.isArray(shuffledArray)).toBe(true)
  })
});
