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
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return Token.clone(this, startPosition, endPosition, Token);
    }
  }, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJjb250ZW50IiwibGluZSIsImh0bWwiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsImxlbmd0aCIsInRva2VuIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZ2V0TGVuZ3RoIiwiQ2xhc3MiLCJjbG9uZWRUb2tlbiIsImdldENvbnRlbnQiLCJnZXRMaW5lIiwic3Vic3RyaW5nIiwiZnJvbUNvbnRlbnRBbmRMaW5lIiwiaHRtbEZyb21Db250ZW50Iiwic2FuaXRpc2VIVE1MIiwic2FuaXRpc2VkSFRNTCIsInJlcGxhY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEs7QUFDSixpQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzBCQUVLQyxhLEVBQWVDLFcsRUFBYTtBQUFFLGFBQU9MLE1BQU1NLEtBQU4sQ0FBWSxJQUFaLEVBQWtCRixhQUFsQixFQUFpQ0MsV0FBakMsRUFBOENMLEtBQTlDLENBQVA7QUFBOEQ7OztpQ0FFckY7QUFDWCxhQUFPLEtBQUtDLE9BQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtGLE9BQUwsQ0FBYU0sTUFBcEIsQ0FEVSxDQUNrQjtBQUM3Qjs7O2dDQUVXQyxLLEVBQU87QUFDakIsVUFBSUMsU0FBUyxLQUFLUCxJQUFMLENBQVVRLFNBQVYsRUFBYjtBQUFBLFVBQ0lDLFFBQVFGLE9BQU9HLE9BQVAsQ0FBZSxJQUFmLENBRFo7O0FBR0FILGFBQU9JLE1BQVAsQ0FBY0YsS0FBZCxFQUFxQixDQUFyQixFQUF3QkgsS0FBeEI7QUFDRDs7OzBCQUVZQSxLLEVBQWtFO0FBQUEsVUFBM0RKLGFBQTJELHVFQUEzQyxDQUEyQztBQUFBLFVBQXhDQyxXQUF3Qyx1RUFBMUJHLE1BQU1NLFNBQU4sRUFBMEI7QUFBQSxVQUFQQyxLQUFPOztBQUM3RSxVQUFJQyxjQUFjLElBQWxCOztBQUVBLFVBQUlaLGtCQUFrQkMsV0FBdEIsRUFBbUM7QUFDakMsWUFBSUosVUFBVU8sTUFBTVMsVUFBTixFQUFkO0FBQUEsWUFDSWYsT0FBT00sTUFBTVUsT0FBTixFQURYOztBQUdBakIsa0JBQVVBLFFBQVFrQixTQUFSLENBQWtCZixhQUFsQixFQUFpQ0MsV0FBakMsQ0FBVjs7QUFFQVcsc0JBQWNELE1BQU1LLGtCQUFOLENBQXlCbkIsT0FBekIsRUFBa0NDLElBQWxDLENBQWQ7QUFDRDs7QUFFRCxhQUFPYyxXQUFQO0FBQ0Q7Ozt1Q0FFeUJmLE8sRUFBU0MsSSxFQUFxQjtBQUFBLFVBQWZhLEtBQWUsdUVBQVBmLEtBQU87O0FBQ3RELFVBQUlHLE9BQU9ZLE1BQU1NLGVBQU4sQ0FBc0JwQixPQUF0QixDQUFYO0FBQUEsVUFDSU8sUUFBUSxJQUFJTyxLQUFKLENBQVVkLE9BQVYsRUFBbUJDLElBQW5CLEVBQXlCQyxJQUF6QixDQURaOztBQUdBLGFBQU9LLEtBQVA7QUFDRDs7O29DQUVzQlAsTyxFQUFTO0FBQzlCLFVBQUlFLE9BQU9GLE9BQVgsQ0FEOEIsQ0FDVjs7QUFFcEJFLGFBQU9ILE1BQU1zQixZQUFOLENBQW1CbkIsSUFBbkIsQ0FBUCxDQUg4QixDQUdJOztBQUVsQyxhQUFPQSxJQUFQO0FBQ0Q7OztpQ0FFbUJBLEksRUFBTTtBQUN4QixVQUFJb0IsZ0JBQWdCcEIsS0FBS3FCLE9BQUwsQ0FBYSxHQUFiLEVBQWlCLE9BQWpCLEVBQTBCQSxPQUExQixDQUFrQyxHQUFsQyxFQUF1QyxNQUF2QyxFQUErQ0EsT0FBL0MsQ0FBdUQsR0FBdkQsRUFBNEQsTUFBNUQsQ0FBcEI7O0FBRUEsYUFBT0QsYUFBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQjFCLEtBQWpCIiwiZmlsZSI6InRva2VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUsIGh0bWwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgdGhpcy5odG1sID0gaHRtbDtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgVG9rZW4pOyB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmh0bWw7XG4gIH1cbiAgXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aDsgLy8vXG4gIH1cblxuICByZXBsYWNlV2l0aCh0b2tlbikge1xuICAgIHZhciB0b2tlbnMgPSB0aGlzLmxpbmUuZ2V0VG9rZW5zKCksXG4gICAgICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2YodGhpcyk7XG5cbiAgICB0b2tlbnMuc3BsaWNlKGluZGV4LCAxLCB0b2tlbik7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUodG9rZW4sIHN0YXJ0UG9zaXRpb24gPSAwLCBlbmRQb3NpdGlvbiA9IHRva2VuLmdldExlbmd0aCgpLCBDbGFzcykge1xuICAgIHZhciBjbG9uZWRUb2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIHZhciBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxpbmUgPSB0b2tlbi5nZXRMaW5lKCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7XG5cbiAgICAgIGNsb25lZFRva2VuID0gQ2xhc3MuZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZWRUb2tlbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyA9IFRva2VuKSB7XG4gICAgdmFyIGh0bWwgPSBDbGFzcy5odG1sRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgIHRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIGh0bWwpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGh0bWxGcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgdmFyIGh0bWwgPSBjb250ZW50OyAvLy9cblxuICAgIGh0bWwgPSBUb2tlbi5zYW5pdGlzZUhUTUwoaHRtbCk7ICAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc3RhdGljIHNhbml0aXNlSFRNTChodG1sKSB7XG4gICAgdmFyIHNhbml0aXNlZEhUTUwgPSBodG1sLnJlcGxhY2UoLyYvLCcmYW1wOycpLnJlcGxhY2UoLzwvLCAnJmx0OycpLnJlcGxhY2UoLz4vLCAnJmd0OycpO1xuXG4gICAgcmV0dXJuIHNhbml0aXNlZEhUTUw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbjtcbiJdfQ==