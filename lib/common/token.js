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
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return Token.clone(this, startPosition, endPosition, Token);
    }
  }], [{
    key: 'clone',
    value: function clone(token) {
      var startPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var endPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : token.getLength();
      var Class = arguments[3];

      var clonedToken = null;

      if (startPosition !== endPosition) {
        var content = token.getContent(),
            line = token.getLine();

        content = content.substring(startPosition, endPosition);

        clonedToken = Class.fromContentAndLine(content, line);
      }

      return clonedToken;
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
    key: 'fromToken',
    value: function fromToken(token) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Token;

      var content = token.getContent(),
          line = token.getLine();

      token = Class.fromContentAndLine(content, line, Class);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJjb250ZW50IiwibGluZSIsImh0bWwiLCJsZW5ndGgiLCJ0b2tlbiIsInRva2VucyIsImdldFRva2VucyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNsb25lIiwiZ2V0TGVuZ3RoIiwiQ2xhc3MiLCJjbG9uZWRUb2tlbiIsImdldENvbnRlbnQiLCJnZXRMaW5lIiwic3Vic3RyaW5nIiwiZnJvbUNvbnRlbnRBbmRMaW5lIiwiaHRtbEZyb21Db250ZW50Iiwic2FuaXRpc2VIVE1MIiwic2FuaXRpc2VkSFRNTCIsInJlcGxhY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEs7QUFDSixpQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLRixPQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLRixPQUFMLENBQWFHLE1BQXBCLENBRFUsQ0FDa0I7QUFDN0I7OztnQ0FFV0MsSyxFQUFPO0FBQ2pCLFVBQUlDLFNBQVMsS0FBS0osSUFBTCxDQUFVSyxTQUFWLEVBQWI7QUFBQSxVQUNJQyxRQUFRRixPQUFPRyxPQUFQLENBQWUsSUFBZixDQURaOztBQUdBSCxhQUFPSSxNQUFQLENBQWNGLEtBQWQsRUFBcUIsQ0FBckIsRUFBd0JILEtBQXhCO0FBQ0Q7OzswQkFFS00sYSxFQUFlQyxXLEVBQWE7QUFBRSxhQUFPWixNQUFNYSxLQUFOLENBQVksSUFBWixFQUFrQkYsYUFBbEIsRUFBaUNDLFdBQWpDLEVBQThDWixLQUE5QyxDQUFQO0FBQThEOzs7MEJBRXJGSyxLLEVBQWtFO0FBQUEsVUFBM0RNLGFBQTJELHVFQUEzQyxDQUEyQztBQUFBLFVBQXhDQyxXQUF3Qyx1RUFBMUJQLE1BQU1TLFNBQU4sRUFBMEI7QUFBQSxVQUFQQyxLQUFPOztBQUM3RSxVQUFJQyxjQUFjLElBQWxCOztBQUVBLFVBQUlMLGtCQUFrQkMsV0FBdEIsRUFBbUM7QUFDakMsWUFBSVgsVUFBVUksTUFBTVksVUFBTixFQUFkO0FBQUEsWUFDSWYsT0FBT0csTUFBTWEsT0FBTixFQURYOztBQUdBakIsa0JBQVVBLFFBQVFrQixTQUFSLENBQWtCUixhQUFsQixFQUFpQ0MsV0FBakMsQ0FBVjs7QUFFQUksc0JBQWNELE1BQU1LLGtCQUFOLENBQXlCbkIsT0FBekIsRUFBa0NDLElBQWxDLENBQWQ7QUFDRDs7QUFFRCxhQUFPYyxXQUFQO0FBQ0Q7Ozt1Q0FFeUJmLE8sRUFBU0MsSSxFQUFxQjtBQUFBLFVBQWZhLEtBQWUsdUVBQVBmLEtBQU87O0FBQ3RELFVBQUlHLE9BQU9ZLE1BQU1NLGVBQU4sQ0FBc0JwQixPQUF0QixDQUFYO0FBQUEsVUFDSUksUUFBUSxJQUFJVSxLQUFKLENBQVVkLE9BQVYsRUFBbUJDLElBQW5CLEVBQXlCQyxJQUF6QixDQURaOztBQUdBLGFBQU9FLEtBQVA7QUFDRDs7OzhCQUVnQkEsSyxFQUFzQjtBQUFBLFVBQWZVLEtBQWUsdUVBQVBmLEtBQU87O0FBQ3JDLFVBQUlDLFVBQVVJLE1BQU1ZLFVBQU4sRUFBZDtBQUFBLFVBQ0lmLE9BQU9HLE1BQU1hLE9BQU4sRUFEWDs7QUFHQWIsY0FBUVUsTUFBTUssa0JBQU4sQ0FBeUJuQixPQUF6QixFQUFrQ0MsSUFBbEMsRUFBd0NhLEtBQXhDLENBQVI7O0FBRUEsYUFBT1YsS0FBUDtBQUNEOzs7b0NBRXNCSixPLEVBQVM7QUFDOUIsVUFBSUUsT0FBT0YsT0FBWCxDQUQ4QixDQUNWOztBQUVwQkUsYUFBT0gsTUFBTXNCLFlBQU4sQ0FBbUJuQixJQUFuQixDQUFQLENBSDhCLENBR0k7O0FBRWxDLGFBQU9BLElBQVA7QUFDRDs7O2lDQUVtQkEsSSxFQUFNO0FBQ3hCLFVBQUlvQixnQkFBZ0JwQixLQUFLcUIsT0FBTCxDQUFhLEdBQWIsRUFBaUIsT0FBakIsRUFBMEJBLE9BQTFCLENBQWtDLEdBQWxDLEVBQXVDLE1BQXZDLEVBQStDQSxPQUEvQyxDQUF1RCxHQUF2RCxFQUE0RCxNQUE1RCxDQUFwQjs7QUFFQSxhQUFPRCxhQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCMUIsS0FBakIiLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgaHRtbCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB0aGlzLmh0bWwgPSBodG1sO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmh0bWw7XG4gIH1cbiAgXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aDsgLy8vXG4gIH1cblxuICByZXBsYWNlV2l0aCh0b2tlbikge1xuICAgIHZhciB0b2tlbnMgPSB0aGlzLmxpbmUuZ2V0VG9rZW5zKCksXG4gICAgICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2YodGhpcyk7XG5cbiAgICB0b2tlbnMuc3BsaWNlKGluZGV4LCAxLCB0b2tlbik7XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gVG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIFRva2VuKTsgfVxuXG4gIHN0YXRpYyBjbG9uZSh0b2tlbiwgc3RhcnRQb3NpdGlvbiA9IDAsIGVuZFBvc2l0aW9uID0gdG9rZW4uZ2V0TGVuZ3RoKCksIENsYXNzKSB7XG4gICAgdmFyIGNsb25lZFRva2VuID0gbnVsbDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uICE9PSBlbmRQb3NpdGlvbikge1xuICAgICAgdmFyIGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGluZSA9IHRva2VuLmdldExpbmUoKTtcblxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgICAgY2xvbmVkVG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lZFRva2VuO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIENsYXNzID0gVG9rZW4pIHtcbiAgICB2YXIgaHRtbCA9IENsYXNzLmh0bWxGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3MoY29udGVudCwgbGluZSwgaHRtbCk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbVRva2VuKHRva2VuLCBDbGFzcyA9IFRva2VuKSB7XG4gICAgdmFyIGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgIGxpbmUgPSB0b2tlbi5nZXRMaW5lKCk7XG5cbiAgICB0b2tlbiA9IENsYXNzLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyk7XG4gICAgXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGh0bWxGcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgdmFyIGh0bWwgPSBjb250ZW50OyAvLy9cblxuICAgIGh0bWwgPSBUb2tlbi5zYW5pdGlzZUhUTUwoaHRtbCk7ICAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc3RhdGljIHNhbml0aXNlSFRNTChodG1sKSB7XG4gICAgdmFyIHNhbml0aXNlZEhUTUwgPSBodG1sLnJlcGxhY2UoLyYvLCcmYW1wOycpLnJlcGxhY2UoLzwvLCAnJmx0OycpLnJlcGxhY2UoLz4vLCAnJmd0OycpO1xuXG4gICAgcmV0dXJuIHNhbml0aXNlZEhUTUw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbjtcbiJdfQ==