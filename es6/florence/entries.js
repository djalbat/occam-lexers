'use strict';

const entries = [

  { "include"    : "include" },

  { "special"    : ",|;|⊢|=|::|:|\\[|\\]|\\{|\\}|\\(|\\)|\\.\\.\\.|\\.\\." },

  { "keyword"    : "^(?:Rule|Axiom|Theorem|Lemma|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|Types|Type|Variables|Variable|Contexts|Context|Constructors|Constructor|DependentTypes|DependentType|QualifiedMetavariables|QualifiedMetavariable|Metavariables|Metavariable|Abbreviations|Abbreviation|Object|Definition|from|by|let|for|is|not|in|defined|undefined)$" },

  { "unassigned" : "^.*$" }

];

module.exports = entries;
