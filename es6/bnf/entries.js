'use strict';

const entries = [

  { "regularExpression": "\\/[^/]+\\/" },

  { "special": "::=|\\||\\(|\\)|\\?|\\*|\\+|\\.|ε|;|<NO_WHITESPACE>|<END_OF_LINE>" },

  { "type": "\\[[^/]+\\]" },

  { "name": "[\\w|~]+" },

  { "unknown" : "^.*$" }
    
];

module.exports = entries;