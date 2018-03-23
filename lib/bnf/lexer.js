'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer'),
    specialSymbols = require('./specialSymbols'),
    NonSignificantEndOfLineTokens = require('../common/tokens/endOfLine/nonSignificant');

var BNFLexer = function (_CommonLexer) {
  _inherits(BNFLexer, _CommonLexer);

  function BNFLexer() {
    _classCallCheck(this, BNFLexer);

    return _possibleConstructorReturn(this, (BNFLexer.__proto__ || Object.getPrototypeOf(BNFLexer)).apply(this, arguments));
  }

  _createClass(BNFLexer, [{
    key: 'processCommentTokens',
    value: function processCommentTokens(tokensOrContents, inComment) {
      return inComment;
    }
  }, {
    key: 'postProcessMiddleOfCommentTokens',
    value: function postProcessMiddleOfCommentTokens(tokensOrContents) {}
  }, {
    key: 'processEndOfLineTokens',
    value: function processEndOfLineTokens(tokensOrContents) {
      NonSignificantEndOfLineTokens.process(tokensOrContents);
    }
  }, {
    key: 'significantTokensFromBNF',
    value: function significantTokensFromBNF(bnf) {
      var content = bnf,
          ///
      tokens = _get(BNFLexer.prototype.__proto__ || Object.getPrototypeOf(BNFLexer.prototype), 'tokensFromContent', this).call(this, content),
          significantTokens = significantTokensFromTokens(tokens);

      return significantTokens;
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      return CommonLexer.fromNothing(BNFLexer);
    }
  }, {
    key: 'fromEntries',
    value: function fromEntries(entries) {
      return CommonLexer.fromEntries(BNFLexer, entries);
    }
  }]);

  return BNFLexer;
}(CommonLexer);

Object.assign(BNFLexer, {
  entries: entries,
  specialSymbols: specialSymbols
});

module.exports = BNFLexer;

function significantTokensFromTokens(tokens) {
  var significantTokens = tokens.reduce(function (significantTokens, token) {
    var tokenSignificant = token.isSignificant();

    if (tokenSignificant) {
      var significantToken = token; ///

      significantTokens.push(significantToken);
    }

    return significantTokens;
  }, []);

  return significantTokens;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvbGV4ZXIuanMiXSwibmFtZXMiOlsiZW50cmllcyIsInJlcXVpcmUiLCJDb21tb25MZXhlciIsInNwZWNpYWxTeW1ib2xzIiwiTm9uU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMiLCJCTkZMZXhlciIsInRva2Vuc09yQ29udGVudHMiLCJpbkNvbW1lbnQiLCJwcm9jZXNzIiwiYm5mIiwiY29udGVudCIsInRva2VucyIsInNpZ25pZmljYW50VG9rZW5zIiwic2lnbmlmaWNhbnRUb2tlbnNGcm9tVG9rZW5zIiwiZnJvbU5vdGhpbmciLCJmcm9tRW50cmllcyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWR1Y2UiLCJ0b2tlbiIsInRva2VuU2lnbmlmaWNhbnQiLCJpc1NpZ25pZmljYW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLGtCQUFSLENBRnZCO0FBQUEsSUFHTUcsZ0NBQWdDSCxRQUFRLDJDQUFSLENBSHRDOztJQUtNSSxROzs7Ozs7Ozs7Ozt5Q0FDaUJDLGdCLEVBQWtCQyxTLEVBQVc7QUFBRSxhQUFPQSxTQUFQO0FBQW1COzs7cURBRXRDRCxnQixFQUFrQixDQUFFOzs7MkNBRTlCQSxnQixFQUFrQjtBQUN2Q0Ysb0NBQThCSSxPQUE5QixDQUFzQ0YsZ0JBQXRDO0FBQ0Q7Ozs2Q0FFd0JHLEcsRUFBSztBQUM1QixVQUFNQyxVQUFVRCxHQUFoQjtBQUFBLFVBQXNCO0FBQ2hCRSxxSUFBaUNELE9BQWpDLENBRE47QUFBQSxVQUVNRSxvQkFBb0JDLDRCQUE0QkYsTUFBNUIsQ0FGMUI7O0FBSUEsYUFBT0MsaUJBQVA7QUFDRDs7O2tDQUVvQjtBQUFFLGFBQU9WLFlBQVlZLFdBQVosQ0FBd0JULFFBQXhCLENBQVA7QUFBMkM7OztnQ0FFL0NMLE8sRUFBUztBQUFFLGFBQU9FLFlBQVlhLFdBQVosQ0FBd0JWLFFBQXhCLEVBQWtDTCxPQUFsQyxDQUFQO0FBQW9EOzs7O0VBbkI3REUsVzs7QUFzQnZCYyxPQUFPQyxNQUFQLENBQWNaLFFBQWQsRUFBd0I7QUFDdEJMLFdBQVNBLE9BRGE7QUFFdEJHLGtCQUFnQkE7QUFGTSxDQUF4Qjs7QUFLQWUsT0FBT0MsT0FBUCxHQUFpQmQsUUFBakI7O0FBRUEsU0FBU1EsMkJBQVQsQ0FBcUNGLE1BQXJDLEVBQTZDO0FBQzNDLE1BQU1DLG9CQUFvQkQsT0FBT1MsTUFBUCxDQUFjLFVBQVNSLGlCQUFULEVBQTRCUyxLQUE1QixFQUFtQztBQUN6RSxRQUFNQyxtQkFBbUJELE1BQU1FLGFBQU4sRUFBekI7O0FBRUEsUUFBSUQsZ0JBQUosRUFBc0I7QUFDcEIsVUFBTUUsbUJBQW1CSCxLQUF6QixDQURvQixDQUNZOztBQUVoQ1Qsd0JBQWtCYSxJQUFsQixDQUF1QkQsZ0JBQXZCO0FBQ0Q7O0FBRUQsV0FBT1osaUJBQVA7QUFDRCxHQVZ5QixFQVV2QixFQVZ1QixDQUExQjs7QUFZQSxTQUFPQSxpQkFBUDtBQUNEIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgZW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxyXG4gICAgICBzcGVjaWFsU3ltYm9scyA9IHJlcXVpcmUoJy4vc3BlY2lhbFN5bWJvbHMnKSxcclxuICAgICAgTm9uU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL2VuZE9mTGluZS9ub25TaWduaWZpY2FudCcpO1xyXG5cclxuY2xhc3MgQk5GTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgcHJvY2Vzc0NvbW1lbnRUb2tlbnModG9rZW5zT3JDb250ZW50cywgaW5Db21tZW50KSB7IHJldHVybiBpbkNvbW1lbnQ7IH1cclxuXHJcbiAgcG9zdFByb2Nlc3NNaWRkbGVPZkNvbW1lbnRUb2tlbnModG9rZW5zT3JDb250ZW50cykge31cclxuXHJcbiAgcHJvY2Vzc0VuZE9mTGluZVRva2Vucyh0b2tlbnNPckNvbnRlbnRzKSB7XHJcbiAgICBOb25TaWduaWZpY2FudEVuZE9mTGluZVRva2Vucy5wcm9jZXNzKHRva2Vuc09yQ29udGVudHMpO1xyXG4gIH1cclxuXHJcbiAgc2lnbmlmaWNhbnRUb2tlbnNGcm9tQk5GKGJuZikge1xyXG4gICAgY29uc3QgY29udGVudCA9IGJuZiwgIC8vL1xyXG4gICAgICAgICAgdG9rZW5zID0gc3VwZXIudG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCksXHJcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VucyA9IHNpZ25pZmljYW50VG9rZW5zRnJvbVRva2Vucyh0b2tlbnMpO1xyXG5cclxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VucztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21Ob3RoaW5nKEJORkxleGVyKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoQk5GTGV4ZXIsIGVudHJpZXMpOyB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oQk5GTGV4ZXIsIHtcclxuICBlbnRyaWVzOiBlbnRyaWVzLFxyXG4gIHNwZWNpYWxTeW1ib2xzOiBzcGVjaWFsU3ltYm9sc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQk5GTGV4ZXI7XHJcblxyXG5mdW5jdGlvbiBzaWduaWZpY2FudFRva2Vuc0Zyb21Ub2tlbnModG9rZW5zKSB7XHJcbiAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbnMgPSB0b2tlbnMucmVkdWNlKGZ1bmN0aW9uKHNpZ25pZmljYW50VG9rZW5zLCB0b2tlbikge1xyXG4gICAgY29uc3QgdG9rZW5TaWduaWZpY2FudCA9IHRva2VuLmlzU2lnbmlmaWNhbnQoKTtcclxuXHJcbiAgICBpZiAodG9rZW5TaWduaWZpY2FudCkge1xyXG4gICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdG9rZW47IC8vL1xyXG5cclxuICAgICAgc2lnbmlmaWNhbnRUb2tlbnMucHVzaChzaWduaWZpY2FudFRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbnM7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbnM7XHJcbn1cclxuIl19