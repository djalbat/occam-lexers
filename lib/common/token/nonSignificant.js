'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var contentUtilities = require('../../utilities/content');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    sanitiseContent = contentUtilities.sanitiseContent;

var NonSignificantToken = function () {
  function NonSignificantToken(content, type, innerHTML) {
    _classCallCheck(this, NonSignificantToken);

    this.content = content;
    this.type = type;
    this.innerHTML = innerHTML;
  }

  _createClass(NonSignificantToken, [{
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
    key: 'isSignificantToken',
    value: function isSignificantToken() {
      var significantToken = false;

      return significantToken;
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
        Class = NonSignificantToken;
      }

      var nonSignificantToken = null;

      if (startPosition !== endPosition) {
        var content = this.getContent();

        content = content.substring(startPosition, endPosition); ///

        nonSignificantToken = Class.fromContent(content);
      }

      return nonSignificantToken;
    }
  }], [{
    key: 'fromContentAndType',
    value: function fromContentAndType(content, type) {
      var sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      nonSignificantToken = new NonSignificantToken(content, type, innerHTML);

      return nonSignificantToken;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(Class, content) {
      if (content === undefined) {
        content = Class;
        Class = NonSignificantToken;
      }

      var sanitisedContent = sanitiseContent(content),
          _Class = Class,
          type = _Class.type,
          innerHTML = sanitisedContent,
          nonSignificantToken = new Class(content, type, innerHTML);


      return nonSignificantToken;
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(Class, content) {
      if (content === undefined) {
        content = Class;
        Class = NonSignificantToken;
      }

      var nonSignificantToken = null;

      var _Class2 = Class,
          regularExpression = _Class2.regularExpression,
          matches = content.match(regularExpression);


      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        nonSignificantToken = NonSignificantToken.fromContent(Class, content);
      }

      return nonSignificantToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(Class, content) {
      if (content === undefined) {
        content = Class;
        Class = NonSignificantToken;
      }

      var _Class3 = Class,
          regularExpression = _Class3.regularExpression,
          position = content.search(regularExpression);


      return position;
    }
  }]);

  return NonSignificantToken;
}();

module.exports = NonSignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsImNvbnRlbnRVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0Iiwic2FuaXRpc2VDb250ZW50IiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJ0eXBlIiwiaW5uZXJIVE1MIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsInNpZ25pZmljYW50VG9rZW4iLCJlbmRPZkxpbmVUb2tlbiIsImNvbW1lbnRUb2tlbiIsImZpbGVQYXRoIiwiY2xhc3NOYW1lIiwiaHRtbCIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwidW5kZWZpbmVkIiwibm9uU2lnbmlmaWNhbnRUb2tlbiIsImdldENvbnRlbnQiLCJzdWJzdHJpbmciLCJmcm9tQ29udGVudCIsInNhbml0aXNlZENvbnRlbnQiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJwb3NpdGlvbiIsInNlYXJjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsbUJBQW1CRCxRQUFRLHlCQUFSLENBQXpCOztBQUVNLElBQUVFLGNBQUYsR0FBcUJILFNBQXJCLENBQUVHLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lELGNBRFosQ0FDRUMsS0FERjtBQUFBLElBRUVDLGVBRkYsR0FFc0JILGdCQUZ0QixDQUVFRyxlQUZGOztJQUlBQyxtQjtBQUNKLCtCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQkMsU0FBM0IsRUFBc0M7QUFBQTs7QUFDcEMsU0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0YsT0FBWjtBQUNEOzs7bUNBRWM7QUFDYixhQUFPLEtBQUtFLFNBQVo7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNQyxnQkFBZ0IsS0FBS0gsT0FBTCxDQUFhSSxNQUFuQzs7QUFFQSxhQUFPRCxhQUFQO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsVUFBTUUsbUJBQW1CLEtBQXpCOztBQUVBLGFBQU9BLGdCQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTUMsaUJBQWlCLEtBQXZCOztBQUVBLGFBQU9BLGNBQVA7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1DLGVBQWUsS0FBckI7O0FBRUEsYUFBT0EsWUFBUDtBQUNEOzs7MkJBRU1DLFEsRUFBVTtBQUNmLFVBQU1DLFlBQVksS0FBS1IsSUFBdkI7QUFBQSxVQUE4QjtBQUN4QlMsK0JBQXVCRCxTQUF2QixVQUFxQyxLQUFLUCxTQUExQyxZQUROOztBQUdBLGFBQU9RLElBQVA7QUFDRDs7OzBCQUVLQyxLLEVBQU9DLGEsRUFBZUMsVyxFQUFhO0FBQ3ZDLFVBQUlBLGdCQUFnQkMsU0FBcEIsRUFBK0I7QUFDN0JELHNCQUFjRCxhQUFkO0FBQ0FBLHdCQUFnQkQsS0FBaEI7QUFDQUEsZ0JBQVFaLG1CQUFSO0FBQ0Q7O0FBRUQsVUFBSWdCLHNCQUFzQixJQUExQjs7QUFFQSxVQUFJSCxrQkFBa0JDLFdBQXRCLEVBQW1DO0FBQ2pDLFlBQUliLFVBQVUsS0FBS2dCLFVBQUwsRUFBZDs7QUFFQWhCLGtCQUFVQSxRQUFRaUIsU0FBUixDQUFrQkwsYUFBbEIsRUFBaUNDLFdBQWpDLENBQVYsQ0FIaUMsQ0FHeUI7O0FBRTFERSw4QkFBc0JKLE1BQU1PLFdBQU4sQ0FBa0JsQixPQUFsQixDQUF0QjtBQUNEOztBQUVELGFBQU9lLG1CQUFQO0FBQ0Q7Ozt1Q0FFeUJmLE8sRUFBU0MsSSxFQUFNO0FBQ3ZDLFVBQU1rQixtQkFBbUJyQixnQkFBZ0JFLE9BQWhCLENBQXpCO0FBQUEsVUFDTUUsWUFBWWlCLGdCQURsQjtBQUFBLFVBQ29DO0FBQzlCSiw0QkFBc0IsSUFBSWhCLG1CQUFKLENBQXdCQyxPQUF4QixFQUFpQ0MsSUFBakMsRUFBdUNDLFNBQXZDLENBRjVCOztBQUlBLGFBQU9hLG1CQUFQO0FBQ0Q7OztnQ0FFa0JKLEssRUFBT1gsTyxFQUFTO0FBQ2pDLFVBQUlBLFlBQVljLFNBQWhCLEVBQTJCO0FBQ3pCZCxrQkFBVVcsS0FBVjtBQUNBQSxnQkFBUVosbUJBQVI7QUFDRDs7QUFFSyw2QkFBbUJELGdCQUFnQkUsT0FBaEIsQ0FBbkI7QUFBQSxtQkFDV1csS0FEWDtBQUFBLFVBQ0VWLElBREYsVUFDRUEsSUFERjtBQUFBLFVBRUFDLFNBRkEsR0FFWWlCLGdCQUZaO0FBQUEsVUFHQUosbUJBSEEsR0FHc0IsSUFBSUosS0FBSixDQUFVWCxPQUFWLEVBQW1CQyxJQUFuQixFQUF5QkMsU0FBekIsQ0FIdEI7OztBQUtOLGFBQU9hLG1CQUFQO0FBQ0Q7OztzQ0FFd0JKLEssRUFBT1gsTyxFQUFTO0FBQ3ZDLFVBQUlBLFlBQVljLFNBQWhCLEVBQTJCO0FBQ3pCZCxrQkFBVVcsS0FBVjtBQUNBQSxnQkFBUVosbUJBQVI7QUFDRDs7QUFFRCxVQUFJZ0Isc0JBQXNCLElBQTFCOztBQU51QyxvQkFRVEosS0FSUztBQUFBLFVBUS9CUyxpQkFSK0IsV0FRL0JBLGlCQVIrQjtBQUFBLFVBU2pDQyxPQVRpQyxHQVN2QnJCLFFBQVFzQixLQUFSLENBQWNGLGlCQUFkLENBVHVCOzs7QUFXdkMsVUFBSUMsT0FBSixFQUFhO0FBQ1gsWUFBTUUsYUFBYTFCLE1BQU13QixPQUFOLENBQW5COztBQUVBckIsa0JBQVV1QixVQUFWLENBSFcsQ0FHVzs7QUFFdEJSLDhCQUFzQmhCLG9CQUFvQm1CLFdBQXBCLENBQWdDUCxLQUFoQyxFQUF1Q1gsT0FBdkMsQ0FBdEI7QUFDRDs7QUFFRCxhQUFPZSxtQkFBUDtBQUNEOzs7MENBRTRCSixLLEVBQU9YLE8sRUFBUztBQUMzQyxVQUFJQSxZQUFZYyxTQUFoQixFQUEyQjtBQUN6QmQsa0JBQVVXLEtBQVY7QUFDQUEsZ0JBQVFaLG1CQUFSO0FBQ0Q7O0FBSjBDLG9CQU1iWSxLQU5hO0FBQUEsVUFNbkNTLGlCQU5tQyxXQU1uQ0EsaUJBTm1DO0FBQUEsVUFPckNJLFFBUHFDLEdBTzFCeEIsUUFBUXlCLE1BQVIsQ0FBZUwsaUJBQWYsQ0FQMEI7OztBQVMzQyxhQUFPSSxRQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCNUIsbUJBQWpCIiwiZmlsZSI6Im5vblNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgY29udGVudFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9jb250ZW50Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBzYW5pdGlzZUNvbnRlbnQgfSA9IGNvbnRlbnRVdGlsaXRpZXM7XG5cbmNsYXNzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCB0eXBlLCBpbm5lckhUTUwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldElubmVySFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhUTUw7XG4gIH1cbiAgXG4gIGdldENvbnRlbnRMZW5ndGgoKSB7XG4gICAgY29uc3QgY29udGVudExlbmd0aCA9IHRoaXMuY29udGVudC5sZW5ndGg7XG5cbiAgICByZXR1cm4gY29udGVudExlbmd0aDtcbiAgfVxuXG4gIGlzU2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGlzRW5kT2ZMaW5lVG9rZW4oKSB7XG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW4gPSBmYWxzZTtcblxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbjtcbiAgfVxuXG4gIGlzQ29tbWVudFRva2VuKCkge1xuICAgIGNvbnN0IGNvbW1lbnRUb2tlbiA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIGFzSFRNTChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMudHlwZSwgIC8vL1xuICAgICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke3RoaXMuaW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZShDbGFzcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHtcbiAgICBpZiAoZW5kUG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgZW5kUG9zaXRpb24gPSBzdGFydFBvc2l0aW9uO1xuICAgICAgc3RhcnRQb3NpdGlvbiA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBOb25TaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGxldCBub25TaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uICE9PSBlbmRQb3NpdGlvbikge1xuICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgIC8vL1xuXG4gICAgICBub25TaWduaWZpY2FudFRva2VuID0gQ2xhc3MuZnJvbUNvbnRlbnQoY29udGVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRUeXBlKGNvbnRlbnQsIHR5cGUpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIG5vblNpZ25pZmljYW50VG9rZW4gPSBuZXcgTm9uU2lnbmlmaWNhbnRUb2tlbihjb250ZW50LCB0eXBlLCBpbm5lckhUTUwpO1xuXG4gICAgcmV0dXJuIG5vblNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpIHtcbiAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZW50ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IE5vblNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICB7IHR5cGUgfSA9IENsYXNzLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIG5vblNpZ25pZmljYW50VG9rZW4gPSBuZXcgQ2xhc3MoY29udGVudCwgdHlwZSwgaW5uZXJIVE1MKTtcblxuICAgIHJldHVybiBub25TaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50KSB7XG4gICAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGVudCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBOb25TaWduaWZpY2FudFRva2VuO1xuICAgIH1cblxuICAgIGxldCBub25TaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHsgcmVndWxhckV4cHJlc3Npb24gfSA9IENsYXNzLFxuICAgICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgbm9uU2lnbmlmaWNhbnRUb2tlbiA9IE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoQ2xhc3MsIGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBub25TaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCkge1xuICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gTm9uU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHJlZ3VsYXJFeHByZXNzaW9uIH0gPSBDbGFzcyxcbiAgICAgICAgICBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblNpZ25pZmljYW50VG9rZW47XG4iXX0=