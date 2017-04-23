'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var SignificantToken = function (_Token) {
  _inherits(SignificantToken, _Token);

  function SignificantToken(content, line, html, type) {
    _classCallCheck(this, SignificantToken);

    var _this = _possibleConstructorReturn(this, (SignificantToken.__proto__ || Object.getPrototypeOf(SignificantToken)).call(this, content, line, html));

    _this.type = type;
    return _this;
  }

  _createClass(SignificantToken, [{
    key: 'getType',
    value: function getType() {
      return this.type;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(this, startPosition, endPosition, SignificantToken);
    }
  }], [{
    key: 'clone',
    value: function clone(token, startPosition, endPosition) {
      var Class = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : SignificantToken;
      return Token.clone(token, startPosition, endPosition, Class);
    }
  }, {
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      var Class = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : SignificantToken;

      var html = Class.htmlFromContentAndType(content, type),
          significantToken = new Class(content, line, html, type);

      return significantToken;
    }
  }, {
    key: 'htmlFromContentAndType',
    value: function htmlFromContentAndType(content, type) {
      var innerHTML = content; ///

      var className = type; ///

      innerHTML = Token.sanitiseHTML(innerHTML);

      var html = '<span class="' + className + '">' + innerHTML + '</span>';

      return html;
    }
  }, {
    key: 'fromToken',
    value: function fromToken(token) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SignificantToken;

      var content = token.getContent(),
          line = token.getLine(),
          type = token.getType();

      token = Class.fromContentLineAndType(content, line, type, Class);

      return token;
    }
  }, {
    key: 'sanitiseHTML',
    value: function sanitiseHTML(html) {
      return Token.sanitiseHTML(html);
    }
  }]);

  return SignificantToken;
}(Token);

SignificantToken.types = {
  string: 'string',
  endOfLine: 'endOfLine',
  whitespace: 'whitespace'
};

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwiaHRtbCIsInR5cGUiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsInRva2VuIiwiQ2xhc3MiLCJodG1sRnJvbUNvbnRlbnRBbmRUeXBlIiwic2lnbmlmaWNhbnRUb2tlbiIsImlubmVySFRNTCIsImNsYXNzTmFtZSIsInNhbml0aXNlSFRNTCIsImdldENvbnRlbnQiLCJnZXRMaW5lIiwiZ2V0VHlwZSIsImZyb21Db250ZW50TGluZUFuZFR5cGUiLCJ0eXBlcyIsInN0cmluZyIsImVuZE9mTGluZSIsIndoaXRlc3BhY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsVUFBUixDQUFkOztJQUVNQyxnQjs7O0FBQ0osNEJBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQTJCQyxJQUEzQixFQUFpQ0MsSUFBakMsRUFBdUM7QUFBQTs7QUFBQSxvSUFDL0JILE9BRCtCLEVBQ3RCQyxJQURzQixFQUNoQkMsSUFEZ0I7O0FBR3JDLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUhxQztBQUl0Qzs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0EsSUFBWjtBQUNEOzs7MEJBRUtDLGEsRUFBZUMsVyxFQUFhO0FBQUUsYUFBT04saUJBQWlCTyxLQUFqQixDQUF1QixJQUF2QixFQUE2QkYsYUFBN0IsRUFBNENDLFdBQTVDLEVBQXlETixnQkFBekQsQ0FBUDtBQUFtRjs7OzBCQUUxR1EsSyxFQUFPSCxhLEVBQWVDLFcsRUFBdUM7QUFBQSxVQUExQkcsS0FBMEIsdUVBQWxCVCxnQkFBa0I7QUFBRSxhQUFPRixNQUFNUyxLQUFOLENBQVlDLEtBQVosRUFBbUJILGFBQW5CLEVBQWtDQyxXQUFsQyxFQUErQ0csS0FBL0MsQ0FBUDtBQUE4RDs7OzJDQUU1R1IsTyxFQUFTQyxJLEVBQU1FLEksRUFBZ0M7QUFBQSxVQUExQkssS0FBMEIsdUVBQWxCVCxnQkFBa0I7O0FBQzNFLFVBQU1HLE9BQU9NLE1BQU1DLHNCQUFOLENBQTZCVCxPQUE3QixFQUFzQ0csSUFBdEMsQ0FBYjtBQUFBLFVBQ01PLG1CQUFtQixJQUFJRixLQUFKLENBQVVSLE9BQVYsRUFBbUJDLElBQW5CLEVBQXlCQyxJQUF6QixFQUErQkMsSUFBL0IsQ0FEekI7O0FBR0EsYUFBT08sZ0JBQVA7QUFDRDs7OzJDQUU2QlYsTyxFQUFTRyxJLEVBQU07QUFDM0MsVUFBSVEsWUFBWVgsT0FBaEIsQ0FEMkMsQ0FDbEI7O0FBRXpCLFVBQU1ZLFlBQVlULElBQWxCLENBSDJDLENBR25COztBQUV4QlEsa0JBQVlkLE1BQU1nQixZQUFOLENBQW1CRixTQUFuQixDQUFaOztBQUVBLFVBQU1ULHlCQUF1QlUsU0FBdkIsVUFBcUNELFNBQXJDLFlBQU47O0FBRUEsYUFBT1QsSUFBUDtBQUNEOzs7OEJBRWdCSyxLLEVBQWlDO0FBQUEsVUFBMUJDLEtBQTBCLHVFQUFsQlQsZ0JBQWtCOztBQUNoRCxVQUFNQyxVQUFVTyxNQUFNTyxVQUFOLEVBQWhCO0FBQUEsVUFDTWIsT0FBT00sTUFBTVEsT0FBTixFQURiO0FBQUEsVUFFTVosT0FBT0ksTUFBTVMsT0FBTixFQUZiOztBQUlBVCxjQUFRQyxNQUFNUyxzQkFBTixDQUE2QmpCLE9BQTdCLEVBQXNDQyxJQUF0QyxFQUE0Q0UsSUFBNUMsRUFBa0RLLEtBQWxELENBQVI7O0FBRUEsYUFBT0QsS0FBUDtBQUNEOzs7aUNBRW1CTCxJLEVBQU07QUFBRSxhQUFPTCxNQUFNZ0IsWUFBTixDQUFtQlgsSUFBbkIsQ0FBUDtBQUFrQzs7OztFQTVDakNMLEs7O0FBK0MvQkUsaUJBQWlCbUIsS0FBakIsR0FBeUI7QUFDdkJDLFVBQVEsUUFEZTtBQUV2QkMsYUFBVyxXQUZZO0FBR3ZCQyxjQUFZO0FBSFcsQ0FBekI7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUJ4QixnQkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4nKTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgaHRtbCwgdHlwZSkge1xuICAgIHN1cGVyKGNvbnRlbnQsIGxpbmUsIGh0bWwpO1xuICAgIFxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgU2lnbmlmaWNhbnRUb2tlbikgfVxuXG4gIHN0YXRpYyBjbG9uZSh0b2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbikgeyByZXR1cm4gVG9rZW4uY2xvbmUodG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBDbGFzcykgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUsIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbikge1xuICAgIGNvbnN0IGh0bWwgPSBDbGFzcy5odG1sRnJvbUNvbnRlbnRBbmRUeXBlKGNvbnRlbnQsIHR5cGUpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXcgQ2xhc3MoY29udGVudCwgbGluZSwgaHRtbCwgdHlwZSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBodG1sRnJvbUNvbnRlbnRBbmRUeXBlKGNvbnRlbnQsIHR5cGUpIHtcbiAgICBsZXQgaW5uZXJIVE1MID0gY29udGVudDsgLy8vXG4gICAgXG4gICAgY29uc3QgY2xhc3NOYW1lID0gdHlwZTsgLy8vXG5cbiAgICBpbm5lckhUTUwgPSBUb2tlbi5zYW5pdGlzZUhUTUwoaW5uZXJIVE1MKTtcblxuICAgIGNvbnN0IGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke2lubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbih0b2tlbiwgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsaW5lID0gdG9rZW4uZ2V0TGluZSgpLFxuICAgICAgICAgIHR5cGUgPSB0b2tlbi5nZXRUeXBlKCk7XG5cbiAgICB0b2tlbiA9IENsYXNzLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSwgQ2xhc3MpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIHNhbml0aXNlSFRNTChodG1sKSB7IHJldHVybiBUb2tlbi5zYW5pdGlzZUhUTUwoaHRtbCk7IH1cbn1cblxuU2lnbmlmaWNhbnRUb2tlbi50eXBlcyA9IHtcbiAgc3RyaW5nOiAnc3RyaW5nJyxcbiAgZW5kT2ZMaW5lOiAnZW5kT2ZMaW5lJyxcbiAgd2hpdGVzcGFjZTogJ3doaXRlc3BhY2UnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW47XG4iXX0=