"use strict";

exports.__esModule = true;
exports.isPrismicFaqNode = isPrismicFaqNode;

function isPrismicFaqNode(node) {
  return node.internal.type === 'PrismicFaq';
}