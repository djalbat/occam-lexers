'use strict';

const entries = [

  { "special"    : ",|;|⊢|=|::|:|\\[|\\]|\\{|\\}|\\(|\\)|\\.\\.\\.|\\.\\." },

  { "import" : "^import$" },

  { "keyword"    : "^(?:Rule|Axiom|Theorem|Lemma|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|Types|Type|Variables|Variable|Constructors|Constructor|DependentTypes|DependentType|QualifiedMetavariables|QualifiedMetavariable|Metavariables|Metavariable|Abbreviations|Abbreviation|Object|Definition|from|by|let|for|is|not|in|defined|undefined)$" },

  { "unassigned" : "^[\\u{21}-\\u{7E}\\u{A1}-\\u{FF}\\u{370}-\\u{3FF}\\u{2200}-\\u{22FF}\\u{2A00}-\\u{2AFF}\\u{2300}-\\u{23ff}\\u{1D400}-\\u{1D7FF}]+$" },

  { "error" : "^.*$" }

];

module.exports = entries;
