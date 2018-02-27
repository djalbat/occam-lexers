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
    value: function clone(Class) {
      var startPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var endPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.getLength();

      var nonSignificantToken = null;

      if (startPosition !== endPosition) {
        var content = this.getContent();

        content = content.substring(startPosition, endPosition); ///

        nonSignificantToken = Class.fromContent(content);
      }

      return nonSignificantToken;
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(Class, content) {
      var sanitisedContent = sanitiseContent(content),
          type = Class.type,
          innerHTML = sanitisedContent,
          nonSignificantToken = new Class(content, type, innerHTML);


      return nonSignificantToken;
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(Class, content) {
      var nonSignificantToken = null;

      var regularExpression = Class.regularExpression,
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
      var regularExpression = Class.regularExpression,
          position = content.search(regularExpression);


      return position;
    }
  }]);

  return NonSignificantToken;
}();

module.exports = NonSignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsImNvbnRlbnRVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0Iiwic2FuaXRpc2VDb250ZW50IiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJ0eXBlIiwiaW5uZXJIVE1MIiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsInNpZ25pZmljYW50VG9rZW4iLCJlbmRPZkxpbmVUb2tlbiIsImNvbW1lbnRUb2tlbiIsImZpbGVQYXRoIiwiY2xhc3NOYW1lIiwiaHRtbCIsIkNsYXNzIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiZ2V0TGVuZ3RoIiwibm9uU2lnbmlmaWNhbnRUb2tlbiIsImdldENvbnRlbnQiLCJzdWJzdHJpbmciLCJmcm9tQ29udGVudCIsInNhbml0aXNlZENvbnRlbnQiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJwb3NpdGlvbiIsInNlYXJjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsbUJBQW1CRCxRQUFRLHlCQUFSLENBQXpCOztBQUVNLElBQUVFLGNBQUYsR0FBcUJILFNBQXJCLENBQUVHLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lELGNBRFosQ0FDRUMsS0FERjtBQUFBLElBRUVDLGVBRkYsR0FFc0JILGdCQUZ0QixDQUVFRyxlQUZGOztJQUlBQyxtQjtBQUNKLCtCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQkMsU0FBM0IsRUFBc0M7QUFBQTs7QUFDcEMsU0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0YsT0FBWjtBQUNEOzs7bUNBRWM7QUFDYixhQUFPLEtBQUtFLFNBQVo7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNQyxnQkFBZ0IsS0FBS0gsT0FBTCxDQUFhSSxNQUFuQzs7QUFFQSxhQUFPRCxhQUFQO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsVUFBTUUsbUJBQW1CLEtBQXpCOztBQUVBLGFBQU9BLGdCQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTUMsaUJBQWlCLEtBQXZCOztBQUVBLGFBQU9BLGNBQVA7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1DLGVBQWUsS0FBckI7O0FBRUEsYUFBT0EsWUFBUDtBQUNEOzs7MkJBRU1DLFEsRUFBVTtBQUNmLFVBQU1DLFlBQVksS0FBS1IsSUFBdkI7QUFBQSxVQUE4QjtBQUN4QlMsK0JBQXVCRCxTQUF2QixVQUFxQyxLQUFLUCxTQUExQyxZQUROOztBQUdBLGFBQU9RLElBQVA7QUFDRDs7OzBCQUVLQyxLLEVBQTBEO0FBQUEsVUFBbkRDLGFBQW1ELHVFQUFuQyxDQUFtQztBQUFBLFVBQWhDQyxXQUFnQyx1RUFBbEIsS0FBS0MsU0FBTCxFQUFrQjs7QUFDOUQsVUFBSUMsc0JBQXNCLElBQTFCOztBQUVBLFVBQUlILGtCQUFrQkMsV0FBdEIsRUFBbUM7QUFDakMsWUFBSWIsVUFBVSxLQUFLZ0IsVUFBTCxFQUFkOztBQUVBaEIsa0JBQVVBLFFBQVFpQixTQUFSLENBQWtCTCxhQUFsQixFQUFpQ0MsV0FBakMsQ0FBVixDQUhpQyxDQUd5Qjs7QUFFMURFLDhCQUFzQkosTUFBTU8sV0FBTixDQUFrQmxCLE9BQWxCLENBQXRCO0FBQ0Q7O0FBRUQsYUFBT2UsbUJBQVA7QUFDRDs7O2dDQUVrQkosSyxFQUFPWCxPLEVBQVM7QUFDM0IsNkJBQW1CRixnQkFBZ0JFLE9BQWhCLENBQW5CO0FBQUEsVUFDRUMsSUFERixHQUNXVSxLQURYLENBQ0VWLElBREY7QUFBQSxVQUVBQyxTQUZBLEdBRVlpQixnQkFGWjtBQUFBLFVBR0FKLG1CQUhBLEdBR3NCLElBQUlKLEtBQUosQ0FBVVgsT0FBVixFQUFtQkMsSUFBbkIsRUFBeUJDLFNBQXpCLENBSHRCOzs7QUFLTixhQUFPYSxtQkFBUDtBQUNEOzs7c0NBRXdCSixLLEVBQU9YLE8sRUFBUztBQUN2QyxVQUFJZSxzQkFBc0IsSUFBMUI7O0FBRU0sVUFBRUssaUJBQUYsR0FBd0JULEtBQXhCLENBQUVTLGlCQUFGO0FBQUEsVUFDQUMsT0FEQSxHQUNVckIsUUFBUXNCLEtBQVIsQ0FBY0YsaUJBQWQsQ0FEVjs7O0FBR04sVUFBSUMsT0FBSixFQUFhO0FBQ1gsWUFBTUUsYUFBYTFCLE1BQU13QixPQUFOLENBQW5COztBQUVBckIsa0JBQVV1QixVQUFWLENBSFcsQ0FHVzs7QUFFdEJSLDhCQUFzQmhCLG9CQUFvQm1CLFdBQXBCLENBQWdDUCxLQUFoQyxFQUF1Q1gsT0FBdkMsQ0FBdEI7QUFDRDs7QUFFRCxhQUFPZSxtQkFBUDtBQUNEOzs7MENBRTRCSixLLEVBQU9YLE8sRUFBUztBQUNyQyxVQUFFb0IsaUJBQUYsR0FBd0JULEtBQXhCLENBQUVTLGlCQUFGO0FBQUEsVUFDQUksUUFEQSxHQUNXeEIsUUFBUXlCLE1BQVIsQ0FBZUwsaUJBQWYsQ0FEWDs7O0FBR04sYUFBT0ksUUFBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQjVCLG1CQUFqQiIsImZpbGUiOiJub25TaWduaWZpY2FudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IGNvbnRlbnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvY29udGVudCcpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgc2FuaXRpc2VDb250ZW50IH0gPSBjb250ZW50VXRpbGl0aWVzO1xuXG5jbGFzcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgdHlwZSwgaW5uZXJIVE1MKSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRJbm5lckhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xuICB9XG4gIFxuICBnZXRDb250ZW50TGVuZ3RoKCkge1xuICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSB0aGlzLmNvbnRlbnQubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRMZW5ndGg7XG4gIH1cblxuICBpc1NpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc0VuZE9mTGluZVRva2VuKCkge1xuICAgIGNvbnN0IGVuZE9mTGluZVRva2VuID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lVG9rZW47XG4gIH1cblxuICBpc0NvbW1lbnRUb2tlbigpIHtcbiAgICBjb25zdCBjb21tZW50VG9rZW4gPSBmYWxzZTtcblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cblxuICBhc0hUTUwoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLnR5cGUsICAvLy9cbiAgICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHt0aGlzLmlubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24gPSAwLCBlbmRQb3NpdGlvbiA9IHRoaXMuZ2V0TGVuZ3RoKCkpIHtcbiAgICBsZXQgbm9uU2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7ICAvLy9cblxuICAgICAgbm9uU2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzLmZyb21Db250ZW50KGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBub25TaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KENsYXNzLCBjb250ZW50KSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICB7IHR5cGUgfSA9IENsYXNzLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIG5vblNpZ25pZmljYW50VG9rZW4gPSBuZXcgQ2xhc3MoY29udGVudCwgdHlwZSwgaW5uZXJIVE1MKTtcblxuICAgIHJldHVybiBub25TaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50KSB7XG4gICAgbGV0IG5vblNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgeyByZWd1bGFyRXhwcmVzc2lvbiB9ID0gQ2xhc3MsXG4gICAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2gocmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBub25TaWduaWZpY2FudFRva2VuID0gTm9uU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChDbGFzcywgY29udGVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50KSB7XG4gICAgY29uc3QgeyByZWd1bGFyRXhwcmVzc2lvbiB9ID0gQ2xhc3MsXG4gICAgICAgICAgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25TaWduaWZpY2FudFRva2VuO1xuIl19