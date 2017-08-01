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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsidG9rZW5VdGlsIiwicmVxdWlyZSIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJjb250ZW50IiwibGluZSIsImh0bWwiLCJzaWduaWZpY2FudCIsImxlbmd0aCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNsb25lIiwiQ2xhc3MiLCJ0b2tlbiIsImdldExlbmd0aCIsImNsb25lZE5vblNpZ25pZmljYW50VG9rZW4iLCJnZXRMaW5lIiwiZ2V0Q29udGVudCIsInN1YnN0cmluZyIsImZyb21Db250ZW50QW5kTGluZSIsInVuZGVmaW5lZCIsInNhbml0aXNlZENvbnRlbnQiLCJzYW5pdGlzZUNvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxrQkFBUixDQUFsQjs7SUFFTUMsbUI7QUFDSiwrQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O29DQUVlO0FBQ2QsVUFBTUMsY0FBYyxLQUFwQjs7QUFFQSxhQUFPQSxXQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0gsT0FBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0YsT0FBTCxDQUFhSSxNQUFwQixDQURVLENBQ2tCO0FBQzdCOzs7MEJBRUtDLGEsRUFBZUMsVyxFQUFhO0FBQUUsYUFBT1Asb0JBQW9CUSxLQUFwQixDQUEwQlIsbUJBQTFCLEVBQStDLElBQS9DLEVBQXFETSxhQUFyRCxFQUFvRUMsV0FBcEUsQ0FBUDtBQUEwRjs7OzRCQUV6QjtBQUFBLFVBQXhGRSxLQUF3Rix1RUFBaEZULG1CQUFnRjtBQUFBLFVBQTNEVSxLQUEyRDtBQUFBLFVBQXBESixhQUFvRCx1RUFBcEMsQ0FBb0M7QUFBQSxVQUFqQ0MsV0FBaUMsdUVBQW5CRyxNQUFNQyxTQUFOLEVBQW1COztBQUNuRyxVQUFJQyw0QkFBNEIsSUFBaEM7O0FBRUEsVUFBSU4sa0JBQWtCQyxXQUF0QixFQUFtQztBQUNqQyxZQUFNTCxPQUFPUSxNQUFNRyxPQUFOLEVBQWI7O0FBRUEsWUFBSVosVUFBVVMsTUFBTUksVUFBTixFQUFkOztBQUVBYixrQkFBVUEsUUFBUWMsU0FBUixDQUFrQlQsYUFBbEIsRUFBaUNDLFdBQWpDLENBQVY7O0FBRUFLLG9DQUE0QkgsTUFBTU8sa0JBQU4sQ0FBeUJQLEtBQXpCLEVBQWdDUixPQUFoQyxFQUF5Q0MsSUFBekMsQ0FBNUI7QUFDRDs7QUFFRCxhQUFPVSx5QkFBUDtBQUNEOzs7dUNBRXlCSCxLLEVBQU9SLE8sRUFBU0MsSSxFQUFNO0FBQzlDLFVBQUlBLFNBQVNlLFNBQWIsRUFBd0I7QUFDdEJmLGVBQU9ELE9BQVA7QUFDQUEsa0JBQVVRLEtBQVY7QUFDQUEsZ0JBQVFULG1CQUFSO0FBQ0Q7O0FBRUQsVUFBTWtCLG1CQUFtQnBCLFVBQVVxQixlQUFWLENBQTBCbEIsT0FBMUIsQ0FBekI7QUFBQSxVQUNNRSxPQUFPZSxnQkFEYjtBQUFBLFVBRU1SLFFBQVEsSUFBSUQsS0FBSixDQUFVUixPQUFWLEVBQW1CQyxJQUFuQixFQUF5QkMsSUFBekIsQ0FGZDs7QUFJQSxhQUFPTyxLQUFQO0FBQ0Q7Ozs7OztBQUdIVSxPQUFPQyxPQUFQLEdBQWlCckIsbUJBQWpCIiwiZmlsZSI6Im5vblNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0b2tlblV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL3Rva2VuJyk7XG5cbmNsYXNzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCBodG1sKSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIHRoaXMuaHRtbCA9IGh0bWw7XG4gIH1cblxuICBpc1NpZ25pZmljYW50KCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnQ7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHRtbDtcbiAgfVxuICBcbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoOyAvLy9cbiAgfVxuICBcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uY2xvbmUoTm9uU2lnbmlmaWNhbnRUb2tlbiwgdGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzID0gTm9uU2lnbmlmaWNhbnRUb2tlbiwgdG9rZW4sIHN0YXJ0UG9zaXRpb24gPSAwLCBlbmRQb3NpdGlvbiA9IHRva2VuLmdldExlbmd0aCgpKSB7XG4gICAgbGV0IGNsb25lZE5vblNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBsaW5lID0gdG9rZW4uZ2V0TGluZSgpO1xuXG4gICAgICBsZXQgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcbiAgICAgIFxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgICAgY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzLmZyb21Db250ZW50QW5kTGluZShDbGFzcywgY29udGVudCwgbGluZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lZE5vblNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoQ2xhc3MsIGNvbnRlbnQsIGxpbmUpIHtcbiAgICBpZiAobGluZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsaW5lID0gY29udGVudDtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gTm9uU2lnbmlmaWNhbnRUb2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gdG9rZW5VdGlsLnNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBodG1sID0gc2FuaXRpc2VkQ29udGVudCxcbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCBodG1sKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblNpZ25pZmljYW50VG9rZW47XG4iXX0=