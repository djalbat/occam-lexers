"use strict";

const entries = [

  { "special"    : "^(?:::=|\\||\\(|\\)|\\?|\\!|\\*|\\+|\\.|ε|;|<NO_WHITESPACE>|<END_OF_LINE>)" },

  { "type"       : "^\\[[^\\]]+\\]" },

  { "name"       : "^[\\w~]+" },

  { "unassigned" : "^[^\\s]+" }

];

export default entries;
