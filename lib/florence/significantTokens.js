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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9zaWduaWZpY2FudFRva2Vucy5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIkVycm9yVG9rZW4iLCJQYXJzZWFibGVUb2tlbiIsIlNpZ25pZmljYW50VG9rZW5zIiwiY29udGV4dCIsInBhcnNlciIsInRva2VucyIsImdldFRva2VucyIsImluZGV4IiwidG9rZW4iLCJ1bmRlZmluZWQiLCJzaWduaWZpY2FudFRva2VuIiwidW5jb21tZW50ZWRDb250ZW50IiwiZ2V0Q29udGVudCIsInVuY29tbWVudGVkQ29udGVudFRva2VucyIsInRva2Vuc0Zyb21DVW5jb21tZW50ZWRDb250ZW50IiwidW5jb21tZW50ZWRDb250ZW50VG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwic3BsaWNlQXJyYXkiLCJtb2R1bGUiLCJleHBvcnRzIiwiY29udGVudCIsInRva2VuT3JUb2tlbnMiLCJmcm9tQ29udGVudCIsInRva2VuT3JUb2tlbnNMZW5ndGgiLCJsZW5ndGhPZlRva2VuT3JUb2tlbnMiLCJzdWJzdHJpbmciLCJjb25jYXQiLCJBcnJheSIsInRva2Vuc0xlbmd0aCIsImZvckVhY2giLCJnZXRMZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFlBQVIsQ0FBWDtBQUFBLElBQ0lDLGFBQWFELFFBQVEsdUJBQVIsQ0FEakI7QUFBQSxJQUVJRSxpQkFBaUJGLFFBQVEsMkJBQVIsQ0FGckI7O0lBSU1HLGlCOzs7Ozs7O3lCQUNRQyxPLEVBQVNDLE0sRUFBUTtBQUMzQixVQUFJQyxTQUFTRixRQUFRRyxTQUFSLEVBQWI7QUFBQSxVQUNJQyxRQUFRLENBRFo7QUFBQSxVQUVJQyxRQUFRSCxPQUFPRSxLQUFQLENBRlo7O0FBSUEsYUFBT0MsVUFBVUMsU0FBakIsRUFBNEI7QUFDMUIsWUFBSUQsaUJBQWlCUCxjQUFyQixFQUFxQztBQUNuQyxjQUFJUyxtQkFBbUJGLEtBQXZCO0FBQUEsY0FDSUcscUJBQXFCRCxpQkFBaUJFLFVBQWpCLEVBRHpCO0FBQUEsY0FFSUMsMkJBQTJCQyw4QkFBOEJILGtCQUE5QixFQUFrRFAsTUFBbEQsQ0FGL0I7QUFBQSxjQUdJVyxpQ0FBaUNGLHlCQUF5QkcsTUFIOUQ7O0FBS0FsQixlQUFLbUIsV0FBTCxDQUFpQlosTUFBakIsRUFBeUJFLEtBQXpCLEVBQWdDLENBQWhDLEVBQW1DTSx3QkFBbkM7O0FBRUFOLG1CQUFTUSw4QkFBVDtBQUNGLFNBVEEsTUFTTTtBQUNKUjtBQUNEOztBQUVEQyxnQkFBUUgsT0FBT0UsS0FBUCxDQUFSO0FBQ0Q7QUFDRjs7Ozs7O0FBR0hXLE9BQU9DLE9BQVAsR0FBaUJqQixpQkFBakI7O0FBRUEsU0FBU1ksNkJBQVQsQ0FBdUNILGtCQUF2QyxFQUEyRFAsTUFBM0QsRUFBbUU7QUFDakUsTUFBSUMsU0FBUyxFQUFiO0FBQUEsTUFDSWUsVUFBVVQsa0JBRGQsQ0FEaUUsQ0FFL0I7O0FBRWxDLFNBQU9TLFlBQVksRUFBbkIsRUFBdUI7QUFDckIsUUFBSUMsZ0JBQWdCakIsT0FBT2tCLFdBQVAsQ0FBbUJGLE9BQW5CLEtBQ0FwQixXQUFXc0IsV0FBWCxDQUF1QkYsT0FBdkIsQ0FEcEI7QUFBQSxRQUVvQkcsc0JBQXNCQyxzQkFBc0JILGFBQXRCLENBRjFDOztBQUlBRCxjQUFVQSxRQUFRSyxTQUFSLENBQWtCRixtQkFBbEIsQ0FBVjs7QUFFQWxCLGFBQVNBLE9BQU9xQixNQUFQLENBQWNMLGFBQWQsQ0FBVDtBQUNEOztBQUVELFNBQU9oQixNQUFQO0FBQ0Q7O0FBRUQsU0FBU21CLHFCQUFULENBQStCSCxhQUEvQixFQUE4QztBQUM1QyxNQUFJRSxtQkFBSjtBQUFBLE1BQ0lsQixTQUFTZ0IseUJBQXlCTSxLQUF6QixHQUFpQ04sYUFBakMsR0FBaUQsQ0FBQ0EsYUFBRCxDQUQ5RDtBQUFBLE1BRUlPLGVBQWUsQ0FGbkI7O0FBSUF2QixTQUFPd0IsT0FBUCxDQUFlLFVBQVNyQixLQUFULEVBQWdCO0FBQzdCb0Isb0JBQWdCcEIsTUFBTXNCLFNBQU4sRUFBaEI7QUFDRCxHQUZEOztBQUlBUCx3QkFBc0JLLFlBQXRCOztBQUVBLFNBQU9MLG1CQUFQO0FBQ0QiLCJmaWxlIjoic2lnbmlmaWNhbnRUb2tlbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKSxcclxuICAgIEVycm9yVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vZXJyb3InKSxcclxuICAgIFBhcnNlYWJsZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3BhcnNlYWJsZScpO1xyXG5cclxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKGNvbnRleHQsIHBhcnNlcikge1xyXG4gICAgdmFyIHRva2VucyA9IGNvbnRleHQuZ2V0VG9rZW5zKCksXHJcbiAgICAgICAgaW5kZXggPSAwLFxyXG4gICAgICAgIHRva2VuID0gdG9rZW5zW2luZGV4XTtcclxuXHJcbiAgICB3aGlsZSAodG9rZW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAodG9rZW4gaW5zdGFuY2VvZiBQYXJzZWFibGVUb2tlbikge1xyXG4gICAgICAgIHZhciBzaWduaWZpY2FudFRva2VuID0gdG9rZW4sXHJcbiAgICAgICAgICAgIHVuY29tbWVudGVkQ29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgICB1bmNvbW1lbnRlZENvbnRlbnRUb2tlbnMgPSB0b2tlbnNGcm9tQ1VuY29tbWVudGVkQ29udGVudCh1bmNvbW1lbnRlZENvbnRlbnQsIHBhcnNlciksXHJcbiAgICAgICAgICAgIHVuY29tbWVudGVkQ29udGVudFRva2Vuc0xlbmd0aCA9IHVuY29tbWVudGVkQ29udGVudFRva2Vucy5sZW5ndGg7XHJcblxyXG4gICAgICAgIHV0aWwuc3BsaWNlQXJyYXkodG9rZW5zLCBpbmRleCwgMSwgdW5jb21tZW50ZWRDb250ZW50VG9rZW5zKTtcclxuXHJcbiAgICAgICAgaW5kZXggKz0gdW5jb21tZW50ZWRDb250ZW50VG9rZW5zTGVuZ3RoO1xyXG4gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5kZXgrKztcclxuICAgICAgfVxyXG5cclxuICAgICAgdG9rZW4gPSB0b2tlbnNbaW5kZXhdO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VucztcclxuXHJcbmZ1bmN0aW9uIHRva2Vuc0Zyb21DVW5jb21tZW50ZWRDb250ZW50KHVuY29tbWVudGVkQ29udGVudCwgcGFyc2VyKSB7XHJcbiAgdmFyIHRva2VucyA9IFtdLFxyXG4gICAgICBjb250ZW50ID0gdW5jb21tZW50ZWRDb250ZW50OyAvLy9cclxuXHJcbiAgd2hpbGUgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICB2YXIgdG9rZW5PclRva2VucyA9IHBhcnNlci5mcm9tQ29udGVudChjb250ZW50KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFcnJvclRva2VuLmZyb21Db250ZW50KGNvbnRlbnQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbk9yVG9rZW5zTGVuZ3RoID0gbGVuZ3RoT2ZUb2tlbk9yVG9rZW5zKHRva2VuT3JUb2tlbnMpO1xyXG5cclxuICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyh0b2tlbk9yVG9rZW5zTGVuZ3RoKTtcclxuXHJcbiAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KHRva2VuT3JUb2tlbnMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRva2VucztcclxufVxyXG5cclxuZnVuY3Rpb24gbGVuZ3RoT2ZUb2tlbk9yVG9rZW5zKHRva2VuT3JUb2tlbnMpIHtcclxuICB2YXIgdG9rZW5PclRva2Vuc0xlbmd0aCxcclxuICAgICAgdG9rZW5zID0gdG9rZW5PclRva2VucyBpbnN0YW5jZW9mIEFycmF5ID8gdG9rZW5PclRva2VucyA6IFt0b2tlbk9yVG9rZW5zXSxcclxuICAgICAgdG9rZW5zTGVuZ3RoID0gMDtcclxuXHJcbiAgdG9rZW5zLmZvckVhY2goZnVuY3Rpb24odG9rZW4pIHtcclxuICAgIHRva2Vuc0xlbmd0aCArPSB0b2tlbi5nZXRMZW5ndGgoKTtcclxuICB9KTtcclxuXHJcbiAgdG9rZW5PclRva2Vuc0xlbmd0aCA9IHRva2Vuc0xlbmd0aDtcclxuXHJcbiAgcmV0dXJuIHRva2VuT3JUb2tlbnNMZW5ndGg7XHJcbn1cclxuIl19