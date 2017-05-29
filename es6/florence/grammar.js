'use strict';

const grammar = [

  { "special"    : ",|;|\\{|\\}|=|::|:|\\(|\\)|\\.\\.\\.|\\.\\." },

  { "include"    : "^include$" },

  { "keyword"    : "^(?:Rule|Axiom|Theorem|Lemma|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|Variables|Variable|Metavariables|Metavariable|Constructors|Constructor|Type|Object|Definition|from|by|let|is|not|in|free|defined|undefined)$" },
  
  { "unassigned" : "^[\\u{21}-\\u{7E}\\u{A1}-\\u{FF}\\u{2200}-\\u{22FF}\\u{2A00}-\\u{2AFF}\\u{2300}-\\u{23ff}\\u{1D400}-\\u{1D7FF}]+$" }
    
];

module.exports = grammar;
