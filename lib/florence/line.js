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
      line = florenceLine; ///

      var endOfLineToken = EndOfLineToken.fromLine(line);

      this.pushToken(endOfLineToken);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9saW5lLmpzIl0sIm5hbWVzIjpbIkNvbW1vbkxpbmUiLCJyZXF1aXJlIiwiQ29tbWVudFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJTdHJpbmdMaXRlcmFsVG9rZW5zIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbnMiLCJFbmRPZkxpbmVUb2tlbiIsIkZsb3JlbmNlTGluZSIsImZsb3JlbmNlTGluZSIsImxpbmUiLCJlbmRPZkxpbmVUb2tlbiIsImZyb21MaW5lIiwicHVzaFRva2VuIiwiY29udGVudCIsInJ1bGVzIiwiY29uZmlndXJhdGlvbiIsImluaXRpYWxpc2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxnQkFBUixDQUFuQjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSwwQkFBUixDQUR0QjtBQUFBLElBRU1FLG1CQUFtQkYsUUFBUSw2QkFBUixDQUZ6QjtBQUFBLElBR01HLHNCQUFzQkgsUUFBUSxnQ0FBUixDQUg1QjtBQUFBLElBSU1JLDBCQUEwQkosUUFBUSw0QkFBUixDQUpoQztBQUFBLElBS01LLGlCQUFpQkwsUUFBUSx1Q0FBUixDQUx2Qjs7SUFPTU0sWTs7Ozs7Ozs7Ozs7K0JBQ09MLGEsRUFBZUcsdUIsRUFBeUJELG1CLEVBQXFCRCxnQixFQUFrQjtBQUN4Riw2SEFBaUJELGFBQWpCLEVBQWdDRyx1QkFBaEMsRUFBeURELG1CQUF6RCxFQUE4RUQsZ0JBQTlFOztBQUVBLFVBQU1LLGVBQWUsSUFBckI7QUFBQSxVQUE0QjtBQUN0QkMsYUFBT0QsWUFEYixDQUh3RixDQUk1RDs7QUFFNUIsVUFBTUUsaUJBQWlCSixlQUFlSyxRQUFmLENBQXdCRixJQUF4QixDQUF2Qjs7QUFFQSxXQUFLRyxTQUFMLENBQWVGLGNBQWY7QUFDRDs7O3FEQUV1Q0csTyxFQUFTQyxLLEVBQU9DLGEsRUFBZTtBQUNyRSxVQUFNUCx3SUFBc0RELFlBQXRELEVBQW9FTSxPQUFwRSxFQUE2RUMsS0FBN0UsRUFBb0ZDLGFBQXBGLENBQU47O0FBRUFQLG1CQUFhUSxVQUFiLENBQXdCZCxhQUF4QixFQUF1Q0csdUJBQXZDLEVBQWdFRCxtQkFBaEUsRUFBcUZELGdCQUFyRjs7QUFFQSxhQUFPSyxZQUFQO0FBQ0Q7Ozs7RUFsQndCUixVOztBQXFCM0JpQixPQUFPQyxPQUFQLEdBQWlCWCxZQUFqQiIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgQ29tbW9uTGluZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9saW5lJyksXHJcbiAgICAgIENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL2NvbW1lbnQnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvd2hpdGVzcGFjZScpLFxyXG4gICAgICBTdHJpbmdMaXRlcmFsVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy9zdHJpbmdMaXRlcmFsJyksXHJcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvcmVndWxhckV4cHJlc3Npb24nKSxcclxuICAgICAgRW5kT2ZMaW5lVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lJyk7XHJcblxyXG5jbGFzcyBGbG9yZW5jZUxpbmUgZXh0ZW5kcyBDb21tb25MaW5lIHtcclxuICBpbml0aWFsaXNlKENvbW1lbnRUb2tlbnMsIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zLCBTdHJpbmdMaXRlcmFsVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKSB7XHJcbiAgICBzdXBlci5pbml0aWFsaXNlKENvbW1lbnRUb2tlbnMsIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zLCBTdHJpbmdMaXRlcmFsVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKTtcclxuXHJcbiAgICBjb25zdCBmbG9yZW5jZUxpbmUgPSB0aGlzLCAgLy8vXHJcbiAgICAgICAgICBsaW5lID0gZmxvcmVuY2VMaW5lOyAgLy8vXHJcblxyXG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5mcm9tTGluZShsaW5lKTtcclxuXHJcbiAgICB0aGlzLnB1c2hUb2tlbihlbmRPZkxpbmVUb2tlbik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUNvbnRlbnRSdWxlc0FuZENvbmZpZ3VyYXRpb24oY29udGVudCwgcnVsZXMsIGNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGNvbnN0IGZsb3JlbmNlTGluZSA9IHN1cGVyLmZyb21Db250ZW50UnVsZXNBbmRDb25maWd1cmF0aW9uKEZsb3JlbmNlTGluZSwgY29udGVudCwgcnVsZXMsIGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgIGZsb3JlbmNlTGluZS5pbml0aWFsaXNlKENvbW1lbnRUb2tlbnMsIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zLCBTdHJpbmdMaXRlcmFsVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUxpbmU7XHJcbiJdfQ==