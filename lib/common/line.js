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
    key: 'tokensFromContent',
    value: function tokensFromContent(content, context, line, rules, NonSignificantTokens) {
      var nonSignificantTokenOrSignificantContents = NonSignificantTokens.pass(content, context, line),
          tokens = SignificantTokens.pass(nonSignificantTokenOrSignificantContents, line, rules);

      return tokens;
    }
  }]);

  return Line;
}();

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGluZS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW5zIiwiTGluZSIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ1bmRlZmluZWQiLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbkhUTUwiLCJnZXRIVE1MIiwib2xkVG9rZW4iLCJuZXdUb2tlbiIsIm9sZFRva2VuSW5kZXgiLCJpbmRleE9mIiwibmV3VG9rZW5zIiwic3BsaWNlQXJyYXkiLCJjb250ZXh0IiwibGluZSIsInJ1bGVzIiwiTm9uU2lnbmlmaWNhbnRUb2tlbnMiLCJub25TaWduaWZpY2FudFRva2VuT3JTaWduaWZpY2FudENvbnRlbnRzIiwicGFzcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFNBQVIsQ0FBWDtBQUFBLElBQ0lDLG9CQUFvQkQsUUFBUSxxQkFBUixDQUR4Qjs7SUFHTUUsSTtBQUNKLGdCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjs7QUFFQSxTQUFLQyxNQUFMLEdBQWNDLFNBQWQ7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0YsT0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBSUUsT0FBTyxLQUFLRixNQUFMLENBQVlHLE1BQVosQ0FBbUIsVUFBU0QsSUFBVCxFQUFlRSxLQUFmLEVBQXNCO0FBQ2xELFlBQUlDLFlBQVlELE1BQU1FLE9BQU4sRUFBaEI7O0FBRUFKLGdCQUFRRyxTQUFSOztBQUVBLGVBQU9ILElBQVA7QUFDRCxPQU5VLEVBTVIsRUFOUSxDQUFYOztBQVFBQSxjQUFRLElBQVI7O0FBRUEsYUFBT0EsSUFBUDtBQUNEOzs7OEJBRVNGLE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7O2lDQUVZTyxRLEVBQVVDLFEsRUFBVTtBQUMvQixVQUFJQyxnQkFBZ0JkLEtBQUtlLE9BQUwsQ0FBYSxLQUFLVixNQUFsQixFQUEwQk8sUUFBMUIsQ0FBcEI7QUFBQSxVQUNJSSxZQUFZLENBQUNILFFBQUQsQ0FEaEI7O0FBR0FiLFdBQUtpQixXQUFMLENBQWlCLEtBQUtaLE1BQXRCLEVBQThCUyxhQUE5QixFQUE2QyxDQUE3QyxFQUFnREUsU0FBaEQ7QUFDRDs7O3NDQUV3QlosTyxFQUFTYyxPLEVBQVNDLEksRUFBTUMsSyxFQUFPQyxvQixFQUFzQjtBQUM1RSxVQUFJQywyQ0FBMkNELHFCQUFxQkUsSUFBckIsQ0FBMEJuQixPQUExQixFQUFtQ2MsT0FBbkMsRUFBNENDLElBQTVDLENBQS9DO0FBQUEsVUFDSWQsU0FBU0gsa0JBQWtCcUIsSUFBbEIsQ0FBdUJELHdDQUF2QixFQUFpRUgsSUFBakUsRUFBdUVDLEtBQXZFLENBRGI7O0FBR0EsYUFBT2YsTUFBUDtBQUNEOzs7Ozs7QUFHSG1CLE9BQU9DLE9BQVAsR0FBaUJ0QixJQUFqQiIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICBTaWduaWZpY2FudFRva2VucyA9IHJlcXVpcmUoJy4vc2lnbmlmaWNhbnRUb2tlbnMnKTtcclxuXHJcbmNsYXNzIExpbmUge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcclxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy50b2tlbnMgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFRva2VucygpIHtcclxuICAgIHJldHVybiB0aGlzLnRva2VucztcclxuICB9XHJcblxyXG4gIGdldEhUTUwoKSB7XHJcbiAgICB2YXIgaHRtbCA9IHRoaXMudG9rZW5zLnJlZHVjZShmdW5jdGlvbihodG1sLCB0b2tlbikge1xyXG4gICAgICB2YXIgdG9rZW5IVE1MID0gdG9rZW4uZ2V0SFRNTCgpO1xyXG4gICAgICBcclxuICAgICAgaHRtbCArPSB0b2tlbkhUTUw7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gaHRtbDtcclxuICAgIH0sICcnKTtcclxuICAgIFxyXG4gICAgaHRtbCArPSAnXFxuJztcclxuICAgIFxyXG4gICAgcmV0dXJuIGh0bWw7XHJcbiAgfVxyXG5cclxuICBzZXRUb2tlbnModG9rZW5zKSB7XHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuICB9XHJcbiAgXHJcbiAgcmVwbGFjZVRva2VuKG9sZFRva2VuLCBuZXdUb2tlbikge1xyXG4gICAgdmFyIG9sZFRva2VuSW5kZXggPSB1dGlsLmluZGV4T2YodGhpcy50b2tlbnMsIG9sZFRva2VuKSxcclxuICAgICAgICBuZXdUb2tlbnMgPSBbbmV3VG9rZW5dO1xyXG5cclxuICAgIHV0aWwuc3BsaWNlQXJyYXkodGhpcy50b2tlbnMsIG9sZFRva2VuSW5kZXgsIDEsIG5ld1Rva2Vucyk7XHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyB0b2tlbnNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCBsaW5lLCBydWxlcywgTm9uU2lnbmlmaWNhbnRUb2tlbnMpIHtcclxuICAgIHZhciBub25TaWduaWZpY2FudFRva2VuT3JTaWduaWZpY2FudENvbnRlbnRzID0gTm9uU2lnbmlmaWNhbnRUb2tlbnMucGFzcyhjb250ZW50LCBjb250ZXh0LCBsaW5lKSxcclxuICAgICAgICB0b2tlbnMgPSBTaWduaWZpY2FudFRva2Vucy5wYXNzKG5vblNpZ25pZmljYW50VG9rZW5PclNpZ25pZmljYW50Q29udGVudHMsIGxpbmUsIHJ1bGVzKTtcclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xyXG4iXX0=