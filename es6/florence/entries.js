'use strict';

const entries = [

  { "special"    : "^(?:,|;|⊢|=|::|:|\\[|\\]|\\{|\\}|\\(|\\)|\\.\\.\\.|\\.\\.)" },

  { "keyword"    : "^(?:Rule|Axiom|Theorem|Lemma|Metalemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|Types|Type|Variables|Variable|Contexts|Context|Constructors|Constructor|DependentTypes|DependentType|Metavariables|Metavariable|Abbreviations|Abbreviation|for|let|from|by)" },

  { "unassigned" : "^(?:[^\\s\\/\"]+|\\/|\")" }

];

module.exports = entries;
