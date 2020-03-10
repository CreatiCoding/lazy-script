// Copyright (c) 2014-present, Facebook, Inc. All rights reserved.

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["last 2 versions"]
        },
        debug: true
      }
    ]
  ],
  plugins: ["@babel/transform-runtime"]
};
