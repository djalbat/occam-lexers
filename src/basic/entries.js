"use strict";

const entries = [
  {
    "digit": "^\\d+"
  },
  {
    "bracket": "^(?:\\(|\\))"
  },
  {
    "operator": "^(?:\\+|\\-|\\*|\\/)"
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

export default entries;
