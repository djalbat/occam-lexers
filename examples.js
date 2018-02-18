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

var tokensFromLines = tokensUtilities.tokensFromLines;

var BNFLexer = function (_CommonLexer) {
  _inherits(BNFLexer, _CommonLexer);

  function BNFLexer() {
    _classCallCheck(this, BNFLexer);

    return _possibleConstructorReturn(this, (BNFLexer.__proto__ || Object.getPrototypeOf(BNFLexer)).apply(this, arguments));
  }

  _createClass(BNFLexer, [{
    key: 'tokensFromBNF',
    value: function tokensFromBNF(bnf) {
      var content = bnf,
          ///
      lines = _get(BNFLexer.prototype.__proto__ || Object.getPrototypeOf(BNFLexer.prototype), 'linesFromContent', this).call(this, content),
          tokens = tokensFromLines(lines);

      return tokens;
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
    key: 'isSignificant',
    value: function isSignificant() {
      var significant = false;

      return significant;
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
    key: 'isSignificant',
    value: function isSignificant() {
      var significant = true;

      return significant;
    }
  }, {
    key: 'isWhitespaceToken',
    value: function isWhitespaceToken() {
      var whitespaceToken = false;

      return whitespaceToken;
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

function tokensFromLines(lines) {
  var tokens = lines.reduce(function (tokens, line) {
    var lineTokens = line.getTokens();

    tokens = tokens.concat(lineTokens);

    return tokens;
  }, []);

  return tokens;
}

module.exports = {
  tokensFromLines: tokensFromLines
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvYmFzaWMvZW50cmllcy5qcyIsImVzNi9iYXNpYy9sZXhlci5qcyIsImVzNi9iYXNpYy9saW5lLmpzIiwiZXM2L2Jhc2ljL3Rva2Vucy9jb21tZW50LmpzIiwiZXM2L2Jhc2ljL3Rva2Vucy9yZWd1bGFyRXhwcmVzc2lvbi5qcyIsImVzNi9iYXNpYy90b2tlbnMvc3RyaW5nTGl0ZXJhbC5qcyIsImVzNi9ibmYvZW50cmllcy5qcyIsImVzNi9ibmYvbGV4ZXIuanMiLCJlczYvYm5mL2xpbmUuanMiLCJlczYvYm5mL3NwZWNpYWxTeW1ib2xzLmpzIiwiZXM2L2JuZi90b2tlbnMvY29tbWVudC5qcyIsImVzNi9jb21tb24vY29uZmlndXJhdGlvbi5qcyIsImVzNi9jb21tb24vbGV4ZXIuanMiLCJlczYvY29tbW9uL2xpbmUuanMiLCJlczYvY29tbW9uL3J1bGUuanMiLCJlczYvY29tbW9uL3J1bGVzLmpzIiwiZXM2L2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC5qcyIsImVzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC5qcyIsImVzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9lbmRPZi5qcyIsImVzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9taWRkbGVPZi5qcyIsImVzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zdGFydE9mLmpzIiwiZXM2L2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC5qcyIsImVzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lLmpzIiwiZXM2L2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvbi5qcyIsImVzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nTGl0ZXJhbC5qcyIsImVzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvd2hpdGVzcGFjZS5qcyIsImVzNi9jb21tb24vdG9rZW5zLmpzIiwiZXM2L2NvbW1vbi90b2tlbnMvY29tbWVudC5qcyIsImVzNi9jb21tb24vdG9rZW5zL3JlZ3VsYXJFeHByZXNzaW9uLmpzIiwiZXM2L2NvbW1vbi90b2tlbnMvc2lnbmlmaWNhbnQuanMiLCJlczYvY29tbW9uL3Rva2Vucy9zdHJpbmdMaXRlcmFsLmpzIiwiZXM2L2NvbW1vbi90b2tlbnMvd2hpdGVzcGFjZS5qcyIsImVzNi9leGFtcGxlLmpzIiwiZXM2L2V4YW1wbGVzLmpzIiwiZXM2L2V4YW1wbGVzL2Jhc2ljLmpzIiwiZXM2L2V4YW1wbGVzL2JuZi5qcyIsImVzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyIsImVzNi9mbG9yZW5jZS9lbnRyaWVzLmpzIiwiZXM2L2Zsb3JlbmNlL2xleGVyLmpzIiwiZXM2L2Zsb3JlbmNlL2xpbmUuanMiLCJlczYvZmxvcmVuY2UvdG9rZW5zL3JlZ3VsYXJFeHByZXNzaW9uLmpzIiwiZXM2L3V0aWxpdGllcy9jb250ZW50LmpzIiwiZXM2L3V0aWxpdGllcy90b2tlbnMuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2VzNi9jdXJzb3IuanMiLCJub2RlX21vZHVsZXMvZWFzeS1sYXlvdXQvZXM2L29wdGlvbnMuanMiLCJub2RlX21vZHVsZXMvZWFzeS1sYXlvdXQvZXM2L3NpemVhYmxlRWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5LWxheW91dC9lczYvc3BsaXR0ZXIuanMiLCJub2RlX21vZHVsZXMvZWFzeS1sYXlvdXQvZXM2L3NwbGl0dGVyL2hvcml6b250YWwuanMiLCJub2RlX21vZHVsZXMvZWFzeS1sYXlvdXQvZXM2L3NwbGl0dGVyL3ZlcnRpY2FsLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZG9jdW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9lbGVtZW50L2JvZHkuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9idXR0b24uanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9jaGVja2JveC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9lbGVtZW50L2Rpdi5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9lbGVtZW50L2xpbmsuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9zZWxlY3QuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9zcGFuLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2lucHV0RWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9pbnB1dEVsZW1lbnQvaW5wdXQuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvaW5wdXRFbGVtZW50L3RleHRhcmVhLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21pc2MvYm91bmRzLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21pc2Mvb2Zmc2V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21peGluL2NsaWNrLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21peGluL2V2ZW50LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21peGluL2pzeC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXhpbi9rZXkuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvbWl4aW4vbW91c2UuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvbWl4aW4vcmVzaXplLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21peGluL3Njcm9sbC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9yZWFjdC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi90ZXh0RWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi91dGlsaXRpZXMvZG9tLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L3V0aWxpdGllcy9vYmplY3QuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvd2luZG93LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9hc3luY2hyb25vdXMuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9wYXRoLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUEsSUFBTSxVQUFVLENBRWQsRUFBRSxZQUFnQiw4QkFBbEIsRUFGYyxFQUlkLEVBQUUsY0FBZ0IsTUFBbEIsRUFKYyxDQUFoQjs7QUFRQSxPQUFPLE9BQVAsR0FBaUIsT0FBakI7OztBQ1ZBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxZQUFZLFFBQVEsUUFBUixDQUFsQjtBQUFBLElBQ00sVUFBVSxRQUFRLFdBQVIsQ0FEaEI7QUFBQSxJQUVNLFFBQVEsUUFBUSxpQkFBUixDQUZkO0FBQUEsSUFHTSxjQUFjLFFBQVEsaUJBQVIsQ0FIcEI7O0lBS00sVTs7Ozs7Ozs7Ozs7Z0NBQ2UsTyxFQUFTO0FBQzFCLFVBQU0sUUFBUSxNQUFNLFdBQU4sQ0FBa0IsT0FBbEIsQ0FBZDtBQUFBLFVBQ00sYUFBYSxJQUFJLFVBQUosQ0FBZSxLQUFmLEVBQXNCLFNBQXRCLENBRG5COztBQUdBLGFBQU8sVUFBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU0sYUFBYSxXQUFXLFdBQVgsQ0FBdUIsT0FBdkIsQ0FBbkI7O0FBRUEs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YSxjQUFiLEVBQTZCLFVBQVMsS0FBVCxFQUFnQixLQUFoQixFQUF1QjtBQUNyRSxRQUFNLGNBQWMsV0FBVyxLQUFYLEVBQWtCLElBQWxCLENBQXBCOztBQUVBLFdBQU8sV0FBUDtBQUNELEdBSmtCLENBQW5COztBQU1BLFNBQU8sVUFBUDtBQUNEOztBQUVELE9BQU8sT0FBUCxHQUFpQjtBQUNmLGFBQVcsU0FESTtBQUVmLGdCQUFjLFlBRkM7QUFHZixhQUFXO0FBSEksQ0FBakI7O0FBTUEsU0FBUyxVQUFULENBQW9CLEtBQXBCLEVBQTJCLElBQTNCLEVBQWlDO0FBQy9CLE1BQU0sY0FBYyxNQUFNLEdBQU4sQ0FBVSxVQUFTLElBQVQsRUFBZTtBQUMzQyxRQUFNLGFBQWEsVUFBVSxJQUFWLEVBQWdCLElBQWhCLENBQW5COztBQUVBLFdBQU8sVUFBUDtBQUNELEdBSm1CLENBQXBCOztBQU1BLFNBQU8sV0FBUDtBQUNEOztBQUVELFNBQVMsVUFBVCxDQUFvQixLQUFwQixFQUEyQixJQUEzQixFQUFpQztBQUMvQixNQUFJLGNBQWMsRUFBbEI7O0FBRUEsTUFBSSxLQUFLLGNBQUwsQ0FBb0IsS0FBcEIsQ0FBSixFQUFnQztBQUM5QixrQkFBYyxLQUFLLEtBQUwsQ0FBZDtBQUNEOztBQUVELFNBQU8sV0FBUDtBQUNEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcblxyXG4gIHsgXCJ0ZXJtaW5hbFwiICAgIDogXCJcXFxcK3xcXFxcLXxcXFxcKnxcXFxcL3xcXFxcKHxcXFxcKXxcXFxcZCtcIiB9LFxyXG5cclxuICB7IFwidW5hc3NpZ25lZFwiICA6IFwiXi4qJFwiIH1cclxuXHJcbl07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGVudHJpZXM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IEJhc2ljTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICBlbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXHJcbiAgICAgIFJ1bGVzID0gcmVxdWlyZSgnLi4vY29tbW9uL3J1bGVzJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyk7XHJcblxyXG5jbGFzcyBCYXNpY0xleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IFJ1bGVzLmZyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgYmFzaWNMZXhlciA9IG5ldyBCYXNpY0xleGVyKHJ1bGVzLCBCYXNpY0xpbmUpO1xyXG5cclxuICAgIHJldHVybiBiYXNpY0xleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgYmFzaWNMZXhlciA9IEJhc2ljTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyk7XHJcblxyXG4gICAgcmV0dXJuIGJhc2ljTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKEJhc2ljTGV4ZXIsIHtcclxuICBlbnRyaWVzOiBlbnRyaWVzXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0xleGVyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBDb21tb25MaW5lID0gcmVxdWlyZSgnLi4vY29tbW9uL2xpbmUnKSxcclxuICAgICAgQ29tbWVudFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL2NvbW1lbnQnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvd2hpdGVzcGFjZScpLFxyXG4gICAgICBTdHJpbmdMaXRlcmFsVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc3RyaW5nTGl0ZXJhbCcpLFxyXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3JlZ3VsYXJFeHByZXNzaW9uJyk7XHJcblxyXG5jbGFzcyBCYXNpY0xpbmUgZXh0ZW5kcyBDb21tb25MaW5lIHtcclxuICBzdGF0aWMgZnJvbUNvbnRlbnRSdWxlc0FuZENvbmZpZ3VyYXRpb24oY29udGVudCwgcnVsZXMsIGNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGNvbnN0IGJhc2ljTGluZSA9IHN1cGVyLmZyb21Db250ZW50UnVsZXNBbmRDb25maWd1cmF0aW9uKEJhc2ljTGluZSwgY29udGVudCwgcnVsZXMsIGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgIGJhc2ljTGluZS5pbml0aWFsaXNlKENvbW1lbnRUb2tlbnMsIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zLCBTdHJpbmdMaXRlcmFsVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKTtcclxuXHJcbiAgICByZXR1cm4gYmFzaWNMaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0xpbmU7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIENvbW1lbnRUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yUmVtYWluaW5nQ29udGVudCwgbGluZSwgY29uZmlndXJhdGlvbikge1xyXG4gICAgY29uc3QgaW5Db21tZW50ID0gZmFsc2U7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gaW5Db21tZW50O1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50VG9rZW5zO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSkgeyBcclxuXHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBTdHJpbmdMaXRlcmFsVG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKSB7IFxyXG5cclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nTGl0ZXJhbFRva2VucztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuXHJcbiAgeyBcInNwZWNpYWxcIiAgICA6IFwiOjo9fFxcXFx8fFxcXFwofFxcXFwpfFxcXFw/fFxcXFwqfFxcXFwrfFxcXFwufM61fDt8PE5PX1dISVRFU1BBQ0U+fDxFTkRfT0ZfTElORT5cIiB9LFxyXG5cclxuICB7IFwidHlwZVwiICAgICAgIDogXCJcXFxcW1teXFxcXF1dK1xcXFxdXCIgfSxcclxuXHJcbiAgeyBcIm5hbWVcIiAgICAgICA6IFwiW1xcXFx3fH5dK1wiIH0sXHJcblxyXG4gIHsgXCJ1bmFzc2lnbmVkXCIgOiBcIl4uKiRcIiB9XHJcbiAgICBcclxuXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZW50cmllcztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgQk5GTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICBlbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXHJcbiAgICAgIFJ1bGVzID0gcmVxdWlyZSgnLi4vY29tbW9uL3J1bGVzJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyksXHJcbiAgICAgIHNwZWNpYWxTeW1ib2xzID0gcmVxdWlyZSgnLi9zcGVjaWFsU3ltYm9scycpLFxyXG4gICAgICB0b2tlbnNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdG9rZW5zJyk7XHJcblxyXG5jb25zdCB7IHRva2Vuc0Zyb21MaW5lcyB9ID0gdG9rZW5zVXRpbGl0aWVzO1xyXG5cclxuY2xhc3MgQk5GTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgdG9rZW5zRnJvbUJORihibmYpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBibmYsICAvLy9cclxuICAgICAgICAgIGxpbmVzID0gc3VwZXIubGluZXNGcm9tQ29udGVudChjb250ZW50KSxcclxuICAgICAgICAgIHRva2VucyA9IHRva2Vuc0Zyb21MaW5lcyhsaW5lcyk7XHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IFJ1bGVzLmZyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgYm5mTGV4ZXIgPSBuZXcgQk5GTGV4ZXIocnVsZXMsIEJORkxpbmUpO1xyXG5cclxuICAgIHJldHVybiBibmZMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyk7XHJcblxyXG4gICAgcmV0dXJuIGJuZkxleGVyO1xyXG4gIH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihCTkZMZXhlciwge1xyXG4gIGVudHJpZXM6IGVudHJpZXMsXHJcbiAgc3BlY2lhbFN5bWJvbHM6IHNwZWNpYWxTeW1ib2xzXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCTkZMZXhlcjtcclxuXHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IENvbW1vbkxpbmUgPSByZXF1aXJlKCcuLi9jb21tb24vbGluZScpLFxyXG4gICAgICBDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvY29tbWVudCcpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy93aGl0ZXNwYWNlJyksXHJcbiAgICAgIFN0cmluZ0xpdGVyYWxUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3N0cmluZ0xpdGVyYWwnKSxcclxuICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3JlZ3VsYXJFeHByZXNzaW9uJyk7XHJcblxyXG5jbGFzcyBCTkZMaW5lIGV4dGVuZHMgQ29tbW9uTGluZSB7XHJcbiAgc3RhdGljIGZyb21Db250ZW50UnVsZXNBbmRDb25maWd1cmF0aW9uKGNvbnRlbnQsIHJ1bGVzLCBjb25maWd1cmF0aW9uKSB7XHJcbiAgICBjb25zdCBibmZMaW5lID0gc3VwZXIuZnJvbUNvbnRlbnRSdWxlc0FuZENvbmZpZ3VyYXRpb24oQk5GTGluZSwgY29udGVudCwgcnVsZXMsIGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgIGJuZkxpbmUuaW5pdGlhbGlzZShDb21tZW50VG9rZW5zLCBSZWd1bGFyRXhwcmVzc2lvblRva2VucywgU3RyaW5nTGl0ZXJhbFRva2VucywgV2hpdGVzcGFjZVRva2Vucyk7XHJcblxyXG4gICAgcmV0dXJuIGJuZkxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJORkxpbmU7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IHNwZWNpYWxTeW1ib2xzID0ge1xyXG4gIHBsdXMgOiAnKycsXHJcbiAgZXBzaWxvbiA6ICfOtScsXHJcbiAgd2lsZGNhcmQgOiAnLicsXHJcbiAgYXN0ZXJpc2sgOiAnKicsXHJcbiAgc2VwYXJhdG9yIDogJzo6PScsXHJcbiAgdGVybWluYXRvciA6ICc7JyxcclxuICB2ZXJ0aWNhbEJhciA6ICd8JyxcclxuICBvcGVuQnJhY2tldCA6ICcoJyxcclxuICBjbG9zZUJyYWNrZXQgOiAnKScsXHJcbiAgcXVlc3Rpb25NYXJrIDogJz8nLFxyXG4gIEVORF9PRl9MSU5FIDogJzxFTkRfT0ZfTElORT4nLFxyXG4gIE5PX1dISVRFU1BBQ0UgOiAnPE5PX1dISVRFU1BBQ0U+J1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzcGVjaWFsU3ltYm9scztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgQ29tbWVudFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JSZW1haW5pbmdDb250ZW50LCBsaW5lLCBjb25maWd1cmF0aW9uKSB7XHJcbiAgICBjb25zdCBpbkNvbW1lbnQgPSBmYWxzZTsgIC8vL1xyXG5cclxuICAgIHJldHVybiBpbkNvbW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbnM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIENvbmZpZ3VyYXRpb24ge1xyXG4gIGNvbnN0cnVjdG9yKG1pbmltdW1MaW5lc0xlbmd0aCA9IEluZmluaXR5LCBwcmV2aW91c0xpbmVJbkNvbW1lbnQgPSBmYWxzZSwgZm9sbG93aW5nTGluZUluQ29tbWVudCA9IGZhbHNlKSB7IC8vL1xyXG4gICAgdGhpcy5taW5pbXVtTGluZXNMZW5ndGggPSBtaW5pbXVtTGluZXNMZW5ndGg7XHJcbiAgICB0aGlzLnByZXZpb3VzTGluZUluQ29tbWVudCA9IHByZXZpb3VzTGluZUluQ29tbWVudDtcclxuICAgIHRoaXMuZm9sbG93aW5nTGluZUluQ29tbWVudCA9IGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRNaW5pbXVtTGluZXNMZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5taW5pbXVtTGluZXNMZW5ndGg7XHJcbiAgfVxyXG5cclxuICBpc1ByZXZpb3VzTGluZUluQ29tbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLnByZXZpb3VzTGluZUluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGlzRm9sbG93aW5nTGluZUluQ29tbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvbGxvd2luZ0xpbmVJbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBzZXRQcmV2aW91c0xpbmVJbkNvbW1lbnQocHJldmlvdXNMaW5lSW5Db21tZW50KSB7XHJcbiAgICB0aGlzLnByZXZpb3VzTGluZUluQ29tbWVudCA9IHByZXZpb3VzTGluZUluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIHNob3VsZFRlcm1pbmF0ZShsZW5ndGgpIHtcclxuICAgIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAobGVuZ3RoID49IHRoaXMubWluaW11bUxpbmVzTGVuZ3RoKSB7XHJcbiAgICAgIGlmICh0aGlzLnByZXZpb3VzTGluZUluQ29tbWVudCA9PT0gdGhpcy5mb2xsb3dpbmdMaW5lSW5Db21tZW50KSB7XHJcbiAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXJtaW5hdGU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbmZpZ3VyYXRpb247XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcclxuICAgICAgUnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyksXHJcbiAgICAgIENvbmZpZ3VyYXRpb24gPSByZXF1aXJlKCcuL2NvbmZpZ3VyYXRpb24nKTtcclxuXHJcbmNsYXNzIENvbW1vbkxleGVyIHtcclxuICBjb25zdHJ1Y3RvcihydWxlcywgTGluZSkge1xyXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xyXG4gICAgdGhpcy5MaW5lID0gTGluZTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0UnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcclxuICB9XHJcbiAgXHJcbiAgZ2V0TGluZSgpIHtcclxuICAgIHJldHVybiB0aGlzLkxpbmU7XHJcbiAgfVxyXG5cclxuICBhZGRlZExpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgZmlyc3RMaW5lSW5kZXgsIG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24obWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpLFxyXG4gICAgICAgICAgbGluZXMgPSB0aGlzLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgZmlyc3RMaW5lSW5kZXgsIGNvbmZpZ3VyYXRpb24pLFxyXG4gICAgICAgICAgYWRkZWRMaW5lcyA9IGxpbmVzOyAvLy9cclxuXHJcbiAgICByZXR1cm4gYWRkZWRMaW5lcztcclxuICB9XHJcblxyXG4gIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgZmlyc3RMaW5lSW5kZXggPSAwLCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oKSkge1xyXG4gICAgY29uc3QgY29udGVudHMgPSBjb250ZW50LnNwbGl0KC9cXG4vKSxcclxuICAgICAgICAgIGxpbmVzID0gdGhpcy5saW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgZmlyc3RMaW5lSW5kZXgsIGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIGxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzLCBmaXJzdExpbmVJbmRleCwgY29uZmlndXJhdGlvbikge1xyXG4gICAgY29uc3QgbGluZXMgPSBbXTtcclxuICAgIFxyXG4gICAgbGV0IGluZGV4ID0gZmlyc3RMaW5lSW5kZXgsICAgIFxyXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50c1tpbmRleF07XHJcblxyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCBsZW5ndGggPSBpbmRleCAtIGZpcnN0TGluZUluZGV4LFxyXG4gICAgICAgICAgICB0ZXJtaW5hdGUgPSBjb25maWd1cmF0aW9uLnNob3VsZFRlcm1pbmF0ZShsZW5ndGgpO1xyXG5cclxuICAgICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBsaW5lID0gdGhpcy5MaW5lLmZyb21Db250ZW50UnVsZXNBbmRDb25maWd1cmF0aW9uKGNvbnRlbnQsIHRoaXMucnVsZXMsIGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgICAgbGluZXMucHVzaChsaW5lKTtcclxuXHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50c1srK2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBydWxlRnJvbUVudHJ5KGVudHJ5KSB7IHJldHVybiBSdWxlLmZyb21FbnRyeShlbnRyeSk7IH1cclxuICBcclxuICBzdGF0aWMgcnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBSdWxlcy5mcm9tRW50cmllcyhlbnRyaWVzKTsgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxleGVyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBTaWduaWZpY2FudFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3NpZ25pZmljYW50Jyk7XHJcblxyXG5jbGFzcyBDb21tb25MaW5lIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBydWxlcywgY29uZmlndXJhdGlvbiwgdG9rZW5zLCBpbkNvbW1lbnQsIHJlcGxhY2VtZW50VG9rZW5NYXApIHtcclxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XHJcbiAgICB0aGlzLmluQ29tbWVudCA9IGluQ29tbWVudDtcclxuICAgIHRoaXMucmVwbGFjZW1lbnRUb2tlbk1hcCA9IHJlcGxhY2VtZW50VG9rZW5NYXA7XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XHJcbiAgfVxyXG5cclxuICBnZXRDb25maWd1cmF0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbjtcclxuICB9XHJcblxyXG4gIGdldFRva2Vucyh3aXRoUmVwbGFjZW1lbnRUb2tlbnMgPSBmYWxzZSkge1xyXG4gICAgbGV0IHRva2VucyA9IHRoaXMudG9rZW5zO1xyXG5cclxuICAgIGlmICh3aXRoUmVwbGFjZW1lbnRUb2tlbnMpIHtcclxuICAgICAgdG9rZW5zID0gdG9rZW5zLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIHRva2VuLCBpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IHJlcGxhY2VtZW50VG9rZW4gPSB0aGlzLnJlcGxhY2VtZW50VG9rZW5NYXBbaW5kZXhdO1xyXG5cclxuICAgICAgICB0b2tlbiA9IHJlcGxhY2VtZW50VG9rZW4gfHwgdG9rZW47ICAvLy9cclxuXHJcbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgICB9LmJpbmQodGhpcyksIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgaXNJbkNvbW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRSZXBsYWNlbWVudFRva2VuTWFwKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnRUb2tlbk1hcDtcclxuICB9XHJcblxyXG4gIGdldEluZGV4ZXMoKSB7XHJcbiAgICBjb25zdCBpbmRleGVzID0gT2JqZWN0LmtleXModGhpcy5yZXBsYWNlbWVudFRva2VuTWFwKTtcclxuXHJcbiAgICByZXR1cm4gaW5kZXhlcztcclxuICB9XHJcblxyXG4gIGdldEZpcnN0VG9rZW5JbmRleChmaXJzdFRva2VuID0gbnVsbCkge1xyXG4gICAgY29uc3Qgd2l0aFJlcGxhY2VtZW50VG9rZW5zID0gZmFsc2UsXHJcbiAgICAgICAgICB0b2tlbnMgPSB0aGlzLmdldFRva2Vucyh3aXRoUmVwbGFjZW1lbnRUb2tlbnMpLFxyXG4gICAgICAgICAgZmlyc3RJbmRleCA9IDAsXHJcbiAgICAgICAgICBmaXJzdFRva2VuSW5kZXggPSAoZmlyc3RUb2tlbiA9PT0gbnVsbCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEluZGV4IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMuaW5kZXhPZihmaXJzdFRva2VuKTtcclxuXHJcbiAgICByZXR1cm4gZmlyc3RUb2tlbkluZGV4O1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFzdFRva2VuSW5kZXgobGFzdFRva2VuID0gbnVsbCkge1xyXG4gICAgY29uc3Qgd2l0aFJlcGxhY2VtZW50VG9rZW5zID0gZmFsc2UsXHJcbiAgICAgICAgICB0b2tlbnMgPSB0aGlzLmdldFRva2Vucyh3aXRoUmVwbGFjZW1lbnRUb2tlbnMpLFxyXG4gICAgICAgICAgdG9rZW5zTGVuZ3RoID0gdG9rZW5zLmxlbmd0aCxcclxuICAgICAgICAgIGxhc3RJbmRleCA9IHRva2Vuc0xlbmd0aCAtIDEsXHJcbiAgICAgICAgICBsYXN0VG9rZW5JbmRleCA9IChsYXN0VG9rZW4gPT09IG51bGwpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEluZGV4IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMuaW5kZXhPZihsYXN0VG9rZW4pO1xyXG5cclxuICAgIHJldHVybiBsYXN0VG9rZW5JbmRleDtcclxuICB9XHJcblxyXG4gIGFzSFRNTChmaWxlUGF0aCwgd2l0aFJlcGxhY2VtZW50VG9rZW5zKSB7XHJcbiAgICBsZXQgaHRtbDtcclxuXHJcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLmdldFRva2Vucyh3aXRoUmVwbGFjZW1lbnRUb2tlbnMpO1xyXG5cclxuICAgIGh0bWwgPSB0b2tlbnMucmVkdWNlKGZ1bmN0aW9uKGh0bWwsIHRva2VuKSB7XHJcbiAgICAgIGNvbnN0IHRva2VuSFRNTCA9IHRva2VuLmFzSFRNTChmaWxlUGF0aCk7XHJcblxyXG4gICAgICBodG1sICs9IHRva2VuSFRNTDtcclxuXHJcbiAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfSwgJycpO1xyXG4gICAgXHJcbiAgICBodG1sICs9ICdcXG4nOyAvLy9cclxuICAgIFxyXG4gICAgcmV0dXJuIGh0bWw7XHJcbiAgfVxyXG5cclxuICBzZXRUb2tlbnModG9rZW5zKSB7XHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuICB9XHJcblxyXG4gIHJlcGxhY2VUb2tlbihyZXBsYWNlZFRva2VuLCByZXBsYWNlbWVudFRva2VuKSB7XHJcbiAgICBjb25zdCB3aXRoUmVwbGFjZW1lbnRUb2tlbnMgPSBmYWxzZSxcclxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKHdpdGhSZXBsYWNlbWVudFRva2VucyksXHJcbiAgICAgICAgICByZXBsYWNlZFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihyZXBsYWNlZFRva2VuKSxcclxuICAgICAgICAgIGluZGV4ID0gcmVwbGFjZWRUb2tlbkluZGV4OyAgLy8vXHJcblxyXG4gICAgdGhpcy5yZXBsYWNlbWVudFRva2VuTWFwW2luZGV4XSA9IHJlcGxhY2VtZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICByZW1vdmVSZXBsYWNlbWVudFRva2VucyhmaXJzdFRva2VuLCBsYXN0VG9rZW4pIHtcclxuICAgIGNvbnN0IGluZGV4ZXMgPSB0aGlzLmdldEluZGV4ZXMoKSxcclxuICAgICAgICAgIGZpcnN0VG9rZW5JbmRleCA9IHRoaXMuZ2V0Rmlyc3RUb2tlbkluZGV4KGZpcnN0VG9rZW4pLFxyXG4gICAgICAgICAgbGFzdFRva2VuSW5kZXggPSB0aGlzLmdldExhc3RUb2tlbkluZGV4KGxhc3RUb2tlbik7XHJcblxyXG4gICAgaW5kZXhlcy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgIGlmICgoaW5kZXggPj0gZmlyc3RUb2tlbkluZGV4KSAmJiAoaW5kZXggPD0gbGFzdFRva2VuSW5kZXgpKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMucmVwbGFjZW1lbnRUb2tlbk1hcFtpbmRleF07XHJcbiAgICAgIH1cclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKENvbW1lbnRUb2tlbnMsIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zLCBTdHJpbmdMaXRlcmFsVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKSB7XHJcbiAgICBjb25zdCBsaW5lID0gdGhpcywgIC8vL1xyXG4gICAgICAgICAgdG9rZW5zT3JDb250ZW50cyA9IFt0aGlzLmNvbnRlbnRdLFxyXG4gICAgICAgICAgaW5Db21tZW50ID0gQ29tbWVudFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIHRoaXMuY29uZmlndXJhdGlvbik7XHJcblxyXG4gICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKTtcclxuXHJcbiAgICBTdHJpbmdMaXRlcmFsVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcblxyXG4gICAgV2hpdGVzcGFjZVRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpO1xyXG5cclxuICAgIGNvbnN0IHRva2VucyA9IFNpZ25pZmljYW50VG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgdGhpcy5ydWxlcyk7XHJcblxyXG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XHJcblxyXG4gICAgdGhpcy5pbkNvbW1lbnQgPSBpbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUNvbnRlbnRSdWxlc0FuZENvbmZpZ3VyYXRpb24oTGluZSwgY29udGVudCwgcnVsZXMsIGNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGNvbnN0IHRva2VucyA9IHVuZGVmaW5lZCwgLy8vXHJcbiAgICAgICAgICBpbkNvbW1lbnQgPSB1bmRlZmluZWQsIC8vXHJcbiAgICAgICAgICByZXBsYWNlbWVudFRva2VuTWFwID0ge30sXHJcbiAgICAgICAgICBsaW5lID0gbmV3IExpbmUoY29udGVudCwgcnVsZXMsIGNvbmZpZ3VyYXRpb24sIHRva2VucywgaW5Db21tZW50LCByZXBsYWNlbWVudFRva2VuTWFwKTtcclxuXHJcbiAgICByZXR1cm4gbGluZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGluZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudCcpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW5UeXBlLCByZWd1bGFyRXhwcmVzc2lvbikge1xuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzaWduaWZpY2FudFRva2VuVHlwZTtcbiAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb247XG4gIH1cbiAgXG4gIGdldFNpZ25pZmljYW50VG9rZW5UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlO1xuICB9XG4gIFxuICBnZXRSZWd1bGFyRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuICBcbiAgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbiA9IC0xO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pO1xuICAgIFxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG4gICAgICBcbiAgICAgIGlmIChmaXJzdE1hdGNoICE9PSAnJykge1xuICAgICAgICBzaWduaWZpY2FudFRva2VuUG9zaXRpb24gPSBtYXRjaGVzLmluZGV4OyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uO1xuICB9XG5cbiAgc2lnbmlmaWNhbnRUb2tlbkZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbiksXG4gICAgICAgICAgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgY29uc3QgdHlwZSA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGUsIC8vL1xuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21FbnRyeShlbnRyeSkge1xuICAgIGNvbnN0IGVudHJ5S2V5cyA9IE9iamVjdC5rZXlzKGVudHJ5KSxcbiAgICAgICAgICBmaXJzdEVudHJ5S2V5ID0gZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXksIC8vL1xuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGVudHJ5W3NpZ25pZmljYW50VG9rZW5UeXBlXSxcbiAgICAgICAgICBydWxlID0gUnVsZS5mcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybik7XG4gICAgICAgIFxuICAgIHJldHVybiBydWxlOyBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICAgIGNvbnN0IHVuaWNvZGUgPSBpc1VuaWNvZGUocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSxcbiAgICAgICAgICBmbGFncyA9IHVuaWNvZGUgPyAndScgOiAnJyxcbiAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiwgZmxhZ3MpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gcmVnRXhwLCAvLy9cbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUoc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuZnVuY3Rpb24gaXNVbmljb2RlKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICBjb25zdCB1bmljb2RlUmVndWxhckV4cHJlc3Npb24gPSAvdVxcey8sIC8vL1xuICAgICAgICBpbmRleCA9IHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybi5zZWFyY2godW5pY29kZVJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgdW5pY29kZSA9IChpbmRleCAhPT0gLTEpO1xuXG4gIHJldHVybiB1bmljb2RlO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUnVsZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuICBcbiAgcmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZ2V0UnVsZShkZXB0aCkge1xuICAgIGNvbnN0IHJ1bGUgPSAodGhpcy5hcnJheVtkZXB0aF0gfHwgbnVsbCk7IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICB0aGlzLmFycmF5LnVuc2hpZnQocnVsZSk7IC8vL1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IHNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGFycmF5ID0gc2lnbmlmaWNhbnRUb2tlblR5cGVzLm1hcChmdW5jdGlvbihzaWduaWZpY2FudFRva2VuVHlwZSkge1xuICAgICAgICAgICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gZmluZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihzaWduaWZpY2FudFRva2VuVHlwZSwgZW50cmllcyksXG4gICAgICAgICAgICAgICAgICBydWxlID0gUnVsZS5mcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybik7XG4gICAgICBcbiAgICAgICAgICAgIHJldHVybiBydWxlOyAgICAgIFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJ1bGVzID0gbmV3IFJ1bGVzKGFycmF5KTtcbiAgICBcbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlcztcblxuZnVuY3Rpb24gZmluZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihzaWduaWZpY2FudFRva2VuVHlwZSwgZW50cmllcykge1xuICBjb25zdCBlbnRyeSA9IGVudHJpZXMuZmluZChmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICAgIGNvbnN0IGVudHJ5S2V5cyA9IE9iamVjdC5rZXlzKGVudHJ5KSxcbiAgICAgICAgICAgICAgICBmaXJzdEVudHJ5S2V5ID0gZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICAgICAgICBlbnRyeVNpZ25pZmljYW50VG9rZW5UeXBlID0gZmlyc3RFbnRyeUtleSwgIC8vL1xuICAgICAgICAgICAgICAgIGZvdW5kID0gKGVudHJ5U2lnbmlmaWNhbnRUb2tlblR5cGUgPT09IHNpZ25pZmljYW50VG9rZW5UeXBlKTtcblxuICAgICAgICAgIHJldHVybiBmb3VuZDtcbiAgICAgICAgfSkgfHwgbnVsbCwgLy8vXG4gICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IChlbnRyeSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeVtzaWduaWZpY2FudFRva2VuVHlwZV0gOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm47XG59XG5cbmZ1bmN0aW9uIHNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21FbnRyaWVzKGVudHJpZXMpIHtcbiAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gZW50cmllcy5tYXAoZnVuY3Rpb24oZW50cnkpIHtcbiAgICBjb25zdCBlbnRyeUtleXMgPSBPYmplY3Qua2V5cyhlbnRyeSksXG4gICAgICAgICAgZmlyc3RFbnRyeUtleSA9IGZpcnN0KGVudHJ5S2V5cyksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBmaXJzdEVudHJ5S2V5OyAvLy9cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlcztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29udGVudFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9jb250ZW50Jyk7XG5cbmNvbnN0IHsgc2FuaXRpc2VDb250ZW50IH0gPSBjb250ZW50VXRpbGl0aWVzO1xuXG5jbGFzcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgaHRtbCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB0aGlzLmh0bWwgPSBodG1sO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmh0bWw7XG4gIH1cbiAgXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aDsgLy8vXG4gIH1cblxuICBpc1NpZ25pZmljYW50KCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnQ7XG4gIH1cblxuICBhc0hUTUwoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5odG1sOyAvLy9cbiAgICBcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmNsb25lKE5vblNpZ25pZmljYW50VG9rZW4sIHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShDbGFzcyA9IE5vblNpZ25pZmljYW50VG9rZW4sIHRva2VuLCBzdGFydFBvc2l0aW9uID0gMCwgZW5kUG9zaXRpb24gPSB0b2tlbi5nZXRMZW5ndGgoKSkge1xuICAgIGxldCBjbG9uZWROb25TaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uICE9PSBlbmRQb3NpdGlvbikge1xuICAgICAgY29uc3QgbGluZSA9IHRva2VuLmdldExpbmUoKTtcblxuICAgICAgbGV0IGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCk7XG4gICAgICBcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7XG5cbiAgICAgIGNsb25lZE5vblNpZ25pZmljYW50VG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudEFuZExpbmUoQ2xhc3MsIGNvbnRlbnQsIGxpbmUpO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZWROb25TaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKENsYXNzLCBjb250ZW50LCBsaW5lKSB7XG4gICAgaWYgKGxpbmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbGluZSA9IGNvbnRlbnQ7XG4gICAgICBjb250ZW50ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IE5vblNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBodG1sID0gc2FuaXRpc2VkQ29udGVudCxcbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCBodG1sKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblNpZ25pZmljYW50VG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnRlbnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvY29udGVudCcpLFxuICAgICAgTm9uU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL25vblNpZ25pZmljYW50Jyk7XG5cbmNvbnN0IHsgc2FuaXRpc2VDb250ZW50IH0gPSBjb250ZW50VXRpbGl0aWVzO1xuXG5jbGFzcyBDb21tZW50VG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgbWVyZ2UoY29tbWVudFRva2VuKSB7XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcbiAgICBcbiAgICBjb25zdCBsaW5lID0gdGhpcy5nZXRMaW5lKCksXG4gICAgICAgICAgY29tbWVudFRva2VuQ29udGVudCA9IGNvbW1lbnRUb2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICBjb250ZW50ICs9IGNvbW1lbnRUb2tlbkNvbnRlbnQ7XG5cbiAgICBjb21tZW50VG9rZW4gPSBDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpOyAgLy8vXG5cbiAgICByZXR1cm4gY29tbWVudFRva2VuO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5jbG9uZShDb21tZW50VG9rZW4sIHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShDbGFzcyA9IENvbW1lbnRUb2tlbiwgdG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmNsb25lKENsYXNzLCB0b2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKENsYXNzLCBjb250ZW50LCBsaW5lKSB7XG4gICAgaWYgKGxpbmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbGluZSA9IGNvbnRlbnQ7XG4gICAgICBjb250ZW50ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IENvbW1lbnRUb2tlbjtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiY29tbWVudFwiPiR7aW5uZXJIVE1MfTwvc3Bhbj5gLFxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCBodG1sKTtcblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50VG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tZW50Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBFbmRPZkNvbW1lbnRUb2tlbiBleHRlbmRzIENvbW1lbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBDb21tZW50VG9rZW4uY2xvbmUoRW5kT2ZDb21tZW50VG9rZW4sIHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkgeyByZXR1cm4gQ29tbWVudFRva2VuLmZyb21Db250ZW50QW5kTGluZShFbmRPZkNvbW1lbnRUb2tlbiwgY29udGVudCwgbGluZSk7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHtcbiAgICBsZXQgZW5kT2ZDb21tZW50VG9rZW4gPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKEVuZE9mQ29tbWVudFRva2VuLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgZW5kT2ZDb21tZW50VG9rZW4gPSBFbmRPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuZE9mQ29tbWVudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaChFbmRPZkNvbW1lbnRUb2tlbi5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxuRW5kT2ZDb21tZW50VG9rZW4ucmVndWxhckV4cHJlc3Npb24gPSAvXFwqXFwvLztcblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkNvbW1lbnRUb2tlbjtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tZW50Jyk7XG5cbmNsYXNzIE1pZGRsZU9mQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5jbG9uZShNaWRkbGVPZkNvbW1lbnRUb2tlbiwgdGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBsZW5ndGgpIHtcbiAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHIoMCwgbGVuZ3RoKTsgIC8vL1xuXG4gICAgY29uc3QgbWlkZGxlT2ZDb21tZW50VG9rZW4gPSBDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKE1pZGRsZU9mQ29tbWVudFRva2VuLCBjb250ZW50LCBsaW5lKTtcblxuICAgIHJldHVybiBtaWRkbGVPZkNvbW1lbnRUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1pZGRsZU9mQ29tbWVudFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbWVudCcpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgU3RhcnRPZkNvbW1lbnRUb2tlbiBleHRlbmRzIENvbW1lbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBDb21tZW50VG9rZW4uY2xvbmUoU3RhcnRPZkNvbW1lbnRUb2tlbiwgdGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7IHJldHVybiBDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKFN0YXJ0T2ZDb21tZW50VG9rZW4sIGNvbnRlbnQsIGxpbmUpOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgbGV0IHN0YXJ0T2ZDb21tZW50VG9rZW4gPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKFN0YXJ0T2ZDb21tZW50VG9rZW4ucmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBzdGFydE9mQ29tbWVudFRva2VuID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzdGFydE9mQ29tbWVudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaChTdGFydE9mQ29tbWVudFRva2VuLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5TdGFydE9mQ29tbWVudFRva2VuLnJlZ3VsYXJFeHByZXNzaW9uID0gL1xcL1xcKi87XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhcnRPZkNvbW1lbnRUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29udGVudFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9jb250ZW50Jyk7XG5cbmNvbnN0IHsgc2FuaXRpc2VDb250ZW50IH0gPSBjb250ZW50VXRpbGl0aWVzO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgdHlwZSwgaW5uZXJIVE1MKSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIH1cbiAgXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0SW5uZXJIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySFRNTDtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmNvbnRlbnQubGVuZ3RoOyAvLy9cblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBpc1NpZ25pZmljYW50KCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50ID0gdHJ1ZTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudDtcbiAgfVxuXG4gIGlzV2hpdGVzcGFjZVRva2VuKCkge1xuICAgIGNvbnN0IHdoaXRlc3BhY2VUb2tlbiA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcbiAgfVxuXG4gIGFzSFRNTChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMudHlwZSwgIC8vL1xuICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHt0aGlzLmlubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uY2xvbmUoU2lnbmlmaWNhbnRUb2tlbiwgdGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIH1cblxuICBzdGF0aWMgY2xvbmUoQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuLCBzaWduaWZpY2FudFRva2VuLCBzdGFydFBvc2l0aW9uID0gMCwgZW5kUG9zaXRpb24gPSBzaWduaWZpY2FudFRva2VuLmdldExlbmd0aCgpKSB7XG4gICAgbGV0IGNsb25lZFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBsZXQgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgICBjb25zdCBsaW5lID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRMaW5lKCksXG4gICAgICAgICAgICB0eXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7ICAvLy9cblxuICAgICAgY2xvbmVkU2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lZFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShDbGFzcywgY29udGVudCwgbGluZSwgdHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdHlwZSA9IGxpbmU7XG4gICAgICBsaW5lID0gY29udGVudDtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXcgQ2xhc3MoY29udGVudCwgbGluZSwgdHlwZSwgaW5uZXJIVE1MLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgRW5kT2ZMaW5lVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IDA7IC8vL1xuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGFzSFRNTChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGh0bWwgPSAnJzsgIC8vL1xuICAgIFxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIEVuZE9mTGluZVRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShlbmRPZkxpbmVUb2tlbiwgc3RhcnRQb3NpdGlvbiA9IDAsIGVuZFBvc2l0aW9uID0gZW5kT2ZMaW5lVG9rZW4uZ2V0TGVuZ3RoKCkpIHtcbiAgICBsZXQgY2xvbmVkRW5kT2ZMaW5lVG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gbnVsbCxcbiAgICAgICAgICAgIGxpbmUgPSBlbmRPZkxpbmVUb2tlbi5nZXRMaW5lKCksXG4gICAgICAgICAgICB0eXBlID0gZW5kT2ZMaW5lVG9rZW4uZ2V0VHlwZSgpLFxuXG4gICAgICBjbG9uZWRFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lZEVuZE9mTGluZVRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUpIHtcbiAgICBjb25zdCBjb250ZW50ID0gbnVsbCwgLy8vXG4gICAgICAgICAgeyB0eXBlIH0gPSBFbmRPZkxpbmVUb2tlbixcbiAgICAgICAgICBlbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSk7XG4gICAgXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSkge1xuICAgIGNvbnN0IGlubmVySFRNTCA9IG51bGwsIC8vL1xuICAgICAgICAgIGVuZE9mTGluZVRva2VuID0gbmV3IEVuZE9mTGluZVRva2VuKGNvbnRlbnQsIGxpbmUsIHR5cGUsIGlubmVySFRNTCk7XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW47XG4gIH1cbn1cblxuY29uc3QgdHlwZSA9ICdlbmRPZkxpbmUnO1xuXG5PYmplY3QuYXNzaWduKEVuZE9mTGluZVRva2VuLCB7XG4gIHR5cGU6IHR5cGVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3NpZ25pZmljYW50Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmNsb25lKFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4sIHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShSZWd1bGFyRXhwcmVzc2lvblRva2VuLCBjb250ZW50LCBsaW5lLCB0eXBlKTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIGxldCByZWd1bGFyRXhwcmVzc2lvblRva2VuID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaChSZWd1bGFyRXhwcmVzc2lvblRva2VuLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG4gICAgICBcbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cbiAgICAgIFxuICAgICAgY29uc3QgeyB0eXBlIH0gPSBSZWd1bGFyRXhwcmVzc2lvblRva2VuO1xuXG4gICAgICByZWd1bGFyRXhwcmVzc2lvblRva2VuID0gUmVndWxhckV4cHJlc3Npb25Ub2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25Ub2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goUmVndWxhckV4cHJlc3Npb25Ub2tlbi5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxuY29uc3QgdHlwZSA9ICdyZWd1bGFyRXhwcmVzc2lvbicsXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9cXC8oPzpcXFxcLnxbXlxcL10pKlxcLy87XG5cbk9iamVjdC5hc3NpZ24oUmVndWxhckV4cHJlc3Npb25Ub2tlbiwge1xuICB0eXBlOiB0eXBlLFxuICByZWd1bGFyRXhwcmVzc2lvbjogcmVndWxhckV4cHJlc3Npb25cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZ3VsYXJFeHByZXNzaW9uVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vc2lnbmlmaWNhbnQnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFN0cmluZ0xpdGVyYWxUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZShTdHJpbmdMaXRlcmFsVG9rZW4sIHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShTdHJpbmdMaXRlcmFsVG9rZW4sIGNvbnRlbnQsIGxpbmUsIHR5cGUpOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgbGV0IHN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goU3RyaW5nTGl0ZXJhbFRva2VuLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG4gICAgICBcbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cbiAgICAgIFxuICAgICAgY29uc3QgeyB0eXBlIH0gPSBTdHJpbmdMaXRlcmFsVG9rZW47XG5cbiAgICAgIHN0cmluZ0xpdGVyYWxUb2tlbiA9IFN0cmluZ0xpdGVyYWxUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3RyaW5nTGl0ZXJhbFRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaChTdHJpbmdMaXRlcmFsVG9rZW4ucmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbmNvbnN0IHR5cGUgPSAnc3RyaW5nJyxcbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gL1wiKD86XFxcXC58W15cIl0pKlwiLztcblxuT2JqZWN0LmFzc2lnbihTdHJpbmdMaXRlcmFsVG9rZW4sIHtcbiAgdHlwZTogdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb246IHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmdMaXRlcmFsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vc2lnbmlmaWNhbnQnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFdoaXRlc3BhY2VUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZShXaGl0ZXNwYWNlVG9rZW4sIHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIGlzV2hpdGVzcGFjZVRva2VuKCkge1xuICAgIGNvbnN0IHdoaXRlc3BhY2VUb2tlbiA9IHRydWU7XG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgYXNIVE1MKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuaW5uZXJIVE1MOyAgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShXaGl0ZXNwYWNlVG9rZW4sIGNvbnRlbnQsIGxpbmUsIHR5cGUpOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgbGV0IHdoaXRlc3BhY2VUb2tlbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goV2hpdGVzcGFjZVRva2VuLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG4gICAgICBcbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cbiAgICAgIFxuICAgICAgY29uc3QgeyB0eXBlIH0gPSBXaGl0ZXNwYWNlVG9rZW47XG5cbiAgICAgIHdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKFdoaXRlc3BhY2VUb2tlbi5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxuY29uc3QgdHlwZSA9ICd3aGl0ZXNwYWNlJyxcbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gL1tcXHQgXSsvO1xuXG5PYmplY3QuYXNzaWduKFdoaXRlc3BhY2VUb2tlbiwge1xuICB0eXBlOiB0eXBlLFxuICByZWd1bGFyRXhwcmVzc2lvbjogcmVndWxhckV4cHJlc3Npb25cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdoaXRlc3BhY2VUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xyXG5cclxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxyXG4gICAgICB7IHNwbGljZSB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5jbGFzcyBUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIFRva2VuKSB7XHJcbiAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgIFxyXG4gICAgY29uc3QgdG9rZW5zT3JDb250ZW50c0xlbmd0aCA9IHRva2Vuc09yQ29udGVudHMubGVuZ3RoO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IG9mZnNldEluZGV4ID0gaW5kZXggKyBvZmZzZXQsXHJcbiAgICAgICAgICAgIHRva2VuT3JDb250ZW50ID0gdG9rZW5zT3JDb250ZW50c1tvZmZzZXRJbmRleF07XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHRva2VuT3JDb250ZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0b2tlbk9yQ29udGVudCwgIC8vL1xyXG4gICAgICAgICAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCA9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudEZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBUb2tlbiksXHJcbiAgICAgICAgICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50TGVuZ3RoID0gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50Lmxlbmd0aCxcclxuICAgICAgICAgICAgICBzdGFydCA9IG9mZnNldEluZGV4O1xyXG5cclxuICAgICAgICBzcGxpY2UodG9rZW5zT3JDb250ZW50cywgc3RhcnQsIDEsIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCk7XHJcblxyXG4gICAgICAgIG9mZnNldCArPSB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRMZW5ndGggLSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRva2VucztcclxuXHJcbmZ1bmN0aW9uIHRva2Vuc09yUmVtYWluaW5nQ29udGVudEZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBUb2tlbikge1xyXG4gIGxldCByZW1haW5pbmdDb250ZW50LFxyXG4gICAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQgPSBbXSwgICAgICAgXHJcbiAgICAgIHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gVG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG4gIFxyXG4gIHdoaWxlICh0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCAhPT0gLTEpIHtcclxuICAgIGlmICh0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA+IDApIHtcclxuICAgICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50KTtcclxuXHJcbiAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5wdXNoKHJlbWFpbmluZ0NvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRva2VuID0gVG9rZW4uZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpLFxyXG4gICAgICAgICAgdG9rZW5MZW5ndGggPSB0b2tlbi5nZXRMZW5ndGgoKSxcclxuICAgICAgICAgIHRva2VuT2Zmc2V0ID0gdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgKyB0b2tlbkxlbmd0aDtcclxuICAgIFxyXG4gICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50LnB1c2godG9rZW4pO1xyXG4gICAgXHJcbiAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcodG9rZW5PZmZzZXQpO1xyXG5cclxuICAgIHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gVG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG4gIH1cclxuICBcclxuICBpZiAoY29udGVudCAhPT0gJycpIHtcclxuICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5wdXNoKHJlbWFpbmluZ0NvbnRlbnQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRva2Vuc09yUmVtYWluaW5nQ29udGVudDtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBFbmRPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvZW5kT2YnKSxcclxuICAgICAgU3RhcnRPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc3RhcnRPZicpLFxyXG4gICAgICBNaWRkbGVPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbWlkZGxlT2YnKTtcclxuXHJcbmNsYXNzIENvbW1lbnRUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIGNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGxldCBjb250ZW50ID0gdG9rZW5zT3JDb250ZW50cy5wb3AoKSxcclxuICAgICAgICBjb21tZW50VG9rZW4sXHJcbiAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoLFxyXG4gICAgICAgIHByZXZpb3VzTGluZUluQ29tbWVudCA9IGNvbmZpZ3VyYXRpb24uaXNQcmV2aW91c0xpbmVJbkNvbW1lbnQoKSxcclxuICAgICAgICBpbkNvbW1lbnQgPSAocHJldmlvdXNMaW5lSW5Db21tZW50ID09PSB0cnVlKTtcclxuXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gJycpIHtcclxuICAgICAgbGV0IGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcclxuXHJcbiAgICAgIGlmIChpbkNvbW1lbnQpIHtcclxuICAgICAgICBjb25zdCBlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IEVuZE9mQ29tbWVudFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID09PSAwKSB7XHJcbiAgICAgICAgICBpbkNvbW1lbnQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSBFbmRPZkNvbW1lbnRUb2tlbi5mcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCA9IG1pbmltdW1CYXJNaW51c09uZShlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCwgY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gTWlkZGxlT2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzQ29tbWVudFRva2VuID0gdG9rZW5zT3JDb250ZW50cy5wb3AoKTtcclxuXHJcbiAgICAgICAgY29tbWVudFRva2VuID0gKHByZXZpb3VzQ29tbWVudFRva2VuID09PSB1bmRlZmluZWQpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50VG9rZW4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb21tZW50VG9rZW4ubWVyZ2UoY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPSBTdGFydE9mQ29tbWVudFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPT09IDApIHtcclxuICAgICAgICAgIGluQ29tbWVudCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5mcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICAgIHRva2Vuc09yQ29udGVudHMucHVzaChjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb250ZW50TGVuZ3RoID0gbWluaW11bUJhck1pbnVzT25lKHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQsIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgdG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSByZW1haW5pbmdDb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzTGluZUluQ29tbWVudCA9IGluQ29tbWVudDsgIC8vL1xyXG5cclxuICAgIGNvbmZpZ3VyYXRpb24uc2V0UHJldmlvdXNMaW5lSW5Db21tZW50KHByZXZpb3VzTGluZUluQ29tbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGluQ29tbWVudDtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudFRva2VucztcclxuXHJcbmZ1bmN0aW9uIG1pbmltdW1CYXJNaW51c09uZSgpIHtcclxuICBjb25zdCB2YWx1ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxyXG4gICAgICAgIG1pbmltdW1CYXJNaW51c09uZSA9IHZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24obWluaW11bUJhck1pbnVzT25lLCB2YWx1ZSkge1xyXG4gICAgICAgICAgaWYgKHZhbHVlID4gLTEpIHtcclxuICAgICAgICAgICAgbWluaW11bUJhck1pbnVzT25lID0gKG1pbmltdW1CYXJNaW51c09uZSAhPT0gbnVsbCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKG1pbmltdW1CYXJNaW51c09uZSwgdmFsdWUpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgcmV0dXJuIG1pbmltdW1CYXJNaW51c09uZTtcclxuICAgICAgICB9LCBudWxsKTtcclxuXHJcbiAgcmV0dXJuIG1pbmltdW1CYXJNaW51c09uZTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBUb2tlbnMgPSByZXF1aXJlKCcuLi90b2tlbnMnKSxcclxuICAgICAgUmVndWxhckV4cHJlc3Npb24gPSByZXF1aXJlKCcuLi90b2tlbi9zaWduaWZpY2FudC9yZWd1bGFyRXhwcmVzc2lvbicpO1xyXG5cclxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKSB7IFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIFJlZ3VsYXJFeHByZXNzaW9uKTsgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlZ3VsYXJFeHByZXNzaW9ucztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIHJ1bGVzKSB7XHJcbiAgICBjb25zdCB0b2tlbnMgPSB0b2tlbnNPckNvbnRlbnRzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIHRva2VuT3JSZW1haW5pbmdDb250ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW5PclJlbWFpbmluZ0NvbnRlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHRva2VuT3JSZW1haW5pbmdDb250ZW50LCAgLy8vXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwdGggPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgcnVsZXMsIGRlcHRoKTtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgdG9rZW5zID0gdG9rZW5zLmNvbmNhdChzaWduaWZpY2FudFRva2Vucyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgbm9uU2lnbmlmaWNhbnRUb2tlbiA9IHRva2VuT3JSZW1haW5pbmdDb250ZW50OyAgLy8vXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgdG9rZW5zLnB1c2gobm9uU2lnbmlmaWNhbnRUb2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnM7XHJcbiAgICAgICAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbnM7XHJcblxyXG5mdW5jdGlvbiBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBydWxlcywgZGVwdGgpIHtcclxuICBsZXQgc2lnbmlmaWNhbnRUb2tlbnMgPSBbXTtcclxuXHJcbiAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICBjb25zdCBydWxlID0gcnVsZXMuZ2V0UnVsZShkZXB0aCk7XHJcblxyXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgbmV4dERlcHRoID0gZGVwdGggKyAxLFxyXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gcnVsZS5zaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPT09IC0xKSB7XHJcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBydWxlcywgbmV4dERlcHRoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gcnVsZS5zaWduaWZpY2FudFRva2VuRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpLFxyXG4gICAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5MZW5ndGggPSBzaWduaWZpY2FudFRva2VuLmdldExlbmd0aCgpLFxyXG4gICAgICAgICAgICAgIGxlZnQgPSBzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50LCAgLy8vXHJcbiAgICAgICAgICAgICAgcmlnaHQgPSBzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ICsgc2lnbmlmaWNhbnRUb2tlbkxlbmd0aCwgIC8vL1xyXG4gICAgICAgICAgICAgIGxlZnRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgbGVmdCksXHJcbiAgICAgICAgICAgICAgcmlnaHRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcocmlnaHQpLFxyXG4gICAgICAgICAgICAgIGxlZnRTaWduaWZpY2FudFRva2VucyA9IHNpZ25pZmljYW50VG9rZW5zRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGxlZnRDb250ZW50LCBsaW5lLCBydWxlcywgbmV4dERlcHRoKSxcclxuICAgICAgICAgICAgICByaWdodFNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudEFuZExpbmUocmlnaHRDb250ZW50LCBsaW5lLCBydWxlcywgZGVwdGgpO1xyXG5cclxuICAgICAgICBzaWduaWZpY2FudFRva2VucyA9IFtdLmNvbmNhdChsZWZ0U2lnbmlmaWNhbnRUb2tlbnMpLmNvbmNhdChzaWduaWZpY2FudFRva2VuKS5jb25jYXQocmlnaHRTaWduaWZpY2FudFRva2Vucyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gcnVsZSB0byBwYXJzZSB0aGUgY29udGVudCAnJHtjb250ZW50fScuYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbnM7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgVG9rZW5zID0gcmVxdWlyZSgnLi4vdG9rZW5zJyksXHJcbiAgICAgIFN0cmluZ0xpdGVyYWxUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ0xpdGVyYWwnKTtcclxuXHJcbmNsYXNzIFN0cmluZ0xpdGVyYWxUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpIHsgVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgU3RyaW5nTGl0ZXJhbFRva2VuKTsgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZ0xpdGVyYWxUb2tlbnM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFRva2VucyA9IHJlcXVpcmUoJy4uL3Rva2VucycpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbi9zaWduaWZpY2FudC93aGl0ZXNwYWNlJyk7XHJcblxyXG5jbGFzcyBXaGl0ZXNwYWNlVG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKSB7IFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIFdoaXRlc3BhY2VUb2tlbik7IH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBXaGl0ZXNwYWNlVG9rZW5zO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBlYXN5bGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgeyBUZXh0YXJlYSB9ID0gZWFzeSxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50LCBWZXJ0aWNhbFNwbGl0dGVyIH0gPSBlYXN5bGF5b3V0O1xuXG5jb25zdCB2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IgPSAnI3ZlcnRpY2FsU3BsaXR0ZXInLFxuICAgICAgc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IgPSAnI3NpemVhYmxlRWxlbWVudCcsXG4gICAgICBlbnRyaWVzVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSNlbnRyaWVzJyxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI2NvbnRlbnQnLFxuICAgICAgdG9rZW5zVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSN0b2tlbnMnLFxuICAgICAgc2l6ZWFibGVFbGVtZW50ID0gbmV3IFNpemVhYmxlRWxlbWVudChzaXplYWJsZUVsZW1lbnRTZWxlY3RvciksXG4gICAgICBlbnRyaWVzVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoZW50cmllc1RleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgY29udGVudFRleHRhcmVhID0gbmV3IFRleHRhcmVhKGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHRva2Vuc1RleHRhcmVhID0gbmV3IFRleHRhcmVhKHRva2Vuc1RleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgYmVmb3JlU2l6ZWFibGVFbGVtZW50ID0gZmFsc2UsXG4gICAgICBhZnRlclNpemVhYmxlRWxlbWVudCA9IHRydWU7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCk7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgcnVuKGVudHJpZXMsIExleGVyKSB7XG4gICAgY29uc3QgZW50cmllc1RleHRBcmVhVmFsdWUgPSBKU09OLnN0cmluZ2lmeShlbnRyaWVzLCBudWxsLCAnICAnKTtcblxuICAgIGVudHJpZXNUZXh0YXJlYS5zZXRWYWx1ZShlbnRyaWVzVGV4dEFyZWFWYWx1ZSk7XG5cbiAgICBlbnRyaWVzVGV4dGFyZWEub24oJ2tleXVwJywgZnVuY3Rpb24oKSB7XG4gICAgICBFeGFtcGxlLnVwZGF0ZVRva2VucyhMZXhlcik7IFxuICAgIH0pO1xuXG4gICAgY29udGVudFRleHRhcmVhLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgRXhhbXBsZS51cGRhdGVUb2tlbnMoTGV4ZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVRva2VucyhMZXhlcikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBlbnRyaWVzVGV4dGFyZWFWYWx1ZSA9IGVudHJpZXNUZXh0YXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICAgICAgY29udGVudFRleHRhcmVhVmFsdWUgPSBjb250ZW50VGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgIGVudHJpZXMgPSBKU09OLnBhcnNlKGVudHJpZXNUZXh0YXJlYVZhbHVlKSxcbiAgICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudFRleHRhcmVhVmFsdWUsICAvLy9cbiAgICAgICAgICAgIGxpbmVzID0gbGV4ZXIubGluZXNGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgIGh0bWxzID0gbGluZXMucmVkdWNlKGZ1bmN0aW9uKGh0bWxzLCBsaW5lLCBpbmRleCkge1xuICAgICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IG51bGwsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgbGluZUhUTUwgPSBsaW5lLmFzSFRNTChmaWxlUGF0aCksXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXIgPSBpbmRleCArIDEsXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgPSBgJHtsaW5lTnVtYmVyfTogJHtsaW5lSFRNTH1gO1xuICBcbiAgICAgICAgICAgICAgaHRtbHMgKz0gaHRtbDtcbiAgXG4gICAgICAgICAgICAgIHJldHVybiBodG1scztcbiAgICAgICAgICAgIH0sICcnKSxcbiAgICAgICAgICAgIHRva2Vuc1RleHRhcmVhSFRNTCA9IGh0bWxzOyAgLy8vXG5cbiAgICAgIHRva2Vuc1RleHRhcmVhLmh0bWwodG9rZW5zVGV4dGFyZWFIVE1MKTtcblxuICAgICAgY29udGVudFRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb250ZW50VGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cbiAgICAgIEV4YW1wbGUuY2xlYXJUb2tlbnMoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY2xlYXJUb2tlbnMoKSB7XG4gICAgY29uc3QgdG9rZW5zVGV4dGFyZWFIVE1MID0gJyc7XG5cbiAgICB0b2tlbnNUZXh0YXJlYS5odG1sKHRva2Vuc1RleHRhcmVhSFRNTCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQk5GRXhhbXBsZTogcmVxdWlyZSgnLi9leGFtcGxlcy9ibmYnKSxcbiAgQmFzaWNFeGFtcGxlOiByZXF1aXJlKCcuL2V4YW1wbGVzL2Jhc2ljJyksXG4gIEZsb3JlbmNlRXhhbXBsZTogcmVxdWlyZSgnLi9leGFtcGxlcy9mbG9yZW5jZScpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgQmFzaWNMZXhlciA9IHJlcXVpcmUoJy4uL2Jhc2ljL2xleGVyJyk7XG5cbmNsYXNzIEJhc2ljRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgY29uc3QgZW50cmllcyA9IEJhc2ljTGV4ZXIuZW50cmllcyxcbiAgICAgICAgICBMZXhlciA9IEJhc2ljTGV4ZXI7XG5cbiAgICBFeGFtcGxlLnJ1bihlbnRyaWVzLCBMZXhlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0V4YW1wbGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgICBCTkZMZXhlciA9IHJlcXVpcmUoJy4uL2JuZi9sZXhlcicpO1xuXG5jbGFzcyBCTkZFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gQk5GTGV4ZXIuZW50cmllcyxcbiAgICAgICAgICBMZXhlciA9IEJORkxleGVyO1xuXG4gICAgRXhhbXBsZS5ydW4oZW50cmllcywgTGV4ZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GRXhhbXBsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRXhhbXBsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGUnKSxcbiAgICAgIEZsb3JlbmNlTGV4ZXIgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9sZXhlcicpO1xuXG5jbGFzcyBGbG9yZW5jZUV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IGVudHJpZXMgPSBGbG9yZW5jZUxleGVyLmVudHJpZXMsXG4gICAgICAgICAgTGV4ZXIgPSBGbG9yZW5jZUxleGVyO1xuXG4gICAgRXhhbXBsZS5ydW4oZW50cmllcywgTGV4ZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VFeGFtcGxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuXHJcbiAgeyBcInNwZWNpYWxcIiAgICA6IFwiLHw7fOKKonw9fDo6fDp8XFxcXFt8XFxcXF18XFxcXHt8XFxcXH18XFxcXCh8XFxcXCl8XFxcXC5cXFxcLlxcXFwufFxcXFwuXFxcXC5cIiB9LFxyXG5cclxuICB7IFwia2V5d29yZFwiICAgIDogXCJeKD86UnVsZXxBeGlvbXxUaGVvcmVtfExlbW1hfE1ldGFsZW1tYXxNZXRhdGhlb3JlbXxQcmVtaXNlc3xQcmVtaXNlfENvbmNsdXNpb258UHJvb2Z8VGhlcmVmb3JlfFN1cHBvc2V8VGhlbnxIZW5jZXxUeXBlc3xUeXBlfFZhcmlhYmxlc3xWYXJpYWJsZXxDb250ZXh0c3xDb250ZXh0fENvbnN0cnVjdG9yc3xDb25zdHJ1Y3RvcnxEZXBlbmRlbnRUeXBlc3xEZXBlbmRlbnRUeXBlfFF1YWxpZmllZE1ldGF2YXJpYWJsZXN8UXVhbGlmaWVkTWV0YXZhcmlhYmxlfE1ldGF2YXJpYWJsZXN8TWV0YXZhcmlhYmxlfEFiYnJldmlhdGlvbnN8QWJicmV2aWF0aW9ufE9iamVjdHxEZWZpbml0aW9ufGZvcnxsZXR8ZnJvbXxieSkkXCIgfSxcclxuXHJcbiAgeyBcInVuYXNzaWduZWRcIiA6IFwiXi4qJFwiIH1cclxuXHJcbl07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGVudHJpZXM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgRmxvcmVuY2VMaW5lID0gcmVxdWlyZSgnLi4vZmxvcmVuY2UvbGluZScpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpO1xyXG5cclxuY2xhc3MgRmxvcmVuY2VMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBzdGF0aWMgZnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNMZXhpY2FsUGF0dGVybihjb21iaW5lZEN1c3RvbUdyYW1tYXJzTGV4aWNhbFBhdHRlcm4pIHtcclxuICAgIGNvbnN0IGN1c3RvbSA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNMZXhpY2FsUGF0dGVybiwgLy8vXHJcbiAgICAgICAgICBjdXN0b21HcmFtbWFyRW50cnkgPSB7XHJcbiAgICAgICAgICAgIGN1c3RvbTogY3VzdG9tXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY3VzdG9tR3JhbW1hclJ1bGUgPSAgQ29tbW9uTGV4ZXIucnVsZUZyb21FbnRyeShjdXN0b21HcmFtbWFyRW50cnkpLFxyXG4gICAgICAgICAgcnVsZXMgPSBDb21tb25MZXhlci5ydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpO1xyXG5cclxuICAgIHJ1bGVzLmFkZFJ1bGUoY3VzdG9tR3JhbW1hclJ1bGUpO1xyXG5cclxuICAgIGNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBuZXcgRmxvcmVuY2VMZXhlcihydWxlcywgRmxvcmVuY2VMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IENvbW1vbkxleGVyLnJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBmbG9yZW5jZUxleGVyID0gbmV3IEZsb3JlbmNlTGV4ZXIocnVsZXMsIEZsb3JlbmNlTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oRmxvcmVuY2VMZXhlciwge1xyXG4gIGVudHJpZXM6IGVudHJpZXNcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlTGV4ZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IENvbW1vbkxpbmUgPSByZXF1aXJlKCcuLi9jb21tb24vbGluZScpLFxyXG4gICAgICBDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy9jb21tZW50JyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3doaXRlc3BhY2UnKSxcclxuICAgICAgU3RyaW5nTGl0ZXJhbFRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvc3RyaW5nTGl0ZXJhbCcpLFxyXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3JlZ3VsYXJFeHByZXNzaW9uJyksXHJcbiAgICAgIEVuZE9mTGluZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2VuZE9mTGluZScpO1xyXG5cclxuY2xhc3MgRmxvcmVuY2VMaW5lIGV4dGVuZHMgQ29tbW9uTGluZSB7XHJcbiAgaW5pdGlhbGlzZShDb21tZW50VG9rZW5zLCBSZWd1bGFyRXhwcmVzc2lvblRva2VucywgU3RyaW5nTGl0ZXJhbFRva2VucywgV2hpdGVzcGFjZVRva2Vucykge1xyXG4gICAgc3VwZXIuaW5pdGlhbGlzZShDb21tZW50VG9rZW5zLCBSZWd1bGFyRXhwcmVzc2lvblRva2VucywgU3RyaW5nTGl0ZXJhbFRva2VucywgV2hpdGVzcGFjZVRva2Vucyk7XHJcblxyXG4gICAgY29uc3QgZmxvcmVuY2VMaW5lID0gdGhpcywgIC8vL1xyXG4gICAgICAgICAgbGluZSA9IGZsb3JlbmNlTGluZSwgIC8vL1xyXG4gICAgICAgICAgdG9rZW5zID0gbGluZS5nZXRUb2tlbnMoKTtcclxuXHJcbiAgICBjb25zdCBlbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLmZyb21MaW5lKGxpbmUpO1xyXG5cclxuICAgIHRva2Vucy5wdXNoKGVuZE9mTGluZVRva2VuKTtcclxuXHJcbiAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Db250ZW50UnVsZXNBbmRDb25maWd1cmF0aW9uKGNvbnRlbnQsIHJ1bGVzLCBjb25maWd1cmF0aW9uKSB7XHJcbiAgICBjb25zdCBmbG9yZW5jZUxpbmUgPSBzdXBlci5mcm9tQ29udGVudFJ1bGVzQW5kQ29uZmlndXJhdGlvbihGbG9yZW5jZUxpbmUsIGNvbnRlbnQsIHJ1bGVzLCBjb25maWd1cmF0aW9uKTtcclxuXHJcbiAgICBmbG9yZW5jZUxpbmUuaW5pdGlhbGlzZShDb21tZW50VG9rZW5zLCBSZWd1bGFyRXhwcmVzc2lvblRva2VucywgU3RyaW5nTGl0ZXJhbFRva2VucywgV2hpdGVzcGFjZVRva2Vucyk7XHJcblxyXG4gICAgcmV0dXJuIGZsb3JlbmNlTGluZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMaW5lO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSkgeyBcclxuXHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ29udGVudChjb250ZW50KSB7XG4gIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoLyYvLCcmYW1wOycpLnJlcGxhY2UoLzwvLCAnJmx0OycpLnJlcGxhY2UoLz4vLCAnJmd0OycpO1xuXG4gIHJldHVybiBzYW5pdGlzZWRDb250ZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2FuaXRpc2VDb250ZW50OiBzYW5pdGlzZUNvbnRlbnRcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHRva2Vuc0Zyb21MaW5lcyhsaW5lcykge1xuICBjb25zdCB0b2tlbnMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCBsaW5lKSB7XG4gICAgY29uc3QgbGluZVRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XG5cbiAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KGxpbmVUb2tlbnMpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfSwgW10pO1xuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0b2tlbnNGcm9tTGluZXM6IHRva2Vuc0Zyb21MaW5lc1xufTtcbiIsIiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9wdGlvbnM6IHJlcXVpcmUoJy4vbGliL29wdGlvbnMnKSxcbiAgU2l6ZWFibGVFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9zaXplYWJsZUVsZW1lbnQnKSxcbiAgVmVydGljYWxTcGxpdHRlcjogcmVxdWlyZSgnLi9saWIvc3BsaXR0ZXIvdmVydGljYWwnKSxcbiAgSG9yaXpvbnRhbFNwbGl0dGVyOiByZXF1aXJlKCcuL2xpYi9zcGxpdHRlci9ob3Jpem9udGFsJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgQm9keSB9ID0gZWFzeTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbmxldCBwcmV2aW91c0N1cnNvcjsgIC8vL1xuXG5jbGFzcyBjdXJzb3Ige1xuICBzdGF0aWMgY29sdW1uUmVzaXplKCkge1xuICAgIGNvbnN0IGN1cnJlbnRDdXJzb3IgPSB0aGlzLmdldEN1cnJlbnRDdXJzb3IoKTtcblxuICAgIGlmIChjdXJyZW50Q3Vyc29yICE9PSAnY29sLXJlc2l6ZScpIHtcbiAgICAgIHByZXZpb3VzQ3Vyc29yID0gY3VycmVudEN1cnNvcjtcblxuICAgICAgdGhpcy5zZXRDdXJzb3IoJ2NvbC1yZXNpemUnKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcm93UmVzaXplKCkge1xuICAgIGNvbnN0IGN1cnJlbnRDdXJzb3IgPSB0aGlzLmdldEN1cnJlbnRDdXJzb3IoKTtcblxuICAgIGlmIChjdXJyZW50Q3Vyc29yICE9PSAncm93LXJlc2l6ZScpIHtcbiAgICAgIHByZXZpb3VzQ3Vyc29yID0gY3VycmVudEN1cnNvcjtcblxuICAgICAgdGhpcy5zZXRDdXJzb3IoJ3Jvdy1yZXNpemUnKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcmVzZXQoKSB7XG4gICAgdGhpcy5zZXRDdXJzb3IocHJldmlvdXNDdXJzb3IpOyAvLy9cbiAgfVxuXG4gIHN0YXRpYyBnZXRDdXJyZW50Q3Vyc29yKCkge1xuICAgIGNvbnN0IGN1cnJlbnRDdXJzb3IgPSBib2R5LmNzcygnY3Vyc29yJyk7ICAvLy9cblxuICAgIHJldHVybiBjdXJyZW50Q3Vyc29yIHx8ICdhdXRvJzsgLy8vXG4gIH1cblxuICBzdGF0aWMgc2V0Q3Vyc29yKGN1cnNvcikge1xuICAgIGNvbnN0IGNzcyA9IHtcbiAgICAgIGN1cnNvcjogY3Vyc29yXG4gICAgfTtcblxuICAgIGJvZHkuY3NzKGNzcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjdXJzb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkc6ICdFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBvcHRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIFNpemVhYmxlRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTaXplYWJsZUVsZW1lbnQsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oU2l6ZWFibGVFbGVtZW50LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3NpemVhYmxlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaXplYWJsZUVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IG9wdGlvbnMgPSByZXF1aXJlKCcuL29wdGlvbnMnKTtcblxuY29uc3QgRVNDQVBFX0tFWUNPREUgPSAyNztcblxuY29uc3QgeyBFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HIH0gPSBvcHRpb25zLFxuICAgICAgeyB3aW5kb3csIEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIFNwbGl0dGVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBzdGFydERyYWdnaW5nSGFuZGxlciAgPSBmdW5jdGlvbigpIHt9LCBzdG9wRHJhZ2dpbmdIYW5kbGVyID0gZnVuY3Rpb24oKSB7fSwgZHJhZ0hhbmRsZXIgPSBmdW5jdGlvbigpIHt9LCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLmJlZm9yZVNpemVhYmxlRWxlbWVudCA9IGJlZm9yZVNpemVhYmxlRWxlbWVudDtcbiAgICB0aGlzLmFmdGVyU2l6ZWFibGVFbGVtZW50ID0gYWZ0ZXJTaXplYWJsZUVsZW1lbnQ7XG5cbiAgICB0aGlzLnN0YXJ0RHJhZ2dpbmdIYW5kbGVyID0gc3RhcnREcmFnZ2luZ0hhbmRsZXI7XG4gICAgdGhpcy5zdG9wRHJhZ2dpbmdIYW5kbGVyID0gc3RvcERyYWdnaW5nSGFuZGxlcjtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgaXNCZWZvcmVTaXplYWJsZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmVmb3JlU2l6ZWFibGVFbGVtZW50O1xuICB9XG5cbiAgaXNBZnRlclNpemVhYmxlRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hZnRlclNpemVhYmxlRWxlbWVudDtcbiAgfVxuXG4gIGdldERyYWdIYW5kbGVyKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdIYW5kbGVyO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG5cbiAgaXNEcmFnZ2luZygpIHtcbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaGFzQ2xhc3MoJ2RyYWdnaW5nJyk7XG4gICAgXG4gICAgcmV0dXJuIGRyYWdnaW5nO1xuICB9XG4gIFxuICBnZXREaXJlY3Rpb24oKSB7XG4gICAgbGV0IGRpcmVjdGlvbjtcblxuICAgIGlmICh0aGlzLmJlZm9yZVNpemVhYmxlRWxlbWVudCkge1xuICAgICAgZGlyZWN0aW9uID0gKzE7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWZ0ZXJTaXplYWJsZUVsZW1lbnQpIHtcbiAgICAgIGRpcmVjdGlvbiA9IC0xO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rpb247XG4gIH1cblxuICBnZXRTaXplYWJsZUVsZW1lbnQoKSB7XG4gICAgbGV0IHNpemVhYmxlRWxlbWVudDtcblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCk7XG5cbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgY2FzZSAtMTpcbiAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCk7IC8vL1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSArMTpcbiAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXROZXh0U2libGluZ0VsZW1lbnQoKTsgLy8vXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBzaXplYWJsZUVsZW1lbnQ7XG4gIH1cblxuICBpc09wdGlvblByZXNlbnQob3B0aW9uKSB7XG4gICAgY29uc3Qgb3B0aW9uUHJlc2VudCA9ICh0aGlzLm9wdGlvbnNbb3B0aW9uXSA9PT0gdHJ1ZSk7IC8vL1xuXG4gICAgcmV0dXJuIG9wdGlvblByZXNlbnQ7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgc2V0T3B0aW9uKG9wdGlvbikge1xuICAgIHRoaXMub3B0aW9uc1tvcHRpb25dID0gdHJ1ZTtcbiAgfVxuXG4gIHVuc2V0T3B0aW9uKG9wdGlvbikge1xuICAgIGRlbGV0ZSh0aGlzLm9wdGlvbnNbb3B0aW9uXSk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgfVxuXG4gIHN0YXJ0RHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQgPSB0aGlzLmlzT3B0aW9uUHJlc2VudChFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HKTtcblxuICAgIGlmIChlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCkge1xuICAgICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZENsYXNzKCdkcmFnZ2luZycpO1xuICAgIFxuICAgIHRoaXMuc3RhcnREcmFnZ2luZ0hhbmRsZXIoKTtcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICBjb25zdCBlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCA9IHRoaXMuaXNPcHRpb25QcmVzZW50KEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcpO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50KSB7XG4gICAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUNsYXNzKCdkcmFnZ2luZycpO1xuXG4gICAgdGhpcy5zdG9wRHJhZ2dpbmdIYW5kbGVyKCk7XG4gIH1cblxuICBvbkRyYWcoZHJhZ0hhbmRsZXIpIHtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlcihrZXlDb2RlKSB7XG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXNlKGRpc2FibGVkKSB7XG4gICAgKGRpc2FibGVkID09PSB0cnVlKSA/IC8vL1xuICAgICAgdGhpcy5kaXNhYmxlKCkgOlxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xuXG4gICAgd2luZG93Lm9uKCdtb3VzZXVwIGJsdXInLCB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKSk7ICAvLy9cblxuICAgIHdpbmRvdy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMub25Nb3VzZURvd24odGhpcy5tb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5vbk1vdXNlT3Zlcih0aGlzLm1vdXNlT3Zlci5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VPdXQodGhpcy5tb3VzZU91dC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgb25TdGFydERyYWdnaW5nLCBvblN0b3BEcmFnZ2luZywgb25EcmFnLCBvcHRpb25zLCBkaXNhYmxlZCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBzdGFydERyYWdnaW5nSGFuZGxlciA9IG9uU3RhcnREcmFnZ2luZywgLy8vXG4gICAgICAgICAgc3RvcERyYWdnaW5nSGFuZGxlciA9IG9uU3RvcERyYWdnaW5nLCAvLy9cbiAgICAgICAgICBkcmFnSGFuZGxlciA9IG9uRHJhZywgLy8vXG4gICAgICAgICAgc3BsaXR0ZXIgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBzdGFydERyYWdnaW5nSGFuZGxlciwgc3RvcERyYWdnaW5nSGFuZGxlciwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpO1xuXG4gICAgc3BsaXR0ZXIuaW5pdGlhbGlzZShkaXNhYmxlZCk7XG5cbiAgICByZXR1cm4gc3BsaXR0ZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTcGxpdHRlciwge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnYmVmb3JlU2l6ZWFibGVFbGVtZW50JyxcbiAgICAnYWZ0ZXJTaXplYWJsZUVsZW1lbnQnLFxuICAgICdvblN0YXJ0RHJhZ2dpbmcnLFxuICAgICdvblN0b3BEcmFnZ2luZycsXG4gICAgJ29uRHJhZycsXG4gICAgJ29wdGlvbnMnLFxuICAgICdkaXNhYmxlZCdcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3BsaXR0ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN1cnNvciA9IHJlcXVpcmUoJy4uL2N1cnNvcicpLFxuICAgICAgU3BsaXR0ZXIgPSByZXF1aXJlKCcuLi9zcGxpdHRlcicpO1xuXG5jbGFzcyBIb3Jpem9udGFsU3BsaXR0ZXIgZXh0ZW5kcyBTcGxpdHRlciB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBzdGFydERyYWdnaW5nSGFuZGxlciwgc3RvcERyYWdnaW5nSGFuZGxlciwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihzZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgc3RhcnREcmFnZ2luZ0hhbmRsZXIsIHN0b3BEcmFnZ2luZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBvcHRpb25zKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBtb3VzZVVwKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cblxuICAgICAgY3Vyc29yLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgICBkcmFnSGFuZGxlciA9IHRoaXMuZ2V0RHJhZ0hhbmRsZXIoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2l6ZWFibGVFbGVtZW50KCksXG4gICAgICAgICAgICBwcmV2aW91c01vdXNlVG9wID0gdGhpcy5nZXRQcmV2aW91c01vdXNlVG9wKCksXG4gICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCA9IHRoaXMuZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQoKSxcbiAgICAgICAgICAgIHJlbGF0aXZlTW91c2VUb3AgPSBtb3VzZVRvcCAtIHByZXZpb3VzTW91c2VUb3A7XG5cbiAgICAgICAgbGV0IHNpemVhYmxlRWxlbWVudEhlaWdodCA9IHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0IC0gZGlyZWN0aW9uICogcmVsYXRpdmVNb3VzZVRvcDtcblxuICAgICAgICBjb25zdCBoZWlnaHQgPSBgJHtzaXplYWJsZUVsZW1lbnRIZWlnaHR9cHhgO1xuXG4gICAgICAgIHNpemVhYmxlRWxlbWVudC5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgICAgICBzaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBzaXplYWJsZUVsZW1lbnQuZ2V0SGVpZ2h0KCk7ICAvLy9cblxuICAgICAgICBkcmFnSGFuZGxlcihzaXplYWJsZUVsZW1lbnRIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzTW91c2VUb3AgPSBtb3VzZVRvcCwgIC8vL1xuICAgICAgICAgICAgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2l6ZWFibGVFbGVtZW50KCksXG4gICAgICAgICAgICBzaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBzaXplYWJsZUVsZW1lbnQuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCA9IHNpemVhYmxlRWxlbWVudEhlaWdodDsgIC8vLyBcblxuICAgICAgdGhpcy5zZXRQcmV2aW91c01vdXNlVG9wKHByZXZpb3VzTW91c2VUb3ApO1xuXG4gICAgICB0aGlzLnNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KTtcblxuICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcoKTtcbiAgICAgIH1cblxuICAgICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3ZlcigpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0KCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBnZXRQcmV2aW91c01vdXNlVG9wKCkgeyByZXR1cm4gdGhpcy5mcm9tU3RhdGUoJ3ByZXZpb3VzTW91c2VUb3AnKTsgfVxuXG4gIGdldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5mcm9tU3RhdGUoJ3ByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0Jyk7IH1cblxuICBzZXRQcmV2aW91c01vdXNlVG9wKHByZXZpb3VzTW91c2VUb3ApIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VUb3A6IHByZXZpb3VzTW91c2VUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodDogcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c01vdXNlVG9wID0gbnVsbCxcbiAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VUb3A6IHByZXZpb3VzTW91c2VUb3AsXG4gICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodDogcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBTcGxpdHRlci5mcm9tUHJvcGVydGllcyhIb3Jpem9udGFsU3BsaXR0ZXIsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oSG9yaXpvbnRhbFNwbGl0dGVyLCB7XG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnaG9yaXpvbnRhbCBzcGxpdHRlcidcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSG9yaXpvbnRhbFNwbGl0dGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdXJzb3IgPSByZXF1aXJlKCcuLi9jdXJzb3InKSxcbiAgICAgIFNwbGl0dGVyID0gcmVxdWlyZSgnLi4vc3BsaXR0ZXInKTtcblxuY2xhc3MgVmVydGljYWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIHN0YXJ0RHJhZ2dpbmdIYW5kbGVyLCBzdG9wRHJhZ2dpbmdIYW5kbGVyLCBkcmFnSGFuZGxlciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBzdGFydERyYWdnaW5nSGFuZGxlciwgc3RvcERyYWdnaW5nSGFuZGxlciwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpO1xuICAgIFxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBtb3VzZVVwKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cblxuICAgICAgY3Vyc29yLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgICAgIGRyYWdIYW5kbGVyID0gdGhpcy5nZXREcmFnSGFuZGxlcigpLFxuICAgICAgICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpLFxuICAgICAgICAgICAgICBwcmV2aW91c01vdXNlTGVmdCA9IHRoaXMuZ2V0UHJldmlvdXNNb3VzZUxlZnQoKSxcbiAgICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCgpLFxuICAgICAgICAgICAgICByZWxhdGl2ZU1vdXNlTGVmdCA9IG1vdXNlTGVmdCAtIHByZXZpb3VzTW91c2VMZWZ0O1xuICAgICAgICBcbiAgICAgICAgbGV0IHNpemVhYmxlRWxlbWVudFdpZHRoID0gcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCAtIGRpcmVjdGlvbiAqIHJlbGF0aXZlTW91c2VMZWZ0O1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgd2lkdGggPSBgJHtzaXplYWJsZUVsZW1lbnRXaWR0aH1weGA7XG5cbiAgICAgICAgc2l6ZWFibGVFbGVtZW50LnNldFdpZHRoKHdpZHRoKTtcblxuICAgICAgICBzaXplYWJsZUVsZW1lbnRXaWR0aCA9IHNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpOyAgLy8vXG5cbiAgICAgICAgZHJhZ0hhbmRsZXIoc2l6ZWFibGVFbGVtZW50V2lkdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzTW91c2VMZWZ0ID0gbW91c2VMZWZ0LCAgLy8vXG4gICAgICAgICAgICBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpLFxuICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudFdpZHRoID0gc2l6ZWFibGVFbGVtZW50LmdldFdpZHRoKCksXG4gICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoID0gc2l6ZWFibGVFbGVtZW50V2lkdGg7ICAvLy8gXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNNb3VzZUxlZnQocHJldmlvdXNNb3VzZUxlZnQpO1xuICAgICAgXG4gICAgICB0aGlzLnNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgocHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCk7XG5cbiAgICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU92ZXIoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU91dCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJlc2V0KCk7XG4gICAgfVxuICB9XG4gIFxuICBnZXRQcmV2aW91c01vdXNlTGVmdCgpIHsgcmV0dXJuIHRoaXMuZnJvbVN0YXRlKCdwcmV2aW91c01vdXNlTGVmdCcpOyB9XG5cbiAgZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZnJvbVN0YXRlKCdwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoJyk7IH1cbiAgXG4gIHNldFByZXZpb3VzTW91c2VMZWZ0KHByZXZpb3VzTW91c2VMZWZ0KSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c01vdXNlTGVmdDogcHJldmlvdXNNb3VzZUxlZnRcbiAgICB9KTtcbiAgfVxuICBcbiAgc2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aChwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoOiBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNNb3VzZUxlZnQgPSBudWxsLFxuICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGggPSBudWxsO1xuICAgIFxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlvdXNNb3VzZUxlZnQ6IHByZXZpb3VzTW91c2VMZWZ0LFxuICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aDogcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aFxuICAgIH0pOyAgICBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBTcGxpdHRlci5mcm9tUHJvcGVydGllcyhWZXJ0aWNhbFNwbGl0dGVyLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFZlcnRpY2FsU3BsaXR0ZXIsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd2ZXJ0aWNhbCBzcGxpdHRlcidcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxTcGxpdHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHdpbmRvdzogcmVxdWlyZSgnLi9saWIvd2luZG93JyksXG4gIGRvY3VtZW50OiByZXF1aXJlKCcuL2xpYi9kb2N1bWVudCcpLFxuICBEaXY6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvZGl2JyksXG4gIFNwYW46IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvc3BhbicpLFxuICBCb2R5OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2JvZHknKSxcbiAgTGluazogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9saW5rJyksXG4gIFNlbGVjdDogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9zZWxlY3QnKSxcbiAgQnV0dG9uOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2J1dHRvbicpLFxuICBDaGVja2JveDogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9jaGVja2JveCcpLFxuICBFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50JyksXG4gIFRleHRFbGVtZW50OiByZXF1aXJlKCcuL2xpYi90ZXh0RWxlbWVudCcpLFxuICBJbnB1dDogcmVxdWlyZSgnLi9saWIvaW5wdXRFbGVtZW50L2lucHV0JyksXG4gIFRleHRhcmVhOiByZXF1aXJlKCcuL2xpYi9pbnB1dEVsZW1lbnQvdGV4dGFyZWEnKSxcbiAgSW5wdXRFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9pbnB1dEVsZW1lbnQnKSxcbiAgQm91bmRzOiByZXF1aXJlKCcuL2xpYi9taXNjL2JvdW5kcycpLFxuICBPZmZzZXQ6IHJlcXVpcmUoJy4vbGliL21pc2Mvb2Zmc2V0JyksXG4gIFJlYWN0OiByZXF1aXJlKCcuL2xpYi9yZWFjdCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyksXG4gICAgICBrZXlNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4va2V5Jyk7XG5cbmNsYXNzIERvY3VtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQ7IC8vL1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBldmVudE1peGluKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBjbGlja01peGluKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGluKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IERvY3VtZW50KCk7ICAvLy9cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IE9mZnNldCA9IHJlcXVpcmUoJy4vbWlzYy9vZmZzZXQnKSxcbiAgICAgIEJvdW5kcyA9IHJlcXVpcmUoJy4vbWlzYy9ib3VuZHMnKSxcbiAgICAgIGpzeE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9qc3gnKSxcbiAgICAgIGV2ZW50TWl4aW4gPSByZXF1aXJlKCcuL21peGluL2V2ZW50JyksXG4gICAgICBjbGlja01peGluID0gcmVxdWlyZSgnLi9taXhpbi9jbGljaycpLFxuICAgICAgc2Nyb2xsTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3Njcm9sbCcpLFxuICAgICAgcmVzaXplTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3Jlc2l6ZScpLFxuICAgICAgbW91c2VNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vbW91c2UnKSxcbiAgICAgIGtleU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9rZXknKSxcbiAgICAgIGRvbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2RvbScpLFxuICAgICAgb2JqZWN0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvb2JqZWN0Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgY29tYmluZSB9ID0gb2JqZWN0VXRpbGl0aWVzLFxuICAgICAgeyBmaXJzdCwgYXVnbWVudCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IsIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3IsIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzLCBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IsIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIH0gPSBkb21VdGlsaXRpZXM7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpczsgLy8vXG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cbiAgXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IHdpZHRoID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5zdHlsZSgnd2lkdGgnLCB3aWR0aCk7IH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCBoZWlnaHQgPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy5zdHlsZSgnaGVpZ2h0JywgaGVpZ2h0KTsgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSAnJzsgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcHJlcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBmaXJzdENoaWxkRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIGFkZChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSAnYmxvY2snKSB7IHRoaXMuZGlzcGxheShkaXNwbGF5U3R5bGUpOyB9XG5cbiAgaGlkZSgpIHsgdGhpcy5zdHlsZSgnZGlzcGxheScsICdub25lJyk7IH1cblxuICBkaXNwbGF5KGRpc3BsYXkpIHsgdGhpcy5zdHlsZSgnZGlzcGxheScsIGRpc3BsYXkpOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKCdkaXNhYmxlZCcpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7IH1cblxuICBpc0VuYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKSxcbiAgICAgICAgICBlbmFibGVkID0gIWRpc2FibGVkO1xuXG4gICAgcmV0dXJuIGVuYWJsZWQ7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cbiAgXG4gIGlzRGlzcGxheWVkKCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLnN0eWxlKCdkaXNwbGF5JyksXG4gICAgICAgICAgZGlzcGxheWVkID0gKGRpc3BsYXkgIT09ICdub25lJyk7XG4gICAgXG4gICAgcmV0dXJuIGRpc3BsYXllZDtcbiAgfVxuXG4gc3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdO1xuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuICB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGh0bWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDtcblxuICAgICAgaHRtbCA9IGlubmVySFRNTDsgLy8vXG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAoY3NzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICBjc3MgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb21wdXRlZFN0eWxlWzBdLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLnN0eWxlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG4gIFxuICBibHVyKCkgeyB0aGlzLmRvbUVsZW1lbnQuYmx1cigpOyB9XG5cbiAgZm9jdXMoKSB7IHRoaXMuZG9tRWxlbWVudC5mb2N1cygpOyB9XG5cbiAgaGFzRm9jdXMoKSB7XG4gICAgY29uc3QgZm9jdXMgPSAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5kb21FbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGZvY3VzO1xuICB9XG5cbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRlc2NlbmRhbnRET01Ob2RlcyA9IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUpLFxuICAgICAgICAgIGRlc2NlbmRhbnRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihkZXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgICBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkZXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGRlc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihjaGlsZERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBnZXRQYXJlbnRFbGVtZW50KHNlbGVjdG9yID0gJyonKSB7XG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKHBhcmVudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChwYXJlbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnRzID0gW3BhcmVudERPTUVsZW1lbnRdLFxuICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKSxcbiAgICAgICAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpO1xuXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBmaXJzdFBhcmVudEVsZW1lbnQgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIGdldEFzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgYXNjZW5kYW50RE9NRWxlbWVudHMgPSBbXSxcbiAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBsZXQgYXNjZW5kYW50RE9NRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cbiAgICB3aGlsZSAoYXNjZW5kYW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKGFzY2VuZGFudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgYXNjZW5kYW50RE9NRWxlbWVudHMucHVzaChhc2NlbmRhbnRET01FbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgYXNjZW5kYW50RE9NRWxlbWVudCA9IGFzY2VuZGFudERPTUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBhc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGFzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBhc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBsZXQgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50LnByZXZpb3VzU2libGluZzsgIC8vL1xuXG4gICAgaWYgKChwcmV2aW91c1NpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKHByZXZpb3VzU2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIGdldE5leHRTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9ICcqJykge1xuICAgIGxldCBuZXh0U2libGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgbmV4dFNpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50Lm5leHRTaWJsaW5nO1xuXG4gICAgaWYgKChuZXh0U2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IobmV4dFNpYmxpbmdET01Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICAgIG5leHRTaWJsaW5nRWxlbWVudCA9IG5leHRTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0U2libGluZ0VsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoQ2xhc3MsIGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGRlZXAgPSB0cnVlLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQuY2xvbmVOb2RlKGRlZXApO1xuXG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG91dGVyRE9NRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgb3V0ZXJET01FbGVtZW50LmlubmVySFRNTCA9IGh0bWw7ICAvLy9cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBvdXRlckRPTUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IENsYXNzLnRhZ05hbWUsXG4gICAgICAgICAgaHRtbCA9IGA8JHt0YWdOYW1lfSAvPmAsXG4gICAgICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyksXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyk7XG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHJpbmcsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICBodG1sID0gYDwke3RhZ05hbWV9IC8+YCxcbiAgICAgICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChFbGVtZW50LCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30sIC8vL1xuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107IC8vL1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGpzeE1peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzY3JvbGxNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCByZXNpemVNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGluKTtcblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LCB7XG4gIExFRlRfTU9VU0VfQlVUVE9OOiAwLFxuICBSSUdIVF9NT1VTRV9CVVRUT046IDIsXG4gIE1JRERMRV9NT1VTRV9CVVRUT046IDFcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBkZWZhdWx0UHJvcGVydGllcyA9IHt9KSB7XG4gIGNvbWJpbmUoZGVmYXVsdFByb3BlcnRpZXMsIENsYXNzLmRlZmF1bHRQcm9wZXJ0aWVzKTtcblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0UHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzID0gW10pIHtcbiAgYXVnbWVudChpZ25vcmVkUHJvcGVydGllcywgQ2xhc3MuaWdub3JlZFByb3BlcnRpZXMgfHwgW10sIGZ1bmN0aW9uKGlnbm9yZWRQcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaWdub3JlZFByb3BlcnRpZXMuaW5jbHVkZXMoaWdub3JlZFByb3BlcnR5KTtcbiAgfSk7XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBpZ25vcmVkUHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gaWdub3JlZFByb3BlcnRpZXM7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIEJvZHkgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSAnYm9keScpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEJvZHkuY2xvbmUodGhpcyk7IH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCkgeyByZXR1cm4gRWxlbWVudC5jbG9uZShCb2R5LCBlbGVtZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKEJvZHksIGh0bWwpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQm9keSwgZG9tRWxlbWVudCk7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhCb2R5LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKEJvZHksIHtcbiAgdGFnTmFtZTogJ2JvZHknXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2R5O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2xpY2tIYW5kbGVyKSB7IHJldHVybiBCdXR0b24uY2xvbmUodGhpcywgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIG9uQ2xpY2soY2xpY2tIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNsaWNrSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlci5vbkNsaWNrKGNsaWNrSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2xpY2soY2xpY2tIYW5kbGVyLCBvYmplY3QpIHtcbiAgICBzdXBlci5vZmZDbGljayhjbGlja0hhbmRsZXIsIG9iamVjdCk7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmNsb25lKEJ1dHRvbiwgZWxlbWVudCwgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQnV0dG9uLCBodG1sLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChCdXR0b24sIGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjbGlja0hhbmRsZXIgPSBvbkNsaWNrLCAvLy9cbiAgICAgICAgICBidXR0b24gPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEJ1dHRvbiwgcHJvcGVydGllcywgY2xpY2tIYW5kbGVyKTtcbiAgICBcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQnV0dG9uLCB7XG4gIHRhZ05hbWU6ICdidXR0b24nLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNsaWNrJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCdXR0b247XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIoY2xpY2tIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBtb3VzZUJ1dHRvbiA9IGV2ZW50LmJ1dHRvbjtcbiAgXG4gIGNsaWNrSGFuZGxlcihtb3VzZUJ1dHRvbiwgZXZlbnQsIHRhcmdldEVsZW1lbnQpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlciwgY2hlY2tlZCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICAgIFxuICAgIGlmIChjaGVja2VkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY2hlY2soY2hlY2tlZCk7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gQ2hlY2tib3guY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2NsaWNrJywgY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKTsgIC8vL1xuICB9XG4gIFxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0KSB7XG4gICAgdGhpcy5vZmYoJ2NsaWNrJywgY2hhbmdlSGFuZGxlciwgb2JqZWN0KTsgIC8vL1xuICB9XG5cbiAgY2hlY2soY2hlY2tlZCA9IHRydWUpIHtcbiAgICBjaGVja2VkID9cbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKSA6XG4gICAgICAgIHRoaXMuY2xlYXJBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgfVxuXG4gIGlzQ2hlY2tlZCgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgIGNoZWNrZWQgPSBkb21FbGVtZW50LmNoZWNrZWQ7XG5cbiAgICByZXR1cm4gY2hlY2tlZDtcbiAgfVxuXG4gIG9uUmVzaXplKCkge31cblxuICBvZmZSZXNpemUoKSB7fVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmNsb25lKENoZWNrYm94LCBlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKENoZWNrYm94LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KENoZWNrYm94LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgY2hlY2tlZCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2UsIC8vLyAgICBcbiAgICAgICAgICBjaGVja2JveCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2hlY2tib3gsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIsIGNoZWNrZWQpO1xuICAgIFxuICAgIHJldHVybiBjaGVja2JveDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENoZWNrYm94LCB7XG4gIHRhZ05hbWU6ICdpbnB1dCcsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2hhbmdlJyxcbiAgICAnY2hlY2tlZCdcbiAgXSxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICB0eXBlOiAnY2hlY2tib3gnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoZWNrYm94O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBjaGVja2JveCA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICBjaGVja2VkID0gY2hlY2tib3guaXNDaGVja2VkKCk7XG4gIFxuICBjaGFuZ2VIYW5kbGVyKGNoZWNrZWQsIGV2ZW50LCB0YXJnZXRFbGVtZW50KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBEaXYuY2xvbmUodGhpcyk7IH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCkgeyByZXR1cm4gRWxlbWVudC5jbG9uZShEaXYsIGVsZW1lbnQpOyB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoRGl2LCBodG1sKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KERpdiwgZG9tRWxlbWVudCk7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhEaXYsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oRGl2LCB7XG4gIHRhZ05hbWU6ICdkaXYnXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBEaXY7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2xpY2tIYW5kbGVyKSB7IHJldHVybiBMaW5rLmNsb25lKHRoaXMsIGNsaWNrSGFuZGxlcik7IH1cblxuICBvbkNsaWNrKGNsaWNrSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKSB7XG4gICAgdGhpcy5vbignY2xpY2snLCBjbGlja0hhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKTtcbiAgfVxuICBcbiAgb2ZmQ2xpY2soY2xpY2tIYW5kbGVyLCBvYmplY3QpIHtcbiAgICB0aGlzLm9mZignY2xpY2snLCBjbGlja0hhbmRsZXIsIG9iamVjdCk7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmNsb25lKExpbmssIGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKExpbmssIGh0bWwsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KExpbmssIGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjbGlja0hhbmRsZXIgPSBvbkNsaWNrLCAvLy9cbiAgICAgICAgICBsaW5rID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhMaW5rLCBwcm9wZXJ0aWVzLCBjbGlja0hhbmRsZXIpO1xuICAgIFxuICAgIHJldHVybiBsaW5rO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTGluaywge1xuICB0YWdOYW1lOiAnYScsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2xpY2snXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbms7XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIoY2xpY2tIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBsaW5rID0gdGFyZ2V0RWxlbWVudCwgLy8vXG4gICAgICAgIGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICBcbiAgY2xpY2tIYW5kbGVyKGhyZWYsIGV2ZW50LCB0YXJnZXRFbGVtZW50KTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gU2VsZWN0LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCBjaGFuZ2VIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIG9iamVjdCkge1xuICAgIHRoaXMub2ZmKCdjaGFuZ2UnLCBjaGFuZ2VIYW5kbGVyLCBvYmplY3QpO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IGRvbUVsZW1lbnQudmFsdWU7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25WYWx1ZTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkT3B0aW9uQnlWYWx1ZShzZWxlY3RlZE9wdGlvblZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBzZWxlY3RlZE9wdGlvblZhbHVlLCAgLy8vXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuICAgIFxuICAgIGRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgXG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5jbG9uZShTZWxlY3QsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoU2VsZWN0LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KFNlbGVjdCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cbiAgICAgICAgICBzZWxlY3QgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNlbGVjdCwgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlcik7XG4gICAgXG4gICAgcmV0dXJuIHNlbGVjdDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNlbGVjdCwge1xuICB0YWdOYW1lOiAnc2VsZWN0JyxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnb25DaGFuZ2UnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdDtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIoY2hhbmdlSGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3Qgc2VsZWN0ID0gdGFyZ2V0RWxlbWVudCwgLy8vXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSBzZWxlY3QuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpO1xuICBcbiAgY2hhbmdlSGFuZGxlcihzZWxlY3RlZE9wdGlvblZhbHVlLCBldmVudCwgdGFyZ2V0RWxlbWVudCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFNwYW4gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2xvbmUoKSB7IHJldHVybiBTcGFuLmNsb25lKHRoaXMpOyB9XG5cbiAgb25SZXNpemUoKSB7fVxuXG4gIG9mZlJlc2l6ZSgpIHt9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUoU3BhbiwgZWxlbWVudCk7IH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCkgeyByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChTcGFuLCBodG1sKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KFNwYW4sIGRvbUVsZW1lbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihTcGFuLCB7XG4gIHRhZ05hbWU6ICdzcGFuJ1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3BhbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBJbnB1dEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVzaXplKCkge31cblxuICBvZmZSZXNpemUoKSB7fVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2NoYW5nZScsIGNoYW5nZUhhbmRsZXIsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9mZignY2hhbmdlJywgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC52YWx1ZTsgfVxuXG4gIGdldFNlbGVjdGlvblN0YXJ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0OyB9XG5cbiAgZ2V0U2VsZWN0aW9uRW5kKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZDsgfVxuICBcbiAgaXNSZWFkT25seSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5yZWFkT25seTsgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlOyB9XG5cbiAgc2V0U2VsZWN0aW9uU3RhcnQoc2VsZWN0aW9uU3RhcnQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnQ7IH1cblxuICBzZXRTZWxlY3Rpb25FbmQoc2VsZWN0aW9uRW5kKSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmQ7IH1cblxuICBzZXRSZWFkT25seShyZWFkT25seSkgeyB0aGlzLmRvbUVsZW1lbnQucmVhZE9ubHkgPSByZWFkT25seTsgfVxuXG4gIHNlbGVjdCgpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdCgpOyB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzLCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShDbGFzcywgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21IVE1MKENsYXNzLCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy9cblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmcoc3RyaW5nLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZTsgLy8vXG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tU3RyaW5nKHN0cmluZywgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKElucHV0RWxlbWVudCwge1xuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNoYW5nZSdcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXRFbGVtZW50O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBpbnB1dEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50LCAvLy9cbiAgICAgICAgdmFsdWUgPSBpbnB1dEVsZW1lbnQuZ2V0VmFsdWUoKTtcbiAgXG4gIGNoYW5nZUhhbmRsZXIodmFsdWUsIGV2ZW50LCB0YXJnZXRFbGVtZW50KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gSW5wdXQuY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKElucHV0LCBlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoSW5wdXQsIGh0bWwsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChJbnB1dCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKElucHV0LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKElucHV0LCB7XG4gIHRhZ05hbWU6ICdpbnB1dCdcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBUZXh0YXJlYS5jbG9uZSh0aGlzLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoVGV4dGFyZWEsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChUZXh0YXJlYSwgaHRtbCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KFRleHRhcmVhLCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dGFyZWEsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oVGV4dGFyZWEsIHtcbiAgdGFnTmFtZTogJ3RleHRhcmVhJ1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dGFyZWE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEJvdW5kcyB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5ib3R0b20gPSBib3R0b207XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldEJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5ib3R0b207XG4gIH1cblxuICBnZXRSaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodDtcbiAgfVxuXG4gIGlzT3ZlcmxhcHBpbmdNb3VzZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgcmV0dXJuICggICh0aGlzLnRvcCA8IG1vdXNlVG9wKSAmJlxuICAgICAgICAgICAgICAodGhpcy5sZWZ0IDwgbW91c2VMZWZ0KSAmJlxuICAgICAgICAgICAgICAodGhpcy5ib3R0b20gPiBtb3VzZVRvcCkgJiZcbiAgICAgICAgICAgICAgKHRoaXMucmlnaHQgPiBtb3VzZUxlZnQpICApO1xuICB9XG5cbiAgYXJlT3ZlcmxhcHBpbmcoYm91bmRzKSB7XG4gICAgcmV0dXJuICggICh0aGlzLnRvcCA8IGJvdW5kcy5ib3R0b20pICYmXG4gICAgICAgICAgICAgICh0aGlzLmxlZnQgPCBib3VuZHMucmlnaHQpICYmXG4gICAgICAgICAgICAgICh0aGlzLmJvdHRvbSA+IGJvdW5kcy50b3ApICYmXG4gICAgICAgICAgICAgICh0aGlzLnJpZ2h0ID4gYm91bmRzLmxlZnQpICApO1xuICB9XG5cbiAgc3RhdGljIGZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgY29uc3Qgd2luZG93U2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0LCAvLy9cbiAgICAgICAgICB3aW5kb3dTY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0LCAgLy8vXG4gICAgICAgICAgdG9wID0gYm91bmRpbmdDbGllbnRSZWN0LnRvcCArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICBsZWZ0ID0gYm91bmRpbmdDbGllbnRSZWN0LmxlZnQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdHRvbSA9IGJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b20gKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgcmlnaHQgPSBib3VuZGluZ0NsaWVudFJlY3QucmlnaHQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCb3VuZHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIE9mZnNldCB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2Zmc2V0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBvbkNsaWNrKGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oJ2NsaWNrJywgaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmQ2xpY2soaGFuZGxlciwgb2JqZWN0KSB7IHRoaXMub2ZmKCdjbGljaycsIGhhbmRsZXIsIG9iamVjdCk7IH1cblxuY29uc3QgY2xpY2tNaXhpbiA9IHtcbiAgb25DbGljazogb25DbGljayxcbiAgb2ZmQ2xpY2s6IG9mZkNsaWNrXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsaWNrTWl4aW47XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKGhhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIGNvbnN0IG1vdXNlVG9wID0gZXZlbnQucGFnZVksICAvLy9cbiAgICAgICAgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsIC8vL1xuICAgICAgICBtb3VzZUJ1dHRvbiA9IGV2ZW50LmJ1dHRvbjsgLy8vXG4gIFxuICBoYW5kbGVyKG1vdXNlVG9wLCBtb3VzZUxlZnQsIG1vdXNlQnV0dG9uLCBldmVudCwgdGFyZ2V0RWxlbWVudCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9uKGV2ZW50VHlwZXMsIGhhbmRsZXIsIG9iamVjdCA9IG51bGwsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBudWxsKSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KCcgJyk7IC8vL1xuXG4gIGV2ZW50VHlwZXMuZm9yRWFjaChmdW5jdGlvbihldmVudFR5cGUpIHtcbiAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbiAgICBcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuICB9LmJpbmQodGhpcykpO1xufVxuXG5mdW5jdGlvbiBvZmYoZXZlbnRUeXBlcywgaGFuZGxlciwgb2JqZWN0ID0gbnVsbCkge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdCgnICcpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goZnVuY3Rpb24oZXZlbnRUeXBlKSB7XG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIG9iamVjdCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuICB9LmJpbmQodGhpcykpO1xufVxuXG5jb25zdCBldmVudE1peGluID0ge1xuICBvbjogb24sXG4gIG9mZjogb2ZmLFxuICBhZGRFdmVudExpc3RlbmVyOiBhZGRFdmVudExpc3RlbmVyLFxuICByZW1vdmVFdmVudExpc3RlbmVyOiByZW1vdmVFdmVudExpc3RlbmVyXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV2ZW50TWl4aW47XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KCdldmVudExpc3RlbmVycycpKSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuICB9XG4gIFxuICBjb25zdCB0YXJnZXRFbGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgIGV2ZW50TGlzdGVuZXJzID0gdGhpcy5ldmVudExpc3RlbmVycyxcbiAgICAgICAgZXZlbnRMaXN0ZW5lciA9IGNyZWF0ZUV2ZW50TGlzdGVuZXIodGFyZ2V0RWxlbWVudCwgZXZlbnRUeXBlLCBoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xuXG4gIGV2ZW50TGlzdGVuZXJzLnB1c2goZXZlbnRMaXN0ZW5lcik7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBvYmplY3QpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmV2ZW50TGlzdGVuZXJzLFxuICAgICAgICBldmVudExpc3RlbmVyID0gZmluZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lcnMsIGV2ZW50VHlwZSwgaGFuZGxlciwgb2JqZWN0KSxcbiAgICAgICAgaW5kZXggPSBldmVudExpc3RlbmVycy5pbmRleE9mKGV2ZW50TGlzdGVuZXIpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICBldmVudExpc3RlbmVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICBpZiAoZXZlbnRMaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgZGVsZXRlIHRoaXMuZXZlbnRMaXN0ZW5lcnM7XG4gIH1cbiAgXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudExpc3RlbmVyKHRhcmdldEVsZW1lbnQsIGV2ZW50VHlwZSwgaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIGxldCBldmVudExpc3RlbmVyO1xuICBcbiAgaWYgKGludGVybWVkaWF0ZUhhbmRsZXIgPT09IG51bGwpIHtcbiAgICBldmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGhhbmRsZXIuY2FsbChvYmplY3QsIGV2ZW50LCB0YXJnZXRFbGVtZW50KVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgZXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpbnRlcm1lZGlhdGVIYW5kbGVyKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGhhbmRsZXIuY2FsbChvYmplY3QsIC4uLmFyZ3VtZW50cyk7XG4gICAgICB9LCBldmVudCwgdGFyZ2V0RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmFzc2lnbihldmVudExpc3RlbmVyLCB7XG4gICAgZXZlbnRUeXBlOiBldmVudFR5cGUsXG4gICAgaGFuZGxlcjogaGFuZGxlcixcbiAgICBvYmplY3Q6IG9iamVjdFxuICB9KTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lcnMsIGV2ZW50VHlwZSwgaGFuZGxlciwgb2JqZWN0KSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSBldmVudExpc3RlbmVycy5maW5kKGZ1bmN0aW9uKGV2ZW50TGlzdGVuZXIpIHtcbiAgICBjb25zdCBmb3VuZCA9ICggKGV2ZW50TGlzdGVuZXIub2JqZWN0ID09PSBvYmplY3QpICYmIFxuICAgICAgICAgICAgICAgICAgICAoZXZlbnRMaXN0ZW5lci5oYW5kbGVyID09PSBoYW5kbGVyKSAmJiBcbiAgICAgICAgICAgICAgICAgICAgKGV2ZW50TGlzdGVuZXIuZXZlbnRUeXBlID09PSBldmVudFR5cGUpICk7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gZm91bmQ7XG4gIH0pO1xuICBcbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBUZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4uL3RleHRFbGVtZW50JyksXG4gICAgICBvYmplY3RVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvb2JqZWN0Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjb21iaW5lLCBwcnVuZSB9ID0gb2JqZWN0VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMocHJvcGVydGllcyA9IHt9LCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpIHtcbiAgY29tYmluZShwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcyk7XG5cbiAgY29uc3QgZWxlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50QW5kUHJvcGVydGllcyhlbGVtZW50LCBwcm9wZXJ0aWVzKTtcblxuICBwcnVuZShwcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKTsgIC8vL1xuXG4gIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgIGNvbnN0IHZhbHVlID0gcHJvcGVydGllc1tuYW1lXTtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmIChpc0hhbmRsZXJOYW1lKG5hbWUpKSB7XG4gICAgICBhZGRIYW5kbGVyKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGlzQXR0cmlidXRlTmFtZShuYW1lKSkge1xuICAgICAgYWRkQXR0cmlidXRlKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KCdwcm9wZXJ0aWVzJykpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvcGVydGllc1tuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgIGNoaWxkRWxlbWVudC5hZGRUbyhwYXJlbnRFbGVtZW50KTtcblxuICAgIHVwZGF0ZVBhcmVudENvbnRleHQoY2hpbGRFbGVtZW50LCBwYXJlbnRFbGVtZW50KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHRoaXMucHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dCgpIHtcbiAgcmV0dXJuIHRoaXMuY29udGV4dDtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gIHJldHVybiB0aGlzLnN0YXRlO1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSkge1xuICB0aGlzLnN0YXRlID0gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGZyb21TdGF0ZShuYW1lKSB7XG4gIGNvbnN0IHZhbHVlID0gdGhpcy5zdGF0ZVtuYW1lXTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVN0YXRlKHVwZGF0ZSkge1xuICBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsIHVwZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkNvbnRleHQobmFtZXMsIHRoZW5EZWxldGUpIHtcbiAgY29uc3QgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblxuICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdib29sZWFuJykge1xuICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICB0aGVuRGVsZXRlID0gZmlyc3RBcmd1bWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMCkge1xuICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcblxuICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICB9XG5cbiAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRleHRbbmFtZV0sXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvcik7XG5cbiAgICBpZiAodGhlbkRlbGV0ZSkge1xuICAgICAgZGVsZXRlIHRoaXMuY29udGV4dFtuYW1lXTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSwgW10pO1xufVxuXG5jb25zdCBqc3hNaXhpbiA9IHtcbiAgYXBwbHlQcm9wZXJ0aWVzOiBhcHBseVByb3BlcnRpZXMsXG4gIGdldFByb3BlcnRpZXM6IGdldFByb3BlcnRpZXMsXG4gIGdldENvbnRleHQ6IGdldENvbnRleHQsXG4gIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgc2V0U3RhdGU6IHNldFN0YXRlLFxuICBmcm9tU3RhdGU6IGZyb21TdGF0ZSxcbiAgdXBkYXRlU3RhdGU6IHVwZGF0ZVN0YXRlLFxuICBhc3NpZ25Db250ZXh0OiBhc3NpZ25Db250ZXh0XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGpzeE1peGluO1xuXG5mdW5jdGlvbiB1cGRhdGVQYXJlbnRDb250ZXh0KGNoaWxkRWxlbWVudCwgcGFyZW50RWxlbWVudCkge1xuICBjb25zdCBwYXJlbnRDb250ZXh0ID0gKHR5cGVvZiBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuY29udGV4dDtcblxuICBwYXJlbnRFbGVtZW50LmNvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBwYXJlbnRFbGVtZW50LmNvbnRleHQsIHBhcmVudENvbnRleHQpO1xuXG4gIGRlbGV0ZSBjaGlsZEVsZW1lbnQuY29udGV4dDtcbn1cblxuZnVuY3Rpb24gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50QW5kUHJvcGVydGllcyhlbGVtZW50LCBwcm9wZXJ0aWVzKSB7XG4gIGxldCBjaGlsZEVsZW1lbnRzID0gKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMuY2hpbGRFbGVtZW50cztcblxuICBjaGlsZEVsZW1lbnRzID0gKGNoaWxkRWxlbWVudHMgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgICAgICAgICAgICAgICgoY2hpbGRFbGVtZW50cyBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudHMgOlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NoaWxkRWxlbWVudHNdKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtdO1xuXG4gIGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzLm1hcChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICBpZiAodHlwZW9mIGNoaWxkRWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBjaGlsZEVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHRleHRFbGVtZW50ID0gbmV3IFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBjaGlsZEVsZW1lbnQgPSB0ZXh0RWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgLy8vXG4gICAgICAgIGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gIGVsZW1lbnQub24oZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgIG5hbWUgPSAnY2xhc3MnO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09ICdodG1sRm9yJykge1xuICAgIG5hbWUgPSAnZm9yJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBlbGVtZW50LmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNIYW5kbGVyTmFtZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLm1hdGNoKC9eb24vKTtcbn1cblxuZnVuY3Rpb24gaXNBdHRyaWJ1dGVOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIGF0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKG5hbWUpO1xufVxuXG5jb25zdCBhdHRyaWJ1dGVOYW1lcyA9IFtcbiAgJ2FjY2VwdCcsICdhY2NlcHRDaGFyc2V0JywgJ2FjY2Vzc0tleScsICdhY3Rpb24nLCAnYWxsb3dGdWxsU2NyZWVuJywgJ2FsbG93VHJhbnNwYXJlbmN5JywgJ2FsdCcsICdhc3luYycsICdhdXRvQ29tcGxldGUnLCAnYXV0b0ZvY3VzJywgJ2F1dG9QbGF5JyxcbiAgJ2NhcHR1cmUnLCAnY2VsbFBhZGRpbmcnLCAnY2VsbFNwYWNpbmcnLCAnY2hhbGxlbmdlJywgJ2NoYXJTZXQnLCAnY2hlY2tlZCcsICdjaXRlJywgJ2NsYXNzSUQnLCAnY2xhc3NOYW1lJywgJ2NvbFNwYW4nLCAnY29scycsICdjb250ZW50JywgJ2NvbnRlbnRFZGl0YWJsZScsICdjb250ZXh0TWVudScsICdjb250cm9scycsICdjb29yZHMnLCAnY3Jvc3NPcmlnaW4nLFxuICAnZGF0YScsICdkYXRlVGltZScsICdkZWZhdWx0JywgJ2RlZmVyJywgJ2RpcicsICdkaXNhYmxlZCcsICdkb3dubG9hZCcsICdkcmFnZ2FibGUnLFxuICAnZW5jVHlwZScsXG4gICdmb3JtJywgJ2Zvcm1BY3Rpb24nLCAnZm9ybUVuY1R5cGUnLCAnZm9ybU1ldGhvZCcsICdmb3JtTm9WYWxpZGF0ZScsICdmb3JtVGFyZ2V0JywgJ2ZyYW1lQm9yZGVyJyxcbiAgJ2hlYWRlcnMnLCAnaGVpZ2h0JywgJ2hpZGRlbicsICdoaWdoJywgJ2hyZWYnLCAnaHJlZkxhbmcnLCAnaHRtbEZvcicsICdodHRwRXF1aXYnLFxuICAnaWNvbicsICdpZCcsICdpbnB1dE1vZGUnLCAnaW50ZWdyaXR5JywgJ2lzJyxcbiAgJ2tleVBhcmFtcycsICdrZXlUeXBlJywgJ2tpbmQnLFxuICAnbGFiZWwnLCAnbGFuZycsICdsaXN0JywgJ2xvb3AnLCAnbG93JyxcbiAgJ21hbmlmZXN0JywgJ21hcmdpbkhlaWdodCcsICdtYXJnaW5XaWR0aCcsICdtYXgnLCAnbWF4TGVuZ3RoJywgJ21lZGlhJywgJ21lZGlhR3JvdXAnLCAnbWV0aG9kJywgJ21pbicsICdtaW5MZW5ndGgnLCAnbXVsdGlwbGUnLCAnbXV0ZWQnLFxuICAnbmFtZScsICdub1ZhbGlkYXRlJywgJ25vbmNlJyxcbiAgJ29wZW4nLCAnb3B0aW11bScsXG4gICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3Bvc3RlcicsICdwcmVsb2FkJywgJ3Byb2ZpbGUnLFxuICAncmFkaW9Hcm91cCcsICdyZWFkT25seScsICdyZWwnLCAncmVxdWlyZWQnLCAncmV2ZXJzZWQnLCAncm9sZScsICdyb3dTcGFuJywgJ3Jvd3MnLFxuICAnc2FuZGJveCcsICdzY29wZScsICdzY29wZWQnLCAnc2Nyb2xsaW5nJywgJ3NlYW1sZXNzJywgJ3NlbGVjdGVkJywgJ3NoYXBlJywgJ3NpemUnLCAnc2l6ZXMnLCAnc3BhbicsICdzcGVsbENoZWNrJywgJ3NyYycsICdzcmNEb2MnLCAnc3JjTGFuZycsICdzcmNTZXQnLCAnc3RhcnQnLCAnc3RlcCcsICdzdHlsZScsICdzdW1tYXJ5JyxcbiAgJ3RhYkluZGV4JywgJ3RhcmdldCcsICd0aXRsZScsICd0eXBlJyxcbiAgJ3VzZU1hcCcsXG4gICd2YWx1ZScsXG4gICd3aWR0aCcsXG4gICd3bW9kZScsXG4gICd3cmFwJ1xuXTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gb25LZXlVcChoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdrZXl1cCcsIGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uS2V5RG93bihoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdrZXlkb3duJywgaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmS2V5VXAoaGFuZGxlciwgb2JqZWN0KSB7IHRoaXMub2ZmKCdrZXl1cCcsIGhhbmRsZXIsIG9iamVjdCk7IH1cblxuZnVuY3Rpb24gb2ZmS2V5RG93bihoYW5kbGVyLCBvYmplY3QpIHsgdGhpcy5vZmYoJ2tleWRvd24nLCBoYW5kbGVyLCBvYmplY3QpOyB9XG5cbmNvbnN0IGtleU1peGluID0ge1xuICBvbktleVVwOiBvbktleVVwLFxuICBvbktleURvd246IG9uS2V5RG93bixcbiAgb2ZmS2V5VXA6IG9mZktleVVwLFxuICBvZmZLZXlEb3duOiBvZmZLZXlEb3duXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleU1peGluO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcbiAgXG4gIGhhbmRsZXIoa2V5Q29kZSwgZXZlbnQsIHRhcmdldEVsZW1lbnQpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBvbk1vdXNlVXAoaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgdGhpcy5vbignbW91c2V1cCcsIGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uTW91c2VEb3duKGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oJ21vdXNlZG93bicsIGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uTW91c2VPdmVyKGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oJ21vdXNlb3ZlcicsIGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uTW91c2VPdXQoaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgdGhpcy5vbignbW91c2VvdXQnLCBoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvbk1vdXNlTW92ZShoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdtb3VzZW1vdmUnLCBoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZNb3VzZVVwKGhhbmRsZXIsIG9iamVjdCkgeyB0aGlzLm9mZignbW91c2V1cCcsIGhhbmRsZXIsIG9iamVjdCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VEb3duKGhhbmRsZXIsIG9iamVjdCkgeyB0aGlzLm9mZignbW91c2Vkb3duJywgaGFuZGxlciwgb2JqZWN0KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU92ZXIoaGFuZGxlciwgb2JqZWN0KSB7IHRoaXMub2ZmKCdtb3VzZW92ZXInLCBoYW5kbGVyLCBvYmplY3QpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlT3V0KGhhbmRsZXIsIG9iamVjdCkgeyB0aGlzLm9mZignbW91c2VvdXQnLCBoYW5kbGVyLCBvYmplY3QpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlTW92ZShoYW5kbGVyLCBvYmplY3QpIHsgdGhpcy5vZmYoJ21vdXNlbW92ZScsIGhhbmRsZXIsIG9iamVjdCk7IH1cblxuY29uc3QgbW91c2VNaXhpbiA9IHtcbiAgb25Nb3VzZVVwOiBvbk1vdXNlVXAsXG4gIG9uTW91c2VEb3duOiBvbk1vdXNlRG93bixcbiAgb25Nb3VzZU92ZXI6IG9uTW91c2VPdmVyLFxuICBvbk1vdXNlT3V0OiBvbk1vdXNlT3V0LFxuICBvbk1vdXNlTW92ZTogb25Nb3VzZU1vdmUsXG4gIG9mZk1vdXNlVXA6IG9mZk1vdXNlVXAsXG4gIG9mZk1vdXNlRG93bjogb2ZmTW91c2VEb3duLFxuICBvZmZNb3VzZU92ZXI6IG9mZk1vdXNlT3ZlcixcbiAgb2ZmTW91c2VPdXQ6IG9mZk1vdXNlT3V0LFxuICBvZmZNb3VzZU1vdmU6IG9mZk1vdXNlTW92ZVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb3VzZU1peGluO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBtb3VzZVRvcCA9IGV2ZW50LnBhZ2VZLCAgLy8vXG4gICAgICAgIG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAvLy9cbiAgICAgICAgbW91c2VCdXR0b24gPSBldmVudC5idXR0b247IC8vL1xuICBcbiAgaGFuZGxlcihtb3VzZVRvcCwgbW91c2VMZWZ0LCBtb3VzZUJ1dHRvbiwgZXZlbnQsIHRhcmdldEVsZW1lbnQpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBvblJlc2l6ZShoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlUmVzaXplSGFuZGxlcikge1xuICBjb25zdCBlbGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gZmluZFJlc2l6ZUV2ZW50TGlzdGVuZXJzKGVsZW1lbnQpO1xuXG4gIGlmIChyZXNpemVFdmVudExpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICBhZGRSZXNpemVPYmplY3QoZWxlbWVudCk7XG4gIH1cblxuICBjb25zdCBldmVudFR5cGUgPSAncmVzaXplJztcblxuICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZSZXNpemUoaGFuZGxlciwgb2JqZWN0KSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9ICdyZXNpemUnO1xuXG4gIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIG9iamVjdCk7XG5cbiAgY29uc3QgZWxlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICByZXNpemVFdmVudExpc3RlbmVycyA9IGZpbmRSZXNpemVFdmVudExpc3RlbmVycyhlbGVtZW50KTtcbiAgXG4gIGlmIChyZXNpemVFdmVudExpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICByZW1vdmVSZXNpemVPYmplY3QoZWxlbWVudCk7XG4gIH1cbn1cblxuY29uc3QgcmVzaXplTWl4aW4gPSB7XG4gIG9uUmVzaXplOiBvblJlc2l6ZSxcbiAgb2ZmUmVzaXplOiBvZmZSZXNpemVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzaXplTWl4aW47XG5cbmZ1bmN0aW9uIGFkZFJlc2l6ZU9iamVjdChlbGVtZW50KSB7XG4gIGNvbnN0IHJlc2l6ZU9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpLFxuICAgICAgICBkb21FbGVtZW50ID0gZWxlbWVudC5nZXRET01FbGVtZW50KCksXG4gICAgICAgIHN0eWxlID0gYGRpc3BsYXk6IGJsb2NrOyBcbiAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgICAgICAgICAgdG9wOiAwOyBcbiAgICAgICAgICAgICAgICAgbGVmdDogMDsgXG4gICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTsgXG4gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyBcbiAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7YCxcbiAgICAgICAgZGF0YSA9ICdhYm91dDpibGFuaycsXG4gICAgICAgIHR5cGUgPSAndGV4dC9odG1sJztcblxuICByZXNpemVPYmplY3Quc2V0QXR0cmlidXRlKCdzdHlsZScsIHN0eWxlKTtcbiAgcmVzaXplT2JqZWN0LmRhdGEgPSBkYXRhO1xuICByZXNpemVPYmplY3QudHlwZSA9IHR5cGU7XG5cbiAgZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fID0gcmVzaXplT2JqZWN0O1xuXG4gIHJlc2l6ZU9iamVjdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXNpemVPYmplY3RMb2FkSGFuZGxlcihlbGVtZW50KVxuICB9O1xuXG4gIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVzaXplT2JqZWN0KGVsZW1lbnQpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICByZXNpemVPYmplY3QgPSBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIG9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICBvYmplY3RXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplRXZlbnRMaXN0ZW5lcik7XG5cbiAgZG9tRWxlbWVudC5yZW1vdmVDaGlsZChyZXNpemVPYmplY3QpO1xufVxuXG5mdW5jdGlvbiByZXNpemVPYmplY3RMb2FkSGFuZGxlcihlbGVtZW50KSB7XG4gIGNvbnN0IHJlc2l6ZU9iamVjdCA9IGVsZW1lbnQuX19yZXNpemVPYmplY3RfXyxcbiAgICAgICAgcmVzaXplT2JqZWN0V2luZG93ID0gcmVzaXplT2JqZWN0LmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldzsgIC8vL1xuXG4gIHJlc2l6ZU9iamVjdFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gZmluZFJlc2l6ZUV2ZW50TGlzdGVuZXJzKGVsZW1lbnQpO1xuXG4gICAgcmVzaXplRXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihyZXNpemVFdmVudExpc3RlbmVyKXtcbiAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXIoZXZlbnQpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZVJlc2l6ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3Qgd2luZG93ID0gdGFyZ2V0RWxlbWVudCwgLy8vXG4gICAgICAgIHdpZHRoID0gd2luZG93LmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHdpbmRvdy5nZXRIZWlnaHQoKTtcblxuICBoYW5kbGVyKHdpZHRoLCBoZWlnaHQsIGV2ZW50LCB0YXJnZXRFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gZmluZFJlc2l6ZUV2ZW50TGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgXG4gIGlmIChlbGVtZW50Lmhhc093blByb3BlcnR5KCdldmVudExpc3RlbmVycycpKSB7XG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSBlbGVtZW50LmV2ZW50TGlzdGVuZXJzOyAgLy8vXG5cbiAgICBldmVudExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIGlmIChldmVudExpc3RlbmVyLmV2ZW50VHlwZSA9PT0gJ3Jlc2l6ZScpIHtcbiAgICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lciA9IGV2ZW50TGlzdGVuZXI7XG5cbiAgICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcnMucHVzaChyZXNpemVFdmVudExpc3RlbmVyKTtcbiAgICAgIH0gICAgICBcbiAgICB9KTtcbiAgfSAgXG4gIFxuICByZXR1cm4gcmVzaXplRXZlbnRMaXN0ZW5lcnM7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9uU2Nyb2xsKGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oJ3Njcm9sbCcsIGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZlNjcm9sbChoYW5kbGVyLCBvYmplY3QpIHsgdGhpcy5vZmYoJ3Njcm9sbCcsIGhhbmRsZXIsIG9iamVjdCk7IH1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcDsgfVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQ7IH1cblxuZnVuY3Rpb24gc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyB9XG5cbmZ1bmN0aW9uIHNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7IH1cblxuY29uc3Qgc2Nyb2xsTWl4aW4gPSB7XG4gIG9uU2Nyb2xsOiBvblNjcm9sbCxcbiAgb2ZmU2Nyb2xsOiBvZmZTY3JvbGwsXG4gIGdldFNjcm9sbFRvcDogZ2V0U2Nyb2xsVG9wLFxuICBnZXRTY3JvbGxMZWZ0OiBnZXRTY3JvbGxMZWZ0LFxuICBzZXRTY3JvbGxUb3A6IHNldFNjcm9sbFRvcCxcbiAgc2V0U2Nyb2xsTGVmdDogc2V0U2Nyb2xsTGVmdFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzY3JvbGxNaXhpbjtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3Qgc2Nyb2xsVG9wID0gdGFyZ2V0RWxlbWVudC5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgc2Nyb2xsTGVmdCA9IHRhcmdldEVsZW1lbnQuZ2V0U2Nyb2xsTGVmdCgpO1xuICBcbiAgaGFuZGxlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQsIGV2ZW50LCB0YXJnZXRFbGVtZW50KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL3RleHRFbGVtZW50Jyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRBcmd1bWVudHMpIHtcbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChmaXJzdEFyZ3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cyk7XG5cbiAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGlsZEVsZW1lbnRzOiBjaGlsZEVsZW1lbnRzXG4gICAgfSwgcHJvcGVydGllcyk7XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBzdHJpbmcgPSBmaXJzdEFyZ3VtZW50OyAvLy9cblxuICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbVN0cmluZyhzdHJpbmcsIHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IGVsZW1lbnRGdW5jdGlvbihwcm9wZXJ0aWVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkRWxlbWVudHNGcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpIHtcbiAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5yZWR1Y2UoZnVuY3Rpb24oY2hpbGRBcmd1bWVudHMsIGNoaWxkQXJndW1lbnQpIHtcbiAgICBjaGlsZEFyZ3VtZW50cyA9IGNoaWxkQXJndW1lbnRzLmNvbmNhdChjaGlsZEFyZ3VtZW50KTtcblxuICAgIHJldHVybiBjaGlsZEFyZ3VtZW50cztcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEFyZ3VtZW50cy5tYXAoZnVuY3Rpb24oY2hpbGRBcmd1bWVudCkge1xuICAgIGxldCBjaGlsZEVsZW1lbnQ7XG4gICAgXG4gICAgaWYgKHR5cGVvZiBjaGlsZEFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgdGV4dCA9IGNoaWxkQXJndW1lbnQsIC8vL1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQgPSBuZXcgVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGNoaWxkRWxlbWVudCA9IHRleHRFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZEVsZW1lbnQgPSBjaGlsZEFyZ3VtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHR5cGVPZiA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7IC8vL1xuICAgIHR5cGVPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgdHlwZU9mID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgT2Zmc2V0ID0gcmVxdWlyZSgnLi9taXNjL29mZnNldCcpLFxuICAgICAgQm91bmRzID0gcmVxdWlyZSgnLi9taXNjL2JvdW5kcycpO1xuXG5jbGFzcyBUZXh0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBUZXh0RWxlbWVudC5jbG9uZSh0aGlzKTsgfVxuXG4gIGdldFRleHQoKSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSxcbiAgICAgICAgICB0ZXh0ID0gbm9kZVZhbHVlOyAvLy9cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGV4dDsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlID0gbm9kZVZhbHVlO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dEVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IHNwbGljZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpWzBdIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOyAgLy8vXG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRvbUVsZW1lbnRzKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXMoZG9tRWxlbWVudHMsIGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gKGRvbUVsZW1lbnQuX19lbGVtZW50X18gIT09IHVuZGVmaW5lZCk7XG4gICAgICAgIH0pLFxuICAgICAgICBlbGVtZW50cyA9IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzLm1hcChmdW5jdGlvbihkb21FbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGRvbUVsZW1lbnQuX19lbGVtZW50X187XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgZGVzY2VuZGFudERPTU5vZGVzID0gW10pIHtcbiAgY29uc3Qgc3RhcnQgPSAtMSxcbiAgICAgICAgZGVsZXRlQ291bnQgPSAwLFxuICAgICAgICBjaGlsZERPTU5vZGVzID0gZG9tTm9kZS5jaGlsZE5vZGVzOyAgLy8vXG5cbiAgc3BsaWNlKGRlc2NlbmRhbnRET01Ob2Rlcywgc3RhcnQsIGRlbGV0ZUNvdW50LCBjaGlsZERPTU5vZGVzKTtcblxuICBjaGlsZERPTU5vZGVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRET01Ob2RlKSB7XG4gICAgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoY2hpbGRET01Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMpO1xuICB9KTtcblxuICByZXR1cm4gZGVzY2VuZGFudERPTU5vZGVzO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZG9tTm9kZXMsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGZpbHRlcmVkRE9NTm9kZXMgPSBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgZnVuY3Rpb24oZG9tTm9kZSkge1xuICAgIHJldHVybiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKGRvbU5vZGUsIHNlbGVjdG9yKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZpbHRlcmVkRE9NTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tTm9kZVR5cGUgPSBkb21Ob2RlLm5vZGVUeXBlO1xuXG4gIHN3aXRjaCAoZG9tTm9kZVR5cGUpIHtcbiAgICBjYXNlIE5vZGUuRUxFTUVOVF9OT0RFIDoge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbU5vZGU7IC8vL1xuXG4gICAgICByZXR1cm4gZG9tRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBjYXNlIE5vZGUuVEVYVF9OT0RFIDoge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSAnKicpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gW10sXG4gICAgICAgIGRvbU5vZGVzTGVuZ3RoID0gZG9tTm9kZXMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb21Ob2Rlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSBkb21Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gdGVzdChkb21Ob2RlKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGZpbHRlcmVkRE9NTm9kZXMucHVzaChkb21Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3I6IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzOiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyxcbiAgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGU6IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlLFxuICBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3I6IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcixcbiAgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcjogZG9tTm9kZU1hdGNoZXNTZWxlY3RvcixcbiAgZmlsdGVyRE9NTm9kZXM6IGZpbHRlckRPTU5vZGVzXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjb21iaW5lKHRhcmdldE9iamVjdCwgc291cmNlT2JqZWN0ID0ge30pIHtcbiAgY29uc3Qgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZU9iamVjdCk7XG5cbiAgc291cmNlS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKHNvdXJjZUtleSkge1xuICAgIGNvbnN0IHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0T2JqZWN0W3NvdXJjZUtleV0sXG4gICAgICAgICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2VPYmplY3Rbc291cmNlS2V5XTtcblxuICAgIHRhcmdldE9iamVjdFtzb3VyY2VLZXldID0gdGFyZ2V0T2JqZWN0Lmhhc093blByb3BlcnR5KHNvdXJjZUtleSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RhcmdldFByb3BlcnR5fSAke3NvdXJjZVByb3BlcnR5fWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVByb3BlcnR5O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJ1bmUodGFyZ2V0T2JqZWN0LCBzb3VyY2VLZXlzKSB7XG4gIHNvdXJjZUtleXMuZm9yRWFjaChmdW5jdGlvbihzb3VyY2VLZXkpIHtcbiAgICBpZiAodGFyZ2V0T2JqZWN0Lmhhc093blByb3BlcnR5KHNvdXJjZUtleSkpIHtcbiAgICAgIGRlbGV0ZSB0YXJnZXRPYmplY3Rbc291cmNlS2V5XTtcbiAgICB9XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29tYmluZTogY29tYmluZSxcbiAgcHJ1bmU6IHBydW5lXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyksXG4gICAgICBrZXlNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4va2V5Jyk7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHdpbmRvdzsgLy8vXG4gIH1cblxuICBhc3NpZ24oLi4uc291cmNlcykge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc291cmNlcyk7XG4gIH1cbiAgXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVyV2lkdGg7IH0gLy8vXG4gIFxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIZWlnaHQ7IH0gLy8vXG5cbiAgZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VZT2Zmc2V0OyB9ICAvLy9cblxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VYT2Zmc2V0OyB9IC8vL1xuXG4gIG9uUmVzaXplKGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVSZXNpemVIYW5kbGVyKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlcyA9ICdyZXNpemUnO1xuICAgIFxuICAgIHRoaXMub24oZXZlbnRUeXBlcywgaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbiAgfVxuXG4gIG9mZlJlc2l6ZShoYW5kbGVyLCBvYmplY3QpIHtcbiAgICBjb25zdCBldmVudFR5cGVzID0gJ3Jlc2l6ZSc7XG5cbiAgICB0aGlzLm9mZihldmVudFR5cGVzLCBoYW5kbGVyLCBvYmplY3QpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZXZlbnRNaXhpbik7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGNsaWNrTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBtb3VzZU1peGluKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwga2V5TWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBXaW5kb3coKTsgIC8vL1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlUmVzaXplSGFuZGxlcihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCB3aW5kb3cgPSB0YXJnZXRFbGVtZW50LCAvLy9cbiAgICAgICAgd2lkdGggPSB3aW5kb3cuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gd2luZG93LmdldEhlaWdodCgpO1xuICBcbiAgaGFuZGxlcih3aWR0aCwgaGVpZ2h0LCBldmVudCwgdGFyZ2V0RWxlbWVudCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvcGF0aCcpLFxuICBhcnJheVV0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL2FycmF5JyksXG4gIHRlbXBsYXRlVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvdGVtcGxhdGUnKSxcbiAgZmlsZVN5c3RlbVV0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL2ZpbGVTeXN0ZW0nKSxcbiAgYXN5bmNocm9ub3VzVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvYXN5bmNocm9ub3VzJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5cbmZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuXG5mdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmZ1bmN0aW9uIGZpZnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs0XTsgfVxuXG5mdW5jdGlvbiBmaWZ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDVdOyB9XG5cbmZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmZ1bmN0aW9uIHRoaXJkTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gM107IH1cblxuZnVuY3Rpb24gc2Vjb25kTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl07IH1cblxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZnVuY3Rpb24gcHVzaChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZnVuY3Rpb24gdW5zaGlmdChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZnVuY3Rpb24gY2xlYXIoYXJyYXkpIHtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuICBcbiAgcmV0dXJuIGFycmF5LnNwbGljZShzdGFydCk7XG59XG5cbmZ1bmN0aW9uIGNvcHkoYXJyYXkxLCBhcnJheTIpIHtcbiAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IGFycmF5Mi5sZW5ndGg7ICAvLy9cbiAgXG4gIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXkyKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2UoYXJyYXkxLCBhcnJheTIpIHtcbiAgY29uc3Qgc3RhcnQgPSBhcnJheTIubGVuZ3RoLCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmZ1bmN0aW9uIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXkyID0gW10pIHtcbiAgY29uc3QgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5Ml0sXG4gICAgICAgIGRlbGV0ZWRJdGVtc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheTEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkSXRlbXNBcnJheTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBsZXQgc3RhcnQgPSAtMTtcbiAgXG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZShmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgc3RhcnQgPSBpbmRleDsgIC8vL1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgaWYgKGZvdW5kKSB7XG4gICAgY29uc3QgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihhcnJheSwgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGZpbHRlcmVkRWxlbWVudHMudW5zaGlmdChmaXJzdERlbGV0ZWRFbGVtZW50KTsgIC8vL1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZmlsdGVyZWRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZmluZChhcnJheSwgdGVzdCkge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIHBydW5lKGFycmF5LCB0ZXN0KSB7XG4gIGxldCBwcnVuZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBcbiAgYXJyYXkuc29tZShmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgcHJ1bmVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBwcnVuZWRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBwYXRjaChhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cblxuICBpZiAoZm91bmQpIHtcbiAgICBhcnJheS5wdXNoKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5mdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5Mi5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXBhcmF0ZShhcnJheSwgYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgcGFzc2VkID9cbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpIDpcbiAgICAgICAgYXJyYXkyLnB1c2goZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICAgIFxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYmFja3dhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAodmFyIGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZmlyc3Q6IGZpcnN0LFxuICBzZWNvbmQ6IHNlY29uZCxcbiAgdGhpcmQ6IHRoaXJkLFxuICBmb3VydGg6IGZvdXJ0aCxcbiAgZmlmdGg6IGZpZnRoLFxuICBmaWZ0aExhc3Q6IGZpZnRoTGFzdCxcbiAgZm91cnRoTGFzdDogZm91cnRoTGFzdCxcbiAgdGhpcmRMYXN0OiB0aGlyZExhc3QsXG4gIHNlY29uZExhc3Q6IHNlY29uZExhc3QsXG4gIGxhc3Q6IGxhc3QsXG4gIHRhaWw6IHRhaWwsXG4gIHB1c2g6IHB1c2gsXG4gIHVuc2hpZnQ6IHVuc2hpZnQsXG4gIGNsZWFyOiBjbGVhcixcbiAgY29weTogY29weSxcbiAgbWVyZ2U6IG1lcmdlLFxuICBzcGxpY2U6IHNwbGljZSxcbiAgcmVwbGFjZTogcmVwbGFjZSxcbiAgZmlsdGVyOiBmaWx0ZXIsXG4gIGZpbmQ6IGZpbmQsXG4gIHBydW5lOiBwcnVuZSxcbiAgcGF0Y2g6IHBhdGNoLFxuICBhdWdtZW50OiBhdWdtZW50LFxuICBzZXBhcmF0ZTogc2VwYXJhdGUsXG4gIGZvcndhcmRzU29tZTogZm9yd2FyZHNTb21lLFxuICBiYWNrd2FyZHNTb21lOiBiYWNrd2FyZHNTb21lLFxuICBmb3J3YXJkc0ZvckVhY2g6IGZvcndhcmRzRm9yRWFjaCxcbiAgYmFja3dhcmRzRm9yRWFjaDogYmFja3dhcmRzRm9yRWFjaFxufTtcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIHdoaWxzdChjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlcXVlbmNlKGNhbGxiYWNrcywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGNhbGxiYWNrcy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFja3NbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBldmVudHVhbGx5KGNhbGxiYWNrcywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGNhbGxiYWNrcy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2ssIGluZGV4KSB7XHJcbiAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGVhdGVkbHkoY2FsbGJhY2ssIGxlbmd0aCwgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gbGVuZ3RoO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQtLTtcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IC0xKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgd2hpbHN0OiB3aGlsc3QsXHJcbiAgZm9yRWFjaDogZm9yRWFjaCxcclxuICBzZXF1ZW5jZTogc2VxdWVuY2UsXHJcbiAgZXZlbnR1YWxseTogZXZlbnR1YWxseSxcclxuICByZXBlYXRlZGx5OiByZXBlYXRlZGx5LFxyXG4gIGZvcndhcmRzRm9yRWFjaDogZm9yd2FyZHNGb3JFYWNoLFxyXG4gIGJhY2t3YXJkc0ZvckVhY2g6IGJhY2t3YXJkc0ZvckVhY2hcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbmZ1bmN0aW9uIGVudHJ5RXhpc3RzKGFic29sdXRlUGF0aCkge1xuICByZXR1cm4gZnMuZXhpc3RzU3luYyhhYnNvbHV0ZVBhdGgpO1xufVxuXG5mdW5jdGlvbiBmaWxlRXhpc3RzKGFic29sdXRlRmlsZVBhdGgpIHtcbiAgbGV0IGZpbGVFeGlzdHMgPSBmYWxzZTtcbiAgXG4gIGNvbnN0IGFic29sdXRlUGF0aCA9IGFic29sdXRlRmlsZVBhdGgsIC8vL1xuICAgICAgICBlbnRyeUV4aXN0cyA9IGVudHJ5RXhpc3RzKGFic29sdXRlUGF0aCk7XG4gIFxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICBjb25zdCBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpO1xuICAgIFxuICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgIGZpbGVFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGZpbGVFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGlzRW50cnlGaWxlKGFic29sdXRlUGF0aCkge1xuICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoYWJzb2x1dGVQYXRoKSxcbiAgICAgIGVudHJ5RGlyZWN0b3J5ID0gc3RhdC5pc0RpcmVjdG9yeSgpLFxuICAgICAgZW50cnlGaWxlID0gIWVudHJ5RGlyZWN0b3J5O1xuXG4gIHJldHVybiBlbnRyeUZpbGU7XG59XG5cbmZ1bmN0aW9uIGRpcmVjdG9yeUV4aXN0cyhhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgbGV0IGRpcmVjdG9yeUV4aXN0cyA9IGZhbHNlO1xuXG4gIGNvbnN0IGFic29sdXRlUGF0aCA9IGFic29sdXRlRGlyZWN0b3J5UGF0aCwgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gZW50cnlFeGlzdHMoYWJzb2x1dGVQYXRoKTtcblxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICBjb25zdCBlbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVQYXRoKTtcblxuICAgIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgICAgZGlyZWN0b3J5RXhpc3RzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlyZWN0b3J5RXhpc3RzO1xufVxuXG5mdW5jdGlvbiBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlUGF0aCkge1xuICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoYWJzb2x1dGVQYXRoKSxcbiAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBzdGF0LmlzRGlyZWN0b3J5KCk7XG5cbiAgcmV0dXJuIGVudHJ5RGlyZWN0b3J5O1xufVxuXG5mdW5jdGlvbiBpc0RpcmVjdG9yeUVtcHR5KGFic29sdXRlRGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpLFxuICAgICAgICBzdWJFbnRyeU5hbWVzTGVuZ3RoID0gc3ViRW50cnlOYW1lcy5sZW5ndGgsXG4gICAgICAgIGRpcmVjdG9yeUVtcHR5ID0gKHN1YkVudHJ5TmFtZXNMZW5ndGggPT09IDApO1xuXG4gIHJldHVybiBkaXJlY3RvcnlFbXB0eTtcbn1cblxuZnVuY3Rpb24gcmVhZERpcmVjdG9yeShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgcmV0dXJuIHN1YkVudHJ5TmFtZXM7XG59XG5cbmZ1bmN0aW9uIHJlYWRGaWxlKGFic29sdXRlRmlsZVBhdGgsIGVuY29kaW5nID0gJ3V0ZjgnKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgZW5jb2Rpbmc6IGVuY29kaW5nXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoYWJzb2x1dGVGaWxlUGF0aCwgb3B0aW9ucyk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHdyaXRlRmlsZShhYnNvbHV0ZUZpbGVQYXRoLCBjb250ZW50KSB7XG4gIGZzLndyaXRlRmlsZVN5bmMoYWJzb2x1dGVGaWxlUGF0aCwgY29udGVudCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBlbnRyeUV4aXN0czogZW50cnlFeGlzdHMsXG4gIGZpbGVFeGlzdHM6IGZpbGVFeGlzdHMsXG4gIGlzRW50cnlGaWxlOiBpc0VudHJ5RmlsZSxcbiAgZGlyZWN0b3J5RXhpc3RzOiBkaXJlY3RvcnlFeGlzdHMsXG4gIGlzRW50cnlEaXJlY3Rvcnk6IGlzRW50cnlEaXJlY3RvcnksXG4gIGlzRGlyZWN0b3J5RW1wdHk6IGlzRGlyZWN0b3J5RW1wdHksXG4gIHJlYWREaXJlY3Rvcnk6IHJlYWREaXJlY3RvcnksXG4gIHJlYWRGaWxlOiByZWFkRmlsZSxcbiAgd3JpdGVGaWxlOiB3cml0ZUZpbGVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5ID0gcmVxdWlyZSgnLi9hcnJheScpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QgfSA9IGFycmF5O1xuXG5mdW5jdGlvbiBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCkge1xuICBjb25zdCBwb3NpdGlvbiA9IHBhdGguc2VhcmNoKC9eXFwuezEsMn1cXC8vKSxcbiAgICAgICAgcGF0aFJlbGF0aXZlUGF0aCA9IChwb3NpdGlvbiAhPT0gLTEpO1xuXG4gIHJldHVybiBwYXRoUmVsYXRpdmVQYXRoO1xufVxuXG5mdW5jdGlvbiBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoUmVsYXRpdmVQYXRoID0gaXNQYXRoUmVsYXRpdmVQYXRoKHBhdGgpLFxuICAgICAgICBwYXRoQWJzb2x1dGVQYXRoID0gIXBhdGhSZWxhdGl2ZVBhdGg7IC8vL1xuXG4gIHJldHVybiBwYXRoQWJzb2x1dGVQYXRoO1xufVxuXG5mdW5jdGlvbiBpc1BhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZShwYXRoKSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gcGF0aC5zZWFyY2goL15bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgcGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lID0gKHBvc2l0aW9uICE9PSAtMSk7XG5cbiAgcmV0dXJuIHBhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZnVuY3Rpb24gaXNUb3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluUGF0aCh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcGF0aCkge1xuICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lLnJlcGxhY2UoL1xcLyQvLCAnJyk7IC8vL1xuXG4gIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3RvcG1vc3REaXJlY3RvcnlOYW1lfSg/OlxcXFwvLispPyRgKSxcbiAgICAgICAgcG9zaXRpb24gPSBwYXRoLnNlYXJjaChyZWdFeHApLFxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluRmlsZVBhdGggPSAocG9zaXRpb24gIT09IC0xKTtcblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWVDb250YWluZWRJbkZpbGVQYXRoO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lUGF0aHMoZGlyZWN0b3J5UGF0aCwgcmVsYXRpdmVQYXRoKSB7XG4gIGxldCBhYnNvbHV0ZVBhdGggPSBudWxsO1xuXG4gIGNvbnN0IGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzID0gZGlyZWN0b3J5UGF0aC5zcGxpdCgnLycpLFxuICAgICAgICByZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyA9IHJlbGF0aXZlUGF0aC5zcGxpdCgnLycpO1xuXG4gIGxldCBmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPSBmaXJzdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyksXG4gICAgICBsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZTtcblxuICBpZiAoZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID09PSAnLicpIHtcbiAgICByZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcy5zaGlmdCgpO1xuICB9XG5cbiAgZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID0gZmlyc3QocmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMpO1xuICBsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSA9IGxhc3QoZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMpO1xuXG4gIHdoaWxlICgoZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID09PSAnLi4nKSAmJiAobGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICByZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcy5zaGlmdCgpO1xuICAgIGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzLnBvcCgpO1xuXG4gICAgZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID0gZmlyc3QocmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMpO1xuICAgIGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lID0gbGFzdChkaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lcyk7XG4gIH1cblxuICBpZiAobGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGFic29sdXRlRmlsZVBhdGhTdWJFbnRyeU5hbWVzID0gW10uY29uY2F0KGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzKS5jb25jYXQocmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMpO1xuXG4gICAgYWJzb2x1dGVQYXRoID0gYWJzb2x1dGVGaWxlUGF0aFN1YkVudHJ5TmFtZXMuam9pbignLycpO1xuICB9XG5cbiAgcmV0dXJuIGFic29sdXRlUGF0aDtcbn1cblxuZnVuY3Rpb24gY29uY2F0ZW5hdGVQYXRocyhwYXRoMSwgcGF0aDIpIHtcbiAgcGF0aDEgPSBwYXRoMS5yZXBsYWNlKC9cXC8kLywgJycpOyAgLy8vXG5cbiAgY29uc3QgY29tYmluZWRQYXRoID0gYCR7cGF0aDF9LyR7cGF0aDJ9YDtcblxuICByZXR1cm4gY29tYmluZWRQYXRoO1xufVxuXG5mdW5jdGlvbiBib3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IGJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4rXFwvKFteXFwvXStcXC8/KSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgYm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGJvdHRvbW1vc3ROYW1lO1xufVxuXG5mdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLispXFwvW15cXC9dK1xcLz8kLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBkaXJlY3RvcnlQYXRoID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiBkaXJlY3RvcnlQYXRoO1xufVxuXG5mdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXihbXlxcL10rKVxcLy4rJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmZ1bmN0aW9uIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvKF4uKylcXC9bXlxcL10rXFwvPyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lO1xufVxuXG5mdW5jdGlvbiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL15bXlxcL10rXFwvKC4rKSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc1BhdGhSZWxhdGl2ZVBhdGg6IGlzUGF0aFJlbGF0aXZlUGF0aCxcbiAgaXNQYXRoQWJzb2x1dGVQYXRoOiBpc1BhdGhBYnNvbHV0ZVBhdGgsXG4gIGlzUGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lOiBpc1BhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZSxcbiAgaXNUb3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluUGF0aDogaXNUb3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluUGF0aCxcbiAgY29tYmluZVBhdGhzOiBjb21iaW5lUGF0aHMsXG4gIGNvbmNhdGVuYXRlUGF0aHM6IGNvbmNhdGVuYXRlUGF0aHMsXG4gIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGg6IGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGg6IHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGg6IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aDogcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGg6IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZmlsZVN5c3RlbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9maWxlU3lzdGVtJyk7XG5cbmNvbnN0IHsgcmVhZEZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHBhcnNlRmlsZShmaWxlUGF0aCwgYXJncykge1xuICBjb25zdCBjb250ZW50ID0gcmVhZEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICBwYXJzZWRDb250ZW50ID0gcGFyc2VDb250ZW50KGNvbnRlbnQsIGFyZ3MpO1xuXG4gIHJldHVybiBwYXJzZWRDb250ZW50O1xufVxuXG5mdW5jdGlvbiBwYXJzZUNvbnRlbnQoY29udGVudCwgYXJncykge1xuICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoJ1xcbicpLFxuICAgICAgICBwYXJzZWRMaW5lcyA9IHBhcnNlTGluZXMobGluZXMsIGFyZ3MpLFxuICAgICAgICBwYXJzZWRDb250ZW50ID0gcGFyc2VkTGluZXMuam9pbignXFxuJyk7XG5cbiAgcmV0dXJuIHBhcnNlZENvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTGluZShsaW5lLCBhcmdzKSB7XG4gIGNvbnN0IHBhcnNlZExpbmUgPSBsaW5lLnJlcGxhY2UoL1xcJFxceyguKz8pXFx9L2csIGZ1bmN0aW9uKG1hdGNoLCB0b2tlbikge1xuICAgIGNvbnN0IHBhcnNlZFRva2VuID0gcGFyc2VUb2tlbih0b2tlbiwgYXJncyk7XG5cbiAgICByZXR1cm4gcGFyc2VkVG9rZW47XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWRMaW5lO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGFyc2VGaWxlOiBwYXJzZUZpbGUsXG4gIHBhcnNlQ29udGVudDogcGFyc2VDb250ZW50LFxuICBwYXJzZUxpbmU6IHBhcnNlTGluZVxufTtcblxuZnVuY3Rpb24gcGFyc2VMaW5lcyhsaW5lcywgYXJncykge1xuICBjb25zdCBwYXJzZWRMaW5lcyA9IGxpbmVzLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgY29uc3QgcGFyc2VkTGluZSA9IHBhcnNlTGluZShsaW5lLCBhcmdzKTtcblxuICAgIHJldHVybiBwYXJzZWRMaW5lO1xuICB9KTtcblxuICByZXR1cm4gcGFyc2VkTGluZXM7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVG9rZW4odG9rZW4sIGFyZ3MpIHtcbiAgbGV0IHBhcnNlZFRva2VuID0gJyc7XG5cbiAgaWYgKGFyZ3MuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG4gICAgcGFyc2VkVG9rZW4gPSBhcmdzW3Rva2VuXTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWRUb2tlbjtcbn1cbiJdfQ==
