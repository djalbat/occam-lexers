'use strict';

var SymbolSequence = require('./symbolSequence');

class BNFLine {
  constructor(name, symbolSequences) {
    this.name = name;
    this.symbolSequences = symbolSequences;
  }
  
  getName() {
    return this.name;
  }
  
  mapSymbolSequences(cb) {
    return this.symbolSequences.map(cb);
  }
  
  static fromContent(content) {
    var matches = content.match(BNFLine.nameExpressionRegExp),
        secondMatch = second(matches),
        thirdMatch = third(matches),
        name = secondMatch, ///
        expression = thirdMatch, ///
        choices = expression.split(BNFLine.choiceDelimiterRegExp),
        symbolSequences = choices.map(function(choice) {
          var symbolSequence = SymbolSequence.fromChoice(choice);
          
          return symbolSequence;
        });
    
    var line = new BNFLine(name, symbolSequences);
    
    return line;
  }
}

BNFLine.choiceDelimiterRegExp = /\s+\|\s+/;
BNFLine.nameExpressionRegExp = /^\s*(.*?)\s+::=\s+(.*?)\s*$/;
BNFLine.continuedExpressionRegExp = /^\s*(\|\s+.*?)\s*$/;

module.exports = BNFLine;

function second(array) { return array[1]; }
function third(array) { return array[2]; }
