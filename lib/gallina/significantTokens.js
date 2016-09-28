'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    grammar = require('./grammar'),
    ParseableToken = require('../common/token/parseable');

var tokenTypes = Object.keys(grammar),
    ///
rules = tokenTypes.reduce(function (rules, tokenType) {
  var regExp = grammar[tokenType],
      rule = new Rule(tokenType, regExp);

  rules.push(rule);

  return rules;
}, []);

var SignificantTokens = function () {
  function SignificantTokens() {
    _classCallCheck(this, SignificantTokens);
  }

  _createClass(SignificantTokens, null, [{
    key: 'pass',
    value: function pass(line) {
      var tokens = line.getTokens();

      tokens = tokens.map(function (token) {
        if (token instanceof ParseableToken) {
          var parseableToken = token,
              content = parseableToken.getContent(),
              significantToken = undefined;

          rules.some(function (rule) {
            significantToken = rule.significantTokenFromContent(content, line);

            if (significantToken !== null) {
              return true;
            } else {
              return false;
            }
          });

          return significantToken;
        } else {
          return token;
        }
      });

      line.setTokens(tokens);
    }
  }]);

  return SignificantTokens;
}();

module.exports = SignificantTokens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL3NpZ25pZmljYW50VG9rZW5zLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiZ3JhbW1hciIsIlBhcnNlYWJsZVRva2VuIiwidG9rZW5UeXBlcyIsIk9iamVjdCIsImtleXMiLCJydWxlcyIsInJlZHVjZSIsInRva2VuVHlwZSIsInJlZ0V4cCIsInJ1bGUiLCJwdXNoIiwiU2lnbmlmaWNhbnRUb2tlbnMiLCJsaW5lIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwibWFwIiwidG9rZW4iLCJwYXJzZWFibGVUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsInVuZGVmaW5lZCIsInNvbWUiLCJzaWduaWZpY2FudFRva2VuRnJvbUNvbnRlbnQiLCJzZXRUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxVQUFVRCxRQUFRLFdBQVIsQ0FEZDtBQUFBLElBRUlFLGlCQUFpQkYsUUFBUSwyQkFBUixDQUZyQjs7QUFJQSxJQUFJRyxhQUFhQyxPQUFPQyxJQUFQLENBQVlKLE9BQVosQ0FBakI7QUFBQSxJQUF3QztBQUNwQ0ssUUFBUUgsV0FBV0ksTUFBWCxDQUFrQixVQUFTRCxLQUFULEVBQWdCRSxTQUFoQixFQUEyQjtBQUNuRCxNQUFJQyxTQUFTUixRQUFRTyxTQUFSLENBQWI7QUFBQSxNQUNJRSxPQUFPLElBQUlYLElBQUosQ0FBU1MsU0FBVCxFQUFvQkMsTUFBcEIsQ0FEWDs7QUFHQUgsUUFBTUssSUFBTixDQUFXRCxJQUFYOztBQUVBLFNBQU9KLEtBQVA7QUFDRCxDQVBPLEVBT0wsRUFQSyxDQURaOztJQVVNTSxpQjs7Ozs7Ozt5QkFDUUMsSSxFQUFNO0FBQ2hCLFVBQUlDLFNBQVNELEtBQUtFLFNBQUwsRUFBYjs7QUFFQUQsZUFBU0EsT0FBT0UsR0FBUCxDQUFXLFVBQVNDLEtBQVQsRUFBZ0I7QUFDbEMsWUFBSUEsaUJBQWlCZixjQUFyQixFQUFxQztBQUNuQyxjQUFJZ0IsaUJBQWlCRCxLQUFyQjtBQUFBLGNBQ0lFLFVBQVVELGVBQWVFLFVBQWYsRUFEZDtBQUFBLGNBRUlDLG1CQUFtQkMsU0FGdkI7O0FBSUFoQixnQkFBTWlCLElBQU4sQ0FBVyxVQUFTYixJQUFULEVBQWU7QUFDeEJXLCtCQUFtQlgsS0FBS2MsMkJBQUwsQ0FBaUNMLE9BQWpDLEVBQTBDTixJQUExQyxDQUFuQjs7QUFFQSxnQkFBSVEscUJBQXFCLElBQXpCLEVBQStCO0FBQzdCLHFCQUFPLElBQVA7QUFDRCxhQUZELE1BRU87QUFDTCxxQkFBTyxLQUFQO0FBQ0Q7QUFDRixXQVJEOztBQVVBLGlCQUFPQSxnQkFBUDtBQUNELFNBaEJELE1BZ0JPO0FBQ0wsaUJBQU9KLEtBQVA7QUFDRDtBQUNGLE9BcEJRLENBQVQ7O0FBc0JBSixXQUFLWSxTQUFMLENBQWVYLE1BQWY7QUFDRDs7Ozs7O0FBR0hZLE9BQU9DLE9BQVAsR0FBaUJmLGlCQUFqQiIsImZpbGUiOiJzaWduaWZpY2FudFRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXHJcbiAgICBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXHJcbiAgICBQYXJzZWFibGVUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9wYXJzZWFibGUnKTtcclxuXHJcbnZhciB0b2tlblR5cGVzID0gT2JqZWN0LmtleXMoZ3JhbW1hciksICAvLy9cclxuICAgIHJ1bGVzID0gdG9rZW5UeXBlcy5yZWR1Y2UoZnVuY3Rpb24ocnVsZXMsIHRva2VuVHlwZSkge1xyXG4gICAgICB2YXIgcmVnRXhwID0gZ3JhbW1hclt0b2tlblR5cGVdLFxyXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHRva2VuVHlwZSwgcmVnRXhwKTtcclxuXHJcbiAgICAgIHJ1bGVzLnB1c2gocnVsZSk7XHJcblxyXG4gICAgICByZXR1cm4gcnVsZXM7XHJcbiAgICB9LCBbXSk7XHJcblxyXG5jbGFzcyBTaWduaWZpY2FudFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3MobGluZSkge1xyXG4gICAgdmFyIHRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XHJcbiAgICBcclxuICAgIHRva2VucyA9IHRva2Vucy5tYXAoZnVuY3Rpb24odG9rZW4pIHtcclxuICAgICAgaWYgKHRva2VuIGluc3RhbmNlb2YgUGFyc2VhYmxlVG9rZW4pIHtcclxuICAgICAgICB2YXIgcGFyc2VhYmxlVG9rZW4gPSB0b2tlbixcclxuICAgICAgICAgICAgY29udGVudCA9IHBhcnNlYWJsZVRva2VuLmdldENvbnRlbnQoKSxcclxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgcnVsZXMuc29tZShmdW5jdGlvbihydWxlKSB7XHJcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gcnVsZS5zaWduaWZpY2FudFRva2VuRnJvbUNvbnRlbnQoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGluZS5zZXRUb2tlbnModG9rZW5zKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbnM7XHJcbiJdfQ==