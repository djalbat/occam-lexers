'use strict';

var grammar = [

  { string              : /"[^"]*"/ },

  { keyword             : /Rule|Theorem|Lemma|Premises|Premise|Conclusion|Proof|Suppose|Then|Hence|by/ },

  { special             : /\,|\:|\;|\=/ },

  { unassigned          : /.+/ }
    
];

module.exports = grammar;


