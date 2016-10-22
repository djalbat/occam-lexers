'use strict';

var not_sign = `\\u{AC}`,
    mathematical_operators = `\\u{2200}-\\u{22FF}`,
    supplemental_mathematical_operators = `\\u{2A00}-\\u{2AFF}`,
    miscellaneous_technical = `\\u{2300}-\\u{23ff}`,
    mathematical_alphanumric_symbols = `\\u{1D400}-\\u{1D7FF}`,
    unicode_characters = `${not_sign}${mathematical_operators}${supplemental_mathematical_operators}${mathematical_alphanumric_symbols}${miscellaneous_technical}`,
    character = `[a-zA-Z<=>${unicode_characters}]`,
    unassigned = `${character}+`;

var grammar = [

  { string              : /"[^"]*"/ },

  { keyword             : /Rule|Theorem|Lemma|Premises|Premise|Conclusion|Proof|Suppose|Then|Hence|by/ },

  { special             : /\,|\:|\;|\(|\)/ },

  { unassigned          : new RegExp(`${unassigned}`, 'u') }
    
];

module.exports = grammar;
