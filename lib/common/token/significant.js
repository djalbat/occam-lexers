'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var contentUtilities = require('../../utilities/content');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    sanitiseContent = contentUtilities.sanitiseContent;

var SignificantToken = function () {
  function SignificantToken(content, type, innerHTML) {
    _classCallCheck(this, SignificantToken);

    this.content = content;
    this.type = type;
    this.innerHTML = innerHTML;
  }

  _createClass(SignificantToken, [{
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getType',
    value: function getType() {
      return this.type;
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
    key: 'isSignificantToken',
    value: function isSignificantToken() {
      var significantToken = true;

      return significantToken;
    }
  }, {
    key: 'isWhitespaceToken',
    value: function isWhitespaceToken() {
      var whitespaceToken = false;

      return whitespaceToken;
    }
  }, {
    key: 'isEndOfLineToken',
    value: function isEndOfLineToken() {
      var endOfLineToken = false;

      return endOfLineToken;
    }
  }, {
    key: 'isCommentToken',
    value: function isCommentToken() {
      var commentToken = false;

      return commentToken;
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
    value: function clone(Class, startPosition, endPosition) {
      if (endPosition === undefined) {
        endPosition = startPosition;
        startPosition = Class;
        Class = SignificantToken;
      }

      var significantToken = null;

      if (startPosition !== endPosition) {
        var content = this.getContent();

        content = content.substring(startPosition, endPosition); ///

        significantToken = Class.fromContent(content);
      }

      return significantToken;
    }
  }], [{
    key: 'fromContentAndType',
    value: function fromContentAndType(content, type) {
      var sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      significantToken = new SignificantToken(content, type, innerHTML);

      return significantToken;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(Class, content) {
      if (content === undefined) {
        content = Class;
        Class = SignificantToken;
      }

      var sanitisedContent = sanitiseContent(content),
          _Class = Class,
          type = _Class.type,
          innerHTML = sanitisedContent,
          significantToken = new Class(content, type, innerHTML);


      return significantToken;
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(Class, content) {
      if (content === undefined) {
        content = Class;
        Class = SignificantToken;
      }

      var significantToken = null;

      var _Class2 = Class,
          regularExpression = _Class2.regularExpression,
          matches = content.match(regularExpression);


      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        significantToken = SignificantToken.fromContent(Class, content);
      }

      return significantToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(Class, content) {
      if (content === undefined) {
        content = Class;
        Class = SignificantToken;
      }

      var _Class3 = Class,
          regularExpression = _Class3.regularExpression,
          position = content.search(regularExpression);


      return position;
    }
  }]);

  return SignificantToken;
}();

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsImNvbnRlbnRVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0Iiwic2FuaXRpc2VDb250ZW50IiwiU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJ0eXBlIiwiaW5uZXJIVE1MIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsInNpZ25pZmljYW50VG9rZW4iLCJ3aGl0ZXNwYWNlVG9rZW4iLCJlbmRPZkxpbmVUb2tlbiIsImNvbW1lbnRUb2tlbiIsImZpbGVQYXRoIiwiY2xhc3NOYW1lIiwiaHRtbCIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwidW5kZWZpbmVkIiwiZ2V0Q29udGVudCIsInN1YnN0cmluZyIsImZyb21Db250ZW50Iiwic2FuaXRpc2VkQ29udGVudCIsInJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsInBvc2l0aW9uIiwic2VhcmNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxtQkFBbUJELFFBQVEseUJBQVIsQ0FBekI7O0FBRU0sSUFBRUUsY0FBRixHQUFxQkgsU0FBckIsQ0FBRUcsY0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDWUQsY0FEWixDQUNFQyxLQURGO0FBQUEsSUFFRUMsZUFGRixHQUVzQkgsZ0JBRnRCLENBRUVHLGVBRkY7O0lBSUFDLGdCO0FBQ0osNEJBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQTJCQyxTQUEzQixFQUFzQztBQUFBOztBQUNwQyxTQUFLRixPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNEOzs7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Q0FFNEJPLEssRUFBT1osTyxFQUFTO0FBQzNDLFVBQUlBLFlBQVllLFNBQWhCLEVBQTJCO0FBQ3pCZixrQkFBVVksS0FBVjtBQUNBQSxnQkFBUWIsZ0JBQVI7QUFDRDs7QUFKMEMsb0JBTWJhLEtBTmE7QUFBQSxVQU1uQ1EsaUJBTm1DLFdBTW5DQSxpQkFObUM7QUFBQSxVQU9yQ0ksUUFQcUMsR0FPMUJ4QixRQUFReUIsTUFBUixDQUFlTCxpQkFBZixDQVAwQjs7O0FBUzNDLGFBQU9JLFFBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUI1QixnQkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBjb250ZW50VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2NvbnRlbnQnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHNhbml0aXNlQ29udGVudCB9ID0gY29udGVudFV0aWxpdGllcztcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIHR5cGUsIGlubmVySFRNTCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgfVxuICBcbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRJbm5lckhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0Q29udGVudExlbmd0aCgpIHtcbiAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gdGhpcy5jb250ZW50Lmxlbmd0aDtcblxuICAgIHJldHVybiBjb250ZW50TGVuZ3RoO1xuICB9XG5cbiAgaXNTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSB0cnVlO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc1doaXRlc3BhY2VUb2tlbigpIHtcbiAgICBjb25zdCB3aGl0ZXNwYWNlVG9rZW4gPSBmYWxzZTtcblxuICAgIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG4gIH1cblxuICBpc0VuZE9mTGluZVRva2VuKCkge1xuICAgIGNvbnN0IGVuZE9mTGluZVRva2VuID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW47XG4gIH1cblxuICBpc0NvbW1lbnRUb2tlbigpIHtcbiAgICBjb25zdCBjb21tZW50VG9rZW4gPSBmYWxzZTtcblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cblxuICBhc0hUTUwoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLnR5cGUsICAvLy9cbiAgICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHt0aGlzLmlubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7XG4gICAgaWYgKGVuZFBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZFBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbjtcbiAgICAgIHN0YXJ0UG9zaXRpb24gPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBsZXQgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7ICAvLy9cblxuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzLmZyb21Db250ZW50KGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kVHlwZShjb250ZW50LCB0eXBlKSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV3IFNpZ25pZmljYW50VG9rZW4oY29udGVudCwgdHlwZSwgaW5uZXJIVE1MKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KENsYXNzLCBjb250ZW50KSB7XG4gICAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGVudCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgeyB0eXBlIH0gPSBDbGFzcyxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIHR5cGUsIGlubmVySFRNTCk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCkge1xuICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBsZXQgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IHJlZ3VsYXJFeHByZXNzaW9uIH0gPSBDbGFzcyxcbiAgICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KENsYXNzLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHtcbiAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZW50ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3QgeyByZWd1bGFyRXhwcmVzc2lvbiB9ID0gQ2xhc3MsXG4gICAgICAgICAgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuO1xuIl19