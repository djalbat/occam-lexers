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

        clonedToken = Class.fromContentAndLine(content, line, Class);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJjb250ZW50IiwibGluZSIsImh0bWwiLCJsZW5ndGgiLCJ0b2tlbiIsInRva2VucyIsImdldFRva2VucyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNsb25lIiwiZ2V0TGVuZ3RoIiwiQ2xhc3MiLCJjbG9uZWRUb2tlbiIsImdldENvbnRlbnQiLCJnZXRMaW5lIiwic3Vic3RyaW5nIiwiZnJvbUNvbnRlbnRBbmRMaW5lIiwiaHRtbEZyb21Db250ZW50Iiwic2FuaXRpc2VIVE1MIiwic2FuaXRpc2VkSFRNTCIsInJlcGxhY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEs7QUFDSixpQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLRixPQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLRixPQUFMLENBQWFHLE1BQXBCLENBRFUsQ0FDa0I7QUFDN0I7OztnQ0FFV0MsSyxFQUFPO0FBQ2pCLFVBQUlDLFNBQVMsS0FBS0osSUFBTCxDQUFVSyxTQUFWLEVBQWI7QUFBQSxVQUNJQyxRQUFRRixPQUFPRyxPQUFQLENBQWUsSUFBZixDQURaOztBQUdBSCxhQUFPSSxNQUFQLENBQWNGLEtBQWQsRUFBcUIsQ0FBckIsRUFBd0JILEtBQXhCO0FBQ0Q7OzswQkFFS00sYSxFQUFlQyxXLEVBQWE7QUFBRSxhQUFPWixNQUFNYSxLQUFOLENBQVksSUFBWixFQUFrQkYsYUFBbEIsRUFBaUNDLFdBQWpDLEVBQThDWixLQUE5QyxDQUFQO0FBQThEOzs7MEJBRXJGSyxLLEVBQWtFO0FBQUEsVUFBM0RNLGFBQTJELHVFQUEzQyxDQUEyQztBQUFBLFVBQXhDQyxXQUF3Qyx1RUFBMUJQLE1BQU1TLFNBQU4sRUFBMEI7QUFBQSxVQUFQQyxLQUFPOztBQUM3RSxVQUFJQyxjQUFjLElBQWxCOztBQUVBLFVBQUlMLGtCQUFrQkMsV0FBdEIsRUFBbUM7QUFDakMsWUFBSVgsVUFBVUksTUFBTVksVUFBTixFQUFkO0FBQUEsWUFDSWYsT0FBT0csTUFBTWEsT0FBTixFQURYOztBQUdBakIsa0JBQVVBLFFBQVFrQixTQUFSLENBQWtCUixhQUFsQixFQUFpQ0MsV0FBakMsQ0FBVjs7QUFFQUksc0JBQWNELE1BQU1LLGtCQUFOLENBQXlCbkIsT0FBekIsRUFBa0NDLElBQWxDLEVBQXdDYSxLQUF4QyxDQUFkO0FBQ0Q7O0FBRUQsYUFBT0MsV0FBUDtBQUNEOzs7dUNBRXlCZixPLEVBQVNDLEksRUFBcUI7QUFBQSxVQUFmYSxLQUFlLHVFQUFQZixLQUFPOztBQUN0RCxVQUFJRyxPQUFPWSxNQUFNTSxlQUFOLENBQXNCcEIsT0FBdEIsQ0FBWDtBQUFBLFVBQ0lJLFFBQVEsSUFBSVUsS0FBSixDQUFVZCxPQUFWLEVBQW1CQyxJQUFuQixFQUF5QkMsSUFBekIsQ0FEWjs7QUFHQSxhQUFPRSxLQUFQO0FBQ0Q7Ozs4QkFFZ0JBLEssRUFBc0I7QUFBQSxVQUFmVSxLQUFlLHVFQUFQZixLQUFPOztBQUNyQyxVQUFJQyxVQUFVSSxNQUFNWSxVQUFOLEVBQWQ7QUFBQSxVQUNJZixPQUFPRyxNQUFNYSxPQUFOLEVBRFg7O0FBR0FiLGNBQVFVLE1BQU1LLGtCQUFOLENBQXlCbkIsT0FBekIsRUFBa0NDLElBQWxDLEVBQXdDYSxLQUF4QyxDQUFSOztBQUVBLGFBQU9WLEtBQVA7QUFDRDs7O29DQUVzQkosTyxFQUFTO0FBQzlCLFVBQUlFLE9BQU9GLE9BQVgsQ0FEOEIsQ0FDVjs7QUFFcEJFLGFBQU9ILE1BQU1zQixZQUFOLENBQW1CbkIsSUFBbkIsQ0FBUCxDQUg4QixDQUdJOztBQUVsQyxhQUFPQSxJQUFQO0FBQ0Q7OztpQ0FFbUJBLEksRUFBTTtBQUN4QixVQUFJb0IsZ0JBQWdCcEIsS0FBS3FCLE9BQUwsQ0FBYSxHQUFiLEVBQWlCLE9BQWpCLEVBQTBCQSxPQUExQixDQUFrQyxHQUFsQyxFQUF1QyxNQUF2QyxFQUErQ0EsT0FBL0MsQ0FBdUQsR0FBdkQsRUFBNEQsTUFBNUQsQ0FBcEI7O0FBRUEsYUFBT0QsYUFBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQjFCLEtBQWpCIiwiZmlsZSI6InRva2VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUsIGh0bWwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgdGhpcy5odG1sID0gaHRtbDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5odG1sO1xuICB9XG4gIFxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7IC8vL1xuICB9XG5cbiAgcmVwbGFjZVdpdGgodG9rZW4pIHtcbiAgICB2YXIgdG9rZW5zID0gdGhpcy5saW5lLmdldFRva2VucygpLFxuICAgICAgICBpbmRleCA9IHRva2Vucy5pbmRleE9mKHRoaXMpO1xuXG4gICAgdG9rZW5zLnNwbGljZShpbmRleCwgMSwgdG9rZW4pO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBUb2tlbik7IH1cblxuICBzdGF0aWMgY2xvbmUodG9rZW4sIHN0YXJ0UG9zaXRpb24gPSAwLCBlbmRQb3NpdGlvbiA9IHRva2VuLmdldExlbmd0aCgpLCBDbGFzcykge1xuICAgIHZhciBjbG9uZWRUb2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIHZhciBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxpbmUgPSB0b2tlbi5nZXRMaW5lKCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7XG5cbiAgICAgIGNsb25lZFRva2VuID0gQ2xhc3MuZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIENsYXNzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVkVG9rZW47XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MgPSBUb2tlbikge1xuICAgIHZhciBodG1sID0gQ2xhc3MuaHRtbEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCBodG1sKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9rZW4odG9rZW4sIENsYXNzID0gVG9rZW4pIHtcbiAgICB2YXIgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgbGluZSA9IHRva2VuLmdldExpbmUoKTtcblxuICAgIHRva2VuID0gQ2xhc3MuZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIENsYXNzKTtcbiAgICBcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgaHRtbEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICB2YXIgaHRtbCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgaHRtbCA9IFRva2VuLnNhbml0aXNlSFRNTChodG1sKTsgIC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgc2FuaXRpc2VIVE1MKGh0bWwpIHtcbiAgICB2YXIgc2FuaXRpc2VkSFRNTCA9IGh0bWwucmVwbGFjZSgvJi8sJyZhbXA7JykucmVwbGFjZSgvPC8sICcmbHQ7JykucmVwbGFjZSgvPi8sICcmZ3Q7Jyk7XG5cbiAgICByZXR1cm4gc2FuaXRpc2VkSFRNTDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRva2VuO1xuIl19