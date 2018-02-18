(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var entries = [{ "terminal": "\\+|\\-|\\*|\\/|\\(|\\)|\\d+" }, { "unassigned": "^.*$" }];

module.exports = entries;

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicLine = require('./line'),
    entries = require('./entries'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer');

var BasicLexer = function (_CommonLexer) {
  _inherits(BasicLexer, _CommonLexer);

  function BasicLexer() {
    _classCallCheck(this, BasicLexer);

    return _possibleConstructorReturn(this, (BasicLexer.__proto__ || Object.getPrototypeOf(BasicLexer)).apply(this, arguments));
  }

  _createClass(BasicLexer, null, [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var rules = Rules.fromEntries(entries),
          basicLexer = new BasicLexer(rules, BasicLine);

      return basicLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var basicLexer = BasicLexer.fromEntries(entries);

      return basicLexer;
    }
  }]);

  return BasicLexer;
}(CommonLexer);

Object.assign(BasicLexer, {
  entries: entries
});

module.exports = BasicLexer;

},{"../common/lexer":13,"../common/rules":16,"./entries":1,"./line":3}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    CommentTokens = require('./tokens/comment'),
    WhitespaceTokens = require('../common/tokens/whitespace'),
    StringLiteralTokens = require('./tokens/stringLiteral'),
    RegularExpressionTokens = require('./tokens/regularExpression');

var BasicLine = function (_CommonLine) {
  _inherits(BasicLine, _CommonLine);

  function BasicLine() {
    _classCallCheck(this, BasicLine);

    return _possibleConstructorReturn(this, (BasicLine.__proto__ || Object.getPrototypeOf(BasicLine)).apply(this, arguments));
  }

  _createClass(BasicLine, null, [{
    key: 'fromContentRulesAndConfiguration',
    value: function fromContentRulesAndConfiguration(content, rules, configuration) {
      var basicLine = _get(BasicLine.__proto__ || Object.getPrototypeOf(BasicLine), 'fromContentRulesAndConfiguration', this).call(this, BasicLine, content, rules, configuration);

      basicLine.initialise(CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens);

      return basicLine;
    }
  }]);

  return BasicLine;
}(CommonLine);

module.exports = BasicLine;

},{"../common/line":14,"../common/tokens/whitespace":32,"./tokens/comment":4,"./tokens/regularExpression":5,"./tokens/stringLiteral":6}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommentTokens = function () {
  function CommentTokens() {
    _classCallCheck(this, CommentTokens);
  }

  _createClass(CommentTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrRemainingContent, line, configuration) {
      var inComment = false; ///

      return inComment;
    }
  }]);

  return CommentTokens;
}();

module.exports = CommentTokens;

},{}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RegularExpressionTokens = function () {
  function RegularExpressionTokens() {
    _classCallCheck(this, RegularExpressionTokens);
  }

  _createClass(RegularExpressionTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line) {}
  }]);

  return RegularExpressionTokens;
}();

module.exports = RegularExpressionTokens;

},{}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringLiteralTokens = function () {
  function StringLiteralTokens() {
    _classCallCheck(this, StringLiteralTokens);
  }

  _createClass(StringLiteralTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line) {}
  }]);

  return StringLiteralTokens;
}();

module.exports = StringLiteralTokens;

},{}],7:[function(require,module,exports){
'use strict';

var entries = [{ "special": "::=|\\||\\(|\\)|\\?|\\*|\\+|\\.|ε|;|<NO_WHITESPACE>|<END_OF_LINE>" }, { "type": "\\[[^\\]]+\\]" }, { "name": "[\\w|~]+" }, { "unassigned": "^.*$" }];

module.exports = entries;

},{}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BNFLine = require('./line'),
    entries = require('./entries'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer'),
    specialSymbols = require('./specialSymbols'),
    tokensUtilities = require('../utilities/tokens');

var significantTokensFromLines = tokensUtilities.significantTokensFromLines;

var BNFLexer = function (_CommonLexer) {
  _inherits(BNFLexer, _CommonLexer);

  function BNFLexer() {
    _classCallCheck(this, BNFLexer);

    return _possibleConstructorReturn(this, (BNFLexer.__proto__ || Object.getPrototypeOf(BNFLexer)).apply(this, arguments));
  }

  _createClass(BNFLexer, [{
    key: 'significantTokensFromBNF',
    value: function significantTokensFromBNF(bnf) {
      var content = bnf,
          ///
      lines = _get(BNFLexer.prototype.__proto__ || Object.getPrototypeOf(BNFLexer.prototype), 'linesFromContent', this).call(this, content),
          significantTokens = significantTokensFromLines(lines);

      return significantTokens;
    }
  }], [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var rules = Rules.fromEntries(entries),
          bnfLexer = new BNFLexer(rules, BNFLine);

      return bnfLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var bnfLexer = BNFLexer.fromEntries(entries);

      return bnfLexer;
    }
  }]);

  return BNFLexer;
}(CommonLexer);

Object.assign(BNFLexer, {
  entries: entries,
  specialSymbols: specialSymbols
});

module.exports = BNFLexer;

},{"../common/lexer":13,"../common/rules":16,"../utilities/tokens":43,"./entries":7,"./line":9,"./specialSymbols":10}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    CommentTokens = require('./tokens/comment'),
    WhitespaceTokens = require('../common/tokens/whitespace'),
    StringLiteralTokens = require('../common/tokens/stringLiteral'),
    RegularExpressionTokens = require('../common/tokens/regularExpression');

var BNFLine = function (_CommonLine) {
  _inherits(BNFLine, _CommonLine);

  function BNFLine() {
    _classCallCheck(this, BNFLine);

    return _possibleConstructorReturn(this, (BNFLine.__proto__ || Object.getPrototypeOf(BNFLine)).apply(this, arguments));
  }

  _createClass(BNFLine, null, [{
    key: 'fromContentRulesAndConfiguration',
    value: function fromContentRulesAndConfiguration(content, rules, configuration) {
      var bnfLine = _get(BNFLine.__proto__ || Object.getPrototypeOf(BNFLine), 'fromContentRulesAndConfiguration', this).call(this, BNFLine, content, rules, configuration);

      bnfLine.initialise(CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens);

      return bnfLine;
    }
  }]);

  return BNFLine;
}(CommonLine);

module.exports = BNFLine;

},{"../common/line":14,"../common/tokens/regularExpression":29,"../common/tokens/stringLiteral":31,"../common/tokens/whitespace":32,"./tokens/comment":11}],10:[function(require,module,exports){
'use strict';

var specialSymbols = {
  plus: '+',
  epsilon: 'ε',
  wildcard: '.',
  asterisk: '*',
  separator: '::=',
  terminator: ';',
  verticalBar: '|',
  openBracket: '(',
  closeBracket: ')',
  questionMark: '?',
  END_OF_LINE: '<END_OF_LINE>',
  NO_WHITESPACE: '<NO_WHITESPACE>'
};

module.exports = specialSymbols;

},{}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommentTokens = function () {
  function CommentTokens() {
    _classCallCheck(this, CommentTokens);
  }

  _createClass(CommentTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrRemainingContent, line, configuration) {
      var inComment = false; ///

      return inComment;
    }
  }]);

  return CommentTokens;
}();

module.exports = CommentTokens;

},{}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Configuration = function () {
  function Configuration() {
    var minimumLinesLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Infinity;
    var previousLineInComment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var followingLineInComment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, Configuration);

    ///
    this.minimumLinesLength = minimumLinesLength;
    this.previousLineInComment = previousLineInComment;
    this.followingLineInComment = followingLineInComment;
  }

  _createClass(Configuration, [{
    key: 'getMinimumLinesLength',
    value: function getMinimumLinesLength() {
      return this.minimumLinesLength;
    }
  }, {
    key: 'isPreviousLineInComment',
    value: function isPreviousLineInComment() {
      return this.previousLineInComment;
    }
  }, {
    key: 'isFollowingLineInComment',
    value: function isFollowingLineInComment() {
      return this.followingLineInComment;
    }
  }, {
    key: 'setPreviousLineInComment',
    value: function setPreviousLineInComment(previousLineInComment) {
      this.previousLineInComment = previousLineInComment;
    }
  }, {
    key: 'shouldTerminate',
    value: function shouldTerminate(length) {
      var terminate = false;

      if (length >= this.minimumLinesLength) {
        if (this.previousLineInComment === this.followingLineInComment) {
          terminate = true;
        }
      }

      return terminate;
    }
  }]);

  return Configuration;
}();

module.exports = Configuration;

},{}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    Rules = require('./rules'),
    Configuration = require('./configuration');

var CommonLexer = function () {
  function CommonLexer(rules, Line) {
    _classCallCheck(this, CommonLexer);

    this.rules = rules;
    this.Line = Line;
  }

  _createClass(CommonLexer, [{
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.Line;
    }
  }, {
    key: 'addedLinesFromContent',
    value: function addedLinesFromContent(content, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
      var configuration = new Configuration(minimumLinesLength, previousLineInComment, followingLineInComment),
          lines = this.linesFromContent(content, firstLineIndex, configuration),
          addedLines = lines; ///

      return addedLines;
    }
  }, {
    key: 'linesFromContent',
    value: function linesFromContent(content) {
      var firstLineIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var configuration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Configuration();

      var contents = content.split(/\n/),
          lines = this.linesFromContents(contents, firstLineIndex, configuration);

      return lines;
    }
  }, {
    key: 'linesFromContents',
    value: function linesFromContents(contents, firstLineIndex, configuration) {
      var lines = [];

      var index = firstLineIndex,
          content = contents[index];

      while (content !== undefined) {
        var length = index - firstLineIndex,
            terminate = configuration.shouldTerminate(length);

        if (terminate) {
          break;
        }

        var line = this.Line.fromContentRulesAndConfiguration(content, this.rules, configuration);

        lines.push(line);

        content = contents[++index];
      }

      return lines;
    }
  }], [{
    key: 'ruleFromEntry',
    value: function ruleFromEntry(entry) {
      return Rule.fromEntry(entry);
    }
  }, {
    key: 'rulesFromEntries',
    value: function rulesFromEntries(entries) {
      return Rules.fromEntries(entries);
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;

},{"./configuration":12,"./rule":15,"./rules":16}],14:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignificantTokens = require('./tokens/significant');

var CommonLine = function () {
  function CommonLine(content, rules, configuration, tokens, inComment, replacementTokenMap) {
    _classCallCheck(this, CommonLine);

    this.content = content;
    this.rules = rules;
    this.configuration = configuration;
    this.tokens = tokens;
    this.inComment = inComment;
    this.replacementTokenMap = replacementTokenMap;
  }

  _createClass(CommonLine, [{
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: 'getConfiguration',
    value: function getConfiguration() {
      return this.configuration;
    }
  }, {
    key: 'getTokens',
    value: function getTokens() {
      var withReplacementTokens = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var tokens = this.tokens;

      if (withReplacementTokens) {
        tokens = tokens.reduce(function (tokens, token, index) {
          var replacementToken = this.replacementTokenMap[index];

          token = replacementToken || token; ///

          tokens.push(token);

          return tokens;
        }.bind(this), []);
      }

      return tokens;
    }
  }, {
    key: 'isInComment',
    value: function isInComment() {
      return this.inComment;
    }
  }, {
    key: 'getReplacementTokenMap',
    value: function getReplacementTokenMap() {
      return this.replacementTokenMap;
    }
  }, {
    key: 'getIndexes',
    value: function getIndexes() {
      var indexes = Object.keys(this.replacementTokenMap);

      return indexes;
    }
  }, {
    key: 'getFirstTokenIndex',
    value: function getFirstTokenIndex() {
      var firstToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var withReplacementTokens = false,
          tokens = this.getTokens(withReplacementTokens),
          firstIndex = 0,
          firstTokenIndex = firstToken === null ? firstIndex : tokens.indexOf(firstToken);

      return firstTokenIndex;
    }
  }, {
    key: 'getLastTokenIndex',
    value: function getLastTokenIndex() {
      var lastToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var withReplacementTokens = false,
          tokens = this.getTokens(withReplacementTokens),
          tokensLength = tokens.length,
          lastIndex = tokensLength - 1,
          lastTokenIndex = lastToken === null ? lastIndex : tokens.indexOf(lastToken);

      return lastTokenIndex;
    }
  }, {
    key: 'asHTML',
    value: function asHTML(filePath, withReplacementTokens) {
      var html = void 0;

      var tokens = this.getTokens(withReplacementTokens);

      html = tokens.reduce(function (html, token) {
        var tokenHTML = token.asHTML(filePath);

        html += tokenHTML;

        return html;
      }, '');

      html += '\n'; ///

      return html;
    }
  }, {
    key: 'setTokens',
    value: function setTokens(tokens) {
      this.tokens = tokens;
    }
  }, {
    key: 'replaceToken',
    value: function replaceToken(replacedToken, replacementToken) {
      var withReplacementTokens = false,
          tokens = this.getTokens(withReplacementTokens),
          replacedTokenIndex = tokens.indexOf(replacedToken),
          index = replacedTokenIndex; ///

      this.replacementTokenMap[index] = replacementToken;
    }
  }, {
    key: 'removeReplacementTokens',
    value: function removeReplacementTokens(firstToken, lastToken) {
      var indexes = this.getIndexes(),
          firstTokenIndex = this.getFirstTokenIndex(firstToken),
          lastTokenIndex = this.getLastTokenIndex(lastToken);

      indexes.forEach(function (index) {
        if (index >= firstTokenIndex && index <= lastTokenIndex) {
          delete this.replacementTokenMap[index];
        }
      }.bind(this));
    }
  }, {
    key: 'initialise',
    value: function initialise(CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens) {
      var line = this,
          ///
      tokensOrContents = [this.content],
          inComment = CommentTokens.pass(tokensOrContents, line, this.configuration);

      RegularExpressionTokens.pass(tokensOrContents, line);

      StringLiteralTokens.pass(tokensOrContents, line);

      WhitespaceTokens.pass(tokensOrContents, line);

      var tokens = SignificantTokens.pass(tokensOrContents, line, this.rules);

      this.tokens = tokens;

      this.inComment = inComment;
    }
  }], [{
    key: 'fromContentRulesAndConfiguration',
    value: function fromContentRulesAndConfiguration(Line, content, rules, configuration) {
      var tokens = undefined,
          ///
      inComment = undefined,
          //
      replacementTokenMap = {},
          line = new Line(content, rules, configuration, tokens, inComment, replacementTokenMap);

      return line;
    }
  }]);

  return CommonLine;
}();

module.exports = CommonLine;

},{"./tokens/significant":30}],15:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var SignificantToken = require('../common/token/significant');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

var Rule = function () {
  function Rule(significantTokenType, regularExpression) {
    _classCallCheck(this, Rule);

    this.significantTokenType = significantTokenType;
    this.regularExpression = regularExpression;
  }

  _createClass(Rule, [{
    key: 'getSignificantTokenType',
    value: function getSignificantTokenType() {
      return this.significantTokenType;
    }
  }, {
    key: 'getRegularExpression',
    value: function getRegularExpression() {
      return this.regularExpression;
    }
  }, {
    key: 'significantTokenPositionWithinContent',
    value: function significantTokenPositionWithinContent(content) {
      var significantTokenPosition = -1;

      var matches = content.match(this.regularExpression);

      if (matches !== null) {
        var firstMatch = first(matches);

        if (firstMatch !== '') {
          significantTokenPosition = matches.index; ///
        }
      }

      return significantTokenPosition;
    }
  }, {
    key: 'significantTokenFromWithinContentAndLine',
    value: function significantTokenFromWithinContentAndLine(content, line) {
      var matches = content.match(this.regularExpression),
          firstMatch = first(matches);

      content = firstMatch; ///

      var type = this.significantTokenType,
          ///
      significantToken = SignificantToken.fromContentLineAndType(content, line, type);

      return significantToken;
    }
  }], [{
    key: 'fromEntry',
    value: function fromEntry(entry) {
      var entryKeys = Object.keys(entry),
          firstEntryKey = first(entryKeys),
          significantTokenType = firstEntryKey,
          ///
      regularExpressionPattern = entry[significantTokenType],
          rule = Rule.fromSignificantTokenTypeAndRegularExpressionPattern(significantTokenType, regularExpressionPattern);

      return rule;
    }
  }, {
    key: 'fromSignificantTokenTypeAndRegularExpressionPattern',
    value: function fromSignificantTokenTypeAndRegularExpressionPattern(significantTokenType, regularExpressionPattern) {
      var unicode = isUnicode(regularExpressionPattern),
          flags = unicode ? 'u' : '',
          regExp = new RegExp(regularExpressionPattern, flags),
          regularExpression = regExp,
          ///
      rule = new Rule(significantTokenType, regularExpression);

      return rule;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function isUnicode(regularExpressionPattern) {
  var unicodeRegularExpression = /u\{/,
      ///
  index = regularExpressionPattern.search(unicodeRegularExpression),
      unicode = index !== -1;

  return unicode;
}

},{"../common/token/significant":22,"necessary":79}],16:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Rule = require('./rule');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

var Rules = function () {
  function Rules(array) {
    _classCallCheck(this, Rules);

    this.array = array;
  }

  _createClass(Rules, [{
    key: 'reduce',
    value: function reduce(callback, initialValue) {
      return this.array.reduce(callback, initialValue);
    }
  }, {
    key: 'getRule',
    value: function getRule(depth) {
      var rule = this.array[depth] || null; ///

      return rule;
    }
  }, {
    key: 'addRule',
    value: function addRule(rule) {
      this.array.unshift(rule); ///
    }
  }], [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var significantTokenTypes = significantTokenTypesFromEntries(entries),
          array = significantTokenTypes.map(function (significantTokenType) {
        var regularExpressionPattern = findRegularExpressionPattern(significantTokenType, entries),
            rule = Rule.fromSignificantTokenTypeAndRegularExpressionPattern(significantTokenType, regularExpressionPattern);

        return rule;
      }),
          rules = new Rules(array);

      return rules;
    }
  }]);

  return Rules;
}();

module.exports = Rules;

function findRegularExpressionPattern(significantTokenType, entries) {
  var entry = entries.find(function (entry) {
    var entryKeys = Object.keys(entry),
        firstEntryKey = first(entryKeys),
        entrySignificantTokenType = firstEntryKey,
        ///
    found = entrySignificantTokenType === significantTokenType;

    return found;
  }) || null,
      ///
  regularExpressionPattern = entry !== null ? entry[significantTokenType] : ///
  null;

  return regularExpressionPattern;
}

function significantTokenTypesFromEntries(entries) {
  var significantTokenTypes = entries.map(function (entry) {
    var entryKeys = Object.keys(entry),
        firstEntryKey = first(entryKeys),
        significantTokenType = firstEntryKey; ///

    return significantTokenType;
  });

  return significantTokenTypes;
}

},{"./rule":15,"necessary":79}],17:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var contentUtilities = require('../../utilities/content');

var sanitiseContent = contentUtilities.sanitiseContent;

var NonSignificantToken = function () {
  function NonSignificantToken(content, line, html) {
    _classCallCheck(this, NonSignificantToken);

    this.content = content;
    this.line = line;
    this.html = html;
  }

  _createClass(NonSignificantToken, [{
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.line;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      return this.html;
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.content.length; ///
    }
  }, {
    key: 'isSignificantToken',
    value: function isSignificantToken() {
      var significantToken = false;

      return significantToken;
    }
  }, {
    key: 'asHTML',
    value: function asHTML(filePath) {
      var html = this.html; ///

      return html;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return NonSignificantToken.clone(NonSignificantToken, this, startPosition, endPosition);
    }
  }], [{
    key: 'clone',
    value: function clone() {
      var Class = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NonSignificantToken;
      var token = arguments[1];
      var startPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var endPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : token.getLength();

      var clonedNonSignificantToken = null;

      if (startPosition !== endPosition) {
        var line = token.getLine();

        var content = token.getContent();

        content = content.substring(startPosition, endPosition);

        clonedNonSignificantToken = Class.fromContentAndLine(Class, content, line);
      }

      return clonedNonSignificantToken;
    }
  }, {
    key: 'fromContentAndLine',
    value: function fromContentAndLine(Class, content, line) {
      if (line === undefined) {
        line = content;
        content = Class;
        Class = NonSignificantToken;
      }

      var sanitisedContent = sanitiseContent(content),
          html = sanitisedContent,
          token = new Class(content, line, html);

      return token;
    }
  }]);

  return NonSignificantToken;
}();

module.exports = NonSignificantToken;

},{"../../utilities/content":42}],18:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentUtilities = require('../../../utilities/content'),
    NonSignificantToken = require('../nonSignificant');

var sanitiseContent = contentUtilities.sanitiseContent;

var CommentToken = function (_NonSignificantToken) {
  _inherits(CommentToken, _NonSignificantToken);

  function CommentToken() {
    _classCallCheck(this, CommentToken);

    return _possibleConstructorReturn(this, (CommentToken.__proto__ || Object.getPrototypeOf(CommentToken)).apply(this, arguments));
  }

  _createClass(CommentToken, [{
    key: 'merge',
    value: function merge(commentToken) {
      var content = this.getContent();

      var line = this.getLine(),
          commentTokenContent = commentToken.getContent();

      content += commentTokenContent;

      commentToken = CommentToken.fromContentAndLine(content, line); ///

      return commentToken;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return CommentToken.clone(CommentToken, this, startPosition, endPosition);
    }
  }], [{
    key: 'clone',
    value: function clone() {
      var Class = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : CommentToken;
      var token = arguments[1];
      var startPosition = arguments[2];
      var endPosition = arguments[3];
      return NonSignificantToken.clone(Class, token, startPosition, endPosition);
    }
  }, {
    key: 'fromContentAndLine',
    value: function fromContentAndLine(Class, content, line) {
      if (line === undefined) {
        line = content;
        content = Class;
        Class = CommentToken;
      }

      var sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      html = '<span class="comment">' + innerHTML + '</span>',
          commentToken = new Class(content, line, html);

      return commentToken;
    }
  }]);

  return CommentToken;
}(NonSignificantToken);

module.exports = CommentToken;

},{"../../../utilities/content":42,"../nonSignificant":17}],19:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var CommentToken = require('../comment');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

var EndOfCommentToken = function (_CommentToken) {
  _inherits(EndOfCommentToken, _CommentToken);

  function EndOfCommentToken() {
    _classCallCheck(this, EndOfCommentToken);

    return _possibleConstructorReturn(this, (EndOfCommentToken.__proto__ || Object.getPrototypeOf(EndOfCommentToken)).apply(this, arguments));
  }

  _createClass(EndOfCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return CommentToken.clone(EndOfCommentToken, this, startPosition, endPosition);
    }
  }], [{
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      return CommentToken.fromContentAndLine(EndOfCommentToken, content, line);
    }
  }, {
    key: 'fromWithinContentAndLine',
    value: function fromWithinContentAndLine(content, line) {
      var endOfCommentToken = null;

      var matches = content.match(EndOfCommentToken.regularExpression);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        endOfCommentToken = EndOfCommentToken.fromContentAndLine(content, line);
      }

      return endOfCommentToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      var position = content.search(EndOfCommentToken.regularExpression);

      return position;
    }
  }]);

  return EndOfCommentToken;
}(CommentToken);

EndOfCommentToken.regularExpression = /\*\//;

module.exports = EndOfCommentToken;

},{"../comment":18,"necessary":79}],20:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../comment');

var MiddleOfCommentToken = function (_CommentToken) {
  _inherits(MiddleOfCommentToken, _CommentToken);

  function MiddleOfCommentToken() {
    _classCallCheck(this, MiddleOfCommentToken);

    return _possibleConstructorReturn(this, (MiddleOfCommentToken.__proto__ || Object.getPrototypeOf(MiddleOfCommentToken)).apply(this, arguments));
  }

  _createClass(MiddleOfCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return CommentToken.clone(MiddleOfCommentToken, this, startPosition, endPosition);
    }
  }], [{
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line, length) {
      content = content.substr(0, length); ///

      var middleOfCommentToken = CommentToken.fromContentAndLine(MiddleOfCommentToken, content, line);

      return middleOfCommentToken;
    }
  }]);

  return MiddleOfCommentToken;
}(CommentToken);

module.exports = MiddleOfCommentToken;

},{"../comment":18}],21:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var CommentToken = require('../comment');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

var StartOfCommentToken = function (_CommentToken) {
  _inherits(StartOfCommentToken, _CommentToken);

  function StartOfCommentToken() {
    _classCallCheck(this, StartOfCommentToken);

    return _possibleConstructorReturn(this, (StartOfCommentToken.__proto__ || Object.getPrototypeOf(StartOfCommentToken)).apply(this, arguments));
  }

  _createClass(StartOfCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return CommentToken.clone(StartOfCommentToken, this, startPosition, endPosition);
    }
  }], [{
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      return CommentToken.fromContentAndLine(StartOfCommentToken, content, line);
    }
  }, {
    key: 'fromWithinContentAndLine',
    value: function fromWithinContentAndLine(content, line) {
      var startOfCommentToken = null;

      var matches = content.match(StartOfCommentToken.regularExpression);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        startOfCommentToken = StartOfCommentToken.fromContentAndLine(content, line);
      }

      return startOfCommentToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      var position = content.search(StartOfCommentToken.regularExpression);

      return position;
    }
  }]);

  return StartOfCommentToken;
}(CommentToken);

StartOfCommentToken.regularExpression = /\/\*/;

module.exports = StartOfCommentToken;

},{"../comment":18,"necessary":79}],22:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var contentUtilities = require('../../utilities/content');

var sanitiseContent = contentUtilities.sanitiseContent;

var SignificantToken = function () {
  function SignificantToken(content, line, type, innerHTML) {
    _classCallCheck(this, SignificantToken);

    this.content = content;
    this.line = line;
    this.type = type;
    this.innerHTML = innerHTML;
  }

  _createClass(SignificantToken, [{
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.line;
    }
  }, {
    key: 'getType',
    value: function getType() {
      return this.type;
    }
  }, {
    key: 'getInnerHTML',
    value: function getInnerHTML() {
      return this.innerHTML;
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      var length = this.content.length; ///

      return length;
    }
  }, {
    key: 'isSignificantToken',
    value: function isSignificantToken() {
      var significantToken = true;

      return significantToken;
    }
  }, {
    key: 'isWhitespaceToken',
    value: function isWhitespaceToken() {
      var whitespaceToken = false;

      return whitespaceToken;
    }
  }, {
    key: 'isEndOfLineToken',
    value: function isEndOfLineToken() {
      var endOfLineToken = false;

      return endOfLineToken;
    }
  }, {
    key: 'asHTML',
    value: function asHTML(filePath) {
      var className = this.type,
          ///
      html = '<span class="' + className + '">' + this.innerHTML + '</span>';

      return html;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(SignificantToken, this, startPosition, endPosition);
    }
  }], [{
    key: 'clone',
    value: function clone() {
      var Class = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SignificantToken;
      var significantToken = arguments[1];
      var startPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var endPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : significantToken.getLength();

      var clonedSignificantToken = null;

      if (startPosition !== endPosition) {
        var content = significantToken.getContent();

        var line = significantToken.getLine(),
            type = significantToken.getType();

        content = content.substring(startPosition, endPosition); ///

        clonedSignificantToken = Class.fromContentLineAndType(content, line, type);
      }

      return clonedSignificantToken;
    }
  }, {
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(Class, content, line, type) {
      if (type === undefined) {
        type = line;
        line = content;
        content = Class;
        Class = SignificantToken;
      }

      for (var _len = arguments.length, remainingArguments = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
        remainingArguments[_key - 4] = arguments[_key];
      }

      var sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      significantToken = new (Function.prototype.bind.apply(Class, [null].concat([content, line, type, innerHTML], remainingArguments)))();

      return significantToken;
    }
  }]);

  return SignificantToken;
}();

module.exports = SignificantToken;

},{"../../utilities/content":42}],23:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('../significant');

var EndOfLineToken = function (_SignificantToken) {
  _inherits(EndOfLineToken, _SignificantToken);

  function EndOfLineToken() {
    _classCallCheck(this, EndOfLineToken);

    return _possibleConstructorReturn(this, (EndOfLineToken.__proto__ || Object.getPrototypeOf(EndOfLineToken)).apply(this, arguments));
  }

  _createClass(EndOfLineToken, [{
    key: 'getLength',
    value: function getLength() {
      var length = 0; ///

      return length;
    }
  }, {
    key: 'isEndOfLineToken',
    value: function isEndOfLineToken() {
      var endOfLineToken = true;

      return endOfLineToken;
    }
  }, {
    key: 'asHTML',
    value: function asHTML(filePath) {
      var html = ''; ///

      return html;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return EndOfLineToken.clone(this, startPosition, endPosition);
    }
  }], [{
    key: 'clone',
    value: function clone(endOfLineToken) {
      var startPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var endPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : endOfLineToken.getLength();

      var clonedEndOfLineToken = null;

      if (startPosition !== endPosition) {
        var content = null,
            line = endOfLineToken.getLine(),
            _type = endOfLineToken.getType(),
            _clonedEndOfLineToken = EndOfLineToken.fromContentLineAndType(content, line, _type);
      }

      return clonedEndOfLineToken;
    }
  }, {
    key: 'fromLine',
    value: function fromLine(line) {
      var content = null,
          type = EndOfLineToken.type,
          endOfLineToken = EndOfLineToken.fromContentLineAndType(content, line, type);

      return endOfLineToken;
    }
  }, {
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      var innerHTML = null,
          ///
      endOfLineToken = new EndOfLineToken(content, line, type, innerHTML);

      return endOfLineToken;
    }
  }]);

  return EndOfLineToken;
}(SignificantToken);

var type = 'endOfLine';

Object.assign(EndOfLineToken, {
  type: type
});

module.exports = EndOfLineToken;

},{"../significant":22}],24:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var SignificantToken = require('../significant');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

var RegularExpressionToken = function (_SignificantToken) {
  _inherits(RegularExpressionToken, _SignificantToken);

  function RegularExpressionToken() {
    _classCallCheck(this, RegularExpressionToken);

    return _possibleConstructorReturn(this, (RegularExpressionToken.__proto__ || Object.getPrototypeOf(RegularExpressionToken)).apply(this, arguments));
  }

  _createClass(RegularExpressionToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(RegularExpressionToken, this, startPosition, endPosition);
    }
  }], [{
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      return SignificantToken.fromContentLineAndType(RegularExpressionToken, content, line, type);
    }
  }, {
    key: 'fromWithinContentAndLine',
    value: function fromWithinContentAndLine(content, line) {
      var regularExpressionToken = null;

      var matches = content.match(RegularExpressionToken.regularExpression);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        var _type = RegularExpressionToken.type;


        regularExpressionToken = RegularExpressionToken.fromContentLineAndType(content, line, _type);
      }

      return regularExpressionToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      var position = content.search(RegularExpressionToken.regularExpression);

      return position;
    }
  }]);

  return RegularExpressionToken;
}(SignificantToken);

var type = 'regularExpression',
    regularExpression = /\/(?:\\.|[^\/])*\//;

Object.assign(RegularExpressionToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = RegularExpressionToken;

},{"../significant":22,"necessary":79}],25:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var SignificantToken = require('../significant');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

var StringLiteralToken = function (_SignificantToken) {
  _inherits(StringLiteralToken, _SignificantToken);

  function StringLiteralToken() {
    _classCallCheck(this, StringLiteralToken);

    return _possibleConstructorReturn(this, (StringLiteralToken.__proto__ || Object.getPrototypeOf(StringLiteralToken)).apply(this, arguments));
  }

  _createClass(StringLiteralToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(StringLiteralToken, this, startPosition, endPosition);
    }
  }], [{
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      return SignificantToken.fromContentLineAndType(StringLiteralToken, content, line, type);
    }
  }, {
    key: 'fromWithinContentAndLine',
    value: function fromWithinContentAndLine(content, line) {
      var stringLiteralToken = null;

      var matches = content.match(StringLiteralToken.regularExpression);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        var _type = StringLiteralToken.type;


        stringLiteralToken = StringLiteralToken.fromContentLineAndType(content, line, _type);
      }

      return stringLiteralToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      var position = content.search(StringLiteralToken.regularExpression);

      return position;
    }
  }]);

  return StringLiteralToken;
}(SignificantToken);

var type = 'string',
    regularExpression = /"(?:\\.|[^"])*"/;

Object.assign(StringLiteralToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = StringLiteralToken;

},{"../significant":22,"necessary":79}],26:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var SignificantToken = require('../significant');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

var WhitespaceToken = function (_SignificantToken) {
  _inherits(WhitespaceToken, _SignificantToken);

  function WhitespaceToken() {
    _classCallCheck(this, WhitespaceToken);

    return _possibleConstructorReturn(this, (WhitespaceToken.__proto__ || Object.getPrototypeOf(WhitespaceToken)).apply(this, arguments));
  }

  _createClass(WhitespaceToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(WhitespaceToken, this, startPosition, endPosition);
    }
  }, {
    key: 'isWhitespaceToken',
    value: function isWhitespaceToken() {
      var whitespaceToken = true;

      return whitespaceToken;
    }
  }, {
    key: 'asHTML',
    value: function asHTML(filePath) {
      var html = this.innerHTML; ///

      return html;
    }
  }], [{
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      return SignificantToken.fromContentLineAndType(WhitespaceToken, content, line, type);
    }
  }, {
    key: 'fromWithinContentAndLine',
    value: function fromWithinContentAndLine(content, line) {
      var whitespaceToken = null;

      var matches = content.match(WhitespaceToken.regularExpression);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        var _type = WhitespaceToken.type;


        whitespaceToken = WhitespaceToken.fromContentLineAndType(content, line, _type);
      }

      return whitespaceToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      var position = content.search(WhitespaceToken.regularExpression);

      return position;
    }
  }]);

  return WhitespaceToken;
}(SignificantToken);

var type = 'whitespace',
    regularExpression = /[\t ]+/;

Object.assign(WhitespaceToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = WhitespaceToken;

},{"../significant":22,"necessary":79}],27:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    splice = arrayUtilities.splice;

var Tokens = function () {
  function Tokens() {
    _classCallCheck(this, Tokens);
  }

  _createClass(Tokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line, Token) {
      var offset = 0;

      var tokensOrContentsLength = tokensOrContents.length;

      for (var index = 0; index < tokensOrContentsLength; index++) {
        var offsetIndex = index + offset,
            tokenOrContent = tokensOrContents[offsetIndex];

        if (typeof tokenOrContent === 'string') {
          var content = tokenOrContent,
              ///
          tokensOrRemainingContent = tokensOrRemainingContentFromWithinContentAndLine(content, line, Token),
              tokensOrRemainingContentLength = tokensOrRemainingContent.length,
              start = offsetIndex;

          splice(tokensOrContents, start, 1, tokensOrRemainingContent);

          offset += tokensOrRemainingContentLength - 1;
        }
      }
    }
  }]);

  return Tokens;
}();

module.exports = Tokens;

function tokensOrRemainingContentFromWithinContentAndLine(content, line, Token) {
  var remainingContent = void 0,
      tokensOrRemainingContent = [],
      tokenPositionWithinContent = Token.positionWithinContent(content);

  while (tokenPositionWithinContent !== -1) {
    if (tokenPositionWithinContent > 0) {
      remainingContent = content.substring(0, tokenPositionWithinContent);

      tokensOrRemainingContent.push(remainingContent);
    }

    var token = Token.fromWithinContentAndLine(content, line),
        tokenLength = token.getLength(),
        tokenOffset = tokenPositionWithinContent + tokenLength;

    tokensOrRemainingContent.push(token);

    content = content.substring(tokenOffset);

    tokenPositionWithinContent = Token.positionWithinContent(content);
  }

  if (content !== '') {
    remainingContent = content;

    tokensOrRemainingContent.push(remainingContent);
  }

  return tokensOrRemainingContent;
}

},{"necessary":79}],28:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EndOfCommentToken = require('../token/nonSignificant/comment/endOf'),
    StartOfCommentToken = require('../token/nonSignificant/comment/startOf'),
    MiddleOfCommentToken = require('../token/nonSignificant/comment/middleOf');

var CommentTokens = function () {
  function CommentTokens() {
    _classCallCheck(this, CommentTokens);
  }

  _createClass(CommentTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line, configuration) {
      var content = tokensOrContents.pop(),
          commentToken = void 0,
          commentTokenLength = void 0,
          previousLineInComment = configuration.isPreviousLineInComment(),
          inComment = previousLineInComment === true;

      while (content !== '') {
        var contentLength = content.length;

        if (inComment) {
          var endOfCommentTokenPositionWithinContent = EndOfCommentToken.positionWithinContent(content);

          if (endOfCommentTokenPositionWithinContent === 0) {
            inComment = false;

            commentToken = EndOfCommentToken.fromWithinContentAndLine(content, line);

            commentTokenLength = commentToken.getLength();
          } else {
            var middleOfCommentTokenLength = minimumBarMinusOne(endOfCommentTokenPositionWithinContent, contentLength);

            commentToken = MiddleOfCommentToken.fromContentAndLine(content, line, middleOfCommentTokenLength);

            commentTokenLength = middleOfCommentTokenLength;
          }

          var previousCommentToken = tokensOrContents.pop();

          commentToken = previousCommentToken === undefined ? commentToken : previousCommentToken.merge(commentToken);

          tokensOrContents.push(commentToken);

          content = content.substring(commentTokenLength);
        } else {
          var startOfCommentTokenPositionWithinContent = StartOfCommentToken.positionWithinContent(content);

          if (startOfCommentTokenPositionWithinContent === 0) {
            inComment = true;

            commentToken = StartOfCommentToken.fromWithinContentAndLine(content, line);

            commentTokenLength = commentToken.getLength();

            tokensOrContents.push(commentToken);

            content = content.substring(commentTokenLength);
          } else {
            contentLength = minimumBarMinusOne(startOfCommentTokenPositionWithinContent, contentLength);

            var remainingContent = content.substring(contentLength);

            content = content.substring(0, contentLength);

            tokensOrContents.push(content);

            content = remainingContent;
          }
        }
      }

      previousLineInComment = inComment; ///

      configuration.setPreviousLineInComment(previousLineInComment);

      return inComment;
    }
  }]);

  return CommentTokens;
}();

module.exports = CommentTokens;

function minimumBarMinusOne() {
  var values = Array.prototype.slice.call(arguments),
      minimumBarMinusOne = values.reduce(function (minimumBarMinusOne, value) {
    if (value > -1) {
      minimumBarMinusOne = minimumBarMinusOne !== null ? Math.min(minimumBarMinusOne, value) : value;
    }

    return minimumBarMinusOne;
  }, null);

  return minimumBarMinusOne;
}

},{"../token/nonSignificant/comment/endOf":19,"../token/nonSignificant/comment/middleOf":20,"../token/nonSignificant/comment/startOf":21}],29:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tokens = require('../tokens'),
    RegularExpression = require('../token/significant/regularExpression');

var RegularExpressions = function () {
  function RegularExpressions() {
    _classCallCheck(this, RegularExpressions);
  }

  _createClass(RegularExpressions, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line) {
      Tokens.pass(tokensOrContents, line, RegularExpression);
    }
  }]);

  return RegularExpressions;
}();

module.exports = RegularExpressions;

},{"../token/significant/regularExpression":24,"../tokens":27}],30:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignificantTokens = function () {
  function SignificantTokens() {
    _classCallCheck(this, SignificantTokens);
  }

  _createClass(SignificantTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line, rules) {
      var tokens = tokensOrContents.reduce(function (tokens, tokenOrRemainingContent) {
        if (typeof tokenOrRemainingContent === 'string') {
          var content = tokenOrRemainingContent,
              ///
          depth = 0,
              significantTokens = significantTokensFromWithinContentAndLine(content, line, rules, depth);

          tokens = tokens.concat(significantTokens);
        } else {
          var nonSignificantToken = tokenOrRemainingContent; ///

          tokens.push(nonSignificantToken);
        }

        return tokens;
      }, []);

      return tokens;
    }
  }]);

  return SignificantTokens;
}();

module.exports = SignificantTokens;

function significantTokensFromWithinContentAndLine(content, line, rules, depth) {
  var significantTokens = [];

  if (content !== '') {
    var rule = rules.getRule(depth);

    if (rule !== null) {
      var nextDepth = depth + 1,
          significantTokenPositionWithinContent = rule.significantTokenPositionWithinContent(content);

      if (significantTokenPositionWithinContent === -1) {
        significantTokens = significantTokensFromWithinContentAndLine(content, line, rules, nextDepth);
      } else {
        var significantToken = rule.significantTokenFromWithinContentAndLine(content, line),
            significantTokenLength = significantToken.getLength(),
            left = significantTokenPositionWithinContent,
            ///
        right = significantTokenPositionWithinContent + significantTokenLength,
            ///
        leftContent = content.substring(0, left),
            rightContent = content.substring(right),
            leftSignificantTokens = significantTokensFromWithinContentAndLine(leftContent, line, rules, nextDepth),
            rightSignificantTokens = significantTokensFromWithinContentAndLine(rightContent, line, rules, depth);

        significantTokens = [].concat(leftSignificantTokens).concat(significantToken).concat(rightSignificantTokens);
      }
    } else {
      throw new Error('There is no rule to parse the content \'' + content + '\'.');
    }
  }

  return significantTokens;
}

},{}],31:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tokens = require('../tokens'),
    StringLiteralToken = require('../token/significant/stringLiteral');

var StringLiteralTokens = function () {
  function StringLiteralTokens() {
    _classCallCheck(this, StringLiteralTokens);
  }

  _createClass(StringLiteralTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line) {
      Tokens.pass(tokensOrContents, line, StringLiteralToken);
    }
  }]);

  return StringLiteralTokens;
}();

module.exports = StringLiteralTokens;

},{"../token/significant/stringLiteral":25,"../tokens":27}],32:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tokens = require('../tokens'),
    WhitespaceToken = require('../token/significant/whitespace');

var WhitespaceTokens = function () {
  function WhitespaceTokens() {
    _classCallCheck(this, WhitespaceTokens);
  }

  _createClass(WhitespaceTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line) {
      Tokens.pass(tokensOrContents, line, WhitespaceToken);
    }
  }]);

  return WhitespaceTokens;
}();

module.exports = WhitespaceTokens;

},{"../token/significant/whitespace":26,"../tokens":27}],33:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easylayout = require('easy-layout');

var Textarea = easy.Textarea,
    SizeableElement = easylayout.SizeableElement,
    VerticalSplitter = easylayout.VerticalSplitter;


var verticalSplitterSelector = '#verticalSplitter',
    sizeableElementSelector = '#sizeableElement',
    entriesTextareaSelector = 'textArea#entries',
    contentTextareaSelector = 'textArea#content',
    tokensTextareaSelector = 'textArea#tokens',
    sizeableElement = new SizeableElement(sizeableElementSelector),
    entriesTextarea = new Textarea(entriesTextareaSelector),
    contentTextarea = new Textarea(contentTextareaSelector),
    tokensTextarea = new Textarea(tokensTextareaSelector),
    beforeSizeableElement = false,
    afterSizeableElement = true;

new VerticalSplitter(verticalSplitterSelector, beforeSizeableElement, afterSizeableElement);

var Example = function () {
  function Example() {
    _classCallCheck(this, Example);
  }

  _createClass(Example, null, [{
    key: 'run',
    value: function run(entries, Lexer) {
      var entriesTextAreaValue = JSON.stringify(entries, null, '  ');

      entriesTextarea.setValue(entriesTextAreaValue);

      entriesTextarea.on('keyup', function () {
        Example.updateTokens(Lexer);
      });

      contentTextarea.on('keyup', function () {
        Example.updateTokens(Lexer);
      });
    }
  }, {
    key: 'updateTokens',
    value: function updateTokens(Lexer) {
      try {
        var entriesTextareaValue = entriesTextarea.getValue(),
            contentTextareaValue = contentTextarea.getValue(),
            entries = JSON.parse(entriesTextareaValue),
            lexer = Lexer.fromEntries(entries),
            content = contentTextareaValue,
            ///
        lines = lexer.linesFromContent(content),
            htmls = lines.reduce(function (htmls, line, index) {
          var filePath = null,
              ///
          lineHTML = line.asHTML(filePath),
              lineNumber = index + 1,
              html = lineNumber + ': ' + lineHTML;

          htmls += html;

          return htmls;
        }, ''),
            tokensTextareaHTML = htmls; ///

        tokensTextarea.html(tokensTextareaHTML);

        contentTextarea.removeClass('error');
      } catch (error) {
        contentTextarea.addClass('error');

        Example.clearTokens();
      }
    }
  }, {
    key: 'clearTokens',
    value: function clearTokens() {
      var tokensTextareaHTML = '';

      tokensTextarea.html(tokensTextareaHTML);
    }
  }]);

  return Example;
}();

module.exports = Example;

},{"easy":52,"easy-layout":45}],34:[function(require,module,exports){
'use strict';

module.exports = {
  BNFExample: require('./examples/bnf'),
  BasicExample: require('./examples/basic'),
  FlorenceExample: require('./examples/florence')
};

},{"./examples/basic":35,"./examples/bnf":36,"./examples/florence":37}],35:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Example = require('../example'),
    BasicLexer = require('../basic/lexer');

var BasicExample = function () {
  function BasicExample() {
    _classCallCheck(this, BasicExample);
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      var entries = BasicLexer.entries,
          Lexer = BasicLexer;

      Example.run(entries, Lexer);
    }
  }]);

  return BasicExample;
}();

module.exports = BasicExample;

},{"../basic/lexer":2,"../example":33}],36:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Example = require('../example'),
    BNFLexer = require('../bnf/lexer');

var BNFExample = function () {
  function BNFExample() {
    _classCallCheck(this, BNFExample);
  }

  _createClass(BNFExample, null, [{
    key: 'run',
    value: function run() {
      var entries = BNFLexer.entries,
          Lexer = BNFLexer;

      Example.run(entries, Lexer);
    }
  }]);

  return BNFExample;
}();

module.exports = BNFExample;

},{"../bnf/lexer":8,"../example":33}],37:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Example = require('../example'),
    FlorenceLexer = require('../florence/lexer');

var FlorenceExample = function () {
  function FlorenceExample() {
    _classCallCheck(this, FlorenceExample);
  }

  _createClass(FlorenceExample, null, [{
    key: 'run',
    value: function run() {
      var entries = FlorenceLexer.entries,
          Lexer = FlorenceLexer;

      Example.run(entries, Lexer);
    }
  }]);

  return FlorenceExample;
}();

module.exports = FlorenceExample;

},{"../example":33,"../florence/lexer":39}],38:[function(require,module,exports){
'use strict';

var entries = [{ "special": ",|;|⊢|=|::|:|\\[|\\]|\\{|\\}|\\(|\\)|\\.\\.\\.|\\.\\." }, { "keyword": "^(?:Rule|Axiom|Theorem|Lemma|Metalemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|Types|Type|Variables|Variable|Contexts|Context|Constructors|Constructor|DependentTypes|DependentType|QualifiedMetavariables|QualifiedMetavariable|Metavariables|Metavariable|Abbreviations|Abbreviation|Object|Definition|for|let|from|by)$" }, { "unassigned": "^.*$" }];

module.exports = entries;

},{}],39:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    FlorenceLine = require('../florence/line'),
    CommonLexer = require('../common/lexer');

var FlorenceLexer = function (_CommonLexer) {
  _inherits(FlorenceLexer, _CommonLexer);

  function FlorenceLexer() {
    _classCallCheck(this, FlorenceLexer);

    return _possibleConstructorReturn(this, (FlorenceLexer.__proto__ || Object.getPrototypeOf(FlorenceLexer)).apply(this, arguments));
  }

  _createClass(FlorenceLexer, null, [{
    key: 'fromCombinedCustomGrammarsLexicalPattern',
    value: function fromCombinedCustomGrammarsLexicalPattern(combinedCustomGrammarsLexicalPattern) {
      var custom = combinedCustomGrammarsLexicalPattern,
          ///
      customGrammarEntry = {
        custom: custom
      },
          customGrammarRule = CommonLexer.ruleFromEntry(customGrammarEntry),
          rules = CommonLexer.rulesFromEntries(entries);

      rules.addRule(customGrammarRule);

      var florenceLexer = new FlorenceLexer(rules, FlorenceLine);

      return florenceLexer;
    }
  }, {
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var rules = CommonLexer.rulesFromEntries(entries),
          florenceLexer = new FlorenceLexer(rules, FlorenceLine);

      return florenceLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var florenceLexer = FlorenceLexer.fromEntries(entries);

      return florenceLexer;
    }
  }]);

  return FlorenceLexer;
}(CommonLexer);

Object.assign(FlorenceLexer, {
  entries: entries
});

module.exports = FlorenceLexer;

},{"../common/lexer":13,"../florence/line":40,"./entries":38}],40:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    CommentTokens = require('../common/tokens/comment'),
    WhitespaceTokens = require('../common/tokens/whitespace'),
    StringLiteralTokens = require('../common/tokens/stringLiteral'),
    RegularExpressionTokens = require('./tokens/regularExpression'),
    EndOfLineToken = require('../common/token/significant/endOfLine');

var FlorenceLine = function (_CommonLine) {
    _inherits(FlorenceLine, _CommonLine);

    function FlorenceLine() {
        _classCallCheck(this, FlorenceLine);

        return _possibleConstructorReturn(this, (FlorenceLine.__proto__ || Object.getPrototypeOf(FlorenceLine)).apply(this, arguments));
    }

    _createClass(FlorenceLine, [{
        key: 'initialise',
        value: function initialise(CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens) {
            _get(FlorenceLine.prototype.__proto__ || Object.getPrototypeOf(FlorenceLine.prototype), 'initialise', this).call(this, CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens);

            var florenceLine = this,
                ///
            line = florenceLine,
                ///
            tokens = line.getTokens();

            var endOfLineToken = EndOfLineToken.fromLine(line);

            tokens.push(endOfLineToken);

            this.setTokens(tokens);
        }
    }], [{
        key: 'fromContentRulesAndConfiguration',
        value: function fromContentRulesAndConfiguration(content, rules, configuration) {
            var florenceLine = _get(FlorenceLine.__proto__ || Object.getPrototypeOf(FlorenceLine), 'fromContentRulesAndConfiguration', this).call(this, FlorenceLine, content, rules, configuration);

            florenceLine.initialise(CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens);

            return florenceLine;
        }
    }]);

    return FlorenceLine;
}(CommonLine);

module.exports = FlorenceLine;

},{"../common/line":14,"../common/token/significant/endOfLine":23,"../common/tokens/comment":28,"../common/tokens/stringLiteral":31,"../common/tokens/whitespace":32,"./tokens/regularExpression":41}],41:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RegularExpressionTokens = function () {
  function RegularExpressionTokens() {
    _classCallCheck(this, RegularExpressionTokens);
  }

  _createClass(RegularExpressionTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line) {}
  }]);

  return RegularExpressionTokens;
}();

module.exports = RegularExpressionTokens;

},{}],42:[function(require,module,exports){
'use strict';

function sanitiseContent(content) {
  var sanitisedContent = content.replace(/&/, '&amp;').replace(/</, '&lt;').replace(/>/, '&gt;');

  return sanitisedContent;
}

module.exports = {
  sanitiseContent: sanitiseContent
};

},{}],43:[function(require,module,exports){
'use strict';

function significantTokensFromLines(lines) {
  var tokens = lines.reduce(function (tokens, line) {
    var lineTokens = line.getTokens();

    tokens = tokens.concat(lineTokens);

    return tokens;
  }, []),
      significantTokens = tokens.reduce(function (significantTokens, token) {
    var tokenSignificantToken = token.isSignificantToken();

    if (tokenSignificantToken) {
      var significantToken = token; ///

      significantTokens.push(significantToken);
    }

    return significantTokens;
  }, []);

  return significantTokens;
}

module.exports = {
  significantTokensFromLines: significantTokensFromLines
};

},{}],44:[function(require,module,exports){

},{}],45:[function(require,module,exports){
'use strict';

module.exports = {
  options: require('./lib/options'),
  SizeableElement: require('./lib/sizeableElement'),
  VerticalSplitter: require('./lib/splitter/vertical'),
  HorizontalSplitter: require('./lib/splitter/horizontal')
};

},{"./lib/options":47,"./lib/sizeableElement":48,"./lib/splitter/horizontal":50,"./lib/splitter/vertical":51}],46:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy');

var Body = easy.Body;


var body = new Body();

var previousCursor = void 0; ///

var cursor = function () {
  function cursor() {
    _classCallCheck(this, cursor);
  }

  _createClass(cursor, null, [{
    key: 'columnResize',
    value: function columnResize() {
      var currentCursor = this.getCurrentCursor();

      if (currentCursor !== 'col-resize') {
        previousCursor = currentCursor;

        this.setCursor('col-resize');
      }
    }
  }, {
    key: 'rowResize',
    value: function rowResize() {
      var currentCursor = this.getCurrentCursor();

      if (currentCursor !== 'row-resize') {
        previousCursor = currentCursor;

        this.setCursor('row-resize');
      }
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.setCursor(previousCursor); ///
    }
  }, {
    key: 'getCurrentCursor',
    value: function getCurrentCursor() {
      var currentCursor = body.css('cursor'); ///

      return currentCursor || 'auto'; ///
    }
  }, {
    key: 'setCursor',
    value: function setCursor(cursor) {
      var css = {
        cursor: cursor
      };

      body.css(css);
    }
  }]);

  return cursor;
}();

module.exports = cursor;

},{"easy":52}],47:[function(require,module,exports){
'use strict';

var options = {
  ESCAPE_KEY_STOPS_DRAGGING: 'ESCAPE_KEY_STOPS_DRAGGING'
};

module.exports = options;

},{}],48:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var Element = easy.Element;

var SizeableElement = function (_Element) {
  _inherits(SizeableElement, _Element);

  function SizeableElement() {
    _classCallCheck(this, SizeableElement);

    return _possibleConstructorReturn(this, (SizeableElement.__proto__ || Object.getPrototypeOf(SizeableElement)).apply(this, arguments));
  }

  _createClass(SizeableElement, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(SizeableElement, properties);
    }
  }]);

  return SizeableElement;
}(Element);

Object.assign(SizeableElement, {
  tagName: 'div',
  defaultProperties: {
    className: 'sizeable'
  }
});

module.exports = SizeableElement;

},{"easy":52}],49:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var options = require('./options');

var ESCAPE_KEYCODE = 27;

var ESCAPE_KEY_STOPS_DRAGGING = options.ESCAPE_KEY_STOPS_DRAGGING,
    window = easy.window,
    Element = easy.Element;

var Splitter = function (_Element) {
  _inherits(Splitter, _Element);

  function Splitter(selector, beforeSizeableElement, afterSizeableElement) {
    var startDraggingHandler = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var stopDraggingHandler = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
    var dragHandler = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function () {};
    var options = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};

    _classCallCheck(this, Splitter);

    var _this = _possibleConstructorReturn(this, (Splitter.__proto__ || Object.getPrototypeOf(Splitter)).call(this, selector));

    _this.beforeSizeableElement = beforeSizeableElement;
    _this.afterSizeableElement = afterSizeableElement;

    _this.startDraggingHandler = startDraggingHandler;
    _this.stopDraggingHandler = stopDraggingHandler;
    _this.dragHandler = dragHandler;

    _this.options = options;
    return _this;
  }

  _createClass(Splitter, [{
    key: 'isBeforeSizeableElement',
    value: function isBeforeSizeableElement() {
      return this.beforeSizeableElement;
    }
  }, {
    key: 'isAfterSizeableElement',
    value: function isAfterSizeableElement() {
      return this.afterSizeableElement;
    }
  }, {
    key: 'getDragHandler',
    value: function getDragHandler() {
      return this.dragHandler;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      var disabled = this.hasClass('disabled');

      return disabled;
    }
  }, {
    key: 'isDragging',
    value: function isDragging() {
      var dragging = this.hasClass('dragging');

      return dragging;
    }
  }, {
    key: 'getDirection',
    value: function getDirection() {
      var direction = void 0;

      if (this.beforeSizeableElement) {
        direction = +1;
      }

      if (this.afterSizeableElement) {
        direction = -1;
      }

      return direction;
    }
  }, {
    key: 'getSizeableElement',
    value: function getSizeableElement() {
      var sizeableElement = void 0;

      var direction = this.getDirection();

      switch (direction) {
        case -1:
          sizeableElement = this.getPreviousSiblingElement(); ///
          break;

        case +1:
          sizeableElement = this.getNextSiblingElement(); ///
          break;
      }

      return sizeableElement;
    }
  }, {
    key: 'isOptionPresent',
    value: function isOptionPresent(option) {
      var optionPresent = this.options[option] === true; ///

      return optionPresent;
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      this.options = options;
    }
  }, {
    key: 'setOption',
    value: function setOption(option) {
      this.options[option] = true;
    }
  }, {
    key: 'unsetOption',
    value: function unsetOption(option) {
      delete this.options[option];
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.removeClass('disabled');
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.addClass('disabled');
    }
  }, {
    key: 'startDragging',
    value: function startDragging() {
      var escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDraggingOptionPresent) {
        window.onKeyDown(this.keyDownHandler, this);
      }

      this.addClass('dragging');

      this.startDraggingHandler();
    }
  }, {
    key: 'stopDragging',
    value: function stopDragging() {
      var escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDraggingOptionPresent) {
        window.offKeyDown(this.keyDownHandler, this);
      }

      this.removeClass('dragging');

      this.stopDraggingHandler();
    }
  }, {
    key: 'onDrag',
    value: function onDrag(dragHandler) {
      this.dragHandler = dragHandler;
    }
  }, {
    key: 'keyDownHandler',
    value: function keyDownHandler(keyCode) {
      if (keyCode === ESCAPE_KEYCODE) {
        var dragging = this.isDragging();

        if (dragging) {
          this.stopDragging();
        }
      }
    }
  }, {
    key: 'initialise',
    value: function initialise(disabled) {
      disabled === true ? ///
      this.disable() : this.enable();

      window.on('mouseup blur', this.mouseUp.bind(this)); ///

      window.onMouseMove(this.mouseMove.bind(this));

      this.onMouseDown(this.mouseDown.bind(this));
      this.onMouseOver(this.mouseOver.bind(this));
      this.onMouseOut(this.mouseOut.bind(this));
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var beforeSizeableElement = properties.beforeSizeableElement,
          afterSizeableElement = properties.afterSizeableElement,
          onStartDragging = properties.onStartDragging,
          onStopDragging = properties.onStopDragging,
          onDrag = properties.onDrag,
          options = properties.options,
          disabled = properties.disabled,
          startDraggingHandler = onStartDragging,
          stopDraggingHandler = onStopDragging,
          dragHandler = onDrag,
          splitter = Element.fromProperties(Class, properties, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options);


      splitter.initialise(disabled);

      return splitter;
    }
  }]);

  return Splitter;
}(Element);

Object.assign(Splitter, {
  tagName: 'div',
  ignoredProperties: ['beforeSizeableElement', 'afterSizeableElement', 'onStartDragging', 'onStopDragging', 'onDrag', 'options', 'disabled']
});

module.exports = Splitter;

},{"./options":47,"easy":52}],50:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('../cursor'),
    Splitter = require('../splitter');

var HorizontalSplitter = function (_Splitter) {
  _inherits(HorizontalSplitter, _Splitter);

  function HorizontalSplitter(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options) {
    _classCallCheck(this, HorizontalSplitter);

    var _this = _possibleConstructorReturn(this, (HorizontalSplitter.__proto__ || Object.getPrototypeOf(HorizontalSplitter)).call(this, selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options));

    _this.setInitialState();
    return _this;
  }

  _createClass(HorizontalSplitter, [{
    key: 'mouseUp',
    value: function mouseUp() {
      var disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (dragging) {
          this.stopDragging();
        }

        cursor.reset();
      }
    }
  }, {
    key: 'mouseMove',
    value: function mouseMove(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (dragging) {
          var direction = this.getDirection(),
              dragHandler = this.getDragHandler(),
              sizeableElement = this.getSizeableElement(),
              previousMouseTop = this.getPreviousMouseTop(),
              previousSizeableElementHeight = this.getPreviousSizeableElementHeight(),
              relativeMouseTop = mouseTop - previousMouseTop;

          var sizeableElementHeight = previousSizeableElementHeight - direction * relativeMouseTop;

          var height = sizeableElementHeight + 'px';

          sizeableElement.setHeight(height);

          sizeableElementHeight = sizeableElement.getHeight(); ///

          dragHandler(sizeableElementHeight);
        }
      }
    }
  }, {
    key: 'mouseDown',
    value: function mouseDown(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var previousMouseTop = mouseTop,
            ///
        dragging = this.isDragging(),
            sizeableElement = this.getSizeableElement(),
            sizeableElementHeight = sizeableElement.getHeight(),
            previousSizeableElementHeight = sizeableElementHeight; /// 

        this.setPreviousMouseTop(previousMouseTop);

        this.setPreviousSizeableElementHeight(previousSizeableElementHeight);

        if (!dragging) {
          this.startDragging();
        }

        cursor.rowResize();
      }
    }
  }, {
    key: 'mouseOver',
    value: function mouseOver() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.rowResize();
      }
    }
  }, {
    key: 'mouseOut',
    value: function mouseOut() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.reset();
      }
    }
  }, {
    key: 'getPreviousMouseTop',
    value: function getPreviousMouseTop() {
      return this.fromState('previousMouseTop');
    }
  }, {
    key: 'getPreviousSizeableElementHeight',
    value: function getPreviousSizeableElementHeight() {
      return this.fromState('previousSizeableElementHeight');
    }
  }, {
    key: 'setPreviousMouseTop',
    value: function setPreviousMouseTop(previousMouseTop) {
      this.updateState({
        previousMouseTop: previousMouseTop
      });
    }
  }, {
    key: 'setPreviousSizeableElementHeight',
    value: function setPreviousSizeableElementHeight(previousSizeableElementHeight) {
      this.updateState({
        previousSizeableElementHeight: previousSizeableElementHeight
      });
    }
  }, {
    key: 'setInitialState',
    value: function setInitialState() {
      var previousMouseTop = null,
          previousSizeableElementHeight = null;

      this.setState({
        previousMouseTop: previousMouseTop,
        previousSizeableElementHeight: previousSizeableElementHeight
      });
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Splitter.fromProperties(HorizontalSplitter, properties);
    }
  }]);

  return HorizontalSplitter;
}(Splitter);

Object.assign(HorizontalSplitter, {
  defaultProperties: {
    className: 'horizontal splitter'
  }
});

module.exports = HorizontalSplitter;

},{"../cursor":46,"../splitter":49}],51:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('../cursor'),
    Splitter = require('../splitter');

var VerticalSplitter = function (_Splitter) {
  _inherits(VerticalSplitter, _Splitter);

  function VerticalSplitter(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options) {
    _classCallCheck(this, VerticalSplitter);

    var _this = _possibleConstructorReturn(this, (VerticalSplitter.__proto__ || Object.getPrototypeOf(VerticalSplitter)).call(this, selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options));

    _this.setInitialState();
    return _this;
  }

  _createClass(VerticalSplitter, [{
    key: 'mouseUp',
    value: function mouseUp() {
      var disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (dragging) {
          this.stopDragging();
        }

        cursor.reset();
      }
    }
  }, {
    key: 'mouseMove',
    value: function mouseMove(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (dragging) {
          var direction = this.getDirection(),
              dragHandler = this.getDragHandler(),
              sizeableElement = this.getSizeableElement(),
              previousMouseLeft = this.getPreviousMouseLeft(),
              previousSizeableElementWidth = this.getPreviousSizeableElementWidth(),
              relativeMouseLeft = mouseLeft - previousMouseLeft;

          var sizeableElementWidth = previousSizeableElementWidth - direction * relativeMouseLeft;

          var width = sizeableElementWidth + 'px';

          sizeableElement.setWidth(width);

          sizeableElementWidth = sizeableElement.getWidth(); ///

          dragHandler(sizeableElementWidth);
        }
      }
    }
  }, {
    key: 'mouseDown',
    value: function mouseDown(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var previousMouseLeft = mouseLeft,
            ///
        dragging = this.isDragging(),
            sizeableElement = this.getSizeableElement(),
            sizeableElementWidth = sizeableElement.getWidth(),
            previousSizeableElementWidth = sizeableElementWidth; /// 

        this.setPreviousMouseLeft(previousMouseLeft);

        this.setPreviousSizeableElementWidth(previousSizeableElementWidth);

        if (!dragging) {
          this.startDragging();
        }

        cursor.columnResize();
      }
    }
  }, {
    key: 'mouseOver',
    value: function mouseOver() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.columnResize();
      }
    }
  }, {
    key: 'mouseOut',
    value: function mouseOut() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.reset();
      }
    }
  }, {
    key: 'getPreviousMouseLeft',
    value: function getPreviousMouseLeft() {
      return this.fromState('previousMouseLeft');
    }
  }, {
    key: 'getPreviousSizeableElementWidth',
    value: function getPreviousSizeableElementWidth() {
      return this.fromState('previousSizeableElementWidth');
    }
  }, {
    key: 'setPreviousMouseLeft',
    value: function setPreviousMouseLeft(previousMouseLeft) {
      this.updateState({
        previousMouseLeft: previousMouseLeft
      });
    }
  }, {
    key: 'setPreviousSizeableElementWidth',
    value: function setPreviousSizeableElementWidth(previousSizeableElementWidth) {
      this.updateState({
        previousSizeableElementWidth: previousSizeableElementWidth
      });
    }
  }, {
    key: 'setInitialState',
    value: function setInitialState() {
      var previousMouseLeft = null,
          previousSizeableElementWidth = null;

      this.setState({
        previousMouseLeft: previousMouseLeft,
        previousSizeableElementWidth: previousSizeableElementWidth
      });
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Splitter.fromProperties(VerticalSplitter, properties);
    }
  }]);

  return VerticalSplitter;
}(Splitter);

Object.assign(VerticalSplitter, {
  defaultProperties: {
    className: 'vertical splitter'
  }
});

module.exports = VerticalSplitter;

},{"../cursor":46,"../splitter":49}],52:[function(require,module,exports){
'use strict';

module.exports = {
  window: require('./lib/window'),
  document: require('./lib/document'),
  Div: require('./lib/element/div'),
  Span: require('./lib/element/span'),
  Body: require('./lib/element/body'),
  Link: require('./lib/element/link'),
  Select: require('./lib/element/select'),
  Button: require('./lib/element/button'),
  Checkbox: require('./lib/element/checkbox'),
  Element: require('./lib/element'),
  TextElement: require('./lib/textElement'),
  Input: require('./lib/inputElement/input'),
  Textarea: require('./lib/inputElement/textarea'),
  InputElement: require('./lib/inputElement'),
  Bounds: require('./lib/misc/bounds'),
  Offset: require('./lib/misc/offset'),
  React: require('./lib/react')
};

},{"./lib/document":53,"./lib/element":54,"./lib/element/body":55,"./lib/element/button":56,"./lib/element/checkbox":57,"./lib/element/div":58,"./lib/element/link":59,"./lib/element/select":60,"./lib/element/span":61,"./lib/inputElement":62,"./lib/inputElement/input":63,"./lib/inputElement/textarea":64,"./lib/misc/bounds":65,"./lib/misc/offset":66,"./lib/react":74,"./lib/textElement":75,"./lib/window":78}],53:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventMixin = require('./mixin/event'),
    clickMixin = require('./mixin/click'),
    mouseMixin = require('./mixin/mouse'),
    keyMixin = require('./mixin/key');

var Document = function Document() {
  _classCallCheck(this, Document);

  this.domElement = document; ///
};

Object.assign(Document.prototype, eventMixin);
Object.assign(Document.prototype, clickMixin);
Object.assign(Document.prototype, mouseMixin);
Object.assign(Document.prototype, keyMixin);

module.exports = new Document(); ///

},{"./mixin/click":67,"./mixin/event":68,"./mixin/key":70,"./mixin/mouse":71}],54:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Offset = require('./misc/offset'),
    Bounds = require('./misc/bounds'),
    jsxMixin = require('./mixin/jsx'),
    eventMixin = require('./mixin/event'),
    clickMixin = require('./mixin/click'),
    scrollMixin = require('./mixin/scroll'),
    resizeMixin = require('./mixin/resize'),
    mouseMixin = require('./mixin/mouse'),
    keyMixin = require('./mixin/key'),
    domUtilities = require('./utilities/dom'),
    objectUtilities = require('./utilities/object');

var arrayUtilities = necessary.arrayUtilities,
    combine = objectUtilities.combine,
    first = arrayUtilities.first,
    augment = arrayUtilities.augment,
    domNodeMatchesSelector = domUtilities.domNodeMatchesSelector,
    domElementFromSelector = domUtilities.domElementFromSelector,
    elementsFromDOMElements = domUtilities.elementsFromDOMElements,
    filterDOMNodesBySelector = domUtilities.filterDOMNodesBySelector,
    descendantDOMNodesFromDOMNode = domUtilities.descendantDOMNodesFromDOMNode;

var Element = function () {
  function Element(selector) {
    _classCallCheck(this, Element);

    this.domElement = domElementFromSelector(selector);

    this.domElement.__element__ = this; ///
  }

  _createClass(Element, [{
    key: 'clone',
    value: function clone() {
      return Element.clone(this);
    }
  }, {
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: 'getOffset',
    value: function getOffset() {
      var top = this.domElement.offsetTop,
          ///
      left = this.domElement.offsetLeft,
          ///
      offset = new Offset(top, left);

      return offset;
    }
  }, {
    key: 'getBounds',
    value: function getBounds() {
      var boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = Bounds.fromBoundingClientRect(boundingClientRect);

      return bounds;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var width = includeBorder ? this.domElement.offsetWidth : this.domElement.clientWidth;

      return width;
    }
  }, {
    key: 'setWidth',
    value: function setWidth(width) {
      this.style('width', width);
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var height = includeBorder ? this.domElement.offsetHeight : this.domElement.clientHeight;

      return height;
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      this.style('height', height);
    }
  }, {
    key: 'hasAttribute',
    value: function hasAttribute(name) {
      return this.domElement.hasAttribute(name);
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(name) {
      return this.domElement.getAttribute(name);
    }
  }, {
    key: 'setAttribute',
    value: function setAttribute(name, value) {
      this.domElement.setAttribute(name, value);
    }
  }, {
    key: 'clearAttribute',
    value: function clearAttribute(name) {
      this.domElement.removeAttribute(name);
    }
  }, {
    key: 'addAttribute',
    value: function addAttribute(name, value) {
      this.setAttribute(name, value);
    }
  }, {
    key: 'removeAttribute',
    value: function removeAttribute(name) {
      this.clearAttribute(name);
    }
  }, {
    key: 'setClass',
    value: function setClass(className) {
      this.domElement.className = className;
    }
  }, {
    key: 'addClass',
    value: function addClass(className) {
      this.domElement.classList.add(className);
    }
  }, {
    key: 'removeClass',
    value: function removeClass(className) {
      this.domElement.classList.remove(className);
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(className) {
      this.domElement.classList.toggle(className);
    }
  }, {
    key: 'hasClass',
    value: function hasClass(className) {
      return this.domElement.classList.contains(className);
    }
  }, {
    key: 'clearClasses',
    value: function clearClasses() {
      this.domElement.className = '';
    }
  }, {
    key: 'prependTo',
    value: function prependTo(parentElement) {
      parentElement.prepend(this);
    }
  }, {
    key: 'appendTo',
    value: function appendTo(parentElement) {
      parentElement.append(this);
    }
  }, {
    key: 'addTo',
    value: function addTo(parentElement) {
      parentElement.add(this);
    }
  }, {
    key: 'removeFrom',
    value: function removeFrom(parentElement) {
      parentElement.remove(this);
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;

      parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
    }
  }, {
    key: 'insertAfter',
    value: function insertAfter(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;

      parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling); ///
    }
  }, {
    key: 'prepend',
    value: function prepend(element) {
      var domElement = element.domElement,
          firstChildDOMElement = this.domElement.firstChild;

      this.domElement.insertBefore(domElement, firstChildDOMElement);
    }
  }, {
    key: 'append',
    value: function append(element) {
      var domElement = element.domElement;

      this.domElement.insertBefore(domElement, null); ///
    }
  }, {
    key: 'add',
    value: function add(element) {
      this.append(element);
    }
  }, {
    key: 'remove',
    value: function remove(element) {
      if (element) {
        var domElement = element.domElement;

        this.domElement.removeChild(domElement);
      } else {
        this.domElement.remove();
      }
    }
  }, {
    key: 'show',
    value: function show() {
      var displayStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'block';
      this.display(displayStyle);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.style('display', 'none');
    }
  }, {
    key: 'display',
    value: function display(_display) {
      this.style('display', _display);
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.clearAttribute('disabled');
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.setAttribute('disabled', 'disabled');
    }
  }, {
    key: 'isEnabled',
    value: function isEnabled() {
      var disabled = this.isDisabled(),
          enabled = !disabled;

      return enabled;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      var disabled = this.hasAttribute('disabled');

      return disabled;
    }
  }, {
    key: 'isDisplayed',
    value: function isDisplayed() {
      var display = this.style('display'),
          displayed = display !== 'none';

      return displayed;
    }
  }, {
    key: 'style',
    value: function style(name, value) {
      if (value !== undefined) {
        this.domElement.style[name] = value;
      } else {
        var style = this.domElement.style[name];

        return style;
      }
    }
  }, {
    key: 'html',
    value: function html(_html) {
      if (_html === undefined) {
        var innerHTML = this.domElement.innerHTML;

        _html = innerHTML; ///

        return _html;
      } else {
        var _innerHTML = _html; ///

        this.domElement.innerHTML = _innerHTML;
      }
    }
  }, {
    key: 'css',
    value: function css(_css) {
      if (_css === undefined) {
        var computedStyle = getComputedStyle(this.domElement),
            css = {};

        for (var index = 0; index < computedStyle.length; index++) {
          var name = computedStyle[0],
              ///
          value = computedStyle.getPropertyValue(name); ///

          css[name] = value;
        }

        return css;
      } else if (typeof _css === 'string') {
        var _name = _css; ///

        var _computedStyle = getComputedStyle(this.domElement),
            _value = _computedStyle.getPropertyValue(_name); ///

        _css = _value; ///

        return _css;
      } else {
        var names = Object.keys(_css); ///

        names.forEach(function (name) {
          var value = _css[name];

          this.style(name, value);
        }.bind(this));
      }
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.domElement.blur();
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.domElement.focus();
    }
  }, {
    key: 'hasFocus',
    value: function hasFocus() {
      var focus = document.activeElement === this.domElement; ///

      return focus;
    }
  }, {
    key: 'getDescendantElements',
    value: function getDescendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var domNode = this.domElement,
          ///
      descendantDOMNodes = descendantDOMNodesFromDOMNode(domNode),
          descendantDOMElements = filterDOMNodesBySelector(descendantDOMNodes, selector),
          descendantElements = elementsFromDOMElements(descendantDOMElements);

      return descendantElements;
    }
  }, {
    key: 'getChildElements',
    value: function getChildElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var childDOMNodes = this.domElement.childNodes,
          childDOMElements = filterDOMNodesBySelector(childDOMNodes, selector),
          childElements = elementsFromDOMElements(childDOMElements);

      return childElements;
    }
  }, {
    key: 'getParentElement',
    value: function getParentElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var parentElement = null;

      var parentDOMElement = this.domElement.parentElement;

      if (parentDOMElement !== null) {
        if (parentDOMElement.matches(selector)) {
          var parentDOMElements = [parentDOMElement],
              parentElements = elementsFromDOMElements(parentDOMElements),
              firstParentElement = first(parentElements);

          parentElement = firstParentElement || null;
        }
      }

      return parentElement;
    }
  }, {
    key: 'getAscendantElements',
    value: function getAscendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var ascendantDOMElements = [],
          parentDOMElement = this.domElement.parentElement;

      var ascendantDOMElement = parentDOMElement; ///
      while (ascendantDOMElement !== null) {
        if (ascendantDOMElement.matches(selector)) {
          ascendantDOMElements.push(ascendantDOMElement);
        }

        ascendantDOMElement = ascendantDOMElement.parentElement;
      }

      var ascendantElements = elementsFromDOMElements(ascendantDOMElements);

      return ascendantElements;
    }
  }, {
    key: 'getPreviousSiblingElement',
    value: function getPreviousSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var previousSiblingElement = null;

      var previousSiblingDOMNode = this.domElement.previousSibling; ///

      if (previousSiblingDOMNode !== null && domNodeMatchesSelector(previousSiblingDOMNode, selector)) {
        previousSiblingElement = previousSiblingDOMNode.__element__ || null;
      }

      return previousSiblingElement;
    }
  }, {
    key: 'getNextSiblingElement',
    value: function getNextSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var nextSiblingElement = null;

      var nextSiblingDOMNode = this.domElement.nextSibling;

      if (nextSiblingDOMNode !== null && domNodeMatchesSelector(nextSiblingDOMNode, selector)) {
        nextSiblingElement = nextSiblingDOMNode.__element__ || null;
      }

      return nextSiblingElement;
    }
  }], [{
    key: 'clone',
    value: function clone(Class, element) {
      var deep = true,
          domElement = element.domElement.cloneNode(deep);

      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      remainingArguments.unshift(domElement);
      remainingArguments.unshift(null);

      return new (Function.prototype.bind.apply(Class, remainingArguments))();
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(Class, html) {
      var outerDOMElement = document.createElement('div');

      outerDOMElement.innerHTML = html; ///

      var domElement = outerDOMElement.firstChild;

      for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      remainingArguments.unshift(domElement);
      remainingArguments.unshift(null);

      return new (Function.prototype.bind.apply(Class, remainingArguments))();
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(Class, domElement) {
      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      remainingArguments.unshift(domElement);
      remainingArguments.unshift(null);

      return new (Function.prototype.bind.apply(Class, remainingArguments))();
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len4 = arguments.length, remainingArguments = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 2] = arguments[_key4];
      }

      var tagName = Class.tagName,
          html = '<' + tagName + ' />',
          element = Element.fromHTML.apply(Element, [Class, html].concat(remainingArguments)),
          defaultProperties = defaultPropertiesFromClass(Class),
          ignoredProperties = ignoredPropertiesFromClass(Class);

      element.applyProperties(properties, defaultProperties, ignoredProperties);

      return element;
    }
  }, {
    key: 'fromString',
    value: function fromString(string, properties) {
      for (var _len5 = arguments.length, remainingArguments = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
        remainingArguments[_key5 - 2] = arguments[_key5];
      }

      var tagName = string,
          ///
      html = '<' + tagName + ' />',
          element = Element.fromHTML.apply(Element, [Element, html].concat(remainingArguments)),
          defaultProperties = {},
          ///
      ignoredProperties = []; ///

      element.applyProperties(properties, defaultProperties, ignoredProperties);

      return element;
    }
  }]);

  return Element;
}();

Object.assign(Element.prototype, jsxMixin);
Object.assign(Element.prototype, eventMixin);
Object.assign(Element.prototype, clickMixin);
Object.assign(Element.prototype, scrollMixin);
Object.assign(Element.prototype, resizeMixin);
Object.assign(Element.prototype, mouseMixin);
Object.assign(Element.prototype, keyMixin);

Object.assign(Element, {
  LEFT_MOUSE_BUTTON: 0,
  RIGHT_MOUSE_BUTTON: 2,
  MIDDLE_MOUSE_BUTTON: 1
});

module.exports = Element;

function defaultPropertiesFromClass(Class) {
  var defaultProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  combine(defaultProperties, Class.defaultProperties);

  var superClass = Object.getPrototypeOf(Class);

  if (superClass !== null) {
    defaultPropertiesFromClass(superClass, defaultProperties);
  }

  return defaultProperties;
}

function ignoredPropertiesFromClass(Class) {
  var ignoredProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  augment(ignoredProperties, Class.ignoredProperties || [], function (ignoredProperty) {
    return !ignoredProperties.includes(ignoredProperty);
  });

  var superClass = Object.getPrototypeOf(Class);

  if (superClass !== null) {
    ignoredPropertiesFromClass(superClass, ignoredProperties);
  }

  return ignoredProperties;
}

},{"./misc/bounds":65,"./misc/offset":66,"./mixin/click":67,"./mixin/event":68,"./mixin/jsx":69,"./mixin/key":70,"./mixin/mouse":71,"./mixin/resize":72,"./mixin/scroll":73,"./utilities/dom":76,"./utilities/object":77,"necessary":79}],55:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Body = function (_Element) {
  _inherits(Body, _Element);

  function Body() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';

    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, selector));
  }

  _createClass(Body, [{
    key: 'clone',
    value: function clone() {
      return Body.clone(this);
    }
  }], [{
    key: 'clone',
    value: function clone(element) {
      return Element.clone(Body, element);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html) {
      return Element.fromHTML(Body, html);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      return Element.fromDOMElement(Body, domElement);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(Body, properties);
    }
  }]);

  return Body;
}(Element);

Object.assign(Body, {
  tagName: 'body'
});

module.exports = Body;

},{"../element":54}],56:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Button = function (_Element) {
  _inherits(Button, _Element);

  function Button(selector, clickHandler) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, selector));

    if (clickHandler !== undefined) {
      _this.onClick(clickHandler);
    }
    return _this;
  }

  _createClass(Button, [{
    key: 'clone',
    value: function clone(clickHandler) {
      return Button.clone(this, clickHandler);
    }
  }, {
    key: 'onClick',
    value: function onClick(clickHandler, object) {
      var intermediateClickHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateClickHandler;

      _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'onClick', this).call(this, clickHandler, object, intermediateClickHandler);
    }
  }, {
    key: 'offClick',
    value: function offClick(clickHandler, object) {
      _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'offClick', this).call(this, clickHandler, object);
    }
  }], [{
    key: 'clone',
    value: function clone(element, clickHandler) {
      return Element.clone(Button, element, clickHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, clickHandler) {
      return Element.fromHTML(Button, html, clickHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, clickHandler) {
      return Element.fromDOMElement(Button, domElement, clickHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onClick = properties.onClick,
          clickHandler = onClick,
          button = Element.fromProperties(Button, properties, clickHandler);


      return button;
    }
  }]);

  return Button;
}(Element);

Object.assign(Button, {
  tagName: 'button',
  ignoredProperties: ['onClick']
});

module.exports = Button;

function defaultIntermediateClickHandler(clickHandler, event, targetElement) {
  var mouseButton = event.button;

  clickHandler(mouseButton, event, targetElement);
}

},{"../element":54}],57:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Checkbox = function (_Element) {
  _inherits(Checkbox, _Element);

  function Checkbox(selector, changeHandler, checked) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }

    if (checked !== undefined) {
      _this.check(checked);
    }
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Checkbox.clone(this, changeHandler);
    }
  }, {
    key: 'onChange',
    value: function onChange(changeHandler, object) {
      var intermediateChangeHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateChangeHandler;

      this.on('click', changeHandler, object, intermediateChangeHandler); ///
    }
  }, {
    key: 'offChange',
    value: function offChange(changeHandler, object) {
      this.off('click', changeHandler, object); ///
    }
  }, {
    key: 'check',
    value: function check() {
      var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      checked ? this.setAttribute('checked', 'checked') : this.clearAttribute('checked');
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      var domElement = this.getDOMElement(),
          checked = domElement.checked;

      return checked;
    }
  }, {
    key: 'onResize',
    value: function onResize() {}
  }, {
    key: 'offResize',
    value: function offResize() {}
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return Element.clone(Checkbox, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return Element.fromHTML(Checkbox, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return Element.fromDOMElement(Checkbox, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          checked = properties.checked,
          changeHandler = onChange,
          checkbox = Element.fromProperties(Checkbox, properties, changeHandler, checked);


      return checkbox;
    }
  }]);

  return Checkbox;
}(Element);

Object.assign(Checkbox, {
  tagName: 'input',
  ignoredProperties: ['onChange', 'checked'],
  defaultProperties: {
    type: 'checkbox'
  }
});

module.exports = Checkbox;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  var checkbox = targetElement,
      ///
  checked = checkbox.isChecked();

  changeHandler(checked, event, targetElement);
}

},{"../element":54}],58:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Div = function (_Element) {
  _inherits(Div, _Element);

  function Div(selector) {
    _classCallCheck(this, Div);

    return _possibleConstructorReturn(this, (Div.__proto__ || Object.getPrototypeOf(Div)).call(this, selector));
  }

  _createClass(Div, [{
    key: 'clone',
    value: function clone() {
      return Div.clone(this);
    }
  }], [{
    key: 'clone',
    value: function clone(element) {
      return Element.clone(Div, element);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html) {
      return Element.fromHTML(Div, html);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      return Element.fromDOMElement(Div, domElement);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(Div, properties);
    }
  }]);

  return Div;
}(Element);

Object.assign(Div, {
  tagName: 'div'
});

module.exports = Div;

},{"../element":54}],59:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Link = function (_Element) {
  _inherits(Link, _Element);

  function Link(selector, clickHandler) {
    _classCallCheck(this, Link);

    var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, selector));

    if (clickHandler !== undefined) {
      _this.onClick(clickHandler);
    }
    return _this;
  }

  _createClass(Link, [{
    key: 'clone',
    value: function clone(clickHandler) {
      return Link.clone(this, clickHandler);
    }
  }, {
    key: 'onClick',
    value: function onClick(clickHandler, object) {
      var intermediateClickHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateClickHandler;

      this.on('click', clickHandler, object, intermediateClickHandler);
    }
  }, {
    key: 'offClick',
    value: function offClick(clickHandler, object) {
      this.off('click', clickHandler, object);
    }
  }], [{
    key: 'clone',
    value: function clone(element, clickHandler) {
      return Element.clone(Link, element, clickHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, clickHandler) {
      return Element.fromHTML(Link, html, clickHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, clickHandler) {
      return Element.fromDOMElement(Link, domElement, clickHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onClick = properties.onClick,
          clickHandler = onClick,
          link = Element.fromProperties(Link, properties, clickHandler);


      return link;
    }
  }]);

  return Link;
}(Element);

Object.assign(Link, {
  tagName: 'a',
  ignoredProperties: ['onClick']
});

module.exports = Link;

function defaultIntermediateClickHandler(clickHandler, event, targetElement) {
  var link = targetElement,
      ///
  href = link.getAttribute('href');

  clickHandler(href, event, targetElement);
}

},{"../element":54}],60:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Select = function (_Element) {
  _inherits(Select, _Element);

  function Select(selector, changeHandler) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(Select, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Select.clone(this, changeHandler);
    }
  }, {
    key: 'onChange',
    value: function onChange(changeHandler, object) {
      var intermediateChangeHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateChangeHandler;

      this.on('change', changeHandler, object, intermediateChangeHandler);
    }
  }, {
    key: 'offChange',
    value: function offChange(changeHandler, object) {
      this.off('change', changeHandler, object);
    }
  }, {
    key: 'getSelectedOptionValue',
    value: function getSelectedOptionValue() {
      var domElement = this.getDOMElement(),
          selectedOptionValue = domElement.value; ///

      return selectedOptionValue;
    }
  }, {
    key: 'setSelectedOptionByValue',
    value: function setSelectedOptionByValue(selectedOptionValue) {
      var value = selectedOptionValue,
          ///
      domElement = this.getDOMElement();

      domElement.value = value;
    }
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return Element.clone(Select, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return Element.fromHTML(Select, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return Element.fromDOMElement(Select, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          changeHandler = onChange,
          select = Element.fromProperties(Select, properties, changeHandler);


      return select;
    }
  }]);

  return Select;
}(Element);

Object.assign(Select, {
  tagName: 'select',
  ignoredProperties: ['onChange']
});

module.exports = Select;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  var select = targetElement,
      ///
  selectedOptionValue = select.getSelectedOptionValue();

  changeHandler(selectedOptionValue, event, targetElement);
}

},{"../element":54}],61:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Span = function (_Element) {
  _inherits(Span, _Element);

  function Span() {
    _classCallCheck(this, Span);

    return _possibleConstructorReturn(this, (Span.__proto__ || Object.getPrototypeOf(Span)).apply(this, arguments));
  }

  _createClass(Span, [{
    key: 'clone',
    value: function clone() {
      return Span.clone(this);
    }
  }, {
    key: 'onResize',
    value: function onResize() {}
  }, {
    key: 'offResize',
    value: function offResize() {}
  }], [{
    key: 'clone',
    value: function clone(element) {
      return Element.clone(Span, element);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html) {
      return Element.fromHTML(Span, html);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      return Element.fromDOMElement(Span, domElement);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(properties);
    }
  }]);

  return Span;
}(Element);

Object.assign(Span, {
  tagName: 'span'
});

module.exports = Span;

},{"../element":54}],62:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var InputElement = function (_Element) {
  _inherits(InputElement, _Element);

  function InputElement(selector, changeHandler) {
    _classCallCheck(this, InputElement);

    var _this = _possibleConstructorReturn(this, (InputElement.__proto__ || Object.getPrototypeOf(InputElement)).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(InputElement, [{
    key: 'onResize',
    value: function onResize() {}
  }, {
    key: 'offResize',
    value: function offResize() {}
  }, {
    key: 'onChange',
    value: function onChange(changeHandler) {
      var intermediateChangeHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateChangeHandler;

      this.on('change', changeHandler, intermediateChangeHandler);
    }
  }, {
    key: 'offChange',
    value: function offChange(changeHandler) {
      this.off('change', changeHandler);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.domElement.value;
    }
  }, {
    key: 'getSelectionStart',
    value: function getSelectionStart() {
      return this.domElement.selectionStart;
    }
  }, {
    key: 'getSelectionEnd',
    value: function getSelectionEnd() {
      return this.domElement.selectionEnd;
    }
  }, {
    key: 'isReadOnly',
    value: function isReadOnly() {
      return this.domElement.readOnly;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.domElement.value = value;
    }
  }, {
    key: 'setSelectionStart',
    value: function setSelectionStart(selectionStart) {
      this.domElement.selectionStart = selectionStart;
    }
  }, {
    key: 'setSelectionEnd',
    value: function setSelectionEnd(selectionEnd) {
      this.domElement.selectionEnd = selectionEnd;
    }
  }, {
    key: 'setReadOnly',
    value: function setReadOnly(readOnly) {
      this.domElement.readOnly = readOnly;
    }
  }, {
    key: 'select',
    value: function select() {
      this.domElement.select();
    }
  }], [{
    key: 'clone',
    value: function clone(Class, element) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return Element.clone.apply(Element, [Class, element].concat(remainingArguments));
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(Class, html) {
      for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      return Element.fromHTML.apply(Element, [Class, html].concat(remainingArguments));
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(Class, domElement) {
      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      return Element.fromDOMElement.apply(Element, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var onChange = properties.onChange,
          changeHandler = onChange; ///

      for (var _len4 = arguments.length, remainingArguments = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 2] = arguments[_key4];
      }

      return Element.fromProperties.apply(Element, [Class, properties, changeHandler].concat(remainingArguments));
    }
  }, {
    key: 'fromString',
    value: function fromString(string, properties) {
      var onChange = properties.onChange,
          changeHandler = onChange; ///

      for (var _len5 = arguments.length, remainingArguments = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
        remainingArguments[_key5 - 2] = arguments[_key5];
      }

      return Element.fromString.apply(Element, [string, properties, changeHandler].concat(remainingArguments));
    }
  }]);

  return InputElement;
}(Element);

Object.assign(InputElement, {
  ignoredProperties: ['onChange']
});

module.exports = InputElement;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  var inputElement = targetElement,
      ///
  value = inputElement.getValue();

  changeHandler(value, event, targetElement);
}

},{"./element":54}],63:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Input = function (_InputElement) {
  _inherits(Input, _InputElement);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  _createClass(Input, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Input.clone(this, changeHandler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return InputElement.clone(Input, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Input, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Input, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(Input, properties);
    }
  }]);

  return Input;
}(InputElement);

Object.assign(Input, {
  tagName: 'input'
});

module.exports = Input;

},{"../inputElement":62}],64:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Textarea = function (_InputElement) {
  _inherits(Textarea, _InputElement);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).apply(this, arguments));
  }

  _createClass(Textarea, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Textarea.clone(this, changeHandler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return InputElement.clone(Textarea, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Textarea, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Textarea, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(Textarea, properties);
    }
  }]);

  return Textarea;
}(InputElement);

Object.assign(Textarea, {
  tagName: 'textarea'
});

module.exports = Textarea;

},{"../inputElement":62}],65:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bounds = function () {
  function Bounds(top, left, bottom, right) {
    _classCallCheck(this, Bounds);

    this.top = top;
    this.left = left;
    this.bottom = bottom;
    this.right = right;
  }

  _createClass(Bounds, [{
    key: 'getTop',
    value: function getTop() {
      return this.top;
    }
  }, {
    key: 'getLeft',
    value: function getLeft() {
      return this.left;
    }
  }, {
    key: 'getBottom',
    value: function getBottom() {
      return this.bottom;
    }
  }, {
    key: 'getRight',
    value: function getRight() {
      return this.right;
    }
  }, {
    key: 'isOverlappingMouse',
    value: function isOverlappingMouse(mouseTop, mouseLeft) {
      return this.top < mouseTop && this.left < mouseLeft && this.bottom > mouseTop && this.right > mouseLeft;
    }
  }, {
    key: 'areOverlapping',
    value: function areOverlapping(bounds) {
      return this.top < bounds.bottom && this.left < bounds.right && this.bottom > bounds.top && this.right > bounds.left;
    }
  }], [{
    key: 'fromBoundingClientRect',
    value: function fromBoundingClientRect(boundingClientRect) {
      var windowScrollTop = window.pageYOffset,
          ///
      windowScrollLeft = window.pageXOffset,
          ///
      top = boundingClientRect.top + windowScrollTop,
          left = boundingClientRect.left + windowScrollLeft,
          bottom = boundingClientRect.bottom + windowScrollTop,
          right = boundingClientRect.right + windowScrollLeft,
          bounds = new Bounds(top, left, bottom, right);

      return bounds;
    }
  }]);

  return Bounds;
}();

module.exports = Bounds;

},{}],66:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Offset = function () {
  function Offset(top, left) {
    _classCallCheck(this, Offset);

    this.top = top;
    this.left = left;
  }

  _createClass(Offset, [{
    key: 'getTop',
    value: function getTop() {
      return this.top;
    }
  }, {
    key: 'getLeft',
    value: function getLeft() {
      return this.left;
    }
  }]);

  return Offset;
}();

module.exports = Offset;

},{}],67:[function(require,module,exports){
'use strict';

function onClick(handler, object) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;

  this.on('click', handler, object, intermediateHandler);
}

function offClick(handler, object) {
  this.off('click', handler, object);
}

var clickMixin = {
  onClick: onClick,
  offClick: offClick
};

module.exports = clickMixin;

function defaultIntermediateHandler(handler, event, targetElement) {
  var mouseTop = event.pageY,
      ///
  mouseLeft = event.pageX,
      ///
  mouseButton = event.button; ///

  handler(mouseTop, mouseLeft, mouseButton, event, targetElement);
}

},{}],68:[function(require,module,exports){
'use strict';

function on(eventTypes, handler) {
  var object = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var intermediateHandler = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  eventTypes = eventTypes.split(' '); ///

  eventTypes.forEach(function (eventType) {
    var eventListener = this.addEventListener(eventType, handler, object, intermediateHandler);

    this.domElement.addEventListener(eventType, eventListener);
  }.bind(this));
}

function off(eventTypes, handler) {
  var object = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  eventTypes = eventTypes.split(' '); ///

  eventTypes.forEach(function (eventType) {
    var eventListener = this.removeEventListener(eventType, handler, object);

    this.domElement.removeEventListener(eventType, eventListener);
  }.bind(this));
}

var eventMixin = {
  on: on,
  off: off,
  addEventListener: addEventListener,
  removeEventListener: removeEventListener
};

module.exports = eventMixin;

function addEventListener(eventType, handler, object, intermediateHandler) {
  if (!this.hasOwnProperty('eventListeners')) {
    this.eventListeners = [];
  }

  var targetElement = this,
      ///
  eventListeners = this.eventListeners,
      eventListener = createEventListener(targetElement, eventType, handler, object, intermediateHandler);

  eventListeners.push(eventListener);

  return eventListener;
}

function removeEventListener(eventType, handler, object) {
  var eventListeners = this.eventListeners,
      eventListener = findEventListener(eventListeners, eventType, handler, object),
      index = eventListeners.indexOf(eventListener),
      start = index,
      ///
  deleteCount = 1;

  eventListeners.splice(start, deleteCount);

  if (eventListeners.length === 0) {
    delete this.eventListeners;
  }

  return eventListener;
}

function createEventListener(targetElement, eventType, handler, object, intermediateHandler) {
  var eventListener = void 0;

  if (intermediateHandler === null) {
    eventListener = function eventListener(event) {
      handler.call(object, event, targetElement);
    };
  } else {
    eventListener = function eventListener(event) {
      intermediateHandler(function (event) {
        handler.call.apply(handler, [object].concat(Array.prototype.slice.call(arguments)));
      }, event, targetElement);
    };
  }

  Object.assign(eventListener, {
    eventType: eventType,
    handler: handler,
    object: object
  });

  return eventListener;
}

function findEventListener(eventListeners, eventType, handler, object) {
  var eventListener = eventListeners.find(function (eventListener) {
    var found = eventListener.object === object && eventListener.handler === handler && eventListener.eventType === eventType; ///

    return found;
  });

  return eventListener;
}

},{}],69:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var necessary = require('necessary');

var TextElement = require('../textElement'),
    objectUtilities = require('../utilities/object');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    combine = objectUtilities.combine,
    prune = objectUtilities.prune;


function applyProperties() {
  var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultProperties = arguments[1];
  var ignoredProperties = arguments[2];

  combine(properties, defaultProperties);

  var element = this,
      ///
  childElements = childElementsFromElementAndProperties(element, properties);

  prune(properties, ignoredProperties);

  var names = Object.keys(properties); ///

  names.forEach(function (name) {
    var value = properties[name];

    if (false) {} else if (isHandlerName(name)) {
      addHandler(this, name, value);
    } else if (isAttributeName(name)) {
      addAttribute(this, name, value);
    } else {
      if (!this.hasOwnProperty('properties')) {
        var _properties = {};

        Object.assign(this, {
          properties: _properties
        });
      }

      this.properties[name] = value;
    }
  }.bind(this));

  var parentElement = this; ///

  childElements.forEach(function (childElement) {
    childElement.addTo(parentElement);

    updateParentContext(childElement, parentElement);
  }.bind(this));
}

function getProperties() {
  return this.properties;
}

function getContext() {
  return this.context;
}

function getState() {
  return this.state;
}

function setState(state) {
  this.state = state;
}

function fromState(name) {
  var value = this.state[name];

  return value;
}

function updateState(update) {
  Object.assign(this.state, update);
}

function assignContext(names, thenDelete) {
  var argumentsLength = arguments.length;

  if (argumentsLength === 1) {
    var firstArgument = first(arguments);

    if (typeof firstArgument === 'boolean') {
      names = Object.keys(this.context);

      thenDelete = firstArgument;
    } else {
      thenDelete = true;
    }
  }

  if (argumentsLength === 0) {
    names = Object.keys(this.context);

    thenDelete = true;
  }

  names.forEach(function (name) {
    var value = this.context[name],
        propertyName = name,
        ///
    descriptor = {
      value: value
    };

    Object.defineProperty(this, propertyName, descriptor);

    if (thenDelete) {
      delete this.context[name];
    }
  }.bind(this), []);
}

var jsxMixin = {
  applyProperties: applyProperties,
  getProperties: getProperties,
  getContext: getContext,
  getState: getState,
  setState: setState,
  fromState: fromState,
  updateState: updateState,
  assignContext: assignContext
};

module.exports = jsxMixin;

function updateParentContext(childElement, parentElement) {
  var parentContext = typeof childElement.parentContext === 'function' ? childElement.parentContext() : childElement.context;

  parentElement.context = Object.assign({}, parentElement.context, parentContext);

  delete childElement.context;
}

function childElementsFromElementAndProperties(element, properties) {
  var childElements = typeof element.childElements === 'function' ? element.childElements(properties) : properties.childElements;

  childElements = childElements !== undefined ? childElements instanceof Array ? childElements : [childElements] : [];

  childElements = childElements.map(function (childElement) {
    if (typeof childElement === 'string') {
      var text = childElement,
          ///
      textElement = new TextElement(text);

      childElement = textElement; ///
    }

    return childElement;
  });

  return childElements;
}

function addHandler(element, name, value) {
  var eventType = name.substr(2).toLowerCase(),
      ///
  handler = value; ///

  element.on(eventType, handler);
}

function addAttribute(element, name, value) {
  if (name === 'className') {
    name = 'class';
  }

  if (name === 'htmlFor') {
    name = 'for';
  }

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    var keys = Object.keys(value);

    keys.forEach(function (key) {
      element.domElement[name][key] = value[key];
    }.bind(this));
  } else if (typeof value === 'boolean') {
    if (value) {
      value = name; ///

      element.addAttribute(name, value);
    }
  } else {
    element.addAttribute(name, value);
  }
}

function isHandlerName(name) {
  return name.match(/^on/);
}

function isAttributeName(name) {
  return attributeNames.includes(name);
}

var attributeNames = ['accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap'];

},{"../textElement":75,"../utilities/object":77,"necessary":79}],70:[function(require,module,exports){
'use strict';

function onKeyUp(handler, object) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;

  this.on('keyup', handler, object, intermediateHandler);
}

function onKeyDown(handler, object) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;

  this.on('keydown', handler, object, intermediateHandler);
}

function offKeyUp(handler, object) {
  this.off('keyup', handler, object);
}

function offKeyDown(handler, object) {
  this.off('keydown', handler, object);
}

var keyMixin = {
  onKeyUp: onKeyUp,
  onKeyDown: onKeyDown,
  offKeyUp: offKeyUp,
  offKeyDown: offKeyDown
};

module.exports = keyMixin;

function defaultIntermediateHandler(handler, event, targetElement) {
  var keyCode = event.keyCode;

  handler(keyCode, event, targetElement);
}

},{}],71:[function(require,module,exports){
'use strict';

function onMouseUp(handler, object) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;

  this.on('mouseup', handler, object, intermediateHandler);
}

function onMouseDown(handler, object) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;

  this.on('mousedown', handler, object, intermediateHandler);
}

function onMouseOver(handler, object) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;

  this.on('mouseover', handler, object, intermediateHandler);
}

function onMouseOut(handler, object) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;

  this.on('mouseout', handler, object, intermediateHandler);
}

function onMouseMove(handler, object) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;

  this.on('mousemove', handler, object, intermediateHandler);
}

function offMouseUp(handler, object) {
  this.off('mouseup', handler, object);
}

function offMouseDown(handler, object) {
  this.off('mousedown', handler, object);
}

function offMouseOver(handler, object) {
  this.off('mouseover', handler, object);
}

function offMouseOut(handler, object) {
  this.off('mouseout', handler, object);
}

function offMouseMove(handler, object) {
  this.off('mousemove', handler, object);
}

var mouseMixin = {
  onMouseUp: onMouseUp,
  onMouseDown: onMouseDown,
  onMouseOver: onMouseOver,
  onMouseOut: onMouseOut,
  onMouseMove: onMouseMove,
  offMouseUp: offMouseUp,
  offMouseDown: offMouseDown,
  offMouseOver: offMouseOver,
  offMouseOut: offMouseOut,
  offMouseMove: offMouseMove
};

module.exports = mouseMixin;

function defaultIntermediateHandler(handler, event, targetElement) {
  var mouseTop = event.pageY,
      ///
  mouseLeft = event.pageX,
      ///
  mouseButton = event.button; ///

  handler(mouseTop, mouseLeft, mouseButton, event, targetElement);
}

},{}],72:[function(require,module,exports){
'use strict';

function onResize(handler, object) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateResizeHandler;

  var element = this,
      ///
  resizeEventListeners = findResizeEventListeners(element);

  if (resizeEventListeners.length === 0) {
    addResizeObject(element);
  }

  var eventType = 'resize';

  this.addEventListener(eventType, handler, object, intermediateHandler);
}

function offResize(handler, object) {
  var eventType = 'resize';

  this.removeEventListener(eventType, handler, object);

  var element = this,
      ///
  resizeEventListeners = findResizeEventListeners(element);

  if (resizeEventListeners.length === 0) {
    removeResizeObject(element);
  }
}

var resizeMixin = {
  onResize: onResize,
  offResize: offResize
};

module.exports = resizeMixin;

function addResizeObject(element) {
  var resizeObject = document.createElement('object'),
      domElement = element.getDOMElement(),
      style = 'display: block; \n                 position: absolute; \n                 top: 0; \n                 left: 0; \n                 height: 100%; \n                 width: 100%; \n                 overflow: hidden; \n                 pointer-events: none; \n                 z-index: -1;',
      data = 'about:blank',
      type = 'text/html';

  resizeObject.setAttribute('style', style);
  resizeObject.data = data;
  resizeObject.type = type;

  element.__resizeObject__ = resizeObject;

  resizeObject.onload = function () {
    resizeObjectLoadHandler(element);
  };

  domElement.appendChild(resizeObject);
}

function removeResizeObject(element) {
  var domElement = element.getDOMElement(),
      resizeObject = element.__resizeObject__,
      objectWindow = resizeObject.contentDocument.defaultView; ///

  objectWindow.removeEventListener('resize', resizeEventListener);

  domElement.removeChild(resizeObject);
}

function resizeObjectLoadHandler(element) {
  var resizeObject = element.__resizeObject__,
      resizeObjectWindow = resizeObject.contentDocument.defaultView; ///

  resizeObjectWindow.addEventListener('resize', function (event) {
    var resizeEventListeners = findResizeEventListeners(element);

    resizeEventListeners.forEach(function (resizeEventListener) {
      resizeEventListener(event);
    });
  });
}

function defaultIntermediateResizeHandler(handler, event, targetElement) {
  var window = targetElement,
      ///
  width = window.getWidth(),
      height = window.getHeight();

  handler(width, height, event, targetElement);
}

function findResizeEventListeners(element) {
  var resizeEventListeners = [];

  if (element.hasOwnProperty('eventListeners')) {
    var eventListeners = element.eventListeners; ///

    eventListeners.forEach(function (eventListener) {
      if (eventListener.eventType === 'resize') {
        var _resizeEventListener = eventListener;

        resizeEventListeners.push(_resizeEventListener);
      }
    });
  }

  return resizeEventListeners;
}

},{}],73:[function(require,module,exports){
'use strict';

function onScroll(handler, object) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;

  this.on('scroll', handler, object, intermediateHandler);
}

function offScroll(handler, object) {
  this.off('scroll', handler, object);
}

function getScrollTop() {
  return this.domElement.scrollTop;
}

function getScrollLeft() {
  return this.domElement.scrollLeft;
}

function setScrollTop(scrollTop) {
  this.domElement.scrollTop = scrollTop;
}

function setScrollLeft(scrollLeft) {
  this.domElement.scrollLeft = scrollLeft;
}

var scrollMixin = {
  onScroll: onScroll,
  offScroll: offScroll,
  getScrollTop: getScrollTop,
  getScrollLeft: getScrollLeft,
  setScrollTop: setScrollTop,
  setScrollLeft: setScrollLeft
};

module.exports = scrollMixin;

function defaultIntermediateHandler(handler, event, targetElement) {
  var scrollTop = targetElement.getScrollTop(),
      scrollLeft = targetElement.getScrollLeft();

  handler(scrollTop, scrollLeft, event, targetElement);
}

},{}],74:[function(require,module,exports){
'use strict';

var Element = require('./element'),
    TextElement = require('./textElement');

function createElement(firstArgument, properties) {
  var element = null;

  if (firstArgument !== undefined) {
    for (var _len = arguments.length, childArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      childArguments[_key - 2] = arguments[_key];
    }

    var childElements = childElementsFromChildArguments(childArguments);

    properties = Object.assign({
      childElements: childElements
    }, properties);

    if (false) {} else if (isSubclassOf(firstArgument, Element)) {
      var Class = firstArgument; ///

      element = Class.fromProperties(properties);
    } else if (typeof firstArgument === 'string') {
      var string = firstArgument; ///

      element = Element.fromString(string, properties);
    } else if (typeof firstArgument === 'function') {
      var elementFunction = firstArgument; ///

      element = elementFunction(properties);
    }
  }

  return element;
}

var React = {
  createElement: createElement
};

module.exports = React;

function childElementsFromChildArguments(childArguments) {
  childArguments = childArguments.reduce(function (childArguments, childArgument) {
    childArguments = childArguments.concat(childArgument);

    return childArguments;
  }, []);

  var childElements = childArguments.map(function (childArgument) {
    var childElement = void 0;

    if (typeof childArgument === 'string') {
      var text = childArgument,
          ///
      textElement = new TextElement(text);

      childElement = textElement;
    } else {
      childElement = childArgument; ///
    }

    return childElement;
  });

  return childElements;
}

function isSubclassOf(argument, Class) {
  var typeOf = false;

  if (argument.name === Class.name) {
    ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument) {
      typeOf = isSubclassOf(argument, Class);
    }
  }

  return typeOf;
}

},{"./element":54,"./textElement":75}],75:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Offset = require('./misc/offset'),
    Bounds = require('./misc/bounds');

var TextElement = function () {
  function TextElement(text) {
    _classCallCheck(this, TextElement);

    this.domElement = document.createTextNode(text); ///

    this.domElement.__element__ = this;
  }

  _createClass(TextElement, [{
    key: 'clone',
    value: function clone() {
      return TextElement.clone(this);
    }
  }, {
    key: 'getText',
    value: function getText() {
      var nodeValue = this.domElement.nodeValue,
          text = nodeValue; ///

      return text;
    }
  }, {
    key: 'setText',
    value: function setText(text) {
      var nodeValue = text; ///

      this.domElement.nodeValue = nodeValue;
    }
  }, {
    key: 'getOffset',
    value: function getOffset() {
      var top = this.domElement.offsetTop,
          ///
      left = this.domElement.offsetLeft,
          ///
      offset = new Offset(top, left);

      return offset;
    }
  }, {
    key: 'getBounds',
    value: function getBounds() {
      var boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = Bounds.fromBoundingClientRect(boundingClientRect);

      return bounds;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      var width = this.domElement.clientWidth;

      return width;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      var height = this.domElement.clientHeight;

      return height;
    }
  }, {
    key: 'prependTo',
    value: function prependTo(parentElement) {
      parentElement.prepend(this);
    }
  }, {
    key: 'appendTo',
    value: function appendTo(parentElement) {
      parentElement.append(this);
    }
  }, {
    key: 'addTo',
    value: function addTo(parentElement) {
      parentElement.add(this);
    }
  }, {
    key: 'removeFrom',
    value: function removeFrom(parentElement) {
      parentElement.remove(this);
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;

      parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
    }
  }, {
    key: 'insertAfter',
    value: function insertAfter(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;

      parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling); ///
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.domElement.remove();
    }
  }]);

  return TextElement;
}();

module.exports = TextElement;

},{"./misc/bounds":65,"./misc/offset":66}],76:[function(require,module,exports){
'use strict';

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    splice = arrayUtilities.splice;


function domElementFromSelector(selector) {
  var domElement = typeof selector === 'string' ? document.querySelectorAll(selector)[0] : ///
  selector; ///

  return domElement;
}

function elementsFromDOMElements(domElements) {
  var domElementsWithElements = filterDOMNodes(domElements, function (domElement) {
    return domElement.__element__ !== undefined;
  }),
      elements = domElementsWithElements.map(function (domElement) {
    return domElement.__element__;
  });

  return elements;
}

function descendantDOMNodesFromDOMNode(domNode) {
  var descendantDOMNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var start = -1,
      deleteCount = 0,
      childDOMNodes = domNode.childNodes; ///

  splice(descendantDOMNodes, start, deleteCount, childDOMNodes);

  childDOMNodes.forEach(function (childDOMNode) {
    descendantDOMNodesFromDOMNode(childDOMNode, descendantDOMNodes);
  });

  return descendantDOMNodes;
}

function filterDOMNodesBySelector(domNodes, selector) {
  var filteredDOMNodes = filterDOMNodes(domNodes, function (domNode) {
    return domNodeMatchesSelector(domNode, selector);
  });

  return filteredDOMNodes;
}

function domNodeMatchesSelector(domNode, selector) {
  var domNodeType = domNode.nodeType;

  switch (domNodeType) {
    case Node.ELEMENT_NODE:
      {
        var domElement = domNode; ///

        return domElement.matches(selector);
      }

    case Node.TEXT_NODE:
      {
        if (selector === '*') {
          return true;
        }
      }
  }

  return false;
}

function filterDOMNodes(domNodes, test) {
  var filteredDOMNodes = [],
      domNodesLength = domNodes.length;

  for (var index = 0; index < domNodesLength; index++) {
    var domNode = domNodes[index],
        result = test(domNode);

    if (result) {
      filteredDOMNodes.push(domNode);
    }
  }

  return filteredDOMNodes;
}

module.exports = {
  domElementFromSelector: domElementFromSelector,
  elementsFromDOMElements: elementsFromDOMElements,
  descendantDOMNodesFromDOMNode: descendantDOMNodesFromDOMNode,
  filterDOMNodesBySelector: filterDOMNodesBySelector,
  domNodeMatchesSelector: domNodeMatchesSelector,
  filterDOMNodes: filterDOMNodes
};

},{"necessary":79}],77:[function(require,module,exports){
'use strict';

function combine(targetObject) {
  var sourceObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var sourceKeys = Object.keys(sourceObject);

  sourceKeys.forEach(function (sourceKey) {
    var targetProperty = targetObject[sourceKey],
        sourceProperty = sourceObject[sourceKey];

    targetObject[sourceKey] = targetObject.hasOwnProperty(sourceKey) ? targetProperty + ' ' + sourceProperty : sourceProperty;
  });
}

function prune(targetObject, sourceKeys) {
  sourceKeys.forEach(function (sourceKey) {
    if (targetObject.hasOwnProperty(sourceKey)) {
      delete targetObject[sourceKey];
    }
  });
}

module.exports = {
  combine: combine,
  prune: prune
};

},{}],78:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventMixin = require('./mixin/event'),
    clickMixin = require('./mixin/click'),
    mouseMixin = require('./mixin/mouse'),
    keyMixin = require('./mixin/key');

var Window = function () {
  function Window() {
    _classCallCheck(this, Window);

    this.domElement = window; ///
  }

  _createClass(Window, [{
    key: 'assign',
    value: function assign() {
      var target = this.domElement; ///

      for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }

      Object.assign.apply(Object, [target].concat(sources));
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.domElement.innerWidth;
    } ///

  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.domElement.innerHeight;
    } ///

  }, {
    key: 'getScrollTop',
    value: function getScrollTop() {
      return this.domElement.pageYOffset;
    } ///

  }, {
    key: 'getScrollLeft',
    value: function getScrollLeft() {
      return this.domElement.pageXOffset;
    } ///

  }, {
    key: 'onResize',
    value: function onResize(handler, object) {
      var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateResizeHandler;

      var eventTypes = 'resize';

      this.on(eventTypes, handler, object, intermediateHandler);
    }
  }, {
    key: 'offResize',
    value: function offResize(handler, object) {
      var eventTypes = 'resize';

      this.off(eventTypes, handler, object);
    }
  }]);

  return Window;
}();

Object.assign(Window.prototype, eventMixin);
Object.assign(Window.prototype, clickMixin);
Object.assign(Window.prototype, mouseMixin);
Object.assign(Window.prototype, keyMixin);

module.exports = new Window(); ///

function defaultIntermediateResizeHandler(handler, event, targetElement) {
  var window = targetElement,
      ///
  width = window.getWidth(),
      height = window.getHeight();

  handler(width, height, event, targetElement);
}

},{"./mixin/click":67,"./mixin/event":68,"./mixin/key":70,"./mixin/mouse":71}],79:[function(require,module,exports){
'use strict';

module.exports = {
  pathUtilities: require('./lib/utilities/path'),
  arrayUtilities: require('./lib/utilities/array'),
  templateUtilities: require('./lib/utilities/template'),
  fileSystemUtilities: require('./lib/utilities/fileSystem'),
  asynchronousUtilities: require('./lib/utilities/asynchronous')
};

},{"./lib/utilities/array":80,"./lib/utilities/asynchronous":81,"./lib/utilities/fileSystem":82,"./lib/utilities/path":83,"./lib/utilities/template":84}],80:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function first(array) {
  return array[0];
}

function second(array) {
  return array[1];
}

function third(array) {
  return array[2];
}

function fourth(array) {
  return array[3];
}

function fifth(array) {
  return array[4];
}

function fifthLast(array) {
  return array[array.length - 5];
}

function fourthLast(array) {
  return array[array.length - 4];
}

function thirdLast(array) {
  return array[array.length - 3];
}

function secondLast(array) {
  return array[array.length - 2];
}

function last(array) {
  return array[array.length - 1];
}

function tail(array) {
  return array.slice(1);
}

function push(array1, array2) {
  Array.prototype.push.apply(array1, array2);
}

function unshift(array1, array2) {
  Array.prototype.unshift.apply(array1, array2);
}

function clear(array) {
  var start = 0;

  return array.splice(start);
}

function copy(array1, array2) {
  var start = 0,
      deleteCount = array2.length; ///

  splice(array1, start, deleteCount, array2);
}

function merge(array1, array2) {
  var start = array2.length,
      ///
  deleteCount = 0;

  splice(array1, start, deleteCount, array2);
}

function splice(array1, start, deleteCount) {
  var array2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  var args = [start, deleteCount].concat(_toConsumableArray(array2)),
      deletedItemsArray = Array.prototype.splice.apply(array1, args);

  return deletedItemsArray;
}

function replace(array, element, test) {
  var start = -1;

  var found = array.some(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      start = index; ///

      return true;
    }
  });

  if (found) {
    var deleteCount = 1;

    array.splice(start, deleteCount, element);
  }

  return found;
}

function filter(array, test) {
  var filteredElements = [];

  backwardsForEach(array, function (element, index) {
    var passed = test(element, index);

    if (!passed) {
      var start = index,
          ///
      deleteCount = 1,
          deletedElements = array.splice(start, deleteCount),
          firstDeletedElement = first(deletedElements);

      filteredElements.unshift(firstDeletedElement); ///
    }
  });

  return filteredElements;
}

function find(array, test) {
  var elements = [];

  forwardsForEach(array, function (element, index) {
    var passed = test(element, index);

    if (passed) {
      elements.push(element);
    }
  });

  return elements;
}

function prune(array, test) {
  var prunedElement = undefined;

  array.some(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      var start = index,
          ///
      deleteCount = 1,
          deletedElements = array.splice(start, deleteCount),
          firstDeletedElement = first(deletedElements);

      prunedElement = firstDeletedElement; ///

      return true;
    }
  });

  return prunedElement;
}

function patch(array, element, test) {
  var found = array.some(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      return true;
    }
  });

  if (found) {
    array.push(element);
  }

  return found;
}

function augment(array1, array2, test) {
  array2.forEach(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      array1.push(element);
    }
  });
}

function separate(array, array1, array2, test) {
  array.forEach(function (element, index) {
    var passed = test(element, index);

    passed ? array1.push(element) : array2.push(element);
  });
}

function forwardsSome(array, callback) {
  var arrayLength = array.length;

  for (var index = 0; index < arrayLength; index++) {
    var element = array[index],
        result = callback(element, index);

    if (result) {
      return true;
    }
  }

  return false;
}

function backwardsSome(array, callback) {
  var arrayLength = array.length;

  for (var index = arrayLength - 1; index >= 0; index--) {
    var element = array[index],
        result = callback(element, index);

    if (result) {
      return true;
    }
  }

  return false;
}

function forwardsForEach(array, callback) {
  var arrayLength = array.length;

  for (var index = 0; index < arrayLength; index++) {
    var element = array[index];

    callback(element, index);
  }
}

function backwardsForEach(array, callback) {
  var arrayLength = array.length;

  for (var index = arrayLength - 1; index >= 0; index--) {
    var element = array[index];

    callback(element, index);
  }
}

module.exports = {
  first: first,
  second: second,
  third: third,
  fourth: fourth,
  fifth: fifth,
  fifthLast: fifthLast,
  fourthLast: fourthLast,
  thirdLast: thirdLast,
  secondLast: secondLast,
  last: last,
  tail: tail,
  push: push,
  unshift: unshift,
  clear: clear,
  copy: copy,
  merge: merge,
  splice: splice,
  replace: replace,
  filter: filter,
  find: find,
  prune: prune,
  patch: patch,
  augment: augment,
  separate: separate,
  forwardsSome: forwardsSome,
  backwardsSome: backwardsSome,
  forwardsForEach: forwardsForEach,
  backwardsForEach: backwardsForEach
};

},{}],81:[function(require,module,exports){
'use strict';

function whilst(callback, done, context) {
  var count = -1;

  function next() {
    count++;

    var index = count,
        ///
    terminate = callback(next, done, context, index);

    if (terminate) {
      done();
    }
  }

  next();
}

function forEach(array, callback, done, context) {
  var length = array.length; ///

  var count = -1;

  function next() {
    count++;

    var terminate = count === length;

    if (terminate) {
      done();
    } else {
      var index = count,
          ///
      element = array[index];

      callback(element, next, done, context, index);
    }
  }

  next();
}

function sequence(callbacks, done, context) {
  var length = callbacks.length; ///

  var count = -1;

  function next() {
    count++;

    var terminate = count === length;

    if (terminate) {
      done();
    } else {
      var index = count,
          ///
      callback = callbacks[index];

      callback(next, done, context, index);
    }
  }

  next();
}

function eventually(callbacks, done, context) {
  var length = callbacks.length; ///

  var count = 0;

  function next() {
    count++;

    var terminate = count === length;

    if (terminate) {
      done();
    }
  }

  callbacks.forEach(function (callback, index) {
    callback(next, done, context, index);
  });
}

function repeatedly(callback, length, done, context) {
  var count = 0;

  function next() {
    count++;

    var terminate = count === length;

    if (terminate) {
      done();
    }
  }

  for (var index = 0; index < length; index++) {
    callback(next, done, context, index);
  }
}

function forwardsForEach(array, callback, done, context) {
  var length = array.length; ///

  var count = -1;

  function next() {
    count++;

    var terminate = count === length;

    if (terminate) {
      done();
    } else {
      var index = count,
          ///
      element = array[index];

      callback(element, next, done, context, index);
    }
  }

  next();
}

function backwardsForEach(array, callback, done, context) {
  var length = array.length; ///

  var count = length;

  function next() {
    count--;

    var terminate = count === -1;

    if (terminate) {
      done();
    } else {
      var index = count,
          ///
      element = array[index];

      callback(element, next, done, context, index);
    }
  }

  next();
}

module.exports = {
  whilst: whilst,
  forEach: forEach,
  sequence: sequence,
  eventually: eventually,
  repeatedly: repeatedly,
  forwardsForEach: forwardsForEach,
  backwardsForEach: backwardsForEach
};

},{}],82:[function(require,module,exports){
'use strict';

var fs = require('fs');

function entryExists(absolutePath) {
  return fs.existsSync(absolutePath);
}

function fileExists(absoluteFilePath) {
  var fileExists = false;

  var absolutePath = absoluteFilePath,
      ///
  entryExists = entryExists(absolutePath);

  if (entryExists) {
    var entryFile = isEntryFile(absolutePath);

    if (entryFile) {
      fileExists = true;
    }
  }

  return fileExists;
}

function isEntryFile(absolutePath) {
  var stat = fs.statSync(absolutePath),
      entryDirectory = stat.isDirectory(),
      entryFile = !entryDirectory;

  return entryFile;
}

function directoryExists(absoluteDirectoryPath) {
  var directoryExists = false;

  var absolutePath = absoluteDirectoryPath,
      ///
  entryExists = entryExists(absolutePath);

  if (entryExists) {
    var entryDirectory = isEntryDirectory(absolutePath);

    if (entryDirectory) {
      directoryExists = true;
    }
  }

  return directoryExists;
}

function isEntryDirectory(absolutePath) {
  var stat = fs.statSync(absolutePath),
      entryDirectory = stat.isDirectory();

  return entryDirectory;
}

function isDirectoryEmpty(absoluteDirectoryPath) {
  var subEntryNames = readDirectory(absoluteDirectoryPath),
      subEntryNamesLength = subEntryNames.length,
      directoryEmpty = subEntryNamesLength === 0;

  return directoryEmpty;
}

function readDirectory(absoluteDirectoryPath) {
  var subEntryNames = fs.readdirSync(absoluteDirectoryPath);

  return subEntryNames;
}

function readFile(absoluteFilePath) {
  var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'utf8';

  var options = {
    encoding: encoding
  },
      content = fs.readFileSync(absoluteFilePath, options);

  return content;
}

function writeFile(absoluteFilePath, content) {
  fs.writeFileSync(absoluteFilePath, content);
}

module.exports = {
  entryExists: entryExists,
  fileExists: fileExists,
  isEntryFile: isEntryFile,
  directoryExists: directoryExists,
  isEntryDirectory: isEntryDirectory,
  isDirectoryEmpty: isDirectoryEmpty,
  readDirectory: readDirectory,
  readFile: readFile,
  writeFile: writeFile
};

},{"fs":44}],83:[function(require,module,exports){
'use strict';

var array = require('./array');

var first = array.first,
    second = array.second,
    last = array.last;


function isPathRelativePath(path) {
  var position = path.search(/^\.{1,2}\//),
      pathRelativePath = position !== -1;

  return pathRelativePath;
}

function isPathAbsolutePath(path) {
  var pathRelativePath = isPathRelativePath(path),
      pathAbsolutePath = !pathRelativePath; ///

  return pathAbsolutePath;
}

function isPathTopmostDirectoryName(path) {
  var position = path.search(/^[^\/]+\/?$/),
      pathTopmostDirectoryName = position !== -1;

  return pathTopmostDirectoryName;
}

function isTopmostDirectoryNameContainedInPath(topmostDirectoryName, path) {
  topmostDirectoryName = topmostDirectoryName.replace(/\/$/, ''); ///

  var regExp = new RegExp('^' + topmostDirectoryName + '(?:\\/.+)?$'),
      position = path.search(regExp),
      topmostDirectoryNameContainedInFilePath = position !== -1;

  return topmostDirectoryNameContainedInFilePath;
}

function combinePaths(directoryPath, relativePath) {
  var absolutePath = null;

  var directoryPathSubEntryNames = directoryPath.split('/'),
      relativeFilePathSubEntryNames = relativePath.split('/');

  var firstRelativeFilePathSubEntryName = first(relativeFilePathSubEntryNames),
      lastDirectoryPathSubEntryName = void 0;

  if (firstRelativeFilePathSubEntryName === '.') {
    relativeFilePathSubEntryNames.shift();
  }

  firstRelativeFilePathSubEntryName = first(relativeFilePathSubEntryNames);
  lastDirectoryPathSubEntryName = last(directoryPathSubEntryNames);

  while (firstRelativeFilePathSubEntryName === '..' && lastDirectoryPathSubEntryName !== undefined) {
    relativeFilePathSubEntryNames.shift();
    directoryPathSubEntryNames.pop();

    firstRelativeFilePathSubEntryName = first(relativeFilePathSubEntryNames);
    lastDirectoryPathSubEntryName = last(directoryPathSubEntryNames);
  }

  if (lastDirectoryPathSubEntryName !== undefined) {
    var absoluteFilePathSubEntryNames = [].concat(directoryPathSubEntryNames).concat(relativeFilePathSubEntryNames);

    absolutePath = absoluteFilePathSubEntryNames.join('/');
  }

  return absolutePath;
}

function concatenatePaths(path1, path2) {
  path1 = path1.replace(/\/$/, ''); ///

  var combinedPath = path1 + '/' + path2;

  return combinedPath;
}

function bottommostNameFromPath(path) {
  var bottommostName = null;

  var matches = path.match(/^.+\/([^\/]+\/?)$/);

  if (matches !== null) {
    var secondMatch = second(matches);

    bottommostName = secondMatch; ///
  }

  return bottommostName;
}

function topmostDirectoryPathFromPath(path) {
  var matches = path.match(/^(.+)\/[^\/]+\/?$/),
      secondMatch = second(matches),
      directoryPath = secondMatch; ///

  return directoryPath;
}

function topmostDirectoryNameFromPath(path) {
  var topmostDirectoryName = null;

  var matches = path.match(/^([^\/]+)\/.+$/);

  if (matches !== null) {
    var secondMatch = second(matches);

    topmostDirectoryName = secondMatch; ///
  }

  return topmostDirectoryName;
}

function pathWithoutBottommostNameFromPath(path) {
  var pathWithoutBottommostName = null;

  var matches = path.match(/(^.+)\/[^\/]+\/?$/);

  if (matches !== null) {
    var secondMatch = second(matches);

    pathWithoutBottommostName = secondMatch; ///
  }

  return pathWithoutBottommostName;
}

function pathWithoutTopmostDirectoryNameFromPath(path) {
  var pathWithoutTopmostDirectoryName = null;

  var matches = path.match(/^[^\/]+\/(.+)$/);

  if (matches !== null) {
    var secondMatch = second(matches);

    pathWithoutTopmostDirectoryName = secondMatch;
  }

  return pathWithoutTopmostDirectoryName;
}

module.exports = {
  isPathRelativePath: isPathRelativePath,
  isPathAbsolutePath: isPathAbsolutePath,
  isPathTopmostDirectoryName: isPathTopmostDirectoryName,
  isTopmostDirectoryNameContainedInPath: isTopmostDirectoryNameContainedInPath,
  combinePaths: combinePaths,
  concatenatePaths: concatenatePaths,
  bottommostNameFromPath: bottommostNameFromPath,
  topmostDirectoryPathFromPath: topmostDirectoryPathFromPath,
  topmostDirectoryNameFromPath: topmostDirectoryNameFromPath,
  pathWithoutBottommostNameFromPath: pathWithoutBottommostNameFromPath,
  pathWithoutTopmostDirectoryNameFromPath: pathWithoutTopmostDirectoryNameFromPath
};

},{"./array":80}],84:[function(require,module,exports){
'use strict';

var fileSystemUtilities = require('../utilities/fileSystem');

var readFile = fileSystemUtilities.readFile;


function parseFile(filePath, args) {
  var content = readFile(filePath),
      parsedContent = parseContent(content, args);

  return parsedContent;
}

function parseContent(content, args) {
  var lines = content.split('\n'),
      parsedLines = parseLines(lines, args),
      parsedContent = parsedLines.join('\n');

  return parsedContent;
}

function parseLine(line, args) {
  var parsedLine = line.replace(/\$\{(.+?)\}/g, function (match, token) {
    var parsedToken = parseToken(token, args);

    return parsedToken;
  });

  return parsedLine;
}

module.exports = {
  parseFile: parseFile,
  parseContent: parseContent,
  parseLine: parseLine
};

function parseLines(lines, args) {
  var parsedLines = lines.map(function (line) {
    var parsedLine = parseLine(line, args);

    return parsedLine;
  });

  return parsedLines;
}

function parseToken(token, args) {
  var parsedToken = '';

  if (args.hasOwnProperty(token)) {
    parsedToken = args[token];
  }

  return parsedToken;
}

},{"../utilities/fileSystem":82}]},{},[34])(34)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvYmFzaWMvZW50cmllcy5qcyIsImVzNi9iYXNpYy9sZXhlci5qcyIsImVzNi9iYXNpYy9saW5lLmpzIiwiZXM2L2Jhc2ljL3Rva2Vucy9jb21tZW50LmpzIiwiZXM2L2Jhc2ljL3Rva2Vucy9yZWd1bGFyRXhwcmVzc2lvbi5qcyIsImVzNi9iYXNpYy90b2tlbnMvc3RyaW5nTGl0ZXJhbC5qcyIsImVzNi9ibmYvZW50cmllcy5qcyIsImVzNi9ibmYvbGV4ZXIuanMiLCJlczYvYm5mL2xpbmUuanMiLCJlczYvYm5mL3NwZWNpYWxTeW1ib2xzLmpzIiwiZXM2L2JuZi90b2tlbnMvY29tbWVudC5qcyIsImVzNi9jb21tb24vY29uZmlndXJhdGlvbi5qcyIsImVzNi9jb21tb24vbGV4ZXIuanMiLCJlczYvY29tbW9uL2xpbmUuanMiLCJlczYvY29tbW9uL3J1bGUuanMiLCJlczYvY29tbW9uL3J1bGVzLmpzIiwiZXM2L2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC5qcyIsImVzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC5qcyIsImVzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9lbmRPZi5qcyIsImVzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9taWRkbGVPZi5qcyIsImVzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zdGFydE9mLmpzIiwiZXM2L2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC5qcyIsImVzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lLmpzIiwiZXM2L2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvbi5qcyIsImVzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC5qcyIsImVzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvd2hpdGVzcGFjZS5qcyIsImVzNi9jb21tb24vdG9rZW5zLmpzIiwiZXM2L2NvbW1vbi90b2tlbnMvY29tbWVudC5qcyIsImVzNi9jb21tb24vdG9rZW5zL3JlZ3VsYXJFeHByZXNzaW9uLmpzIiwiZXM2L2NvbW1vbi90b2tlbnMvc2lnbmlmaWNhbnQuanMiLCJlczYvY29tbW9uL3Rva2Vucy9zdHJpbmdMaXRlcmFsLmpzIiwiZXM2L2NvbW1vbi90b2tlbnMvd2hpdGVzcGFjZS5qcyIsImVzNi9leGFtcGxlLmpzIiwiZXM2L2V4YW1wbGVzLmpzIiwiZXM2L2V4YW1wbGVzL2Jhc2ljLmpzIiwiZXM2L2V4YW1wbGVzL2JuZi5qcyIsImVzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyIsImVzNi9mbG9yZW5jZS9lbnRyaWVzLmpzIiwiZXM2L2Zsb3JlbmNlL2xleGVyLmpzIiwiZXM2L2Zsb3JlbmNlL2xpbmUuanMiLCJlczYvZmxvcmVuY2UvdG9rZW5zL3JlZ3VsYXJFeHByZXNzaW9uLmpzIiwiZXM2L3V0aWxpdGllcy9jb250ZW50LmpzIiwiZXM2L3V0aWxpdGllcy90b2tlbnMuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2VzNi9jdXJzb3IuanMiLCJub2RlX21vZHVsZXMvZWFzeS1sYXlvdXQvZXM2L29wdGlvbnMuanMiLCJub2RlX21vZHVsZXMvZWFzeS1sYXlvdXQvZXM2L3NpemVhYmxlRWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5LWxheW91dC9lczYvc3BsaXR0ZXIuanMiLCJub2RlX21vZHVsZXMvZWFzeS1sYXlvdXQvZXM2L3NwbGl0dGVyL2hvcml6b250YWwuanMiLCJub2RlX21vZHVsZXMvZWFzeS1sYXlvdXQvZXM2L3NwbGl0dGVyL3ZlcnRpY2FsLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZG9jdW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9lbGVtZW50L2JvZHkuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9idXR0b24uanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9jaGVja2JveC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9lbGVtZW50L2Rpdi5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9lbGVtZW50L2xpbmsuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9zZWxlY3QuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9zcGFuLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2lucHV0RWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9pbnB1dEVsZW1lbnQvaW5wdXQuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvaW5wdXRFbGVtZW50L3RleHRhcmVhLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21pc2MvYm91bmRzLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21pc2Mvb2Zmc2V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21peGluL2NsaWNrLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21peGluL2V2ZW50LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21peGluL2pzeC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXhpbi9rZXkuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvbWl4aW4vbW91c2UuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvbWl4aW4vcmVzaXplLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21peGluL3Njcm9sbC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9yZWFjdC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi90ZXh0RWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi91dGlsaXRpZXMvZG9tLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L3V0aWxpdGllcy9vYmplY3QuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvd2luZG93LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9hc3luY2hyb25vdXMuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9wYXRoLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUEsSUFBTSxVQUFVLENBRWQsRUFBRSxZQUFnQiw4QkFBbEIsRUFGYyxFQUlkLEVBQUUsY0FBZ0IsTUFBbEIsRUFKYyxDQUFoQjs7QUFRQSxPQUFPLE9BQVAsR0FBaUIsT0FBakI7OztBQ1ZBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxZQUFZLFFBQVEsUUFBUixDQUFsQjtBQUFBLElBQ00sVUFBVSxRQUFRLFdBQVIsQ0FEaEI7QUFBQSxJQUVNLFFBQVEsUUFBUSxpQkFBUixDQUZkO0FBQUEsSUFHTSxjQUFjLFFBQVEsaUJBQVIsQ0FIcEI7O0lBS00sVTs7Ozs7Ozs7Ozs7Z0NBQ2UsTyxFQUFTO0FBQzFCLFVBQU0sUUFBUSxNQUFNLFdBQU4sQ0FBa0IsT0FBbEIsQ0FBZDtBQUFBLFVBQ00sYUFBYSxJQUFJLFVBQUosQ0FBZSxLQUFmLEVBQXNCLFNBQXRCLENBRG5COztBQUdBLGFBQU8sVUFBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU0sYUFBYSxXQUFXLFdBQVgsQ0FBdUIsT0FBdkIsQ0FBbkI7O0FBRUEs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QUFMLENBQWQ7QUFDRDs7QUFFRCxTQUFPLFdBQVA7QUFDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG5cclxuICB7IFwidGVybWluYWxcIiAgICA6IFwiXFxcXCt8XFxcXC18XFxcXCp8XFxcXC98XFxcXCh8XFxcXCl8XFxcXGQrXCIgfSxcclxuXHJcbiAgeyBcInVuYXNzaWduZWRcIiAgOiBcIl4uKiRcIiB9XHJcblxyXG5dO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBlbnRyaWVzO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBCYXNpY0xpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgICAgZW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxyXG4gICAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpO1xyXG5cclxuY2xhc3MgQmFzaWNMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBSdWxlcy5mcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBuZXcgQmFzaWNMZXhlcihydWxlcywgQmFzaWNMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gYmFzaWNMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpO1xyXG5cclxuICAgIHJldHVybiBiYXNpY0xleGVyO1xyXG4gIH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihCYXNpY0xleGVyLCB7XHJcbiAgZW50cmllczogZW50cmllc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQmFzaWNMZXhlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgQ29tbW9uTGluZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9saW5lJyksXHJcbiAgICAgIENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9jb21tZW50JyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3doaXRlc3BhY2UnKSxcclxuICAgICAgU3RyaW5nTGl0ZXJhbFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3N0cmluZ0xpdGVyYWwnKSxcclxuICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9yZWd1bGFyRXhwcmVzc2lvbicpO1xyXG5cclxuY2xhc3MgQmFzaWNMaW5lIGV4dGVuZHMgQ29tbW9uTGluZSB7XHJcbiAgc3RhdGljIGZyb21Db250ZW50UnVsZXNBbmRDb25maWd1cmF0aW9uKGNvbnRlbnQsIHJ1bGVzLCBjb25maWd1cmF0aW9uKSB7XHJcbiAgICBjb25zdCBiYXNpY0xpbmUgPSBzdXBlci5mcm9tQ29udGVudFJ1bGVzQW5kQ29uZmlndXJhdGlvbihCYXNpY0xpbmUsIGNvbnRlbnQsIHJ1bGVzLCBjb25maWd1cmF0aW9uKTtcclxuXHJcbiAgICBiYXNpY0xpbmUuaW5pdGlhbGlzZShDb21tZW50VG9rZW5zLCBSZWd1bGFyRXhwcmVzc2lvblRva2VucywgU3RyaW5nTGl0ZXJhbFRva2VucywgV2hpdGVzcGFjZVRva2Vucyk7XHJcblxyXG4gICAgcmV0dXJuIGJhc2ljTGluZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQmFzaWNMaW5lO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBDb21tZW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQsIGxpbmUsIGNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGNvbnN0IGluQ29tbWVudCA9IGZhbHNlOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIGluQ29tbWVudDtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudFRva2VucztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpIHsgXHJcblxyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblRva2VucztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgU3RyaW5nTGl0ZXJhbFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSkgeyBcclxuXHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZ0xpdGVyYWxUb2tlbnM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcblxyXG4gIHsgXCJzcGVjaWFsXCIgICAgOiBcIjo6PXxcXFxcfHxcXFxcKHxcXFxcKXxcXFxcP3xcXFxcKnxcXFxcK3xcXFxcLnzOtXw7fDxOT19XSElURVNQQUNFPnw8RU5EX09GX0xJTkU+XCIgfSxcclxuXHJcbiAgeyBcInR5cGVcIiAgICAgICA6IFwiXFxcXFtbXlxcXFxdXStcXFxcXVwiIH0sXHJcblxyXG4gIHsgXCJuYW1lXCIgICAgICAgOiBcIltcXFxcd3x+XStcIiB9LFxyXG5cclxuICB7IFwidW5hc3NpZ25lZFwiIDogXCJeLiokXCIgfVxyXG4gICAgXHJcbl07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGVudHJpZXM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IEJORkxpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgICAgZW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxyXG4gICAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxyXG4gICAgICBzcGVjaWFsU3ltYm9scyA9IHJlcXVpcmUoJy4vc3BlY2lhbFN5bWJvbHMnKSxcclxuICAgICAgdG9rZW5zVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3Rva2VucycpO1xyXG5cclxuY29uc3QgeyBzaWduaWZpY2FudFRva2Vuc0Zyb21MaW5lcyB9ID0gdG9rZW5zVXRpbGl0aWVzO1xyXG5cclxuY2xhc3MgQk5GTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc2lnbmlmaWNhbnRUb2tlbnNGcm9tQk5GKGJuZikge1xyXG4gICAgY29uc3QgY29udGVudCA9IGJuZiwgIC8vL1xyXG4gICAgICAgICAgbGluZXMgPSBzdXBlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQpLFxyXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21MaW5lcyhsaW5lcyk7XHJcblxyXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBibmZMZXhlciA9IG5ldyBCTkZMZXhlcihydWxlcywgQk5GTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGJuZkxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTtcclxuXHJcbiAgICByZXR1cm4gYm5mTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKEJORkxleGVyLCB7XHJcbiAgZW50cmllczogZW50cmllcyxcclxuICBzcGVjaWFsU3ltYm9sczogc3BlY2lhbFN5bWJvbHNcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJORkxleGVyO1xyXG5cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgQ29tbW9uTGluZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9saW5lJyksXHJcbiAgICAgIENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9jb21tZW50JyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3doaXRlc3BhY2UnKSxcclxuICAgICAgU3RyaW5nTGl0ZXJhbFRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvc3RyaW5nTGl0ZXJhbCcpLFxyXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvcmVndWxhckV4cHJlc3Npb24nKTtcclxuXHJcbmNsYXNzIEJORkxpbmUgZXh0ZW5kcyBDb21tb25MaW5lIHtcclxuICBzdGF0aWMgZnJvbUNvbnRlbnRSdWxlc0FuZENvbmZpZ3VyYXRpb24oY29udGVudCwgcnVsZXMsIGNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGNvbnN0IGJuZkxpbmUgPSBzdXBlci5mcm9tQ29udGVudFJ1bGVzQW5kQ29uZmlndXJhdGlvbihCTkZMaW5lLCBjb250ZW50LCBydWxlcywgY29uZmlndXJhdGlvbik7XHJcblxyXG4gICAgYm5mTGluZS5pbml0aWFsaXNlKENvbW1lbnRUb2tlbnMsIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zLCBTdHJpbmdMaXRlcmFsVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKTtcclxuXHJcbiAgICByZXR1cm4gYm5mTGluZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQk5GTGluZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3Qgc3BlY2lhbFN5bWJvbHMgPSB7XHJcbiAgcGx1cyA6ICcrJyxcclxuICBlcHNpbG9uIDogJ861JyxcclxuICB3aWxkY2FyZCA6ICcuJyxcclxuICBhc3RlcmlzayA6ICcqJyxcclxuICBzZXBhcmF0b3IgOiAnOjo9JyxcclxuICB0ZXJtaW5hdG9yIDogJzsnLFxyXG4gIHZlcnRpY2FsQmFyIDogJ3wnLFxyXG4gIG9wZW5CcmFja2V0IDogJygnLFxyXG4gIGNsb3NlQnJhY2tldCA6ICcpJyxcclxuICBxdWVzdGlvbk1hcmsgOiAnPycsXHJcbiAgRU5EX09GX0xJTkUgOiAnPEVORF9PRl9MSU5FPicsXHJcbiAgTk9fV0hJVEVTUEFDRSA6ICc8Tk9fV0hJVEVTUEFDRT4nXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNwZWNpYWxTeW1ib2xzO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBDb21tZW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQsIGxpbmUsIGNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGNvbnN0IGluQ29tbWVudCA9IGZhbHNlOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIGluQ29tbWVudDtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudFRva2VucztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgQ29uZmlndXJhdGlvbiB7XHJcbiAgY29uc3RydWN0b3IobWluaW11bUxpbmVzTGVuZ3RoID0gSW5maW5pdHksIHByZXZpb3VzTGluZUluQ29tbWVudCA9IGZhbHNlLCBmb2xsb3dpbmdMaW5lSW5Db21tZW50ID0gZmFsc2UpIHsgLy8vXHJcbiAgICB0aGlzLm1pbmltdW1MaW5lc0xlbmd0aCA9IG1pbmltdW1MaW5lc0xlbmd0aDtcclxuICAgIHRoaXMucHJldmlvdXNMaW5lSW5Db21tZW50ID0gcHJldmlvdXNMaW5lSW5Db21tZW50O1xyXG4gICAgdGhpcy5mb2xsb3dpbmdMaW5lSW5Db21tZW50ID0gZm9sbG93aW5nTGluZUluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGdldE1pbmltdW1MaW5lc0xlbmd0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLm1pbmltdW1MaW5lc0xlbmd0aDtcclxuICB9XHJcblxyXG4gIGlzUHJldmlvdXNMaW5lSW5Db21tZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJldmlvdXNMaW5lSW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgaXNGb2xsb3dpbmdMaW5lSW5Db21tZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9sbG93aW5nTGluZUluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIHNldFByZXZpb3VzTGluZUluQ29tbWVudChwcmV2aW91c0xpbmVJbkNvbW1lbnQpIHtcclxuICAgIHRoaXMucHJldmlvdXNMaW5lSW5Db21tZW50ID0gcHJldmlvdXNMaW5lSW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgc2hvdWxkVGVybWluYXRlKGxlbmd0aCkge1xyXG4gICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChsZW5ndGggPj0gdGhpcy5taW5pbXVtTGluZXNMZW5ndGgpIHtcclxuICAgICAgaWYgKHRoaXMucHJldmlvdXNMaW5lSW5Db21tZW50ID09PSB0aGlzLmZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpIHtcclxuICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRlcm1pbmF0ZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29uZmlndXJhdGlvbjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxyXG4gICAgICBSdWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKSxcclxuICAgICAgQ29uZmlndXJhdGlvbiA9IHJlcXVpcmUoJy4vY29uZmlndXJhdGlvbicpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzLCBMaW5lKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLkxpbmUgPSBMaW5lO1xyXG4gIH1cclxuICBcclxuICBnZXRSdWxlcygpIHtcclxuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xyXG4gIH1cclxuICBcclxuICBnZXRMaW5lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuTGluZTtcclxuICB9XHJcblxyXG4gIGFkZGVkTGluZXNGcm9tQ29udGVudChjb250ZW50LCBmaXJzdExpbmVJbmRleCwgbWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbihtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCksXHJcbiAgICAgICAgICBsaW5lcyA9IHRoaXMubGluZXNGcm9tQ29udGVudChjb250ZW50LCBmaXJzdExpbmVJbmRleCwgY29uZmlndXJhdGlvbiksXHJcbiAgICAgICAgICBhZGRlZExpbmVzID0gbGluZXM7IC8vL1xyXG5cclxuICAgIHJldHVybiBhZGRlZExpbmVzO1xyXG4gIH1cclxuXHJcbiAgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBmaXJzdExpbmVJbmRleCA9IDAsIGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbigpKSB7XHJcbiAgICBjb25zdCBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xcbi8pLFxyXG4gICAgICAgICAgbGluZXMgPSB0aGlzLmxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzLCBmaXJzdExpbmVJbmRleCwgY29uZmlndXJhdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgbGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGZpcnN0TGluZUluZGV4LCBjb25maWd1cmF0aW9uKSB7XHJcbiAgICBjb25zdCBsaW5lcyA9IFtdO1xyXG4gICAgXHJcbiAgICBsZXQgaW5kZXggPSBmaXJzdExpbmVJbmRleCwgICAgXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnRzW2luZGV4XTtcclxuXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IGxlbmd0aCA9IGluZGV4IC0gZmlyc3RMaW5lSW5kZXgsXHJcbiAgICAgICAgICAgIHRlcm1pbmF0ZSA9IGNvbmZpZ3VyYXRpb24uc2hvdWxkVGVybWluYXRlKGxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGxpbmUgPSB0aGlzLkxpbmUuZnJvbUNvbnRlbnRSdWxlc0FuZENvbmZpZ3VyYXRpb24oY29udGVudCwgdGhpcy5ydWxlcywgY29uZmlndXJhdGlvbik7XHJcblxyXG4gICAgICBsaW5lcy5wdXNoKGxpbmUpO1xyXG5cclxuICAgICAgY29udGVudCA9IGNvbnRlbnRzWysraW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcbiAgXHJcbiAgc3RhdGljIHJ1bGVGcm9tRW50cnkoZW50cnkpIHsgcmV0dXJuIFJ1bGUuZnJvbUVudHJ5KGVudHJ5KTsgfVxyXG4gIFxyXG4gIHN0YXRpYyBydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIFJ1bGVzLmZyb21FbnRyaWVzKGVudHJpZXMpOyB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGV4ZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc2lnbmlmaWNhbnQnKTtcclxuXHJcbmNsYXNzIENvbW1vbkxpbmUge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIHJ1bGVzLCBjb25maWd1cmF0aW9uLCB0b2tlbnMsIGluQ29tbWVudCwgcmVwbGFjZW1lbnRUb2tlbk1hcCkge1xyXG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuICAgIHRoaXMuaW5Db21tZW50ID0gaW5Db21tZW50O1xyXG4gICAgdGhpcy5yZXBsYWNlbWVudFRva2VuTWFwID0gcmVwbGFjZW1lbnRUb2tlbk1hcDtcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0UnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcclxuICB9XHJcblxyXG4gIGdldENvbmZpZ3VyYXRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9rZW5zKHdpdGhSZXBsYWNlbWVudFRva2VucyA9IGZhbHNlKSB7XHJcbiAgICBsZXQgdG9rZW5zID0gdGhpcy50b2tlbnM7XHJcblxyXG4gICAgaWYgKHdpdGhSZXBsYWNlbWVudFRva2Vucykge1xyXG4gICAgICB0b2tlbnMgPSB0b2tlbnMucmVkdWNlKGZ1bmN0aW9uKHRva2VucywgdG9rZW4sIGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRUb2tlbiA9IHRoaXMucmVwbGFjZW1lbnRUb2tlbk1hcFtpbmRleF07XHJcblxyXG4gICAgICAgIHRva2VuID0gcmVwbGFjZW1lbnRUb2tlbiB8fCB0b2tlbjsgIC8vL1xyXG5cclxuICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XHJcblxyXG4gICAgICAgIHJldHVybiB0b2tlbnM7XHJcbiAgICAgIH0uYmluZCh0aGlzKSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICBpc0luQ29tbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGdldFJlcGxhY2VtZW50VG9rZW5NYXAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudFRva2VuTWFwO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXhlcygpIHtcclxuICAgIGNvbnN0IGluZGV4ZXMgPSBPYmplY3Qua2V5cyh0aGlzLnJlcGxhY2VtZW50VG9rZW5NYXApO1xyXG5cclxuICAgIHJldHVybiBpbmRleGVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rmlyc3RUb2tlbkluZGV4KGZpcnN0VG9rZW4gPSBudWxsKSB7XHJcbiAgICBjb25zdCB3aXRoUmVwbGFjZW1lbnRUb2tlbnMgPSBmYWxzZSxcclxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKHdpdGhSZXBsYWNlbWVudFRva2VucyksXHJcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcclxuICAgICAgICAgIGZpcnN0VG9rZW5JbmRleCA9IChmaXJzdFRva2VuID09PSBudWxsKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0SW5kZXggOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5pbmRleE9mKGZpcnN0VG9rZW4pO1xyXG5cclxuICAgIHJldHVybiBmaXJzdFRva2VuSW5kZXg7XHJcbiAgfVxyXG5cclxuICBnZXRMYXN0VG9rZW5JbmRleChsYXN0VG9rZW4gPSBudWxsKSB7XHJcbiAgICBjb25zdCB3aXRoUmVwbGFjZW1lbnRUb2tlbnMgPSBmYWxzZSxcclxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKHdpdGhSZXBsYWNlbWVudFRva2VucyksXHJcbiAgICAgICAgICB0b2tlbnNMZW5ndGggPSB0b2tlbnMubGVuZ3RoLFxyXG4gICAgICAgICAgbGFzdEluZGV4ID0gdG9rZW5zTGVuZ3RoIC0gMSxcclxuICAgICAgICAgIGxhc3RUb2tlbkluZGV4ID0gKGxhc3RUb2tlbiA9PT0gbnVsbCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0SW5kZXggOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5pbmRleE9mKGxhc3RUb2tlbik7XHJcblxyXG4gICAgcmV0dXJuIGxhc3RUb2tlbkluZGV4O1xyXG4gIH1cclxuXHJcbiAgYXNIVE1MKGZpbGVQYXRoLCB3aXRoUmVwbGFjZW1lbnRUb2tlbnMpIHtcclxuICAgIGxldCBodG1sO1xyXG5cclxuICAgIGNvbnN0IHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKHdpdGhSZXBsYWNlbWVudFRva2Vucyk7XHJcblxyXG4gICAgaHRtbCA9IHRva2Vucy5yZWR1Y2UoZnVuY3Rpb24oaHRtbCwgdG9rZW4pIHtcclxuICAgICAgY29uc3QgdG9rZW5IVE1MID0gdG9rZW4uYXNIVE1MKGZpbGVQYXRoKTtcclxuXHJcbiAgICAgIGh0bWwgKz0gdG9rZW5IVE1MO1xyXG5cclxuICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9LCAnJyk7XHJcbiAgICBcclxuICAgIGh0bWwgKz0gJ1xcbic7IC8vL1xyXG4gICAgXHJcbiAgICByZXR1cm4gaHRtbDtcclxuICB9XHJcblxyXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcclxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgcmVwbGFjZVRva2VuKHJlcGxhY2VkVG9rZW4sIHJlcGxhY2VtZW50VG9rZW4pIHtcclxuICAgIGNvbnN0IHdpdGhSZXBsYWNlbWVudFRva2VucyA9IGZhbHNlLFxyXG4gICAgICAgICAgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMod2l0aFJlcGxhY2VtZW50VG9rZW5zKSxcclxuICAgICAgICAgIHJlcGxhY2VkVG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKHJlcGxhY2VkVG9rZW4pLFxyXG4gICAgICAgICAgaW5kZXggPSByZXBsYWNlZFRva2VuSW5kZXg7ICAvLy9cclxuXHJcbiAgICB0aGlzLnJlcGxhY2VtZW50VG9rZW5NYXBbaW5kZXhdID0gcmVwbGFjZW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIHJlbW92ZVJlcGxhY2VtZW50VG9rZW5zKGZpcnN0VG9rZW4sIGxhc3RUb2tlbikge1xyXG4gICAgY29uc3QgaW5kZXhlcyA9IHRoaXMuZ2V0SW5kZXhlcygpLFxyXG4gICAgICAgICAgZmlyc3RUb2tlbkluZGV4ID0gdGhpcy5nZXRGaXJzdFRva2VuSW5kZXgoZmlyc3RUb2tlbiksXHJcbiAgICAgICAgICBsYXN0VG9rZW5JbmRleCA9IHRoaXMuZ2V0TGFzdFRva2VuSW5kZXgobGFzdFRva2VuKTtcclxuXHJcbiAgICBpbmRleGVzLmZvckVhY2goZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgaWYgKChpbmRleCA+PSBmaXJzdFRva2VuSW5kZXgpICYmIChpbmRleCA8PSBsYXN0VG9rZW5JbmRleCkpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5yZXBsYWNlbWVudFRva2VuTWFwW2luZGV4XTtcclxuICAgICAgfVxyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpc2UoQ29tbWVudFRva2VucywgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMsIFN0cmluZ0xpdGVyYWxUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpIHtcclxuICAgIGNvbnN0IGxpbmUgPSB0aGlzLCAgLy8vXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzID0gW3RoaXMuY29udGVudF0sXHJcbiAgICAgICAgICBpbkNvbW1lbnQgPSBDb21tZW50VG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgdGhpcy5jb25maWd1cmF0aW9uKTtcclxuXHJcbiAgICBSZWd1bGFyRXhwcmVzc2lvblRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpO1xyXG5cclxuICAgIFN0cmluZ0xpdGVyYWxUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKTtcclxuXHJcbiAgICBXaGl0ZXNwYWNlVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gU2lnbmlmaWNhbnRUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCB0aGlzLnJ1bGVzKTtcclxuXHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuXHJcbiAgICB0aGlzLmluQ29tbWVudCA9IGluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tQ29udGVudFJ1bGVzQW5kQ29uZmlndXJhdGlvbihMaW5lLCBjb250ZW50LCBydWxlcywgY29uZmlndXJhdGlvbikge1xyXG4gICAgY29uc3QgdG9rZW5zID0gdW5kZWZpbmVkLCAvLy9cclxuICAgICAgICAgIGluQ29tbWVudCA9IHVuZGVmaW5lZCwgLy9cclxuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5NYXAgPSB7fSxcclxuICAgICAgICAgIGxpbmUgPSBuZXcgTGluZShjb250ZW50LCBydWxlcywgY29uZmlndXJhdGlvbiwgdG9rZW5zLCBpbkNvbW1lbnQsIHJlcGxhY2VtZW50VG9rZW5NYXApO1xyXG5cclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MaW5lO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3Ioc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZSA9IHNpZ25pZmljYW50VG9rZW5UeXBlO1xuICAgIHRoaXMucmVndWxhckV4cHJlc3Npb24gPSByZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuICBcbiAgZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGU7XG4gIH1cbiAgXG4gIGdldFJlZ3VsYXJFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG4gIFxuICBzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHtcbiAgICBsZXQgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uID0gLTE7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbik7XG4gICAgXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcbiAgICAgIFxuICAgICAgaWYgKGZpcnN0TWF0Y2ggIT09ICcnKSB7XG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbiA9IG1hdGNoZXMuaW5kZXg7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuUG9zaXRpb247XG4gIH1cblxuICBzaWduaWZpY2FudFRva2VuRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgICBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICBjb25zdCB0eXBlID0gdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZSwgLy8vXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgY29uc3QgZW50cnlLZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICAgIGZpcnN0RW50cnlLZXkgPSBmaXJzdChlbnRyeUtleXMpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlID0gZmlyc3RFbnRyeUtleSwgLy8vXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gZW50cnlbc2lnbmlmaWNhbnRUb2tlblR5cGVdLFxuICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21TaWduaWZpY2FudFRva2VuVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihzaWduaWZpY2FudFRva2VuVHlwZSwgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKTtcbiAgICAgICAgXG4gICAgcmV0dXJuIHJ1bGU7IFxuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihzaWduaWZpY2FudFRva2VuVHlwZSwgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSB7XG4gICAgY29uc3QgdW5pY29kZSA9IGlzVW5pY29kZShyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pLFxuICAgICAgICAgIGZsYWdzID0gdW5pY29kZSA/ICd1JyA6ICcnLFxuICAgICAgICAgIHJlZ0V4cCA9IG5ldyBSZWdFeHAocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuLCBmbGFncyksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb24gPSByZWdFeHAsIC8vL1xuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShzaWduaWZpY2FudFRva2VuVHlwZSwgcmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuXG5mdW5jdGlvbiBpc1VuaWNvZGUocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSB7XG4gIGNvbnN0IHVuaWNvZGVSZWd1bGFyRXhwcmVzc2lvbiA9IC91XFx7LywgLy8vXG4gICAgICAgIGluZGV4ID0gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuLnNlYXJjaCh1bmljb2RlUmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgICB1bmljb2RlID0gKGluZGV4ICE9PSAtMSk7XG5cbiAgcmV0dXJuIHVuaWNvZGU7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBSdWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG4gIFxuICByZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICBnZXRSdWxlKGRlcHRoKSB7XG4gICAgY29uc3QgcnVsZSA9ICh0aGlzLmFycmF5W2RlcHRoXSB8fCBudWxsKTsgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkge1xuICAgIHRoaXMuYXJyYXkudW5zaGlmdChydWxlKTsgLy8vXG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgYXJyYXkgPSBzaWduaWZpY2FudFRva2VuVHlwZXMubWFwKGZ1bmN0aW9uKHNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgICAgICAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBmaW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHNpZ25pZmljYW50VG9rZW5UeXBlLCBlbnRyaWVzKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21TaWduaWZpY2FudFRva2VuVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihzaWduaWZpY2FudFRva2VuVHlwZSwgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKTtcbiAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7ICAgICAgXG4gICAgICAgICAgfSksXG4gICAgICAgICAgcnVsZXMgPSBuZXcgUnVsZXMoYXJyYXkpO1xuICAgIFxuICAgIHJldHVybiBydWxlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVzO1xuXG5mdW5jdGlvbiBmaW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHNpZ25pZmljYW50VG9rZW5UeXBlLCBlbnRyaWVzKSB7XG4gIGNvbnN0IGVudHJ5ID0gZW50cmllcy5maW5kKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgICAgY29uc3QgZW50cnlLZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICAgICAgICAgIGZpcnN0RW50cnlLZXkgPSBmaXJzdChlbnRyeUtleXMpLFxuICAgICAgICAgICAgICAgIGVudHJ5U2lnbmlmaWNhbnRUb2tlblR5cGUgPSBmaXJzdEVudHJ5S2V5LCAgLy8vXG4gICAgICAgICAgICAgICAgZm91bmQgPSAoZW50cnlTaWduaWZpY2FudFRva2VuVHlwZSA9PT0gc2lnbmlmaWNhbnRUb2tlblR5cGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgICAgICB9KSB8fCBudWxsLCAvLy9cbiAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gKGVudHJ5ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5W3NpZ25pZmljYW50VG9rZW5UeXBlXSA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybjtcbn1cblxuZnVuY3Rpb24gc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUVudHJpZXMoZW50cmllcykge1xuICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBlbnRyaWVzLm1hcChmdW5jdGlvbihlbnRyeSkge1xuICAgIGNvbnN0IGVudHJ5S2V5cyA9IE9iamVjdC5rZXlzKGVudHJ5KSxcbiAgICAgICAgICBmaXJzdEVudHJ5S2V5ID0gZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXk7IC8vL1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlO1xuICB9KTtcblxuICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb250ZW50VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2NvbnRlbnQnKTtcblxuY29uc3QgeyBzYW5pdGlzZUNvbnRlbnQgfSA9IGNvbnRlbnRVdGlsaXRpZXM7XG5cbmNsYXNzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCBodG1sKSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIHRoaXMuaHRtbCA9IGh0bWw7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHRtbDtcbiAgfVxuICBcbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoOyAvLy9cbiAgfVxuXG4gIGlzU2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGFzSFRNTChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmh0bWw7IC8vL1xuICAgIFxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uY2xvbmUoTm9uU2lnbmlmaWNhbnRUb2tlbiwgdGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzID0gTm9uU2lnbmlmaWNhbnRUb2tlbiwgdG9rZW4sIHN0YXJ0UG9zaXRpb24gPSAwLCBlbmRQb3NpdGlvbiA9IHRva2VuLmdldExlbmd0aCgpKSB7XG4gICAgbGV0IGNsb25lZE5vblNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBsaW5lID0gdG9rZW4uZ2V0TGluZSgpO1xuXG4gICAgICBsZXQgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcbiAgICAgIFxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgICAgY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzLmZyb21Db250ZW50QW5kTGluZShDbGFzcywgY29udGVudCwgbGluZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lZE5vblNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoQ2xhc3MsIGNvbnRlbnQsIGxpbmUpIHtcbiAgICBpZiAobGluZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsaW5lID0gY29udGVudDtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gTm9uU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGh0bWwgPSBzYW5pdGlzZWRDb250ZW50LFxuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIGh0bWwpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uU2lnbmlmaWNhbnRUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29udGVudFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9jb250ZW50JyksXG4gICAgICBOb25TaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vbm9uU2lnbmlmaWNhbnQnKTtcblxuY29uc3QgeyBzYW5pdGlzZUNvbnRlbnQgfSA9IGNvbnRlbnRVdGlsaXRpZXM7XG5cbmNsYXNzIENvbW1lbnRUb2tlbiBleHRlbmRzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBtZXJnZShjb21tZW50VG9rZW4pIHtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuICAgIFxuICAgIGNvbnN0IGxpbmUgPSB0aGlzLmdldExpbmUoKSxcbiAgICAgICAgICBjb21tZW50VG9rZW5Db250ZW50ID0gY29tbWVudFRva2VuLmdldENvbnRlbnQoKTtcblxuICAgIGNvbnRlbnQgKz0gY29tbWVudFRva2VuQ29udGVudDtcblxuICAgIGNvbW1lbnRUb2tlbiA9IENvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7ICAvLy9cblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gQ29tbWVudFRva2VuLmNsb25lKENvbW1lbnRUb2tlbiwgdGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzID0gQ29tbWVudFRva2VuLCB0b2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uY2xvbmUoQ2xhc3MsIHRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoQ2xhc3MsIGNvbnRlbnQsIGxpbmUpIHtcbiAgICBpZiAobGluZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsaW5lID0gY29udGVudDtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gQ29tbWVudFRva2VuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCJjb21tZW50XCI+JHtpbm5lckhUTUx9PC9zcGFuPmAsXG4gICAgICAgICAgY29tbWVudFRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIGh0bWwpO1xuXG4gICAgcmV0dXJuIGNvbW1lbnRUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IENvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1lbnQnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIEVuZE9mQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5jbG9uZShFbmRPZkNvbW1lbnRUb2tlbiwgdGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7IHJldHVybiBDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKEVuZE9mQ29tbWVudFRva2VuLCBjb250ZW50LCBsaW5lKTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIGxldCBlbmRPZkNvbW1lbnRUb2tlbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goRW5kT2ZDb21tZW50VG9rZW4ucmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBlbmRPZkNvbW1lbnRUb2tlbiA9IEVuZE9mQ29tbWVudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5kT2ZDb21tZW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKEVuZE9mQ29tbWVudFRva2VuLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5FbmRPZkNvbW1lbnRUb2tlbi5yZWd1bGFyRXhwcmVzc2lvbiA9IC9cXCpcXC8vO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mQ29tbWVudFRva2VuO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1lbnQnKTtcblxuY2xhc3MgTWlkZGxlT2ZDb21tZW50VG9rZW4gZXh0ZW5kcyBDb21tZW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gQ29tbWVudFRva2VuLmNsb25lKE1pZGRsZU9mQ29tbWVudFRva2VuLCB0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIGxlbmd0aCkge1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cigwLCBsZW5ndGgpOyAgLy8vXG5cbiAgICBjb25zdCBtaWRkbGVPZkNvbW1lbnRUb2tlbiA9IENvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoTWlkZGxlT2ZDb21tZW50VG9rZW4sIGNvbnRlbnQsIGxpbmUpO1xuXG4gICAgcmV0dXJuIG1pZGRsZU9mQ29tbWVudFRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWlkZGxlT2ZDb21tZW50VG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tZW50Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBTdGFydE9mQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5jbG9uZShTdGFydE9mQ29tbWVudFRva2VuLCB0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoU3RhcnRPZkNvbW1lbnRUb2tlbiwgY29udGVudCwgbGluZSk7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHtcbiAgICBsZXQgc3RhcnRPZkNvbW1lbnRUb2tlbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goU3RhcnRPZkNvbW1lbnRUb2tlbi5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgIHN0YXJ0T2ZDb21tZW50VG9rZW4gPSBTdGFydE9mQ29tbWVudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHN0YXJ0T2ZDb21tZW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKFN0YXJ0T2ZDb21tZW50VG9rZW4ucmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cblN0YXJ0T2ZDb21tZW50VG9rZW4ucmVndWxhckV4cHJlc3Npb24gPSAvXFwvXFwqLztcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFydE9mQ29tbWVudFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb250ZW50VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2NvbnRlbnQnKTtcblxuY29uc3QgeyBzYW5pdGlzZUNvbnRlbnQgfSA9IGNvbnRlbnRVdGlsaXRpZXM7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCB0eXBlLCBpbm5lckhUTUwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgfVxuICBcbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRJbm5lckhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuY29udGVudC5sZW5ndGg7IC8vL1xuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGlzU2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdHJ1ZTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgaXNXaGl0ZXNwYWNlVG9rZW4oKSB7XG4gICAgY29uc3Qgd2hpdGVzcGFjZVRva2VuID0gZmFsc2U7XG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgaXNFbmRPZkxpbmVUb2tlbigpIHtcbiAgICBjb25zdCBlbmRPZkxpbmVUb2tlbiA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2VuO1xuICB9XG5cbiAgYXNIVE1MKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy50eXBlLCAgLy8vXG4gICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke3RoaXMuaW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZShTaWduaWZpY2FudFRva2VuLCB0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgfVxuXG4gIHN0YXRpYyBjbG9uZShDbGFzcyA9IFNpZ25pZmljYW50VG9rZW4sIHNpZ25pZmljYW50VG9rZW4sIHN0YXJ0UG9zaXRpb24gPSAwLCBlbmRQb3NpdGlvbiA9IHNpZ25pZmljYW50VG9rZW4uZ2V0TGVuZ3RoKCkpIHtcbiAgICBsZXQgY2xvbmVkU2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGxldCBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICAgIGNvbnN0IGxpbmUgPSBzaWduaWZpY2FudFRva2VuLmdldExpbmUoKSxcbiAgICAgICAgICAgIHR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKTtcblxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgIC8vL1xuXG4gICAgICBjbG9uZWRTaWduaWZpY2FudFRva2VuID0gQ2xhc3MuZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVkU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKENsYXNzLCBjb250ZW50LCBsaW5lLCB0eXBlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0eXBlID0gbGluZTtcbiAgICAgIGxpbmUgPSBjb250ZW50O1xuICAgICAgY29udGVudCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCB0eXBlLCBpbm5lckhUTUwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9zaWduaWZpY2FudCcpO1xuXG5jbGFzcyBFbmRPZkxpbmVUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gMDsgLy8vXG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgaXNFbmRPZkxpbmVUb2tlbigpIHtcbiAgICBjb25zdCBlbmRPZkxpbmVUb2tlbiA9IHRydWU7XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW47XG4gIH1cblxuICBhc0hUTUwoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBodG1sID0gJyc7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBFbmRPZkxpbmVUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgY2xvbmUoZW5kT2ZMaW5lVG9rZW4sIHN0YXJ0UG9zaXRpb24gPSAwLCBlbmRQb3NpdGlvbiA9IGVuZE9mTGluZVRva2VuLmdldExlbmd0aCgpKSB7XG4gICAgbGV0IGNsb25lZEVuZE9mTGluZVRva2VuID0gbnVsbDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uICE9PSBlbmRQb3NpdGlvbikge1xuICAgICAgY29uc3QgY29udGVudCA9IG51bGwsXG4gICAgICAgICAgICBsaW5lID0gZW5kT2ZMaW5lVG9rZW4uZ2V0TGluZSgpLFxuICAgICAgICAgICAgdHlwZSA9IGVuZE9mTGluZVRva2VuLmdldFR5cGUoKSxcblxuICAgICAgY2xvbmVkRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZWRFbmRPZkxpbmVUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGluZShsaW5lKSB7XG4gICAgY29uc3QgY29udGVudCA9IG51bGwsIC8vL1xuICAgICAgICAgIHsgdHlwZSB9ID0gRW5kT2ZMaW5lVG9rZW4sXG4gICAgICAgICAgZW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIFxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpIHtcbiAgICBjb25zdCBpbm5lckhUTUwgPSBudWxsLCAvLy9cbiAgICAgICAgICBlbmRPZkxpbmVUb2tlbiA9IG5ldyBFbmRPZkxpbmVUb2tlbihjb250ZW50LCBsaW5lLCB0eXBlLCBpbm5lckhUTUwpO1xuXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2VuO1xuICB9XG59XG5cbmNvbnN0IHR5cGUgPSAnZW5kT2ZMaW5lJztcblxuT2JqZWN0LmFzc2lnbihFbmRPZkxpbmVUb2tlbiwge1xuICB0eXBlOiB0eXBlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9zaWduaWZpY2FudCcpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25Ub2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZShSZWd1bGFyRXhwcmVzc2lvblRva2VuLCB0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoUmVndWxhckV4cHJlc3Npb25Ub2tlbiwgY29udGVudCwgbGluZSwgdHlwZSk7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHtcbiAgICBsZXQgcmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goUmVndWxhckV4cHJlc3Npb25Ub2tlbi5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuICAgICAgXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG4gICAgICBcbiAgICAgIGNvbnN0IHsgdHlwZSB9ID0gUmVndWxhckV4cHJlc3Npb25Ub2tlbjtcblxuICAgICAgcmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uVG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4ucmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbmNvbnN0IHR5cGUgPSAncmVndWxhckV4cHJlc3Npb24nLFxuICAgICAgcmVndWxhckV4cHJlc3Npb24gPSAvXFwvKD86XFxcXC58W15cXC9dKSpcXC8vO1xuXG5PYmplY3QuYXNzaWduKFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4sIHtcbiAgdHlwZTogdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb246IHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3NpZ25pZmljYW50Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBTdHJpbmdMaXRlcmFsVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uY2xvbmUoU3RyaW5nTGl0ZXJhbFRva2VuLCB0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoU3RyaW5nTGl0ZXJhbFRva2VuLCBjb250ZW50LCBsaW5lLCB0eXBlKTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIGxldCBzdHJpbmdMaXRlcmFsVG9rZW4gPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKFN0cmluZ0xpdGVyYWxUb2tlbi5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuICAgICAgXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG4gICAgICBcbiAgICAgIGNvbnN0IHsgdHlwZSB9ID0gU3RyaW5nTGl0ZXJhbFRva2VuO1xuXG4gICAgICBzdHJpbmdMaXRlcmFsVG9rZW4gPSBTdHJpbmdMaXRlcmFsVG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZ0xpdGVyYWxUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goU3RyaW5nTGl0ZXJhbFRva2VuLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5jb25zdCB0eXBlID0gJ3N0cmluZycsXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9cIig/OlxcXFwufFteXCJdKSpcIi87XG5cbk9iamVjdC5hc3NpZ24oU3RyaW5nTGl0ZXJhbFRva2VuLCB7XG4gIHR5cGU6IHR5cGUsXG4gIHJlZ3VsYXJFeHByZXNzaW9uOiByZWd1bGFyRXhwcmVzc2lvblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nTGl0ZXJhbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3NpZ25pZmljYW50Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBXaGl0ZXNwYWNlVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uY2xvbmUoV2hpdGVzcGFjZVRva2VuLCB0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBpc1doaXRlc3BhY2VUb2tlbigpIHtcbiAgICBjb25zdCB3aGl0ZXNwYWNlVG9rZW4gPSB0cnVlO1xuXG4gICAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcbiAgfVxuXG4gIGFzSFRNTChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmlubmVySFRNTDsgIC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoV2hpdGVzcGFjZVRva2VuLCBjb250ZW50LCBsaW5lLCB0eXBlKTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIGxldCB3aGl0ZXNwYWNlVG9rZW4gPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKFdoaXRlc3BhY2VUb2tlbi5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuICAgICAgXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG4gICAgICBcbiAgICAgIGNvbnN0IHsgdHlwZSB9ID0gV2hpdGVzcGFjZVRva2VuO1xuXG4gICAgICB3aGl0ZXNwYWNlVG9rZW4gPSBXaGl0ZXNwYWNlVG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaChXaGl0ZXNwYWNlVG9rZW4ucmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbmNvbnN0IHR5cGUgPSAnd2hpdGVzcGFjZScsXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9bXFx0IF0rLztcblxuT2JqZWN0LmFzc2lnbihXaGl0ZXNwYWNlVG9rZW4sIHtcbiAgdHlwZTogdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb246IHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBXaGl0ZXNwYWNlVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcclxuXHJcbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcclxuICAgICAgeyBzcGxpY2UgfSA9IGFycmF5VXRpbGl0aWVzO1xyXG5cclxuY2xhc3MgVG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBUb2tlbikge1xyXG4gICAgbGV0IG9mZnNldCA9IDA7XHJcbiAgICBcclxuICAgIGNvbnN0IHRva2Vuc09yQ29udGVudHNMZW5ndGggPSB0b2tlbnNPckNvbnRlbnRzLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdG9rZW5zT3JDb250ZW50c0xlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBvZmZzZXRJbmRleCA9IGluZGV4ICsgb2Zmc2V0LFxyXG4gICAgICAgICAgICB0b2tlbk9yQ29udGVudCA9IHRva2Vuc09yQ29udGVudHNbb2Zmc2V0SW5kZXhdO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiB0b2tlbk9yQ29udGVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gdG9rZW5PckNvbnRlbnQsICAvLy9cclxuICAgICAgICAgICAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQgPSB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRGcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgVG9rZW4pLFxyXG4gICAgICAgICAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudExlbmd0aCA9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgc3RhcnQgPSBvZmZzZXRJbmRleDtcclxuXHJcbiAgICAgICAgc3BsaWNlKHRva2Vuc09yQ29udGVudHMsIHN0YXJ0LCAxLCB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQpO1xyXG5cclxuICAgICAgICBvZmZzZXQgKz0gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50TGVuZ3RoIC0gMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbnM7XHJcblxyXG5mdW5jdGlvbiB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRGcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgVG9rZW4pIHtcclxuICBsZXQgcmVtYWluaW5nQ29udGVudCxcclxuICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50ID0gW10sICAgICAgIFxyXG4gICAgICB0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuICBcclxuICB3aGlsZSAodG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgIT09IC0xKSB7XHJcbiAgICBpZiAodG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPiAwKSB7XHJcbiAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCB0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCk7XHJcblxyXG4gICAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQucHVzaChyZW1haW5pbmdDb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IFRva2VuLmZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSxcclxuICAgICAgICAgIHRva2VuTGVuZ3RoID0gdG9rZW4uZ2V0TGVuZ3RoKCksXHJcbiAgICAgICAgICB0b2tlbk9mZnNldCA9IHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ICsgdG9rZW5MZW5ndGg7XHJcbiAgICBcclxuICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5wdXNoKHRva2VuKTtcclxuICAgIFxyXG4gICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHRva2VuT2Zmc2V0KTtcclxuXHJcbiAgICB0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuICB9XHJcbiAgXHJcbiAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudDtcclxuXHJcbiAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQucHVzaChyZW1haW5pbmdDb250ZW50KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQ7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgRW5kT2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L2VuZE9mJyksXHJcbiAgICAgIFN0YXJ0T2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3N0YXJ0T2YnKSxcclxuICAgICAgTWlkZGxlT2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L21pZGRsZU9mJyk7XHJcblxyXG5jbGFzcyBDb21tZW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBjb25maWd1cmF0aW9uKSB7XHJcbiAgICBsZXQgY29udGVudCA9IHRva2Vuc09yQ29udGVudHMucG9wKCksXHJcbiAgICAgICAgY29tbWVudFRva2VuLFxyXG4gICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCxcclxuICAgICAgICBwcmV2aW91c0xpbmVJbkNvbW1lbnQgPSBjb25maWd1cmF0aW9uLmlzUHJldmlvdXNMaW5lSW5Db21tZW50KCksXHJcbiAgICAgICAgaW5Db21tZW50ID0gKHByZXZpb3VzTGluZUluQ29tbWVudCA9PT0gdHJ1ZSk7XHJcblxyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgIGxldCBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7XHJcblxyXG4gICAgICBpZiAoaW5Db21tZW50KSB7XHJcbiAgICAgICAgY29uc3QgZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPSBFbmRPZkNvbW1lbnRUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCk7XHJcblxyXG4gICAgICAgIGlmIChlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9PT0gMCkge1xyXG4gICAgICAgICAgaW5Db21tZW50ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gRW5kT2ZDb21tZW50VG9rZW4uZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCA9IGNvbW1lbnRUb2tlbi5nZXRMZW5ndGgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGggPSBtaW5pbXVtQmFyTWludXNPbmUoZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQsIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IE1pZGRsZU9mQ29tbWVudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcmV2aW91c0NvbW1lbnRUb2tlbiA9IHRva2Vuc09yQ29udGVudHMucG9wKCk7XHJcblxyXG4gICAgICAgIGNvbW1lbnRUb2tlbiA9IChwcmV2aW91c0NvbW1lbnRUb2tlbiA9PT0gdW5kZWZpbmVkKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudFRva2VuIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzQ29tbWVudFRva2VuLm1lcmdlKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHMucHVzaChjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoY29tbWVudFRva2VuTGVuZ3RoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCk7XHJcblxyXG4gICAgICAgIGlmIChzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID09PSAwKSB7XHJcbiAgICAgICAgICBpbkNvbW1lbnQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4uZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCA9IGNvbW1lbnRUb2tlbi5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzLnB1c2goY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoY29tbWVudFRva2VuTGVuZ3RoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udGVudExlbmd0aCA9IG1pbmltdW1CYXJNaW51c09uZShzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50LCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb25zdCByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIHRva2Vuc09yQ29udGVudHMucHVzaChjb250ZW50KTtcclxuXHJcbiAgICAgICAgICBjb250ZW50ID0gcmVtYWluaW5nQ29udGVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91c0xpbmVJbkNvbW1lbnQgPSBpbkNvbW1lbnQ7ICAvLy9cclxuXHJcbiAgICBjb25maWd1cmF0aW9uLnNldFByZXZpb3VzTGluZUluQ29tbWVudChwcmV2aW91c0xpbmVJbkNvbW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBpbkNvbW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbnM7XHJcblxyXG5mdW5jdGlvbiBtaW5pbXVtQmFyTWludXNPbmUoKSB7XHJcbiAgY29uc3QgdmFsdWVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcclxuICAgICAgICBtaW5pbXVtQmFyTWludXNPbmUgPSB2YWx1ZXMucmVkdWNlKGZ1bmN0aW9uKG1pbmltdW1CYXJNaW51c09uZSwgdmFsdWUpIHtcclxuICAgICAgICAgIGlmICh2YWx1ZSA+IC0xKSB7XHJcbiAgICAgICAgICAgIG1pbmltdW1CYXJNaW51c09uZSA9IChtaW5pbXVtQmFyTWludXNPbmUgIT09IG51bGwpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihtaW5pbXVtQmFyTWludXNPbmUsIHZhbHVlKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIHJldHVybiBtaW5pbXVtQmFyTWludXNPbmU7XHJcbiAgICAgICAgfSwgbnVsbCk7XHJcblxyXG4gIHJldHVybiBtaW5pbXVtQmFyTWludXNPbmU7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgVG9rZW5zID0gcmVxdWlyZSgnLi4vdG9rZW5zJyksXHJcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uID0gcmVxdWlyZSgnLi4vdG9rZW4vc2lnbmlmaWNhbnQvcmVndWxhckV4cHJlc3Npb24nKTtcclxuXHJcbmNsYXNzIFJlZ3VsYXJFeHByZXNzaW9ucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSkgeyBUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBSZWd1bGFyRXhwcmVzc2lvbik7IH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvbnM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFNpZ25pZmljYW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBydWxlcykge1xyXG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zT3JDb250ZW50cy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCB0b2tlbk9yUmVtYWluaW5nQ29udGVudCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuT3JSZW1haW5pbmdDb250ZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0b2tlbk9yUmVtYWluaW5nQ29udGVudCwgIC8vL1xyXG4gICAgICAgICAgICAgICAgICAgIGRlcHRoID0gMCxcclxuICAgICAgICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VucyA9IHNpZ25pZmljYW50VG9rZW5zRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIHJ1bGVzLCBkZXB0aCk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQoc2lnbmlmaWNhbnRUb2tlbnMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5vblNpZ25pZmljYW50VG9rZW4gPSB0b2tlbk9yUmVtYWluaW5nQ29udGVudDsgIC8vL1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRva2Vucy5wdXNoKG5vblNpZ25pZmljYW50VG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgICAgICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5zO1xyXG5cclxuZnVuY3Rpb24gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgcnVsZXMsIGRlcHRoKSB7XHJcbiAgbGV0IHNpZ25pZmljYW50VG9rZW5zID0gW107XHJcblxyXG4gIGlmIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgY29uc3QgcnVsZSA9IHJ1bGVzLmdldFJ1bGUoZGVwdGgpO1xyXG5cclxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IG5leHREZXB0aCA9IGRlcHRoICsgMSxcclxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IHJ1bGUuc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICAgIGlmIChzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID09PSAtMSkge1xyXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgcnVsZXMsIG5leHREZXB0aCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUuc2lnbmlmaWNhbnRUb2tlbkZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSxcclxuICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VuTGVuZ3RoID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRMZW5ndGgoKSxcclxuICAgICAgICAgICAgICBsZWZ0ID0gc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCwgIC8vL1xyXG4gICAgICAgICAgICAgIHJpZ2h0ID0gc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCArIHNpZ25pZmljYW50VG9rZW5MZW5ndGgsICAvLy9cclxuICAgICAgICAgICAgICBsZWZ0Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGxlZnQpLFxyXG4gICAgICAgICAgICAgIHJpZ2h0Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHJpZ2h0KSxcclxuICAgICAgICAgICAgICBsZWZ0U2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShsZWZ0Q29udGVudCwgbGluZSwgcnVsZXMsIG5leHREZXB0aCksXHJcbiAgICAgICAgICAgICAgcmlnaHRTaWduaWZpY2FudFRva2VucyA9IHNpZ25pZmljYW50VG9rZW5zRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKHJpZ2h0Q29udGVudCwgbGluZSwgcnVsZXMsIGRlcHRoKTtcclxuXHJcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBbXS5jb25jYXQobGVmdFNpZ25pZmljYW50VG9rZW5zKS5jb25jYXQoc2lnbmlmaWNhbnRUb2tlbikuY29uY2F0KHJpZ2h0U2lnbmlmaWNhbnRUb2tlbnMpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vIHJ1bGUgdG8gcGFyc2UgdGhlIGNvbnRlbnQgJyR7Y29udGVudH0nLmApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5zO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFRva2VucyA9IHJlcXVpcmUoJy4uL3Rva2VucycpLFxyXG4gICAgICBTdHJpbmdMaXRlcmFsVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdMaXRlcmFsJyk7XHJcblxyXG5jbGFzcyBTdHJpbmdMaXRlcmFsVG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKSB7IFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIFN0cmluZ0xpdGVyYWxUb2tlbik7IH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmdMaXRlcmFsVG9rZW5zO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBUb2tlbnMgPSByZXF1aXJlKCcuLi90b2tlbnMnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4vc2lnbmlmaWNhbnQvd2hpdGVzcGFjZScpO1xyXG5cclxuY2xhc3MgV2hpdGVzcGFjZVRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSkgeyBUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBXaGl0ZXNwYWNlVG9rZW4pOyB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gV2hpdGVzcGFjZVRva2VucztcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeWxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHsgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCwgVmVydGljYWxTcGxpdHRlciB9ID0gZWFzeWxheW91dDtcblxuY29uc3QgdmVydGljYWxTcGxpdHRlclNlbGVjdG9yID0gJyN2ZXJ0aWNhbFNwbGl0dGVyJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudFNlbGVjdG9yID0gJyNzaXplYWJsZUVsZW1lbnQnLFxuICAgICAgZW50cmllc1RleHRhcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjZW50cmllcycsXG4gICAgICBjb250ZW50VGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSNjb250ZW50JyxcbiAgICAgIHRva2Vuc1RleHRhcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjdG9rZW5zJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudCA9IG5ldyBTaXplYWJsZUVsZW1lbnQoc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IpLFxuICAgICAgZW50cmllc1RleHRhcmVhID0gbmV3IFRleHRhcmVhKGVudHJpZXNUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICB0b2tlbnNUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYSh0b2tlbnNUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGJlZm9yZVNpemVhYmxlRWxlbWVudCA9IGZhbHNlLFxuICAgICAgYWZ0ZXJTaXplYWJsZUVsZW1lbnQgPSB0cnVlO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcih2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQpO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bihlbnRyaWVzLCBMZXhlcikge1xuICAgIGNvbnN0IGVudHJpZXNUZXh0QXJlYVZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZW50cmllcywgbnVsbCwgJyAgJyk7XG5cbiAgICBlbnRyaWVzVGV4dGFyZWEuc2V0VmFsdWUoZW50cmllc1RleHRBcmVhVmFsdWUpO1xuXG4gICAgZW50cmllc1RleHRhcmVhLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgRXhhbXBsZS51cGRhdGVUb2tlbnMoTGV4ZXIpOyBcbiAgICB9KTtcblxuICAgIGNvbnRlbnRUZXh0YXJlYS5vbigna2V5dXAnLCBmdW5jdGlvbigpIHtcbiAgICAgIEV4YW1wbGUudXBkYXRlVG9rZW5zKExleGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVUb2tlbnMoTGV4ZXIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZW50cmllc1RleHRhcmVhVmFsdWUgPSBlbnRyaWVzVGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgIGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICBlbnRyaWVzID0gSlNPTi5wYXJzZShlbnRyaWVzVGV4dGFyZWFWYWx1ZSksXG4gICAgICAgICAgICBsZXhlciA9IExleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYVZhbHVlLCAgLy8vXG4gICAgICAgICAgICBsaW5lcyA9IGxleGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICBodG1scyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbihodG1scywgbGluZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBudWxsLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIVE1MID0gbGluZS5hc0hUTUwoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICBodG1sID0gYCR7bGluZU51bWJlcn06ICR7bGluZUhUTUx9YDtcbiAgXG4gICAgICAgICAgICAgIGh0bWxzICs9IGh0bWw7XG4gIFxuICAgICAgICAgICAgICByZXR1cm4gaHRtbHM7XG4gICAgICAgICAgICB9LCAnJyksXG4gICAgICAgICAgICB0b2tlbnNUZXh0YXJlYUhUTUwgPSBodG1sczsgIC8vL1xuXG4gICAgICB0b2tlbnNUZXh0YXJlYS5odG1sKHRva2Vuc1RleHRhcmVhSFRNTCk7XG5cbiAgICAgIGNvbnRlbnRUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29udGVudFRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuXG4gICAgICBFeGFtcGxlLmNsZWFyVG9rZW5zKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyVG9rZW5zKCkge1xuICAgIGNvbnN0IHRva2Vuc1RleHRhcmVhSFRNTCA9ICcnO1xuXG4gICAgdG9rZW5zVGV4dGFyZWEuaHRtbCh0b2tlbnNUZXh0YXJlYUhUTUwpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEJORkV4YW1wbGU6IHJlcXVpcmUoJy4vZXhhbXBsZXMvYm5mJyksXG4gIEJhc2ljRXhhbXBsZTogcmVxdWlyZSgnLi9leGFtcGxlcy9iYXNpYycpLFxuICBGbG9yZW5jZUV4YW1wbGU6IHJlcXVpcmUoJy4vZXhhbXBsZXMvZmxvcmVuY2UnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRXhhbXBsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGUnKSxcbiAgICAgIEJhc2ljTGV4ZXIgPSByZXF1aXJlKCcuLi9iYXNpYy9sZXhlcicpO1xuXG5jbGFzcyBCYXNpY0V4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IGVudHJpZXMgPSBCYXNpY0xleGVyLmVudHJpZXMsXG4gICAgICAgICAgTGV4ZXIgPSBCYXNpY0xleGVyO1xuXG4gICAgRXhhbXBsZS5ydW4oZW50cmllcywgTGV4ZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNFeGFtcGxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgQk5GTGV4ZXIgPSByZXF1aXJlKCcuLi9ibmYvbGV4ZXInKTtcblxuY2xhc3MgQk5GRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgY29uc3QgZW50cmllcyA9IEJORkxleGVyLmVudHJpZXMsXG4gICAgICAgICAgTGV4ZXIgPSBCTkZMZXhlcjtcblxuICAgIEV4YW1wbGUucnVuKGVudHJpZXMsIExleGVyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJORkV4YW1wbGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgICBGbG9yZW5jZUxleGVyID0gcmVxdWlyZSgnLi4vZmxvcmVuY2UvbGV4ZXInKTtcblxuY2xhc3MgRmxvcmVuY2VFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gRmxvcmVuY2VMZXhlci5lbnRyaWVzLFxuICAgICAgICAgIExleGVyID0gRmxvcmVuY2VMZXhlcjtcblxuICAgIEV4YW1wbGUucnVuKGVudHJpZXMsIExleGVyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZTtcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcblxyXG4gIHsgXCJzcGVjaWFsXCIgICAgOiBcIix8O3ziiqJ8PXw6Onw6fFxcXFxbfFxcXFxdfFxcXFx7fFxcXFx9fFxcXFwofFxcXFwpfFxcXFwuXFxcXC5cXFxcLnxcXFxcLlxcXFwuXCIgfSxcclxuXHJcbiAgeyBcImtleXdvcmRcIiAgICA6IFwiXig/OlJ1bGV8QXhpb218VGhlb3JlbXxMZW1tYXxNZXRhbGVtbWF8TWV0YXRoZW9yZW18UHJlbWlzZXN8UHJlbWlzZXxDb25jbHVzaW9ufFByb29mfFRoZXJlZm9yZXxTdXBwb3NlfFRoZW58SGVuY2V8VHlwZXN8VHlwZXxWYXJpYWJsZXN8VmFyaWFibGV8Q29udGV4dHN8Q29udGV4dHxDb25zdHJ1Y3RvcnN8Q29uc3RydWN0b3J8RGVwZW5kZW50VHlwZXN8RGVwZW5kZW50VHlwZXxRdWFsaWZpZWRNZXRhdmFyaWFibGVzfFF1YWxpZmllZE1ldGF2YXJpYWJsZXxNZXRhdmFyaWFibGVzfE1ldGF2YXJpYWJsZXxBYmJyZXZpYXRpb25zfEFiYnJldmlhdGlvbnxPYmplY3R8RGVmaW5pdGlvbnxmb3J8bGV0fGZyb218YnkpJFwiIH0sXHJcblxyXG4gIHsgXCJ1bmFzc2lnbmVkXCIgOiBcIl4uKiRcIiB9XHJcblxyXG5dO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBlbnRyaWVzO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXHJcbiAgICAgIEZsb3JlbmNlTGluZSA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL2xpbmUnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKTtcclxuXHJcbmNsYXNzIEZsb3JlbmNlTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXJzTGV4aWNhbFBhdHRlcm4oY29tYmluZWRDdXN0b21HcmFtbWFyc0xleGljYWxQYXR0ZXJuKSB7XHJcbiAgICBjb25zdCBjdXN0b20gPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJzTGV4aWNhbFBhdHRlcm4sIC8vL1xyXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckVudHJ5ID0ge1xyXG4gICAgICAgICAgICBjdXN0b206IGN1c3RvbVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJSdWxlID0gIENvbW1vbkxleGVyLnJ1bGVGcm9tRW50cnkoY3VzdG9tR3JhbW1hckVudHJ5KSxcclxuICAgICAgICAgIHJ1bGVzID0gQ29tbW9uTGV4ZXIucnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKTtcclxuXHJcbiAgICBydWxlcy5hZGRSdWxlKGN1c3RvbUdyYW1tYXJSdWxlKTtcclxuXHJcbiAgICBjb25zdCBmbG9yZW5jZUxleGVyID0gbmV3IEZsb3JlbmNlTGV4ZXIocnVsZXMsIEZsb3JlbmNlTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBDb21tb25MZXhlci5ydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgZmxvcmVuY2VMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzLCBGbG9yZW5jZUxpbmUpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyk7XHJcblxyXG4gICAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKEZsb3JlbmNlTGV4ZXIsIHtcclxuICBlbnRyaWVzOiBlbnRyaWVzXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUxleGVyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBDb21tb25MaW5lID0gcmVxdWlyZSgnLi4vY29tbW9uL2xpbmUnKSxcclxuICAgICAgQ29tbWVudFRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvY29tbWVudCcpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy93aGl0ZXNwYWNlJyksXHJcbiAgICAgIFN0cmluZ0xpdGVyYWxUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3N0cmluZ0xpdGVyYWwnKSxcclxuICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9yZWd1bGFyRXhwcmVzc2lvbicpLFxyXG4gICAgICBFbmRPZkxpbmVUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9lbmRPZkxpbmUnKTtcclxuXHJcbmNsYXNzIEZsb3JlbmNlTGluZSBleHRlbmRzIENvbW1vbkxpbmUge1xyXG4gIGluaXRpYWxpc2UoQ29tbWVudFRva2VucywgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMsIFN0cmluZ0xpdGVyYWxUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpIHtcclxuICAgIHN1cGVyLmluaXRpYWxpc2UoQ29tbWVudFRva2VucywgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMsIFN0cmluZ0xpdGVyYWxUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpO1xyXG5cclxuICAgIGNvbnN0IGZsb3JlbmNlTGluZSA9IHRoaXMsICAvLy9cclxuICAgICAgICAgIGxpbmUgPSBmbG9yZW5jZUxpbmUsICAvLy9cclxuICAgICAgICAgIHRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XHJcblxyXG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5mcm9tTGluZShsaW5lKTtcclxuXHJcbiAgICB0b2tlbnMucHVzaChlbmRPZkxpbmVUb2tlbik7XHJcblxyXG4gICAgdGhpcy5zZXRUb2tlbnModG9rZW5zKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tQ29udGVudFJ1bGVzQW5kQ29uZmlndXJhdGlvbihjb250ZW50LCBydWxlcywgY29uZmlndXJhdGlvbikge1xyXG4gICAgY29uc3QgZmxvcmVuY2VMaW5lID0gc3VwZXIuZnJvbUNvbnRlbnRSdWxlc0FuZENvbmZpZ3VyYXRpb24oRmxvcmVuY2VMaW5lLCBjb250ZW50LCBydWxlcywgY29uZmlndXJhdGlvbik7XHJcblxyXG4gICAgZmxvcmVuY2VMaW5lLmluaXRpYWxpc2UoQ29tbWVudFRva2VucywgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMsIFN0cmluZ0xpdGVyYWxUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlTGluZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpIHsgXHJcblxyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblRva2VucztcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBzYW5pdGlzZUNvbnRlbnQoY29udGVudCkge1xuICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gY29udGVudC5yZXBsYWNlKC8mLywnJmFtcDsnKS5yZXBsYWNlKC88LywgJyZsdDsnKS5yZXBsYWNlKC8+LywgJyZndDsnKTtcblxuICByZXR1cm4gc2FuaXRpc2VkQ29udGVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNhbml0aXNlQ29udGVudDogc2FuaXRpc2VDb250ZW50XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBzaWduaWZpY2FudFRva2Vuc0Zyb21MaW5lcyhsaW5lcykge1xuICBjb25zdCB0b2tlbnMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCBsaW5lKSB7XG4gICAgICAgICAgY29uc3QgbGluZVRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XG5cbiAgICAgICAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KGxpbmVUb2tlbnMpO1xuXG4gICAgICAgICAgcmV0dXJuIHRva2VucztcbiAgICAgICAgICB9LCBbXSksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSB0b2tlbnMucmVkdWNlKGZ1bmN0aW9uKHNpZ25pZmljYW50VG9rZW5zLCB0b2tlbikge1xuICAgICAgICAgICAgY29uc3QgdG9rZW5TaWduaWZpY2FudFRva2VuID0gdG9rZW4uaXNTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgICAgICAgIGlmICh0b2tlblNpZ25pZmljYW50VG9rZW4pIHtcbiAgICAgICAgICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHRva2VuOyAvLy9cblxuICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2Vucy5wdXNoKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbnM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gIHJldHVybiBzaWduaWZpY2FudFRva2Vucztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNpZ25pZmljYW50VG9rZW5zRnJvbUxpbmVzOiBzaWduaWZpY2FudFRva2Vuc0Zyb21MaW5lc1xufTtcbiIsIiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9wdGlvbnM6IHJlcXVpcmUoJy4vbGliL29wdGlvbnMnKSxcbiAgU2l6ZWFibGVFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9zaXplYWJsZUVsZW1lbnQnKSxcbiAgVmVydGljYWxTcGxpdHRlcjogcmVxdWlyZSgnLi9saWIvc3BsaXR0ZXIvdmVydGljYWwnKSxcbiAgSG9yaXpvbnRhbFNwbGl0dGVyOiByZXF1aXJlKCcuL2xpYi9zcGxpdHRlci9ob3Jpem9udGFsJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgQm9keSB9ID0gZWFzeTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbmxldCBwcmV2aW91c0N1cnNvcjsgIC8vL1xuXG5jbGFzcyBjdXJzb3Ige1xuICBzdGF0aWMgY29sdW1uUmVzaXplKCkge1xuICAgIGNvbnN0IGN1cnJlbnRDdXJzb3IgPSB0aGlzLmdldEN1cnJlbnRDdXJzb3IoKTtcblxuICAgIGlmIChjdXJyZW50Q3Vyc29yICE9PSAnY29sLXJlc2l6ZScpIHtcbiAgICAgIHByZXZpb3VzQ3Vyc29yID0gY3VycmVudEN1cnNvcjtcblxuICAgICAgdGhpcy5zZXRDdXJzb3IoJ2NvbC1yZXNpemUnKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcm93UmVzaXplKCkge1xuICAgIGNvbnN0IGN1cnJlbnRDdXJzb3IgPSB0aGlzLmdldEN1cnJlbnRDdXJzb3IoKTtcblxuICAgIGlmIChjdXJyZW50Q3Vyc29yICE9PSAncm93LXJlc2l6ZScpIHtcbiAgICAgIHByZXZpb3VzQ3Vyc29yID0gY3VycmVudEN1cnNvcjtcblxuICAgICAgdGhpcy5zZXRDdXJzb3IoJ3Jvdy1yZXNpemUnKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcmVzZXQoKSB7XG4gICAgdGhpcy5zZXRDdXJzb3IocHJldmlvdXNDdXJzb3IpOyAvLy9cbiAgfVxuXG4gIHN0YXRpYyBnZXRDdXJyZW50Q3Vyc29yKCkge1xuICAgIGNvbnN0IGN1cnJlbnRDdXJzb3IgPSBib2R5LmNzcygnY3Vyc29yJyk7ICAvLy9cblxuICAgIHJldHVybiBjdXJyZW50Q3Vyc29yIHx8ICdhdXRvJzsgLy8vXG4gIH1cblxuICBzdGF0aWMgc2V0Q3Vyc29yKGN1cnNvcikge1xuICAgIGNvbnN0IGNzcyA9IHtcbiAgICAgIGN1cnNvcjogY3Vyc29yXG4gICAgfTtcblxuICAgIGJvZHkuY3NzKGNzcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjdXJzb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkc6ICdFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBvcHRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIFNpemVhYmxlRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTaXplYWJsZUVsZW1lbnQsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oU2l6ZWFibGVFbGVtZW50LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3NpemVhYmxlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaXplYWJsZUVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IG9wdGlvbnMgPSByZXF1aXJlKCcuL29wdGlvbnMnKTtcblxuY29uc3QgRVNDQVBFX0tFWUNPREUgPSAyNztcblxuY29uc3QgeyBFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HIH0gPSBvcHRpb25zLFxuICAgICAgeyB3aW5kb3csIEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIFNwbGl0dGVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBzdGFydERyYWdnaW5nSGFuZGxlciAgPSBmdW5jdGlvbigpIHt9LCBzdG9wRHJhZ2dpbmdIYW5kbGVyID0gZnVuY3Rpb24oKSB7fSwgZHJhZ0hhbmRsZXIgPSBmdW5jdGlvbigpIHt9LCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLmJlZm9yZVNpemVhYmxlRWxlbWVudCA9IGJlZm9yZVNpemVhYmxlRWxlbWVudDtcbiAgICB0aGlzLmFmdGVyU2l6ZWFibGVFbGVtZW50ID0gYWZ0ZXJTaXplYWJsZUVsZW1lbnQ7XG5cbiAgICB0aGlzLnN0YXJ0RHJhZ2dpbmdIYW5kbGVyID0gc3RhcnREcmFnZ2luZ0hhbmRsZXI7XG4gICAgdGhpcy5zdG9wRHJhZ2dpbmdIYW5kbGVyID0gc3RvcERyYWdnaW5nSGFuZGxlcjtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgaXNCZWZvcmVTaXplYWJsZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmVmb3JlU2l6ZWFibGVFbGVtZW50O1xuICB9XG5cbiAgaXNBZnRlclNpemVhYmxlRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hZnRlclNpemVhYmxlRWxlbWVudDtcbiAgfVxuXG4gIGdldERyYWdIYW5kbGVyKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdIYW5kbGVyO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG5cbiAgaXNEcmFnZ2luZygpIHtcbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaGFzQ2xhc3MoJ2RyYWdnaW5nJyk7XG4gICAgXG4gICAgcmV0dXJuIGRyYWdnaW5nO1xuICB9XG4gIFxuICBnZXREaXJlY3Rpb24oKSB7XG4gICAgbGV0IGRpcmVjdGlvbjtcblxuICAgIGlmICh0aGlzLmJlZm9yZVNpemVhYmxlRWxlbWVudCkge1xuICAgICAgZGlyZWN0aW9uID0gKzE7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWZ0ZXJTaXplYWJsZUVsZW1lbnQpIHtcbiAgICAgIGRpcmVjdGlvbiA9IC0xO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rpb247XG4gIH1cblxuICBnZXRTaXplYWJsZUVsZW1lbnQoKSB7XG4gICAgbGV0IHNpemVhYmxlRWxlbWVudDtcblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCk7XG5cbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgY2FzZSAtMTpcbiAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCk7IC8vL1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSArMTpcbiAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXROZXh0U2libGluZ0VsZW1lbnQoKTsgLy8vXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBzaXplYWJsZUVsZW1lbnQ7XG4gIH1cblxuICBpc09wdGlvblByZXNlbnQob3B0aW9uKSB7XG4gICAgY29uc3Qgb3B0aW9uUHJlc2VudCA9ICh0aGlzLm9wdGlvbnNbb3B0aW9uXSA9PT0gdHJ1ZSk7IC8vL1xuXG4gICAgcmV0dXJuIG9wdGlvblByZXNlbnQ7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgc2V0T3B0aW9uKG9wdGlvbikge1xuICAgIHRoaXMub3B0aW9uc1tvcHRpb25dID0gdHJ1ZTtcbiAgfVxuXG4gIHVuc2V0T3B0aW9uKG9wdGlvbikge1xuICAgIGRlbGV0ZSh0aGlzLm9wdGlvbnNbb3B0aW9uXSk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgfVxuXG4gIHN0YXJ0RHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQgPSB0aGlzLmlzT3B0aW9uUHJlc2VudChFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HKTtcblxuICAgIGlmIChlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCkge1xuICAgICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZENsYXNzKCdkcmFnZ2luZycpO1xuICAgIFxuICAgIHRoaXMuc3RhcnREcmFnZ2luZ0hhbmRsZXIoKTtcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICBjb25zdCBlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCA9IHRoaXMuaXNPcHRpb25QcmVzZW50KEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcpO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50KSB7XG4gICAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUNsYXNzKCdkcmFnZ2luZycpO1xuXG4gICAgdGhpcy5zdG9wRHJhZ2dpbmdIYW5kbGVyKCk7XG4gIH1cblxuICBvbkRyYWcoZHJhZ0hhbmRsZXIpIHtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlcihrZXlDb2RlKSB7XG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXNlKGRpc2FibGVkKSB7XG4gICAgKGRpc2FibGVkID09PSB0cnVlKSA/IC8vL1xuICAgICAgdGhpcy5kaXNhYmxlKCkgOlxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xuXG4gICAgd2luZG93Lm9uKCdtb3VzZXVwIGJsdXInLCB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKSk7ICAvLy9cblxuICAgIHdpbmRvdy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMub25Nb3VzZURvd24odGhpcy5tb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5vbk1vdXNlT3Zlcih0aGlzLm1vdXNlT3Zlci5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VPdXQodGhpcy5tb3VzZU91dC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgb25TdGFydERyYWdnaW5nLCBvblN0b3BEcmFnZ2luZywgb25EcmFnLCBvcHRpb25zLCBkaXNhYmxlZCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBzdGFydERyYWdnaW5nSGFuZGxlciA9IG9uU3RhcnREcmFnZ2luZywgLy8vXG4gICAgICAgICAgc3RvcERyYWdnaW5nSGFuZGxlciA9IG9uU3RvcERyYWdnaW5nLCAvLy9cbiAgICAgICAgICBkcmFnSGFuZGxlciA9IG9uRHJhZywgLy8vXG4gICAgICAgICAgc3BsaXR0ZXIgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBzdGFydERyYWdnaW5nSGFuZGxlciwgc3RvcERyYWdnaW5nSGFuZGxlciwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpO1xuXG4gICAgc3BsaXR0ZXIuaW5pdGlhbGlzZShkaXNhYmxlZCk7XG5cbiAgICByZXR1cm4gc3BsaXR0ZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTcGxpdHRlciwge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnYmVmb3JlU2l6ZWFibGVFbGVtZW50JyxcbiAgICAnYWZ0ZXJTaXplYWJsZUVsZW1lbnQnLFxuICAgICdvblN0YXJ0RHJhZ2dpbmcnLFxuICAgICdvblN0b3BEcmFnZ2luZycsXG4gICAgJ29uRHJhZycsXG4gICAgJ29wdGlvbnMnLFxuICAgICdkaXNhYmxlZCdcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3BsaXR0ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN1cnNvciA9IHJlcXVpcmUoJy4uL2N1cnNvcicpLFxuICAgICAgU3BsaXR0ZXIgPSByZXF1aXJlKCcuLi9zcGxpdHRlcicpO1xuXG5jbGFzcyBIb3Jpem9udGFsU3BsaXR0ZXIgZXh0ZW5kcyBTcGxpdHRlciB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBzdGFydERyYWdnaW5nSGFuZGxlciwgc3RvcERyYWdnaW5nSGFuZGxlciwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihzZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgc3RhcnREcmFnZ2luZ0hhbmRsZXIsIHN0b3BEcmFnZ2luZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBvcHRpb25zKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBtb3VzZVVwKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cblxuICAgICAgY3Vyc29yLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgICBkcmFnSGFuZGxlciA9IHRoaXMuZ2V0RHJhZ0hhbmRsZXIoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2l6ZWFibGVFbGVtZW50KCksXG4gICAgICAgICAgICBwcmV2aW91c01vdXNlVG9wID0gdGhpcy5nZXRQcmV2aW91c01vdXNlVG9wKCksXG4gICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCA9IHRoaXMuZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQoKSxcbiAgICAgICAgICAgIHJlbGF0aXZlTW91c2VUb3AgPSBtb3VzZVRvcCAtIHByZXZpb3VzTW91c2VUb3A7XG5cbiAgICAgICAgbGV0IHNpemVhYmxlRWxlbWVudEhlaWdodCA9IHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0IC0gZGlyZWN0aW9uICogcmVsYXRpdmVNb3VzZVRvcDtcblxuICAgICAgICBjb25zdCBoZWlnaHQgPSBgJHtzaXplYWJsZUVsZW1lbnRIZWlnaHR9cHhgO1xuXG4gICAgICAgIHNpemVhYmxlRWxlbWVudC5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgICAgICBzaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBzaXplYWJsZUVsZW1lbnQuZ2V0SGVpZ2h0KCk7ICAvLy9cblxuICAgICAgICBkcmFnSGFuZGxlcihzaXplYWJsZUVsZW1lbnRIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzTW91c2VUb3AgPSBtb3VzZVRvcCwgIC8vL1xuICAgICAgICAgICAgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2l6ZWFibGVFbGVtZW50KCksXG4gICAgICAgICAgICBzaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBzaXplYWJsZUVsZW1lbnQuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCA9IHNpemVhYmxlRWxlbWVudEhlaWdodDsgIC8vLyBcblxuICAgICAgdGhpcy5zZXRQcmV2aW91c01vdXNlVG9wKHByZXZpb3VzTW91c2VUb3ApO1xuXG4gICAgICB0aGlzLnNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KTtcblxuICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcoKTtcbiAgICAgIH1cblxuICAgICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3ZlcigpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0KCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBnZXRQcmV2aW91c01vdXNlVG9wKCkgeyByZXR1cm4gdGhpcy5mcm9tU3RhdGUoJ3ByZXZpb3VzTW91c2VUb3AnKTsgfVxuXG4gIGdldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5mcm9tU3RhdGUoJ3ByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0Jyk7IH1cblxuICBzZXRQcmV2aW91c01vdXNlVG9wKHByZXZpb3VzTW91c2VUb3ApIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VUb3A6IHByZXZpb3VzTW91c2VUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodDogcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c01vdXNlVG9wID0gbnVsbCxcbiAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VUb3A6IHByZXZpb3VzTW91c2VUb3AsXG4gICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodDogcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBTcGxpdHRlci5mcm9tUHJvcGVydGllcyhIb3Jpem9udGFsU3BsaXR0ZXIsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oSG9yaXpvbnRhbFNwbGl0dGVyLCB7XG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnaG9yaXpvbnRhbCBzcGxpdHRlcidcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSG9yaXpvbnRhbFNwbGl0dGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdXJzb3IgPSByZXF1aXJlKCcuLi9jdXJzb3InKSxcbiAgICAgIFNwbGl0dGVyID0gcmVxdWlyZSgnLi4vc3BsaXR0ZXInKTtcblxuY2xhc3MgVmVydGljYWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIHN0YXJ0RHJhZ2dpbmdIYW5kbGVyLCBzdG9wRHJhZ2dpbmdIYW5kbGVyLCBkcmFnSGFuZGxlciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBzdGFydERyYWdnaW5nSGFuZGxlciwgc3RvcERyYWdnaW5nSGFuZGxlciwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpO1xuICAgIFxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBtb3VzZVVwKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cblxuICAgICAgY3Vyc29yLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgICAgIGRyYWdIYW5kbGVyID0gdGhpcy5nZXREcmFnSGFuZGxlcigpLFxuICAgICAgICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpLFxuICAgICAgICAgICAgICBwcmV2aW91c01vdXNlTGVmdCA9IHRoaXMuZ2V0UHJldmlvdXNNb3VzZUxlZnQoKSxcbiAgICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCgpLFxuICAgICAgICAgICAgICByZWxhdGl2ZU1vdXNlTGVmdCA9IG1vdXNlTGVmdCAtIHByZXZpb3VzTW91c2VMZWZ0O1xuICAgICAgICBcbiAgICAgICAgbGV0IHNpemVhYmxlRWxlbWVudFdpZHRoID0gcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCAtIGRpcmVjdGlvbiAqIHJlbGF0aXZlTW91c2VMZWZ0O1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgd2lkdGggPSBgJHtzaXplYWJsZUVsZW1lbnRXaWR0aH1weGA7XG5cbiAgICAgICAgc2l6ZWFibGVFbGVtZW50LnNldFdpZHRoKHdpZHRoKTtcblxuICAgICAgICBzaXplYWJsZUVsZW1lbnRXaWR0aCA9IHNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpOyAgLy8vXG5cbiAgICAgICAgZHJhZ0hhbmRsZXIoc2l6ZWFibGVFbGVtZW50V2lkdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzTW91c2VMZWZ0ID0gbW91c2VMZWZ0LCAgLy8vXG4gICAgICAgICAgICBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpLFxuICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudFdpZHRoID0gc2l6ZWFibGVFbGVtZW50LmdldFdpZHRoKCksXG4gICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoID0gc2l6ZWFibGVFbGVtZW50V2lkdGg7ICAvLy8gXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNNb3VzZUxlZnQocHJldmlvdXNNb3VzZUxlZnQpO1xuICAgICAgXG4gICAgICB0aGlzLnNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgocHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCk7XG5cbiAgICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU92ZXIoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU91dCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJlc2V0KCk7XG4gICAgfVxuICB9XG4gIFxuICBnZXRQcmV2aW91c01vdXNlTGVmdCgpIHsgcmV0dXJuIHRoaXMuZnJvbVN0YXRlKCdwcmV2aW91c01vdXNlTGVmdCcpOyB9XG5cbiAgZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZnJvbVN0YXRlKCdwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoJyk7IH1cbiAgXG4gIHNldFByZXZpb3VzTW91c2VMZWZ0KHByZXZpb3VzTW91c2VMZWZ0KSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c01vdXNlTGVmdDogcHJldmlvdXNNb3VzZUxlZnRcbiAgICB9KTtcbiAgfVxuICBcbiAgc2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aChwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoOiBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNNb3VzZUxlZnQgPSBudWxsLFxuICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGggPSBudWxsO1xuICAgIFxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlvdXNNb3VzZUxlZnQ6IHByZXZpb3VzTW91c2VMZWZ0LFxuICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aDogcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aFxuICAgIH0pOyAgICBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBTcGxpdHRlci5mcm9tUHJvcGVydGllcyhWZXJ0aWNhbFNwbGl0dGVyLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFZlcnRpY2FsU3BsaXR0ZXIsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd2ZXJ0aWNhbCBzcGxpdHRlcidcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxTcGxpdHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHdpbmRvdzogcmVxdWlyZSgnLi9saWIvd2luZG93JyksXG4gIGRvY3VtZW50OiByZXF1aXJlKCcuL2xpYi9kb2N1bWVudCcpLFxuICBEaXY6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvZGl2JyksXG4gIFNwYW46IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvc3BhbicpLFxuICBCb2R5OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2JvZHknKSxcbiAgTGluazogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9saW5rJyksXG4gIFNlbGVjdDogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9zZWxlY3QnKSxcbiAgQnV0dG9uOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2J1dHRvbicpLFxuICBDaGVja2JveDogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9jaGVja2JveCcpLFxuICBFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50JyksXG4gIFRleHRFbGVtZW50OiByZXF1aXJlKCcuL2xpYi90ZXh0RWxlbWVudCcpLFxuICBJbnB1dDogcmVxdWlyZSgnLi9saWIvaW5wdXRFbGVtZW50L2lucHV0JyksXG4gIFRleHRhcmVhOiByZXF1aXJlKCcuL2xpYi9pbnB1dEVsZW1lbnQvdGV4dGFyZWEnKSxcbiAgSW5wdXRFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9pbnB1dEVsZW1lbnQnKSxcbiAgQm91bmRzOiByZXF1aXJlKCcuL2xpYi9taXNjL2JvdW5kcycpLFxuICBPZmZzZXQ6IHJlcXVpcmUoJy4vbGliL21pc2Mvb2Zmc2V0JyksXG4gIFJlYWN0OiByZXF1aXJlKCcuL2xpYi9yZWFjdCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyksXG4gICAgICBrZXlNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4va2V5Jyk7XG5cbmNsYXNzIERvY3VtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQ7IC8vL1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBldmVudE1peGluKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBjbGlja01peGluKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGluKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IERvY3VtZW50KCk7ICAvLy9cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IE9mZnNldCA9IHJlcXVpcmUoJy4vbWlzYy9vZmZzZXQnKSxcbiAgICAgIEJvdW5kcyA9IHJlcXVpcmUoJy4vbWlzYy9ib3VuZHMnKSxcbiAgICAgIGpzeE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9qc3gnKSxcbiAgICAgIGV2ZW50TWl4aW4gPSByZXF1aXJlKCcuL21peGluL2V2ZW50JyksXG4gICAgICBjbGlja01peGluID0gcmVxdWlyZSgnLi9taXhpbi9jbGljaycpLFxuICAgICAgc2Nyb2xsTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3Njcm9sbCcpLFxuICAgICAgcmVzaXplTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3Jlc2l6ZScpLFxuICAgICAgbW91c2VNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vbW91c2UnKSxcbiAgICAgIGtleU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9rZXknKSxcbiAgICAgIGRvbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2RvbScpLFxuICAgICAgb2JqZWN0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvb2JqZWN0Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgY29tYmluZSB9ID0gb2JqZWN0VXRpbGl0aWVzLFxuICAgICAgeyBmaXJzdCwgYXVnbWVudCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IsIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3IsIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzLCBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IsIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIH0gPSBkb21VdGlsaXRpZXM7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpczsgLy8vXG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cbiAgXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IHdpZHRoID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5zdHlsZSgnd2lkdGgnLCB3aWR0aCk7IH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCBoZWlnaHQgPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy5zdHlsZSgnaGVpZ2h0JywgaGVpZ2h0KTsgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSAnJzsgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcHJlcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBmaXJzdENoaWxkRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIGFkZChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSAnYmxvY2snKSB7IHRoaXMuZGlzcGxheShkaXNwbGF5U3R5bGUpOyB9XG5cbiAgaGlkZSgpIHsgdGhpcy5zdHlsZSgnZGlzcGxheScsICdub25lJyk7IH1cblxuICBkaXNwbGF5KGRpc3BsYXkpIHsgdGhpcy5zdHlsZSgnZGlzcGxheScsIGRpc3BsYXkpOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKCdkaXNhYmxlZCcpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7IH1cblxuICBpc0VuYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKSxcbiAgICAgICAgICBlbmFibGVkID0gIWRpc2FibGVkO1xuXG4gICAgcmV0dXJuIGVuYWJsZWQ7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cbiAgXG4gIGlzRGlzcGxheWVkKCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLnN0eWxlKCdkaXNwbGF5JyksXG4gICAgICAgICAgZGlzcGxheWVkID0gKGRpc3BsYXkgIT09ICdub25lJyk7XG4gICAgXG4gICAgcmV0dXJuIGRpc3BsYXllZDtcbiAgfVxuXG4gc3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdO1xuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuICB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGh0bWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDtcblxuICAgICAgaHRtbCA9IGlubmVySFRNTDsgLy8vXG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAoY3NzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICBjc3MgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb21wdXRlZFN0eWxlWzBdLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLnN0eWxlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG4gIFxuICBibHVyKCkgeyB0aGlzLmRvbUVsZW1lbnQuYmx1cigpOyB9XG5cbiAgZm9jdXMoKSB7IHRoaXMuZG9tRWxlbWVudC5mb2N1cygpOyB9XG5cbiAgaGFzRm9jdXMoKSB7XG4gICAgY29uc3QgZm9jdXMgPSAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5kb21FbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGZvY3VzO1xuICB9XG5cbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRlc2NlbmRhbnRET01Ob2RlcyA9IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUpLFxuICAgICAgICAgIGRlc2NlbmRhbnRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihkZXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgICBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkZXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGRlc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihjaGlsZERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBnZXRQYXJlbnRFbGVtZW50KHNlbGVjdG9yID0gJyonKSB7XG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKHBhcmVudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChwYXJlbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnRzID0gW3BhcmVudERPTUVsZW1lbnRdLFxuICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKSxcbiAgICAgICAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpO1xuXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBmaXJzdFBhcmVudEVsZW1lbnQgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIGdldEFzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgYXNjZW5kYW50RE9NRWxlbWVudHMgPSBbXSxcbiAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBsZXQgYXNjZW5kYW50RE9NRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cbiAgICB3aGlsZSAoYXNjZW5kYW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKGFzY2VuZGFudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgYXNjZW5kYW50RE9NRWxlbWVudHMucHVzaChhc2NlbmRhbnRET01FbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgYXNjZW5kYW50RE9NRWxlbWVudCA9IGFzY2VuZGFudERPTUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBhc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGFzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBhc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBsZXQgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50LnByZXZpb3VzU2libGluZzsgIC8vL1xuXG4gICAgaWYgKChwcmV2aW91c1NpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKHByZXZpb3VzU2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIGdldE5leHRTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9ICcqJykge1xuICAgIGxldCBuZXh0U2libGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgbmV4dFNpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50Lm5leHRTaWJsaW5nO1xuXG4gICAgaWYgKChuZXh0U2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IobmV4dFNpYmxpbmdET01Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICAgIG5leHRTaWJsaW5nRWxlbWVudCA9IG5leHRTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0U2libGluZ0VsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoQ2xhc3MsIGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGRlZXAgPSB0cnVlLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQuY2xvbmVOb2RlKGRlZXApO1xuXG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG91dGVyRE9NRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgb3V0ZXJET01FbGVtZW50LmlubmVySFRNTCA9IGh0bWw7ICAvLy9cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBvdXRlckRPTUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IENsYXNzLnRhZ05hbWUsXG4gICAgICAgICAgaHRtbCA9IGA8JHt0YWdOYW1lfSAvPmAsXG4gICAgICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyksXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyk7XG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHJpbmcsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICBodG1sID0gYDwke3RhZ05hbWV9IC8+YCxcbiAgICAgICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChFbGVtZW50LCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30sIC8vL1xuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107IC8vL1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGpzeE1peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzY3JvbGxNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCByZXNpemVNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGluKTtcblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LCB7XG4gIExFRlRfTU9VU0VfQlVUVE9OOiAwLFxuICBSSUdIVF9NT1VTRV9CVVRUT046IDIsXG4gIE1JRERMRV9NT1VTRV9CVVRUT046IDFcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBkZWZhdWx0UHJvcGVydGllcyA9IHt9KSB7XG4gIGNvbWJpbmUoZGVmYXVsdFByb3BlcnRpZXMsIENsYXNzLmRlZmF1bHRQcm9wZXJ0aWVzKTtcblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0UHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzID0gW10pIHtcbiAgYXVnbWVudChpZ25vcmVkUHJvcGVydGllcywgQ2xhc3MuaWdub3JlZFByb3BlcnRpZXMgfHwgW10sIGZ1bmN0aW9uKGlnbm9yZWRQcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaWdub3JlZFByb3BlcnRpZXMuaW5jbHVkZXMoaWdub3JlZFByb3BlcnR5KTtcbiAgfSk7XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBpZ25vcmVkUHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gaWdub3JlZFByb3BlcnRpZXM7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIEJvZHkgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSAnYm9keScpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEJvZHkuY2xvbmUodGhpcyk7IH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCkgeyByZXR1cm4gRWxlbWVudC5jbG9uZShCb2R5LCBlbGVtZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKEJvZHksIGh0bWwpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQm9keSwgZG9tRWxlbWVudCk7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhCb2R5LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKEJvZHksIHtcbiAgdGFnTmFtZTogJ2JvZHknXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2R5O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2xpY2tIYW5kbGVyKSB7IHJldHVybiBCdXR0b24uY2xvbmUodGhpcywgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIG9uQ2xpY2soY2xpY2tIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNsaWNrSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlci5vbkNsaWNrKGNsaWNrSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2xpY2soY2xpY2tIYW5kbGVyLCBvYmplY3QpIHtcbiAgICBzdXBlci5vZmZDbGljayhjbGlja0hhbmRsZXIsIG9iamVjdCk7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmNsb25lKEJ1dHRvbiwgZWxlbWVudCwgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQnV0dG9uLCBodG1sLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChCdXR0b24sIGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjbGlja0hhbmRsZXIgPSBvbkNsaWNrLCAvLy9cbiAgICAgICAgICBidXR0b24gPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEJ1dHRvbiwgcHJvcGVydGllcywgY2xpY2tIYW5kbGVyKTtcbiAgICBcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQnV0dG9uLCB7XG4gIHRhZ05hbWU6ICdidXR0b24nLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNsaWNrJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCdXR0b247XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIoY2xpY2tIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBtb3VzZUJ1dHRvbiA9IGV2ZW50LmJ1dHRvbjtcbiAgXG4gIGNsaWNrSGFuZGxlcihtb3VzZUJ1dHRvbiwgZXZlbnQsIHRhcmdldEVsZW1lbnQpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlciwgY2hlY2tlZCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICAgIFxuICAgIGlmIChjaGVja2VkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY2hlY2soY2hlY2tlZCk7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gQ2hlY2tib3guY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2NsaWNrJywgY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKTsgIC8vL1xuICB9XG4gIFxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0KSB7XG4gICAgdGhpcy5vZmYoJ2NsaWNrJywgY2hhbmdlSGFuZGxlciwgb2JqZWN0KTsgIC8vL1xuICB9XG5cbiAgY2hlY2soY2hlY2tlZCA9IHRydWUpIHtcbiAgICBjaGVja2VkID9cbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKSA6XG4gICAgICAgIHRoaXMuY2xlYXJBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgfVxuXG4gIGlzQ2hlY2tlZCgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgIGNoZWNrZWQgPSBkb21FbGVtZW50LmNoZWNrZWQ7XG5cbiAgICByZXR1cm4gY2hlY2tlZDtcbiAgfVxuXG4gIG9uUmVzaXplKCkge31cblxuICBvZmZSZXNpemUoKSB7fVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmNsb25lKENoZWNrYm94LCBlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKENoZWNrYm94LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KENoZWNrYm94LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgY2hlY2tlZCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2UsIC8vLyAgICBcbiAgICAgICAgICBjaGVja2JveCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2hlY2tib3gsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIsIGNoZWNrZWQpO1xuICAgIFxuICAgIHJldHVybiBjaGVja2JveDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENoZWNrYm94LCB7XG4gIHRhZ05hbWU6ICdpbnB1dCcsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2hhbmdlJyxcbiAgICAnY2hlY2tlZCdcbiAgXSxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICB0eXBlOiAnY2hlY2tib3gnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoZWNrYm94O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBjaGVja2JveCA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICBjaGVja2VkID0gY2hlY2tib3guaXNDaGVja2VkKCk7XG4gIFxuICBjaGFuZ2VIYW5kbGVyKGNoZWNrZWQsIGV2ZW50LCB0YXJnZXRFbGVtZW50KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBEaXYuY2xvbmUodGhpcyk7IH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCkgeyByZXR1cm4gRWxlbWVudC5jbG9uZShEaXYsIGVsZW1lbnQpOyB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoRGl2LCBodG1sKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KERpdiwgZG9tRWxlbWVudCk7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhEaXYsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oRGl2LCB7XG4gIHRhZ05hbWU6ICdkaXYnXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBEaXY7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2xpY2tIYW5kbGVyKSB7IHJldHVybiBMaW5rLmNsb25lKHRoaXMsIGNsaWNrSGFuZGxlcik7IH1cblxuICBvbkNsaWNrKGNsaWNrSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKSB7XG4gICAgdGhpcy5vbignY2xpY2snLCBjbGlja0hhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKTtcbiAgfVxuICBcbiAgb2ZmQ2xpY2soY2xpY2tIYW5kbGVyLCBvYmplY3QpIHtcbiAgICB0aGlzLm9mZignY2xpY2snLCBjbGlja0hhbmRsZXIsIG9iamVjdCk7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmNsb25lKExpbmssIGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKExpbmssIGh0bWwsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KExpbmssIGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjbGlja0hhbmRsZXIgPSBvbkNsaWNrLCAvLy9cbiAgICAgICAgICBsaW5rID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhMaW5rLCBwcm9wZXJ0aWVzLCBjbGlja0hhbmRsZXIpO1xuICAgIFxuICAgIHJldHVybiBsaW5rO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTGluaywge1xuICB0YWdOYW1lOiAnYScsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2xpY2snXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbms7XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIoY2xpY2tIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBsaW5rID0gdGFyZ2V0RWxlbWVudCwgLy8vXG4gICAgICAgIGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICBcbiAgY2xpY2tIYW5kbGVyKGhyZWYsIGV2ZW50LCB0YXJnZXRFbGVtZW50KTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gU2VsZWN0LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCBjaGFuZ2VIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIG9iamVjdCkge1xuICAgIHRoaXMub2ZmKCdjaGFuZ2UnLCBjaGFuZ2VIYW5kbGVyLCBvYmplY3QpO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IGRvbUVsZW1lbnQudmFsdWU7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25WYWx1ZTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkT3B0aW9uQnlWYWx1ZShzZWxlY3RlZE9wdGlvblZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBzZWxlY3RlZE9wdGlvblZhbHVlLCAgLy8vXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuICAgIFxuICAgIGRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgXG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5jbG9uZShTZWxlY3QsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoU2VsZWN0LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KFNlbGVjdCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cbiAgICAgICAgICBzZWxlY3QgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNlbGVjdCwgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlcik7XG4gICAgXG4gICAgcmV0dXJuIHNlbGVjdDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNlbGVjdCwge1xuICB0YWdOYW1lOiAnc2VsZWN0JyxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnb25DaGFuZ2UnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdDtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIoY2hhbmdlSGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3Qgc2VsZWN0ID0gdGFyZ2V0RWxlbWVudCwgLy8vXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSBzZWxlY3QuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpO1xuICBcbiAgY2hhbmdlSGFuZGxlcihzZWxlY3RlZE9wdGlvblZhbHVlLCBldmVudCwgdGFyZ2V0RWxlbWVudCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFNwYW4gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2xvbmUoKSB7IHJldHVybiBTcGFuLmNsb25lKHRoaXMpOyB9XG5cbiAgb25SZXNpemUoKSB7fVxuXG4gIG9mZlJlc2l6ZSgpIHt9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUoU3BhbiwgZWxlbWVudCk7IH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCkgeyByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChTcGFuLCBodG1sKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KFNwYW4sIGRvbUVsZW1lbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihTcGFuLCB7XG4gIHRhZ05hbWU6ICdzcGFuJ1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3BhbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBJbnB1dEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVzaXplKCkge31cblxuICBvZmZSZXNpemUoKSB7fVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2NoYW5nZScsIGNoYW5nZUhhbmRsZXIsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9mZignY2hhbmdlJywgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC52YWx1ZTsgfVxuXG4gIGdldFNlbGVjdGlvblN0YXJ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0OyB9XG5cbiAgZ2V0U2VsZWN0aW9uRW5kKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZDsgfVxuICBcbiAgaXNSZWFkT25seSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5yZWFkT25seTsgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlOyB9XG5cbiAgc2V0U2VsZWN0aW9uU3RhcnQoc2VsZWN0aW9uU3RhcnQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnQ7IH1cblxuICBzZXRTZWxlY3Rpb25FbmQoc2VsZWN0aW9uRW5kKSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmQ7IH1cblxuICBzZXRSZWFkT25seShyZWFkT25seSkgeyB0aGlzLmRvbUVsZW1lbnQucmVhZE9ubHkgPSByZWFkT25seTsgfVxuXG4gIHNlbGVjdCgpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdCgpOyB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzLCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShDbGFzcywgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21IVE1MKENsYXNzLCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy9cblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmcoc3RyaW5nLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZTsgLy8vXG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tU3RyaW5nKHN0cmluZywgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKElucHV0RWxlbWVudCwge1xuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNoYW5nZSdcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXRFbGVtZW50O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBpbnB1dEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50LCAvLy9cbiAgICAgICAgdmFsdWUgPSBpbnB1dEVsZW1lbnQuZ2V0VmFsdWUoKTtcbiAgXG4gIGNoYW5nZUhhbmRsZXIodmFsdWUsIGV2ZW50LCB0YXJnZXRFbGVtZW50KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gSW5wdXQuY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKElucHV0LCBlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoSW5wdXQsIGh0bWwsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChJbnB1dCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKElucHV0LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKElucHV0LCB7XG4gIHRhZ05hbWU6ICdpbnB1dCdcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBUZXh0YXJlYS5jbG9uZSh0aGlzLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoVGV4dGFyZWEsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChUZXh0YXJlYSwgaHRtbCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KFRleHRhcmVhLCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dGFyZWEsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oVGV4dGFyZWEsIHtcbiAgdGFnTmFtZTogJ3RleHRhcmVhJ1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dGFyZWE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEJvdW5kcyB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5ib3R0b20gPSBib3R0b207XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldEJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5ib3R0b207XG4gIH1cblxuICBnZXRSaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodDtcbiAgfVxuXG4gIGlzT3ZlcmxhcHBpbmdNb3VzZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgcmV0dXJuICggICh0aGlzLnRvcCA8IG1vdXNlVG9wKSAmJlxuICAgICAgICAgICAgICAodGhpcy5sZWZ0IDwgbW91c2VMZWZ0KSAmJlxuICAgICAgICAgICAgICAodGhpcy5ib3R0b20gPiBtb3VzZVRvcCkgJiZcbiAgICAgICAgICAgICAgKHRoaXMucmlnaHQgPiBtb3VzZUxlZnQpICApO1xuICB9XG5cbiAgYXJlT3ZlcmxhcHBpbmcoYm91bmRzKSB7XG4gICAgcmV0dXJuICggICh0aGlzLnRvcCA8IGJvdW5kcy5ib3R0b20pICYmXG4gICAgICAgICAgICAgICh0aGlzLmxlZnQgPCBib3VuZHMucmlnaHQpICYmXG4gICAgICAgICAgICAgICh0aGlzLmJvdHRvbSA+IGJvdW5kcy50b3ApICYmXG4gICAgICAgICAgICAgICh0aGlzLnJpZ2h0ID4gYm91bmRzLmxlZnQpICApO1xuICB9XG5cbiAgc3RhdGljIGZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgY29uc3Qgd2luZG93U2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0LCAvLy9cbiAgICAgICAgICB3aW5kb3dTY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0LCAgLy8vXG4gICAgICAgICAgdG9wID0gYm91bmRpbmdDbGllbnRSZWN0LnRvcCArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICBsZWZ0ID0gYm91bmRpbmdDbGllbnRSZWN0LmxlZnQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdHRvbSA9IGJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b20gKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgcmlnaHQgPSBib3VuZGluZ0NsaWVudFJlY3QucmlnaHQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCb3VuZHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIE9mZnNldCB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2Zmc2V0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBvbkNsaWNrKGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oJ2NsaWNrJywgaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmQ2xpY2soaGFuZGxlciwgb2JqZWN0KSB7IHRoaXMub2ZmKCdjbGljaycsIGhhbmRsZXIsIG9iamVjdCk7IH1cblxuY29uc3QgY2xpY2tNaXhpbiA9IHtcbiAgb25DbGljazogb25DbGljayxcbiAgb2ZmQ2xpY2s6IG9mZkNsaWNrXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsaWNrTWl4aW47XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKGhhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIGNvbnN0IG1vdXNlVG9wID0gZXZlbnQucGFnZVksICAvLy9cbiAgICAgICAgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsIC8vL1xuICAgICAgICBtb3VzZUJ1dHRvbiA9IGV2ZW50LmJ1dHRvbjsgLy8vXG4gIFxuICBoYW5kbGVyKG1vdXNlVG9wLCBtb3VzZUxlZnQsIG1vdXNlQnV0dG9uLCBldmVudCwgdGFyZ2V0RWxlbWVudCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9uKGV2ZW50VHlwZXMsIGhhbmRsZXIsIG9iamVjdCA9IG51bGwsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBudWxsKSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KCcgJyk7IC8vL1xuXG4gIGV2ZW50VHlwZXMuZm9yRWFjaChmdW5jdGlvbihldmVudFR5cGUpIHtcbiAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbiAgICBcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuICB9LmJpbmQodGhpcykpO1xufVxuXG5mdW5jdGlvbiBvZmYoZXZlbnRUeXBlcywgaGFuZGxlciwgb2JqZWN0ID0gbnVsbCkge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdCgnICcpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goZnVuY3Rpb24oZXZlbnRUeXBlKSB7XG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIG9iamVjdCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuICB9LmJpbmQodGhpcykpO1xufVxuXG5jb25zdCBldmVudE1peGluID0ge1xuICBvbjogb24sXG4gIG9mZjogb2ZmLFxuICBhZGRFdmVudExpc3RlbmVyOiBhZGRFdmVudExpc3RlbmVyLFxuICByZW1vdmVFdmVudExpc3RlbmVyOiByZW1vdmVFdmVudExpc3RlbmVyXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV2ZW50TWl4aW47XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KCdldmVudExpc3RlbmVycycpKSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuICB9XG4gIFxuICBjb25zdCB0YXJnZXRFbGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgIGV2ZW50TGlzdGVuZXJzID0gdGhpcy5ldmVudExpc3RlbmVycyxcbiAgICAgICAgZXZlbnRMaXN0ZW5lciA9IGNyZWF0ZUV2ZW50TGlzdGVuZXIodGFyZ2V0RWxlbWVudCwgZXZlbnRUeXBlLCBoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xuXG4gIGV2ZW50TGlzdGVuZXJzLnB1c2goZXZlbnRMaXN0ZW5lcik7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBvYmplY3QpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmV2ZW50TGlzdGVuZXJzLFxuICAgICAgICBldmVudExpc3RlbmVyID0gZmluZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lcnMsIGV2ZW50VHlwZSwgaGFuZGxlciwgb2JqZWN0KSxcbiAgICAgICAgaW5kZXggPSBldmVudExpc3RlbmVycy5pbmRleE9mKGV2ZW50TGlzdGVuZXIpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICBldmVudExpc3RlbmVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICBpZiAoZXZlbnRMaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgZGVsZXRlIHRoaXMuZXZlbnRMaXN0ZW5lcnM7XG4gIH1cbiAgXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudExpc3RlbmVyKHRhcmdldEVsZW1lbnQsIGV2ZW50VHlwZSwgaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIGxldCBldmVudExpc3RlbmVyO1xuICBcbiAgaWYgKGludGVybWVkaWF0ZUhhbmRsZXIgPT09IG51bGwpIHtcbiAgICBldmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGhhbmRsZXIuY2FsbChvYmplY3QsIGV2ZW50LCB0YXJnZXRFbGVtZW50KVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgZXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpbnRlcm1lZGlhdGVIYW5kbGVyKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGhhbmRsZXIuY2FsbChvYmplY3QsIC4uLmFyZ3VtZW50cyk7XG4gICAgICB9LCBldmVudCwgdGFyZ2V0RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmFzc2lnbihldmVudExpc3RlbmVyLCB7XG4gICAgZXZlbnRUeXBlOiBldmVudFR5cGUsXG4gICAgaGFuZGxlcjogaGFuZGxlcixcbiAgICBvYmplY3Q6IG9iamVjdFxuICB9KTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lcnMsIGV2ZW50VHlwZSwgaGFuZGxlciwgb2JqZWN0KSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSBldmVudExpc3RlbmVycy5maW5kKGZ1bmN0aW9uKGV2ZW50TGlzdGVuZXIpIHtcbiAgICBjb25zdCBmb3VuZCA9ICggKGV2ZW50TGlzdGVuZXIub2JqZWN0ID09PSBvYmplY3QpICYmIFxuICAgICAgICAgICAgICAgICAgICAoZXZlbnRMaXN0ZW5lci5oYW5kbGVyID09PSBoYW5kbGVyKSAmJiBcbiAgICAgICAgICAgICAgICAgICAgKGV2ZW50TGlzdGVuZXIuZXZlbnRUeXBlID09PSBldmVudFR5cGUpICk7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gZm91bmQ7XG4gIH0pO1xuICBcbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBUZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4uL3RleHRFbGVtZW50JyksXG4gICAgICBvYmplY3RVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvb2JqZWN0Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjb21iaW5lLCBwcnVuZSB9ID0gb2JqZWN0VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMocHJvcGVydGllcyA9IHt9LCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpIHtcbiAgY29tYmluZShwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcyk7XG5cbiAgY29uc3QgZWxlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50QW5kUHJvcGVydGllcyhlbGVtZW50LCBwcm9wZXJ0aWVzKTtcblxuICBwcnVuZShwcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKTsgIC8vL1xuXG4gIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgIGNvbnN0IHZhbHVlID0gcHJvcGVydGllc1tuYW1lXTtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmIChpc0hhbmRsZXJOYW1lKG5hbWUpKSB7XG4gICAgICBhZGRIYW5kbGVyKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGlzQXR0cmlidXRlTmFtZShuYW1lKSkge1xuICAgICAgYWRkQXR0cmlidXRlKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KCdwcm9wZXJ0aWVzJykpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvcGVydGllc1tuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgIGNoaWxkRWxlbWVudC5hZGRUbyhwYXJlbnRFbGVtZW50KTtcblxuICAgIHVwZGF0ZVBhcmVudENvbnRleHQoY2hpbGRFbGVtZW50LCBwYXJlbnRFbGVtZW50KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHRoaXMucHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dCgpIHtcbiAgcmV0dXJuIHRoaXMuY29udGV4dDtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gIHJldHVybiB0aGlzLnN0YXRlO1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSkge1xuICB0aGlzLnN0YXRlID0gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGZyb21TdGF0ZShuYW1lKSB7XG4gIGNvbnN0IHZhbHVlID0gdGhpcy5zdGF0ZVtuYW1lXTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVN0YXRlKHVwZGF0ZSkge1xuICBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsIHVwZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkNvbnRleHQobmFtZXMsIHRoZW5EZWxldGUpIHtcbiAgY29uc3QgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblxuICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdib29sZWFuJykge1xuICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICB0aGVuRGVsZXRlID0gZmlyc3RBcmd1bWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMCkge1xuICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcblxuICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICB9XG5cbiAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRleHRbbmFtZV0sXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvcik7XG5cbiAgICBpZiAodGhlbkRlbGV0ZSkge1xuICAgICAgZGVsZXRlIHRoaXMuY29udGV4dFtuYW1lXTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSwgW10pO1xufVxuXG5jb25zdCBqc3hNaXhpbiA9IHtcbiAgYXBwbHlQcm9wZXJ0aWVzOiBhcHBseVByb3BlcnRpZXMsXG4gIGdldFByb3BlcnRpZXM6IGdldFByb3BlcnRpZXMsXG4gIGdldENvbnRleHQ6IGdldENvbnRleHQsXG4gIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgc2V0U3RhdGU6IHNldFN0YXRlLFxuICBmcm9tU3RhdGU6IGZyb21TdGF0ZSxcbiAgdXBkYXRlU3RhdGU6IHVwZGF0ZVN0YXRlLFxuICBhc3NpZ25Db250ZXh0OiBhc3NpZ25Db250ZXh0XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGpzeE1peGluO1xuXG5mdW5jdGlvbiB1cGRhdGVQYXJlbnRDb250ZXh0KGNoaWxkRWxlbWVudCwgcGFyZW50RWxlbWVudCkge1xuICBjb25zdCBwYXJlbnRDb250ZXh0ID0gKHR5cGVvZiBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuY29udGV4dDtcblxuICBwYXJlbnRFbGVtZW50LmNvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBwYXJlbnRFbGVtZW50LmNvbnRleHQsIHBhcmVudENvbnRleHQpO1xuXG4gIGRlbGV0ZSBjaGlsZEVsZW1lbnQuY29udGV4dDtcbn1cblxuZnVuY3Rpb24gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50QW5kUHJvcGVydGllcyhlbGVtZW50LCBwcm9wZXJ0aWVzKSB7XG4gIGxldCBjaGlsZEVsZW1lbnRzID0gKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMuY2hpbGRFbGVtZW50cztcblxuICBjaGlsZEVsZW1lbnRzID0gKGNoaWxkRWxlbWVudHMgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgICAgICAgICAgICAgICgoY2hpbGRFbGVtZW50cyBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudHMgOlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NoaWxkRWxlbWVudHNdKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtdO1xuXG4gIGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzLm1hcChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICBpZiAodHlwZW9mIGNoaWxkRWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBjaGlsZEVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHRleHRFbGVtZW50ID0gbmV3IFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBjaGlsZEVsZW1lbnQgPSB0ZXh0RWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgLy8vXG4gICAgICAgIGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gIGVsZW1lbnQub24oZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgIG5hbWUgPSAnY2xhc3MnO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09ICdodG1sRm9yJykge1xuICAgIG5hbWUgPSAnZm9yJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBlbGVtZW50LmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNIYW5kbGVyTmFtZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLm1hdGNoKC9eb24vKTtcbn1cblxuZnVuY3Rpb24gaXNBdHRyaWJ1dGVOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIGF0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKG5hbWUpO1xufVxuXG5jb25zdCBhdHRyaWJ1dGVOYW1lcyA9IFtcbiAgJ2FjY2VwdCcsICdhY2NlcHRDaGFyc2V0JywgJ2FjY2Vzc0tleScsICdhY3Rpb24nLCAnYWxsb3dGdWxsU2NyZWVuJywgJ2FsbG93VHJhbnNwYXJlbmN5JywgJ2FsdCcsICdhc3luYycsICdhdXRvQ29tcGxldGUnLCAnYXV0b0ZvY3VzJywgJ2F1dG9QbGF5JyxcbiAgJ2NhcHR1cmUnLCAnY2VsbFBhZGRpbmcnLCAnY2VsbFNwYWNpbmcnLCAnY2hhbGxlbmdlJywgJ2NoYXJTZXQnLCAnY2hlY2tlZCcsICdjaXRlJywgJ2NsYXNzSUQnLCAnY2xhc3NOYW1lJywgJ2NvbFNwYW4nLCAnY29scycsICdjb250ZW50JywgJ2NvbnRlbnRFZGl0YWJsZScsICdjb250ZXh0TWVudScsICdjb250cm9scycsICdjb29yZHMnLCAnY3Jvc3NPcmlnaW4nLFxuICAnZGF0YScsICdkYXRlVGltZScsICdkZWZhdWx0JywgJ2RlZmVyJywgJ2RpcicsICdkaXNhYmxlZCcsICdkb3dubG9hZCcsICdkcmFnZ2FibGUnLFxuICAnZW5jVHlwZScsXG4gICdmb3JtJywgJ2Zvcm1BY3Rpb24nLCAnZm9ybUVuY1R5cGUnLCAnZm9ybU1ldGhvZCcsICdmb3JtTm9WYWxpZGF0ZScsICdmb3JtVGFyZ2V0JywgJ2ZyYW1lQm9yZGVyJyxcbiAgJ2hlYWRlcnMnLCAnaGVpZ2h0JywgJ2hpZGRlbicsICdoaWdoJywgJ2hyZWYnLCAnaHJlZkxhbmcnLCAnaHRtbEZvcicsICdodHRwRXF1aXYnLFxuICAnaWNvbicsICdpZCcsICdpbnB1dE1vZGUnLCAnaW50ZWdyaXR5JywgJ2lzJyxcbiAgJ2tleVBhcmFtcycsICdrZXlUeXBlJywgJ2tpbmQnLFxuICAnbGFiZWwnLCAnbGFuZycsICdsaXN0JywgJ2xvb3AnLCAnbG93JyxcbiAgJ21hbmlmZXN0JywgJ21hcmdpbkhlaWdodCcsICdtYXJnaW5XaWR0aCcsICdtYXgnLCAnbWF4TGVuZ3RoJywgJ21lZGlhJywgJ21lZGlhR3JvdXAnLCAnbWV0aG9kJywgJ21pbicsICdtaW5MZW5ndGgnLCAnbXVsdGlwbGUnLCAnbXV0ZWQnLFxuICAnbmFtZScsICdub1ZhbGlkYXRlJywgJ25vbmNlJyxcbiAgJ29wZW4nLCAnb3B0aW11bScsXG4gICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3Bvc3RlcicsICdwcmVsb2FkJywgJ3Byb2ZpbGUnLFxuICAncmFkaW9Hcm91cCcsICdyZWFkT25seScsICdyZWwnLCAncmVxdWlyZWQnLCAncmV2ZXJzZWQnLCAncm9sZScsICdyb3dTcGFuJywgJ3Jvd3MnLFxuICAnc2FuZGJveCcsICdzY29wZScsICdzY29wZWQnLCAnc2Nyb2xsaW5nJywgJ3NlYW1sZXNzJywgJ3NlbGVjdGVkJywgJ3NoYXBlJywgJ3NpemUnLCAnc2l6ZXMnLCAnc3BhbicsICdzcGVsbENoZWNrJywgJ3NyYycsICdzcmNEb2MnLCAnc3JjTGFuZycsICdzcmNTZXQnLCAnc3RhcnQnLCAnc3RlcCcsICdzdHlsZScsICdzdW1tYXJ5JyxcbiAgJ3RhYkluZGV4JywgJ3RhcmdldCcsICd0aXRsZScsICd0eXBlJyxcbiAgJ3VzZU1hcCcsXG4gICd2YWx1ZScsXG4gICd3aWR0aCcsXG4gICd3bW9kZScsXG4gICd3cmFwJ1xuXTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gb25LZXlVcChoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdrZXl1cCcsIGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uS2V5RG93bihoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdrZXlkb3duJywgaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmS2V5VXAoaGFuZGxlciwgb2JqZWN0KSB7IHRoaXMub2ZmKCdrZXl1cCcsIGhhbmRsZXIsIG9iamVjdCk7IH1cblxuZnVuY3Rpb24gb2ZmS2V5RG93bihoYW5kbGVyLCBvYmplY3QpIHsgdGhpcy5vZmYoJ2tleWRvd24nLCBoYW5kbGVyLCBvYmplY3QpOyB9XG5cbmNvbnN0IGtleU1peGluID0ge1xuICBvbktleVVwOiBvbktleVVwLFxuICBvbktleURvd246IG9uS2V5RG93bixcbiAgb2ZmS2V5VXA6IG9mZktleVVwLFxuICBvZmZLZXlEb3duOiBvZmZLZXlEb3duXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleU1peGluO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcbiAgXG4gIGhhbmRsZXIoa2V5Q29kZSwgZXZlbnQsIHRhcmdldEVsZW1lbnQpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBvbk1vdXNlVXAoaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgdGhpcy5vbignbW91c2V1cCcsIGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uTW91c2VEb3duKGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oJ21vdXNlZG93bicsIGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uTW91c2VPdmVyKGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oJ21vdXNlb3ZlcicsIGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uTW91c2VPdXQoaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgdGhpcy5vbignbW91c2VvdXQnLCBoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvbk1vdXNlTW92ZShoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdtb3VzZW1vdmUnLCBoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZNb3VzZVVwKGhhbmRsZXIsIG9iamVjdCkgeyB0aGlzLm9mZignbW91c2V1cCcsIGhhbmRsZXIsIG9iamVjdCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VEb3duKGhhbmRsZXIsIG9iamVjdCkgeyB0aGlzLm9mZignbW91c2Vkb3duJywgaGFuZGxlciwgb2JqZWN0KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU92ZXIoaGFuZGxlciwgb2JqZWN0KSB7IHRoaXMub2ZmKCdtb3VzZW92ZXInLCBoYW5kbGVyLCBvYmplY3QpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlT3V0KGhhbmRsZXIsIG9iamVjdCkgeyB0aGlzLm9mZignbW91c2VvdXQnLCBoYW5kbGVyLCBvYmplY3QpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlTW92ZShoYW5kbGVyLCBvYmplY3QpIHsgdGhpcy5vZmYoJ21vdXNlbW92ZScsIGhhbmRsZXIsIG9iamVjdCk7IH1cblxuY29uc3QgbW91c2VNaXhpbiA9IHtcbiAgb25Nb3VzZVVwOiBvbk1vdXNlVXAsXG4gIG9uTW91c2VEb3duOiBvbk1vdXNlRG93bixcbiAgb25Nb3VzZU92ZXI6IG9uTW91c2VPdmVyLFxuICBvbk1vdXNlT3V0OiBvbk1vdXNlT3V0LFxuICBvbk1vdXNlTW92ZTogb25Nb3VzZU1vdmUsXG4gIG9mZk1vdXNlVXA6IG9mZk1vdXNlVXAsXG4gIG9mZk1vdXNlRG93bjogb2ZmTW91c2VEb3duLFxuICBvZmZNb3VzZU92ZXI6IG9mZk1vdXNlT3ZlcixcbiAgb2ZmTW91c2VPdXQ6IG9mZk1vdXNlT3V0LFxuICBvZmZNb3VzZU1vdmU6IG9mZk1vdXNlTW92ZVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb3VzZU1peGluO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBtb3VzZVRvcCA9IGV2ZW50LnBhZ2VZLCAgLy8vXG4gICAgICAgIG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAvLy9cbiAgICAgICAgbW91c2VCdXR0b24gPSBldmVudC5idXR0b247IC8vL1xuICBcbiAgaGFuZGxlcihtb3VzZVRvcCwgbW91c2VMZWZ0LCBtb3VzZUJ1dHRvbiwgZXZlbnQsIHRhcmdldEVsZW1lbnQpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBvblJlc2l6ZShoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlUmVzaXplSGFuZGxlcikge1xuICBjb25zdCBlbGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gZmluZFJlc2l6ZUV2ZW50TGlzdGVuZXJzKGVsZW1lbnQpO1xuXG4gIGlmIChyZXNpemVFdmVudExpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICBhZGRSZXNpemVPYmplY3QoZWxlbWVudCk7XG4gIH1cblxuICBjb25zdCBldmVudFR5cGUgPSAncmVzaXplJztcblxuICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZSZXNpemUoaGFuZGxlciwgb2JqZWN0KSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9ICdyZXNpemUnO1xuXG4gIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIG9iamVjdCk7XG5cbiAgY29uc3QgZWxlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICByZXNpemVFdmVudExpc3RlbmVycyA9IGZpbmRSZXNpemVFdmVudExpc3RlbmVycyhlbGVtZW50KTtcbiAgXG4gIGlmIChyZXNpemVFdmVudExpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICByZW1vdmVSZXNpemVPYmplY3QoZWxlbWVudCk7XG4gIH1cbn1cblxuY29uc3QgcmVzaXplTWl4aW4gPSB7XG4gIG9uUmVzaXplOiBvblJlc2l6ZSxcbiAgb2ZmUmVzaXplOiBvZmZSZXNpemVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzaXplTWl4aW47XG5cbmZ1bmN0aW9uIGFkZFJlc2l6ZU9iamVjdChlbGVtZW50KSB7XG4gIGNvbnN0IHJlc2l6ZU9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpLFxuICAgICAgICBkb21FbGVtZW50ID0gZWxlbWVudC5nZXRET01FbGVtZW50KCksXG4gICAgICAgIHN0eWxlID0gYGRpc3BsYXk6IGJsb2NrOyBcbiAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgICAgICAgICAgdG9wOiAwOyBcbiAgICAgICAgICAgICAgICAgbGVmdDogMDsgXG4gICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTsgXG4gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyBcbiAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7YCxcbiAgICAgICAgZGF0YSA9ICdhYm91dDpibGFuaycsXG4gICAgICAgIHR5cGUgPSAndGV4dC9odG1sJztcblxuICByZXNpemVPYmplY3Quc2V0QXR0cmlidXRlKCdzdHlsZScsIHN0eWxlKTtcbiAgcmVzaXplT2JqZWN0LmRhdGEgPSBkYXRhO1xuICByZXNpemVPYmplY3QudHlwZSA9IHR5cGU7XG5cbiAgZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fID0gcmVzaXplT2JqZWN0O1xuXG4gIHJlc2l6ZU9iamVjdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXNpemVPYmplY3RMb2FkSGFuZGxlcihlbGVtZW50KVxuICB9O1xuXG4gIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVzaXplT2JqZWN0KGVsZW1lbnQpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICByZXNpemVPYmplY3QgPSBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIG9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICBvYmplY3RXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplRXZlbnRMaXN0ZW5lcik7XG5cbiAgZG9tRWxlbWVudC5yZW1vdmVDaGlsZChyZXNpemVPYmplY3QpO1xufVxuXG5mdW5jdGlvbiByZXNpemVPYmplY3RMb2FkSGFuZGxlcihlbGVtZW50KSB7XG4gIGNvbnN0IHJlc2l6ZU9iamVjdCA9IGVsZW1lbnQuX19yZXNpemVPYmplY3RfXyxcbiAgICAgICAgcmVzaXplT2JqZWN0V2luZG93ID0gcmVzaXplT2JqZWN0LmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldzsgIC8vL1xuXG4gIHJlc2l6ZU9iamVjdFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gZmluZFJlc2l6ZUV2ZW50TGlzdGVuZXJzKGVsZW1lbnQpO1xuXG4gICAgcmVzaXplRXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihyZXNpemVFdmVudExpc3RlbmVyKXtcbiAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXIoZXZlbnQpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZVJlc2l6ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3Qgd2luZG93ID0gdGFyZ2V0RWxlbWVudCwgLy8vXG4gICAgICAgIHdpZHRoID0gd2luZG93LmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHdpbmRvdy5nZXRIZWlnaHQoKTtcblxuICBoYW5kbGVyKHdpZHRoLCBoZWlnaHQsIGV2ZW50LCB0YXJnZXRFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gZmluZFJlc2l6ZUV2ZW50TGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgXG4gIGlmIChlbGVtZW50Lmhhc093blByb3BlcnR5KCdldmVudExpc3RlbmVycycpKSB7XG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSBlbGVtZW50LmV2ZW50TGlzdGVuZXJzOyAgLy8vXG5cbiAgICBldmVudExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIGlmIChldmVudExpc3RlbmVyLmV2ZW50VHlwZSA9PT0gJ3Jlc2l6ZScpIHtcbiAgICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lciA9IGV2ZW50TGlzdGVuZXI7XG5cbiAgICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcnMucHVzaChyZXNpemVFdmVudExpc3RlbmVyKTtcbiAgICAgIH0gICAgICBcbiAgICB9KTtcbiAgfSAgXG4gIFxuICByZXR1cm4gcmVzaXplRXZlbnRMaXN0ZW5lcnM7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9uU2Nyb2xsKGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oJ3Njcm9sbCcsIGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZlNjcm9sbChoYW5kbGVyLCBvYmplY3QpIHsgdGhpcy5vZmYoJ3Njcm9sbCcsIGhhbmRsZXIsIG9iamVjdCk7IH1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcDsgfVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQ7IH1cblxuZnVuY3Rpb24gc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyB9XG5cbmZ1bmN0aW9uIHNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7IH1cblxuY29uc3Qgc2Nyb2xsTWl4aW4gPSB7XG4gIG9uU2Nyb2xsOiBvblNjcm9sbCxcbiAgb2ZmU2Nyb2xsOiBvZmZTY3JvbGwsXG4gIGdldFNjcm9sbFRvcDogZ2V0U2Nyb2xsVG9wLFxuICBnZXRTY3JvbGxMZWZ0OiBnZXRTY3JvbGxMZWZ0LFxuICBzZXRTY3JvbGxUb3A6IHNldFNjcm9sbFRvcCxcbiAgc2V0U2Nyb2xsTGVmdDogc2V0U2Nyb2xsTGVmdFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzY3JvbGxNaXhpbjtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3Qgc2Nyb2xsVG9wID0gdGFyZ2V0RWxlbWVudC5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgc2Nyb2xsTGVmdCA9IHRhcmdldEVsZW1lbnQuZ2V0U2Nyb2xsTGVmdCgpO1xuICBcbiAgaGFuZGxlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQsIGV2ZW50LCB0YXJnZXRFbGVtZW50KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL3RleHRFbGVtZW50Jyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRBcmd1bWVudHMpIHtcbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChmaXJzdEFyZ3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cyk7XG5cbiAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGlsZEVsZW1lbnRzOiBjaGlsZEVsZW1lbnRzXG4gICAgfSwgcHJvcGVydGllcyk7XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBzdHJpbmcgPSBmaXJzdEFyZ3VtZW50OyAvLy9cblxuICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbVN0cmluZyhzdHJpbmcsIHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IGVsZW1lbnRGdW5jdGlvbihwcm9wZXJ0aWVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkRWxlbWVudHNGcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpIHtcbiAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5yZWR1Y2UoZnVuY3Rpb24oY2hpbGRBcmd1bWVudHMsIGNoaWxkQXJndW1lbnQpIHtcbiAgICBjaGlsZEFyZ3VtZW50cyA9IGNoaWxkQXJndW1lbnRzLmNvbmNhdChjaGlsZEFyZ3VtZW50KTtcblxuICAgIHJldHVybiBjaGlsZEFyZ3VtZW50cztcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEFyZ3VtZW50cy5tYXAoZnVuY3Rpb24oY2hpbGRBcmd1bWVudCkge1xuICAgIGxldCBjaGlsZEVsZW1lbnQ7XG4gICAgXG4gICAgaWYgKHR5cGVvZiBjaGlsZEFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgdGV4dCA9IGNoaWxkQXJndW1lbnQsIC8vL1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQgPSBuZXcgVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGNoaWxkRWxlbWVudCA9IHRleHRFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZEVsZW1lbnQgPSBjaGlsZEFyZ3VtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHR5cGVPZiA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7IC8vL1xuICAgIHR5cGVPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgdHlwZU9mID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgT2Zmc2V0ID0gcmVxdWlyZSgnLi9taXNjL29mZnNldCcpLFxuICAgICAgQm91bmRzID0gcmVxdWlyZSgnLi9taXNjL2JvdW5kcycpO1xuXG5jbGFzcyBUZXh0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBUZXh0RWxlbWVudC5jbG9uZSh0aGlzKTsgfVxuXG4gIGdldFRleHQoKSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSxcbiAgICAgICAgICB0ZXh0ID0gbm9kZVZhbHVlOyAvLy9cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGV4dDsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlID0gbm9kZVZhbHVlO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dEVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IHNwbGljZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpWzBdIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOyAgLy8vXG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRvbUVsZW1lbnRzKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXMoZG9tRWxlbWVudHMsIGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gKGRvbUVsZW1lbnQuX19lbGVtZW50X18gIT09IHVuZGVmaW5lZCk7XG4gICAgICAgIH0pLFxuICAgICAgICBlbGVtZW50cyA9IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzLm1hcChmdW5jdGlvbihkb21FbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGRvbUVsZW1lbnQuX19lbGVtZW50X187XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgZGVzY2VuZGFudERPTU5vZGVzID0gW10pIHtcbiAgY29uc3Qgc3RhcnQgPSAtMSxcbiAgICAgICAgZGVsZXRlQ291bnQgPSAwLFxuICAgICAgICBjaGlsZERPTU5vZGVzID0gZG9tTm9kZS5jaGlsZE5vZGVzOyAgLy8vXG5cbiAgc3BsaWNlKGRlc2NlbmRhbnRET01Ob2Rlcywgc3RhcnQsIGRlbGV0ZUNvdW50LCBjaGlsZERPTU5vZGVzKTtcblxuICBjaGlsZERPTU5vZGVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRET01Ob2RlKSB7XG4gICAgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoY2hpbGRET01Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMpO1xuICB9KTtcblxuICByZXR1cm4gZGVzY2VuZGFudERPTU5vZGVzO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZG9tTm9kZXMsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGZpbHRlcmVkRE9NTm9kZXMgPSBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgZnVuY3Rpb24oZG9tTm9kZSkge1xuICAgIHJldHVybiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKGRvbU5vZGUsIHNlbGVjdG9yKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZpbHRlcmVkRE9NTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tTm9kZVR5cGUgPSBkb21Ob2RlLm5vZGVUeXBlO1xuXG4gIHN3aXRjaCAoZG9tTm9kZVR5cGUpIHtcbiAgICBjYXNlIE5vZGUuRUxFTUVOVF9OT0RFIDoge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbU5vZGU7IC8vL1xuXG4gICAgICByZXR1cm4gZG9tRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBjYXNlIE5vZGUuVEVYVF9OT0RFIDoge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSAnKicpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gW10sXG4gICAgICAgIGRvbU5vZGVzTGVuZ3RoID0gZG9tTm9kZXMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb21Ob2Rlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSBkb21Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gdGVzdChkb21Ob2RlKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGZpbHRlcmVkRE9NTm9kZXMucHVzaChkb21Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3I6IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzOiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyxcbiAgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGU6IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlLFxuICBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3I6IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcixcbiAgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcjogZG9tTm9kZU1hdGNoZXNTZWxlY3RvcixcbiAgZmlsdGVyRE9NTm9kZXM6IGZpbHRlckRPTU5vZGVzXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjb21iaW5lKHRhcmdldE9iamVjdCwgc291cmNlT2JqZWN0ID0ge30pIHtcbiAgY29uc3Qgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZU9iamVjdCk7XG5cbiAgc291cmNlS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKHNvdXJjZUtleSkge1xuICAgIGNvbnN0IHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0T2JqZWN0W3NvdXJjZUtleV0sXG4gICAgICAgICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2VPYmplY3Rbc291cmNlS2V5XTtcblxuICAgIHRhcmdldE9iamVjdFtzb3VyY2VLZXldID0gdGFyZ2V0T2JqZWN0Lmhhc093blByb3BlcnR5KHNvdXJjZUtleSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RhcmdldFByb3BlcnR5fSAke3NvdXJjZVByb3BlcnR5fWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVByb3BlcnR5O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJ1bmUodGFyZ2V0T2JqZWN0LCBzb3VyY2VLZXlzKSB7XG4gIHNvdXJjZUtleXMuZm9yRWFjaChmdW5jdGlvbihzb3VyY2VLZXkpIHtcbiAgICBpZiAodGFyZ2V0T2JqZWN0Lmhhc093blByb3BlcnR5KHNvdXJjZUtleSkpIHtcbiAgICAgIGRlbGV0ZSB0YXJnZXRPYmplY3Rbc291cmNlS2V5XTtcbiAgICB9XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29tYmluZTogY29tYmluZSxcbiAgcHJ1bmU6IHBydW5lXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyksXG4gICAgICBrZXlNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4va2V5Jyk7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHdpbmRvdzsgLy8vXG4gIH1cblxuICBhc3NpZ24oLi4uc291cmNlcykge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc291cmNlcyk7XG4gIH1cbiAgXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVyV2lkdGg7IH0gLy8vXG4gIFxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIZWlnaHQ7IH0gLy8vXG5cbiAgZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VZT2Zmc2V0OyB9ICAvLy9cblxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VYT2Zmc2V0OyB9IC8vL1xuXG4gIG9uUmVzaXplKGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVSZXNpemVIYW5kbGVyKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlcyA9ICdyZXNpemUnO1xuICAgIFxuICAgIHRoaXMub24oZXZlbnRUeXBlcywgaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbiAgfVxuXG4gIG9mZlJlc2l6ZShoYW5kbGVyLCBvYmplY3QpIHtcbiAgICBjb25zdCBldmVudFR5cGVzID0gJ3Jlc2l6ZSc7XG5cbiAgICB0aGlzLm9mZihldmVudFR5cGVzLCBoYW5kbGVyLCBvYmplY3QpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZXZlbnRNaXhpbik7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGNsaWNrTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBtb3VzZU1peGluKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwga2V5TWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBXaW5kb3coKTsgIC8vL1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlUmVzaXplSGFuZGxlcihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCB3aW5kb3cgPSB0YXJnZXRFbGVtZW50LCAvLy9cbiAgICAgICAgd2lkdGggPSB3aW5kb3cuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gd2luZG93LmdldEhlaWdodCgpO1xuICBcbiAgaGFuZGxlcih3aWR0aCwgaGVpZ2h0LCBldmVudCwgdGFyZ2V0RWxlbWVudCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvcGF0aCcpLFxuICBhcnJheVV0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL2FycmF5JyksXG4gIHRlbXBsYXRlVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvdGVtcGxhdGUnKSxcbiAgZmlsZVN5c3RlbVV0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL2ZpbGVTeXN0ZW0nKSxcbiAgYXN5bmNocm9ub3VzVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvYXN5bmNocm9ub3VzJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5cbmZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuXG5mdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmZ1bmN0aW9uIGZpZnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs0XTsgfVxuXG5mdW5jdGlvbiBmaWZ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDVdOyB9XG5cbmZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmZ1bmN0aW9uIHRoaXJkTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gM107IH1cblxuZnVuY3Rpb24gc2Vjb25kTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl07IH1cblxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZnVuY3Rpb24gcHVzaChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZnVuY3Rpb24gdW5zaGlmdChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZnVuY3Rpb24gY2xlYXIoYXJyYXkpIHtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuICBcbiAgcmV0dXJuIGFycmF5LnNwbGljZShzdGFydCk7XG59XG5cbmZ1bmN0aW9uIGNvcHkoYXJyYXkxLCBhcnJheTIpIHtcbiAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IGFycmF5Mi5sZW5ndGg7ICAvLy9cbiAgXG4gIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXkyKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2UoYXJyYXkxLCBhcnJheTIpIHtcbiAgY29uc3Qgc3RhcnQgPSBhcnJheTIubGVuZ3RoLCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmZ1bmN0aW9uIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXkyID0gW10pIHtcbiAgY29uc3QgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5Ml0sXG4gICAgICAgIGRlbGV0ZWRJdGVtc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheTEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkSXRlbXNBcnJheTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBsZXQgc3RhcnQgPSAtMTtcbiAgXG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZShmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgc3RhcnQgPSBpbmRleDsgIC8vL1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgaWYgKGZvdW5kKSB7XG4gICAgY29uc3QgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihhcnJheSwgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGZpbHRlcmVkRWxlbWVudHMudW5zaGlmdChmaXJzdERlbGV0ZWRFbGVtZW50KTsgIC8vL1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZmlsdGVyZWRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZmluZChhcnJheSwgdGVzdCkge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIHBydW5lKGFycmF5LCB0ZXN0KSB7XG4gIGxldCBwcnVuZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBcbiAgYXJyYXkuc29tZShmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgcHJ1bmVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBwcnVuZWRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBwYXRjaChhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cblxuICBpZiAoZm91bmQpIHtcbiAgICBhcnJheS5wdXNoKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5mdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5Mi5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXBhcmF0ZShhcnJheSwgYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgcGFzc2VkID9cbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpIDpcbiAgICAgICAgYXJyYXkyLnB1c2goZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICAgIFxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYmFja3dhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAodmFyIGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZmlyc3Q6IGZpcnN0LFxuICBzZWNvbmQ6IHNlY29uZCxcbiAgdGhpcmQ6IHRoaXJkLFxuICBmb3VydGg6IGZvdXJ0aCxcbiAgZmlmdGg6IGZpZnRoLFxuICBmaWZ0aExhc3Q6IGZpZnRoTGFzdCxcbiAgZm91cnRoTGFzdDogZm91cnRoTGFzdCxcbiAgdGhpcmRMYXN0OiB0aGlyZExhc3QsXG4gIHNlY29uZExhc3Q6IHNlY29uZExhc3QsXG4gIGxhc3Q6IGxhc3QsXG4gIHRhaWw6IHRhaWwsXG4gIHB1c2g6IHB1c2gsXG4gIHVuc2hpZnQ6IHVuc2hpZnQsXG4gIGNsZWFyOiBjbGVhcixcbiAgY29weTogY29weSxcbiAgbWVyZ2U6IG1lcmdlLFxuICBzcGxpY2U6IHNwbGljZSxcbiAgcmVwbGFjZTogcmVwbGFjZSxcbiAgZmlsdGVyOiBmaWx0ZXIsXG4gIGZpbmQ6IGZpbmQsXG4gIHBydW5lOiBwcnVuZSxcbiAgcGF0Y2g6IHBhdGNoLFxuICBhdWdtZW50OiBhdWdtZW50LFxuICBzZXBhcmF0ZTogc2VwYXJhdGUsXG4gIGZvcndhcmRzU29tZTogZm9yd2FyZHNTb21lLFxuICBiYWNrd2FyZHNTb21lOiBiYWNrd2FyZHNTb21lLFxuICBmb3J3YXJkc0ZvckVhY2g6IGZvcndhcmRzRm9yRWFjaCxcbiAgYmFja3dhcmRzRm9yRWFjaDogYmFja3dhcmRzRm9yRWFjaFxufTtcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIHdoaWxzdChjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlcXVlbmNlKGNhbGxiYWNrcywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGNhbGxiYWNrcy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFja3NbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBldmVudHVhbGx5KGNhbGxiYWNrcywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGNhbGxiYWNrcy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2ssIGluZGV4KSB7XHJcbiAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGVhdGVkbHkoY2FsbGJhY2ssIGxlbmd0aCwgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gbGVuZ3RoO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQtLTtcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IC0xKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgd2hpbHN0OiB3aGlsc3QsXHJcbiAgZm9yRWFjaDogZm9yRWFjaCxcclxuICBzZXF1ZW5jZTogc2VxdWVuY2UsXHJcbiAgZXZlbnR1YWxseTogZXZlbnR1YWxseSxcclxuICByZXBlYXRlZGx5OiByZXBlYXRlZGx5LFxyXG4gIGZvcndhcmRzRm9yRWFjaDogZm9yd2FyZHNGb3JFYWNoLFxyXG4gIGJhY2t3YXJkc0ZvckVhY2g6IGJhY2t3YXJkc0ZvckVhY2hcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbmZ1bmN0aW9uIGVudHJ5RXhpc3RzKGFic29sdXRlUGF0aCkge1xuICByZXR1cm4gZnMuZXhpc3RzU3luYyhhYnNvbHV0ZVBhdGgpO1xufVxuXG5mdW5jdGlvbiBmaWxlRXhpc3RzKGFic29sdXRlRmlsZVBhdGgpIHtcbiAgbGV0IGZpbGVFeGlzdHMgPSBmYWxzZTtcbiAgXG4gIGNvbnN0IGFic29sdXRlUGF0aCA9IGFic29sdXRlRmlsZVBhdGgsIC8vL1xuICAgICAgICBlbnRyeUV4aXN0cyA9IGVudHJ5RXhpc3RzKGFic29sdXRlUGF0aCk7XG4gIFxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICBjb25zdCBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpO1xuICAgIFxuICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgIGZpbGVFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGZpbGVFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGlzRW50cnlGaWxlKGFic29sdXRlUGF0aCkge1xuICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoYWJzb2x1dGVQYXRoKSxcbiAgICAgIGVudHJ5RGlyZWN0b3J5ID0gc3RhdC5pc0RpcmVjdG9yeSgpLFxuICAgICAgZW50cnlGaWxlID0gIWVudHJ5RGlyZWN0b3J5O1xuXG4gIHJldHVybiBlbnRyeUZpbGU7XG59XG5cbmZ1bmN0aW9uIGRpcmVjdG9yeUV4aXN0cyhhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgbGV0IGRpcmVjdG9yeUV4aXN0cyA9IGZhbHNlO1xuXG4gIGNvbnN0IGFic29sdXRlUGF0aCA9IGFic29sdXRlRGlyZWN0b3J5UGF0aCwgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gZW50cnlFeGlzdHMoYWJzb2x1dGVQYXRoKTtcblxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICBjb25zdCBlbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVQYXRoKTtcblxuICAgIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgICAgZGlyZWN0b3J5RXhpc3RzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlyZWN0b3J5RXhpc3RzO1xufVxuXG5mdW5jdGlvbiBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlUGF0aCkge1xuICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoYWJzb2x1dGVQYXRoKSxcbiAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBzdGF0LmlzRGlyZWN0b3J5KCk7XG5cbiAgcmV0dXJuIGVudHJ5RGlyZWN0b3J5O1xufVxuXG5mdW5jdGlvbiBpc0RpcmVjdG9yeUVtcHR5KGFic29sdXRlRGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpLFxuICAgICAgICBzdWJFbnRyeU5hbWVzTGVuZ3RoID0gc3ViRW50cnlOYW1lcy5sZW5ndGgsXG4gICAgICAgIGRpcmVjdG9yeUVtcHR5ID0gKHN1YkVudHJ5TmFtZXNMZW5ndGggPT09IDApO1xuXG4gIHJldHVybiBkaXJlY3RvcnlFbXB0eTtcbn1cblxuZnVuY3Rpb24gcmVhZERpcmVjdG9yeShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgcmV0dXJuIHN1YkVudHJ5TmFtZXM7XG59XG5cbmZ1bmN0aW9uIHJlYWRGaWxlKGFic29sdXRlRmlsZVBhdGgsIGVuY29kaW5nID0gJ3V0ZjgnKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgZW5jb2Rpbmc6IGVuY29kaW5nXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoYWJzb2x1dGVGaWxlUGF0aCwgb3B0aW9ucyk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHdyaXRlRmlsZShhYnNvbHV0ZUZpbGVQYXRoLCBjb250ZW50KSB7XG4gIGZzLndyaXRlRmlsZVN5bmMoYWJzb2x1dGVGaWxlUGF0aCwgY29udGVudCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBlbnRyeUV4aXN0czogZW50cnlFeGlzdHMsXG4gIGZpbGVFeGlzdHM6IGZpbGVFeGlzdHMsXG4gIGlzRW50cnlGaWxlOiBpc0VudHJ5RmlsZSxcbiAgZGlyZWN0b3J5RXhpc3RzOiBkaXJlY3RvcnlFeGlzdHMsXG4gIGlzRW50cnlEaXJlY3Rvcnk6IGlzRW50cnlEaXJlY3RvcnksXG4gIGlzRGlyZWN0b3J5RW1wdHk6IGlzRGlyZWN0b3J5RW1wdHksXG4gIHJlYWREaXJlY3Rvcnk6IHJlYWREaXJlY3RvcnksXG4gIHJlYWRGaWxlOiByZWFkRmlsZSxcbiAgd3JpdGVGaWxlOiB3cml0ZUZpbGVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5ID0gcmVxdWlyZSgnLi9hcnJheScpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QgfSA9IGFycmF5O1xuXG5mdW5jdGlvbiBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCkge1xuICBjb25zdCBwb3NpdGlvbiA9IHBhdGguc2VhcmNoKC9eXFwuezEsMn1cXC8vKSxcbiAgICAgICAgcGF0aFJlbGF0aXZlUGF0aCA9IChwb3NpdGlvbiAhPT0gLTEpO1xuXG4gIHJldHVybiBwYXRoUmVsYXRpdmVQYXRoO1xufVxuXG5mdW5jdGlvbiBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoUmVsYXRpdmVQYXRoID0gaXNQYXRoUmVsYXRpdmVQYXRoKHBhdGgpLFxuICAgICAgICBwYXRoQWJzb2x1dGVQYXRoID0gIXBhdGhSZWxhdGl2ZVBhdGg7IC8vL1xuXG4gIHJldHVybiBwYXRoQWJzb2x1dGVQYXRoO1xufVxuXG5mdW5jdGlvbiBpc1BhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZShwYXRoKSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gcGF0aC5zZWFyY2goL15bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgcGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lID0gKHBvc2l0aW9uICE9PSAtMSk7XG5cbiAgcmV0dXJuIHBhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZnVuY3Rpb24gaXNUb3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluUGF0aCh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcGF0aCkge1xuICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lLnJlcGxhY2UoL1xcLyQvLCAnJyk7IC8vL1xuXG4gIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3RvcG1vc3REaXJlY3RvcnlOYW1lfSg/OlxcXFwvLispPyRgKSxcbiAgICAgICAgcG9zaXRpb24gPSBwYXRoLnNlYXJjaChyZWdFeHApLFxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluRmlsZVBhdGggPSAocG9zaXRpb24gIT09IC0xKTtcblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWVDb250YWluZWRJbkZpbGVQYXRoO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lUGF0aHMoZGlyZWN0b3J5UGF0aCwgcmVsYXRpdmVQYXRoKSB7XG4gIGxldCBhYnNvbHV0ZVBhdGggPSBudWxsO1xuXG4gIGNvbnN0IGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzID0gZGlyZWN0b3J5UGF0aC5zcGxpdCgnLycpLFxuICAgICAgICByZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyA9IHJlbGF0aXZlUGF0aC5zcGxpdCgnLycpO1xuXG4gIGxldCBmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPSBmaXJzdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyksXG4gICAgICBsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZTtcblxuICBpZiAoZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID09PSAnLicpIHtcbiAgICByZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcy5zaGlmdCgpO1xuICB9XG5cbiAgZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID0gZmlyc3QocmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMpO1xuICBsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSA9IGxhc3QoZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMpO1xuXG4gIHdoaWxlICgoZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID09PSAnLi4nKSAmJiAobGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICByZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcy5zaGlmdCgpO1xuICAgIGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzLnBvcCgpO1xuXG4gICAgZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID0gZmlyc3QocmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMpO1xuICAgIGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lID0gbGFzdChkaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lcyk7XG4gIH1cblxuICBpZiAobGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGFic29sdXRlRmlsZVBhdGhTdWJFbnRyeU5hbWVzID0gW10uY29uY2F0KGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzKS5jb25jYXQocmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMpO1xuXG4gICAgYWJzb2x1dGVQYXRoID0gYWJzb2x1dGVGaWxlUGF0aFN1YkVudHJ5TmFtZXMuam9pbignLycpO1xuICB9XG5cbiAgcmV0dXJuIGFic29sdXRlUGF0aDtcbn1cblxuZnVuY3Rpb24gY29uY2F0ZW5hdGVQYXRocyhwYXRoMSwgcGF0aDIpIHtcbiAgcGF0aDEgPSBwYXRoMS5yZXBsYWNlKC9cXC8kLywgJycpOyAgLy8vXG5cbiAgY29uc3QgY29tYmluZWRQYXRoID0gYCR7cGF0aDF9LyR7cGF0aDJ9YDtcblxuICByZXR1cm4gY29tYmluZWRQYXRoO1xufVxuXG5mdW5jdGlvbiBib3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IGJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4rXFwvKFteXFwvXStcXC8/KSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgYm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGJvdHRvbW1vc3ROYW1lO1xufVxuXG5mdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLispXFwvW15cXC9dK1xcLz8kLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBkaXJlY3RvcnlQYXRoID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiBkaXJlY3RvcnlQYXRoO1xufVxuXG5mdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXihbXlxcL10rKVxcLy4rJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmZ1bmN0aW9uIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvKF4uKylcXC9bXlxcL10rXFwvPyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lO1xufVxuXG5mdW5jdGlvbiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL15bXlxcL10rXFwvKC4rKSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc1BhdGhSZWxhdGl2ZVBhdGg6IGlzUGF0aFJlbGF0aXZlUGF0aCxcbiAgaXNQYXRoQWJzb2x1dGVQYXRoOiBpc1BhdGhBYnNvbHV0ZVBhdGgsXG4gIGlzUGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lOiBpc1BhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZSxcbiAgaXNUb3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluUGF0aDogaXNUb3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluUGF0aCxcbiAgY29tYmluZVBhdGhzOiBjb21iaW5lUGF0aHMsXG4gIGNvbmNhdGVuYXRlUGF0aHM6IGNvbmNhdGVuYXRlUGF0aHMsXG4gIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGg6IGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGg6IHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGg6IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aDogcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGg6IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZmlsZVN5c3RlbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9maWxlU3lzdGVtJyk7XG5cbmNvbnN0IHsgcmVhZEZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHBhcnNlRmlsZShmaWxlUGF0aCwgYXJncykge1xuICBjb25zdCBjb250ZW50ID0gcmVhZEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICBwYXJzZWRDb250ZW50ID0gcGFyc2VDb250ZW50KGNvbnRlbnQsIGFyZ3MpO1xuXG4gIHJldHVybiBwYXJzZWRDb250ZW50O1xufVxuXG5mdW5jdGlvbiBwYXJzZUNvbnRlbnQoY29udGVudCwgYXJncykge1xuICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoJ1xcbicpLFxuICAgICAgICBwYXJzZWRMaW5lcyA9IHBhcnNlTGluZXMobGluZXMsIGFyZ3MpLFxuICAgICAgICBwYXJzZWRDb250ZW50ID0gcGFyc2VkTGluZXMuam9pbignXFxuJyk7XG5cbiAgcmV0dXJuIHBhcnNlZENvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTGluZShsaW5lLCBhcmdzKSB7XG4gIGNvbnN0IHBhcnNlZExpbmUgPSBsaW5lLnJlcGxhY2UoL1xcJFxceyguKz8pXFx9L2csIGZ1bmN0aW9uKG1hdGNoLCB0b2tlbikge1xuICAgIGNvbnN0IHBhcnNlZFRva2VuID0gcGFyc2VUb2tlbih0b2tlbiwgYXJncyk7XG5cbiAgICByZXR1cm4gcGFyc2VkVG9rZW47XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWRMaW5lO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGFyc2VGaWxlOiBwYXJzZUZpbGUsXG4gIHBhcnNlQ29udGVudDogcGFyc2VDb250ZW50LFxuICBwYXJzZUxpbmU6IHBhcnNlTGluZVxufTtcblxuZnVuY3Rpb24gcGFyc2VMaW5lcyhsaW5lcywgYXJncykge1xuICBjb25zdCBwYXJzZWRMaW5lcyA9IGxpbmVzLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgY29uc3QgcGFyc2VkTGluZSA9IHBhcnNlTGluZShsaW5lLCBhcmdzKTtcblxuICAgIHJldHVybiBwYXJzZWRMaW5lO1xuICB9KTtcblxuICByZXR1cm4gcGFyc2VkTGluZXM7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVG9rZW4odG9rZW4sIGFyZ3MpIHtcbiAgbGV0IHBhcnNlZFRva2VuID0gJyc7XG5cbiAgaWYgKGFyZ3MuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG4gICAgcGFyc2VkVG9rZW4gPSBhcmdzW3Rva2VuXTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWRUb2tlbjtcbn1cbiJdfQ==
