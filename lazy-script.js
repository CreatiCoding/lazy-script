// Copyright 2020. creaticoding Co. all rights reserved
const TAG_MAP = {
  s: "script",
  h: "head",
  b: "body"
};

module.exports = {
  lazyCheck: async function(validate, duration = 100, max_try_count = 100) {
    return await new Promise((resolve, reject) => {
      let count = 0;
      const id = setInterval(async () => {
        const result = await validate();
        if (result) {
          clearInterval(id);
          resolve(result);
        } else if (count < max_try_count) {
          count++;
        } else {
          clearInterval(id);
          reject(
            new Error(
              JSON.stringify(
                {
                  error_code: -1,
                  message: `try count was exceeded. max_count_try(${max_count_try})`
                },
                null,
                2
              )
            )
          );
        }
      }, duration);
    });
  },
  validateAddScript(w, d, u) {
    var d = d || w.document;
    var list = [...d.querySelectorAll("script")].map(e => e.src);
    return list.find(e => e === u);
  },
  load: function(w, d, u) {
    var d = d || w.document;
    var s = d.createElement(TAG_MAP["s"]);
    s.src = u;
    d[TAG_MAP["h"]].appendChild(s);

    console.log([...d.querySelectorAll("script")].map(e => e.src));
    return d;
  }
};
