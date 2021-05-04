"use strict";

exports.__esModule = true;
exports.isPrismicSiteNavigationNode = isPrismicSiteNavigationNode;

function isPrismicSiteNavigationNode(node) {
  return node.internal.type === 'PrismicSiteNavigation';
}