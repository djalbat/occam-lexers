'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var types = require('./types');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    endOfLineType = types.endOfLineType,
    whitespaceType = types.whitespaceType,
    commentType = types.commentType,
    multiLineCommentType = types.multiLineCommentType,
    singleLineCommentType = types.singleLineCommentType;

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
    key: 'isSignificant',
    value: function isSignificant() {
      return this.significant;
    }
  }, {
    key: 'getContentLength',
    value: function getContentLength() {
      var contentLength = this.content.length;

      return contentLength;
    }
  }, {
    key: 'isEndOfLineToken',
    value: function isEndOfLineToken() {
      var endOfLineToken = this.type === endOfLineType; ///

      return endOfLineToken;
    }
  }, {
    key: 'isWhitespaceToken',
    value: function isWhitespaceToken() {
      var whitespaceToken = this.type === whitespaceType; ///

      return whitespaceToken;
    }
  }, {
    key: 'isCommentToken',
    value: function isCommentToken() {
      var commentToken = this.type.includes(commentType); ///

      return commentToken;
    }
  }, {
    key: 'isMultiLineCommentToken',
    value: function isMultiLineCommentToken() {
      var multiLineCommentToken = this.type.includes(multiLineCommentType); ///

      return multiLineCommentToken;
    }
  }, {
    key: 'isSingleLineCommentToken',
    value: function isSingleLineCommentToken() {
      var singleLineCommentToken = this.type.includes(singleLineCommentType); ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInR5cGVzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImVuZE9mTGluZVR5cGUiLCJ3aGl0ZXNwYWNlVHlwZSIsImNvbW1lbnRUeXBlIiwibXVsdGlMaW5lQ29tbWVudFR5cGUiLCJzaW5nbGVMaW5lQ29tbWVudFR5cGUiLCJUb2tlbiIsInR5cGUiLCJjb250ZW50IiwiaW5uZXJIVE1MIiwic2lnbmlmaWNhbnQiLCJjb250ZW50TGVuZ3RoIiwibGVuZ3RoIiwiZW5kT2ZMaW5lVG9rZW4iLCJ3aGl0ZXNwYWNlVG9rZW4iLCJjb21tZW50VG9rZW4iLCJpbmNsdWRlcyIsIm11bHRpTGluZUNvbW1lbnRUb2tlbiIsInNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJmaWxlUGF0aCIsImNsYXNzTmFtZSIsImh0bWwiLCJDbGFzcyIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsInRva2VuIiwiZ2V0Q29udGVudCIsInN1YnN0cmluZyIsImdldFR5cGUiLCJzYW5pdGlzZWRDb250ZW50Iiwic2FuaXRpc2VDb250ZW50IiwicmVndWxhckV4cHJlc3Npb24iLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwicG9zaXRpb24iLCJzZWFyY2giLCJtb2R1bGUiLCJleHBvcnRzIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxRQUFRRCxRQUFRLFNBQVIsQ0FBZDs7QUFFTSxJQUFFRSxjQUFGLEdBQXFCSCxTQUFyQixDQUFFRyxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZRCxjQURaLENBQ0VDLEtBREY7QUFBQSxJQUVFQyxhQUZGLEdBRThGSCxLQUY5RixDQUVFRyxhQUZGO0FBQUEsSUFFaUJDLGNBRmpCLEdBRThGSixLQUY5RixDQUVpQkksY0FGakI7QUFB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U3dCLGVBQVQsQ0FBeUJ0QixPQUF6QixFQUFrQztBQUNoQyxNQUFNcUIsbUJBQW1CckIsUUFBUStCLE9BQVIsQ0FBZ0IsR0FBaEIsRUFBb0IsT0FBcEIsRUFBNkJBLE9BQTdCLENBQXFDLEdBQXJDLEVBQTBDLE1BQTFDLEVBQWtEQSxPQUFsRCxDQUEwRCxHQUExRCxFQUErRCxNQUEvRCxDQUF6Qjs7QUFFQSxTQUFPVixnQkFBUDtBQUNEIiwiZmlsZSI6InRva2VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuL3R5cGVzJyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBlbmRPZkxpbmVUeXBlLCB3aGl0ZXNwYWNlVHlwZSwgY29tbWVudFR5cGUsIG11bHRpTGluZUNvbW1lbnRUeXBlLCBzaW5nbGVMaW5lQ29tbWVudFR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgdGhpcy5zaWduaWZpY2FudCA9IHNpZ25pZmljYW50O1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRJbm5lckhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xuICB9XG5cbiAgaXNTaWduaWZpY2FudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudDtcbiAgfVxuICBcbiAgZ2V0Q29udGVudExlbmd0aCgpIHtcbiAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gdGhpcy5jb250ZW50Lmxlbmd0aDtcblxuICAgIHJldHVybiBjb250ZW50TGVuZ3RoO1xuICB9XG5cbiAgaXNFbmRPZkxpbmVUb2tlbigpIHtcbiAgICBjb25zdCBlbmRPZkxpbmVUb2tlbiA9ICh0aGlzLnR5cGUgPT09IGVuZE9mTGluZVR5cGUpOyAvLy9cblxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbjtcbiAgfVxuXG4gIGlzV2hpdGVzcGFjZVRva2VuKCkge1xuICAgIGNvbnN0IHdoaXRlc3BhY2VUb2tlbiA9ICh0aGlzLnR5cGUgPT09IHdoaXRlc3BhY2VUeXBlKTsgLy8vXG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgaXNDb21tZW50VG9rZW4oKSB7XG4gICAgY29uc3QgY29tbWVudFRva2VuID0gdGhpcy50eXBlLmluY2x1ZGVzKGNvbW1lbnRUeXBlKTsgLy8vXG5cbiAgICByZXR1cm4gY29tbWVudFRva2VuO1xuICB9XG5cbiAgaXNNdWx0aUxpbmVDb21tZW50VG9rZW4oKSB7XG4gICAgY29uc3QgbXVsdGlMaW5lQ29tbWVudFRva2VuID0gdGhpcy50eXBlLmluY2x1ZGVzKG11bHRpTGluZUNvbW1lbnRUeXBlKTsgLy8vXG5cbiAgICByZXR1cm4gbXVsdGlMaW5lQ29tbWVudFRva2VuO1xuICB9XG5cbiAgaXNTaW5nbGVMaW5lQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IHNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSB0aGlzLnR5cGUuaW5jbHVkZXMoc2luZ2xlTGluZUNvbW1lbnRUeXBlKTsgLy8vXG5cbiAgICByZXR1cm4gc2luZ2xlTGluZUNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIGFzSFRNTChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMudHlwZSwgIC8vL1xuICAgICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke3RoaXMuaW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIHNpZ25pZmljYW50KSB7XG4gICAgbGV0IHRva2VuID0gbnVsbDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uICE9PSBlbmRQb3NpdGlvbikge1xuICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgIC8vL1xuXG4gICAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgICBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudDsgLy8vXG5cbiAgICAgIHRva2VuID0gbmV3IENsYXNzKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIHNpZ25pZmljYW50KSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyh0eXBlLCBjb250ZW50LCBpbm5lckhUTUwsIHNpZ25pZmljYW50KTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChDbGFzcywgY29udGVudCwgc2lnbmlmaWNhbnQpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IENsYXNzLFxuICAgICAgICAgIHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQsIHNpZ25pZmljYW50KSB7XG4gICAgbGV0IHRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHsgcmVndWxhckV4cHJlc3Npb24gfSA9IENsYXNzLFxuICAgICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgY29uc3QgeyB0eXBlIH0gPSBDbGFzcyxcbiAgICAgICAgICAgIHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50OyAvLy9cblxuICAgICAgdG9rZW4gPSBuZXcgQ2xhc3ModHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCkge1xuICAgIGNvbnN0IHsgcmVndWxhckV4cHJlc3Npb24gfSA9IENsYXNzLFxuICAgICAgICAgIHBvc2l0aW9uID0gY29udGVudC5zZWFyY2gocmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9rZW47XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ29udGVudChjb250ZW50KSB7XG4gIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoLyYvLCcmYW1wOycpLnJlcGxhY2UoLzwvLCAnJmx0OycpLnJlcGxhY2UoLz4vLCAnJmd0OycpO1xuXG4gIHJldHVybiBzYW5pdGlzZWRDb250ZW50O1xufVxuIl19