"use strict";

const entries = [

  { "special": "^(?:,|=|::|:|\\|-|\\(|\\)|\\[|\\]|\\.\\.\\.)" },

  { "keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|Metalemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|Types|Type|Contexts|Context|Operators|Operator|Variables|Variable|Constructors|Constructor|DependentTypes|DependentType|DisjointTypes|DisjointType|Metavariables|Metavariable|Abbreviations|Abbreviation|for|let|from|by)\\b" },

  { "reserved": "^(?:undefined|free|not|in|is)\\b" },

  { "name": "^[A-Za-zΑ-Ωα-ω_0-9]+" },

  { "unassigned": "^[^\\s]+" }

];

export default entries;
