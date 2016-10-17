'use strict';

var unicode_letter = `\\u{c0}-\\u{ff}\\u{180}-\\u{24f}\\u{391}-\\u{3ff}\\u{400}-\\u{4ff}\\u{2100}-\\u{214f}\\u{2070}-\\u{2079}\\u{2080}-\\u{2089}`,
    unicode_id_part = ``, ///
    first_letter = `[a-zA-Z_${unicode_letter}]`,
    subsequent_letter = `[a-zA-Z_0-9_’${unicode_letter}${unicode_id_part}]`;

'use strict';

var grammar = [

  { string    : /"[^"]*"/ },

  { keyword   : /_|as|at|cofix|else|end|exists|exists2|fix|for|forall|fun|if|IF|in|let|match|mod|Prop|return|Set|then|Type|using|where|with/ },

  { special   : /!|%|&&|&|@|~|\(\)|\(|\)|\*|\+\+|\+|,|\.\(|\.\.|\.|\\\/|\/\\|\/|::|:<|:=|:>|:|;|<->|>->|<-|->|-|<:|<=|<>|<|=>|=_D|=|>=|>|\?|\?=|\[|\]|\^|\{|\}|\|\||\|-|\|/ },

  { ident     : new RegExp(`${first_letter}${subsequent_letter}*`, 'u') },

  { num       : /[0-9]+/ }

];

grammar.type = function(entry) {
  var type = Object.keys(entry)[0];  ///

  return type;
};

grammar.findRegExp = function(type) {
  var regExp = grammar.find(function(entry) {
    var grammarType = grammar.type(entry),
        found = (grammarType === type);

    return found;
  });

  return regExp;
};

module.exports = grammar;
