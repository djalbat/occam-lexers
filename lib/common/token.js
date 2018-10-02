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
    key: 'asHTML',
    value: function asHTML(filePath) {
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

        token = new Class(type, content, innerHTML, significant);
      }

      return token;
    }
  }], [{
    key: 'fromContentAndType',
    value: function fromContentAndType(Class, content, type, significant) {
      var sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      token = new Class(type, content, innerHTML, significant);

      return token;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(Class, content, significant) {
      var type = Class.type,
          sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          token = new Class(type, content, innerHTML, significant);


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

        token = new Class(type, content, innerHTML, significant);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInR5cGVzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImNvbW1lbnRUeXBlIiwibWlkZGxlVHlwZSIsIm11bHRpTGluZVR5cGUiLCJzaW5nbGVMaW5lVHlwZSIsImVuZE9mTGluZVR5cGUiLCJ3aGl0ZXNwYWNlVHlwZSIsIlRva2VuIiwidHlwZSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJzaWduaWZpY2FudCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJ0eXBlSW5jbHVkZXNDb21tZW50VHlwZSIsImluY2x1ZGVzIiwiY29tbWVudFRva2VuIiwidHlwZUVuZE9mTGluZVR5cGUiLCJlbmRPZkxpbmVUb2tlbiIsInR5cGVXaGl0ZXNwYWNlVHlwZSIsIndoaXRlc3BhY2VUb2tlbiIsInR5cGVJbmNsdWRlc01pZGRsZVR5cGUiLCJtaWRkbGVPZkNvbW1lbnRUb2tlbiIsInR5cGVJbmNsdWRlc011bHRpTGluZVR5cGUiLCJtdWx0aUxpbmVDb21tZW50VG9rZW4iLCJ0eXBlSW5jbHVkZXNTaW5nbGVMaW5lVHlwZSIsInNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJmaWxlUGF0aCIsImNsYXNzTmFtZSIsImh0bWwiLCJDbGFzcyIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsInRva2VuIiwiZ2V0Q29udGVudCIsInN1YnN0cmluZyIsImdldFR5cGUiLCJzYW5pdGlzZWRDb250ZW50Iiwic2FuaXRpc2VDb250ZW50IiwicmVndWxhckV4cHJlc3Npb24iLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwicG9zaXRpb24iLCJzZWFyY2giLCJtb2R1bGUiLCJleHBvcnRzIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxRQUFRRCxRQUFRLFNBQVIs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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuL3R5cGVzJyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjb21tZW50VHlwZSwgbWlkZGxlVHlwZSwgbXVsdGlMaW5lVHlwZSwgc2luZ2xlTGluZVR5cGUsIGVuZE9mTGluZVR5cGUsIHdoaXRlc3BhY2VUeXBlIH0gPSB0eXBlcztcblxuY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50KSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICAgIHRoaXMuc2lnbmlmaWNhbnQgPSBzaWduaWZpY2FudDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0SW5uZXJIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySFRNTDtcbiAgfVxuXG4gIGdldENvbnRlbnRMZW5ndGgoKSB7XG4gICAgY29uc3QgY29udGVudExlbmd0aCA9IHRoaXMuY29udGVudC5sZW5ndGg7XG5cbiAgICByZXR1cm4gY29udGVudExlbmd0aDtcbiAgfVxuXG4gIGlzU2lnbmlmaWNhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnQ7XG4gIH1cbiAgXG4gIGlzQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlID0gdGhpcy50eXBlLmluY2x1ZGVzKGNvbW1lbnRUeXBlKSxcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSB0eXBlSW5jbHVkZXNDb21tZW50VHlwZTsgLy8vXG5cbiAgICByZXR1cm4gY29tbWVudFRva2VuO1xuICB9XG5cbiAgaXNFbmRPZkxpbmVUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlRW5kT2ZMaW5lVHlwZSA9ICh0aGlzLnR5cGUgPT09IGVuZE9mTGluZVR5cGUpLFxuICAgICAgICAgIGVuZE9mTGluZVRva2VuID0gdHlwZUVuZE9mTGluZVR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2VuO1xuICB9XG5cbiAgaXNXaGl0ZXNwYWNlVG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZVdoaXRlc3BhY2VUeXBlID0gKHRoaXMudHlwZSA9PT0gd2hpdGVzcGFjZVR5cGUpLFxuICAgICAgICAgIHdoaXRlc3BhY2VUb2tlbiA9IHR5cGVXaGl0ZXNwYWNlVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgaXNNaWRkbGVPZkNvbW1lbnRUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlSW5jbHVkZXNNaWRkbGVUeXBlID0gdGhpcy50eXBlLmluY2x1ZGVzKG1pZGRsZVR5cGUpLFxuICAgICAgICAgIHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlID0gdGhpcy50eXBlLmluY2x1ZGVzKGNvbW1lbnRUeXBlKSxcbiAgICAgICAgICBtaWRkbGVPZkNvbW1lbnRUb2tlbiA9IHR5cGVJbmNsdWRlc01pZGRsZVR5cGUgJiYgdHlwZUluY2x1ZGVzQ29tbWVudFR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIG1pZGRsZU9mQ29tbWVudFRva2VuO1xuXG4gIH1cblxuICBpc011bHRpTGluZUNvbW1lbnRUb2tlbigpIHtcbiAgICBjb25zdCB0eXBlSW5jbHVkZXNDb21tZW50VHlwZSA9IHRoaXMudHlwZS5pbmNsdWRlcyhjb21tZW50VHlwZSksXG4gICAgICAgICAgdHlwZUluY2x1ZGVzTXVsdGlMaW5lVHlwZSA9IHRoaXMudHlwZS5pbmNsdWRlcyhtdWx0aUxpbmVUeXBlKSxcbiAgICAgICAgICBtdWx0aUxpbmVDb21tZW50VG9rZW4gPSB0eXBlSW5jbHVkZXNNdWx0aUxpbmVUeXBlICYmIHR5cGVJbmNsdWRlc0NvbW1lbnRUeXBlOyAvLy9cblxuICAgIHJldHVybiBtdWx0aUxpbmVDb21tZW50VG9rZW47XG4gIH1cblxuICBpc1NpbmdsZUxpbmVDb21tZW50VG9rZW4oKSB7XG4gICAgY29uc3QgdHlwZUluY2x1ZGVzQ29tbWVudFR5cGUgPSB0aGlzLnR5cGUuaW5jbHVkZXMoY29tbWVudFR5cGUpLFxuICAgICAgICAgIHR5cGVJbmNsdWRlc1NpbmdsZUxpbmVUeXBlID0gdGhpcy50eXBlLmluY2x1ZGVzKHNpbmdsZUxpbmVUeXBlKSxcbiAgICAgICAgICBzaW5nbGVMaW5lQ29tbWVudFRva2VuID0gdHlwZUluY2x1ZGVzU2luZ2xlTGluZVR5cGUgJiYgdHlwZUluY2x1ZGVzQ29tbWVudFR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIHNpbmdsZUxpbmVDb21tZW50VG9rZW47XG4gIH1cblxuICBhc0hUTUwoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLnR5cGUsICAvLy9cbiAgICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHt0aGlzLmlubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBzaWduaWZpY2FudCkge1xuICAgIGxldCB0b2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7ICAvLy9cblxuICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQ7IC8vL1xuXG4gICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBzaWduaWZpY2FudCkge1xuICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50KSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBDbGFzcyxcbiAgICAgICAgICBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50LCBzaWduaWZpY2FudCkge1xuICAgIGxldCB0b2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IHJlZ3VsYXJFeHByZXNzaW9uIH0gPSBDbGFzcyxcbiAgICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgIGNvbnN0IHsgdHlwZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgICBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudDsgLy8vXG5cbiAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHtcbiAgICBjb25zdCB7IHJlZ3VsYXJFeHByZXNzaW9uIH0gPSBDbGFzcyxcbiAgICAgICAgICBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRva2VuO1xuXG5mdW5jdGlvbiBzYW5pdGlzZUNvbnRlbnQoY29udGVudCkge1xuICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gY29udGVudC5yZXBsYWNlKC8mLywnJmFtcDsnKS5yZXBsYWNlKC88LywgJyZsdDsnKS5yZXBsYWNlKC8+LywgJyZndDsnKTtcblxuICByZXR1cm4gc2FuaXRpc2VkQ29udGVudDtcbn1cbiJdfQ==