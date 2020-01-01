'use strict';

const entries = [

  { "special"    : "^(?:,|=|::|:|\\|-|\\(|\\)|\\[|\\]|\\.\\.\\.)" },

  { "keyword"    : "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|Metalemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|Types|Type|Variables|Variable|Contexts|Context|Constructors|Constructor|DependentTypes|DependentType|DisjointTypes|DisjointType|Metavariables|Metavariable|Abbreviations|Abbreviation|for|let|from|by)\\b" },

  { "name"       : "^[A-Za-zΑ-Ωα-ω_0-9]+" },

  { "unassigned" : "^[^\\s]+" }

];

module.exports = entries;
