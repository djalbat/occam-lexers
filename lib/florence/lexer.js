'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer'),
    tokenUtilities = require('../utilities/token'),
    defaultLexicalPattern = require('./defaultLexicalPattern'),
    SignificantEndOfLineToken = require('../common/token/significant/endOfLine');

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
      return tokenise(content, SignificantEndOfLineToken);
    }
  }, {
    key: 'tokeniseRegularExpressions',
    value: function tokeniseRegularExpressions(tokensOrContents) {}
  }, {
    key: 'tokeniseSinglyQuotedStringLiterals',
    value: function tokeniseSinglyQuotedStringLiterals(tokensOrContents) {}
  }], [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      entries = [{ "custom": defaultLexicalPattern }].concat(entries); ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIkNvbW1vbkxleGVyIiwidG9rZW5VdGlsaXRpZXMiLCJkZWZhdWx0TGV4aWNhbFBhdHRlcm4iLCJTaWduaWZpY2FudEVuZE9mTGluZVRva2VuIiwidG9rZW5pc2UiLCJGbG9yZW5jZUxleGVyIiwiY29udGVudCIsInRva2Vuc09yQ29udGVudHMiLCJjb25jYXQiLCJmcm9tRW50cmllcyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxpQkFBUixDQURwQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxvQkFBUixDQUZ2QjtBQUFBLElBR01HLHdCQUF3QkgsUUFBUSx5QkFBUixDQUg5QjtBQUFBLElBSU1JLDRCQUE0QkosUUFBUSx1Q0FBUixDQUpsQzs7SUFNUUssUSxHQUFhSCxjLENBQWJHLFE7O0lBRUZDLGE7Ozs7Ozs7Ozs7O3VDQUNlQyxPLEVBQVM7QUFBRSxhQUFPRixTQUFTRSxPQUFULEVBQWtCSCx5QkFBbEIsQ0FBUDtBQUFzRDs7OytDQUV6REksZ0IsRUFBa0IsQ0FBRTs7O3VEQUVaQSxnQixFQUFrQixDQUFFOzs7Z0NBRXBDVCxPLEVBQVM7QUFDMUJBLGdCQUFVLENBRVIsRUFBRSxVQUFXSSxxQkFBYixFQUZRLEVBSVJNLE1BSlEsQ0FJRFYsT0FKQyxDQUFWLENBRDBCLENBS047O0FBRXBCLGFBQU9FLFlBQVlTLFdBQVosQ0FBd0JKLGFBQXhCLEVBQXVDUCxPQUF2QyxDQUFQO0FBQ0Q7OztrQ0FFb0I7QUFBRSxhQUFPTyxjQUFjSSxXQUFkLENBQTBCWCxPQUExQixDQUFQO0FBQTRDOzs7O0VBakJ6Q0UsVzs7QUFvQjVCVSxPQUFPQyxNQUFQLENBQWNOLGFBQWQsRUFBNkI7QUFDM0JQO0FBRDJCLENBQTdCOztBQUlBYyxPQUFPQyxPQUFQLEdBQWlCUixhQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKSxcclxuICAgICAgdG9rZW5VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdG9rZW4nKSxcclxuICAgICAgZGVmYXVsdExleGljYWxQYXR0ZXJuID0gcmVxdWlyZSgnLi9kZWZhdWx0TGV4aWNhbFBhdHRlcm4nKSxcclxuICAgICAgU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9lbmRPZkxpbmUnKTtcclxuXHJcbmNvbnN0IHsgdG9rZW5pc2UgfSA9IHRva2VuVXRpbGl0aWVzO1xyXG5cclxuY2xhc3MgRmxvcmVuY2VMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICB0b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCkgeyByZXR1cm4gdG9rZW5pc2UoY29udGVudCwgU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbik7IH1cclxuXHJcbiAgdG9rZW5pc2VSZWd1bGFyRXhwcmVzc2lvbnModG9rZW5zT3JDb250ZW50cykge31cclxuXHJcbiAgdG9rZW5pc2VTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFscyh0b2tlbnNPckNvbnRlbnRzKSB7fVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykge1xyXG4gICAgZW50cmllcyA9IFtcclxuXHJcbiAgICAgIHsgXCJjdXN0b21cIiA6IGRlZmF1bHRMZXhpY2FsUGF0dGVybiB9XHJcblxyXG4gICAgXS5jb25jYXQoZW50cmllcyk7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoRmxvcmVuY2VMZXhlciwgZW50cmllcyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBGbG9yZW5jZUxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpOyB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oRmxvcmVuY2VMZXhlciwge1xyXG4gIGVudHJpZXNcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlTGV4ZXI7XHJcbiJdfQ==