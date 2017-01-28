'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Token = function () {
  function Token(content, line, html) {
    _classCallCheck(this, Token);

    this.content = content;
    this.line = line;
    this.html = html;
  }

  _createClass(Token, [{
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.line;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      return this.html;
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.content.length; ///
    }
  }, {
    key: 'replaceWith',
    value: function replaceWith(token) {
      var tokens = this.line.getTokens(),
          index = tokens.indexOf(this);

      tokens.splice(index, 1, token);
    }
  }, {
    key: 'toPosition',
    value: function toPosition(position) {
      return Token.toPosition(this, position);
    }
  }, {
    key: 'fromPosition',
    value: function fromPosition(position) {
      return Token.fromPosition(this, position);
    }
  }], [{
    key: 'toPosition',
    value: function toPosition(token, position) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Token;

      var tokenTrimmedToPosition = null,
          tokenLength = token.getLength();

      if (position !== tokenLength) {
        var content = token.getContent(),
            line = token.getLine();

        content = content.substring(position);

        tokenTrimmedToPosition = Class.fromContentAndLine(content, line);
      }

      return tokenTrimmedToPosition;
    }
  }, {
    key: 'fromPosition',
    value: function fromPosition(token, position) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Token;

      var tokenTrimmedFromPosition = null;

      if (position !== 0) {
        var content = token.getContent(),
            line = token.getLine();

        content = content.substring(0, position);

        tokenTrimmedFromPosition = Class.fromContentAndLine(content, line);
      }

      return tokenTrimmedFromPosition;
    }
  }, {
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Token;

      var html = Class.htmlFromContent(content),
          token = new Class(content, line, html);

      return token;
    }
  }, {
    key: 'htmlFromContent',
    value: function htmlFromContent(content) {
      var html = content; ///

      html = Token.sanitiseHTML(html); ///

      return html;
    }
  }, {
    key: 'sanitiseHTML',
    value: function sanitiseHTML(html) {
      var sanitisedHTML = html.replace(/&/, '&amp;').replace(/</, '&lt;').replace(/>/, '&gt;');

      return sanitisedHTML;
    }
  }]);

  return Token;
}();

module.exports = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJjb250ZW50IiwibGluZSIsImh0bWwiLCJsZW5ndGgiLCJ0b2tlbiIsInRva2VucyIsImdldFRva2VucyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInBvc2l0aW9uIiwidG9Qb3NpdGlvbiIsImZyb21Qb3NpdGlvbiIsIkNsYXNzIiwidG9rZW5UcmltbWVkVG9Qb3NpdGlvbiIsInRva2VuTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwiZ2V0Q29udGVudCIsImdldExpbmUiLCJzdWJzdHJpbmciLCJmcm9tQ29udGVudEFuZExpbmUiLCJ0b2tlblRyaW1tZWRGcm9tUG9zaXRpb24iLCJodG1sRnJvbUNvbnRlbnQiLCJzYW5pdGlzZUhUTUwiLCJzYW5pdGlzZWRIVE1MIiwicmVwbGFjZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSztBQUNKLGlCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQkMsSUFBM0IsRUFBaUM7QUFBQTs7QUFDL0IsU0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtGLE9BQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtGLE9BQUwsQ0FBYUcsTUFBcEIsQ0FEVSxDQUNrQjtBQUM3Qjs7O2dDQUVXQyxLLEVBQU87QUFDakIsVUFBSUMsU0FBUyxLQUFLSixJQUFMLENBQVVLLFNBQVYsRUFBYjtBQUFBLFVBQ0lDLFFBQVFGLE9BQU9HLE9BQVAsQ0FBZSxJQUFmLENBRFo7O0FBR0FILGFBQU9JLE1BQVAsQ0FBY0YsS0FBZCxFQUFxQixDQUFyQixFQUF3QkgsS0FBeEI7QUFDRDs7OytCQUVVTSxRLEVBQVU7QUFBRSxhQUFPWCxNQUFNWSxVQUFOLENBQWlCLElBQWpCLEVBQXVCRCxRQUF2QixDQUFQO0FBQXlDOzs7aUNBRW5EQSxRLEVBQVU7QUFBRSxhQUFPWCxNQUFNYSxZQUFOLENBQW1CLElBQW5CLEVBQXlCRixRQUF6QixDQUFQO0FBQTJDOzs7K0JBRWxETixLLEVBQU9NLFEsRUFBeUI7QUFBQSxVQUFmRyxLQUFlLHVFQUFQZCxLQUFPOztBQUNoRCxVQUFJZSx5QkFBeUIsSUFBN0I7QUFBQSxVQUNJQyxjQUFjWCxNQUFNWSxTQUFOLEVBRGxCOztBQUdBLFVBQUlOLGFBQWFLLFdBQWpCLEVBQThCO0FBQzVCLFlBQUlmLFVBQVVJLE1BQU1hLFVBQU4sRUFBZDtBQUFBLFlBQ0loQixPQUFPRyxNQUFNYyxPQUFOLEVBRFg7O0FBR0FsQixrQkFBVUEsUUFBUW1CLFNBQVIsQ0FBa0JULFFBQWxCLENBQVY7O0FBRUFJLGlDQUF5QkQsTUFBTU8sa0JBQU4sQ0FBeUJwQixPQUF6QixFQUFrQ0MsSUFBbEMsQ0FBekI7QUFDRDs7QUFFRCxhQUFPYSxzQkFBUDtBQUNEOzs7aUNBRW1CVixLLEVBQU9NLFEsRUFBeUI7QUFBQSxVQUFmRyxLQUFlLHVFQUFQZCxLQUFPOztBQUNsRCxVQUFJc0IsMkJBQTJCLElBQS9COztBQUVBLFVBQUlYLGFBQWEsQ0FBakIsRUFBb0I7QUFDbEIsWUFBSVYsVUFBVUksTUFBTWEsVUFBTixFQUFkO0FBQUEsWUFDSWhCLE9BQU9HLE1BQU1jLE9BQU4sRUFEWDs7QUFHQWxCLGtCQUFVQSxRQUFRbUIsU0FBUixDQUFrQixDQUFsQixFQUFxQlQsUUFBckIsQ0FBVjs7QUFFQVcsbUNBQTJCUixNQUFNTyxrQkFBTixDQUF5QnBCLE9BQXpCLEVBQWtDQyxJQUFsQyxDQUEzQjtBQUNEOztBQUVELGFBQU9vQix3QkFBUDtBQUNEOzs7dUNBRXlCckIsTyxFQUFTQyxJLEVBQXFCO0FBQUEsVUFBZlksS0FBZSx1RUFBUGQsS0FBTzs7QUFDdEQsVUFBSUcsT0FBT1csTUFBTVMsZUFBTixDQUFzQnRCLE9BQXRCLENBQVg7QUFBQSxVQUNJSSxRQUFRLElBQUlTLEtBQUosQ0FBVWIsT0FBVixFQUFtQkMsSUFBbkIsRUFBeUJDLElBQXpCLENBRFo7O0FBR0EsYUFBT0UsS0FBUDtBQUNEOzs7b0NBRXNCSixPLEVBQVM7QUFDOUIsVUFBSUUsT0FBT0YsT0FBWCxDQUQ4QixDQUNWOztBQUVwQkUsYUFBT0gsTUFBTXdCLFlBQU4sQ0FBbUJyQixJQUFuQixDQUFQLENBSDhCLENBR0k7O0FBRWxDLGFBQU9BLElBQVA7QUFDRDs7O2lDQUVtQkEsSSxFQUFNO0FBQ3hCLFVBQUlzQixnQkFBZ0J0QixLQUFLdUIsT0FBTCxDQUFhLEdBQWIsRUFBaUIsT0FBakIsRUFBMEJBLE9BQTFCLENBQWtDLEdBQWxDLEVBQXVDLE1BQXZDLEVBQStDQSxPQUEvQyxDQUF1RCxHQUF2RCxFQUE0RCxNQUE1RCxDQUFwQjs7QUFFQSxhQUFPRCxhQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCNUIsS0FBakIiLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgaHRtbCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB0aGlzLmh0bWwgPSBodG1sO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmh0bWw7XG4gIH1cbiAgXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aDsgLy8vXG4gIH1cblxuICByZXBsYWNlV2l0aCh0b2tlbikge1xuICAgIHZhciB0b2tlbnMgPSB0aGlzLmxpbmUuZ2V0VG9rZW5zKCksXG4gICAgICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2YodGhpcyk7XG5cbiAgICB0b2tlbnMuc3BsaWNlKGluZGV4LCAxLCB0b2tlbik7XG4gIH1cblxuICB0b1Bvc2l0aW9uKHBvc2l0aW9uKSB7IHJldHVybiBUb2tlbi50b1Bvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSB9XG5cbiAgZnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7IHJldHVybiBUb2tlbi5mcm9tUG9zaXRpb24odGhpcywgcG9zaXRpb24pIH1cblxuICBzdGF0aWMgdG9Qb3NpdGlvbih0b2tlbiwgcG9zaXRpb24sIENsYXNzID0gVG9rZW4pIHtcbiAgICB2YXIgdG9rZW5UcmltbWVkVG9Qb3NpdGlvbiA9IG51bGwsXG4gICAgICAgIHRva2VuTGVuZ3RoID0gdG9rZW4uZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAocG9zaXRpb24gIT09IHRva2VuTGVuZ3RoKSB7XG4gICAgICB2YXIgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsaW5lID0gdG9rZW4uZ2V0TGluZSgpO1xuXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcocG9zaXRpb24pO1xuXG4gICAgICB0b2tlblRyaW1tZWRUb1Bvc2l0aW9uID0gQ2xhc3MuZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlblRyaW1tZWRUb1Bvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qb3NpdGlvbih0b2tlbiwgcG9zaXRpb24sIENsYXNzID0gVG9rZW4pIHtcbiAgICB2YXIgdG9rZW5UcmltbWVkRnJvbVBvc2l0aW9uID0gbnVsbDtcblxuICAgIGlmIChwb3NpdGlvbiAhPT0gMCkge1xuICAgICAgdmFyIGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGluZSA9IHRva2VuLmdldExpbmUoKTtcblxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIHBvc2l0aW9uKTtcblxuICAgICAgdG9rZW5UcmltbWVkRnJvbVBvc2l0aW9uID0gQ2xhc3MuZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlblRyaW1tZWRGcm9tUG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIENsYXNzID0gVG9rZW4pIHtcbiAgICB2YXIgaHRtbCA9IENsYXNzLmh0bWxGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3MoY29udGVudCwgbGluZSwgaHRtbCk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgaHRtbEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICB2YXIgaHRtbCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgaHRtbCA9IFRva2VuLnNhbml0aXNlSFRNTChodG1sKTsgIC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgc2FuaXRpc2VIVE1MKGh0bWwpIHtcbiAgICB2YXIgc2FuaXRpc2VkSFRNTCA9IGh0bWwucmVwbGFjZSgvJi8sJyZhbXA7JykucmVwbGFjZSgvPC8sICcmbHQ7JykucmVwbGFjZSgvPi8sICcmZ3Q7Jyk7XG5cbiAgICByZXR1cm4gc2FuaXRpc2VkSFRNTDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRva2VuO1xuIl19