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
    value: function clone(token, startPosition, endPosition, Class) {
      return Token.clone(token, startPosition, endPosition, Class);
    }
  }, {
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : SignificantToken;

      var type = Class.type,
          html = Class.htmlFromContentAndType(content, type),
          significantToken = new Class(content, line, html, type);

      return significantToken;
    }
  }, {
    key: 'fromToken',
    value: function fromToken(token) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SignificantToken;
      return Token.fromToken(token, Class);
    }
  }, {
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      var html = SignificantToken.htmlFromContentAndType(content, type),
          significantToken = new SignificantToken(content, line, html, type);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwiaHRtbCIsInR5cGUiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsInRva2VuIiwiQ2xhc3MiLCJodG1sRnJvbUNvbnRlbnRBbmRUeXBlIiwic2lnbmlmaWNhbnRUb2tlbiIsImZyb21Ub2tlbiIsImlubmVySFRNTCIsImNsYXNzTmFtZSIsInNhbml0aXNlSFRNTCIsInR5cGVzIiwic3RyaW5nIiwiZW5kT2ZMaW5lIiwid2hpdGVzcGFjZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxVQUFSLENBQWQ7O0lBRU1DLGdCOzs7QUFDSiw0QkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDQyxJQUFqQyxFQUF1QztBQUFBOztBQUFBLG9JQUMvQkgsT0FEK0IsRUFDdEJDLElBRHNCLEVBQ2hCQyxJQURnQjs7QUFHckMsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBSHFDO0FBSXRDOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQSxJQUFaO0FBQ0Q7OzswQkFFS0MsYSxFQUFlQyxXLEVBQWE7QUFBRSxhQUFPTixpQkFBaUJPLEtBQWpCLENBQXVCLElBQXZCLEVBQTZCRixhQUE3QixFQUE0Q0MsV0FBNUMsRUFBeUROLGdCQUF6RCxDQUFQO0FBQW1GOzs7MEJBRTFHUSxLLEVBQU9ILGEsRUFBZUMsVyxFQUFhRyxLLEVBQU87QUFBRSxhQUFPWCxNQUFNUyxLQUFOLENBQVlDLEtBQVosRUFBbUJILGFBQW5CLEVBQWtDQyxXQUFsQyxFQUErQ0csS0FBL0MsQ0FBUDtBQUE4RDs7O3VDQUU3RlIsTyxFQUFTQyxJLEVBQWdDO0FBQUEsVUFBMUJPLEtBQTBCLHVFQUFsQlQsZ0JBQWtCOztBQUNqRSxVQUFNSSxPQUFPSyxNQUFNTCxJQUFuQjtBQUFBLFVBQ01ELE9BQU9NLE1BQU1DLHNCQUFOLENBQTZCVCxPQUE3QixFQUFzQ0csSUFBdEMsQ0FEYjtBQUFBLFVBRU1PLG1CQUFtQixJQUFJRixLQUFKLENBQVVSLE9BQVYsRUFBbUJDLElBQW5CLEVBQXlCQyxJQUF6QixFQUErQkMsSUFBL0IsQ0FGekI7O0FBSUEsYUFBT08sZ0JBQVA7QUFDRDs7OzhCQUVnQkgsSyxFQUFpQztBQUFBLFVBQTFCQyxLQUEwQix1RUFBbEJULGdCQUFrQjtBQUFFLGFBQU9GLE1BQU1jLFNBQU4sQ0FBZ0JKLEtBQWhCLEVBQXVCQyxLQUF2QixDQUFQO0FBQXVDOzs7MkNBRTdEUixPLEVBQVNDLEksRUFBTUUsSSxFQUFNO0FBQ2pELFVBQU1ELE9BQU9ILGlCQUFpQlUsc0JBQWpCLENBQXdDVCxPQUF4QyxFQUFpREcsSUFBakQsQ0FBYjtBQUFBLFVBQ01PLG1CQUFtQixJQUFJWCxnQkFBSixDQUFxQkMsT0FBckIsRUFBOEJDLElBQTlCLEVBQW9DQyxJQUFwQyxFQUEwQ0MsSUFBMUMsQ0FEekI7O0FBR0EsYUFBT08sZ0JBQVA7QUFDRDs7OzJDQUU2QlYsTyxFQUFTRyxJLEVBQU07QUFDM0MsVUFBSVMsWUFBWVosT0FBaEIsQ0FEMkMsQ0FDbEI7O0FBRXpCLFVBQU1hLFlBQVlWLElBQWxCLENBSDJDLENBR25COztBQUV4QlMsa0JBQVlmLE1BQU1pQixZQUFOLENBQW1CRixTQUFuQixDQUFaOztBQUVBLFVBQU1WLHlCQUF1QlcsU0FBdkIsVUFBcUNELFNBQXJDLFlBQU47O0FBRUEsYUFBT1YsSUFBUDtBQUNEOzs7aUNBRW1CQSxJLEVBQU07QUFBRSxhQUFPTCxNQUFNaUIsWUFBTixDQUFtQlosSUFBbkIsQ0FBUDtBQUFrQzs7OztFQTVDakNMLEs7O0FBK0MvQkUsaUJBQWlCZ0IsS0FBakIsR0FBeUI7QUFDdkJDLFVBQVEsUUFEZTtBQUV2QkMsYUFBVyxXQUZZO0FBR3ZCQyxjQUFZO0FBSFcsQ0FBekI7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUJyQixnQkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4nKTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgaHRtbCwgdHlwZSkge1xuICAgIHN1cGVyKGNvbnRlbnQsIGxpbmUsIGh0bWwpO1xuICAgIFxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgU2lnbmlmaWNhbnRUb2tlbikgfVxuXG4gIHN0YXRpYyBjbG9uZSh0b2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIENsYXNzKSB7IHJldHVybiBUb2tlbi5jbG9uZSh0b2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIENsYXNzKSB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW4pIHtcbiAgICBjb25zdCB0eXBlID0gQ2xhc3MudHlwZSxcbiAgICAgICAgICBodG1sID0gQ2xhc3MuaHRtbEZyb21Db250ZW50QW5kVHlwZShjb250ZW50LCB0eXBlKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIGh0bWwsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbVRva2VuKHRva2VuLCBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW4pIHsgcmV0dXJuIFRva2VuLmZyb21Ub2tlbih0b2tlbiwgQ2xhc3MpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSkge1xuICAgIGNvbnN0IGh0bWwgPSBTaWduaWZpY2FudFRva2VuLmh0bWxGcm9tQ29udGVudEFuZFR5cGUoY29udGVudCwgdHlwZSksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBTaWduaWZpY2FudFRva2VuKGNvbnRlbnQsIGxpbmUsIGh0bWwsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgaHRtbEZyb21Db250ZW50QW5kVHlwZShjb250ZW50LCB0eXBlKSB7XG4gICAgbGV0IGlubmVySFRNTCA9IGNvbnRlbnQ7IC8vL1xuICAgIFxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHR5cGU7IC8vL1xuXG4gICAgaW5uZXJIVE1MID0gVG9rZW4uc2FuaXRpc2VIVE1MKGlubmVySFRNTCk7XG5cbiAgICBjb25zdCBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHtpbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBzYW5pdGlzZUhUTUwoaHRtbCkgeyByZXR1cm4gVG9rZW4uc2FuaXRpc2VIVE1MKGh0bWwpOyB9XG59XG5cblNpZ25pZmljYW50VG9rZW4udHlwZXMgPSB7XG4gIHN0cmluZzogJ3N0cmluZycsXG4gIGVuZE9mTGluZTogJ2VuZE9mTGluZScsXG4gIHdoaXRlc3BhY2U6ICd3aGl0ZXNwYWNlJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuO1xuIl19