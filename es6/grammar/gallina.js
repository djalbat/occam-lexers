'use strict';

var unicode_letter = `\\u{c0}-\\u{ff}\\u{180}-\\u{24f}\\u{391}-\\u{3ff}\\u{400}-\\u{4ff}\\u{2100}-\\u{214f}\\u{2070}-\\u{2079}\\u{2080}-\\u{2089}`, ///
    unicode_id_part = ``, ///
    first_letter = `[a-zA-Z_${unicode_letter}]`,
    subsequent_letter = `[a-zA-Z_0-9_’${unicode_letter}${unicode_id_part}]`,
    ident = `${first_letter}${subsequent_letter}*`;

'use strict';

var grammar = [

  { special       : /!|%|&&|&|@|~|\(\)|\(|\)|\*|\+\+|\+|,|\.|\.\(|\.\.|\\\/|\/\\|\/|::|:<|:=|:>|:|;|<->|>->|<-|->|-|<:|<=|<>|<|=>|=_D|=|>=|>|\?|\?=|\[|\]|\^|\{|\}|\|\||\|-|'/ },

  { keyword       : /^(?:_|as|at|cofix|else|end|exists|exists2|fix|forall|for|fun|if|IF|in|let|match|mod|Prop|return|Set|then|Type|using|where|with|Axiom|Conjecture|Parameter|Parameters|Variables|Variable|Hypothesis|Hypotheses|Local|Definition|Let|Inductive|CoInductive|Fixpoint|CoFixpoint|Theorem|Lemma|Remark|Fact|Corollary|Proposition|Definition|Example)$/ },

  { ident         : new RegExp(`^${ident}$`, 'u') },

  { num           : /^[0-9]+$/ }

];

module.exports = grammar;
