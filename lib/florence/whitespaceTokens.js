'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tokens = require('../common/tokens'),
    EndOfLineToken = require('../common/token/endOfLine'),
    WhitespaceToken = require('../common/token/whitespace');

var WhitespaceTokens = function () {
  function WhitespaceTokens() {
    _classCallCheck(this, WhitespaceTokens);
  }

  _createClass(WhitespaceTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line) {
      Tokens.pass(tokensOrContents, line, WhitespaceToken);

      var endOfLineToken = EndOfLineToken.fromNothing(line);

      tokensOrContents.push(endOfLineToken);
    }
  }]);

  return WhitespaceTokens;
}();

module.exports = WhitespaceTokens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS93aGl0ZXNwYWNlVG9rZW5zLmpzIl0sIm5hbWVzIjpbIlRva2VucyIsInJlcXVpcmUiLCJFbmRPZkxpbmVUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIldoaXRlc3BhY2VUb2tlbnMiLCJ0b2tlbnNPckNvbnRlbnRzIiwibGluZSIsInBhc3MiLCJlbmRPZkxpbmVUb2tlbiIsImZyb21Ob3RoaW5nIiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGtCQUFSLENBQWI7QUFBQSxJQUNJQyxpQkFBaUJELFFBQVEsMkJBQVIsQ0FEckI7QUFBQSxJQUVJRSxrQkFBa0JGLFFBQVEsNEJBQVIsQ0FGdEI7O0lBSU1HLGdCOzs7Ozs7O3lCQUNRQyxnQixFQUFrQkMsSSxFQUFNO0FBQ2xDTixhQUFPTyxJQUFQLENBQVlGLGdCQUFaLEVBQThCQyxJQUE5QixFQUFvQ0gsZUFBcEM7O0FBRUEsVUFBSUssaUJBQWlCTixlQUFlTyxXQUFmLENBQTJCSCxJQUEzQixDQUFyQjs7QUFFQUQsdUJBQWlCSyxJQUFqQixDQUFzQkYsY0FBdEI7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJSLGdCQUFqQiIsImZpbGUiOiJ3aGl0ZXNwYWNlVG9rZW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMnKSxcclxuICAgIEVuZE9mTGluZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL2VuZE9mTGluZScpLFxyXG4gICAgV2hpdGVzcGFjZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3doaXRlc3BhY2UnKTtcclxuXHJcbmNsYXNzIFdoaXRlc3BhY2VUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpIHsgXHJcbiAgICBUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBXaGl0ZXNwYWNlVG9rZW4pO1xyXG4gICAgXHJcbiAgICB2YXIgZW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5mcm9tTm90aGluZyhsaW5lKTtcclxuXHJcbiAgICB0b2tlbnNPckNvbnRlbnRzLnB1c2goZW5kT2ZMaW5lVG9rZW4pO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBXaGl0ZXNwYWNlVG9rZW5zO1xyXG4iXX0=