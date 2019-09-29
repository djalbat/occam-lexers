'use strict';

const entries = [

  { "broken-string" : "^\"" },

  { "special"       : "^(?:::=|::|:|\\||\\(|\\)|\\?|\\!|\\*|\\+|\\.|ε|;|<NO_WHITESPACE>|<END_OF_LINE>)" },

  { "type"          : "^\\[[^\\]]+\\]" },

  { "name"          : "^[\\w~]+" },

];

module.exports = entries;
