var _ = {
  map: function(arr, callback) {
    let output = [];
    for (let i in arr) {
      output.push(callback(arr[i]));
    }
    return output;
  },
  reduce: function(arr, callback, memo = 0) {
    for (let i in arr) {
      memo = callback(memo, arr[i]);
    }
    return memo;
  },
  find: function(arr, callback) {
    for (let i in arr) {
      if (callback(arr[i])) {
        return arr[i];
      }
    }
    return undefined;
  },
  filter: function(arr, callback) {
    let output = [];

    for (let i in arr) {
      if (callback(arr[i])) {
        output.push(arr[i]);
      }
    }
    return output;
  },
  reject: function(arr, callback) {
    let output = [];

    for (let i in arr) {
      if (!callback(arr[i])) {
        output.push(arr[i]);
      }
    }
    return output;
  }
};
