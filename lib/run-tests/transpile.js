"use strict";

const typescript = require('typescript');

module.exports = function transpile(code, features, isModule) {
  return typescript.transpile(code);
};
