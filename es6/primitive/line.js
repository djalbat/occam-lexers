'use strict';

const SymbolSequence = require('./symbolSequence');

class Line {
  constructor(name, symbolSequences) {
    this.name = name;
    this.symbolSequences = symbolSequences;
  }
  
  getName() {
    return this.name;
  }
  
  mapSymbolSequences(callback) {
    return this.symbolSequences.map(callback);
  }
  
  static fromContent(content) {
    const matches = content.match(Line.nameExpressionRegExp),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          name = secondMatch, ///
          expression = thirdMatch, ///
          choices = expression.split(Line.choiceDelimiterRegExp),
          symbolSequences = choices.map(function(choice) {
            const symbolSequence = SymbolSequence.fromChoice(choice);
            
            return symbolSequence;
          });
    
    const line = new Line(name, symbolSequences);
    
    return line;
  }
}

Line.choiceDelimiterRegExp = /\s+\|\s+/;
Line.nameExpressionRegExp = /^\s*(.*?)\s+::=\s+(.*?)\s*$/;
Line.continuedExpressionRegExp = /^\s*(\|\s+.*?)\s*$/;

module.exports = Line;

function second(array) { return array[1]; }
function third(array) { return array[2]; }
