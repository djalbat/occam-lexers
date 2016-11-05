'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    SignificantTokens = require('./significantTokens');

var Line = function () {
  function Line(content) {
    _classCallCheck(this, Line);

    this.content = content;

    this.tokens = undefined;
  }

  _createClass(Line, [{
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getTokens',
    value: function getTokens() {
      return this.tokens;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var html = this.tokens.reduce(function (html, token) {
        var tokenHTML = token.getHTML();

        html += tokenHTML;

        return html;
      }, '');

      html += '\n';

      return html;
    }
  }, {
    key: 'setTokens',
    value: function setTokens(tokens) {
      this.tokens = tokens;
    }
  }, {
    key: 'replaceToken',
    value: function replaceToken(oldToken, newToken) {
      var oldTokenIndex = util.indexOf(this.tokens, oldToken),
          newTokens = [newToken];

      util.spliceArray(this.tokens, oldTokenIndex, 1, newTokens);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content, context, rules, Line, NonSignificantTokens) {
      var line = new Line(content),
          nonSignificantTokenOrSignificantContents = NonSignificantTokens.pass(content, context, line),
          tokens = SignificantTokens.pass(nonSignificantTokenOrSignificantContents, line, rules);

      line.setTokens(tokens);

      return line;
    }
  }]);

  return Line;
}();

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW5zIiwiTGluZSIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ1bmRlZmluZWQiLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbkhUTUwiLCJnZXRIVE1MIiwib2xkVG9rZW4iLCJuZXdUb2tlbiIsIm9sZFRva2VuSW5kZXgiLCJpbmRleE9mIiwibmV3VG9rZW5zIiwic3BsaWNlQXJyYXkiLCJjb250ZXh0IiwicnVsZXMiLCJOb25TaWduaWZpY2FudFRva2VucyIsImxpbmUiLCJub25TaWduaWZpY2FudFRva2VuT3JTaWduaWZpY2FudENvbnRlbnRzIiwicGFzcyIsInNldFRva2VucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFNBQVIsQ0FBWDtBQUFBLElBQ0lDLG9CQUFvQkQsUUFBUSxxQkFBUixDQUR4Qjs7SUFHTUUsSTtBQUNKLGdCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjs7QUFFQSxTQUFLQyxNQUFMLEdBQWNDLFNBQWQ7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0YsT0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBSUUsT0FBTyxLQUFLRixNQUFMLENBQVlHLE1BQVosQ0FBbUIsVUFBU0QsSUFBVCxFQUFlRSxLQUFmLEVBQXNCO0FBQ2xELFlBQUlDLFlBQVlELE1BQU1FLE9BQU4sRUFBaEI7O0FBRUFKLGdCQUFRRyxTQUFSOztBQUVBLGVBQU9ILElBQVA7QUFDRCxPQU5VLEVBTVIsRUFOUSxDQUFYOztBQVFBQSxjQUFRLElBQVI7O0FBRUEsYUFBT0EsSUFBUDtBQUNEOzs7OEJBRVNGLE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7O2lDQUVZTyxRLEVBQVVDLFEsRUFBVTtBQUMvQixVQUFJQyxnQkFBZ0JkLEtBQUtlLE9BQUwsQ0FBYSxLQUFLVixNQUFsQixFQUEwQk8sUUFBMUIsQ0FBcEI7QUFBQSxVQUNJSSxZQUFZLENBQUNILFFBQUQsQ0FEaEI7O0FBR0FiLFdBQUtpQixXQUFMLENBQWlCLEtBQUtaLE1BQXRCLEVBQThCUyxhQUE5QixFQUE2QyxDQUE3QyxFQUFnREUsU0FBaEQ7QUFDRDs7O2dDQUVrQlosTyxFQUFTYyxPLEVBQVNDLEssRUFBT2hCLEksRUFBTWlCLG9CLEVBQXNCO0FBQ3RFLFVBQUlDLE9BQU8sSUFBSWxCLElBQUosQ0FBU0MsT0FBVCxDQUFYO0FBQUEsVUFDSWtCLDJDQUEyQ0YscUJBQXFCRyxJQUFyQixDQUEwQm5CLE9BQTFCLEVBQW1DYyxPQUFuQyxFQUE0Q0csSUFBNUMsQ0FEL0M7QUFBQSxVQUVJaEIsU0FBU0gsa0JBQWtCcUIsSUFBbEIsQ0FBdUJELHdDQUF2QixFQUFpRUQsSUFBakUsRUFBdUVGLEtBQXZFLENBRmI7O0FBSUFFLFdBQUtHLFNBQUwsQ0FBZW5CLE1BQWY7O0FBRUEsYUFBT2dCLElBQVA7QUFDRDs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUJ2QixJQUFqQiIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICBTaWduaWZpY2FudFRva2VucyA9IHJlcXVpcmUoJy4vc2lnbmlmaWNhbnRUb2tlbnMnKTtcclxuXHJcbmNsYXNzIExpbmUge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcclxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy50b2tlbnMgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFRva2VucygpIHtcclxuICAgIHJldHVybiB0aGlzLnRva2VucztcclxuICB9XHJcblxyXG4gIGdldEhUTUwoKSB7XHJcbiAgICB2YXIgaHRtbCA9IHRoaXMudG9rZW5zLnJlZHVjZShmdW5jdGlvbihodG1sLCB0b2tlbikge1xyXG4gICAgICB2YXIgdG9rZW5IVE1MID0gdG9rZW4uZ2V0SFRNTCgpO1xyXG4gICAgICBcclxuICAgICAgaHRtbCArPSB0b2tlbkhUTUw7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gaHRtbDtcclxuICAgIH0sICcnKTtcclxuICAgIFxyXG4gICAgaHRtbCArPSAnXFxuJztcclxuICAgIFxyXG4gICAgcmV0dXJuIGh0bWw7XHJcbiAgfVxyXG5cclxuICBzZXRUb2tlbnModG9rZW5zKSB7XHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuICB9XHJcbiAgXHJcbiAgcmVwbGFjZVRva2VuKG9sZFRva2VuLCBuZXdUb2tlbikge1xyXG4gICAgdmFyIG9sZFRva2VuSW5kZXggPSB1dGlsLmluZGV4T2YodGhpcy50b2tlbnMsIG9sZFRva2VuKSxcclxuICAgICAgICBuZXdUb2tlbnMgPSBbbmV3VG9rZW5dO1xyXG5cclxuICAgIHV0aWwuc3BsaWNlQXJyYXkodGhpcy50b2tlbnMsIG9sZFRva2VuSW5kZXgsIDEsIG5ld1Rva2Vucyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgcnVsZXMsIExpbmUsIE5vblNpZ25pZmljYW50VG9rZW5zKSB7XHJcbiAgICB2YXIgbGluZSA9IG5ldyBMaW5lKGNvbnRlbnQpLFxyXG4gICAgICAgIG5vblNpZ25pZmljYW50VG9rZW5PclNpZ25pZmljYW50Q29udGVudHMgPSBOb25TaWduaWZpY2FudFRva2Vucy5wYXNzKGNvbnRlbnQsIGNvbnRleHQsIGxpbmUpLFxyXG4gICAgICAgIHRva2VucyA9IFNpZ25pZmljYW50VG9rZW5zLnBhc3Mobm9uU2lnbmlmaWNhbnRUb2tlbk9yU2lnbmlmaWNhbnRDb250ZW50cywgbGluZSwgcnVsZXMpO1xyXG5cclxuICAgIGxpbmUuc2V0VG9rZW5zKHRva2Vucyk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XHJcbiJdfQ==