'use strict';

var grammar = {

  string        : /^("[^"]*")/,

  keyword       : /^(theorem|lemma|proof)/,

  special       : /^(=|:)/

};

module.exports = grammar;
