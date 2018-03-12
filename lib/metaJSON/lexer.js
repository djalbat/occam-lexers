'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer'),
    NonSignificantEndOfLineTokens = require('../common/tokens/endOfLine/nonSignificant');

var MetaJSONLexer = function (_CommonLexer) {
  _inherits(MetaJSONLexer, _CommonLexer);

  function MetaJSONLexer() {
    _classCallCheck(this, MetaJSONLexer);

    return _possibleConstructorReturn(this, (MetaJSONLexer.__proto__ || Object.getPrototypeOf(MetaJSONLexer)).apply(this, arguments));
  }

  _createClass(MetaJSONLexer, [{
    key: 'processEndOfLineTokens',
    value: function processEndOfLineTokens(tokensOrContents) {
      NonSignificantEndOfLineTokens.process(tokensOrContents);
    }
  }, {
    key: 'processCommentTokens',
    value: function processCommentTokens(tokensOrContents, inComment) {}
  }], [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      return CommonLexer.fromEntries(MetaJSONLexer, entries);
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      return CommonLexer.fromNothing(MetaJSONLexer);
    }
  }]);

  return MetaJSONLexer;
}(CommonLexer);

Object.assign(MetaJSONLexer, {
  entries: entries
});

module.exports = MetaJSONLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9tZXRhSlNPTi9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIkNvbW1vbkxleGVyIiwiTm9uU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMiLCJNZXRhSlNPTkxleGVyIiwidG9rZW5zT3JDb250ZW50cyIsInByb2Nlc3MiLCJpbkNvbW1lbnQiLCJmcm9tRW50cmllcyIsImZyb21Ob3RoaW5nIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsZ0NBQWdDRixRQUFRLDJDQUFSLENBRnRDOztJQUlNRyxhOzs7Ozs7Ozs7OzsyQ0FDbUJDLGdCLEVBQWtCO0FBQ3ZDRixvQ0FBOEJHLE9BQTlCLENBQXNDRCxnQkFBdEM7QUFDRDs7O3lDQUVvQkEsZ0IsRUFBa0JFLFMsRUFBVyxDQUFFOzs7Z0NBRWpDUCxPLEVBQVM7QUFBRSxhQUFPRSxZQUFZTSxXQUFaLENBQXdCSixhQUF4QixFQUF1Q0osT0FBdkMsQ0FBUDtBQUF5RDs7O2tDQUVsRTtBQUFFLGFBQU9FLFlBQVlPLFdBQVosQ0FBd0JMLGFBQXhCLENBQVA7QUFBZ0Q7Ozs7RUFUN0NGLFc7O0FBWTVCUSxPQUFPQyxNQUFQLENBQWNQLGFBQWQsRUFBNkI7QUFDM0JKLFdBQVNBO0FBRGtCLENBQTdCOztBQUlBWSxPQUFPQyxPQUFQLEdBQWlCVCxhQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKSxcclxuICAgICAgTm9uU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL2VuZE9mTGluZS9ub25TaWduaWZpY2FudCcpO1xyXG5cclxuY2xhc3MgTWV0YUpTT05MZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBwcm9jZXNzRW5kT2ZMaW5lVG9rZW5zKHRva2Vuc09yQ29udGVudHMpIHtcclxuICAgIE5vblNpZ25pZmljYW50RW5kT2ZMaW5lVG9rZW5zLnByb2Nlc3ModG9rZW5zT3JDb250ZW50cyk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzQ29tbWVudFRva2Vucyh0b2tlbnNPckNvbnRlbnRzLCBpbkNvbW1lbnQpIHt9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhNZXRhSlNPTkxleGVyLCBlbnRyaWVzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhNZXRhSlNPTkxleGVyKTsgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKE1ldGFKU09OTGV4ZXIsIHtcclxuICBlbnRyaWVzOiBlbnRyaWVzXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNZXRhSlNPTkxleGVyO1xyXG4iXX0=