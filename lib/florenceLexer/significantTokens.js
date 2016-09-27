'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../../util'),
    ErrorToken = require('../common/token/error'),
    ParseableToken = require('../common/token/parseable');

var SignificantTokens = function () {
  function SignificantTokens() {
    _classCallCheck(this, SignificantTokens);
  }

  _createClass(SignificantTokens, null, [{
    key: 'pass',
    value: function pass(context, parser) {
      var tokens = context.getTokens(),
          index = 0,
          token = tokens[index];

      while (token !== undefined) {
        if (token instanceof ParseableToken) {
          var significantToken = token,
              uncommentedContent = significantToken.getContent(),
              uncommentedContentTokens = tokensFromCUncommentedContent(uncommentedContent, parser),
              uncommentedContentTokensLength = uncommentedContentTokens.length;

          util.spliceArray(tokens, index, 1, uncommentedContentTokens);

          index += uncommentedContentTokensLength;
        } else {
          index++;
        }

        token = tokens[index];
      }
    }
  }]);

  return SignificantTokens;
}();

module.exports = SignificantTokens;

function tokensFromCUncommentedContent(uncommentedContent, parser) {
  var tokens = [],
      content = uncommentedContent; ///

  while (content !== '') {
    var tokenOrTokens = parser.fromContent(content) || ErrorToken.fromContent(content),
        tokenOrTokensLength = lengthOfTokenOrTokens(tokenOrTokens);

    content = content.substring(tokenOrTokensLength);

    tokens = tokens.concat(tokenOrTokens);
  }

  return tokens;
}

function lengthOfTokenOrTokens(tokenOrTokens) {
  var tokenOrTokensLength,
      tokens = tokenOrTokens instanceof Array ? tokenOrTokens : [tokenOrTokens],
      tokensLength = 0;

  tokens.forEach(function (token) {
    tokensLength += token.getLength();
  });

  tokenOrTokensLength = tokensLength;

  return tokenOrTokensLength;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZUxleGVyL3NpZ25pZmljYW50VG9rZW5zLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiRXJyb3JUb2tlbiIsIlBhcnNlYWJsZVRva2VuIiwiU2lnbmlmaWNhbnRUb2tlbnMiLCJjb250ZXh0IiwicGFyc2VyIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwiaW5kZXgiLCJ0b2tlbiIsInVuZGVmaW5lZCIsInNpZ25pZmljYW50VG9rZW4iLCJ1bmNvbW1lbnRlZENvbnRlbnQiLCJnZXRDb250ZW50IiwidW5jb21tZW50ZWRDb250ZW50VG9rZW5zIiwidG9rZW5zRnJvbUNVbmNvbW1lbnRlZENvbnRlbnQiLCJ1bmNvbW1lbnRlZENvbnRlbnRUb2tlbnNMZW5ndGgiLCJsZW5ndGgiLCJzcGxpY2VBcnJheSIsIm1vZHVsZSIsImV4cG9ydHMiLCJjb250ZW50IiwidG9rZW5PclRva2VucyIsImZyb21Db250ZW50IiwidG9rZW5PclRva2Vuc0xlbmd0aCIsImxlbmd0aE9mVG9rZW5PclRva2VucyIsInN1YnN0cmluZyIsImNvbmNhdCIsIkFycmF5IiwidG9rZW5zTGVuZ3RoIiwiZm9yRWFjaCIsImdldExlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsWUFBUixDQUFYO0FBQUEsSUFDSUMsYUFBYUQsUUFBUSx1QkFBUixDQURqQjtBQUFBLElBRUlFLGlCQUFpQkYsUUFBUSwyQkFBUixDQUZyQjs7SUFJTUcsaUI7Ozs7Ozs7eUJBQ1FDLE8sRUFBU0MsTSxFQUFRO0FBQzNCLFVBQUlDLFNBQVNGLFFBQVFHLFNBQVIsRUFBYjtBQUFBLFVBQ0lDLFFBQVEsQ0FEWjtBQUFBLFVBRUlDLFFBQVFILE9BQU9FLEtBQVAsQ0FGWjs7QUFJQSxhQUFPQyxVQUFVQyxTQUFqQixFQUE0QjtBQUMxQixZQUFJRCxpQkFBaUJQLGNBQXJCLEVBQXFDO0FBQ25DLGNBQUlTLG1CQUFtQkYsS0FBdkI7QUFBQSxjQUNJRyxxQkFBcUJELGlCQUFpQkUsVUFBakIsRUFEekI7QUFBQSxjQUVJQywyQkFBMkJDLDhCQUE4Qkgsa0JBQTlCLEVBQWtEUCxNQUFsRCxDQUYvQjtBQUFBLGNBR0lXLGlDQUFpQ0YseUJBQXlCRyxNQUg5RDs7QUFLQWxCLGVBQUttQixXQUFMLENBQWlCWixNQUFqQixFQUF5QkUsS0FBekIsRUFBZ0MsQ0FBaEMsRUFBbUNNLHdCQUFuQzs7QUFFQU4sbUJBQVNRLDhCQUFUO0FBQ0YsU0FUQSxNQVNNO0FBQ0pSO0FBQ0Q7O0FBRURDLGdCQUFRSCxPQUFPRSxLQUFQLENBQVI7QUFDRDtBQUNGOzs7Ozs7QUFHSFcsT0FBT0MsT0FBUCxHQUFpQmpCLGlCQUFqQjs7QUFFQSxTQUFTWSw2QkFBVCxDQUF1Q0gsa0JBQXZDLEVBQTJEUCxNQUEzRCxFQUFtRTtBQUNqRSxNQUFJQyxTQUFTLEVBQWI7QUFBQSxNQUNJZSxVQUFVVCxrQkFEZCxDQURpRSxDQUUvQjs7QUFFbEMsU0FBT1MsWUFBWSxFQUFuQixFQUF1QjtBQUNyQixRQUFJQyxnQkFBZ0JqQixPQUFPa0IsV0FBUCxDQUFtQkYsT0FBbkIsS0FDQXBCLFdBQVdzQixXQUFYLENBQXVCRixPQUF2QixDQURwQjtBQUFBLFFBRW9CRyxzQkFBc0JDLHNCQUFzQkgsYUFBdEIsQ0FGMUM7O0FBSUFELGNBQVVBLFFBQVFLLFNBQVIsQ0FBa0JGLG1CQUFsQixDQUFWOztBQUVBbEIsYUFBU0EsT0FBT3FCLE1BQVAsQ0FBY0wsYUFBZCxDQUFUO0FBQ0Q7O0FBRUQsU0FBT2hCLE1BQVA7QUFDRDs7QUFFRCxTQUFTbUIscUJBQVQsQ0FBK0JILGFBQS9CLEVBQThDO0FBQzVDLE1BQUlFLG1CQUFKO0FBQUEsTUFDSWxCLFNBQVNnQix5QkFBeUJNLEtBQXpCLEdBQWlDTixhQUFqQyxHQUFpRCxDQUFDQSxhQUFELENBRDlEO0FBQUEsTUFFSU8sZUFBZSxDQUZuQjs7QUFJQXZCLFNBQU93QixPQUFQLENBQWUsVUFBU3JCLEtBQVQsRUFBZ0I7QUFDN0JvQixvQkFBZ0JwQixNQUFNc0IsU0FBTixFQUFoQjtBQUNELEdBRkQ7O0FBSUFQLHdCQUFzQkssWUFBdEI7O0FBRUEsU0FBT0wsbUJBQVA7QUFDRCIsImZpbGUiOiJzaWduaWZpY2FudFRva2Vucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpLFxyXG4gICAgRXJyb3JUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9lcnJvcicpLFxyXG4gICAgUGFyc2VhYmxlVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vcGFyc2VhYmxlJyk7XHJcblxyXG5jbGFzcyBTaWduaWZpY2FudFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3MoY29udGV4dCwgcGFyc2VyKSB7XHJcbiAgICB2YXIgdG9rZW5zID0gY29udGV4dC5nZXRUb2tlbnMoKSxcclxuICAgICAgICBpbmRleCA9IDAsXHJcbiAgICAgICAgdG9rZW4gPSB0b2tlbnNbaW5kZXhdO1xyXG5cclxuICAgIHdoaWxlICh0b2tlbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmICh0b2tlbiBpbnN0YW5jZW9mIFBhcnNlYWJsZVRva2VuKSB7XHJcbiAgICAgICAgdmFyIHNpZ25pZmljYW50VG9rZW4gPSB0b2tlbixcclxuICAgICAgICAgICAgdW5jb21tZW50ZWRDb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXHJcbiAgICAgICAgICAgIHVuY29tbWVudGVkQ29udGVudFRva2VucyA9IHRva2Vuc0Zyb21DVW5jb21tZW50ZWRDb250ZW50KHVuY29tbWVudGVkQ29udGVudCwgcGFyc2VyKSxcclxuICAgICAgICAgICAgdW5jb21tZW50ZWRDb250ZW50VG9rZW5zTGVuZ3RoID0gdW5jb21tZW50ZWRDb250ZW50VG9rZW5zLmxlbmd0aDtcclxuXHJcbiAgICAgICAgdXRpbC5zcGxpY2VBcnJheSh0b2tlbnMsIGluZGV4LCAxLCB1bmNvbW1lbnRlZENvbnRlbnRUb2tlbnMpO1xyXG5cclxuICAgICAgICBpbmRleCArPSB1bmNvbW1lbnRlZENvbnRlbnRUb2tlbnNMZW5ndGg7XHJcbiAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbmRleCsrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0b2tlbiA9IHRva2Vuc1tpbmRleF07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5zO1xyXG5cclxuZnVuY3Rpb24gdG9rZW5zRnJvbUNVbmNvbW1lbnRlZENvbnRlbnQodW5jb21tZW50ZWRDb250ZW50LCBwYXJzZXIpIHtcclxuICB2YXIgdG9rZW5zID0gW10sXHJcbiAgICAgIGNvbnRlbnQgPSB1bmNvbW1lbnRlZENvbnRlbnQ7IC8vL1xyXG5cclxuICB3aGlsZSAoY29udGVudCAhPT0gJycpIHtcclxuICAgIHZhciB0b2tlbk9yVG9rZW5zID0gcGFyc2VyLmZyb21Db250ZW50KGNvbnRlbnQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVycm9yVG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuT3JUb2tlbnNMZW5ndGggPSBsZW5ndGhPZlRva2VuT3JUb2tlbnModG9rZW5PclRva2Vucyk7XHJcblxyXG4gICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHRva2VuT3JUb2tlbnNMZW5ndGgpO1xyXG5cclxuICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQodG9rZW5PclRva2Vucyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdG9rZW5zO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsZW5ndGhPZlRva2VuT3JUb2tlbnModG9rZW5PclRva2Vucykge1xyXG4gIHZhciB0b2tlbk9yVG9rZW5zTGVuZ3RoLFxyXG4gICAgICB0b2tlbnMgPSB0b2tlbk9yVG9rZW5zIGluc3RhbmNlb2YgQXJyYXkgPyB0b2tlbk9yVG9rZW5zIDogW3Rva2VuT3JUb2tlbnNdLFxyXG4gICAgICB0b2tlbnNMZW5ndGggPSAwO1xyXG5cclxuICB0b2tlbnMuZm9yRWFjaChmdW5jdGlvbih0b2tlbikge1xyXG4gICAgdG9rZW5zTGVuZ3RoICs9IHRva2VuLmdldExlbmd0aCgpO1xyXG4gIH0pO1xyXG5cclxuICB0b2tlbk9yVG9rZW5zTGVuZ3RoID0gdG9rZW5zTGVuZ3RoO1xyXG5cclxuICByZXR1cm4gdG9rZW5PclRva2Vuc0xlbmd0aDtcclxufVxyXG4iXX0=