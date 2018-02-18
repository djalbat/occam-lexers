'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var contentUtilities = require('../../utilities/content');

var sanitiseContent = contentUtilities.sanitiseContent;

var NonSignificantToken = function () {
  function NonSignificantToken(content, line, html) {
    _classCallCheck(this, NonSignificantToken);

    this.content = content;
    this.line = line;
    this.html = html;
  }

  _createClass(NonSignificantToken, [{
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
    key: 'isSignificantToken',
    value: function isSignificantToken() {
      var significantToken = false;

      return significantToken;
    }
  }, {
    key: 'asHTML',
    value: function asHTML(filePath) {
      var html = this.html; ///

      return html;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return NonSignificantToken.clone(NonSignificantToken, this, startPosition, endPosition);
    }
  }], [{
    key: 'clone',
    value: function clone() {
      var Class = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NonSignificantToken;
      var token = arguments[1];
      var startPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var endPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : token.getLength();

      var clonedNonSignificantToken = null;

      if (startPosition !== endPosition) {
        var line = token.getLine();

        var content = token.getContent();

        content = content.substring(startPosition, endPosition);

        clonedNonSignificantToken = Class.fromContentAndLine(Class, content, line);
      }

      return clonedNonSignificantToken;
    }
  }, {
    key: 'fromContentAndLine',
    value: function fromContentAndLine(Class, content, line) {
      if (line === undefined) {
        line = content;
        content = Class;
        Class = NonSignificantToken;
      }

      var sanitisedContent = sanitiseContent(content),
          html = sanitisedContent,
          token = new Class(content, line, html);

      return token;
    }
  }]);

  return NonSignificantToken;
}();

module.exports = NonSignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiY29udGVudFV0aWxpdGllcyIsInJlcXVpcmUiLCJzYW5pdGlzZUNvbnRlbnQiLCJOb25TaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsImxpbmUiLCJodG1sIiwibGVuZ3RoIiwic2lnbmlmaWNhbnRUb2tlbiIsImZpbGVQYXRoIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY2xvbmUiLCJDbGFzcyIsInRva2VuIiwiZ2V0TGVuZ3RoIiwiY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbiIsImdldExpbmUiLCJnZXRDb250ZW50Iiwic3Vic3RyaW5nIiwiZnJvbUNvbnRlbnRBbmRMaW5lIiwidW5kZWZpbmVkIiwic2FuaXRpc2VkQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxtQkFBbUJDLFFBQVEseUJBQVIsQ0FBekI7O0lBRVFDLGUsR0FBb0JGLGdCLENBQXBCRSxlOztJQUVGQyxtQjtBQUNKLCtCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQkMsSUFBM0IsRUFBaUM7QUFBQTs7QUFDL0IsU0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtGLE9BQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtGLE9BQUwsQ0FBYUcsTUFBcEIsQ0FEVSxDQUNrQjtBQUM3Qjs7O3lDQUVvQjtBQUNuQixVQUFNQyxtQkFBbUIsS0FBekI7O0FBRUEsYUFBT0EsZ0JBQVA7QUFDRDs7OzJCQUVNQyxRLEVBQVU7QUFDZixVQUFNSCxPQUFPLEtBQUtBLElBQWxCLENBRGUsQ0FDUzs7QUFFeEIsYUFBT0EsSUFBUDtBQUNEOzs7MEJBRUtJLGEsRUFBZUMsVyxFQUFhO0FBQUUsYUFBT1Isb0JBQW9CUyxLQUFwQixDQUEwQlQsbUJBQTFCLEVBQStDLElBQS9DLEVBQXFETyxhQUFyRCxFQUFvRUMsV0FBcEUsQ0FBUDtBQUEwRjs7OzRCQUV6QjtBQUFBLFVBQXhGRSxLQUF3Rix1RUFBaEZWLG1CQUFnRjtBQUFBLFVBQTNEVyxLQUEyRDtBQUFBLFVBQXBESixhQUFvRCx1RUFBcEMsQ0FBb0M7QUFBQSxVQUFqQ0MsV0FBaUMsdUVBQW5CRyxNQUFNQyxTQUFOLEVBQW1COztBQUNuRyxVQUFJQyw0QkFBNEIsSUFBaEM7O0FBRUEsVUFBSU4sa0JBQWtCQyxXQUF0QixFQUFtQztBQUNqQyxZQUFNTixPQUFPUyxNQUFNRyxPQUFOLEVBQWI7O0FBRUEsWUFBSWIsVUFBVVUsTUFBTUksVUFBTixFQUFkOztBQUVBZCxrQkFBVUEsUUFBUWUsU0FBUixDQUFrQlQsYUFBbEIsRUFBaUNDLFdBQWpDLENBQVY7O0FBRUFLLG9DQUE0QkgsTUFBTU8sa0JBQU4sQ0FBeUJQLEtBQXpCLEVBQWdDVCxPQUFoQyxFQUF5Q0MsSUFBekMsQ0FBNUI7QUFDRDs7QUFFRCxhQUFPVyx5QkFBUDtBQUNEOzs7dUNBRXlCSCxLLEVBQU9ULE8sRUFBU0MsSSxFQUFNO0FBQzlDLFVBQUlBLFNBQVNnQixTQUFiLEVBQXdCO0FBQ3RCaEIsZUFBT0QsT0FBUDtBQUNBQSxrQkFBVVMsS0FBVjtBQUNBQSxnQkFBUVYsbUJBQVI7QUFDRDs7QUFFRCxVQUFNbUIsbUJBQW1CcEIsZ0JBQWdCRSxPQUFoQixDQUF6QjtBQUFBLFVBQ01FLE9BQU9nQixnQkFEYjtBQUFBLFVBRU1SLFFBQVEsSUFBSUQsS0FBSixDQUFVVCxPQUFWLEVBQW1CQyxJQUFuQixFQUF5QkMsSUFBekIsQ0FGZDs7QUFJQSxhQUFPUSxLQUFQO0FBQ0Q7Ozs7OztBQUdIUyxPQUFPQyxPQUFQLEdBQWlCckIsbUJBQWpCIiwiZmlsZSI6Im5vblNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb250ZW50VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2NvbnRlbnQnKTtcblxuY29uc3QgeyBzYW5pdGlzZUNvbnRlbnQgfSA9IGNvbnRlbnRVdGlsaXRpZXM7XG5cbmNsYXNzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCBodG1sKSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIHRoaXMuaHRtbCA9IGh0bWw7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHRtbDtcbiAgfVxuICBcbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoOyAvLy9cbiAgfVxuXG4gIGlzU2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGFzSFRNTChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmh0bWw7IC8vL1xuICAgIFxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uY2xvbmUoTm9uU2lnbmlmaWNhbnRUb2tlbiwgdGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzID0gTm9uU2lnbmlmaWNhbnRUb2tlbiwgdG9rZW4sIHN0YXJ0UG9zaXRpb24gPSAwLCBlbmRQb3NpdGlvbiA9IHRva2VuLmdldExlbmd0aCgpKSB7XG4gICAgbGV0IGNsb25lZE5vblNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBsaW5lID0gdG9rZW4uZ2V0TGluZSgpO1xuXG4gICAgICBsZXQgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcbiAgICAgIFxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgICAgY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzLmZyb21Db250ZW50QW5kTGluZShDbGFzcywgY29udGVudCwgbGluZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lZE5vblNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoQ2xhc3MsIGNvbnRlbnQsIGxpbmUpIHtcbiAgICBpZiAobGluZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsaW5lID0gY29udGVudDtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gTm9uU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGh0bWwgPSBzYW5pdGlzZWRDb250ZW50LFxuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIGh0bWwpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==