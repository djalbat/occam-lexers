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
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(this, startPosition, endPosition, SignificantToken);
    }
  }, {
    key: 'getType',
    value: function getType() {
      return this.type;
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
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      var html = SignificantToken.htmlFromContentAndType(content, type),
          significantToken = new SignificantToken(content, line, html, type);

      return significantToken;
    }
  }, {
    key: 'htmlFromContentAndType',
    value: function htmlFromContentAndType(content, type) {
      var innerHTML = content,
          ///
      className = type; ///

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwiaHRtbCIsInR5cGUiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjbG9uZSIsInRva2VuIiwiQ2xhc3MiLCJodG1sRnJvbUNvbnRlbnRBbmRUeXBlIiwic2lnbmlmaWNhbnRUb2tlbiIsImlubmVySFRNTCIsImNsYXNzTmFtZSIsInNhbml0aXNlSFRNTCIsInR5cGVzIiwic3RyaW5nIiwiZW5kT2ZMaW5lIiwid2hpdGVzcGFjZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxVQUFSLENBQVo7O0lBRU1DLGdCOzs7QUFDSiw0QkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDQyxJQUFqQyxFQUF1QztBQUFBOztBQUFBLG9JQUMvQkgsT0FEK0IsRUFDdEJDLElBRHNCLEVBQ2hCQyxJQURnQjs7QUFHckMsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBSHFDO0FBSXRDOzs7OzBCQUVLQyxhLEVBQWVDLFcsRUFBYTtBQUFFLGFBQU9OLGlCQUFpQk8sS0FBakIsQ0FBdUIsSUFBdkIsRUFBNkJGLGFBQTdCLEVBQTRDQyxXQUE1QyxFQUF5RE4sZ0JBQXpELENBQVA7QUFBbUY7Ozs4QkFFN0c7QUFDUixhQUFPLEtBQUtJLElBQVo7QUFDRDs7OzBCQUVZSSxLLEVBQU9ILGEsRUFBZUMsVyxFQUFhRyxLLEVBQU87QUFBRSxhQUFPWCxNQUFNUyxLQUFOLENBQVlDLEtBQVosRUFBbUJILGFBQW5CLEVBQWtDQyxXQUFsQyxFQUErQ0csS0FBL0MsQ0FBUDtBQUE4RDs7O3VDQUU3RlIsTyxFQUFTQyxJLEVBQWdDO0FBQUEsVUFBMUJPLEtBQTBCLHVFQUFsQlQsZ0JBQWtCOztBQUNqRSxVQUFJSSxPQUFPSyxNQUFNTCxJQUFqQjtBQUFBLFVBQ0lELE9BQU9NLE1BQU1DLHNCQUFOLENBQTZCVCxPQUE3QixFQUFzQ0csSUFBdEMsQ0FEWDtBQUFBLFVBRUlPLG1CQUFtQixJQUFJRixLQUFKLENBQVVSLE9BQVYsRUFBbUJDLElBQW5CLEVBQXlCQyxJQUF6QixFQUErQkMsSUFBL0IsQ0FGdkI7O0FBSUEsYUFBT08sZ0JBQVA7QUFDRDs7OzJDQUU2QlYsTyxFQUFTQyxJLEVBQU1FLEksRUFBTTtBQUNqRCxVQUFJRCxPQUFPSCxpQkFBaUJVLHNCQUFqQixDQUF3Q1QsT0FBeEMsRUFBaURHLElBQWpELENBQVg7QUFBQSxVQUNJTyxtQkFBbUIsSUFBSVgsZ0JBQUosQ0FBcUJDLE9BQXJCLEVBQThCQyxJQUE5QixFQUFvQ0MsSUFBcEMsRUFBMENDLElBQTFDLENBRHZCOztBQUdBLGFBQU9PLGdCQUFQO0FBQ0Q7OzsyQ0FFNkJWLE8sRUFBU0csSSxFQUFNO0FBQzNDLFVBQUlRLFlBQVlYLE9BQWhCO0FBQUEsVUFBeUI7QUFDckJZLGtCQUFZVCxJQURoQixDQUQyQyxDQUVyQjs7QUFFdEJRLGtCQUFZZCxNQUFNZ0IsWUFBTixDQUFtQkYsU0FBbkIsQ0FBWjs7QUFFQSxVQUFJVCx5QkFBdUJVLFNBQXZCLFVBQXFDRCxTQUFyQyxZQUFKOztBQUVBLGFBQU9ULElBQVA7QUFDRDs7O2lDQUVtQkEsSSxFQUFNO0FBQUUsYUFBT0wsTUFBTWdCLFlBQU4sQ0FBbUJYLElBQW5CLENBQVA7QUFBa0M7Ozs7RUF6Q2pDTCxLOztBQTRDL0JFLGlCQUFpQmUsS0FBakIsR0FBeUI7QUFDdkJDLFVBQVEsUUFEZTtBQUV2QkMsYUFBVyxXQUZZO0FBR3ZCQyxjQUFZO0FBSFcsQ0FBekI7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUJwQixnQkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUsIGh0bWwsIHR5cGUpIHtcbiAgICBzdXBlcihjb250ZW50LCBsaW5lLCBodG1sKTtcbiAgICBcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIFNpZ25pZmljYW50VG9rZW4pIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUodG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBDbGFzcykgeyByZXR1cm4gVG9rZW4uY2xvbmUodG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBDbGFzcykgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuKSB7XG4gICAgdmFyIHR5cGUgPSBDbGFzcy50eXBlLFxuICAgICAgICBodG1sID0gQ2xhc3MuaHRtbEZyb21Db250ZW50QW5kVHlwZShjb250ZW50LCB0eXBlKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCBodG1sLCB0eXBlKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSkge1xuICAgIHZhciBodG1sID0gU2lnbmlmaWNhbnRUb2tlbi5odG1sRnJvbUNvbnRlbnRBbmRUeXBlKGNvbnRlbnQsIHR5cGUpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV3IFNpZ25pZmljYW50VG9rZW4oY29udGVudCwgbGluZSwgaHRtbCwgdHlwZSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBodG1sRnJvbUNvbnRlbnRBbmRUeXBlKGNvbnRlbnQsIHR5cGUpIHtcbiAgICB2YXIgaW5uZXJIVE1MID0gY29udGVudCwgLy8vXG4gICAgICAgIGNsYXNzTmFtZSA9IHR5cGU7IC8vL1xuXG4gICAgaW5uZXJIVE1MID0gVG9rZW4uc2FuaXRpc2VIVE1MKGlubmVySFRNTCk7XG5cbiAgICB2YXIgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7aW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgc2FuaXRpc2VIVE1MKGh0bWwpIHsgcmV0dXJuIFRva2VuLnNhbml0aXNlSFRNTChodG1sKTsgfVxufVxuXG5TaWduaWZpY2FudFRva2VuLnR5cGVzID0ge1xuICBzdHJpbmc6ICdzdHJpbmcnLFxuICBlbmRPZkxpbmU6ICdlbmRPZkxpbmUnLFxuICB3aGl0ZXNwYWNlOiAnd2hpdGVzcGFjZSdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==