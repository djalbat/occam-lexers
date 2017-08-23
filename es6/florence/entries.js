'use strict';

const entries = [

  { "special"    : ",|;|⊢|=|::|:|\\[|\\]|\\{|\\}|\\(|\\)|\\.\\.\\.|\\.\\." },

  { "keyword"    : "^(?:Rule|Axiom|Theorem|Lemma|Metalemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|Types|Type|Variables|Variable|Contexts|Context|Constructors|Constructor|DependentTypes|DependentType|QualifiedMetavariables|QualifiedMetavariable|Metavariables|Metavariable|Abbreviations|Abbreviation|Object|Definition|for|let|from|by)$" },

  { "unassigned" : "^.*$" }

];

module.exports = entries;
