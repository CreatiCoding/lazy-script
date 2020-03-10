// Copyright 2004-present Facebook. All Rights Reserved.

const lazyScript = require("./lazy-script");
const Window = require("window");
const window = new Window();
const document = window.document;

console.log(document.body);
var w = lazyScript.load(
  "https://code.jquery.com/jquery-3.4.1.min.js",
  document
);
setInterval(() => {
  console.log(w.$);
}, 1000);
