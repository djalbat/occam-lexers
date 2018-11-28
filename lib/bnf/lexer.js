'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer'),
    specialSymbols = require('./specialSymbols');

var BNFLexer = function (_CommonLexer) {
  _inherits(BNFLexer, _CommonLexer);

  function BNFLexer() {
    _classCallCheck(this, BNFLexer);

    return _possibleConstructorReturn(this, (BNFLexer.__proto__ || Object.getPrototypeOf(BNFLexer)).apply(this, arguments));
  }

  _createClass(BNFLexer, [{
    key: 'tokeniseComments',
    value: function tokeniseComments(tokensOrContents, inComment) {
      return inComment;
    }
  }, {
    key: 'tokeniseSinglyQuotedStringLiterals',
    value: function tokeniseSinglyQuotedStringLiterals(tokensOrContents) {}
  }, {
    key: 'reTokeniseMiddleOfCommentTokens',
    value: function reTokeniseMiddleOfCommentTokens(tokensOrContents) {}
  }, {
    key: 'tokensFromBNF',
    value: function tokensFromBNF(bnf) {
      var content = bnf,
          ///
      tokens = _get(BNFLexer.prototype.__proto__ || Object.getPrototypeOf(BNFLexer.prototype), 'tokenise', this).call(this, content);

      return tokens;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvbGV4ZXIuanMiXSwibmFtZXMiOlsiZW50cmllcyIsInJlcXVpcmUiLCJDb21tb25MZXhlciIsInNwZWNpYWxTeW1ib2xzIiwiQk5GTGV4ZXIiLCJ0b2tlbnNPckNvbnRlbnRzIiwiaW5Db21tZW50IiwiYm5mIiwiY29udGVudCIsInRva2VucyIsImZyb21Ob3RoaW5nIiwiZnJvbUVudHJpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxpQkFBUixDQURwQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxrQkFBUixDQUZ2Qjs7SUFJTUcsUTs7Ozs7Ozs7Ozs7cUNBQ2FDLGdCLEVBQWtCQyxTLEVBQVc7QUFBRSxhQUFPQSxTQUFQO0FBQW1COzs7dURBRWhDRCxnQixFQUFrQixDQUFFOzs7b0RBRXZCQSxnQixFQUFrQixDQUFFOzs7a0NBRXRDRSxHLEVBQUs7QUFDakIsVUFBTUMsVUFBVUQsR0FBaEI7QUFBQSxVQUFzQjtBQUNoQkUsNEhBQXdCRCxPQUF4QixDQUROOztBQUdBLGFBQU9DLE1BQVA7QUFDRDs7O2tDQUVvQjtBQUFFLGFBQU9QLFlBQVlRLFdBQVosQ0FBd0JOLFFBQXhCLENBQVA7QUFBMkM7OztnQ0FFL0NKLE8sRUFBUztBQUFFLGFBQU9FLFlBQVlTLFdBQVosQ0FBd0JQLFFBQXhCLEVBQWtDSixPQUFsQyxDQUFQO0FBQW9EOzs7O0VBaEI3REUsVzs7QUFtQnZCVSxPQUFPQyxNQUFQLENBQWNULFFBQWQsRUFBd0I7QUFDdEJKLGtCQURzQjtBQUV0Qkc7QUFGc0IsQ0FBeEI7O0FBS0FXLE9BQU9DLE9BQVAsR0FBaUJYLFFBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgZW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxyXG4gICAgICBzcGVjaWFsU3ltYm9scyA9IHJlcXVpcmUoJy4vc3BlY2lhbFN5bWJvbHMnKTtcclxuXHJcbmNsYXNzIEJORkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHRva2VuaXNlQ29tbWVudHModG9rZW5zT3JDb250ZW50cywgaW5Db21tZW50KSB7IHJldHVybiBpbkNvbW1lbnQ7IH1cclxuXHJcbiAgdG9rZW5pc2VTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFscyh0b2tlbnNPckNvbnRlbnRzKSB7fVxyXG5cclxuICByZVRva2VuaXNlTWlkZGxlT2ZDb21tZW50VG9rZW5zKHRva2Vuc09yQ29udGVudHMpIHt9XHJcblxyXG4gIHRva2Vuc0Zyb21CTkYoYm5mKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gYm5mLCAgLy8vXHJcbiAgICAgICAgICB0b2tlbnMgPSBzdXBlci50b2tlbmlzZShjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbU5vdGhpbmcoQk5GTGV4ZXIpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhCTkZMZXhlciwgZW50cmllcyk7IH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihCTkZMZXhlciwge1xyXG4gIGVudHJpZXMsXHJcbiAgc3BlY2lhbFN5bWJvbHNcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJORkxleGVyO1xyXG4iXX0=