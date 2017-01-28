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

    // static trimmedToPosition(token, position) {
    //   var tokenTrimmedToPosition = null,
    //       tokenLength = token.getLength();
    //
    //   if (position !== tokenLength) {
    //     var content = token.getContent(),
    //         line = token.getLine();
    //
    //     content = content.substring(position);
    //
    //     tokenTrimmedToPosition = Token.fromContentAndLine(content, line);
    //   }
    //
    //   return tokenTrimmedToPosition;
    // }
    //
    // static trimmedFromPosition(token, position) {
    //   var tokenTrimmedFromPosition = null;
    //
    //   if (position !== 0) {
    //     var content = token.getContent(),
    //         line = token.getLine();
    //
    //     content = content.substring(0, position);
    //
    //     tokenTrimmedFromPosition.Token.fromContentAndLine(content, line);
    //   }
    //
    //   return tokenTrimmedFromPosition;
    // }

  }], [{
    key: 'htmlFromContent',
    value: function htmlFromContent(content) {
      var html = content; ///

      html = Token.sanitiseHTML(html); ///

      return html;
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
    key: 'sanitiseHTML',
    value: function sanitiseHTML(html) {
      var sanitisedHTML = html.replace(/&/, '&amp;').replace(/</, '&lt;').replace(/>/, '&gt;');

      return sanitisedHTML;
    }
  }]);

  return Token;
}();

module.exports = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJjb250ZW50IiwibGluZSIsImh0bWwiLCJsZW5ndGgiLCJ0b2tlbiIsInRva2VucyIsImdldFRva2VucyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInNhbml0aXNlSFRNTCIsIkNsYXNzIiwiaHRtbEZyb21Db250ZW50Iiwic2FuaXRpc2VkSFRNTCIsInJlcGxhY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEs7QUFDSixpQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLRixPQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLRixPQUFMLENBQWFHLE1BQXBCLENBRFUsQ0FDa0I7QUFDN0I7OztnQ0FFV0MsSyxFQUFPO0FBQ2pCLFVBQUlDLFNBQVMsS0FBS0osSUFBTCxDQUFVSyxTQUFWLEVBQWI7QUFBQSxVQUNJQyxRQUFRRixPQUFPRyxPQUFQLENBQWUsSUFBZixDQURaOztBQUdBSCxhQUFPSSxNQUFQLENBQWNGLEtBQWQsRUFBcUIsQ0FBckIsRUFBd0JILEtBQXhCO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O29DQUV1QkosTyxFQUFTO0FBQzlCLFVBQUlFLE9BQU9GLE9BQVgsQ0FEOEIsQ0FDVjs7QUFFcEJFLGFBQU9ILE1BQU1XLFlBQU4sQ0FBbUJSLElBQW5CLENBQVAsQ0FIOEIsQ0FHSTs7QUFFbEMsYUFBT0EsSUFBUDtBQUNEOzs7dUNBRXlCRixPLEVBQVNDLEksRUFBcUI7QUFBQSxVQUFmVSxLQUFlLHVFQUFQWixLQUFPOztBQUN0RCxVQUFJRyxPQUFPUyxNQUFNQyxlQUFOLENBQXNCWixPQUF0QixDQUFYO0FBQUEsVUFDSUksUUFBUSxJQUFJTyxLQUFKLENBQVVYLE9BQVYsRUFBbUJDLElBQW5CLEVBQXlCQyxJQUF6QixDQURaOztBQUdBLGFBQU9FLEtBQVA7QUFDRDs7O2lDQUVtQkYsSSxFQUFNO0FBQ3hCLFVBQUlXLGdCQUFnQlgsS0FBS1ksT0FBTCxDQUFhLEdBQWIsRUFBaUIsT0FBakIsRUFBMEJBLE9BQTFCLENBQWtDLEdBQWxDLEVBQXVDLE1BQXZDLEVBQStDQSxPQUEvQyxDQUF1RCxHQUF2RCxFQUE0RCxNQUE1RCxDQUFwQjs7QUFFQSxhQUFPRCxhQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCakIsS0FBakIiLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgaHRtbCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB0aGlzLmh0bWwgPSBodG1sO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmh0bWw7XG4gIH1cbiAgXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aDsgLy8vXG4gIH1cblxuICByZXBsYWNlV2l0aCh0b2tlbikge1xuICAgIHZhciB0b2tlbnMgPSB0aGlzLmxpbmUuZ2V0VG9rZW5zKCksXG4gICAgICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2YodGhpcyk7XG5cbiAgICB0b2tlbnMuc3BsaWNlKGluZGV4LCAxLCB0b2tlbik7XG4gIH1cblxuICAvLyBzdGF0aWMgdHJpbW1lZFRvUG9zaXRpb24odG9rZW4sIHBvc2l0aW9uKSB7XG4gIC8vICAgdmFyIHRva2VuVHJpbW1lZFRvUG9zaXRpb24gPSBudWxsLFxuICAvLyAgICAgICB0b2tlbkxlbmd0aCA9IHRva2VuLmdldExlbmd0aCgpO1xuICAvL1xuICAvLyAgIGlmIChwb3NpdGlvbiAhPT0gdG9rZW5MZW5ndGgpIHtcbiAgLy8gICAgIHZhciBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpLFxuICAvLyAgICAgICAgIGxpbmUgPSB0b2tlbi5nZXRMaW5lKCk7XG4gIC8vXG4gIC8vICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcocG9zaXRpb24pO1xuICAvL1xuICAvLyAgICAgdG9rZW5UcmltbWVkVG9Qb3NpdGlvbiA9IFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKTtcbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgcmV0dXJuIHRva2VuVHJpbW1lZFRvUG9zaXRpb247XG4gIC8vIH1cbiAgLy9cbiAgLy8gc3RhdGljIHRyaW1tZWRGcm9tUG9zaXRpb24odG9rZW4sIHBvc2l0aW9uKSB7XG4gIC8vICAgdmFyIHRva2VuVHJpbW1lZEZyb21Qb3NpdGlvbiA9IG51bGw7XG4gIC8vXG4gIC8vICAgaWYgKHBvc2l0aW9uICE9PSAwKSB7XG4gIC8vICAgICB2YXIgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKSxcbiAgLy8gICAgICAgICBsaW5lID0gdG9rZW4uZ2V0TGluZSgpO1xuICAvL1xuICAvLyAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIHBvc2l0aW9uKTtcbiAgLy9cbiAgLy8gICAgIHRva2VuVHJpbW1lZEZyb21Qb3NpdGlvbi5Ub2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIHJldHVybiB0b2tlblRyaW1tZWRGcm9tUG9zaXRpb247XG4gIC8vIH1cblxuICBzdGF0aWMgaHRtbEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICB2YXIgaHRtbCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgaHRtbCA9IFRva2VuLnNhbml0aXNlSFRNTChodG1sKTsgIC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIENsYXNzID0gVG9rZW4pIHtcbiAgICB2YXIgaHRtbCA9IENsYXNzLmh0bWxGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3MoY29udGVudCwgbGluZSwgaHRtbCk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgc2FuaXRpc2VIVE1MKGh0bWwpIHtcbiAgICB2YXIgc2FuaXRpc2VkSFRNTCA9IGh0bWwucmVwbGFjZSgvJi8sJyZhbXA7JykucmVwbGFjZSgvPC8sICcmbHQ7JykucmVwbGFjZSgvPi8sICcmZ3Q7Jyk7XG5cbiAgICByZXR1cm4gc2FuaXRpc2VkSFRNTDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRva2VuO1xuIl19