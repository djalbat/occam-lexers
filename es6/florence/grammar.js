'use strict';

var grammar = [

  { string    : /^("[^"]*")/ },

  { directive : /^(include)/ },

  { keyword   : /^(Rule|Premise|Premises|Conclusion|Theorem|Lemma|Proof|Suppose|Then|Hence|by)/ },

  { special   : /^(=|:|,|;)/ }
    
];

module.exports = grammar;
