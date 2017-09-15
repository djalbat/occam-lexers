'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tokenUtil = require('../../util/token');

var NonSignificantToken = function () {
  function NonSignificantToken(content, line, html) {
    _classCallCheck(this, NonSignificantToken);

    this.content = content;
    this.line = line;
    this.html = html;
  }

  _createClass(NonSignificantToken, [{
    key: 'isSignificant',
    value: function isSignificant() {
      var significant = false;

      return significant;
    }
  }, {
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

      var sanitisedContent = tokenUtil.sanitiseContent(content),
          html = sanitisedContent,
          token = new Class(content, line, html);

      return token;
    }
  }]);

  return NonSignificantToken;
}();

module.exports = NonSignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsidG9rZW5VdGlsIiwicmVxdWlyZSIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJjb250ZW50IiwibGluZSIsImh0bWwiLCJzaWduaWZpY2FudCIsImxlbmd0aCIsImZpbGVQYXRoIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY2xvbmUiLCJDbGFzcyIsInRva2VuIiwiZ2V0TGVuZ3RoIiwiY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbiIsImdldExpbmUiLCJnZXRDb250ZW50Iiwic3Vic3RyaW5nIiwiZnJvbUNvbnRlbnRBbmRMaW5lIiwidW5kZWZpbmVkIiwic2FuaXRpc2VkQ29udGVudCIsInNhbml0aXNlQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGtCQUFSLENBQWxCOztJQUVNQyxtQjtBQUNKLCtCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQkMsSUFBM0IsRUFBaUM7QUFBQTs7QUFDL0IsU0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7b0NBRWU7QUFDZCxVQUFNQyxjQUFjLEtBQXBCOztBQUVBLGFBQU9BLFdBQVA7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLSCxPQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLRixPQUFMLENBQWFJLE1BQXBCLENBRFUsQ0FDa0I7QUFDN0I7OzsyQkFFTUMsUSxFQUFVO0FBQ2YsVUFBTUgsT0FBTyxLQUFLQSxJQUFsQixDQURlLENBQ1M7O0FBRXhCLGFBQU9BLElBQVA7QUFDRDs7OzBCQUVLSSxhLEVBQWVDLFcsRUFBYTtBQUFFLGFBQU9SLG9CQUFvQlMsS0FBcEIsQ0FBMEJULG1CQUExQixFQUErQyxJQUEvQyxFQUFxRE8sYUFBckQsRUFBb0VDLFdBQXBFLENBQVA7QUFBMEY7Ozs0QkFFekI7QUFBQSxVQUF4RkUsS0FBd0YsdUVBQWhGVixtQkFBZ0Y7QUFBQSxVQUEzRFcsS0FBMkQ7QUFBQSxVQUFwREosYUFBb0QsdUVBQXBDLENBQW9DO0FBQUEsVUFBakNDLFdBQWlDLHVFQUFuQkcsTUFBTUMsU0FBTixFQUFtQjs7QUFDbkcsVUFBSUMsNEJBQTRCLElBQWhDOztBQUVBLFVBQUlOLGtCQUFrQkMsV0FBdEIsRUFBbUM7QUFDakMsWUFBTU4sT0FBT1MsTUFBTUcsT0FBTixFQUFiOztBQUVBLFlBQUliLFVBQVVVLE1BQU1JLFVBQU4sRUFBZDs7QUFFQWQsa0JBQVVBLFFBQVFlLFNBQVIsQ0FBa0JULGFBQWxCLEVBQWlDQyxXQUFqQyxDQUFWOztBQUVBSyxvQ0FBNEJILE1BQU1PLGtCQUFOLENBQXlCUCxLQUF6QixFQUFnQ1QsT0FBaEMsRUFBeUNDLElBQXpDLENBQTVCO0FBQ0Q7O0FBRUQsYUFBT1cseUJBQVA7QUFDRDs7O3VDQUV5QkgsSyxFQUFPVCxPLEVBQVNDLEksRUFBTTtBQUM5QyxVQUFJQSxTQUFTZ0IsU0FBYixFQUF3QjtBQUN0QmhCLGVBQU9ELE9BQVA7QUFDQUEsa0JBQVVTLEtBQVY7QUFDQUEsZ0JBQVFWLG1CQUFSO0FBQ0Q7O0FBRUQsVUFBTW1CLG1CQUFtQnJCLFVBQVVzQixlQUFWLENBQTBCbkIsT0FBMUIsQ0FBekI7QUFBQSxVQUNNRSxPQUFPZ0IsZ0JBRGI7QUFBQSxVQUVNUixRQUFRLElBQUlELEtBQUosQ0FBVVQsT0FBVixFQUFtQkMsSUFBbkIsRUFBeUJDLElBQXpCLENBRmQ7O0FBSUEsYUFBT1EsS0FBUDtBQUNEOzs7Ozs7QUFHSFUsT0FBT0MsT0FBUCxHQUFpQnRCLG1CQUFqQiIsImZpbGUiOiJub25TaWduaWZpY2FudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdG9rZW5VdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC90b2tlbicpO1xuXG5jbGFzcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgaHRtbCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB0aGlzLmh0bWwgPSBodG1sO1xuICB9XG5cbiAgaXNTaWduaWZpY2FudCgpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50O1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmh0bWw7XG4gIH1cbiAgXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aDsgLy8vXG4gIH1cbiAgXG4gIGFzSFRNTChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmh0bWw7IC8vL1xuICAgIFxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uY2xvbmUoTm9uU2lnbmlmaWNhbnRUb2tlbiwgdGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzID0gTm9uU2lnbmlmaWNhbnRUb2tlbiwgdG9rZW4sIHN0YXJ0UG9zaXRpb24gPSAwLCBlbmRQb3NpdGlvbiA9IHRva2VuLmdldExlbmd0aCgpKSB7XG4gICAgbGV0IGNsb25lZE5vblNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBsaW5lID0gdG9rZW4uZ2V0TGluZSgpO1xuXG4gICAgICBsZXQgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcbiAgICAgIFxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgICAgY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzLmZyb21Db250ZW50QW5kTGluZShDbGFzcywgY29udGVudCwgbGluZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lZE5vblNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoQ2xhc3MsIGNvbnRlbnQsIGxpbmUpIHtcbiAgICBpZiAobGluZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsaW5lID0gY29udGVudDtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gTm9uU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gdG9rZW5VdGlsLnNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBodG1sID0gc2FuaXRpc2VkQ29udGVudCxcbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCBodG1sKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblNpZ25pZmljYW50VG9rZW47XG4iXX0=