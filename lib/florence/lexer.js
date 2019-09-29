'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer'),
    tokenUtilities = require('../utilities/token'),
    defaultLexicalPattern = require('./defaultLexicalPattern'),
    SingleLineCommentToken = require('./token/nonSignificant/comment/singleLine'),
    EndOfLineSignificantToken = require('../common/token/significant/endOfLine'),
    EndOfMultiLineCommentToken = require('./token/nonSignificant/comment/multiLine/endOf'),
    EntireMultiLineCommentToken = require('./token/nonSignificant/comment/multiLine/entire'),
    StartOfMultiLineCommentToken = require('./token/nonSignificant/comment/multiLine/startOf'),
    MiddleOfMultiLineCommentToken = require('./token/nonSignificant/comment/multiLine/middleOf');

var tokenise = tokenUtilities.tokenise;

var FlorenceLexer = function (_CommonLexer) {
  _inherits(FlorenceLexer, _CommonLexer);

  function FlorenceLexer() {
    _classCallCheck(this, FlorenceLexer);

    return _possibleConstructorReturn(this, (FlorenceLexer.__proto__ || Object.getPrototypeOf(FlorenceLexer)).apply(this, arguments));
  }

  _createClass(FlorenceLexer, [{
    key: 'tokeniseEndOfLines',
    value: function tokeniseEndOfLines(content) {
      return tokenise(content, EndOfLineSignificantToken);
    }
  }, {
    key: 'matchBrokenComment',
    value: function matchBrokenComment(content, inComment) {
      return null;
    }
  }, {
    key: 'matchMultiLineComment',
    value: function matchMultiLineComment(content, inComment) {
      var multiLinCommentToken = inComment ? EndOfMultiLineCommentToken.match(content) || MiddleOfMultiLineCommentToken.match(content) : EntireMultiLineCommentToken.match(content) || StartOfMultiLineCommentToken.match(content);

      return multiLinCommentToken;
    }
  }, {
    key: 'matchSingleLineComment',
    value: function matchSingleLineComment(content, inComment) {
      var singleLineCommentToken = inComment ? null : SingleLineCommentToken.match(content);

      return singleLineCommentToken;
    }
  }, {
    key: 'matchRegularExpression',
    value: function matchRegularExpression(content) {
      return null;
    }
  }, {
    key: 'matchSinglyQuotedStringLiteral',
    value: function matchSinglyQuotedStringLiteral(content) {
      return null;
    }
  }], [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      entries = [{ "custom": defaultLexicalPattern ///

      }].concat(entries); ///

      return CommonLexer.fromEntries(FlorenceLexer, entries);
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      return FlorenceLexer.fromEntries(entries);
    }
  }]);

  return FlorenceLexer;
}(CommonLexer);

Object.assign(FlorenceLexer, {
  entries: entries
});

module.exports = FlorenceLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIkNvbW1vbkxleGVyIiwidG9rZW5VdGlsaXRpZXMiLCJkZWZhdWx0TGV4aWNhbFBhdHRlcm4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiRW50aXJlTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwidG9rZW5pc2UiLCJGbG9yZW5jZUxleGVyIiwiY29udGVudCIsImluQ29tbWVudCIsIm11bHRpTGluQ29tbWVudFRva2VuIiwibWF0Y2giLCJzaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiY29uY2F0IiwiZnJvbUVudHJpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsaUJBQVIsQ0FEcEI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FGdkI7QUFBQSxJQUdNRyx3QkFBd0JILFFBQVEseUJBQVIsQ0FIOUI7QUFBQSxJQUlNSSx5QkFBeUJKLFFBQVEsMkNBQVIsQ0FKL0I7QUFBQSxJQUtNSyw0QkFBNEJMLFFBQVEsdUNBQVIsQ0FMbEM7QUFBQSxJQU1NTSw2QkFBNkJOLFFBQVEsZ0RBQVIsQ0FObkM7QUFBQSxJQU9NTyw4QkFBOEJQLFFBQVEsaURBQVIsQ0FQcEM7QUFBQSxJQVFNUSwrQkFBK0JSLFFBQVEsa0RBQVIsQ0FSckM7QUFBQSxJQVNNUyxnQ0FBZ0NULFFBQVEsbURBQVIsQ0FUdEM7O0lBV1FVLFEsR0FBYVIsYyxDQUFiUSxROztJQUVGQyxhOzs7Ozs7Ozs7Ozt1Q0FDZUMsTyxFQUFTO0FBQUUsYUFBT0YsU0FBU0UsT0FBVCxFQUFrQlAseUJBQWxCLENBQVA7QUFBc0Q7Ozt1Q0FFakVPLE8sRUFBU0MsUyxFQUFXO0FBQUUsYUFBTyxJQUFQO0FBQWM7OzswQ0FFakNELE8sRUFBU0MsUyxFQUFXO0FBQ3hDLFVBQU1DLHVCQUF1QkQsWUFDRVAsMkJBQTJCUyxLQUEzQixDQUFpQ0gsT0FBakMsS0FBNkNILDhCQUE4Qk0sS0FBOUIsQ0FBb0NILE9BQXBDLENBRC9DLEdBRUlMLDRCQUE0QlEsS0FBNUIsQ0FBa0NILE9BQWxDLEtBQThDSiw2QkFBNkJPLEtBQTdCLENBQW1DSCxPQUFuQyxDQUYvRTs7QUFJQSxhQUFPRSxvQkFBUDtBQUNEOzs7MkNBRXNCRixPLEVBQVNDLFMsRUFBVztBQUN6QyxVQUFNRyx5QkFBeUJILFlBQ0UsSUFERixHQUVJVCx1QkFBdUJXLEtBQXZCLENBQTZCSCxPQUE3QixDQUZuQzs7QUFJQSxhQUFPSSxzQkFBUDtBQUNEOzs7MkNBRXNCSixPLEVBQVM7QUFBRSxhQUFPLElBQVA7QUFBYzs7O21EQUVqQkEsTyxFQUFTO0FBQUUsYUFBTyxJQUFQO0FBQWM7OztnQ0FFckNiLE8sRUFBUztBQUMxQkEsZ0JBRUUsQ0FFRSxFQUFFLFVBQVdJLHFCQUFiLENBQXNDOztBQUF0QyxPQUZGLEVBSUVjLE1BSkYsQ0FJU2xCLE9BSlQsQ0FGRixDQUQwQixDQU9KOztBQUV0QixhQUFPRSxZQUFZaUIsV0FBWixDQUF3QlAsYUFBeEIsRUFBdUNaLE9BQXZDLENBQVA7QUFDRDs7O2tDQUVvQjtBQUFFLGFBQU9ZLGNBQWNPLFdBQWQsQ0FBMEJuQixPQUExQixDQUFQO0FBQTRDOzs7O0VBckN6Q0UsVzs7QUF3QzVCa0IsT0FBT0MsTUFBUCxDQUFjVCxhQUFkLEVBQTZCO0FBQzNCWjtBQUQyQixDQUE3Qjs7QUFJQXNCLE9BQU9DLE9BQVAsR0FBaUJYLGFBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgZW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxyXG4gICAgICB0b2tlblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90b2tlbicpLFxyXG4gICAgICBkZWZhdWx0TGV4aWNhbFBhdHRlcm4gPSByZXF1aXJlKCcuL2RlZmF1bHRMZXhpY2FsUGF0dGVybicpLFxyXG4gICAgICBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmUnKSxcclxuICAgICAgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9lbmRPZkxpbmUnKSxcclxuICAgICAgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL2VuZE9mJyksXHJcbiAgICAgIEVudGlyZU11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW50aXJlJyksXHJcbiAgICAgIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL3N0YXJ0T2YnKSxcclxuICAgICAgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL21pZGRsZU9mJyk7XHJcblxyXG5jb25zdCB7IHRva2VuaXNlIH0gPSB0b2tlblV0aWxpdGllcztcclxuXHJcbmNsYXNzIEZsb3JlbmNlTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgdG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQpIHsgcmV0dXJuIHRva2VuaXNlKGNvbnRlbnQsIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4pOyB9XHJcblxyXG4gIG1hdGNoQnJva2VuQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3QgbXVsdGlMaW5Db21tZW50VG9rZW4gPSBpbkNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpIHx8IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVudGlyZU11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSB8fCBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBtdWx0aUxpbkNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoU2luZ2xlTGluZUNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBzaW5nbGVMaW5lQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaW5nbGVMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBzaW5nbGVMaW5lQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hSZWd1bGFyRXhwcmVzc2lvbihjb250ZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIG1hdGNoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbChjb250ZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICBlbnRyaWVzID1cclxuXHJcbiAgICAgIFtcclxuXHJcbiAgICAgICAgeyBcImN1c3RvbVwiIDogZGVmYXVsdExleGljYWxQYXR0ZXJuIH0gIC8vL1xyXG5cclxuICAgICAgXS5jb25jYXQoZW50cmllcyk7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoRmxvcmVuY2VMZXhlciwgZW50cmllcyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBGbG9yZW5jZUxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpOyB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oRmxvcmVuY2VMZXhlciwge1xyXG4gIGVudHJpZXNcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlTGV4ZXI7XHJcbiJdfQ==