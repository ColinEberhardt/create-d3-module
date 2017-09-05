var tape = require("tape"),
    foo = require("../");

tape("provide the answer to life the universe and everything", function(test) {
  test.equal(foo(), 42);
  test.end();
});
