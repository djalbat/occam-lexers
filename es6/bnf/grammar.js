'use strict';

const grammar = [

  { "regularExpression": "\\/[^/]+\\/" },

  { "special": "::=|\\||\\(|\\)|\\?|\\*|\\+|\\-|\\.|<NO_WHITESPACE>|<END_OF_LINE>|ε|;" },

  { "type": "\\[[^/]+\\]" },

  { "name": "\\w+" }
    
];

module.exports = grammar;