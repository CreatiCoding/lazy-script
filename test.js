// Copyright 2004-present Facebook. All Rights Reserved.

const lazyScript = require("./lazy-script");

test("adds 1 + 2 to equal 3", () => {
  var w = window;
  var d = document;
  var u = "https://code.jquery.com/jquery-3.4.1.min.js";
  lazyScript.load(w, d, u);
  const result = lazyScript.validateAddScript(w, d, u);
  console.log(result);
  expect(u).toBe("https://code.jquery.com/jquery-3.4.1.min.js");
});
