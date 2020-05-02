'use strict';

const easylayout = require('easy-layout');

const { VerticalSplitterDiv } = easylayout;

class MainVerticalSplitterDiv extends VerticalSplitterDiv {}

Object.assign(MainVerticalSplitterDiv, {
  defaultProperties: {
    className: 'main'
  }
});

module.exports = MainVerticalSplitterDiv;
