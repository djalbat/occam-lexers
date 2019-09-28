'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer'),
    tokenUtilities = require('../utilities/token'),
    defaultLexicalPattern = require('./defaultLexicalPattern'),
    EndOfLineNonSignificantToken = require('../common/token/significant/endOfLine');

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
      return tokenise(content, EndOfLineNonSignificantToken);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIkNvbW1vbkxleGVyIiwidG9rZW5VdGlsaXRpZXMiLCJkZWZhdWx0TGV4aWNhbFBhdHRlcm4iLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwidG9rZW5pc2UiLCJGbG9yZW5jZUxleGVyIiwiY29udGVudCIsImNvbmNhdCIsImZyb21FbnRyaWVzIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBRnZCO0FBQUEsSUFHTUcsd0JBQXdCSCxRQUFRLHlCQUFSLENBSDlCO0FBQUEsSUFJTUksK0JBQStCSixRQUFRLHVDQUFSLENBSnJDOztJQU1RSyxRLEdBQWFILGMsQ0FBYkcsUTs7SUFFRkMsYTs7Ozs7Ozs7Ozs7dUNBQ2VDLE8sRUFBUztBQUFFLGFBQU9GLFNBQVNFLE9BQVQsRUFBa0JILDRCQUFsQixDQUFQO0FBQXlEOzs7bURBRXhERyxPLEVBQVM7QUFBRSxhQUFPLElBQVA7QUFBYzs7O2dDQUVyQ1IsTyxFQUFTO0FBQzFCQSxnQkFFRSxDQUVFLEVBQUUsVUFBV0kscUJBQWIsQ0FBc0M7O0FBQXRDLE9BRkYsRUFJRUssTUFKRixDQUlTVCxPQUpULENBRkYsQ0FEMEIsQ0FPSjs7QUFFdEIsYUFBT0UsWUFBWVEsV0FBWixDQUF3QkgsYUFBeEIsRUFBdUNQLE9BQXZDLENBQVA7QUFDRDs7O2tDQUVvQjtBQUFFLGFBQU9PLGNBQWNHLFdBQWQsQ0FBMEJWLE9BQTFCLENBQVA7QUFBNEM7Ozs7RUFqQnpDRSxXOztBQW9CNUJTLE9BQU9DLE1BQVAsQ0FBY0wsYUFBZCxFQUE2QjtBQUMzQlA7QUFEMkIsQ0FBN0I7O0FBSUFhLE9BQU9DLE9BQVAsR0FBaUJQLGFBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgZW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxyXG4gICAgICB0b2tlblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90b2tlbicpLFxyXG4gICAgICBkZWZhdWx0TGV4aWNhbFBhdHRlcm4gPSByZXF1aXJlKCcuL2RlZmF1bHRMZXhpY2FsUGF0dGVybicpLFxyXG4gICAgICBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2VuZE9mTGluZScpO1xyXG5cclxuY29uc3QgeyB0b2tlbmlzZSB9ID0gdG9rZW5VdGlsaXRpZXM7XHJcblxyXG5jbGFzcyBGbG9yZW5jZUxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50KSB7IHJldHVybiB0b2tlbmlzZShjb250ZW50LCBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuKTsgfVxyXG5cclxuICBtYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwoY29udGVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykge1xyXG4gICAgZW50cmllcyA9XHJcblxyXG4gICAgICBbXHJcblxyXG4gICAgICAgIHsgXCJjdXN0b21cIiA6IGRlZmF1bHRMZXhpY2FsUGF0dGVybiB9ICAvLy9cclxuXHJcbiAgICAgIF0uY29uY2F0KGVudHJpZXMpOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKEZsb3JlbmNlTGV4ZXIsIGVudHJpZXMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gRmxvcmVuY2VMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTsgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKEZsb3JlbmNlTGV4ZXIsIHtcclxuICBlbnRyaWVzXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUxleGVyO1xyXG4iXX0=