'use strict';

var basic_latin = `\\u{21}-\\u{7E}`,
    latin1_supplement = `\\u{A1}-\\u{FF}`,
    mathematical_operators = `\\u{2200}-\\u{22FF}`,
    supplemental_mathematical_operators = `\\u{2A00}-\\u{2AFF}`,
    miscellaneous_technical = `\\u{2300}-\\u{23ff}`,
    mathematical_alphanumeric_symbols = `\\u{1D400}-\\u{1D7FF}`,
    unicode_character =

`
${basic_latin}
${latin1_supplement}
${mathematical_operators}
${supplemental_mathematical_operators}
${miscellaneous_technical}
${mathematical_alphanumeric_symbols}
`,

    unicode_characters = `[${unicode_character}]+`,
    unassigned = unicode_characters;  ///


var grammar = [

  { string              : /"[^"]*"/ },

  { special             : /,|;|\{|\}|=|:|\(|\)/ },

  { keyword             : /^(?:Rule|Theorem|Lemma|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|by)$/ },

  { unassigned          : new RegExp(`^${unassigned}$`, 'u') }
    
];

module.exports = grammar;
