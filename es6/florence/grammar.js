'use strict';

var unicode_characters = `\\u{AC}\\u{2200}-\\u{22FF}\\u{1D400}-\\u{1D7FF}`,
    character = `[a-zA-Z<=>${unicode_characters}]`,
    unassigned = `${character}+`;

var grammar = [

  { string              : /"[^"]*"/ },

  { keyword             : /Rule|Theorem|Lemma|Premises|Premise|Conclusion|Proof|Suppose|Then|Hence|by/ },

  { special             : /\,|\:|\;|\(|\)/ },

  { unassigned          : new RegExp(`${unassigned}`, 'u') }
    
];

module.exports = grammar;
