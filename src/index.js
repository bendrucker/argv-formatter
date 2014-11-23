'use strict';

function argify (key, value) {
  var single = key.length === 1;
  return {
    single: single,
    flag: single ? '-' + key : '--' + key,
    value: value
  };
}

exports.format = function formatArgv (object) {
  return Object.keys(object)
    .map(function (key) {
      return argify(key, object[key]);
    })
    .reduce(function (args, arg) {
      if (arg.single) {
        args.push(arg.flag, arg.value);
      }
      else {
        args.push(arg.flag + '=' + arg.value);
      }
      return args;
    }, []);
};
