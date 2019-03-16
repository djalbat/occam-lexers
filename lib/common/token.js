'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var types = require('./types');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    commentType = types.commentType,
    middleType = types.middleType,
    multiLineType = types.multiLineType,
    singleLineType = types.singleLineType,
    endOfLineType = types.endOfLineType,
    whitespaceType = types.whitespaceType;

var Token = function () {
  function Token(type, content, innerHTML, significant) {
    _classCallCheck(this, Token);

    this.type = type;
    this.content = content;
    this.innerHTML = innerHTML;
    this.significant = significant;
  }

  _createClass(Token, [{
    key: 'getType',
    value: function getType() {
      return this.type;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getInnerHTML',
    value: function getInnerHTML() {
      return this.innerHTML;
    }
  }, {
    key: 'getContentLength',
    value: function getContentLength() {
      var contentLength = this.content.length;

      return contentLength;
    }
  }, {
    key: 'isSignificant',
    value: function isSignificant() {
      return this.significant;
    }
  }, {
    key: 'isCommentToken',
    value: function isCommentToken() {
      var typeIncludesCommentType = this.type.includes(commentType),
          commentToken = typeIncludesCommentType; ///

      return commentToken;
    }
  }, {
    key: 'isEndOfLineToken',
    value: function isEndOfLineToken() {
      var typeEndOfLineType = this.type === endOfLineType,
          endOfLineToken = typeEndOfLineType; ///

      return endOfLineToken;
    }
  }, {
    key: 'isWhitespaceToken',
    value: function isWhitespaceToken() {
      var typeWhitespaceType = this.type === whitespaceType,
          whitespaceToken = typeWhitespaceType; ///

      return whitespaceToken;
    }
  }, {
    key: 'isMiddleOfCommentToken',
    value: function isMiddleOfCommentToken() {
      var typeIncludesMiddleType = this.type.includes(middleType),
          typeIncludesCommentType = this.type.includes(commentType),
          middleOfCommentToken = typeIncludesMiddleType && typeIncludesCommentType; ///

      return middleOfCommentToken;
    }
  }, {
    key: 'isMultiLineCommentToken',
    value: function isMultiLineCommentToken() {
      var typeIncludesCommentType = this.type.includes(commentType),
          typeIncludesMultiLineType = this.type.includes(multiLineType),
          multiLineCommentToken = typeIncludesMultiLineType && typeIncludesCommentType; ///

      return multiLineCommentToken;
    }
  }, {
    key: 'isSingleLineCommentToken',
    value: function isSingleLineCommentToken() {
      var typeIncludesCommentType = this.type.includes(commentType),
          typeIncludesSingleLineType = this.type.includes(singleLineType),
          singleLineCommentToken = typeIncludesSingleLineType && typeIncludesCommentType; ///

      return singleLineCommentToken;
    }
  }, {
    key: 'matchToken',
    value: function matchToken(token) {
      var matches = false;

      var tokenSignificant = token.isSignificant();

      if (this.significant === tokenSignificant) {
        var tokenContent = token.getContent();

        if (this.content === tokenContent) {
          var tokenType = token.getType();

          if (this.type === tokenType) {
            matches = true;
          }
        }
      }

      return matches;
    }
  }, {
    key: 'isEqualTo',
    value: function isEqualTo(token) {
      var equals = this === token;

      return equals;
    }
  }, {
    key: 'asHTML',
    value: function asHTML() {
      var className = this.type,
          ///
      html = '<span class="' + className + '">' + this.innerHTML + '</span>';

      return html;
    }
  }, {
    key: 'clone',
    value: function clone(Class, startPosition, endPosition, significant) {
      var token = null;

      if (startPosition !== endPosition) {
        var content = this.getContent();

        content = content.substring(startPosition, endPosition); ///

        var type = this.getType(),
            sanitisedContent = sanitiseContent(content),
            innerHTML = sanitisedContent; ///

        for (var _len = arguments.length, remainingArguments = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
          remainingArguments[_key - 4] = arguments[_key];
        }

        token = new (Function.prototype.bind.apply(Class, [null].concat([type, content, innerHTML, significant], remainingArguments)))();
      }

      return token;
    }
  }], [{
    key: 'fromContentAndType',
    value: function fromContentAndType(Class, content, type, significant) {
      for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 4 ? _len2 - 4 : 0), _key2 = 4; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 4] = arguments[_key2];
      }

      var sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      token = new (Function.prototype.bind.apply(Class, [null].concat([type, content, innerHTML, significant], remainingArguments)))();

      return token;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(Class, content, significant) {
      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 3] = arguments[_key3];
      }

      var type = Class.type,
          sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          token = new (Function.prototype.bind.apply(Class, [null].concat([type, content, innerHTML, significant], remainingArguments)))();


      return token;
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(Class, content, significant) {
      var token = null;

      var regularExpression = Class.regularExpression,
          matches = content.match(regularExpression);


      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        var type = Class.type,
            sanitisedContent = sanitiseContent(content),
            innerHTML = sanitisedContent; ///

        for (var _len4 = arguments.length, remainingArguments = Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
          remainingArguments[_key4 - 3] = arguments[_key4];
        }

        token = new (Function.prototype.bind.apply(Class, [null].concat([type, content, innerHTML, significant], remainingArguments)))();
      }

      return token;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(Class, content) {
      var regularExpression = Class.regularExpression,
          position = content.search(regularExpression);


      return position;
    }
  }]);

  return Token;
}();

module.exports = Token;

function sanitiseContent(content) {
  var sanitisedContent = content.replace(/&/, '&amp;').replace(/</, '&lt;').replace(/>/, '&gt;');

  return sanitisedContent;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInR5cGVzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImNvbW1lbnRUeXBlIiwibWlkZGxlVHlwZSIsIm11bHRpTGluZVR5cGUiLCJzaW5nbGVMaW5lVHlwZSIsImVuZE9mTGluZVR5cGUiLCJ3aGl0ZXNwYWNlVHlwZSIsIlRva2VuIiwidHlwZSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJzaWduaWZpY2FudCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJ0eXBlSW5jbHVkZXNDb21tZW50VHlwZSIsImluY2x1ZGVzIiwiY29tbWVudFRva2VuIiwidHlwZUVuZE9mTGluZVR5cGUiLCJlbmRPZkxpbmVUb2tlbiIsInR5cGVXaGl0ZXNwYWNlVHlwZSIsIndoaXRlc3BhY2VUb2tlbiIsInR5cGVJbmNsdWRlc01pZGRsZVR5cGUiLCJtaWRkbGVPZkNvbW1lbnRUb2tlbiIsInR5cGVJbmNsdWRlc011bHRpTGluZVR5cGUiLCJtdWx0aUxpbmVDb21tZW50VG9rZW4iLCJ0eXBlSW5jbHVkZXNTaW5nbGVMaW5lVHlwZSIsInNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJ0b2tlbiIsIm1hdGNoZXMiLCJ0b2tlblNpZ25pZmljYW50IiwiaXNTaWduaWZpY2FudCIsInRva2VuQ29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlblR5cGUiLCJnZXRUeXBlIiwiZXF1YWxzIiwiY2xhc3NOYW1lIiwiaHRtbCIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwic3Vic3RyaW5nIiwic2FuaXRpc2VkQ29udGVudCIsInNhbml0aXNlQ29udGVudCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwicG9zaXRpb24iLCJzZWFyY2giLCJtb2R1bGUiLCJleHBvcnRzIiwicmVwbGFjZSJdLCJt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QUVoQixZQUFFdkMsSUFBRixHQUFXOEIsS0FBWCxDQUFFOUIsSUFBRjtBQUFBLFlBQ0FrQyxnQkFEQSxHQUNtQkMsZ0JBQWdCbEMsT0FBaEIsQ0FEbkI7QUFBQSxZQUVBQyxTQUZBLEdBRVlnQyxnQkFGWixDQUxLLENBT3lCOztBQVB6QiwyQ0FOMENFLGtCQU0xQztBQU4wQ0EsNEJBTTFDO0FBQUE7O0FBU1hqQixtREFBWVcsS0FBWixpQkFBa0I5QixJQUFsQixFQUF3QkMsT0FBeEIsRUFBaUNDLFNBQWpDLEVBQTRDQyxXQUE1QyxHQUE0RGlDLGtCQUE1RDtBQUNEOztBQUVELGFBQU9qQixLQUFQO0FBQ0Q7OzswQ0FFNEJXLEssRUFBTzdCLE8sRUFBUztBQUNyQyxVQUFFb0MsaUJBQUYsR0FBd0JQLEtBQXhCLENBQUVPLGlCQUFGO0FBQUEsVUFDQUcsUUFEQSxHQUNXdkMsUUFBUXdDLE1BQVIsQ0FBZUosaUJBQWYsQ0FEWDs7O0FBR04sYUFBT0csUUFBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQjVDLEtBQWpCOztBQUVBLFNBQVNvQyxlQUFULENBQXlCbEMsT0FBekIsRUFBa0M7QUFDaEMsTUFBTWlDLG1CQUFtQmpDLFFBQVEyQyxPQUFSLENBQWdCLEdBQWhCLEVBQW9CLE9BQXBCLEVBQTZCQSxPQUE3QixDQUFxQyxHQUFyQyxFQUEwQyxNQUExQyxFQUFrREEsT0FBbEQsQ0FBMEQsR0FBMUQsRUFBK0QsTUFBL0QsQ0FBekI7O0FBRUEsU0FBT1YsZ0JBQVA7QUFDRCIsImZpbGUiOiJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi90eXBlcycpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY29tbWVudFR5cGUsIG1pZGRsZVR5cGUsIG11bHRpTGluZVR5cGUsIHNpbmdsZUxpbmVUeXBlLCBlbmRPZkxpbmVUeXBlLCB3aGl0ZXNwYWNlVHlwZSB9ID0gdHlwZXM7XG5cbmNsYXNzIFRva2VuIHtcbiAgY29uc3RydWN0b3IodHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgICB0aGlzLnNpZ25pZmljYW50ID0gc2lnbmlmaWNhbnQ7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldElubmVySFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXRDb250ZW50TGVuZ3RoKCkge1xuICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSB0aGlzLmNvbnRlbnQubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRMZW5ndGg7XG4gIH1cblxuICBpc1NpZ25pZmljYW50KCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50O1xuICB9XG4gIFxuICBpc0NvbW1lbnRUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlSW5jbHVkZXNDb21tZW50VHlwZSA9IHRoaXMudHlwZS5pbmNsdWRlcyhjb21tZW50VHlwZSksXG4gICAgICAgICAgY29tbWVudFRva2VuID0gdHlwZUluY2x1ZGVzQ29tbWVudFR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIGlzRW5kT2ZMaW5lVG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZUVuZE9mTGluZVR5cGUgPSAodGhpcy50eXBlID09PSBlbmRPZkxpbmVUeXBlKSxcbiAgICAgICAgICBlbmRPZkxpbmVUb2tlbiA9IHR5cGVFbmRPZkxpbmVUeXBlOyAvLy9cblxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbjtcbiAgfVxuXG4gIGlzV2hpdGVzcGFjZVRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVXaGl0ZXNwYWNlVHlwZSA9ICh0aGlzLnR5cGUgPT09IHdoaXRlc3BhY2VUeXBlKSxcbiAgICAgICAgICB3aGl0ZXNwYWNlVG9rZW4gPSB0eXBlV2hpdGVzcGFjZVR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcbiAgfVxuXG4gIGlzTWlkZGxlT2ZDb21tZW50VG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZUluY2x1ZGVzTWlkZGxlVHlwZSA9IHRoaXMudHlwZS5pbmNsdWRlcyhtaWRkbGVUeXBlKSxcbiAgICAgICAgICB0eXBlSW5jbHVkZXNDb21tZW50VHlwZSA9IHRoaXMudHlwZS5pbmNsdWRlcyhjb21tZW50VHlwZSksXG4gICAgICAgICAgbWlkZGxlT2ZDb21tZW50VG9rZW4gPSB0eXBlSW5jbHVkZXNNaWRkbGVUeXBlICYmIHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlOyAvLy9cblxuICAgIHJldHVybiBtaWRkbGVPZkNvbW1lbnRUb2tlbjtcblxuICB9XG5cbiAgaXNNdWx0aUxpbmVDb21tZW50VG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZUluY2x1ZGVzQ29tbWVudFR5cGUgPSB0aGlzLnR5cGUuaW5jbHVkZXMoY29tbWVudFR5cGUpLFxuICAgICAgICAgIHR5cGVJbmNsdWRlc011bHRpTGluZVR5cGUgPSB0aGlzLnR5cGUuaW5jbHVkZXMobXVsdGlMaW5lVHlwZSksXG4gICAgICAgICAgbXVsdGlMaW5lQ29tbWVudFRva2VuID0gdHlwZUluY2x1ZGVzTXVsdGlMaW5lVHlwZSAmJiB0eXBlSW5jbHVkZXNDb21tZW50VHlwZTsgLy8vXG5cbiAgICByZXR1cm4gbXVsdGlMaW5lQ29tbWVudFRva2VuO1xuICB9XG5cbiAgaXNTaW5nbGVMaW5lQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlID0gdGhpcy50eXBlLmluY2x1ZGVzKGNvbW1lbnRUeXBlKSxcbiAgICAgICAgICB0eXBlSW5jbHVkZXNTaW5nbGVMaW5lVHlwZSA9IHRoaXMudHlwZS5pbmNsdWRlcyhzaW5nbGVMaW5lVHlwZSksXG4gICAgICAgICAgc2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IHR5cGVJbmNsdWRlc1NpbmdsZUxpbmVUeXBlICYmIHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlOyAvLy9cblxuICAgIHJldHVybiBzaW5nbGVMaW5lQ29tbWVudFRva2VuO1xuICB9XG5cbiAgbWF0Y2hUb2tlbih0b2tlbikge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0b2tlblNpZ25pZmljYW50ID0gdG9rZW4uaXNTaWduaWZpY2FudCgpO1xuXG4gICAgaWYgKHRoaXMuc2lnbmlmaWNhbnQgPT09IHRva2VuU2lnbmlmaWNhbnQpIHtcbiAgICAgIGNvbnN0IHRva2VuQ29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgaWYgKHRoaXMuY29udGVudCA9PT0gdG9rZW5Db250ZW50KSB7XG4gICAgICAgIGNvbnN0IHRva2VuVHlwZSA9IHRva2VuLmdldFR5cGUoKTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSB0b2tlblR5cGUpIHtcbiAgICAgICAgICBtYXRjaGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRva2VuKSB7XG4gICAgY29uc3QgZXF1YWxzID0gKHRoaXMgPT09IHRva2VuKTtcblxuICAgIHJldHVybiBlcXVhbHM7XG4gIH1cblxuICBhc0hUTUwoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy50eXBlLCAgLy8vXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7dGhpcy5pbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB0b2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7ICAvLy9cblxuICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQ7IC8vL1xuXG4gICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IENsYXNzLFxuICAgICAgICAgIHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB0b2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IHJlZ3VsYXJFeHByZXNzaW9uIH0gPSBDbGFzcyxcbiAgICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgIGNvbnN0IHsgdHlwZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgICBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudDsgLy8vXG5cbiAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCkge1xuICAgIGNvbnN0IHsgcmVndWxhckV4cHJlc3Npb24gfSA9IENsYXNzLFxuICAgICAgICAgIHBvc2l0aW9uID0gY29udGVudC5zZWFyY2gocmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9rZW47XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ29udGVudChjb250ZW50KSB7XG4gIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoLyYvLCcmYW1wOycpLnJlcGxhY2UoLzwvLCAnJmx0OycpLnJlcGxhY2UoLz4vLCAnJmd0OycpO1xuXG4gIHJldHVybiBzYW5pdGlzZWRDb250ZW50O1xufVxuIl19