'use strict';

var grammar = [

  { string    : /"[^"]*"/ },

  { include   : /include/ },

  { keyword   : /Rule|Premises|Premise|Conclusion|Proof|Suppose|Then|Hence|by/ },

  { special   : /=/ }
    
];

module.exports = grammar;
