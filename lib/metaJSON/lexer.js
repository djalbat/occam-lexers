'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer');

var MetaJSONLexer = function (_CommonLexer) {
  _inherits(MetaJSONLexer, _CommonLexer);

  function MetaJSONLexer() {
    _classCallCheck(this, MetaJSONLexer);

    return _possibleConstructorReturn(this, (MetaJSONLexer.__proto__ || Object.getPrototypeOf(MetaJSONLexer)).apply(this, arguments));
  }

  _createClass(MetaJSONLexer, [{
    key: 'tokeniseComments',
    value: function tokeniseComments(tokensOrContents, inComment) {
      return inComment;
    }
  }, {
    key: 'tokeniseRegularExpressions',
    value: function tokeniseRegularExpressions(tokensOrContents) {}
  }, {
    key: 'tokeniseSinglyQuotedStringLiterals',
    value: function tokeniseSinglyQuotedStringLiterals(tokensOrContents) {}
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      return CommonLexer.fromEntries(MetaJSONLexer, entries);
    }
  }, {
    key: 'fromEntries',
    value: function fromEntries(entries) {
      return CommonLexer.fromEntries(MetaJSONLexer, entries);
    }
  }]);

  return MetaJSONLexer;
}(CommonLexer);

Object.assign(MetaJSONLexer, {
  entries: entries
});

module.exports = MetaJSONLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9tZXRhSlNPTi9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIkNvbW1vbkxleGVyIiwiTWV0YUpTT05MZXhlciIsInRva2Vuc09yQ29udGVudHMiLCJpbkNvbW1lbnQiLCJmcm9tRW50cmllcyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxpQkFBUixDQURwQjs7SUFHTUUsYTs7Ozs7Ozs7Ozs7cUNBQ2FDLGdCLEVBQWtCQyxTLEVBQVc7QUFBRSxhQUFPQSxTQUFQO0FBQW1COzs7K0NBRXhDRCxnQixFQUFrQixDQUFFOzs7dURBRVpBLGdCLEVBQWtCLENBQUU7OztrQ0FFbEM7QUFBRSxhQUFPRixZQUFZSSxXQUFaLENBQXdCSCxhQUF4QixFQUF1Q0gsT0FBdkMsQ0FBUDtBQUF5RDs7O2dDQUU3REEsTyxFQUFTO0FBQUUsYUFBT0UsWUFBWUksV0FBWixDQUF3QkgsYUFBeEIsRUFBdUNILE9BQXZDLENBQVA7QUFBeUQ7Ozs7RUFUN0RFLFc7O0FBWTVCSyxPQUFPQyxNQUFQLENBQWNMLGFBQWQsRUFBNkI7QUFDM0JIO0FBRDJCLENBQTdCOztBQUlBUyxPQUFPQyxPQUFQLEdBQWlCUCxhQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKTtcclxuXHJcbmNsYXNzIE1ldGFKU09OTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgdG9rZW5pc2VDb21tZW50cyh0b2tlbnNPckNvbnRlbnRzLCBpbkNvbW1lbnQpIHsgcmV0dXJuIGluQ29tbWVudDsgfVxyXG5cclxuICB0b2tlbmlzZVJlZ3VsYXJFeHByZXNzaW9ucyh0b2tlbnNPckNvbnRlbnRzKSB7fVxyXG5cclxuICB0b2tlbmlzZVNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxzKHRva2Vuc09yQ29udGVudHMpIHt9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKE1ldGFKU09OTGV4ZXIsIGVudHJpZXMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhNZXRhSlNPTkxleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKE1ldGFKU09OTGV4ZXIsIHtcclxuICBlbnRyaWVzXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNZXRhSlNPTkxleGVyO1xyXG4iXX0=