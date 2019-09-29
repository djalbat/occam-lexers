'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var types = require('./types'),
    contentUtilities = require('../utilities/content');

var sanitiseContent = contentUtilities.sanitiseContent,
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
    key: 'match',
    value: function match(token) {
      var type = token.getType(),
          content = token.getContent(),
          significant = token.isSignificant(),
          matches = this.type === type && this.content === content && this.significant === significant;

      return matches;
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

            for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
              remainingArguments[_key2 - 3] = arguments[_key2];
            }

            token = new (Function.prototype.bind.apply(Class, [null].concat([type, content, innerHTML, significant], remainingArguments)))();
          }
        }
      }

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
    key: 'fromContentAndType',
    value: function fromContentAndType(Class, content, type, significant) {
      for (var _len4 = arguments.length, remainingArguments = Array(_len4 > 4 ? _len4 - 4 : 0), _key4 = 4; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 4] = arguments[_key4];
      }

      var sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      token = new (Function.prototype.bind.apply(Class, [null].concat([type, content, innerHTML, significant], remainingArguments)))();

      return token;
    }
  }]);

  return Token;
}();

module.exports = Token;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1aXJlIiwiY29udGVudFV0aWxpdGllcyIsInNhbml0aXNlQ29udGVudCIsImNvbW1lbnRUeXBlIiwiZW5kT2ZMaW5lVHlwZSIsIndoaXRlc3BhY2VUeXBlIiwiVG9rZW4iLCJ0eXBlIiwiY29udGVudCIsImlubmVySFRNTCIsInNpZ25pZmljYW50IiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsInR5cGVDb21tZW50VHlwZSIsImNvbW1lbnRUb2tlbiIsInR5cGVFbmRPZkxpbmVUeXBlIiwiZW5kT2ZMaW5lVG9rZW4iLCJ0eXBlV2hpdGVzcGFjZVR5cGUiLCJ3aGl0ZXNwYWNlVG9rZW4iLCJ0b2tlbiIsImVxdWFsVG9Ub2tlbiIsImdldFR5cGUiLCJnZXRDb250ZW50IiwiaXNTaWduaWZpY2FudCIsIm1hdGNoZXMiLCJjbGFzc05hbWUiLCJodG1sIiwiQ2xhc3MiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJzdWJzdHJpbmciLCJzYW5pdGlzZWRDb250ZW50IiwicmVtYWluaW5nQXJndW1lbnRzIiwicmVndWxhckV4cHJlc3Npb24iLCJtYXRjaCIsImluZGV4IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsU0FBUixDQUFkO0FBQUEsSUFDTUMsbUJBQW1CRCxRQUFRLHNCQUFSLENBRHpCOztBQUdNLElBQUVFLGVBQUYsR0FBc0JELGdCQUF0QixDQUFFQyxlQUFGO0FBQUEsSUFDRUMsV0FERixHQUNpREosS0FEakQsQ0FDRUksV0FERjtBQUFBLElBQ2VDLGFBRGYsR0FDaURMLEtBRGpELENBQ2VLLGFBRGY7QUFBQSxJQUM4QkMsY0FEOUIsR0FDaUROLEtBRGpELENBQzhCTSxjQUQ5Qjs7SUFHQUMsSztBQUNKLGlCQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQkMsU0FBM0IsRUFBc0ND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QlosaURBQVlRLEtBQVosaUJBQWtCcEIsSUFBbEIsRUFBd0JDLE9BQXhCLEVBQWlDQyxTQUFqQyxFQUE0Q0MsV0FBNUMsR0FBNERzQixrQkFBNUQsS0FGTjs7QUFJQSxhQUFPYixLQUFQO0FBQ0Q7Ozs7OztBQUdIaUIsT0FBT0MsT0FBUCxHQUFpQi9CLEtBQWpCIiwiZmlsZSI6InRva2VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4vdHlwZXMnKSxcbiAgICAgIGNvbnRlbnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvY29udGVudCcpO1xuXG5jb25zdCB7IHNhbml0aXNlQ29udGVudCB9ID0gY29udGVudFV0aWxpdGllcyxcbiAgICAgIHsgY29tbWVudFR5cGUsIGVuZE9mTGluZVR5cGUsIHdoaXRlc3BhY2VUeXBlIH0gPSB0eXBlcztcblxuY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50KSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICAgIHRoaXMuc2lnbmlmaWNhbnQgPSBzaWduaWZpY2FudDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0SW5uZXJIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySFRNTDtcbiAgfVxuXG4gIGdldENvbnRlbnRMZW5ndGgoKSB7XG4gICAgY29uc3QgY29udGVudExlbmd0aCA9IHRoaXMuY29udGVudC5sZW5ndGg7XG5cbiAgICByZXR1cm4gY29udGVudExlbmd0aDtcbiAgfVxuXG4gIGlzU2lnbmlmaWNhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnQ7XG4gIH1cbiAgXG4gIGlzQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVDb21tZW50VHlwZSA9ICh0aGlzLnR5cGUgPT09Y29tbWVudFR5cGUpLFxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IHR5cGVDb21tZW50VHlwZTsgLy8vXG5cbiAgICByZXR1cm4gY29tbWVudFRva2VuO1xuICB9XG5cbiAgaXNFbmRPZkxpbmVUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlRW5kT2ZMaW5lVHlwZSA9ICh0aGlzLnR5cGUgPT09IGVuZE9mTGluZVR5cGUpLFxuICAgICAgICAgIGVuZE9mTGluZVRva2VuID0gdHlwZUVuZE9mTGluZVR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2VuO1xuICB9XG5cbiAgaXNXaGl0ZXNwYWNlVG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZVdoaXRlc3BhY2VUeXBlID0gKHRoaXMudHlwZSA9PT0gd2hpdGVzcGFjZVR5cGUpLFxuICAgICAgICAgIHdoaXRlc3BhY2VUb2tlbiA9IHR5cGVXaGl0ZXNwYWNlVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRva2VuKSB7XG4gICAgY29uc3QgZXF1YWxUb1Rva2VuID0gKHRoaXMgPT09IHRva2VuKTtcblxuICAgIHJldHVybiBlcXVhbFRvVG9rZW47XG4gIH1cblxuICBtYXRjaCh0b2tlbikge1xuICAgIGNvbnN0IHR5cGUgPSB0b2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzaWduaWZpY2FudCA9IHRva2VuLmlzU2lnbmlmaWNhbnQoKSxcbiAgICAgICAgICBtYXRjaGVzID0gKCh0aGlzLnR5cGUgPT09IHR5cGUpICYmICh0aGlzLmNvbnRlbnQgPT09IGNvbnRlbnQpICYmICh0aGlzLnNpZ25pZmljYW50ID09PSBzaWduaWZpY2FudCkpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBhc0hUTUwoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy50eXBlLCAgLy8vXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7dGhpcy5pbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB0b2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7ICAvLy9cblxuICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQ7IC8vL1xuXG4gICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB0b2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IHR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uIH0gPSBDbGFzcyxcbiAgICAgICAgICBtYXRjaCA9IGNvbnRlbnQubWF0Y2gocmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGluZGV4IH0gPSBtYXRjaDtcblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNvbnRlbnQgPSBtYXRjaFswXTsgLy8vXG5cbiAgICAgICAgY29uc3QgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoO1xuXG4gICAgICAgIGlmIChjb250ZW50TGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudDsgLy8vXG5cbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBDbGFzcyxcbiAgICAgICAgICBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9rZW47XG4iXX0=