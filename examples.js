(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util');

var CommentTokens = function () {
  function CommentTokens() {
    _classCallCheck(this, CommentTokens);
  }

  _createClass(CommentTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrRemainingContent, line, context) {
      var inComment = false; ///

      return inComment;
    }
  }]);

  return CommentTokens;
}();

module.exports = CommentTokens;

},{"../util":30}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer');

var BasicLexer = function (_CommonLexer) {
  _inherits(BasicLexer, _CommonLexer);

  function BasicLexer() {
    _classCallCheck(this, BasicLexer);

    return _possibleConstructorReturn(this, (BasicLexer.__proto__ || Object.getPrototypeOf(BasicLexer)).apply(this, arguments));
  }

  _createClass(BasicLexer, null, [{
    key: 'getSignificantTokenTypes',
    value: function getSignificantTokenTypes() {
      var significantTokenTypes = []; ///

      return significantTokenTypes;
    }
  }, {
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {
      var rules = Rules.fromGrammar(grammar),
          basicLexer = new BasicLexer(rules, Line);

      return basicLexer;
    }
  }]);

  return BasicLexer;
}(CommonLexer);

module.exports = BasicLexer;

},{"../common/lexer":5,"../common/rules":8,"./line":3}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentTokens = require('./commentTokens'),
    CommonLine = require('../common/line'),
    StringTokens = require('../common/stringTokens'),
    WhitespaceTokens = require('../common/whitespaceTokens');

var Line = function (_CommonLine) {
      _inherits(Line, _CommonLine);

      function Line() {
            _classCallCheck(this, Line);

            return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
      }

      _createClass(Line, null, [{
            key: 'fromContent',
            value: function fromContent(content, context, rules) {
                  return _get(Line.__proto__ || Object.getPrototypeOf(Line), 'fromContent', this).call(this, Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens);
            }
      }]);

      return Line;
}(CommonLine);

module.exports = Line;

},{"../common/line":6,"../common/stringTokens":10,"../common/whitespaceTokens":18,"./commentTokens":1}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = function () {
  function Context() {
    var minimumLinesLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.POSITIVE_INFINITY;
    var previousLineInComment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var followingLineInComment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, Context);

    this.minimumLinesLength = minimumLinesLength;
    this.previousLineInComment = previousLineInComment;
    this.followingLineInComment = followingLineInComment;
  }

  _createClass(Context, [{
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
        if (this.followingLineInComment === null) {
          terminate = true;
        }

        if (this.previousLineInComment === this.followingLineInComment) {
          terminate = true;
        }
      }

      return terminate;
    }
  }]);

  return Context;
}();

module.exports = Context;

},{}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
    util = require('../util'),
    Rules = require('./rules'),
    Context = require('./context'),
    SignificantToken = require('./token/significant');

var CommonLexer = function () {
  function CommonLexer(rules, Line) {
    _classCallCheck(this, CommonLexer);

    this.rules = rules;
    this.Line = Line;
  }

  _createClass(CommonLexer, [{
    key: 'linesFromContents',
    value: function linesFromContents(contents) {
      var firstLineIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Context();

      var lines = [];

      var index = firstLineIndex,
          content = contents[index];

      while (content !== undefined) {
        var length = index - firstLineIndex,
            terminate = context.shouldTerminate(length);

        if (terminate) {
          break;
        }

        var line = this.Line.fromContent(content, context, this.rules);

        lines.push(line);

        content = contents[++index];
      }

      return lines;
    }
  }], [{
    key: 'rulesFromGrammar',
    value: function rulesFromGrammar(grammar) {
      return Rules.fromGrammar(grammar);
    }
  }, {
    key: 'significantTokenTypesFromGrammar',
    value: function significantTokenTypesFromGrammar(grammar) {
      var significantTokenTypes = Object.keys(SignificantToken.types);

      var grammarTypes = grammar.map(function (grammarEntry) {
        var type = util.typeFromGrammarEntry(grammarEntry),
            grammarType = type; ///

        return grammarType;
      });

      significantTokenTypes = significantTokenTypes.concat(grammarTypes); ///

      return significantTokenTypes;
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;

},{"../util":30,"./context":4,"./line":6,"./rules":8,"./token/significant":13}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    SignificantTokens = require('./significantTokens');

var Line = function () {
  function Line(content) {
    _classCallCheck(this, Line);

    this.content = content;

    this.tokens = undefined;

    this.inComment = undefined;
  }

  _createClass(Line, [{
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getTokens',
    value: function getTokens() {
      return this.tokens;
    }
  }, {
    key: 'isInComment',
    value: function isInComment() {
      return this.inComment;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var html = this.tokens.reduce(function (html, token) {
        var tokenHTML = token.getHTML();

        html += tokenHTML;

        return html;
      }, '');

      html += '\n';

      return html;
    }
  }, {
    key: 'setTokens',
    value: function setTokens(tokens) {
      this.tokens = tokens;
    }
  }, {
    key: 'setInComment',
    value: function setInComment(inComment) {
      this.inComment = inComment;
    }
  }, {
    key: 'pushToken',
    value: function pushToken(token) {
      this.tokens.push(token);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens) {
      var line = new Line(content),
          tokensOrContents = [content],
          inComment = CommentTokens.pass(tokensOrContents, line, context);

      StringTokens.pass(tokensOrContents, line);
      WhitespaceTokens.pass(tokensOrContents, line);

      var tokens = SignificantTokens.pass(tokensOrContents, line, rules);

      line.setTokens(tokens);

      line.setInComment(inComment);

      return line;
    }
  }]);

  return Line;
}();

module.exports = Line;

},{"../util":30,"./significantTokens":9}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignificantToken = require('../common/token/significant');

var Rule = function () {
  function Rule(type, regExp) {
    _classCallCheck(this, Rule);

    this.type = type;
    this.regExp = regExp;
  }

  _createClass(Rule, [{
    key: 'significantTokenPositionWithinContent',
    value: function significantTokenPositionWithinContent(content) {
      var significantTokenPosition = -1;

      var matches = content.match(this.regExp);

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
      var matches = content.match(this.regExp),
          firstMatch = first(matches);

      content = firstMatch; ///

      var significantToken = SignificantToken.fromContentLineAndType(content, line, this.type);

      return significantToken;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function first(array) {
  return array[0];
}

},{"../common/token/significant":13}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    util = require('../util');

var Rules = function () {
  function Rules(array) {
    _classCallCheck(this, Rules);

    this.array = array;
  }

  _createClass(Rules, [{
    key: 'getRule',
    value: function getRule(depth) {
      var rule = this.array[depth] || null; ///

      return rule;
    }
  }], [{
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {
      var array = grammar.map(function (grammarEntry) {
        var type = util.typeFromGrammarEntry(grammarEntry),
            regExp = util.regExpFromGrammarEntry(grammarEntry),
            rule = new Rule(type, regExp);

        return rule;
      }),
          rules = new Rules(array);

      return rules;
    }
  }]);

  return Rules;
}();

module.exports = Rules;

},{"../util":30,"./rule":7}],9:[function(require,module,exports){
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
      throw new Error('There is no rule to parse the content \'' + content + '\' on line ' + line);
    }
  }

  return significantTokens;
}

},{}],10:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tokens = require('./tokens'),
    StringToken = require('./token/significant/string');

var StringTokens = function () {
  function StringTokens() {
    _classCallCheck(this, StringTokens);
  }

  _createClass(StringTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line) {
      Tokens.pass(tokensOrContents, line, StringToken);
    }
  }]);

  return StringTokens;
}();

module.exports = StringTokens;

},{"./token/significant/string":15,"./tokens":17}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../../util');

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
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return NonSignificantToken.clone(this, startPosition, endPosition, NonSignificantToken);
    }
  }], [{
    key: 'clone',
    value: function clone(token) {
      var startPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var endPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : token.getLength();
      var Class = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : NonSignificantToken;

      var clonedNonSignificantToken = null;

      if (startPosition !== endPosition) {
        var line = token.getLine();

        var content = token.getContent();

        content = content.substring(startPosition, endPosition);

        clonedNonSignificantToken = Class.fromContentAndLine(content, line, Class);
      }

      return clonedNonSignificantToken;
    }
  }, {
    key: 'fromNonSignificantToken',
    value: function fromNonSignificantToken(nonSignificantToken) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NonSignificantToken;

      var content = nonSignificantToken.getContent(),
          line = nonSignificantToken.getLine();

      nonSignificantToken = Class.fromContentAndLine(content, line, Class);

      return nonSignificantToken;
    }
  }, {
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NonSignificantToken;

      var html = Class.htmlFromContent(content),
          token = new Class(content, line, html);

      return token;
    }
  }, {
    key: 'htmlFromContent',
    value: function htmlFromContent(content) {
      var sanitisedContent = util.sanitiseContent(content),
          html = sanitisedContent;

      return html;
    }
  }]);

  return NonSignificantToken;
}();

module.exports = NonSignificantToken;

},{"../../util":30}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('../../../util'),
    NonSignificantToken = require('../nonSignificant');

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
      return CommentToken.clone(this, startPosition, endPosition, CommentToken);
    }
  }], [{
    key: 'clone',
    value: function clone(token, startPosition, endPosition) {
      var Class = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : CommentToken;
      return Token.clone(token, startPosition, endPosition, Class);
    }
  }, {
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CommentToken;
      return Token.fromContentAndLine(content, line, Class);
    }
  }, {
    key: 'htmlFromContent',
    value: function htmlFromContent(content) {
      var sanitisedContent = util.sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      html = '<span class="comment">' + innerHTML + '</span>';

      return html;
    }
  }]);

  return CommentToken;
}(NonSignificantToken);

module.exports = CommentToken;

},{"../../../util":30,"../nonSignificant":11}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../../util');

var SignificantToken = function () {
  function SignificantToken(content, line, type, innerHTML) {
    _classCallCheck(this, SignificantToken);

    this.content = content;
    this.line = line;
    this.type = type;
    this.innerHTML = innerHTML;

    this.error = undefined; ///
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
    key: 'getHTML',
    value: function getHTML() {
      var className = this.error === true ? 'error' : this.type,
          html = '<span class="' + className + '">' + this.innerHTML + '</span>';

      return html;
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.content.length; ///
    }
  }, {
    key: 'setError',
    value: function setError(error) {
      this.error = error;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(this, startPosition, endPosition, SignificantToken);
    }
  }], [{
    key: 'clone',
    value: function clone(token) {
      var startPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var endPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : token.getLength();
      var Class = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : SignificantToken;

      var clonedSignificantToken = null;

      if (startPosition !== endPosition) {
        var line = token.getLine(),
            type = token.getType();

        var content = token.getContent();

        content = content.substring(startPosition, endPosition);

        clonedSignificantToken = Class.fromContentLineAndType(content, line, type);
      }

      return clonedSignificantToken;
    }
  }, {
    key: 'fromSignificantToken',
    value: function fromSignificantToken(significantToken) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SignificantToken;

      var content = significantToken.getContent(),
          line = significantToken.getLine(),
          type = significantToken.getType();

      significantToken = Class.fromContentLineAndType(content, line, type);

      return significantToken;
    }
  }, {
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      var Class = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : SignificantToken;

      var innerHTML = Class.innerHTMLFromContent(content),
          significantToken = new Class(content, line, type, innerHTML);

      return significantToken;
    }
  }, {
    key: 'innerHTMLFromContent',
    value: function innerHTMLFromContent(content) {
      var sanitisedContent = util.sanitiseContent(content),
          innerHTML = sanitisedContent; ///

      return innerHTML;
    }
  }]);

  return SignificantToken;
}();

SignificantToken.types = {
  string: 'string',
  endOfLine: 'endOfLine',
  whitespace: 'whitespace'
};

module.exports = SignificantToken;

},{"../../util":30}],14:[function(require,module,exports){
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
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(this, startPosition, endPosition, EndOfLineToken);
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var html = '';

      return html;
    }
  }], [{
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      return SignificantToken.fromContentLineAndType(content, line, type, EndOfLineToken);
    }
  }, {
    key: 'fromLine',
    value: function fromLine(line) {
      var content = '',
          type = SignificantToken.types.endOfLine,
          endOfLineToken = EndOfLineToken.fromContentLineAndType(content, line, type);

      return endOfLineToken;
    }
  }]);

  return EndOfLineToken;
}(SignificantToken);

module.exports = EndOfLineToken;

},{"../significant":13}],15:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('../significant');

var StringToken = function (_SignificantToken) {
  _inherits(StringToken, _SignificantToken);

  function StringToken() {
    _classCallCheck(this, StringToken);

    return _possibleConstructorReturn(this, (StringToken.__proto__ || Object.getPrototypeOf(StringToken)).apply(this, arguments));
  }

  _createClass(StringToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(this, startPosition, endPosition, StringToken);
    }
  }], [{
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      return SignificantToken.fromContentLineAndType(content, line, type, StringToken);
    }
  }, {
    key: 'fromWithinContentAndLine',
    value: function fromWithinContentAndLine(content, line) {
      var stringToken = null;

      var matches = content.match(/("[^"]*")/);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        var type = SignificantToken.types.string;

        stringToken = StringToken.fromContentLineAndType(content, line, type);
      }

      return stringToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      var position = content.search(/"[^"]*"/);

      return position;
    }
  }]);

  return StringToken;
}(SignificantToken);

module.exports = StringToken;

function first(array) {
  return array[0];
}

},{"../significant":13}],16:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('../significant');

var WhitespaceToken = function (_SignificantToken) {
  _inherits(WhitespaceToken, _SignificantToken);

  function WhitespaceToken() {
    _classCallCheck(this, WhitespaceToken);

    return _possibleConstructorReturn(this, (WhitespaceToken.__proto__ || Object.getPrototypeOf(WhitespaceToken)).apply(this, arguments));
  }

  _createClass(WhitespaceToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(this, startPosition, endPosition, WhitespaceToken);
    }
  }], [{
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      return SignificantToken.fromContentLineAndType(content, line, type, WhitespaceToken);
    }
  }, {
    key: 'fromWithinContentAndLine',
    value: function fromWithinContentAndLine(content, line) {
      var whitespaceToken = null;

      var matches = content.match(/([\t ]+)/);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        var type = SignificantToken.types.whitespace;

        whitespaceToken = WhitespaceToken.fromContentLineAndType(content, line, type);
      }

      return whitespaceToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      var position = content.search(/[\t ]+/);

      return position;
    }
  }]);

  return WhitespaceToken;
}(SignificantToken);

module.exports = WhitespaceToken;

function first(array) {
  return array[0];
}

},{"../significant":13}],17:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util');

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

          util.spliceArray(tokensOrContents, start, 1, tokensOrRemainingContent);

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

},{"../util":30}],18:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tokens = require('./tokens'),
    WhitespaceToken = require('./token/significant/whitespace');

var WhitespaceTokens = function () {
  function WhitespaceTokens() {
    _classCallCheck(this, WhitespaceTokens);
  }

  _createClass(WhitespaceTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line) {
      return Tokens.pass(tokensOrContents, line, WhitespaceToken);
    }
  }]);

  return WhitespaceTokens;
}();

module.exports = WhitespaceTokens;

},{"./token/significant/whitespace":16,"./tokens":17}],19:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easylayout = require('easy-layout');

var Textarea = easy.Textarea;
var SizeableElement = easylayout.SizeableElement;
var VerticalSplitter = easylayout.VerticalSplitter;
var options = easylayout.options;
var TO_THE_RIGHT_OF = options.TO_THE_RIGHT_OF;


var leftColumnSelector = '#leftColumn',
    contentTextareaSelector = 'textArea#content',
    tokensTextareaSelector = 'textArea#tokens',
    contentTextarea = new Textarea(contentTextareaSelector),
    tokensTextarea = new Textarea(tokensTextareaSelector),
    leftColumn = new SizeableElement(leftColumnSelector);

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

var Example = function () {
  function Example() {
    _classCallCheck(this, Example);
  }

  _createClass(Example, null, [{
    key: 'contentTextareaOnKeyUp',
    value: function contentTextareaOnKeyUp(handler) {
      contentTextarea.on('keyup', handler);
    }
  }, {
    key: 'updateTokens',
    value: function updateTokens(lexer, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
      try {
        var contentTextareaValue = contentTextarea.getValue(),
            content = contentTextareaValue,
            ///
        contents = content.split(/\n/),
            lines = lexer.linesFromContents(contents, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment),
            htmls = lines.reduce(function (htmls, line, index) {
          var lineHTML = line.getHTML(),
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

},{"easy":38,"easy-layout":31}],20:[function(require,module,exports){
'use strict';

module.exports = {
  BasicExample: require('./examples/basic'),
  FlorenceExample: require('./examples/florence')
};

},{"./examples/basic":21,"./examples/florence":22}],21:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy');

var Example = require('../example'),
    BasicLexer = require('../basic/lexer');

var terminalSymbolsRegExpPatternTextareaSelector = 'textarea#terminalSymbolsRegExpPattern',
    terminalSymbolsRegExpPattern = '\\+|\\-|\\*|\\/|\\(|\\)|\\d+';

var Textarea = easy.Textarea;


var terminalSymbolsRegExpPatternTextarea = void 0,
    lexer = null;

var BasicExample = function () {
  function BasicExample() {
    _classCallCheck(this, BasicExample);
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      terminalSymbolsRegExpPatternTextarea = new Textarea(terminalSymbolsRegExpPatternTextareaSelector);

      var terminalSymbolsRegExpPatternTextareaValue = terminalSymbolsRegExpPattern; ///

      terminalSymbolsRegExpPatternTextarea.setValue(terminalSymbolsRegExpPatternTextareaValue);

      terminalSymbolsRegExpPatternTextarea.onChange(function () {
        update();
      });

      Example.contentTextareaOnKeyUp(function () {
        update();
      });

      update();
    }
  }]);

  return BasicExample;
}();

module.exports = BasicExample;

function update() {
  updateLexer();

  if (lexer !== null) {
    Example.updateTokens(lexer);
  } else {
    Example.clearTokens();
  }
}

function updateLexer() {
  var terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternTextarea.getValue(),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue,
      ///
  terminalSymbolsRegExpPatternIsValid = regExpPatternIsValid(terminalSymbolsRegExpPattern);

  if (terminalSymbolsRegExpPatternIsValid) {
    var terminalSymbolsRegExp = new RegExp(terminalSymbolsRegExpPattern),
        grammar = [{ terminalSymbol: terminalSymbolsRegExp }];

    lexer = BasicLexer.fromGrammar(grammar);

    terminalSymbolsRegExpPatternTextarea.removeClass('error');
  } else {
    terminalSymbolsRegExpPatternTextarea.addClass('error');

    lexer = null;
  }
}

function regExpPatternIsValid(regExpPattern) {
  var valid = true;

  try {
    new RegExp(regExpPattern);
  } catch (error) {
    valid = false;
  }

  return valid;
}

},{"../basic/lexer":2,"../example":19,"easy":38}],22:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Example = require('../example'),
    FlorenceLexer = require('../florence/lexer');

var florenceLexer = FlorenceLexer.fromNothing();

var FlorenceExample = function () {
  function FlorenceExample() {
    _classCallCheck(this, FlorenceExample);
  }

  _createClass(FlorenceExample, null, [{
    key: 'run',
    value: function run() {
      var firstLineIndex = 0,
          minimumLinesLength = 2,
          previousLineInComment = false,
          followingLineInComment = false;

      Example.contentTextareaOnKeyUp(function () {
        Example.updateTokens(florenceLexer, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment);
      });

      Example.updateTokens(florenceLexer, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment);
    }
  }]);

  return FlorenceExample;
}();

module.exports = FlorenceExample;

},{"../example":19,"../florence/lexer":25}],23:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    EndOfCommentToken = require('./token/endOfComment'),
    StartOfCommentToken = require('./token/startOfComment'),
    MiddleOfCommentToken = require('./token/middleOfComment');

var CommentTokens = function () {
          function CommentTokens() {
                    _classCallCheck(this, CommentTokens);
          }

          _createClass(CommentTokens, null, [{
                    key: 'pass',
                    value: function pass(tokensOrContents, line, context) {
                              var content = tokensOrContents.pop(),
                                  commentToken = void 0,
                                  commentTokenLength = void 0,
                                  previousLineInComment = context.isPreviousLineInComment(),
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
                                                            var middleOfCommentTokenLength = util.minimumBarMinusOne(endOfCommentTokenPositionWithinContent, contentLength);

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
                                                            contentLength = util.minimumBarMinusOne(startOfCommentTokenPositionWithinContent, contentLength);

                                                            var remainingContent = content.substring(contentLength);

                                                            content = content.substring(0, contentLength);

                                                            tokensOrContents.push(content);

                                                            content = remainingContent;
                                                  }
                                        }
                              }

                              previousLineInComment = inComment; ///

                              context.setPreviousLineInComment(previousLineInComment);

                              return inComment;
                    }
          }]);

          return CommentTokens;
}();

module.exports = CommentTokens;

},{"../util":30,"./token/endOfComment":27,"./token/middleOfComment":28,"./token/startOfComment":29}],24:[function(require,module,exports){
'use strict';

var basic_latin = '\\u{21}-\\u{7E}',
    latin1_supplement = '\\u{A1}-\\u{FF}',
    mathematical_operators = '\\u{2200}-\\u{22FF}',
    supplemental_mathematical_operators = '\\u{2A00}-\\u{2AFF}',
    miscellaneous_technical = '\\u{2300}-\\u{23ff}',
    mathematical_alphanumeric_symbols = '\\u{1D400}-\\u{1D7FF}',
    unicode_character = '\n' + basic_latin + '\n' + latin1_supplement + '\n' + mathematical_operators + '\n' + supplemental_mathematical_operators + '\n' + miscellaneous_technical + '\n' + mathematical_alphanumeric_symbols + '\n',
    unicode_characters = '[' + unicode_character + ']+',
    unassigned = unicode_characters; ///

var grammar = [{ special: /,|;|\{|\}|=|:|\(|\)|\.\.\.|\.\./ }, { include: /^include$/ }, { keyword: /^(?:Rule|Axiom|Theorem|Lemma|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|Variables|Variable|Constructors|Constructor|Type|Object|Definition|from|by|let|is|not|in|free|defined|undefined)$/ }, { unassigned: new RegExp('^' + unassigned + '$', 'u') }];

module.exports = grammar;

},{}],25:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    grammar = require('./grammar'),
    Context = require('../common/context'),
    CommonLexer = require('../common/lexer');

var FlorenceLexer = function (_CommonLexer) {
  _inherits(FlorenceLexer, _CommonLexer);

  function FlorenceLexer() {
    _classCallCheck(this, FlorenceLexer);

    return _possibleConstructorReturn(this, (FlorenceLexer.__proto__ || Object.getPrototypeOf(FlorenceLexer)).apply(this, arguments));
  }

  _createClass(FlorenceLexer, [{
    key: 'linesFromContents',
    value: function linesFromContents(contents, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
      var context = new Context(minimumLinesLength, previousLineInComment, followingLineInComment),
          lines = _get(FlorenceLexer.prototype.__proto__ || Object.getPrototypeOf(FlorenceLexer.prototype), 'linesFromContents', this).call(this, contents, firstLineIndex, context);

      return lines;
    }
  }], [{
    key: 'getSignificantTokenTypes',
    value: function getSignificantTokenTypes() {
      var significantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar);

      return significantTokenTypes;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var rules = CommonLexer.rulesFromGrammar(grammar),
          florenceLexer = new FlorenceLexer(rules, Line);

      return florenceLexer;
    }
  }]);

  return FlorenceLexer;
}(CommonLexer);

module.exports = FlorenceLexer;

},{"../common/context":4,"../common/lexer":5,"./grammar":24,"./line":26}],26:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentTokens = require('./commentTokens'),
    CommonLine = require('../common/line'),
    StringTokens = require('../common/stringTokens'),
    WhitespaceTokens = require('../common/whitespaceTokens'),
    EndOfLineToken = require('../common/token/significant/endOfLine');

var Line = function (_CommonLine) {
  _inherits(Line, _CommonLine);

  function Line() {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
  }

  _createClass(Line, null, [{
    key: 'fromContent',
    value: function fromContent(content, context, rules) {
      var line = _get(Line.__proto__ || Object.getPrototypeOf(Line), 'fromContent', this).call(this, Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens),
          lineInComment = line.isInComment();

      if (!lineInComment) {
        var endOfLineToken = EndOfLineToken.fromLine(line);

        line.pushToken(endOfLineToken);
      }

      return line;
    }
  }]);

  return Line;
}(CommonLine);

module.exports = Line;

},{"../common/line":6,"../common/stringTokens":10,"../common/token/significant/endOfLine":14,"../common/whitespaceTokens":18,"./commentTokens":23}],27:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../../common/token/nonSignificant/comment');

var EndOfCommentToken = function (_CommentToken) {
  _inherits(EndOfCommentToken, _CommentToken);

  function EndOfCommentToken() {
    _classCallCheck(this, EndOfCommentToken);

    return _possibleConstructorReturn(this, (EndOfCommentToken.__proto__ || Object.getPrototypeOf(EndOfCommentToken)).apply(this, arguments));
  }

  _createClass(EndOfCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return CommentToken.clone(this, startPosition, endPosition, EndOfCommentToken);
    }
  }], [{
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      return CommentToken.fromContentAndLine(content, line, EndOfCommentToken);
    }
  }, {
    key: 'fromWithinContentAndLine',
    value: function fromWithinContentAndLine(content, line) {
      var endOfCommentToken = null;

      var matches = content.match(/^\*\//);

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
      var position = content.search(/\*\//);

      return position;
    }
  }]);

  return EndOfCommentToken;
}(CommentToken);

module.exports = EndOfCommentToken;

function first(array) {
  return array[0];
}

},{"../../common/token/nonSignificant/comment":12}],28:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../../common/token/nonSignificant/comment');

var MiddleOfCommentToken = function (_CommentToken) {
  _inherits(MiddleOfCommentToken, _CommentToken);

  function MiddleOfCommentToken() {
    _classCallCheck(this, MiddleOfCommentToken);

    return _possibleConstructorReturn(this, (MiddleOfCommentToken.__proto__ || Object.getPrototypeOf(MiddleOfCommentToken)).apply(this, arguments));
  }

  _createClass(MiddleOfCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return CommentToken.clone(this, startPosition, endPosition, MiddleOfCommentToken);
    }
  }], [{
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line, length) {
      content = content.substr(0, length); ///

      var middleOfCommentToken = CommentToken.fromContentAndLine(content, line, MiddleOfCommentToken);

      return middleOfCommentToken;
    }
  }]);

  return MiddleOfCommentToken;
}(CommentToken);

module.exports = MiddleOfCommentToken;

},{"../../common/token/nonSignificant/comment":12}],29:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../../common/token/nonSignificant/comment');

var StartOfCommentToken = function (_CommentToken) {
  _inherits(StartOfCommentToken, _CommentToken);

  function StartOfCommentToken() {
    _classCallCheck(this, StartOfCommentToken);

    return _possibleConstructorReturn(this, (StartOfCommentToken.__proto__ || Object.getPrototypeOf(StartOfCommentToken)).apply(this, arguments));
  }

  _createClass(StartOfCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return CommentToken.clone(this, startPosition, endPosition, StartOfCommentToken);
    }
  }], [{
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      return CommentToken.fromContentAndLine(content, line, StartOfCommentToken);
    }
  }, {
    key: 'fromWithinContentAndLine',
    value: function fromWithinContentAndLine(content, line) {
      var startOfCommentToken = null;

      var matches = content.match(/^\/\*/);

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
      var position = content.search(/\/\*/);

      return position;
    }
  }]);

  return StartOfCommentToken;
}(CommentToken);

module.exports = StartOfCommentToken;

function first(array) {
  return array[0];
}

},{"../../common/token/nonSignificant/comment":12}],30:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = function () {
  function util() {
    _classCallCheck(this, util);
  }

  _createClass(util, null, [{
    key: 'minimumBarMinusOne',
    value: function minimumBarMinusOne() {
      var values = Array.prototype.slice.call(arguments),
          minimumBarMinusOne = values.reduce(function (minimumBarMinusOne, value) {
        if (value > -1) {
          minimumBarMinusOne = minimumBarMinusOne !== null ? Math.min(minimumBarMinusOne, value) : value;
        }

        return minimumBarMinusOne;
      }, null);

      return minimumBarMinusOne;
    }
  }, {
    key: 'spliceArray',
    value: function spliceArray(array, start, deleteCount, itemsArray) {
      var args = [start, deleteCount].concat(itemsArray);

      Array.prototype.splice.apply(array, args);
    }
  }, {
    key: 'indexOf',
    value: function indexOf(array, element) {
      var index = undefined; ///

      array.some(function (arrayElement, arrayIndex) {
        if (element === arrayElement) {
          index = arrayIndex;

          return true;
        } else {
          return false;
        }
      });

      return index;
    }
  }, {
    key: 'typeFromGrammarEntry',
    value: function typeFromGrammarEntry(grammarEntry) {
      var grammarEntryKeys = Object.keys(grammarEntry),
          firstGrammarEntryKey = first(grammarEntryKeys),
          type = firstGrammarEntryKey; ///

      return type;
    }
  }, {
    key: 'regExpFromGrammarEntry',
    value: function regExpFromGrammarEntry(grammarEntry) {
      var type = util.typeFromGrammarEntry(grammarEntry),
          regExp = grammarEntry[type];

      return regExp;
    }
  }, {
    key: 'findRegExpFromType',
    value: function findRegExpFromType(grammar, type) {
      var entry = grammar.find(function (entry) {
        var grammarType = util.typeFromGrammarEntry(entry),
            found = grammarType === type;

        return found;
      }),
          regExp = util.regExpFromGrammarEntry(entry);

      return regExp;
    }
  }, {
    key: 'sanitiseContent',
    value: function sanitiseContent(content) {
      var sanitisedContent = content.replace(/&/, '&amp;').replace(/</, '&lt;').replace(/>/, '&gt;');

      return sanitisedContent;
    }
  }]);

  return util;
}();

module.exports = util;

function first(array) {
  return array[0];
}

},{}],31:[function(require,module,exports){
'use strict';

module.exports = {
  options: require('./lib/options'),
  SizeableElement: require('./lib/sizeableElement'),
  VerticalSplitter: require('./lib/splitter/vertical'),
  HorizontalSplitter: require('./lib/splitter/horizontal')
};

},{"./lib/options":33,"./lib/sizeableElement":34,"./lib/splitter/horizontal":36,"./lib/splitter/vertical":37}],32:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    Body = easy.Body;

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

},{"easy":38}],33:[function(require,module,exports){
'use strict';

var ABOVE = +1,
    BELOW = -1,
    TO_THE_LEFT_OF = +1,
    TO_THE_RIGHT_OF = -1,
    options = {
  situated: {
    ABOVE: ABOVE,
    BELOW: BELOW,
    TO_THE_LEFT_OF: TO_THE_LEFT_OF,
    TO_THE_RIGHT_OF: TO_THE_RIGHT_OF
  },
  ESCAPE_KEY_STOPS_DRAGGING: 'ESCAPE_KEY_STOPS_DRAGGING'
};

module.exports = options;

},{}],34:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
    Div = easy.Div;

var SizeableElement = function (_Div) {
  _inherits(SizeableElement, _Div);

  function SizeableElement() {
    _classCallCheck(this, SizeableElement);

    return _possibleConstructorReturn(this, (SizeableElement.__proto__ || Object.getPrototypeOf(SizeableElement)).apply(this, arguments));
  }

  _createClass(SizeableElement, [{
    key: 'setWidth',
    value: function setWidth(width) {
      var minimumWidth = this.getMinimumWidth(),
          maximumWidth = this.getMaximumWidth();

      if (minimumWidth !== undefined) {
        width = Math.max(width, minimumWidth);
      }
      if (maximumWidth !== undefined) {
        width = Math.min(width, maximumWidth);
      }

      _get(SizeableElement.prototype.__proto__ || Object.getPrototypeOf(SizeableElement.prototype), 'setWidth', this).call(this, width);
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      var minimumHeight = this.getMinimumHeight(),
          maximumHeight = this.getMaximumHeight();

      if (minimumHeight !== undefined) {
        height = Math.max(height, minimumHeight);
      }
      if (maximumHeight !== undefined) {
        height = Math.min(height, maximumHeight);
      }

      _get(SizeableElement.prototype.__proto__ || Object.getPrototypeOf(SizeableElement.prototype), 'setHeight', this).call(this, height);
    }
  }, {
    key: 'getMinimumWidth',
    value: function getMinimumWidth() {
      var minWidth = this.css('min-width'),
          minimumWidth = inPixels(minWidth);

      return minimumWidth;
    }
  }, {
    key: 'getMinimumHeight',
    value: function getMinimumHeight() {
      var minHeight = this.css('min-height'),
          minimumHeight = inPixels(minHeight);

      return minimumHeight;
    }
  }, {
    key: 'getMaximumWidth',
    value: function getMaximumWidth() {
      var maxWidth = this.css('max-width'),
          maximumWidth = inPixels(maxWidth);

      return maximumWidth;
    }
  }, {
    key: 'getMaximumHeight',
    value: function getMaximumHeight() {
      var maxHeight = this.css('max-height'),
          maximumHeight = inPixels(maxHeight);

      return maximumHeight;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Div.fromProperties(SizeableElement, properties);
    }
  }]);

  return SizeableElement;
}(Div);

module.exports = SizeableElement;

function inPixels(quantity) {
  var pixels = void 0;

  var matches = quantity.match(/([0-9]*)px$/);

  if (matches !== null) {
    var secondMatch = second(matches);

    pixels = secondMatch; ///
  }

  return pixels;
}

function second(array) {
  return array[1];
}

},{"easy":38}],35:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
    window = easy.window,
    Element = easy.Element;


var options = require('./options');

var ESCAPE_KEYCODE = 27;

var Splitter = function (_Element) {
  _inherits(Splitter, _Element);

  function Splitter(selector, situated, sizeableElement, dragHandler) {
    _classCallCheck(this, Splitter);

    var _this = _possibleConstructorReturn(this, (Splitter.__proto__ || Object.getPrototypeOf(Splitter)).call(this, selector));

    _this.situated = situated;
    _this.sizeableElement = sizeableElement;
    _this.dragHandler = dragHandler;

    _this.disabled = false;

    _this.dragging = false;

    window.on('mouseup blur', _this.mouseUp.bind(_this)); ///

    window.onMouseMove(_this.mouseMove.bind(_this));

    _this.onMouseDown(_this.mouseDown.bind(_this));
    _this.onMouseOver(_this.mouseOver.bind(_this));
    _this.onMouseOut(_this.mouseOut.bind(_this));

    _this.options = {};
    return _this;
  }

  _createClass(Splitter, [{
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
    key: 'hasOption',
    value: function hasOption(option) {
      option = this.options[option] === true; ///

      return option;
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.disabled = false;
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.disabled = true;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.disabled;
    }
  }, {
    key: 'onDrag',
    value: function onDrag(dragHandler) {
      this.dragHandler = dragHandler;
    }
  }, {
    key: 'startDragging',
    value: function startDragging() {
      var escapeKeyStopsDragging = this.hasOption(options.ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDragging) {
        window.on('keydown', this.keyDownHandler.bind(this));
      }

      this.dragging = true;
    }
  }, {
    key: 'stopDragging',
    value: function stopDragging() {
      var escapeKeyStopsDragging = this.hasOption(options.ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDragging) {
        window.off('keydown', this.keyDownHandler.bind(this));
      }

      this.dragging = false;
    }
  }, {
    key: 'isDragging',
    value: function isDragging() {
      return this.dragging;
    }
  }, {
    key: 'keyDownHandler',
    value: function keyDownHandler(event) {
      var keyCode = event.keyCode;

      if (keyCode === ESCAPE_KEYCODE) {
        var dragging = this.isDragging();

        if (dragging) {
          this.stopDragging();
        }
      }
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var situated = properties.situated,
          sizeableElement = properties.sizeableElement,
          onDrag = properties.onDrag,
          dragHandler = onDrag; ///

      return Element.fromProperties(Class, properties, situated, sizeableElement, dragHandler);
    }
  }]);

  return Splitter;
}(Element);

Object.assign(Splitter, {
  tagName: 'div',
  ignoredAttributes: ['situated', 'sizeableElement', 'onDrag']
});

module.exports = Splitter;

},{"./options":33,"easy":38}],36:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('../cursor'),
    Splitter = require('../splitter');

var HorizontalSplitter = function (_Splitter) {
  _inherits(HorizontalSplitter, _Splitter);

  function HorizontalSplitter(selector, situated, sizeableElement, dragHandler) {
    _classCallCheck(this, HorizontalSplitter);

    var _this = _possibleConstructorReturn(this, (HorizontalSplitter.__proto__ || Object.getPrototypeOf(HorizontalSplitter)).call(this, selector, situated, sizeableElement, dragHandler));

    _this.sizeableElementHeight = null;

    _this.mouseTop = null;
    return _this;
  }

  _createClass(HorizontalSplitter, [{
    key: 'mouseUp',
    value: function mouseUp() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.reset();

        if (this.dragging) {
          this.stopDragging();
        }
      }
    }
  }, {
    key: 'mouseMove',
    value: function mouseMove(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (dragging) {
          var relativeMouseTop = mouseTop - this.mouseTop,
              height = this.sizeableElementHeight - this.situated * relativeMouseTop;

          this.sizeableElement.setHeight(height);

          var sizeableElementHeight = this.sizeableElement.getHeight();

          if (this.dragHandler) {
            this.dragHandler(sizeableElementHeight);
          }
        }
      }
    }
  }, {
    key: 'mouseDown',
    value: function mouseDown(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.rowResize();

        this.mouseTop = mouseTop;

        this.sizeableElementHeight = this.sizeableElement.getHeight();

        var dragging = this.isDragging();

        if (!dragging) {
          this.startDragging();
        }
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
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Splitter.fromProperties(HorizontalSplitter, properties);
    }
  }]);

  return HorizontalSplitter;
}(Splitter);

module.exports = HorizontalSplitter;

},{"../cursor":32,"../splitter":35}],37:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('../cursor'),
    Splitter = require('../splitter');

var VerticalSplitter = function (_Splitter) {
  _inherits(VerticalSplitter, _Splitter);

  function VerticalSplitter(selector, situated, sizeableElement, dragHandler) {
    _classCallCheck(this, VerticalSplitter);

    var _this = _possibleConstructorReturn(this, (VerticalSplitter.__proto__ || Object.getPrototypeOf(VerticalSplitter)).call(this, selector, situated, sizeableElement, dragHandler));

    _this.sizeableElementWidth = null;

    _this.mouseLeft = null;
    return _this;
  }

  _createClass(VerticalSplitter, [{
    key: 'mouseUp',
    value: function mouseUp() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.reset();

        if (this.dragging) {
          this.stopDragging();
        }
      }
    }
  }, {
    key: 'mouseMove',
    value: function mouseMove(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (dragging) {
          var relativeMouseLeft = mouseLeft - this.mouseLeft,
              width = this.sizeableElementWidth - this.situated * relativeMouseLeft;

          this.sizeableElement.setWidth(width);

          var sizeableElementWidth = this.sizeableElement.getWidth();

          if (this.dragHandler) {
            this.dragHandler(sizeableElementWidth);
          }
        }
      }
    }
  }, {
    key: 'mouseDown',
    value: function mouseDown(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.columnResize();

        this.mouseLeft = mouseLeft;

        this.sizeableElementWidth = this.sizeableElement.getWidth();

        var dragging = this.isDragging();

        if (!dragging) {
          this.startDragging();
        }
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
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Splitter.fromProperties(VerticalSplitter, properties);
    }
  }]);

  return VerticalSplitter;
}(Splitter);

module.exports = VerticalSplitter;

},{"../cursor":32,"../splitter":35}],38:[function(require,module,exports){
'use strict';

module.exports = {
  window: require('./lib/window'),
  document: require('./lib/document'),
  TextElement: require('./lib/textElement'),
  Div: require('./lib/element/div'),
  Span: require('./lib/element/span'),
  Body: require('./lib/element/body'),
  Element: require('./lib/element'),
  Link: require('./lib/inputElement/link'),
  Input: require('./lib/inputElement/input'),
  Select: require('./lib/inputElement/select'),
  Button: require('./lib/inputElement/button'),
  Checkbox: require('./lib/inputElement/checkbox'),
  Textarea: require('./lib/inputElement/textarea'),
  InputElement: require('./lib/inputElement'),
  Bounds: require('./lib/misc/bounds'),
  Offset: require('./lib/misc/offset'),
  React: require('./lib/react')
};

},{"./lib/document":39,"./lib/element":40,"./lib/element/body":41,"./lib/element/div":42,"./lib/element/span":43,"./lib/inputElement":44,"./lib/inputElement/button":45,"./lib/inputElement/checkbox":46,"./lib/inputElement/input":47,"./lib/inputElement/link":48,"./lib/inputElement/select":49,"./lib/inputElement/textarea":50,"./lib/misc/bounds":51,"./lib/misc/offset":52,"./lib/react":58,"./lib/textElement":59,"./lib/window":60}],39:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventMixin = require('./mixin/event'),
    clickMixin = require('./mixin/click'),
    mouseMixin = require('./mixin/mouse');

var Document = function Document() {
  _classCallCheck(this, Document);

  this.domElement = document;

  this.handlersMap = {};
};

Object.assign(Document.prototype, eventMixin);
Object.assign(Document.prototype, clickMixin);
Object.assign(Document.prototype, mouseMixin);

module.exports = new Document(); ///

},{"./mixin/click":53,"./mixin/event":54,"./mixin/mouse":56}],40:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Offset = require('./misc/offset'),
    Bounds = require('./misc/bounds'),
    jsxMixin = require('./mixin/jsx'),
    eventMixin = require('./mixin/event'),
    clickMixin = require('./mixin/click'),
    mouseMixin = require('./mixin/mouse'),
    resizeMixin = require('./mixin/resize');

var Element = function () {
  function Element(selector) {
    _classCallCheck(this, Element);

    this.domElement = domElementFromSelector(selector);

    this.domElement.__element__ = this;

    this.handlersMap = {};
  }

  _createClass(Element, [{
    key: 'clone',
    value: function clone() {
      return Element.clone(this);
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
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = Bounds.fromBoundingClientRect(boundingClientRect);

      return bounds;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var width = includeBorder ? this.domElement.offsetWidth : this.domElement.clientWidth;

      return width;
    }
  }, {
    key: 'setWidth',
    value: function setWidth(width) {
      this.domElement.style.width = width + 'px';
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var height = includeBorder ? this.domElement.offsetHeight : this.domElement.clientHeight;

      return height;
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      this.domElement.style.height = height + 'px';
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
    key: 'appendTo',
    value: function appendTo(parentElement) {
      var parentDOMElement = parentElement.domElement,
          firstSiblingDOMElement = parentDOMElement.firstChild; ///

      parentDOMElement.insertBefore(this.domElement, firstSiblingDOMElement);
    }
  }, {
    key: 'prependTo',
    value: function prependTo(parentElement) {
      var parentDOMElement = parentElement.domElement;

      parentDOMElement.insertBefore(this.domElement, null); ///
    }
  }, {
    key: 'removeFrom',
    value: function removeFrom(parentElement) {
      var parentDOMElement = parentElement.domElement;

      parentDOMElement.removeChild(this.domElement);
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
    key: 'show',
    value: function show() {
      var displayStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'block';
      this.domElement.style.display = displayStyle;
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.domElement.style.display = 'none';
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
    key: 'html',
    value: function html(_html) {
      if (_html === undefined) {
        _html = this.domElement.innerHTML; ///

        return _html;
      } else {
        var innerHTML = _html; ///

        this.domElement.innerHTML = innerHTML;
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

          this.domElement.style[name] = value;
        }.bind(this));
      }
    }
  }, {
    key: 'getDescendantElements',
    value: function getDescendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var domNode = this.domElement,
          ///
      descendantDOMNodes = descendantDOMNodesFromDOMNode(domNode),
          descendantElements = filterDOMNodes(descendantDOMNodes, selector);

      return descendantElements;
    }
  }, {
    key: 'getChildElements',
    value: function getChildElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var childDOMNodes = this.domElement.childNodes,
          childDOMElements = filterDOMNodes(childDOMNodes, selector),
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
          html = '<' + tagName + '></' + tagName + '>',
          element = Element.fromHTML.apply(Element, [Class, html].concat(remainingArguments));

      var ignoredProperties = Class.ignoredProperties,
          additionalProperties = Class.additionalProperties;

      element.applyProperties(properties, ignoredProperties, additionalProperties);

      return element;
    }
  }]);

  return Element;
}();

Object.assign(Element.prototype, jsxMixin);
Object.assign(Element.prototype, eventMixin);
Object.assign(Element.prototype, clickMixin);
Object.assign(Element.prototype, mouseMixin);
Object.assign(Element.prototype, resizeMixin);

Element.LEFT_MOUSE_BUTTON = 0;
Element.MIDDLE_MOUSE_BUTTON = 1;
Element.RIGHT_MOUSE_BUTTON = 2;

module.exports = Element;

function domElementFromSelector(selector) {
  var domElement = typeof selector === 'string' ? document.querySelectorAll(selector)[0] : ///
  selector; ///

  return domElement;
}

function elementsFromDOMElements(domElements) {
  var domElementsWithElements = filter(domElements, function (domElement) {
    return domElement.__element__ !== undefined;
  }),
      elements = domElementsWithElements.map(function (domElement) {
    return domElement.__element__;
  });

  return elements;
}

function descendantDOMNodesFromDOMNode(domNode) {
  var descendantDOMNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var childDOMNodes = domNode.childNodes; ///

  descendantDOMNodes.concat(childDOMNodes);

  childDOMNodes.forEach(function (childDOMNode) {
    descendantDOMNodesFromDOMNode(childDOMNode, descendantDOMNodes);
  });

  return descendantDOMNodes;
}

function filterDOMNodes(domNodes, selector) {
  var filteredDOMNodes = filter(domNodes, function (domNode) {
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
  });

  return filteredDOMNodes;
}

function filter(array, test) {
  var filteredArray = [];

  for (var index = 0; index < array.length; index++) {
    var element = array[index],
        result = test(element);

    if (result) {
      filteredArray.push(element);
    }
  }

  return filteredArray;
}

function first(array) {
  return array[0];
}

},{"./misc/bounds":51,"./misc/offset":52,"./mixin/click":53,"./mixin/event":54,"./mixin/jsx":55,"./mixin/mouse":56,"./mixin/resize":57}],41:[function(require,module,exports){
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
    value: function fromProperties(Class, properties) {
      if (arguments.length === 1) {
        properties = Class;
        Class = Body;
      }

      return Element.fromProperties(Class, properties);
    }
  }]);

  return Body;
}(Element);

Body.tagName = 'body';

module.exports = Body;

},{"../element":40}],42:[function(require,module,exports){
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
    value: function fromProperties(Class, properties) {
      if (arguments.length === 1) {
        properties = Class;
        Class = Div;
      }

      return Element.fromProperties(Class, properties);
    }
  }]);

  return Div;
}(Element);

Div.tagName = 'div';

module.exports = Div;

},{"../element":40}],43:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Span = function (_Element) {
  _inherits(Span, _Element);

  function Span(selector) {
    _classCallCheck(this, Span);

    return _possibleConstructorReturn(this, (Span.__proto__ || Object.getPrototypeOf(Span)).call(this, selector));
  }

  _createClass(Span, [{
    key: 'clone',
    value: function clone() {
      return Span.clone(this);
    }
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
    value: function fromProperties(Class, properties) {
      if (arguments.length === 1) {
        properties = Class;
        Class = Span;
      }

      return Element.fromProperties(Class, properties);
    }
  }]);

  return Span;
}(Element);

Span.tagName = 'span';

module.exports = Span;

},{"../element":40}],44:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var InputElement = function (_Element) {
  _inherits(InputElement, _Element);

  function InputElement(selector) {
    _classCallCheck(this, InputElement);

    return _possibleConstructorReturn(this, (InputElement.__proto__ || Object.getPrototypeOf(InputElement)).call(this, selector));
  }

  _createClass(InputElement, [{
    key: 'hasFocus',
    value: function hasFocus() {
      var focus = document.activeElement === this.domElement; ///

      return focus;
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.domElement.focus();
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
      for (var _len4 = arguments.length, remainingArguments = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 2] = arguments[_key4];
      }

      return Element.fromProperties.apply(Element, [Class, properties].concat(remainingArguments));
    }
  }]);

  return InputElement;
}(Element);

module.exports = InputElement;

},{"./element":40}],45:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Button = function (_InputElement) {
  _inherits(Button, _InputElement);

  function Button(selector, clickHandler) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, selector));

    if (clickHandler) {
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
    value: function onClick(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateClickHandler;
      }

      _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'onClick', this).call(this, handler);
    }
  }, {
    key: 'offClick',
    value: function offClick(handler) {
      _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'offClick', this).call(this, handler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, clickHandler) {
      return InputElement.clone(Button, element, clickHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, clickHandler) {
      return InputElement.fromHTML(Button, html, clickHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, clickHandler) {
      return InputElement.fromDOMElement(Button, domElement, clickHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onClick = properties.onClick,
          clickHandler = onClick; ///

      return InputElement.fromProperties(Button, properties, clickHandler);
    }
  }]);

  return Button;
}(InputElement);

Object.assign(Button, {
  tagName: 'button',
  ignoredProperties: ['onClick']
});

module.exports = Button;

function defaultIntermediateClickHandler(handler, event) {
  var mouseButton = event.button,
      preventDefault = handler(mouseButton);

  return preventDefault;
}

},{"../inputElement":44}],46:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Checkbox = function (_InputElement) {
  _inherits(Checkbox, _InputElement);

  function Checkbox(selector, changeHandler) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
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
    value: function onChange(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateChangeHandler.bind(this);
      }

      this.on('click', handler); ///
    }
  }, {
    key: 'offChange',
    value: function offChange(handler) {
      this.off('click', handler); ///
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
      return this.domElement.checked;
    }
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return InputElement.clone(Checkbox, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Checkbox, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Checkbox, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          changeHandler = onChange; ///    

      return InputElement.fromProperties(Checkbox, properties, changeHandler);
    }
  }]);

  return Checkbox;
}(InputElement);

Object.assign(Checkbox, {
  tagName: 'input',
  ignoredProperties: ['onChange'],
  additionalProperties: {
    type: 'checkbox'
  }
});

module.exports = Checkbox;

function defaultIntermediateChangeHandler(handler, event) {
  var checked = this.isChecked(),
      preventDefault = handler(checked);

  return preventDefault;
}

},{"../inputElement":44}],47:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Input = function (_InputElement) {
  _inherits(Input, _InputElement);

  function Input(selector, changeHandler) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(Input, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Input.clone(this, changeHandler);
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
    key: 'onChange',
    value: function onChange(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateChangeHandler.bind(this);
      }

      this.on('change', handler);
    }
  }, {
    key: 'offChange',
    value: function offChange(handler) {
      this.off('change', handler);
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
      var onChange = properties.onChange,
          changeHandler = onChange; ///    

      return InputElement.fromProperties(Input, properties, changeHandler);
    }
  }]);

  return Input;
}(InputElement);

Object.assign(Input, {
  tagName: 'input',
  ignoredProperties: ['onChange']
});

module.exports = Input;

function defaultIntermediateChangeHandler(handler, event) {
  var value = this.getValue(),
      preventDefault = handler(value);

  return preventDefault;
}

},{"../inputElement":44}],48:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Link = function (_InputElement) {
  _inherits(Link, _InputElement);

  function Link(selector, clickHandler) {
    _classCallCheck(this, Link);

    var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, selector));

    if (clickHandler) {
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
    value: function onClick(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateClickHandler.bind(this);
      }

      this.on('click', handler);
    }
  }, {
    key: 'offClick',
    value: function offClick(handler) {
      this.off('click', handler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, clickHandler) {
      return InputElement.clone(Link, element, clickHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, clickHandler) {
      return InputElement.fromHTML(Link, html, clickHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, clickHandler) {
      return InputElement.fromDOMElement(Link, domElement, clickHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onClick = properties.onClick,
          clickHandler = onClick; ///    

      return InputElement.fromProperties(Link, properties, clickHandler);
    }
  }]);

  return Link;
}(InputElement);

Object.assign(Link, {
  tagName: 'a',
  ignoredProperties: ['onClick']
});

module.exports = Link;

function defaultIntermediateClickHandler(handler, event) {
  var href = this.getAttribute('href'),
      preventDefault = handler(href);

  return preventDefault;
}

},{"../inputElement":44}],49:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Select = function (_InputElement) {
  _inherits(Select, _InputElement);

  function Select(selector, changeHandler) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, selector));

    if (changeHandler) {
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
    key: 'getSelectedOptionValue',
    value: function getSelectedOptionValue() {
      return this.domElement.value;
    } ///

  }, {
    key: 'setSelectedOptionByValue',
    value: function setSelectedOptionByValue(value) {
      this.domElement.value = value;
    } ///

  }, {
    key: 'onChange',
    value: function onChange(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateChangeHandler.bind(this);
      }

      this.on('change', handler);
    }
  }, {
    key: 'offChange',
    value: function offChange(handler) {
      this.off('change', handler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return InputElement.clone(Select, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Select, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Select, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          changeHandler = onChange; ///    

      return InputElement.fromProperties(Select, properties, changeHandler);
    }
  }]);

  return Select;
}(InputElement);

Object.assign(Select, {
  tagName: 'select',
  ignoredProperties: ['onChange']
});

module.exports = Select;

function defaultIntermediateChangeHandler(handler, event) {
  var selectedOptionValue = this.getSelectedOptionValue(),
      preventDefault = handler(selectedOptionValue);

  return preventDefault;
}

},{"../inputElement":44}],50:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Textarea = function (_InputElement) {
  _inherits(Textarea, _InputElement);

  function Textarea(selector, changeHandler, scrollHandler) {
    _classCallCheck(this, Textarea);

    var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }

    if (scrollHandler) {
      _this.onScroll(scrollHandler);
    }
    return _this;
  }

  _createClass(Textarea, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Textarea.clone(this, changeHandler);
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
    key: 'getScrollTop',
    value: function getScrollTop() {
      return this.domElement.scrollTop;
    }
  }, {
    key: 'getScrollLeft',
    value: function getScrollLeft() {
      return this.domElement.scrollLeft;
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
    key: 'setScrollTop',
    value: function setScrollTop(scrollTop) {
      this.domElement.scrollTop = scrollTop;
    }
  }, {
    key: 'setScrollLeft',
    value: function setScrollLeft(scrollLeft) {
      this.domElement.scrollLeft = scrollLeft;
    }
  }, {
    key: 'onChange',
    value: function onChange(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateChangeHandler.bind(this);
      }

      this.on('change', handler);
    }
  }, {
    key: 'offChange',
    value: function offChange(handler) {
      this.off('change', handler);
    }
  }, {
    key: 'onScroll',
    value: function onScroll(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateScrollHandler.bind(this);
      }

      this.on('scroll', handler);
    }
  }, {
    key: 'offScroll',
    value: function offScroll(handler) {
      this.off('scroll', handler);
    }
  }, {
    key: 'onResize',
    value: function onResize(resizeHandler) {}
  }, {
    key: 'offResize',
    value: function offResize(resizeHandler) {}
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler, scrollHandler) {
      return InputElement.clone(Textarea, element, changeHandler, scrollHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler, scrollHandler) {
      return InputElement.fromHTML(Textarea, html, changeHandler, scrollHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler, scrollHandler) {
      return InputElement.fromDOMElement(Textarea, domElement, changeHandler, scrollHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var onChange = properties.onChange,
          onScroll = properties.onScroll,
          changeHandler = onChange,
          scrollHandler = onScroll; ///

      return InputElement.fromProperties(Textarea, properties, changeHandler, scrollHandler);
    }
  }]);

  return Textarea;
}(InputElement);

Object.assign(Textarea, {
  tagName: 'textarea',
  ignoredProperties: ['onChange', 'onScroll']
});

module.exports = Textarea;

function defaultIntermediateChangeHandler(handler, event) {
  var value = this.getValue(),
      preventDefault = handler(value);

  return preventDefault;
}

function defaultIntermediateScrollHandler(handler, event) {
  var scrollTop = this.getScrollTop(),
      scrollLeft = this.getScrollLeft(),
      preventDefault = handler(scrollTop, scrollLeft);

  return preventDefault;
}

},{"../inputElement":44}],51:[function(require,module,exports){
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

},{}],52:[function(require,module,exports){
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

},{}],53:[function(require,module,exports){
'use strict';

function onClick(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }

  this.on('click', handler);
}

function offClick(handler) {
  this.off('click', handler);
}

var clickMixin = {
  onClick: onClick,
  offClick: offClick
};

module.exports = clickMixin;

function defaultIntermediateHandler(handler, event) {
  var mouseTop = event.pageY,
      ///
  mouseLeft = event.pageX,
      ///
  mouseButton = event.button,
      ///
  preventDefault = handler(mouseTop, mouseLeft, mouseButton);

  return preventDefault;
}

},{}],54:[function(require,module,exports){
'use strict';

function on(eventTypes, handler) {
  eventTypes = eventTypes.split(' '); ///

  eventTypes.forEach(function (eventType) {
    var addEventListener = this.addHandler(eventType, handler);

    if (addEventListener) {
      this.domElement.addEventListener(eventType, eventListener.bind(this));
    }
  }.bind(this));
}

function off(eventTypes, handler) {
  eventTypes = eventTypes.split(' '); ///

  eventTypes.forEach(function (eventType) {
    var removeEventListener = this.removeHandler(eventType, handler);

    if (removeEventListener) {
      this.domElement.removeEventListener(eventType, eventListener.bind(this));
    }
  }.bind(this));
}

function addHandler(eventType, handler) {
  var addEventListener = false,
      handlers = this.handlersMap[eventType];

  if (handlers === undefined) {
    handlers = [];

    this.handlersMap[eventType] = handlers;

    addEventListener = true;
  }

  handlers.push(handler);

  return addEventListener;
}

function removeHandler(eventType, handler) {
  var removeEventListener = false,
      handlers = this.handlersMap[eventType];

  if (handlers.length === 0) {
    delete this.handlersMap[eventType];

    removeEventListener = true;
  } else {
    var index = handlers.indexOf(handler);

    if (index > -1) {
      var deleteCount = 1;

      handlers.splice(index, deleteCount);
    }
  }

  return removeEventListener;
}

var eventMixin = {
  on: on,
  off: off,
  addHandler: addHandler,
  removeHandler: removeHandler
};

module.exports = eventMixin;

function eventListener(event) {
  var eventType = event.type,
      handlers = this.handlersMap[eventType];

  var preventEventDefault = false;

  handlers.forEach(function (handler) {
    if (handler.intermediateHandler !== undefined) {
      var preventDefault = handler.intermediateHandler(handler, event);

      if (preventDefault === true) {
        preventEventDefault = true;
      }
    } else {
      var _preventDefault = handler(event);

      if (_preventDefault === true) {
        preventEventDefault = true;
      }
    }
  });

  if (preventEventDefault) {
    event.preventDefault();
  }
}

},{}],55:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function applyProperties(properties, ignoredProperties, additionalProperties) {
  this.properties = {};

  properties = Object.assign({}, properties); ///

  unassign(properties, ignoredProperties);

  Object.assign(properties, additionalProperties);

  var names = Object.keys(properties);

  names.forEach(function (name) {
    if (name === 'childElements') {
      var childElements = properties['childElements'];

      childElements.forEach(function (childElement) {
        this.append(childElement);
      }.bind(this));
    } else {
      var value = properties[name];

      if (false) {} else if (isHandlerName(name)) {
        addHandler(this, name, value);
      } else if (isAttributeName(name)) {
        addAttribute(this, name, value);
      } else {
        this.properties[name] = value;
      }
    }
  }.bind(this));
}

var jsxMixin = {
  applyProperties: applyProperties
};

module.exports = jsxMixin;

function unassign(properties, ignoredProperties) {
  if (ignoredProperties !== undefined) {
    var ignoredPropertyNames = ignoredProperties; ///

    ignoredPropertyNames.forEach(function (ignoredPropertyName) {
      delete properties[ignoredPropertyName];
    });
  }
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

},{}],56:[function(require,module,exports){
'use strict';

function onMouseUp(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }

  this.on('mouseup', handler);
}

function onMouseDown(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }

  this.on('mousedown', handler);
}

function onMouseOver(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }

  this.on('mouseover', handler);
}

function onMouseOut(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }

  this.on('mouseout', handler);
}

function onMouseMove(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }

  this.on('mousemove', handler);
}

function offMouseUp(handler) {
  this.off('mouseup', handler);
}

function offMouseDown(handler) {
  this.off('mousedown', handler);
}

function offMouseOver(handler) {
  this.off('mouseover', handler);
}

function offMouseOut(handler) {
  this.off('mouseout', handler);
}

function offMouseMove(handler) {
  this.off('mousemove', handler);
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

function defaultIntermediateHandler(handler, event) {
  var mouseTop = event.pageY,
      ///
  mouseLeft = event.pageX,
      ///
  mouseButton = event.button,
      ///
  preventDefault = handler(mouseTop, mouseLeft, mouseButton);

  return preventDefault;
}

},{}],57:[function(require,module,exports){
'use strict';

function onResize(handler) {
  var eventType = 'resize',
      addEventListener = this.addHandler(eventType, handler);

  if (addEventListener) {
    appendResizeObject(this);
  }
}

function offResize(handler) {
  var eventType = 'resize',
      removeEventListener = this.removeHandler(eventType, handler);

  if (removeEventListener) {
    removeResizeObject(this);
  }
}

var resizeMixin = {
  onResize: onResize,
  offResize: offResize
};

module.exports = resizeMixin;

function appendResizeObject(element) {
  var resizeObject = document.createElement('object'),
      domElement = element.domElement,
      style = ' display: block; \n                  position: absolute; \n                  top: 0; \n                  left: 0; \n                  height: 100%; \n                  width: 100%; \n                  overflow: hidden; \n                  pointer-events: none; \n                  z-index: -1;';

  resizeObject.setAttribute('style', style);
  resizeObject.data = 'about:blank';
  resizeObject.type = 'text/html';

  element.__resizeObject__ = resizeObject;

  resizeObject.onload = function () {
    resizeObjectLoadHandler(element);
  };

  domElement.appendChild(resizeObject);
}

function removeResizeObject(element) {
  var domElement = element.domElement,
      resizeObject = element.__resizeObject__,
      objectWindow = resizeObject.contentDocument.defaultView; ///

  objectWindow.removeEventListener('resize', resizeListener);

  domElement.removeChild(resizeObject);
}

function resizeObjectLoadHandler(element) {
  var resizeObject = element.__resizeObject__,
      resizeObjectWindow = resizeObject.contentDocument.defaultView; ///

  resizeObjectWindow.addEventListener('resize', function () {
    eventListener(element);
  });
}

function eventListener(element) {
  var width = element.getWidth(),
      height = element.getHeight(),
      handlers = element.handlersMap['resize'];

  handlers.forEach(function (handler) {
    handler(width, height);
  });
}

},{}],58:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = require('./element'),
    TextElement = require('./textElement');

var React = function () {
  function React() {
    _classCallCheck(this, React);
  }

  _createClass(React, null, [{
    key: 'createElement',
    value: function createElement(firstArgument, properties) {
      var element = null;

      if (firstArgument !== undefined) {
        for (var _len = arguments.length, childArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          childArguments[_key - 2] = arguments[_key];
        }

        var childElements = childElementsFromChildArguments(childArguments);

        properties = Object.assign({
          childElements: childElements
        }, properties);

        if (false) {} else if (isTypeOf(firstArgument, Element)) {
          var Class = firstArgument; ///

          element = Class.fromProperties(properties);
        } else if (typeof firstArgument === 'function') {
          var elementFunction = firstArgument; ///

          element = elementFunction(properties);
        } else if (typeof firstArgument === 'string') {
          var tagName = firstArgument,
              ///
          html = '<' + tagName + '></' + tagName + '>';

          element = Element.fromHTML(html);

          element.applyProperties(properties);
        }
      }

      return element;
    }
  }]);

  return React;
}();

module.exports = React;

function childElementsFromChildArguments(childArguments) {
  childArguments = childArguments.reduce(function (childArguments, childArgument) {
    childArguments = childArguments.concat(childArgument);

    return childArguments;
  }, []);

  var childElements = childArguments.map(function (childArgument) {
    var childElement = void 0;

    if (childArgument instanceof Element || childArgument instanceof TextElement) {
      childElement = childArgument; ///
    } else {
      var text = childArgument,
          ///
      textElement = new TextElement(text);

      childElement = textElement;
    }

    return childElement;
  });

  return childElements;
}

function isTypeOf(argument, Class) {
  var typeOf = false;

  if (argument === Class) {
    ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument) {
      typeOf = isTypeOf(argument, Class);
    }
  }

  return typeOf;
}

},{"./element":40,"./textElement":59}],59:[function(require,module,exports){
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
    key: 'appendTo',
    value: function appendTo(parentElement) {
      var parentDOMElement = parentElement.domElement,
          firstSiblingDOMElement = parentDOMElement.firstChild; ///

      parentDOMElement.insertBefore(this.domElement, firstSiblingDOMElement);
    }
  }, {
    key: 'prependTo',
    value: function prependTo(parentElement) {
      var parentDOMElement = parentElement.domElement;

      parentDOMElement.insertBefore(this.domElement, null); ///
    }
  }, {
    key: 'removeFrom',
    value: function removeFrom(parentElement) {
      var parentDOMElement = parentElement.domElement;

      parentDOMElement.removeChild(this.domElement);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.domElement.remove();
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
  }]);

  return TextElement;
}();

module.exports = TextElement;

},{"./misc/bounds":51,"./misc/offset":52}],60:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventMixin = require('./mixin/event'),
    clickMixin = require('./mixin/click'),
    mouseMixin = require('./mixin/mouse');

var Window = function () {
  function Window() {
    _classCallCheck(this, Window);

    this.domElement = window;

    this.handlersMap = {};
  }

  _createClass(Window, [{
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
    value: function onResize(handler) {
      var type = 'resize',
          addEventListener = this.addHandler(type, handler);

      if (addEventListener) {
        this.domElement.addEventListener(type, eventListener.bind(this));
      }
    }
  }, {
    key: 'offResize',
    value: function offResize(handler) {
      var type = 'resize',
          removeEventListener = this.removeHandler(type, handler);

      if (removeEventListener) {
        this.domElement.removeEventListener(type, eventListener.bind(this));
      }
    }
  }]);

  return Window;
}();

Object.assign(Window.prototype, eventMixin);
Object.assign(Window.prototype, clickMixin);
Object.assign(Window.prototype, mouseMixin);

module.exports = new Window(); ///

function eventListener(event) {
  var type = event.type,
      handlers = this.handlersMap[type],
      width = this.getWidth(),
      height = this.getHeight();

  handlers.forEach(function (handler) {
    handler(width, height);
  });
}

},{"./mixin/click":53,"./mixin/event":54,"./mixin/mouse":56}]},{},[20])(20)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvYmFzaWMvY29tbWVudFRva2Vucy5qcyIsImVzNi9iYXNpYy9sZXhlci5qcyIsImVzNi9iYXNpYy9saW5lLmpzIiwiZXM2L2NvbW1vbi9jb250ZXh0LmpzIiwiZXM2L2NvbW1vbi9sZXhlci5qcyIsImVzNi9jb21tb24vbGluZS5qcyIsImVzNi9jb21tb24vcnVsZS5qcyIsImVzNi9jb21tb24vcnVsZXMuanMiLCJlczYvY29tbW9uL3NpZ25pZmljYW50VG9rZW5zLmpzIiwiZXM2L2NvbW1vbi9zdHJpbmdUb2tlbnMuanMiLCJlczYvY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50LmpzIiwiZXM2L2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50LmpzIiwiZXM2L2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC5qcyIsImVzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lLmpzIiwiZXM2L2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmcuanMiLCJlczYvY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3doaXRlc3BhY2UuanMiLCJlczYvY29tbW9uL3Rva2Vucy5qcyIsImVzNi9jb21tb24vd2hpdGVzcGFjZVRva2Vucy5qcyIsImVzNi9leGFtcGxlLmpzIiwiZXM2L2V4YW1wbGVzLmpzIiwiZXM2L2V4YW1wbGVzL2Jhc2ljLmpzIiwiZXM2L2V4YW1wbGVzL2Zsb3JlbmNlLmpzIiwiZXM2L2Zsb3JlbmNlL2NvbW1lbnRUb2tlbnMuanMiLCJlczYvZmxvcmVuY2UvZ3JhbW1hci5qcyIsImVzNi9mbG9yZW5jZS9sZXhlci5qcyIsImVzNi9mbG9yZW5jZS9saW5lLmpzIiwiZXM2L2Zsb3JlbmNlL3Rva2VuL2VuZE9mQ29tbWVudC5qcyIsImVzNi9mbG9yZW5jZS90b2tlbi9taWRkbGVPZkNvbW1lbnQuanMiLCJlczYvZmxvcmVuY2UvdG9rZW4vc3RhcnRPZkNvbW1lbnQuanMiLCJlczYvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5LWxheW91dC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5LWxheW91dC9lczYvY3Vyc29yLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2VzNi9vcHRpb25zLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2VzNi9zaXplYWJsZUVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeS1sYXlvdXQvZXM2L3NwbGl0dGVyLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2VzNi9zcGxpdHRlci9ob3Jpem9udGFsLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2VzNi9zcGxpdHRlci92ZXJ0aWNhbC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2RvY3VtZW50LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2VsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9ib2R5LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2VsZW1lbnQvZGl2LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2VsZW1lbnQvc3Bhbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9pbnB1dEVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvaW5wdXRFbGVtZW50L2J1dHRvbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9pbnB1dEVsZW1lbnQvY2hlY2tib3guanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvaW5wdXRFbGVtZW50L2lucHV0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2lucHV0RWxlbWVudC9saW5rLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2lucHV0RWxlbWVudC9zZWxlY3QuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvaW5wdXRFbGVtZW50L3RleHRhcmVhLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21pc2MvYm91bmRzLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21pc2Mvb2Zmc2V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21peGluL2NsaWNrLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21peGluL2V2ZW50LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21peGluL2pzeC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXhpbi9tb3VzZS5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXhpbi9yZXNpemUuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvcmVhY3QuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvdGV4dEVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvd2luZG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7OztBQUVBLElBQU0sT0FBTyxRQUFRLFNBQVIsQ0FBYjs7SUFFTSxhOzs7Ozs7O3lCQUNRLHdCLEVBQTBCLEksRUFBTSxPLEVBQVM7QUFDbkQsVUFBTSxZQUFZLEtBQWxCLENBRG1ELENBQ3pCOztBQUUxQixhQUFPLFNBQVA7QUFDRDs7Ozs7O0FBR0gsT0FBTyxPQUFQLEdBQWlCLGFBQWpCOzs7QUNaQTs7Ozs7Ozs7OztBQUVBLElBQU0sT0FBTyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ00sUUFBUSxRQUFRLGlCQUFSLENBRGQ7QUFBQSxJQUVNLGNBQWMsUUFBUSxpQkFBUixDQUZwQjs7SUFJTSxVOzs7Ozs7Ozs7OzsrQ0FDOEI7QUFDaEMsVUFBTSx3QkFBd0IsRUFBOUIsQ0FEZ0MsQ0FDRTs7QUFFbEMsYUFBTyxxQkFBUDtBQUNEOzs7Z0NBRWtCLE8sRUFBUztBQUMxQixVQUFNLFFBQVEsTUFBTSxXQUFOLENBQWtCLE9BQWxCLENBQWQ7QUFBQSxVQUNNLGFBQWEsSUFBSSxVQUFKLENBQWUsS0FBZixFQUFzQixJQUF0QixDQURuQjs7QUFHQSxhQUFPLFVBQVA7QUFDRDs7OztFQVpz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dGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XHJcblxyXG5jbGFzcyBDb21tZW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQsIGxpbmUsIGNvbnRleHQpIHtcclxuICAgIGNvbnN0IGluQ29tbWVudCA9IGZhbHNlOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIGluQ29tbWVudDtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudFRva2VucztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpO1xyXG5cclxuY2xhc3MgQmFzaWNMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBzdGF0aWMgZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzKCkge1xyXG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gW107IC8vL1xyXG5cclxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xyXG4gICAgY29uc3QgcnVsZXMgPSBSdWxlcy5mcm9tR3JhbW1hcihncmFtbWFyKSxcclxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBuZXcgQmFzaWNMZXhlcihydWxlcywgTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGJhc2ljTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljTGV4ZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuL2NvbW1lbnRUb2tlbnMnKSxcclxuICAgICAgQ29tbW9uTGluZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9saW5lJyksXHJcbiAgICAgIFN0cmluZ1Rva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9zdHJpbmdUb2tlbnMnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi93aGl0ZXNwYWNlVG9rZW5zJyk7XHJcblxyXG5jbGFzcyBMaW5lIGV4dGVuZHMgQ29tbW9uTGluZSB7XHJcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzKSB7IHJldHVybiBzdXBlci5mcm9tQ29udGVudChMaW5lLCBjb250ZW50LCBjb250ZXh0LCBydWxlcywgQ29tbWVudFRva2VucywgU3RyaW5nVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKTsgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIENvbnRleHQge1xyXG4gIGNvbnN0cnVjdG9yKG1pbmltdW1MaW5lc0xlbmd0aCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSwgcHJldmlvdXNMaW5lSW5Db21tZW50ID0gbnVsbCwgZm9sbG93aW5nTGluZUluQ29tbWVudCA9IG51bGwpIHtcclxuICAgIHRoaXMubWluaW11bUxpbmVzTGVuZ3RoID0gbWluaW11bUxpbmVzTGVuZ3RoO1xyXG4gICAgdGhpcy5wcmV2aW91c0xpbmVJbkNvbW1lbnQgPSBwcmV2aW91c0xpbmVJbkNvbW1lbnQ7XHJcbiAgICB0aGlzLmZvbGxvd2luZ0xpbmVJbkNvbW1lbnQgPSBmb2xsb3dpbmdMaW5lSW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0TWluaW11bUxpbmVzTGVuZ3RoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWluaW11bUxpbmVzTGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgaXNQcmV2aW91c0xpbmVJbkNvbW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmV2aW91c0xpbmVJbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBpc0ZvbGxvd2luZ0xpbmVJbkNvbW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb2xsb3dpbmdMaW5lSW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgc2V0UHJldmlvdXNMaW5lSW5Db21tZW50KHByZXZpb3VzTGluZUluQ29tbWVudCkge1xyXG4gICAgdGhpcy5wcmV2aW91c0xpbmVJbkNvbW1lbnQgPSBwcmV2aW91c0xpbmVJbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBzaG91bGRUZXJtaW5hdGUobGVuZ3RoKSB7XHJcbiAgICBsZXQgdGVybWluYXRlID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKGxlbmd0aCA+PSB0aGlzLm1pbmltdW1MaW5lc0xlbmd0aCkge1xyXG4gICAgICBpZiAodGhpcy5mb2xsb3dpbmdMaW5lSW5Db21tZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMucHJldmlvdXNMaW5lSW5Db21tZW50ID09PSB0aGlzLmZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpIHtcclxuICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRlcm1pbmF0ZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29udGV4dDtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgICBSdWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKSxcclxuICAgICAgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpLFxyXG4gICAgICBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9zaWduaWZpY2FudCcpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzLCBMaW5lKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLkxpbmUgPSBMaW5lO1xyXG4gIH1cclxuXHJcbiAgbGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGZpcnN0TGluZUluZGV4ID0gMCwgY29udGV4dCA9IG5ldyBDb250ZXh0KCkpIHtcclxuICAgIGNvbnN0IGxpbmVzID0gW107XHJcbiAgICBcclxuICAgIGxldCBpbmRleCA9IGZpcnN0TGluZUluZGV4LCAgICBcclxuICAgICAgICBjb250ZW50ID0gY29udGVudHNbaW5kZXhdO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgbGVuZ3RoID0gaW5kZXggLSBmaXJzdExpbmVJbmRleCxcclxuICAgICAgICAgICAgdGVybWluYXRlID0gY29udGV4dC5zaG91bGRUZXJtaW5hdGUobGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbGluZSA9IHRoaXMuTGluZS5mcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCB0aGlzLnJ1bGVzKTtcclxuXHJcbiAgICAgIGxpbmVzLnB1c2gobGluZSk7XHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudHNbKytpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJ1bGVzRnJvbUdyYW1tYXIoZ3JhbW1hcikgeyByZXR1cm4gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hcik7IH1cclxuXHJcbiAgc3RhdGljIHNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21HcmFtbWFyKGdyYW1tYXIpIHtcclxuICAgIGxldCAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gT2JqZWN0LmtleXMoU2lnbmlmaWNhbnRUb2tlbi50eXBlcyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGdyYW1tYXJUeXBlcyA9IGdyYW1tYXIubWFwKGZ1bmN0aW9uKGdyYW1tYXJFbnRyeSkge1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdXRpbC50eXBlRnJvbUdyYW1tYXJFbnRyeShncmFtbWFyRW50cnkpLFxyXG4gICAgICAgICAgICAgICAgICBncmFtbWFyVHlwZSA9IHR5cGU7ICAvLy9cclxuICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZ3JhbW1hclR5cGU7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBzaWduaWZpY2FudFRva2VuVHlwZXMuY29uY2F0KGdyYW1tYXJUeXBlcyk7IC8vL1xyXG5cclxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZXM7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxleGVyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgICBTaWduaWZpY2FudFRva2VucyA9IHJlcXVpcmUoJy4vc2lnbmlmaWNhbnRUb2tlbnMnKTtcclxuXHJcbmNsYXNzIExpbmUge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcclxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy50b2tlbnMgPSB1bmRlZmluZWQ7XHJcbiAgICBcclxuICAgIHRoaXMuaW5Db21tZW50ID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgfVxyXG5cclxuICBpc0luQ29tbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGdldEhUTUwoKSB7XHJcbiAgICBsZXQgaHRtbCA9IHRoaXMudG9rZW5zLnJlZHVjZShmdW5jdGlvbihodG1sLCB0b2tlbikge1xyXG4gICAgICAgICAgY29uc3QgdG9rZW5IVE1MID0gdG9rZW4uZ2V0SFRNTCgpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBodG1sICs9IHRva2VuSFRNTDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICAgICAgfSwgJycpO1xyXG4gICAgXHJcbiAgICBodG1sICs9ICdcXG4nO1xyXG4gICAgXHJcbiAgICByZXR1cm4gaHRtbDtcclxuICB9XHJcblxyXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcclxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5Db21tZW50KGluQ29tbWVudCkge1xyXG4gICAgdGhpcy5pbkNvbW1lbnQgPSBpbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwdXNoVG9rZW4odG9rZW4pIHtcclxuICAgIHRoaXMudG9rZW5zLnB1c2godG9rZW4pO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgZnJvbUNvbnRlbnQoTGluZSwgY29udGVudCwgY29udGV4dCwgcnVsZXMsIENvbW1lbnRUb2tlbnMsIFN0cmluZ1Rva2VucywgV2hpdGVzcGFjZVRva2Vucykge1xyXG4gICAgY29uc3QgbGluZSA9IG5ldyBMaW5lKGNvbnRlbnQpLFxyXG4gICAgICAgICAgdG9rZW5zT3JDb250ZW50cyA9IFtjb250ZW50XSxcclxuICAgICAgICAgIGluQ29tbWVudCA9IENvbW1lbnRUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBjb250ZXh0KTtcclxuXHJcbiAgICBTdHJpbmdUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKTtcclxuICAgIFdoaXRlc3BhY2VUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbnMgPSBTaWduaWZpY2FudFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIHJ1bGVzKTtcclxuXHJcbiAgICBsaW5lLnNldFRva2Vucyh0b2tlbnMpO1xyXG5cclxuICAgIGxpbmUuc2V0SW5Db21tZW50KGluQ29tbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudCcpO1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IodHlwZSwgcmVnRXhwKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnJlZ0V4cCA9IHJlZ0V4cDtcbiAgfVxuICBcbiAgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbiA9IC0xO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHRoaXMucmVnRXhwKTtcbiAgICBcbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuICAgICAgXG4gICAgICBpZiAoZmlyc3RNYXRjaCAhPT0gJycpIHtcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uID0gbWF0Y2hlcy5pbmRleDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbjtcbiAgfVxuXG4gIHNpZ25pZmljYW50VG9rZW5Gcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHRoaXMucmVnRXhwKSxcbiAgICAgICAgICBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHRoaXMudHlwZSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgICB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xuXG5jbGFzcyBSdWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0UnVsZShkZXB0aCkge1xuICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmFycmF5W2RlcHRoXSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBydWxlO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xuICAgIGNvbnN0IGFycmF5ID0gZ3JhbW1hci5tYXAoZnVuY3Rpb24oZ3JhbW1hckVudHJ5KSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdXRpbC50eXBlRnJvbUdyYW1tYXJFbnRyeShncmFtbWFyRW50cnkpLFxuICAgICAgICAgICAgICAgICAgcmVnRXhwID0gdXRpbC5yZWdFeHBGcm9tR3JhbW1hckVudHJ5KGdyYW1tYXJFbnRyeSksXG4gICAgICAgICAgICAgICAgICBydWxlID0gbmV3IFJ1bGUodHlwZSwgcmVnRXhwKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlcyA9IG5ldyBSdWxlcyhhcnJheSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZXM7XG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBTaWduaWZpY2FudFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgcnVsZXMpIHtcclxuICAgIGNvbnN0IHRva2VucyA9IHRva2Vuc09yQ29udGVudHMucmVkdWNlKGZ1bmN0aW9uKHRva2VucywgdG9rZW5PclJlbWFpbmluZ0NvbnRlbnQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbk9yUmVtYWluaW5nQ29udGVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gdG9rZW5PclJlbWFpbmluZ0NvbnRlbnQsICAvLy9cclxuICAgICAgICAgICAgICAgICAgICBkZXB0aCA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBydWxlcywgZGVwdGgpO1xyXG4gICAgICBcclxuICAgICAgICAgICAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KHNpZ25pZmljYW50VG9rZW5zKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zdCBub25TaWduaWZpY2FudFRva2VuID0gdG9rZW5PclJlbWFpbmluZ0NvbnRlbnQ7ICAvLy9cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB0b2tlbnMucHVzaChub25TaWduaWZpY2FudFRva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VucztcclxuICAgICAgICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VucztcclxuXHJcbmZ1bmN0aW9uIHNpZ25pZmljYW50VG9rZW5zRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIHJ1bGVzLCBkZXB0aCkge1xyXG4gIGxldCBzaWduaWZpY2FudFRva2VucyA9IFtdO1xyXG5cclxuICBpZiAoY29udGVudCAhPT0gJycpIHtcclxuICAgIGNvbnN0IHJ1bGUgPSBydWxlcy5nZXRSdWxlKGRlcHRoKTtcclxuXHJcbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBuZXh0RGVwdGggPSBkZXB0aCArIDEsXHJcbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPSBydWxlLnNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCk7XHJcblxyXG4gICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9PT0gLTEpIHtcclxuICAgICAgICBzaWduaWZpY2FudFRva2VucyA9IHNpZ25pZmljYW50VG9rZW5zRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIHJ1bGVzLCBuZXh0RGVwdGgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBydWxlLnNpZ25pZmljYW50VG9rZW5Gcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSksXHJcbiAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbkxlbmd0aCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0TGVuZ3RoKCksXHJcbiAgICAgICAgICAgICAgbGVmdCA9IHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQsICAvLy9cclxuICAgICAgICAgICAgICByaWdodCA9IHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgKyBzaWduaWZpY2FudFRva2VuTGVuZ3RoLCAgLy8vXHJcbiAgICAgICAgICAgICAgbGVmdENvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBsZWZ0KSxcclxuICAgICAgICAgICAgICByaWdodENvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhyaWdodCksXHJcbiAgICAgICAgICAgICAgbGVmdFNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudEFuZExpbmUobGVmdENvbnRlbnQsIGxpbmUsIHJ1bGVzLCBuZXh0RGVwdGgpLFxyXG4gICAgICAgICAgICAgIHJpZ2h0U2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShyaWdodENvbnRlbnQsIGxpbmUsIHJ1bGVzLCBkZXB0aCk7XHJcblxyXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5zID0gW10uY29uY2F0KGxlZnRTaWduaWZpY2FudFRva2VucykuY29uY2F0KHNpZ25pZmljYW50VG9rZW4pLmNvbmNhdChyaWdodFNpZ25pZmljYW50VG9rZW5zKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyBydWxlIHRvIHBhcnNlIHRoZSBjb250ZW50ICcke2NvbnRlbnR9JyBvbiBsaW5lICR7bGluZX1gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzaWduaWZpY2FudFRva2VucztcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2VucycpLFxyXG4gICAgICBTdHJpbmdUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nJyk7XHJcblxyXG5jbGFzcyBTdHJpbmdUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpIHsgVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgU3RyaW5nVG9rZW4pOyB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nVG9rZW5zO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsJyk7XG5cbmNsYXNzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCBodG1sKSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIHRoaXMuaHRtbCA9IGh0bWw7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHRtbDtcbiAgfVxuICBcbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoOyAvLy9cbiAgfVxuICBcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIE5vblNpZ25pZmljYW50VG9rZW4pOyB9XG5cbiAgc3RhdGljIGNsb25lKHRva2VuLCBzdGFydFBvc2l0aW9uID0gMCwgZW5kUG9zaXRpb24gPSB0b2tlbi5nZXRMZW5ndGgoKSwgQ2xhc3MgPSBOb25TaWduaWZpY2FudFRva2VuKSB7XG4gICAgbGV0IGNsb25lZE5vblNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBsaW5lID0gdG9rZW4uZ2V0TGluZSgpO1xuXG4gICAgICBsZXQgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcbiAgICAgIFxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgICAgY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lZE5vblNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm9uU2lnbmlmaWNhbnRUb2tlbihub25TaWduaWZpY2FudFRva2VuLCBDbGFzcyA9IE5vblNpZ25pZmljYW50VG9rZW4pIHtcbiAgICBjb25zdCBjb250ZW50ID0gbm9uU2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGluZSA9IG5vblNpZ25pZmljYW50VG9rZW4uZ2V0TGluZSgpO1xuICAgIFxuICAgIG5vblNpZ25pZmljYW50VG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MpO1xuICAgIFxuICAgIHJldHVybiBub25TaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyA9IE5vblNpZ25pZmljYW50VG9rZW4pIHtcbiAgICBjb25zdCBodG1sID0gQ2xhc3MuaHRtbEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIGh0bWwpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGh0bWxGcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHV0aWwuc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGh0bWwgPSBzYW5pdGlzZWRDb250ZW50O1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25TaWduaWZpY2FudFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbCcpLFxuICAgICAgTm9uU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL25vblNpZ25pZmljYW50Jyk7XG5cbmNsYXNzIENvbW1lbnRUb2tlbiBleHRlbmRzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBtZXJnZShjb21tZW50VG9rZW4pIHtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuICAgIFxuICAgIGNvbnN0IGxpbmUgPSB0aGlzLmdldExpbmUoKSxcbiAgICAgICAgICBjb21tZW50VG9rZW5Db250ZW50ID0gY29tbWVudFRva2VuLmdldENvbnRlbnQoKTtcblxuICAgIGNvbnRlbnQgKz0gY29tbWVudFRva2VuQ29udGVudDtcblxuICAgIGNvbW1lbnRUb2tlbiA9IENvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7ICAvLy9cblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gQ29tbWVudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBDb21tZW50VG9rZW4pOyB9XG5cbiAgc3RhdGljIGNsb25lKHRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgQ2xhc3MgPSBDb21tZW50VG9rZW4pIHsgcmV0dXJuIFRva2VuLmNsb25lKHRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgQ2xhc3MpIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIENsYXNzID0gQ29tbWVudFRva2VuKSB7IHJldHVybiBUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MpOyB9XG5cbiAgc3RhdGljIGh0bWxGcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHV0aWwuc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCJjb21tZW50XCI+JHtpbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUsIHR5cGUsIGlubmVySFRNTCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuXG4gICAgdGhpcy5lcnJvciA9IHVuZGVmaW5lZDsgLy8vXG4gIH1cbiAgXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0SW5uZXJIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySFRNTDtcbiAgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gKHRoaXMuZXJyb3IgPT09IHRydWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICdlcnJvcicgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGUsXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7dGhpcy5pbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aDsgLy8vXG4gIH1cblxuICBzZXRFcnJvcihlcnJvcikge1xuICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBTaWduaWZpY2FudFRva2VuKSB9XG5cbiAgc3RhdGljIGNsb25lKHRva2VuLCBzdGFydFBvc2l0aW9uID0gMCwgZW5kUG9zaXRpb24gPSB0b2tlbi5nZXRMZW5ndGgoKSwgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuKSB7XG4gICAgbGV0IGNsb25lZFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBsaW5lID0gdG9rZW4uZ2V0TGluZSgpLFxuICAgICAgICAgICAgdHlwZSA9IHRva2VuLmdldFR5cGUoKTtcblxuICAgICAgbGV0IGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7XG5cbiAgICAgIGNsb25lZFNpZ25pZmljYW50VG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZWRTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4sIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbikge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsaW5lID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRMaW5lKCksXG4gICAgICAgICAgdHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpO1xuICAgIFxuICAgIHNpZ25pZmljYW50VG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlLCBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW4pIHtcbiAgICBjb25zdCBpbm5lckhUTUwgPSBDbGFzcy5pbm5lckhUTUxGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIHR5cGUsIGlubmVySFRNTCk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBpbm5lckhUTUxGcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHV0aWwuc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGlubmVySFRNTDtcbiAgfVxufVxuXG5TaWduaWZpY2FudFRva2VuLnR5cGVzID0ge1xuICBzdHJpbmc6ICdzdHJpbmcnLFxuICBlbmRPZkxpbmU6ICdlbmRPZkxpbmUnLFxuICB3aGl0ZXNwYWNlOiAnd2hpdGVzcGFjZSdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3NpZ25pZmljYW50Jyk7XG5cbmNsYXNzIEVuZE9mTGluZVRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBFbmRPZkxpbmVUb2tlbik7IH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlLCBFbmRPZkxpbmVUb2tlbik7IH1cbiAgXG4gIGdldEhUTUwoKSB7XG4gICAgY29uc3QgaHRtbCA9ICcnO1xuICAgIFxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUpIHtcbiAgICBjb25zdCBjb250ZW50ID0gJycsXG4gICAgICAgICAgdHlwZSA9IFNpZ25pZmljYW50VG9rZW4udHlwZXMuZW5kT2ZMaW5lLFxuICAgICAgICAgIGVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lVG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcbiAgICBcbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3NpZ25pZmljYW50Jyk7XG5cbmNsYXNzIFN0cmluZ1Rva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBTdHJpbmdUb2tlbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSwgU3RyaW5nVG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgbGV0IHN0cmluZ1Rva2VuID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvKFwiW15cIl0qXCIpLyk7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuICAgICAgXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG4gICAgICBcbiAgICAgIGNvbnN0IHR5cGUgPSBTaWduaWZpY2FudFRva2VuLnR5cGVzLnN0cmluZztcblxuICAgICAgc3RyaW5nVG9rZW4gPSBTdHJpbmdUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3RyaW5nVG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKC9cIlteXCJdKlwiLyk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmdUb2tlbjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9zaWduaWZpY2FudCcpO1xuXG5jbGFzcyBXaGl0ZXNwYWNlVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIFdoaXRlc3BhY2VUb2tlbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSwgV2hpdGVzcGFjZVRva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIGxldCB3aGl0ZXNwYWNlVG9rZW4gPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC8oW1xcdCBdKykvKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG4gICAgICBcbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cbiAgICAgIFxuICAgICAgY29uc3QgdHlwZSA9IFNpZ25pZmljYW50VG9rZW4udHlwZXMud2hpdGVzcGFjZTtcblxuICAgICAgd2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goL1tcXHQgXSsvKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdoaXRlc3BhY2VUb2tlbjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xyXG5cclxuY2xhc3MgVG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBUb2tlbikge1xyXG4gICAgbGV0IG9mZnNldCA9IDA7XHJcbiAgICBcclxuICAgIGNvbnN0IHRva2Vuc09yQ29udGVudHNMZW5ndGggPSB0b2tlbnNPckNvbnRlbnRzLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdG9rZW5zT3JDb250ZW50c0xlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBvZmZzZXRJbmRleCA9IGluZGV4ICsgb2Zmc2V0LFxyXG4gICAgICAgICAgdG9rZW5PckNvbnRlbnQgPSB0b2tlbnNPckNvbnRlbnRzW29mZnNldEluZGV4XTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdG9rZW5PckNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRva2VuT3JDb250ZW50LCAgLy8vXHJcbiAgICAgICAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCA9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudEZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBUb2tlbiksXHJcbiAgICAgICAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudExlbmd0aCA9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5sZW5ndGgsXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gb2Zmc2V0SW5kZXg7XHJcblxyXG4gICAgICAgIHV0aWwuc3BsaWNlQXJyYXkodG9rZW5zT3JDb250ZW50cywgc3RhcnQsIDEsIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCk7XHJcblxyXG4gICAgICAgIG9mZnNldCArPSB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRMZW5ndGggLSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRva2VucztcclxuXHJcbmZ1bmN0aW9uIHRva2Vuc09yUmVtYWluaW5nQ29udGVudEZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBUb2tlbikge1xyXG4gIGxldCByZW1haW5pbmdDb250ZW50LFxyXG4gICAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQgPSBbXSwgICAgICAgXHJcbiAgICAgIHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gVG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG4gIFxyXG4gIHdoaWxlICh0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCAhPT0gLTEpIHtcclxuICAgIGlmICh0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA+IDApIHtcclxuICAgICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50KTtcclxuXHJcbiAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5wdXNoKHJlbWFpbmluZ0NvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRva2VuID0gVG9rZW4uZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpLFxyXG4gICAgICAgICAgdG9rZW5MZW5ndGggPSB0b2tlbi5nZXRMZW5ndGgoKSxcclxuICAgICAgICAgIHRva2VuT2Zmc2V0ID0gdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgKyB0b2tlbkxlbmd0aDtcclxuICAgIFxyXG4gICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50LnB1c2godG9rZW4pO1xyXG4gICAgXHJcbiAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcodG9rZW5PZmZzZXQpO1xyXG5cclxuICAgIHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gVG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG4gIH1cclxuICBcclxuICBpZiAoY29udGVudCAhPT0gJycpIHtcclxuICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5wdXNoKHJlbWFpbmluZ0NvbnRlbnQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRva2Vuc09yUmVtYWluaW5nQ29udGVudDtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2VucycpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL3NpZ25pZmljYW50L3doaXRlc3BhY2UnKTtcclxuXHJcbmNsYXNzIFdoaXRlc3BhY2VUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpIHsgcmV0dXJuIFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIFdoaXRlc3BhY2VUb2tlbik7IH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBXaGl0ZXNwYWNlVG9rZW5zO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBlYXN5bGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgeyBUZXh0YXJlYSB9ID0gZWFzeSxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50LCBWZXJ0aWNhbFNwbGl0dGVyLCBvcHRpb25zIH0gPSBlYXN5bGF5b3V0LFxuICAgICAgeyBUT19USEVfUklHSFRfT0YgfSA9IG9wdGlvbnM7XG5cbmNvbnN0IGxlZnRDb2x1bW5TZWxlY3RvciA9ICcjbGVmdENvbHVtbicsXG4gICAgICBjb250ZW50VGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSNjb250ZW50JyxcbiAgICAgIHRva2Vuc1RleHRhcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjdG9rZW5zJyxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICB0b2tlbnNUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYSh0b2tlbnNUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGxlZnRDb2x1bW4gPSBuZXcgU2l6ZWFibGVFbGVtZW50KGxlZnRDb2x1bW5TZWxlY3Rvcik7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKCcubGVmdC52ZXJ0aWNhbC5zcGxpdHRlcicsIFRPX1RIRV9SSUdIVF9PRiwgbGVmdENvbHVtbik7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgY29udGVudFRleHRhcmVhT25LZXlVcChoYW5kbGVyKSB7XG4gICAgY29udGVudFRleHRhcmVhLm9uKCdrZXl1cCcsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVRva2VucyhsZXhlciwgZmlyc3RMaW5lSW5kZXgsIG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudFRleHRhcmVhVmFsdWUsICAvLy9cbiAgICAgICAgICAgIGNvbnRlbnRzID0gY29udGVudC5zcGxpdCgvXFxuLyksXG4gICAgICAgICAgICBsaW5lcyA9IGxleGVyLmxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzLCBmaXJzdExpbmVJbmRleCwgbWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpLFxuICAgICAgICAgICAgaHRtbHMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24oaHRtbHMsIGxpbmUsIGluZGV4KSB7XG4gICAgICAgICAgICAgIGNvbnN0IGxpbmVIVE1MID0gbGluZS5nZXRIVE1MKCksXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXIgPSBpbmRleCArIDEsXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgPSBgJHtsaW5lTnVtYmVyfTogJHtsaW5lSFRNTH1gO1xuICBcbiAgICAgICAgICAgICAgaHRtbHMgKz0gaHRtbDtcbiAgXG4gICAgICAgICAgICAgIHJldHVybiBodG1scztcbiAgICAgICAgICAgIH0sICcnKSxcbiAgICAgICAgICAgIHRva2Vuc1RleHRhcmVhSFRNTCA9IGh0bWxzOyAgLy8vXG5cbiAgICAgIHRva2Vuc1RleHRhcmVhLmh0bWwodG9rZW5zVGV4dGFyZWFIVE1MKTtcblxuICAgICAgY29udGVudFRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb250ZW50VGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cbiAgICAgIEV4YW1wbGUuY2xlYXJUb2tlbnMoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY2xlYXJUb2tlbnMoKSB7XG4gICAgY29uc3QgdG9rZW5zVGV4dGFyZWFIVE1MID0gJyc7XG5cbiAgICB0b2tlbnNUZXh0YXJlYS5odG1sKHRva2Vuc1RleHRhcmVhSFRNTCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQmFzaWNFeGFtcGxlOiByZXF1aXJlKCcuL2V4YW1wbGVzL2Jhc2ljJyksXG4gIEZsb3JlbmNlRXhhbXBsZTogcmVxdWlyZSgnLi9leGFtcGxlcy9mbG9yZW5jZScpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgQmFzaWNMZXhlciA9IHJlcXVpcmUoJy4uL2Jhc2ljL2xleGVyJyk7XG5cbmNvbnN0IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI3Rlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4nLFxuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IGBcXFxcK3xcXFxcLXxcXFxcKnxcXFxcL3xcXFxcKHxcXFxcKXxcXFxcZCtgO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5O1xuXG5sZXQgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhLFxuICAgIGxleGVyID0gbnVsbDtcblxuY2xhc3MgQmFzaWNFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhU2VsZWN0b3IpO1xuXG4gICAgY29uc3QgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhVmFsdWUgPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuOyAvLy9cblxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYS5zZXRWYWx1ZSh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEub25DaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcblxuICAgIEV4YW1wbGUuY29udGVudFRleHRhcmVhT25LZXlVcChmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgdXBkYXRlKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0V4YW1wbGU7XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgdXBkYXRlTGV4ZXIoKTtcblxuICBpZiAobGV4ZXIgIT09IG51bGwpIHtcbiAgICBFeGFtcGxlLnVwZGF0ZVRva2VucyhsZXhlcik7XG4gIH0gZWxzZSB7XG4gICAgRXhhbXBsZS5jbGVhclRva2VucygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxleGVyKCkge1xuICBjb25zdCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlLCAgLy8vXG4gICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSXNWYWxpZCA9IHJlZ0V4cFBhdHRlcm5Jc1ZhbGlkKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4pO1xuXG4gIGlmICh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSXNWYWxpZCkge1xuICAgIGNvbnN0IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCA9IG5ldyBSZWdFeHAodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiksXG4gICAgICAgIGdyYW1tYXIgPSBbXG4gICAgICAgICAgeyB0ZXJtaW5hbFN5bWJvbCA6IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCB9XG4gICAgICAgIF07XG5cbiAgICBsZXhlciA9IEJhc2ljTGV4ZXIuZnJvbUdyYW1tYXIoZ3JhbW1hcik7XG5cbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gIH0gZWxzZSB7XG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuXG4gICAgbGV4ZXIgPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZ0V4cFBhdHRlcm5Jc1ZhbGlkKHJlZ0V4cFBhdHRlcm4pIHtcbiAgbGV0IHZhbGlkID0gdHJ1ZTtcblxuICB0cnkge1xuICAgIG5ldyBSZWdFeHAocmVnRXhwUGF0dGVybik7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgdmFsaWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRXhhbXBsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGUnKSxcbiAgICAgIEZsb3JlbmNlTGV4ZXIgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9sZXhlcicpO1xuXG5jb25zdCBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBGbG9yZW5jZUV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IGZpcnN0TGluZUluZGV4ID0gMCxcbiAgICAgICAgICBtaW5pbXVtTGluZXNMZW5ndGggPSAyLFxuICAgICAgICAgIHByZXZpb3VzTGluZUluQ29tbWVudCA9IGZhbHNlLFxuICAgICAgICAgIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQgPSBmYWxzZTtcblxuICAgIEV4YW1wbGUuY29udGVudFRleHRhcmVhT25LZXlVcChmdW5jdGlvbigpIHtcbiAgICAgIEV4YW1wbGUudXBkYXRlVG9rZW5zKGZsb3JlbmNlTGV4ZXIsIGZpcnN0TGluZUluZGV4LCBtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCk7XG4gICAgfSk7XG5cbiAgICBFeGFtcGxlLnVwZGF0ZVRva2VucyhmbG9yZW5jZUxleGVyLCBmaXJzdExpbmVJbmRleCwgbWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VFeGFtcGxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcclxuICAgICAgRW5kT2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL2VuZE9mQ29tbWVudCcpLFxyXG4gICAgICBTdGFydE9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9zdGFydE9mQ29tbWVudCcpLFxyXG4gICAgICBNaWRkbGVPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vbWlkZGxlT2ZDb21tZW50Jyk7XHJcblxyXG5jbGFzcyBDb21tZW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBjb250ZXh0KSB7XHJcbiAgICBsZXQgY29udGVudCA9IHRva2Vuc09yQ29udGVudHMucG9wKCksXHJcbiAgICAgICAgY29tbWVudFRva2VuLFxyXG4gICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCxcclxuICAgICAgICBwcmV2aW91c0xpbmVJbkNvbW1lbnQgPSBjb250ZXh0LmlzUHJldmlvdXNMaW5lSW5Db21tZW50KCksXHJcbiAgICAgICAgaW5Db21tZW50ID0gKHByZXZpb3VzTGluZUluQ29tbWVudCA9PT0gdHJ1ZSk7XHJcblxyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgIGxldCBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7XHJcblxyXG4gICAgICBpZiAoaW5Db21tZW50KSB7XHJcbiAgICAgICAgY29uc3QgZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPSBFbmRPZkNvbW1lbnRUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCk7XHJcblxyXG4gICAgICAgIGlmIChlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9PT0gMCkge1xyXG4gICAgICAgICAgaW5Db21tZW50ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gRW5kT2ZDb21tZW50VG9rZW4uZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCA9IGNvbW1lbnRUb2tlbi5nZXRMZW5ndGgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGggPSB1dGlsLm1pbmltdW1CYXJNaW51c09uZShlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCwgY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gTWlkZGxlT2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzQ29tbWVudFRva2VuID0gdG9rZW5zT3JDb250ZW50cy5wb3AoKTtcclxuXHJcbiAgICAgICAgY29tbWVudFRva2VuID0gKHByZXZpb3VzQ29tbWVudFRva2VuID09PSB1bmRlZmluZWQpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50VG9rZW4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb21tZW50VG9rZW4ubWVyZ2UoY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgdG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPSBTdGFydE9mQ29tbWVudFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPT09IDApIHtcclxuICAgICAgICAgIGluQ29tbWVudCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5mcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICAgIHRva2Vuc09yQ29udGVudHMucHVzaChjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb21tZW50VG9rZW5MZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb250ZW50TGVuZ3RoID0gdXRpbC5taW5pbXVtQmFyTWludXNPbmUoc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCwgY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29uc3QgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzLnB1c2goY29udGVudCk7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlvdXNMaW5lSW5Db21tZW50ID0gaW5Db21tZW50OyAgLy8vXHJcblxyXG4gICAgY29udGV4dC5zZXRQcmV2aW91c0xpbmVJbkNvbW1lbnQocHJldmlvdXNMaW5lSW5Db21tZW50KTtcclxuXHJcbiAgICByZXR1cm4gaW5Db21tZW50O1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50VG9rZW5zO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBiYXNpY19sYXRpbiA9IGBcXFxcdXsyMX0tXFxcXHV7N0V9YCxcclxuICAgICAgbGF0aW4xX3N1cHBsZW1lbnQgPSBgXFxcXHV7QTF9LVxcXFx1e0ZGfWAsXHJcbiAgICAgIG1hdGhlbWF0aWNhbF9vcGVyYXRvcnMgPSBgXFxcXHV7MjIwMH0tXFxcXHV7MjJGRn1gLFxyXG4gICAgICBzdXBwbGVtZW50YWxfbWF0aGVtYXRpY2FsX29wZXJhdG9ycyA9IGBcXFxcdXsyQTAwfS1cXFxcdXsyQUZGfWAsXHJcbiAgICAgIG1pc2NlbGxhbmVvdXNfdGVjaG5pY2FsID0gYFxcXFx1ezIzMDB9LVxcXFx1ezIzZmZ9YCxcclxuICAgICAgbWF0aGVtYXRpY2FsX2FscGhhbnVtZXJpY19zeW1ib2xzID0gYFxcXFx1ezFENDAwfS1cXFxcdXsxRDdGRn1gLFxyXG4gICAgICB1bmljb2RlX2NoYXJhY3RlciA9XHJcblxyXG5gXHJcbiR7YmFzaWNfbGF0aW59XHJcbiR7bGF0aW4xX3N1cHBsZW1lbnR9XHJcbiR7bWF0aGVtYXRpY2FsX29wZXJhdG9yc31cclxuJHtzdXBwbGVtZW50YWxfbWF0aGVtYXRpY2FsX29wZXJhdG9yc31cclxuJHttaXNjZWxsYW5lb3VzX3RlY2huaWNhbH1cclxuJHttYXRoZW1hdGljYWxfYWxwaGFudW1lcmljX3N5bWJvbHN9XHJcbmAsXHJcblxyXG4gICAgdW5pY29kZV9jaGFyYWN0ZXJzID0gYFske3VuaWNvZGVfY2hhcmFjdGVyfV0rYCxcclxuICAgIHVuYXNzaWduZWQgPSB1bmljb2RlX2NoYXJhY3RlcnM7ICAvLy9cclxuXHJcbmNvbnN0IGdyYW1tYXIgPSBbXHJcbiAgXHJcbiAgeyBzcGVjaWFsICAgIDogLyx8O3xcXHt8XFx9fD18OnxcXCh8XFwpfFxcLlxcLlxcLnxcXC5cXC4vIH0sXHJcbiAgXHJcbiAgeyBpbmNsdWRlICAgIDogL15pbmNsdWRlJC8gfSxcclxuICBcclxuICB7IGtleXdvcmQgICAgOiAvXig/OlJ1bGV8QXhpb218VGhlb3JlbXxMZW1tYXxQcmVtaXNlc3xQcmVtaXNlfENvbmNsdXNpb258UHJvb2Z8VGhlcmVmb3JlfFN1cHBvc2V8VGhlbnxIZW5jZXxWYXJpYWJsZXN8VmFyaWFibGV8Q29uc3RydWN0b3JzfENvbnN0cnVjdG9yfFR5cGV8T2JqZWN0fERlZmluaXRpb258ZnJvbXxieXxsZXR8aXN8bm90fGlufGZyZWV8ZGVmaW5lZHx1bmRlZmluZWQpJC8gfSxcclxuICBcclxuICB7IHVuYXNzaWduZWQgOiBuZXcgUmVnRXhwKGBeJHt1bmFzc2lnbmVkfSRgLCAndScpIH1cclxuICAgIFxyXG5dO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBncmFtbWFyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICAgIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcclxuICAgICAgQ29udGV4dCA9IHJlcXVpcmUoJy4uL2NvbW1vbi9jb250ZXh0JyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyk7XHJcblxyXG5jbGFzcyBGbG9yZW5jZUxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIGxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzLCBmaXJzdExpbmVJbmRleCwgbWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQ29udGV4dChtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCksXHJcbiAgICAgICAgICBsaW5lcyA9IHN1cGVyLmxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzLCBmaXJzdExpbmVJbmRleCwgY29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFNpZ25pZmljYW50VG9rZW5UeXBlcygpIHtcclxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IENvbW1vbkxleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21HcmFtbWFyKGdyYW1tYXIpO1xyXG5cclxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IENvbW1vbkxleGVyLnJ1bGVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgICBmbG9yZW5jZUxleGVyID0gbmV3IEZsb3JlbmNlTGV4ZXIocnVsZXMsIExpbmUpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUxleGVyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi9jb21tZW50VG9rZW5zJyksXHJcbiAgICAgIENvbW1vbkxpbmUgPSByZXF1aXJlKCcuLi9jb21tb24vbGluZScpLFxyXG4gICAgICBTdHJpbmdUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vc3RyaW5nVG9rZW5zJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vd2hpdGVzcGFjZVRva2VucycpLFxyXG4gICAgICBFbmRPZkxpbmVUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9lbmRPZkxpbmUnKTtcclxuXHJcbmNsYXNzIExpbmUgZXh0ZW5kcyBDb21tb25MaW5lIHtcclxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgcnVsZXMpIHtcclxuICAgIGNvbnN0IGxpbmUgPSBzdXBlci5mcm9tQ29udGVudChMaW5lLCBjb250ZW50LCBjb250ZXh0LCBydWxlcywgQ29tbWVudFRva2VucywgU3RyaW5nVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKSxcclxuICAgICAgICAgIGxpbmVJbkNvbW1lbnQgPSBsaW5lLmlzSW5Db21tZW50KCk7XHJcblxyXG4gICAgaWYgKCFsaW5lSW5Db21tZW50KSB7XHJcbiAgICAgIGNvbnN0IGVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lVG9rZW4uZnJvbUxpbmUobGluZSk7XHJcblxyXG4gICAgICBsaW5lLnB1c2hUb2tlbihlbmRPZkxpbmVUb2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQnKTtcblxuY2xhc3MgRW5kT2ZDb21tZW50VG9rZW4gZXh0ZW5kcyBDb21tZW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gQ29tbWVudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBFbmRPZkNvbW1lbnRUb2tlbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgRW5kT2ZDb21tZW50VG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgbGV0IGVuZE9mQ29tbWVudFRva2VuID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXlxcKlxcLy8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBlbmRPZkNvbW1lbnRUb2tlbiA9IEVuZE9mQ29tbWVudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5kT2ZDb21tZW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKC9cXCpcXC8vKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mQ29tbWVudFRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQnKTtcblxuY2xhc3MgTWlkZGxlT2ZDb21tZW50VG9rZW4gZXh0ZW5kcyBDb21tZW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gQ29tbWVudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBNaWRkbGVPZkNvbW1lbnRUb2tlbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIGxlbmd0aCkge1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cigwLCBsZW5ndGgpOyAgLy8vXG5cbiAgICBjb25zdCBtaWRkbGVPZkNvbW1lbnRUb2tlbiA9IENvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgTWlkZGxlT2ZDb21tZW50VG9rZW4pO1xuXG4gICAgcmV0dXJuIG1pZGRsZU9mQ29tbWVudFRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWlkZGxlT2ZDb21tZW50VG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50Jyk7XG5cbmNsYXNzIFN0YXJ0T2ZDb21tZW50VG9rZW4gZXh0ZW5kcyBDb21tZW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gQ29tbWVudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBTdGFydE9mQ29tbWVudFRva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkgeyByZXR1cm4gQ29tbWVudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBTdGFydE9mQ29tbWVudFRva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIGxldCBzdGFydE9mQ29tbWVudFRva2VuID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXlxcL1xcKi8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBzdGFydE9mQ29tbWVudFRva2VuID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzdGFydE9mQ29tbWVudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvXFwvXFwqLyk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdGFydE9mQ29tbWVudFRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgdXRpbCB7XG4gIHN0YXRpYyBtaW5pbXVtQmFyTWludXNPbmUoKSB7XG4gICAgY29uc3QgdmFsdWVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgICBtaW5pbXVtQmFyTWludXNPbmUgPSB2YWx1ZXMucmVkdWNlKGZ1bmN0aW9uKG1pbmltdW1CYXJNaW51c09uZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IC0xKSB7XG4gICAgICAgICAgICAgIG1pbmltdW1CYXJNaW51c09uZSA9IChtaW5pbXVtQmFyTWludXNPbmUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4obWluaW11bUJhck1pbnVzT25lLCB2YWx1ZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIHJldHVybiBtaW5pbXVtQmFyTWludXNPbmU7XG4gICAgICAgICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gbWluaW11bUJhck1pbnVzT25lO1xuICB9XG5cbiAgc3RhdGljIHNwbGljZUFycmF5KGFycmF5LCBzdGFydCwgZGVsZXRlQ291bnQsIGl0ZW1zQXJyYXkpIHtcbiAgICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudF0uY29uY2F0KGl0ZW1zQXJyYXkpO1xuICBcbiAgICBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5LCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBpbmRleE9mKGFycmF5LCBlbGVtZW50KSB7XG4gICAgbGV0IGluZGV4ID0gdW5kZWZpbmVkOyAgLy8vXG5cbiAgICBhcnJheS5zb21lKGZ1bmN0aW9uKGFycmF5RWxlbWVudCwgYXJyYXlJbmRleCkge1xuICAgICAgaWYgKGVsZW1lbnQgPT09IGFycmF5RWxlbWVudCkge1xuICAgICAgICBpbmRleCA9IGFycmF5SW5kZXg7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBzdGF0aWMgdHlwZUZyb21HcmFtbWFyRW50cnkoZ3JhbW1hckVudHJ5KSB7XG4gICAgY29uc3QgZ3JhbW1hckVudHJ5S2V5cyA9IE9iamVjdC5rZXlzKGdyYW1tYXJFbnRyeSksXG4gICAgICAgICAgZmlyc3RHcmFtbWFyRW50cnlLZXkgPSBmaXJzdChncmFtbWFyRW50cnlLZXlzKSxcbiAgICAgICAgICB0eXBlID0gZmlyc3RHcmFtbWFyRW50cnlLZXk7ICAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9O1xuXG4gIHN0YXRpYyByZWdFeHBGcm9tR3JhbW1hckVudHJ5KGdyYW1tYXJFbnRyeSkge1xuICAgIGNvbnN0IHR5cGUgPSB1dGlsLnR5cGVGcm9tR3JhbW1hckVudHJ5KGdyYW1tYXJFbnRyeSksXG4gICAgICAgICAgcmVnRXhwID0gZ3JhbW1hckVudHJ5W3R5cGVdO1xuXG4gICAgcmV0dXJuIHJlZ0V4cDtcbiAgfTtcblxuICBzdGF0aWMgZmluZFJlZ0V4cEZyb21UeXBlKGdyYW1tYXIsIHR5cGUpIHtcbiAgICBjb25zdCBlbnRyeSA9IGdyYW1tYXIuZmluZChmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICAgICAgY29uc3QgZ3JhbW1hclR5cGUgPSB1dGlsLnR5cGVGcm9tR3JhbW1hckVudHJ5KGVudHJ5KSxcbiAgICAgICAgICAgICAgICAgIGZvdW5kID0gKGdyYW1tYXJUeXBlID09PSB0eXBlKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcmVnRXhwID0gdXRpbC5yZWdFeHBGcm9tR3JhbW1hckVudHJ5KGVudHJ5KTtcblxuICAgIHJldHVybiByZWdFeHA7XG4gIH07XG5cbiAgc3RhdGljIHNhbml0aXNlQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvJi8sJyZhbXA7JykucmVwbGFjZSgvPC8sICcmbHQ7JykucmVwbGFjZSgvPi8sICcmZ3Q7Jyk7XG5cbiAgICByZXR1cm4gc2FuaXRpc2VkQ29udGVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWw7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgb3B0aW9uczogcmVxdWlyZSgnLi9saWIvb3B0aW9ucycpLFxuICBTaXplYWJsZUVsZW1lbnQ6IHJlcXVpcmUoJy4vbGliL3NpemVhYmxlRWxlbWVudCcpLFxuICBWZXJ0aWNhbFNwbGl0dGVyOiByZXF1aXJlKCcuL2xpYi9zcGxpdHRlci92ZXJ0aWNhbCcpLFxuICBIb3Jpem9udGFsU3BsaXR0ZXI6IHJlcXVpcmUoJy4vbGliL3NwbGl0dGVyL2hvcml6b250YWwnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIEJvZHkgPSBlYXN5LkJvZHk7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpO1xuXG5sZXQgcHJldmlvdXNDdXJzb3I7ICAvLy9cblxuY2xhc3MgY3Vyc29yIHtcbiAgc3RhdGljIGNvbHVtblJlc2l6ZSgpIHtcbiAgICBjb25zdCBjdXJyZW50Q3Vyc29yID0gdGhpcy5nZXRDdXJyZW50Q3Vyc29yKCk7XG5cbiAgICBpZiAoY3VycmVudEN1cnNvciAhPT0gJ2NvbC1yZXNpemUnKSB7XG4gICAgICBwcmV2aW91c0N1cnNvciA9IGN1cnJlbnRDdXJzb3I7XG5cbiAgICAgIHRoaXMuc2V0Q3Vyc29yKCdjb2wtcmVzaXplJyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJvd1Jlc2l6ZSgpIHtcbiAgICBjb25zdCBjdXJyZW50Q3Vyc29yID0gdGhpcy5nZXRDdXJyZW50Q3Vyc29yKCk7XG5cbiAgICBpZiAoY3VycmVudEN1cnNvciAhPT0gJ3Jvdy1yZXNpemUnKSB7XG4gICAgICBwcmV2aW91c0N1cnNvciA9IGN1cnJlbnRDdXJzb3I7XG5cbiAgICAgIHRoaXMuc2V0Q3Vyc29yKCdyb3ctcmVzaXplJyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJlc2V0KCkge1xuICAgIHRoaXMuc2V0Q3Vyc29yKHByZXZpb3VzQ3Vyc29yKTsgLy8vXG4gIH1cblxuICBzdGF0aWMgZ2V0Q3VycmVudEN1cnNvcigpIHtcbiAgICBjb25zdCBjdXJyZW50Q3Vyc29yID0gYm9keS5jc3MoJ2N1cnNvcicpOyAgLy8vXG5cbiAgICByZXR1cm4gY3VycmVudEN1cnNvciB8fCAnYXV0byc7IC8vL1xuICB9XG5cbiAgc3RhdGljIHNldEN1cnNvcihjdXJzb3IpIHtcbiAgICBjb25zdCBjc3MgPSB7XG4gICAgICBjdXJzb3I6IGN1cnNvclxuICAgIH07XG5cbiAgICBib2R5LmNzcyhjc3MpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3Vyc29yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBBQk9WRSA9ICsxLFxuICAgICAgQkVMT1cgPSAtMSxcbiAgICAgIFRPX1RIRV9MRUZUX09GID0gKzEsXG4gICAgICBUT19USEVfUklHSFRfT0YgPSAtMSxcbiAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIHNpdHVhdGVkOiB7XG4gICAgICAgICAgQUJPVkU6IEFCT1ZFLFxuICAgICAgICAgIEJFTE9XOiBCRUxPVyxcbiAgICAgICAgICBUT19USEVfTEVGVF9PRjogVE9fVEhFX0xFRlRfT0YsXG4gICAgICAgICAgVE9fVEhFX1JJR0hUX09GOiBUT19USEVfUklHSFRfT0ZcbiAgICAgICAgfSxcbiAgICAgICAgRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORzogJ0VTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcnXG4gICAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9wdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICB7IERpdiB9ID0gZWFzeTtcblxuY2xhc3MgU2l6ZWFibGVFbGVtZW50IGV4dGVuZHMgRGl2IHtcbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICBjb25zdCBtaW5pbXVtV2lkdGggPSB0aGlzLmdldE1pbmltdW1XaWR0aCgpLFxuICAgICAgICAgIG1heGltdW1XaWR0aCA9IHRoaXMuZ2V0TWF4aW11bVdpZHRoKCk7XG5cbiAgICBpZiAobWluaW11bVdpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIG1pbmltdW1XaWR0aCk7XG4gICAgfVxuICAgIGlmIChtYXhpbXVtV2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgd2lkdGggPSBNYXRoLm1pbih3aWR0aCwgbWF4aW11bVdpZHRoKTtcbiAgICB9XG5cbiAgICBzdXBlci5zZXRXaWR0aCh3aWR0aCk7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgY29uc3QgbWluaW11bUhlaWdodCA9IHRoaXMuZ2V0TWluaW11bUhlaWdodCgpLFxuICAgICAgICAgIG1heGltdW1IZWlnaHQgPSB0aGlzLmdldE1heGltdW1IZWlnaHQoKTtcblxuICAgIGlmIChtaW5pbXVtSGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhlaWdodCA9IE1hdGgubWF4KGhlaWdodCwgbWluaW11bUhlaWdodCk7XG4gICAgfVxuICAgIGlmIChtYXhpbXVtSGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhlaWdodCA9IE1hdGgubWluKGhlaWdodCwgbWF4aW11bUhlaWdodCk7XG4gICAgfVxuXG4gICAgc3VwZXIuc2V0SGVpZ2h0KGhlaWdodCk7XG4gIH1cblxuICBnZXRNaW5pbXVtV2lkdGgoKSB7IFxuICAgIGNvbnN0IG1pbldpZHRoID0gdGhpcy5jc3MoJ21pbi13aWR0aCcpLFxuICAgICAgICAgIG1pbmltdW1XaWR0aCA9IGluUGl4ZWxzKG1pbldpZHRoKTtcblxuICAgIHJldHVybiBtaW5pbXVtV2lkdGg7XG4gIH1cblxuICBnZXRNaW5pbXVtSGVpZ2h0KCkge1xuICAgIGNvbnN0IG1pbkhlaWdodCA9IHRoaXMuY3NzKCdtaW4taGVpZ2h0JyksXG4gICAgICAgICAgbWluaW11bUhlaWdodCA9IGluUGl4ZWxzKG1pbkhlaWdodCk7XG5cbiAgICByZXR1cm4gbWluaW11bUhlaWdodDtcbiAgfVxuXG4gIGdldE1heGltdW1XaWR0aCgpIHtcbiAgICBjb25zdCBtYXhXaWR0aCA9IHRoaXMuY3NzKCdtYXgtd2lkdGgnKSxcbiAgICAgICAgICBtYXhpbXVtV2lkdGggPSBpblBpeGVscyhtYXhXaWR0aCk7XG5cbiAgICByZXR1cm4gbWF4aW11bVdpZHRoO1xuICB9XG5cbiAgZ2V0TWF4aW11bUhlaWdodCgpIHtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSB0aGlzLmNzcygnbWF4LWhlaWdodCcpLFxuICAgICAgICAgIG1heGltdW1IZWlnaHQgPSBpblBpeGVscyhtYXhIZWlnaHQpO1xuXG4gICAgcmV0dXJuIG1heGltdW1IZWlnaHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHJldHVybiBEaXYuZnJvbVByb3BlcnRpZXMoU2l6ZWFibGVFbGVtZW50LCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpemVhYmxlRWxlbWVudDtcblxuZnVuY3Rpb24gaW5QaXhlbHMocXVhbnRpdHkpIHtcbiAgbGV0IHBpeGVscztcblxuICBjb25zdCBtYXRjaGVzID0gcXVhbnRpdHkubWF0Y2goLyhbMC05XSopcHgkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBpeGVscyA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gcGl4ZWxzO1xufVxuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICB7IHdpbmRvdywgRWxlbWVudCB9ID0gZWFzeTtcblxuY29uc3Qgb3B0aW9ucyA9IHJlcXVpcmUoJy4vb3B0aW9ucycpO1xuXG5jb25zdCBFU0NBUEVfS0VZQ09ERSA9IDI3O1xuXG5jbGFzcyBTcGxpdHRlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvciwgc2l0dWF0ZWQsIHNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLnNpdHVhdGVkID0gc2l0dWF0ZWQ7XG4gICAgdGhpcy5zaXplYWJsZUVsZW1lbnQgPSBzaXplYWJsZUVsZW1lbnQ7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgd2luZG93Lm9uKCdtb3VzZXVwIGJsdXInLCB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKSk7ICAvLy9cbiAgICBcbiAgICB3aW5kb3cub25Nb3VzZU1vdmUodGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU92ZXIodGhpcy5tb3VzZU92ZXIuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5vbk1vdXNlT3V0KHRoaXMubW91c2VPdXQuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHNldE9wdGlvbihvcHRpb24pIHtcbiAgICB0aGlzLm9wdGlvbnNbb3B0aW9uXSA9IHRydWU7XG4gIH1cblxuICB1bnNldE9wdGlvbihvcHRpb24pIHtcbiAgICBkZWxldGUodGhpcy5vcHRpb25zW29wdGlvbl0pO1xuICB9XG5cbiAgaGFzT3B0aW9uKG9wdGlvbikge1xuICAgIG9wdGlvbiA9ICh0aGlzLm9wdGlvbnNbb3B0aW9uXSA9PT0gdHJ1ZSk7IC8vL1xuXG4gICAgcmV0dXJuIG9wdGlvbjtcbiAgfVxuICBcbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgb25EcmFnKGRyYWdIYW5kbGVyKSB7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuICB9XG5cbiAgc3RhcnREcmFnZ2luZygpIHtcbiAgICBjb25zdCBlc2NhcGVLZXlTdG9wc0RyYWdnaW5nID0gdGhpcy5oYXNPcHRpb24ob3B0aW9ucy5FU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HKTtcblxuICAgIGlmIChlc2NhcGVLZXlTdG9wc0RyYWdnaW5nKSB7XG4gICAgICB3aW5kb3cub24oJ2tleWRvd24nLCB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICB9XG5cbiAgc3RvcERyYWdnaW5nKCkge1xuICAgIGNvbnN0IGVzY2FwZUtleVN0b3BzRHJhZ2dpbmcgPSB0aGlzLmhhc09wdGlvbihvcHRpb25zLkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcpO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmcpIHtcbiAgICAgIHdpbmRvdy5vZmYoJ2tleWRvd24nLCB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dpbmc7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHNpdHVhdGVkLCBzaXplYWJsZUVsZW1lbnQsIG9uRHJhZyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBkcmFnSGFuZGxlciA9IG9uRHJhZzsgLy8vXG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgc2l0dWF0ZWQsIHNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU3BsaXR0ZXIsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGlnbm9yZWRBdHRyaWJ1dGVzOiBbXG4gICAgJ3NpdHVhdGVkJyxcbiAgICAnc2l6ZWFibGVFbGVtZW50JyxcbiAgICAnb25EcmFnJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTcGxpdHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3Vyc29yID0gcmVxdWlyZSgnLi4vY3Vyc29yJyksXG4gICAgICBTcGxpdHRlciA9IHJlcXVpcmUoJy4uL3NwbGl0dGVyJyk7XG5cbmNsYXNzIEhvcml6b250YWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHNpdHVhdGVkLCBzaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IsIHNpdHVhdGVkLCBzaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gbnVsbDtcblxuICAgIHRoaXMubW91c2VUb3AgPSBudWxsO1xuICB9XG5cbiAgbW91c2VVcCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJlc2V0KCk7XG5cbiAgICAgIGlmICh0aGlzLmRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlTW91c2VUb3AgPSBtb3VzZVRvcCAtIHRoaXMubW91c2VUb3AsXG4gICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuc2l6ZWFibGVFbGVtZW50SGVpZ2h0IC0gdGhpcy5zaXR1YXRlZCAqIHJlbGF0aXZlTW91c2VUb3A7XG5cbiAgICAgICAgdGhpcy5zaXplYWJsZUVsZW1lbnQuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICAgICAgY29uc3Qgc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5zaXplYWJsZUVsZW1lbnQuZ2V0SGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZHJhZ0hhbmRsZXIpIHtcbiAgICAgICAgICB0aGlzLmRyYWdIYW5kbGVyKHNpemVhYmxlRWxlbWVudEhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjdXJzb3Iucm93UmVzaXplKCk7XG5cbiAgICAgIHRoaXMubW91c2VUb3AgPSBtb3VzZVRvcDtcblxuICAgICAgdGhpcy5zaXplYWJsZUVsZW1lbnRIZWlnaHQgPSB0aGlzLnNpemVhYmxlRWxlbWVudC5nZXRIZWlnaHQoKTtcblxuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZU92ZXIoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5yb3dSZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU91dCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gU3BsaXR0ZXIuZnJvbVByb3BlcnRpZXMoSG9yaXpvbnRhbFNwbGl0dGVyLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhvcml6b250YWxTcGxpdHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3Vyc29yID0gcmVxdWlyZSgnLi4vY3Vyc29yJyksXG4gICAgICBTcGxpdHRlciA9IHJlcXVpcmUoJy4uL3NwbGl0dGVyJyk7XG5cbmNsYXNzIFZlcnRpY2FsU3BsaXR0ZXIgZXh0ZW5kcyBTcGxpdHRlciB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBzaXR1YXRlZCwgc2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yLCBzaXR1YXRlZCwgc2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLnNpemVhYmxlRWxlbWVudFdpZHRoID0gbnVsbDtcblxuICAgIHRoaXMubW91c2VMZWZ0ID0gbnVsbDtcbiAgfVxuXG4gIG1vdXNlVXAoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5yZXNldCgpO1xuXG4gICAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICBjb25zdCByZWxhdGl2ZU1vdXNlTGVmdCA9IG1vdXNlTGVmdCAtIHRoaXMubW91c2VMZWZ0LFxuICAgICAgICAgICAgICB3aWR0aCA9IHRoaXMuc2l6ZWFibGVFbGVtZW50V2lkdGggLSB0aGlzLnNpdHVhdGVkICogcmVsYXRpdmVNb3VzZUxlZnQ7XG5cbiAgICAgICAgdGhpcy5zaXplYWJsZUVsZW1lbnQuc2V0V2lkdGgod2lkdGgpO1xuXG4gICAgICAgIGNvbnN0IHNpemVhYmxlRWxlbWVudFdpZHRoID0gdGhpcy5zaXplYWJsZUVsZW1lbnQuZ2V0V2lkdGgoKTtcblxuICAgICAgICBpZiAodGhpcy5kcmFnSGFuZGxlcikge1xuICAgICAgICAgIHRoaXMuZHJhZ0hhbmRsZXIoc2l6ZWFibGVFbGVtZW50V2lkdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xuXG4gICAgICB0aGlzLm1vdXNlTGVmdCA9IG1vdXNlTGVmdDtcblxuICAgICAgdGhpcy5zaXplYWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuc2l6ZWFibGVFbGVtZW50LmdldFdpZHRoKCk7XG5cbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VPdmVyKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IuY29sdW1uUmVzaXplKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VPdXQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5yZXNldCgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIFNwbGl0dGVyLmZyb21Qcm9wZXJ0aWVzKFZlcnRpY2FsU3BsaXR0ZXIsIHByb3BlcnRpZXMpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2FsU3BsaXR0ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB3aW5kb3c6IHJlcXVpcmUoJy4vbGliL3dpbmRvdycpLFxuICBkb2N1bWVudDogcmVxdWlyZSgnLi9saWIvZG9jdW1lbnQnKSxcbiAgVGV4dEVsZW1lbnQ6IHJlcXVpcmUoJy4vbGliL3RleHRFbGVtZW50JyksXG4gIERpdjogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9kaXYnKSxcbiAgU3BhbjogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9zcGFuJyksXG4gIEJvZHk6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvYm9keScpLFxuICBFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50JyksXG4gIExpbms6IHJlcXVpcmUoJy4vbGliL2lucHV0RWxlbWVudC9saW5rJyksXG4gIElucHV0OiByZXF1aXJlKCcuL2xpYi9pbnB1dEVsZW1lbnQvaW5wdXQnKSxcbiAgU2VsZWN0OiByZXF1aXJlKCcuL2xpYi9pbnB1dEVsZW1lbnQvc2VsZWN0JyksXG4gIEJ1dHRvbjogcmVxdWlyZSgnLi9saWIvaW5wdXRFbGVtZW50L2J1dHRvbicpLFxuICBDaGVja2JveDogcmVxdWlyZSgnLi9saWIvaW5wdXRFbGVtZW50L2NoZWNrYm94JyksXG4gIFRleHRhcmVhOiByZXF1aXJlKCcuL2xpYi9pbnB1dEVsZW1lbnQvdGV4dGFyZWEnKSxcbiAgSW5wdXRFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9pbnB1dEVsZW1lbnQnKSxcbiAgQm91bmRzOiByZXF1aXJlKCcuL2xpYi9taXNjL2JvdW5kcycpLFxuICBPZmZzZXQ6IHJlcXVpcmUoJy4vbGliL21pc2Mvb2Zmc2V0JyksXG4gIFJlYWN0OiByZXF1aXJlKCcuL2xpYi9yZWFjdCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyk7XG5cbmNsYXNzIERvY3VtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQ7XG5cbiAgICB0aGlzLmhhbmRsZXJzTWFwID0ge307XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBEb2N1bWVudCgpOyAgLy8vXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE9mZnNldCA9IHJlcXVpcmUoJy4vbWlzYy9vZmZzZXQnKSxcbiAgICAgIEJvdW5kcyA9IHJlcXVpcmUoJy4vbWlzYy9ib3VuZHMnKSxcbiAgICAgIGpzeE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9qc3gnKSxcbiAgICAgIGV2ZW50TWl4aW4gPSByZXF1aXJlKCcuL21peGluL2V2ZW50JyksXG4gICAgICBjbGlja01peGluID0gcmVxdWlyZSgnLi9taXhpbi9jbGljaycpLFxuICAgICAgbW91c2VNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vbW91c2UnKSxcbiAgICAgIHJlc2l6ZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9yZXNpemUnKTtcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzO1xuICAgIFxuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSB7fTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gRWxlbWVudC5jbG9uZSh0aGlzKTsgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcyhpbmNsdWRlQm9yZGVyID0gZmFsc2UpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gZmFsc2UpIHtcbiAgICBjb25zdCB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDsgfVxuXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gZmFsc2UpIHtcbiAgICBjb25zdCBoZWlnaHQgPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy5kb21FbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7IH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9ICcnOyB9XG5cbiAgcHJlcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBmaXJzdENoaWxkRE9NRWxlbWVudCk7XG4gIH1cbiAgXG4gIGFwcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RTaWJsaW5nRE9NRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQuZmlyc3RDaGlsZDsgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIGZpcnN0U2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50RWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50RWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuICB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSAnYmxvY2snKSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheVN0eWxlOyB9XG5cbiAgaGlkZSgpIHsgdGhpcy5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7IH1cblxuICBkaXNhYmxlKCkgeyB0aGlzLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTsgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGh0bWwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MOyAvLy9cblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG4gICAgfVxuICB9XG5cbiAgY3NzKGNzcykge1xuICAgIGlmIChjc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIGNzcyA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcHV0ZWRTdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGNvbXB1dGVkU3R5bGVbMF0sICAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjc3MpOyAvLy9cblxuICAgICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY3NzW25hbWVdO1xuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICBnZXREZXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBkb21Ob2RlID0gdGhpcy5kb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgZGVzY2VuZGFudERPTU5vZGVzID0gZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSksXG4gICAgICAgICAgZGVzY2VuZGFudEVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXMoZGVzY2VuZGFudERPTU5vZGVzLCBzZWxlY3Rvcik7XG5cbiAgICByZXR1cm4gZGVzY2VuZGFudEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0Q2hpbGRFbGVtZW50cyhzZWxlY3RvciA9ICcqJykge1xuICAgIGNvbnN0IGNoaWxkRE9NTm9kZXMgPSB0aGlzLmRvbUVsZW1lbnQuY2hpbGROb2RlcyxcbiAgICAgICAgICBjaGlsZERPTUVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXMoY2hpbGRET01Ob2Rlcywgc2VsZWN0b3IpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhjaGlsZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0UGFyZW50RWxlbWVudChzZWxlY3RvciA9ICcqJykge1xuICAgIGxldCBwYXJlbnRFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGlmIChwYXJlbnRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBpZiAocGFyZW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50cyA9IFtwYXJlbnRET01FbGVtZW50XSxcbiAgICAgICAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyksXG4gICAgICAgICAgICAgIGZpcnN0UGFyZW50RWxlbWVudCA9IGZpcnN0KHBhcmVudEVsZW1lbnRzKTtcblxuICAgICAgICBwYXJlbnRFbGVtZW50ID0gZmlyc3RQYXJlbnRFbGVtZW50IHx8IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBnZXRBc2NlbmRhbnRFbGVtZW50cyhzZWxlY3RvciA9ICcqJykge1xuICAgIGNvbnN0IGFzY2VuZGFudERPTUVsZW1lbnRzID0gW10sXG4gICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgbGV0IGFzY2VuZGFudERPTUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG4gICAgd2hpbGUgKGFzY2VuZGFudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChhc2NlbmRhbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFzY2VuZGFudERPTUVsZW1lbnRzLnB1c2goYXNjZW5kYW50RE9NRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGFzY2VuZGFudERPTUVsZW1lbnQgPSBhc2NlbmRhbnRET01FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgYXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhhc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gYXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoQ2xhc3MsIGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGRlZXAgPSB0cnVlLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQuY2xvbmVOb2RlKGRlZXApO1xuXG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG91dGVyRE9NRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgb3V0ZXJET01FbGVtZW50LmlubmVySFRNTCA9IGh0bWw7ICAvLy9cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBvdXRlckRPTUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IENsYXNzLnRhZ05hbWUsXG4gICAgICAgICAgaHRtbCA9IGA8JHt0YWdOYW1lfT48LyR7dGFnTmFtZX0+YCxcbiAgICAgICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGNvbnN0IGlnbm9yZWRQcm9wZXJ0aWVzID0gQ2xhc3MuaWdub3JlZFByb3BlcnRpZXMsXG4gICAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBDbGFzcy5hZGRpdGlvbmFsUHJvcGVydGllcztcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzLCBhZGRpdGlvbmFsUHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBqc3hNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCByZXNpemVNaXhpbik7XG5cbkVsZW1lbnQuTEVGVF9NT1VTRV9CVVRUT04gPSAwO1xuRWxlbWVudC5NSURETEVfTU9VU0VfQlVUVE9OID0gMTtcbkVsZW1lbnQuUklHSFRfTU9VU0VfQlVUVE9OID0gMjtcblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlcihkb21FbGVtZW50cywgZnVuY3Rpb24oZG9tRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiAoZG9tRWxlbWVudC5fX2VsZW1lbnRfXyAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfSksXG4gICAgICAgIGVsZW1lbnRzID0gZG9tRWxlbWVudHNXaXRoRWxlbWVudHMubWFwKGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZG9tRWxlbWVudC5fX2VsZW1lbnRfXztcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICBjb25zdCBjaGlsZERPTU5vZGVzID0gZG9tTm9kZS5jaGlsZE5vZGVzOyAgLy8vXG5cbiAgZGVzY2VuZGFudERPTU5vZGVzLmNvbmNhdChjaGlsZERPTU5vZGVzKTtcblxuICBjaGlsZERPTU5vZGVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRET01Ob2RlKSB7XG4gICAgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoY2hpbGRET01Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMpO1xuICB9KTtcblxuICByZXR1cm4gZGVzY2VuZGFudERPTU5vZGVzO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2Rlcywgc2VsZWN0b3IpIHtcbiAgY29uc3QgZmlsdGVyZWRET01Ob2RlcyA9IGZpbHRlcihkb21Ob2RlcywgZnVuY3Rpb24oZG9tTm9kZSkge1xuICAgIGNvbnN0IGRvbU5vZGVUeXBlID0gZG9tTm9kZS5ub2RlVHlwZTtcblxuICAgIHN3aXRjaCAoZG9tTm9kZVR5cGUpIHtcbiAgICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREUgOiB7XG4gICAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21Ob2RlOyAvLy9cblxuICAgICAgICByZXR1cm4gZG9tRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICAgIH1cblxuICAgICAgY2FzZSBOb2RlLlRFWFRfTk9ERSA6IHtcbiAgICAgICAgaWYgKHNlbGVjdG9yID09PSAnKicpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZpbHRlcmVkRE9NTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihhcnJheSwgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZEFycmF5ID0gW107XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gdGVzdChlbGVtZW50KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGZpbHRlcmVkQXJyYXkucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRBcnJheTtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIEJvZHkgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSAnYm9keScpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEJvZHkuY2xvbmUodGhpcyk7IH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LmNsb25lKEJvZHksIGVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChCb2R5LCBodG1sKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQm9keSwgZG9tRWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcHJvcGVydGllcyA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBCb2R5O1xuICAgIH1cblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5Cb2R5LnRhZ05hbWUgPSAnYm9keSc7XG5cbm1vZHVsZS5leHBvcnRzID0gQm9keTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBEaXYuY2xvbmUodGhpcyk7IH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LmNsb25lKERpdiwgZWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCkge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21IVE1MKERpdiwgaHRtbCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KERpdiwgZG9tRWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcHJvcGVydGllcyA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBEaXY7XG4gICAgfVxuXG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbkRpdi50YWdOYW1lID0gJ2Rpdic7XG5cbm1vZHVsZS5leHBvcnRzID0gRGl2O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBTcGFuIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBTcGFuLmNsb25lKHRoaXMpOyB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShTcGFuLCBlbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoU3BhbiwgaHRtbCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KFNwYW4sIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBDbGFzcztcbiAgICAgIENsYXNzID0gU3BhbjtcbiAgICB9XG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuU3Bhbi50YWdOYW1lID0gJ3NwYW4nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNwYW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgSW5wdXRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgaGFzRm9jdXMoKSB7XG4gICAgY29uc3QgZm9jdXMgPSAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5kb21FbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGZvY3VzO1xuICB9XG5cbiAgZm9jdXMoKSB7IHRoaXMuZG9tRWxlbWVudC5mb2N1cygpOyB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzLCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShDbGFzcywgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0RWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2xpY2tIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEJ1dHRvbi5jbG9uZSh0aGlzLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgb25DbGljayhoYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyO1xuICAgIH1cbiAgICBcbiAgICBzdXBlci5vbkNsaWNrKGhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2xpY2soaGFuZGxlcikge1xuICAgIHN1cGVyLm9mZkNsaWNrKGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoQnV0dG9uLCBlbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoQnV0dG9uLCBodG1sLCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQnV0dG9uLCBkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2xpY2sgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2xpY2tIYW5kbGVyID0gb25DbGljazsgLy8vXG5cbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEJ1dHRvbiwgcHJvcGVydGllcywgY2xpY2tIYW5kbGVyKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEJ1dHRvbiwge1xuICB0YWdOYW1lOiAnYnV0dG9uJyxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnb25DbGljaydcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQnV0dG9uO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KSB7XG4gIGNvbnN0IG1vdXNlQnV0dG9uID0gZXZlbnQuYnV0dG9uLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIobW91c2VCdXR0b24pO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBDaGVja2JveC5jbG9uZSh0aGlzLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIG9uQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5vbignY2xpY2snLCBoYW5kbGVyKTsgIC8vL1xuICB9XG4gIFxuICBvZmZDaGFuZ2UoaGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdjbGljaycsIGhhbmRsZXIpOyAgLy8vXG4gIH1cblxuICBjaGVjayhjaGVja2VkID0gdHJ1ZSkge1xuICAgIGNoZWNrZWQgP1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpIDpcbiAgICAgICAgdGhpcy5jbGVhckF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICB9XG5cbiAgaXNDaGVja2VkKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNoZWNrZWQ7IH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoQ2hlY2tib3gsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKENoZWNrYm94LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChDaGVja2JveCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy8gICAgXG5cbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENoZWNrYm94LCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENoZWNrYm94LCB7XG4gIHRhZ05hbWU6ICdpbnB1dCcsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2hhbmdlJ1xuICBdLFxuICBhZGRpdGlvbmFsUHJvcGVydGllczoge1xuICAgIHR5cGU6ICdjaGVja2JveCdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hlY2tib3g7XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KSB7XG4gIGNvbnN0IGNoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZCgpLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIoY2hlY2tlZCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIElucHV0LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH1cbiAgXG4gIGdldFNlbGVjdGlvblN0YXJ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0OyB9XG4gIFxuICBnZXRTZWxlY3Rpb25FbmQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kOyB9XG4gIFxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgfVxuICBcbiAgc2V0U2VsZWN0aW9uU3RhcnQoc2VsZWN0aW9uU3RhcnQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnQ7IH1cbiAgXG4gIHNldFNlbGVjdGlvbkVuZChzZWxlY3Rpb25FbmQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZDsgfVxuXG4gIG9uQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgaGFuZGxlcik7XG4gIH1cblxuICBvZmZDaGFuZ2UoaGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdjaGFuZ2UnLCBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShJbnB1dCwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoSW5wdXQsIGh0bWwsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KElucHV0LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2U7IC8vLyAgICBcblxuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoSW5wdXQsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oSW5wdXQsIHtcbiAgdGFnTmFtZTogJ2lucHV0JyxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnb25DaGFuZ2UnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihoYW5kbGVyLCBldmVudCkge1xuICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKHZhbHVlKTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gTGluay5jbG9uZSh0aGlzLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgb25DbGljayhoYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMub24oJ2NsaWNrJywgaGFuZGxlcik7XG4gIH1cbiAgXG4gIG9mZkNsaWNrKGhhbmRsZXIpIHtcbiAgICB0aGlzLm9mZignY2xpY2snLCBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKExpbmssIGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChMaW5rLCBodG1sLCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoTGluaywgZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNsaWNrSGFuZGxlciA9IG9uQ2xpY2s7IC8vLyAgICBcblxuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTGluaywgcHJvcGVydGllcywgY2xpY2tIYW5kbGVyKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKExpbmssIHtcbiAgdGFnTmFtZTogJ2EnLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNsaWNrJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KSB7XG4gIGNvbnN0IGhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIoaHJlZik7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufSIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gU2VsZWN0LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC52YWx1ZTsgfSAvLy9cblxuICBzZXRTZWxlY3RlZE9wdGlvbkJ5VmFsdWUodmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IH0gLy8vXG5cbiAgb25DaGFuZ2UoaGFuZGxlcikge1xuICAgIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5vbignY2hhbmdlJywgaGFuZGxlcik7XG4gIH1cbiAgXG4gIG9mZkNoYW5nZShoYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ2NoYW5nZScsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKFNlbGVjdCwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoU2VsZWN0LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChTZWxlY3QsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZTsgLy8vICAgIFxuXG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhTZWxlY3QsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU2VsZWN0LCB7XG4gIHRhZ05hbWU6ICdzZWxlY3QnLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNoYW5nZSdcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihoYW5kbGVyLCBldmVudCkge1xuICBjb25zdCBzZWxlY3RlZE9wdGlvblZhbHVlID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvblZhbHVlKCksXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gaGFuZGxlcihzZWxlY3RlZE9wdGlvblZhbHVlKTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBUZXh0YXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyLCBzY3JvbGxIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuXG4gICAgaWYgKHNjcm9sbEhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25TY3JvbGwoc2Nyb2xsSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gVGV4dGFyZWEuY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBnZXRWYWx1ZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC52YWx1ZTsgfVxuICBcbiAgZ2V0U2VsZWN0aW9uU3RhcnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7IH1cbiAgXG4gIGdldFNlbGVjdGlvbkVuZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQ7IH1cbiAgXG4gIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3A7IH1cbiAgXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsTGVmdDsgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlOyB9XG4gIFxuICBzZXRTZWxlY3Rpb25TdGFydChzZWxlY3Rpb25TdGFydCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydDsgfVxuICBcbiAgc2V0U2VsZWN0aW9uRW5kKHNlbGVjdGlvbkVuZCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kOyB9XG4gIFxuICBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7IH1cbiAgXG4gIHNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7IH1cblxuICBvbkNoYW5nZShoYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCBoYW5kbGVyKTtcbiAgfVxuXG4gIG9mZkNoYW5nZShoYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ2NoYW5nZScsIGhhbmRsZXIpO1xuICB9XG5cbiAgb25TY3JvbGwoaGFuZGxlcikge1xuICAgIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZVNjcm9sbEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdzY3JvbGwnLCBoYW5kbGVyKTtcbiAgfVxuXG4gIG9mZlNjcm9sbChoYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ3Njcm9sbCcsIGhhbmRsZXIpO1xuICB9XG5cbiAgb25SZXNpemUocmVzaXplSGFuZGxlcikge31cbiAgXG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyKSB7fVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyLCBzY3JvbGxIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShUZXh0YXJlYSwgZWxlbWVudCwgY2hhbmdlSGFuZGxlciwgc2Nyb2xsSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlciwgc2Nyb2xsSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoVGV4dGFyZWEsIGh0bWwsIGNoYW5nZUhhbmRsZXIsIHNjcm9sbEhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIsIHNjcm9sbEhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KFRleHRhcmVhLCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyLCBzY3JvbGxIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgb25TY3JvbGwgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cbiAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gb25TY3JvbGw7IC8vL1xuICAgIFxuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dGFyZWEsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIsIHNjcm9sbEhhbmRsZXIpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVGV4dGFyZWEsIHtcbiAgdGFnTmFtZTogJ3RleHRhcmVhJyxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnb25DaGFuZ2UnLFxuICAgICdvblNjcm9sbCdcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dGFyZWE7XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KSB7XG4gIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIodmFsdWUpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZVNjcm9sbEhhbmRsZXIoaGFuZGxlciwgZXZlbnQpIHtcbiAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEJvdW5kcyB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5ib3R0b20gPSBib3R0b207XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldEJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5ib3R0b207XG4gIH1cblxuICBnZXRSaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodDtcbiAgfVxuXG4gIGlzT3ZlcmxhcHBpbmdNb3VzZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgcmV0dXJuICggICh0aGlzLnRvcCA8IG1vdXNlVG9wKSAmJlxuICAgICAgICAgICAgICAodGhpcy5sZWZ0IDwgbW91c2VMZWZ0KSAmJlxuICAgICAgICAgICAgICAodGhpcy5ib3R0b20gPiBtb3VzZVRvcCkgJiZcbiAgICAgICAgICAgICAgKHRoaXMucmlnaHQgPiBtb3VzZUxlZnQpICApO1xuICB9XG5cbiAgYXJlT3ZlcmxhcHBpbmcoYm91bmRzKSB7XG4gICAgcmV0dXJuICggICh0aGlzLnRvcCA8IGJvdW5kcy5ib3R0b20pICYmXG4gICAgICAgICAgICAgICh0aGlzLmxlZnQgPCBib3VuZHMucmlnaHQpICYmXG4gICAgICAgICAgICAgICh0aGlzLmJvdHRvbSA+IGJvdW5kcy50b3ApICYmXG4gICAgICAgICAgICAgICh0aGlzLnJpZ2h0ID4gYm91bmRzLmxlZnQpICApO1xuICB9XG5cbiAgc3RhdGljIGZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgY29uc3Qgd2luZG93U2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0LCAvLy9cbiAgICAgICAgICB3aW5kb3dTY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0LCAgLy8vXG4gICAgICAgICAgdG9wID0gYm91bmRpbmdDbGllbnRSZWN0LnRvcCArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICBsZWZ0ID0gYm91bmRpbmdDbGllbnRSZWN0LmxlZnQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdHRvbSA9IGJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b20gKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgcmlnaHQgPSBib3VuZGluZ0NsaWVudFJlY3QucmlnaHQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCb3VuZHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIE9mZnNldCB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2Zmc2V0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBvbkNsaWNrKGhhbmRsZXIpIHtcbiAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXI7XG4gIH1cbiAgXG4gIHRoaXMub24oJ2NsaWNrJywgaGFuZGxlcik7IFxufVxuXG5mdW5jdGlvbiBvZmZDbGljayhoYW5kbGVyKSB7IHRoaXMub2ZmKCdjbGljaycsIGhhbmRsZXIpOyB9XG5cbmNvbnN0IGNsaWNrTWl4aW4gPSB7XG4gIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gIG9mZkNsaWNrOiBvZmZDbGlja1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGlja01peGluO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcihoYW5kbGVyLCBldmVudCkge1xuICBjb25zdCBtb3VzZVRvcCA9IGV2ZW50LnBhZ2VZLCAgLy8vXG4gICAgICAgIG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAvLy9cbiAgICAgICAgbW91c2VCdXR0b24gPSBldmVudC5idXR0b24sIC8vL1xuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIobW91c2VUb3AsIG1vdXNlTGVmdCwgbW91c2VCdXR0b24pO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gb24oZXZlbnRUeXBlcywgaGFuZGxlcikge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdCgnICcpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goZnVuY3Rpb24oZXZlbnRUeXBlKSB7XG4gICAgY29uc3QgYWRkRXZlbnRMaXN0ZW5lciA9IHRoaXMuYWRkSGFuZGxlcihldmVudFR5cGUsIGhhbmRsZXIpO1xuXG4gICAgaWYgKGFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59XG5cbmZ1bmN0aW9uIG9mZihldmVudFR5cGVzLCBoYW5kbGVyKSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KCcgJyk7IC8vL1xuXG4gIGV2ZW50VHlwZXMuZm9yRWFjaChmdW5jdGlvbihldmVudFR5cGUpIHtcbiAgICBjb25zdCByZW1vdmVFdmVudExpc3RlbmVyID0gdGhpcy5yZW1vdmVIYW5kbGVyKGV2ZW50VHlwZSwgaGFuZGxlcik7XG4gICAgXG4gICAgaWYgKHJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZXZlbnRUeXBlLCBoYW5kbGVyKSB7XG4gIGxldCBhZGRFdmVudExpc3RlbmVyID0gZmFsc2UsXG4gICAgICBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXTtcblxuICBpZiAoaGFuZGxlcnMgPT09IHVuZGVmaW5lZCkge1xuICAgIGhhbmRsZXJzID0gW107XG5cbiAgICB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV0gPSBoYW5kbGVycztcblxuICAgIGFkZEV2ZW50TGlzdGVuZXIgPSB0cnVlO1xuICB9XG5cbiAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcblxuICByZXR1cm4gYWRkRXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcihldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgbGV0IHJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmYWxzZSxcbiAgICAgIGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdO1xuXG4gIGlmIChoYW5kbGVycy5sZW5ndGggPT09IDApIHtcbiAgICBkZWxldGUgKHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXSk7XG5cbiAgICByZW1vdmVFdmVudExpc3RlbmVyID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBpbmRleCA9IGhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICBoYW5kbGVycy5zcGxpY2UoaW5kZXgsIGRlbGV0ZUNvdW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbn1cblxuY29uc3QgZXZlbnRNaXhpbiA9IHtcbiAgb246IG9uLFxuICBvZmY6IG9mZixcbiAgYWRkSGFuZGxlcjogYWRkSGFuZGxlcixcbiAgcmVtb3ZlSGFuZGxlcjogcmVtb3ZlSGFuZGxlclxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBldmVudE1peGluO1xuXG5mdW5jdGlvbiBldmVudExpc3RlbmVyKGV2ZW50KSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IGV2ZW50LnR5cGUsXG4gICAgICAgIGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdO1xuXG4gIGxldCBwcmV2ZW50RXZlbnREZWZhdWx0ID0gZmFsc2U7XG5cbiAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlcihoYW5kbGVyLCBldmVudCk7XG4gICAgICBcbiAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCA9PT0gdHJ1ZSkge1xuICAgICAgICBwcmV2ZW50RXZlbnREZWZhdWx0ID0gdHJ1ZTtcbiAgICAgIH0gIFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIoZXZlbnQpO1xuICAgICAgXG4gICAgICBpZiAocHJldmVudERlZmF1bHQgPT09IHRydWUpIHtcbiAgICAgICAgcHJldmVudEV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChwcmV2ZW50RXZlbnREZWZhdWx0KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMsIGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSB7XG4gIHRoaXMucHJvcGVydGllcyA9IHt9O1xuXG4gIHByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzKTsgLy8vXG4gIFxuICB1bmFzc2lnbihwcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCBhZGRpdGlvbmFsUHJvcGVydGllcyk7XG5cbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKTtcblxuICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PT0gJ2NoaWxkRWxlbWVudHMnKSB7XG4gICAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gcHJvcGVydGllc1snY2hpbGRFbGVtZW50cyddO1xuXG4gICAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGNoaWxkRWxlbWVudCk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHByb3BlcnRpZXNbbmFtZV07XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKGlzSGFuZGxlck5hbWUobmFtZSkpIHtcbiAgICAgICAgYWRkSGFuZGxlcih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzQXR0cmlidXRlTmFtZShuYW1lKSkge1xuICAgICAgICBhZGRBdHRyaWJ1dGUodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufVxuXG5jb25zdCBqc3hNaXhpbiA9IHtcbiAgYXBwbHlQcm9wZXJ0aWVzOiBhcHBseVByb3BlcnRpZXNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ganN4TWl4aW47XG5cbmZ1bmN0aW9uIHVuYXNzaWduKHByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKSB7XG4gIGlmIChpZ25vcmVkUHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgaWdub3JlZFByb3BlcnR5TmFtZXMgPSBpZ25vcmVkUHJvcGVydGllczsgLy8vXG5cbiAgICBpZ25vcmVkUHJvcGVydHlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGlnbm9yZWRQcm9wZXJ0eU5hbWUpIHtcbiAgICAgIGRlbGV0ZSBwcm9wZXJ0aWVzW2lnbm9yZWRQcm9wZXJ0eU5hbWVdO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgLy8vXG4gICAgICAgIGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gIGVsZW1lbnQub24oZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgIG5hbWUgPSAnY2xhc3MnO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09ICdodG1sRm9yJykge1xuICAgIG5hbWUgPSAnZm9yJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBlbGVtZW50LmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNIYW5kbGVyTmFtZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLm1hdGNoKC9eb24vKTtcbn1cblxuZnVuY3Rpb24gaXNBdHRyaWJ1dGVOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIGF0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKG5hbWUpO1xufVxuXG5jb25zdCBhdHRyaWJ1dGVOYW1lcyA9IFtcbiAgJ2FjY2VwdCcsICdhY2NlcHRDaGFyc2V0JywgJ2FjY2Vzc0tleScsICdhY3Rpb24nLCAnYWxsb3dGdWxsU2NyZWVuJywgJ2FsbG93VHJhbnNwYXJlbmN5JywgJ2FsdCcsICdhc3luYycsICdhdXRvQ29tcGxldGUnLCAnYXV0b0ZvY3VzJywgJ2F1dG9QbGF5JyxcbiAgJ2NhcHR1cmUnLCAnY2VsbFBhZGRpbmcnLCAnY2VsbFNwYWNpbmcnLCAnY2hhbGxlbmdlJywgJ2NoYXJTZXQnLCAnY2hlY2tlZCcsICdjaXRlJywgJ2NsYXNzSUQnLCAnY2xhc3NOYW1lJywgJ2NvbFNwYW4nLCAnY29scycsICdjb250ZW50JywgJ2NvbnRlbnRFZGl0YWJsZScsICdjb250ZXh0TWVudScsICdjb250cm9scycsICdjb29yZHMnLCAnY3Jvc3NPcmlnaW4nLFxuICAnZGF0YScsICdkYXRlVGltZScsICdkZWZhdWx0JywgJ2RlZmVyJywgJ2RpcicsICdkaXNhYmxlZCcsICdkb3dubG9hZCcsICdkcmFnZ2FibGUnLFxuICAnZW5jVHlwZScsXG4gICdmb3JtJywgJ2Zvcm1BY3Rpb24nLCAnZm9ybUVuY1R5cGUnLCAnZm9ybU1ldGhvZCcsICdmb3JtTm9WYWxpZGF0ZScsICdmb3JtVGFyZ2V0JywgJ2ZyYW1lQm9yZGVyJyxcbiAgJ2hlYWRlcnMnLCAnaGVpZ2h0JywgJ2hpZGRlbicsICdoaWdoJywgJ2hyZWYnLCAnaHJlZkxhbmcnLCAnaHRtbEZvcicsICdodHRwRXF1aXYnLFxuICAnaWNvbicsICdpZCcsICdpbnB1dE1vZGUnLCAnaW50ZWdyaXR5JywgJ2lzJyxcbiAgJ2tleVBhcmFtcycsICdrZXlUeXBlJywgJ2tpbmQnLFxuICAnbGFiZWwnLCAnbGFuZycsICdsaXN0JywgJ2xvb3AnLCAnbG93JyxcbiAgJ21hbmlmZXN0JywgJ21hcmdpbkhlaWdodCcsICdtYXJnaW5XaWR0aCcsICdtYXgnLCAnbWF4TGVuZ3RoJywgJ21lZGlhJywgJ21lZGlhR3JvdXAnLCAnbWV0aG9kJywgJ21pbicsICdtaW5MZW5ndGgnLCAnbXVsdGlwbGUnLCAnbXV0ZWQnLFxuICAnbmFtZScsICdub1ZhbGlkYXRlJywgJ25vbmNlJyxcbiAgJ29wZW4nLCAnb3B0aW11bScsXG4gICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3Bvc3RlcicsICdwcmVsb2FkJywgJ3Byb2ZpbGUnLFxuICAncmFkaW9Hcm91cCcsICdyZWFkT25seScsICdyZWwnLCAncmVxdWlyZWQnLCAncmV2ZXJzZWQnLCAncm9sZScsICdyb3dTcGFuJywgJ3Jvd3MnLFxuICAnc2FuZGJveCcsICdzY29wZScsICdzY29wZWQnLCAnc2Nyb2xsaW5nJywgJ3NlYW1sZXNzJywgJ3NlbGVjdGVkJywgJ3NoYXBlJywgJ3NpemUnLCAnc2l6ZXMnLCAnc3BhbicsICdzcGVsbENoZWNrJywgJ3NyYycsICdzcmNEb2MnLCAnc3JjTGFuZycsICdzcmNTZXQnLCAnc3RhcnQnLCAnc3RlcCcsICdzdHlsZScsICdzdW1tYXJ5JyxcbiAgJ3RhYkluZGV4JywgJ3RhcmdldCcsICd0aXRsZScsICd0eXBlJyxcbiAgJ3VzZU1hcCcsXG4gICd2YWx1ZScsXG4gICd3aWR0aCcsXG4gICd3bW9kZScsXG4gICd3cmFwJ1xuXTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBvbk1vdXNlVXAoaGFuZGxlcikge1xuICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcjtcbiAgfVxuICBcbiAgdGhpcy5vbignbW91c2V1cCcsIGhhbmRsZXIpOyBcbn1cblxuZnVuY3Rpb24gb25Nb3VzZURvd24oaGFuZGxlcikge1xuICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcjtcbiAgfVxuXG4gIHRoaXMub24oJ21vdXNlZG93bicsIGhhbmRsZXIpOyBcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU92ZXIoaGFuZGxlcikge1xuICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcjtcbiAgfVxuXG4gIHRoaXMub24oJ21vdXNlb3ZlcicsIGhhbmRsZXIpOyBcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU91dChoYW5kbGVyKSB7XG4gIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgIGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyO1xuICB9XG5cbiAgdGhpcy5vbignbW91c2VvdXQnLCBoYW5kbGVyKTsgXG59XG5cbmZ1bmN0aW9uIG9uTW91c2VNb3ZlKGhhbmRsZXIpIHtcbiAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXI7XG4gIH1cblxuICB0aGlzLm9uKCdtb3VzZW1vdmUnLCBoYW5kbGVyKTsgXG59XG5cbmZ1bmN0aW9uIG9mZk1vdXNlVXAoaGFuZGxlcikgeyB0aGlzLm9mZignbW91c2V1cCcsIGhhbmRsZXIpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlRG93bihoYW5kbGVyKSB7IHRoaXMub2ZmKCdtb3VzZWRvd24nLCBoYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU92ZXIoaGFuZGxlcikgeyB0aGlzLm9mZignbW91c2VvdmVyJywgaGFuZGxlcik7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VPdXQoaGFuZGxlcikgeyB0aGlzLm9mZignbW91c2VvdXQnLCBoYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU1vdmUoaGFuZGxlcikgeyB0aGlzLm9mZignbW91c2Vtb3ZlJywgaGFuZGxlcik7IH1cblxuY29uc3QgbW91c2VNaXhpbiA9IHtcbiAgb25Nb3VzZVVwOiBvbk1vdXNlVXAsXG4gIG9uTW91c2VEb3duOiBvbk1vdXNlRG93bixcbiAgb25Nb3VzZU92ZXI6IG9uTW91c2VPdmVyLFxuICBvbk1vdXNlT3V0OiBvbk1vdXNlT3V0LFxuICBvbk1vdXNlTW92ZTogb25Nb3VzZU1vdmUsXG4gIG9mZk1vdXNlVXA6IG9mZk1vdXNlVXAsXG4gIG9mZk1vdXNlRG93bjogb2ZmTW91c2VEb3duLFxuICBvZmZNb3VzZU92ZXI6IG9mZk1vdXNlT3ZlcixcbiAgb2ZmTW91c2VPdXQ6IG9mZk1vdXNlT3V0LFxuICBvZmZNb3VzZU1vdmU6IG9mZk1vdXNlTW92ZVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb3VzZU1peGluO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcihoYW5kbGVyLCBldmVudCkge1xuICBjb25zdCBtb3VzZVRvcCA9IGV2ZW50LnBhZ2VZLCAgLy8vXG4gICAgICAgIG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAvLy9cbiAgICAgICAgbW91c2VCdXR0b24gPSBldmVudC5idXR0b24sIC8vL1xuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIobW91c2VUb3AsIG1vdXNlTGVmdCwgbW91c2VCdXR0b24pO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gb25SZXNpemUoaGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSAncmVzaXplJyxcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lciA9IHRoaXMuYWRkSGFuZGxlcihldmVudFR5cGUsIGhhbmRsZXIpO1xuXG4gIGlmIChhZGRFdmVudExpc3RlbmVyKSB7XG4gICAgYXBwZW5kUmVzaXplT2JqZWN0KHRoaXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9mZlJlc2l6ZShoYW5kbGVyKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9ICdyZXNpemUnLFxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyID0gdGhpcy5yZW1vdmVIYW5kbGVyKGV2ZW50VHlwZSwgaGFuZGxlcik7XG5cbiAgaWYgKHJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICByZW1vdmVSZXNpemVPYmplY3QodGhpcyk7XG4gIH1cbn1cblxuY29uc3QgcmVzaXplTWl4aW4gPSB7XG4gIG9uUmVzaXplOiBvblJlc2l6ZSxcbiAgb2ZmUmVzaXplOiBvZmZSZXNpemVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzaXplTWl4aW47XG5cbmZ1bmN0aW9uIGFwcGVuZFJlc2l6ZU9iamVjdChlbGVtZW50KSB7XG4gIGNvbnN0IHJlc2l6ZU9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpLFxuICAgICAgICBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICBzdHlsZSA9IGAgZGlzcGxheTogYmxvY2s7IFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgICAgICAgICAgIHRvcDogMDsgXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTsgXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyBcbiAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO2A7XG5cbiAgcmVzaXplT2JqZWN0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzdHlsZSk7XG4gIHJlc2l6ZU9iamVjdC5kYXRhID0gJ2Fib3V0OmJsYW5rJztcbiAgcmVzaXplT2JqZWN0LnR5cGUgPSAndGV4dC9odG1sJztcblxuICBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18gPSByZXNpemVPYmplY3Q7XG5cbiAgcmVzaXplT2JqZWN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyKGVsZW1lbnQpXG4gIH07XG5cbiAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZChyZXNpemVPYmplY3QpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVSZXNpemVPYmplY3QoZWxlbWVudCkge1xuICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICByZXNpemVPYmplY3QgPSBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIG9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICBvYmplY3RXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplTGlzdGVuZXIpO1xuXG4gIGRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIoZWxlbWVudCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIHJlc2l6ZU9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICByZXNpemVPYmplY3RXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgZXZlbnRMaXN0ZW5lcihlbGVtZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGV2ZW50TGlzdGVuZXIoZWxlbWVudCkge1xuICBjb25zdCB3aWR0aCA9IGVsZW1lbnQuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gZWxlbWVudC5nZXRIZWlnaHQoKSxcbiAgICAgICAgaGFuZGxlcnMgPSBlbGVtZW50LmhhbmRsZXJzTWFwWydyZXNpemUnXTtcblxuICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpe1xuICAgIGhhbmRsZXIod2lkdGgsIGhlaWdodCk7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBUZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4vdGV4dEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEFyZ3VtZW50cykge1xuICAgIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChmaXJzdEFyZ3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKTtcblxuICAgICAgcHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjaGlsZEVsZW1lbnRzOiBjaGlsZEVsZW1lbnRzXG4gICAgICB9LCBwcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAoaXNUeXBlT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBlbGVtZW50RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGdW5jdGlvbihwcm9wZXJ0aWVzKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICAgIGh0bWwgPSBgPCR7dGFnTmFtZX0+PC8ke3RhZ05hbWV9PmA7XG5cbiAgICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbUhUTUwoaHRtbCk7XG5cbiAgICAgICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gY2hpbGRFbGVtZW50c0Zyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cykge1xuICBjaGlsZEFyZ3VtZW50cyA9IGNoaWxkQXJndW1lbnRzLnJlZHVjZShmdW5jdGlvbihjaGlsZEFyZ3VtZW50cywgY2hpbGRBcmd1bWVudCkge1xuICAgIGNoaWxkQXJndW1lbnRzID0gY2hpbGRBcmd1bWVudHMuY29uY2F0KGNoaWxkQXJndW1lbnQpO1xuXG4gICAgcmV0dXJuIGNoaWxkQXJndW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGNoaWxkQXJndW1lbnRzLm1hcChmdW5jdGlvbihjaGlsZEFyZ3VtZW50KSB7XG4gICAgbGV0IGNoaWxkRWxlbWVudDtcblxuICAgIGlmICggIChjaGlsZEFyZ3VtZW50IGluc3RhbmNlb2YgRWxlbWVudClcbiAgICAgICB8fCAoY2hpbGRBcmd1bWVudCBpbnN0YW5jZW9mIFRleHRFbGVtZW50KSAgKSB7XG4gICAgICBjaGlsZEVsZW1lbnQgPSBjaGlsZEFyZ3VtZW50OyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBjaGlsZEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHRleHRFbGVtZW50ID0gbmV3IFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBjaGlsZEVsZW1lbnQgPSB0ZXh0RWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gaXNUeXBlT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQgPT09IENsYXNzKSB7IC8vL1xuICAgIHR5cGVPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgdHlwZU9mID0gaXNUeXBlT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHlwZU9mO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBPZmZzZXQgPSByZXF1aXJlKCcuL21pc2Mvb2Zmc2V0JyksXG4gICAgICBCb3VuZHMgPSByZXF1aXJlKCcuL21pc2MvYm91bmRzJyk7XG5cbmNsYXNzIFRleHRFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGV4dCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpOyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IHRoaXM7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIFRleHRFbGVtZW50LmNsb25lKHRoaXMpOyB9XG5cbiAgZ2V0VGV4dCgpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlLFxuICAgICAgICAgIHRleHQgPSBub2RlVmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBzZXRUZXh0KHRleHQpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0ZXh0OyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUgPSBub2RlVmFsdWU7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBnZXRIZWlnaHQoKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudEVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdFNpYmxpbmdET01FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudC5maXJzdENoaWxkOyAvLy9cblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgZmlyc3RTaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dEVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGV2ZW50TWl4aW4gPSByZXF1aXJlKCcuL21peGluL2V2ZW50JyksXG4gICAgICBjbGlja01peGluID0gcmVxdWlyZSgnLi9taXhpbi9jbGljaycpLFxuICAgICAgbW91c2VNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vbW91c2UnKTtcblxuY2xhc3MgV2luZG93IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gd2luZG93O1xuXG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IHt9O1xuICB9XG4gIFxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lcldpZHRoOyB9IC8vL1xuICBcbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVySGVpZ2h0OyB9IC8vL1xuXG4gIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWU9mZnNldDsgfSAgLy8vXG5cbiAgZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWE9mZnNldDsgfSAvLy9cblxuICBvblJlc2l6ZShoYW5kbGVyKSB7XG4gICAgY29uc3QgdHlwZSA9ICdyZXNpemUnLFxuICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIgPSB0aGlzLmFkZEhhbmRsZXIodHlwZSwgaGFuZGxlcik7XG5cbiAgICBpZiAoYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICBvZmZSZXNpemUoaGFuZGxlcikge1xuICAgIGNvbnN0IHR5cGUgPSAncmVzaXplJyxcbiAgICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyID0gdGhpcy5yZW1vdmVIYW5kbGVyKHR5cGUsIGhhbmRsZXIpO1xuXG4gICAgaWYgKHJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZXZlbnRNaXhpbik7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGNsaWNrTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBtb3VzZU1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgV2luZG93KCk7ICAvLy9cblxuZnVuY3Rpb24gZXZlbnRMaXN0ZW5lcihldmVudCkge1xuICBjb25zdCB0eXBlID0gZXZlbnQudHlwZSxcbiAgICAgICAgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW3R5cGVdLFxuICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICBoYW5kbGVyKHdpZHRoLCBoZWlnaHQpO1xuICB9KTtcbn1cbiJdfQ==
