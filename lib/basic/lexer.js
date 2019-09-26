'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer'),
    tokenUtilities = require('../utilities/token'),
    EndOfLineNonSignificantToken = require('../common/token/nonSignificant/endOfLine');

var tokenise = tokenUtilities.tokenise;

var BasicLexer = function (_CommonLexer) {
  _inherits(BasicLexer, _CommonLexer);

  function BasicLexer() {
    _classCallCheck(this, BasicLexer);

    return _possibleConstructorReturn(this, (BasicLexer.__proto__ || Object.getPrototypeOf(BasicLexer)).apply(this, arguments));
  }

  _createClass(BasicLexer, [{
    key: 'tokensFromContent',
    value: function tokensFromContent(tokens, content, inComment) {
      return inComment;
    }
  }, {
    key: 'tokeniseEndOfLines',
    value: function tokeniseEndOfLines(content) {
      return tokenise(content, EndOfLineNonSignificantToken);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      return CommonLexer.fromNothing(BasicLexer);
    }
  }, {
    key: 'fromEntries',
    value: function fromEntries(entries) {
      return CommonLexer.fromEntries(BasicLexer, entries);
    }
  }]);

  return BasicLexer;
}(CommonLexer);

Object.assign(BasicLexer, {
  entries: entries
});

module.exports = BasicLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIkNvbW1vbkxleGVyIiwidG9rZW5VdGlsaXRpZXMiLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwidG9rZW5pc2UiLCJCYXNpY0xleGVyIiwidG9rZW5zIiwiY29udGVudCIsImluQ29tbWVudCIsImZyb21Ob3RoaW5nIiwiZnJvbUVudHJpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsaUJBQVIsQ0FEcEI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FGdkI7QUFBQSxJQUdNRywrQkFBK0JILFFBQVEsMENBQVIsQ0FIckM7O0lBS1FJLFEsR0FBYUYsYyxDQUFiRSxROztJQUVGQyxVOzs7Ozs7Ozs7OztzQ0FDY0MsTSxFQUFRQyxPLEVBQVNDLFMsRUFBVztBQUM1QyxhQUFPQSxTQUFQO0FBQ0Q7Ozt1Q0FFa0JELE8sRUFBUztBQUFFLGFBQU9ILFNBQVNHLE9BQVQsRUFBa0JKLDRCQUFsQixDQUFQO0FBQXlEOzs7a0NBRWxFO0FBQUUsYUFBT0YsWUFBWVEsV0FBWixDQUF3QkosVUFBeEIsQ0FBUDtBQUE2Qzs7O2dDQUVqRE4sTyxFQUFTO0FBQUUsYUFBT0UsWUFBWVMsV0FBWixDQUF3QkwsVUFBeEIsRUFBb0NOLE9BQXBDLENBQVA7QUFBc0Q7Ozs7RUFUN0RFLFc7O0FBWXpCVSxPQUFPQyxNQUFQLENBQWNQLFVBQWQsRUFBMEI7QUFDeEJOO0FBRHdCLENBQTFCOztBQUlBYyxPQUFPQyxPQUFQLEdBQWlCVCxVQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKSxcclxuICAgICAgdG9rZW5VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdG9rZW4nKSxcclxuICAgICAgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9lbmRPZkxpbmUnKTtcclxuXHJcbmNvbnN0IHsgdG9rZW5pc2UgfSA9IHRva2VuVXRpbGl0aWVzO1xyXG5cclxuY2xhc3MgQmFzaWNMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICB0b2tlbnNGcm9tQ29udGVudCh0b2tlbnMsIGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgcmV0dXJuIGluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIHRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50KSB7IHJldHVybiB0b2tlbmlzZShjb250ZW50LCBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhCYXNpY0xleGVyKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoQmFzaWNMZXhlciwgZW50cmllcyk7IH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihCYXNpY0xleGVyLCB7XHJcbiAgZW50cmllc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQmFzaWNMZXhlcjtcclxuIl19