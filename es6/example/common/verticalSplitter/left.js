'use strict';

const easylayout = require('easy-layout');

const { Splitter, VerticalSplitter } = easylayout;

class LeftVerticalSplitter extends VerticalSplitter {
  static fromProperties(properties) {
    const afterSizeableElement = true;

    Object.assign(properties, { afterSizeableElement });

    const leftVerticalSplitter = Splitter.fromProperties(LeftVerticalSplitter, properties);

    return leftVerticalSplitter;
  }
}

Object.assign(LeftVerticalSplitter, {
  defaultProperties: {
    className: 'left'
  }
});

module.exports = LeftVerticalSplitter;
