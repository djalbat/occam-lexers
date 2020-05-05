"use strict";

const entries = [

  { "special": "^(?:\\$\\$|\\$|\\\\\\(|\\\\\\)|\\\\\\[|\\\\\\])" },

  { "unassigned": "^(?:.+?(?=\\$\\$|\\$|\\\\\\(|\\\\\\)|\\\\\\[|\\\\\\])|.+)" }

];

export default entries;

