const inflight = require("./inflight");

function testInflight() {
  let i = 0;
  function scheduleNext() {
    let key = `key-${i++}`;
    const callback = () => {};
    for (let j = 0; j < 1000000; j++) {
      inflight(key, callback);
    }

    setImmediate(scheduleNext);
  }

  if (i % 100 === 0) {
    console.log(process.memoryUsage());
  }

  scheduleNext();
}

testInflight();
