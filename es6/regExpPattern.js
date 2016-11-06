'use strict';

class RegExpPattern {
  constructor(string) {
    this.string = string;
  }
  
  toString() {
    return this.string;
  }
  
  removeAnchors() {
    this.string = this.string.replace(/^\^/, '').replace(/\$$/, '');
    
    return this;
  }
  
  removeNonCapturingGroup() {
    this.string = this.string.replace(/^(?:\^\(\?:)/, '').replace(/(?:\)\$)$/, '');
    
    return this;
  }

  static fromRegExp(regExp) {
    var string = regExp.source, ///
        regExpPattern = new RegExpPattern(string);

    return regExpPattern;
  }
}

module.exports = RegExpPattern;
