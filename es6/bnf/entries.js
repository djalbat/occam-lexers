'use strict';

const entries = [

  { "special"    : "^(?:::=|\\||\\(|\\)|\\?|\\!|\\*|\\+|\\.|ε|;|<NON_WHITESPACE>|<NO_WHITESPACE>|<END_OF_LINE>)" },

  { "type"       : "^\\[[^\\]]+\\]" },

  { "name"       : "^[\\w~]+" },

  { "unassigned" : "^[^\\s]+" }

];

module.exports = entries;
