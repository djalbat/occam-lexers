'use strict';

var grammar = [

  { string              : /"[^"]*"/ },

  { keyword             : /Rule|Theorem|Lemma|Premises|Premise|Conclusion|Proof|Suppose|Then|Hence|by/ },

  { undefined           : /.+/ }
    
];

module.exports = grammar;


