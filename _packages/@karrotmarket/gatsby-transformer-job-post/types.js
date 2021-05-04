"use strict";

exports.__esModule = true;
exports.isGreenhouseJobNode = isGreenhouseJobNode;

function isGreenhouseJobNode(node) {
  return node.internal.type === 'GreenhouseJob';
}