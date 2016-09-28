'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = function () {
  function Context(content, inMultiLineComment) {
    _classCallCheck(this, Context);

    this.content = content;
    this.inMultiLineComment = inMultiLineComment;

    this.tokens = [];
  }

  _createClass(Context, [{
    key: 'getTokens',
    value: function getTokens() {
      return this.tokens;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getContentLength',
    value: function getContentLength() {
      return this.content.length;
    }
  }, {
    key: 'getContentSubstring',
    value: function getContentSubstring(length) {
      return this.content.substring(0, length);
    }
  }, {
    key: 'isInMultiLineComment',
    value: function isInMultiLineComment() {
      return this.inMultiLineComment;
    }
  }, {
    key: 'pushToken',
    value: function pushToken(token) {
      this.tokens.push(token);
    }
  }, {
    key: 'setContent',
    value: function setContent(content) {
      this.content = content;
    }
  }, {
    key: 'chopContent',
    value: function chopContent(length) {
      this.content = this.content.substring(length);
    }
  }, {
    key: 'setInMultiLineComment',
    value: function setInMultiLineComment(inMultiLineComment) {
      this.inMultiLineComment = inMultiLineComment;
    }
  }]);

  return Context;
}();

module.exports = Context;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJjb250ZW50IiwiaW5NdWx0aUxpbmVDb21tZW50IiwidG9rZW5zIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwidG9rZW4iLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxPO0FBQ0osbUJBQVlDLE9BQVosRUFBcUJDLGtCQUFyQixFQUF5QztBQUFBOztBQUN2QyxTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQkEsa0JBQTFCOztBQUVBLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLE1BQVo7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLRixPQUFaO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsYUFBTyxLQUFLQSxPQUFMLENBQWFHLE1BQXBCO0FBQ0Q7Ozt3Q0FFbUJBLE0sRUFBUTtBQUMxQixhQUFPLEtBQUtILE9BQUwsQ0FBYUksU0FBYixDQUF1QixDQUF2QixFQUEwQkQsTUFBMUIsQ0FBUDtBQUNEOzs7MkNBRXNCO0FBQ3JCLGFBQU8sS0FBS0Ysa0JBQVo7QUFDRDs7OzhCQUVTSSxLLEVBQU87QUFDZixXQUFLSCxNQUFMLENBQVlJLElBQVosQ0FBaUJELEtBQWpCO0FBQ0Q7OzsrQkFFVUwsTyxFQUFTO0FBQ2xCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7Z0NBRVdHLE0sRUFBUTtBQUNsQixXQUFLSCxPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhSSxTQUFiLENBQXVCRCxNQUF2QixDQUFmO0FBQ0Q7OzswQ0FFcUJGLGtCLEVBQW9CO0FBQ3hDLFdBQUtBLGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUJULE9BQWpCIiwiZmlsZSI6ImNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBDb250ZXh0IHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBpbk11bHRpTGluZUNvbW1lbnQpIHtcclxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICB0aGlzLmluTXVsdGlMaW5lQ29tbWVudCA9IGluTXVsdGlMaW5lQ29tbWVudDtcclxuXHJcbiAgICB0aGlzLnRva2VucyA9IFtdO1xyXG4gIH1cclxuICBcclxuICBnZXRUb2tlbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldENvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xyXG4gIH1cclxuICBcclxuICBnZXRDb250ZW50TGVuZ3RoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7XHJcbiAgfVxyXG4gIFxyXG4gIGdldENvbnRlbnRTdWJzdHJpbmcobGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50LnN1YnN0cmluZygwLCBsZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgaXNJbk11bHRpTGluZUNvbW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbk11bHRpTGluZUNvbW1lbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIHB1c2hUb2tlbih0b2tlbikge1xyXG4gICAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XHJcbiAgfVxyXG5cclxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcclxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBjaG9wQ29udGVudChsZW5ndGgpIHtcclxuICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudC5zdWJzdHJpbmcobGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHNldEluTXVsdGlMaW5lQ29tbWVudChpbk11bHRpTGluZUNvbW1lbnQpIHtcclxuICAgIHRoaXMuaW5NdWx0aUxpbmVDb21tZW50ID0gaW5NdWx0aUxpbmVDb21tZW50O1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb250ZXh0O1xyXG4iXX0=