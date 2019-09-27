'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var types = require('./types'),
    contentUtilities = require('../utilities/content');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    sanitiseContent = contentUtilities.sanitiseContent,
    commentType = types.commentType,
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
      var typeCommentType = this.type === commentType,
          commentToken = typeCommentType; ///

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
    key: 'isEqualTo',
    value: function isEqualTo(token) {
      var equalToToken = this === token;

      return equalToToken;
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
    key: 'match',
    value: function match(Class, content, significant) {
      var token = null;

      var type = Class.type,
          regularExpression = Class.regularExpression,
          match = content.match(regularExpression);


      if (match !== null) {
        var index = match.index;


        if (index === 0) {
          content = match[0]; ///

          var contentLength = content.length;

          if (contentLength > 0) {
            var sanitisedContent = sanitiseContent(content),
                innerHTML = sanitisedContent; ///

            for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
              remainingArguments[_key3 - 3] = arguments[_key3];
            }

            token = new (Function.prototype.bind.apply(Class, [null].concat([type, content, innerHTML, significant], remainingArguments)))();
          }
        }
      }

      return token;
    }
  }, {
    key: 'fromMatch',
    value: function fromMatch(Class, match, significant) {
      for (var _len4 = arguments.length, remainingArguments = Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 3] = arguments[_key4];
      }

      var type = Class.type,
          content = match[0],
          sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          token = new (Function.prototype.bind.apply(Class, [null].concat([type, content, innerHTML, significant], remainingArguments)))();


      return token;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(Class, content, significant) {
      for (var _len5 = arguments.length, remainingArguments = Array(_len5 > 3 ? _len5 - 3 : 0), _key5 = 3; _key5 < _len5; _key5++) {
        remainingArguments[_key5 - 3] = arguments[_key5];
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

        for (var _len6 = arguments.length, remainingArguments = Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
          remainingArguments[_key6 - 3] = arguments[_key6];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInR5cGVzIiwiY29udGVudFV0aWxpdGllcyIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJzYW5pdGlzZUNvbnRlbnQiLCJjb21tZW50VHlwZSIsImVuZE9mTGluZVR5cGUiLCJ3aGl0ZXNwYWNlVHlwZSIsIlRva2VuIiwidHlwZSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJzaWduaWZpY2FudCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJ0eXBlQ29tbWVudFR5cGUiLCJjb21tZW50VG9rZW4iLCJ0eXBlRW5kT2ZMaW5lVHlwZSIsImVuZE9mTGluZVRva2VuIiwidHlwZVdoaXRlc3BhY2VUeXBlIiwid2hpdGVzcGFjZVRva2VuIiwidG9rZW4iLCJlcXVhbFRvVG9rZW4iLCJjbGFzc05hbWUiLCJodG1sIiwiQ2xhc3MiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJnZXRDb250ZW50Iiwic3Vic3RyaW5nIiwiZ2V0VHlwZSIsInNhbml0aXNlZENvbnRlbnQiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoIiwiaW5kZXgiLCJtYXRjaGVzIiwiZmlyc3RNYXRjaCIsInBvc2l0aW9uIiwic2VhcmNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxRQUFRRCxRQUFRLFNBQVIsQ0FBZDtBQUFBLElBQ01FLG1CQUFtQkYsUUFBUSxzQkFBUixDQUR6Qjs7QUFHTSxJQUFFRyxjQUFGLEdBQXFCSixTQUFyQixDQUFFSSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZRCxjQURaLENBQ0VDLEtBREY7QUFBQSxJQUVFQyxlQUZGLEdBRXNCSCxnQkFGdEIsQ0FFRUcsZUFGRjtBQUFBLElBR0VDLFdBSEYs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S0FBUDtBQUNEOzs7MENBRTRCSSxLLEVBQU9mLE8sRUFBUztBQUNyQyxVQUFFdUIsaUJBQUYsR0FBd0JSLEtBQXhCLENBQUVRLGlCQUFGO0FBQUEsVUFDQUssUUFEQSxHQUNXNUIsUUFBUTZCLE1BQVIsQ0FBZU4saUJBQWYsQ0FEWDs7O0FBR04sYUFBT0ssUUFBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQmpDLEtBQWpCIiwiZmlsZSI6InRva2VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuL3R5cGVzJyksXG4gICAgICBjb250ZW50VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2NvbnRlbnQnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHNhbml0aXNlQ29udGVudCB9ID0gY29udGVudFV0aWxpdGllcyxcbiAgICAgIHsgY29tbWVudFR5cGUsIGVuZE9mTGluZVR5cGUsIHdoaXRlc3BhY2VUeXBlIH0gPSB0eXBlcztcblxuY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50KSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICAgIHRoaXMuc2lnbmlmaWNhbnQgPSBzaWduaWZpY2FudDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0SW5uZXJIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySFRNTDtcbiAgfVxuXG4gIGdldENvbnRlbnRMZW5ndGgoKSB7XG4gICAgY29uc3QgY29udGVudExlbmd0aCA9IHRoaXMuY29udGVudC5sZW5ndGg7XG5cbiAgICByZXR1cm4gY29udGVudExlbmd0aDtcbiAgfVxuXG4gIGlzU2lnbmlmaWNhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnQ7XG4gIH1cbiAgXG4gIGlzQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVDb21tZW50VHlwZSA9ICh0aGlzLnR5cGUgPT09Y29tbWVudFR5cGUpLFxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IHR5cGVDb21tZW50VHlwZTsgLy8vXG5cbiAgICByZXR1cm4gY29tbWVudFRva2VuO1xuICB9XG5cbiAgaXNFbmRPZkxpbmVUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlRW5kT2ZMaW5lVHlwZSA9ICh0aGlzLnR5cGUgPT09IGVuZE9mTGluZVR5cGUpLFxuICAgICAgICAgIGVuZE9mTGluZVRva2VuID0gdHlwZUVuZE9mTGluZVR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2VuO1xuICB9XG5cbiAgaXNXaGl0ZXNwYWNlVG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZVdoaXRlc3BhY2VUeXBlID0gKHRoaXMudHlwZSA9PT0gd2hpdGVzcGFjZVR5cGUpLFxuICAgICAgICAgIHdoaXRlc3BhY2VUb2tlbiA9IHR5cGVXaGl0ZXNwYWNlVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRva2VuKSB7XG4gICAgY29uc3QgZXF1YWxUb1Rva2VuID0gKHRoaXMgPT09IHRva2VuKTtcblxuICAgIHJldHVybiBlcXVhbFRvVG9rZW47XG4gIH1cblxuICBhc0hUTUwoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy50eXBlLCAgLy8vXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7dGhpcy5pbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB0b2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7ICAvLy9cblxuICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQ7IC8vL1xuXG4gICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgbWF0Y2goQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgeyB0eXBlLCByZWd1bGFyRXhwcmVzc2lvbiB9ID0gQ2xhc3MsXG4gICAgICAgICAgbWF0Y2ggPSBjb250ZW50Lm1hdGNoKHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBpbmRleCB9ID0gbWF0Y2g7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBjb250ZW50ID0gbWF0Y2hbMF07IC8vL1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcblxuICAgICAgICBpZiAoY29udGVudExlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQ7IC8vL1xuXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWF0Y2goQ2xhc3MsIG1hdGNoLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBDbGFzcyxcbiAgICAgICAgICBjb250ZW50ID0gbWF0Y2hbMF0sIC8vL1xuICAgICAgICAgIHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHsgcmVndWxhckV4cHJlc3Npb24gfSA9IENsYXNzLFxuICAgICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgY29uc3QgeyB0eXBlIH0gPSBDbGFzcyxcbiAgICAgICAgICAgIHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50OyAvLy9cblxuICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50KSB7XG4gICAgY29uc3QgeyByZWd1bGFyRXhwcmVzc2lvbiB9ID0gQ2xhc3MsXG4gICAgICAgICAgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbjtcbiJdfQ==