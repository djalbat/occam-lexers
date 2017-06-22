'use strict';

const grammar = [

  { "regularExpression": "\\/[^/]+\\/" },

  { "special": "::=|\\||\\(|\\)|\\?|\\*|\\+|\\.|ε|;|<NO_WHITESPACE>|<END_OF_LINE>" },

  { "type": "\\[[^/]+\\]" },

  { "name": "[\\w|~]+" }
    
];

module.exports = grammar;