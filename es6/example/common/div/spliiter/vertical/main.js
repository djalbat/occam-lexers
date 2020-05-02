"use strict";

import { VerticalSplitterDiv } from "easy-layout";

class MainVerticalSplitterDiv extends VerticalSplitterDiv {}

Object.assign(MainVerticalSplitterDiv, {
  defaultProperties: {
    className: "main"
  }
});

module.exports = MainVerticalSplitterDiv;
