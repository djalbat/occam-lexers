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
  }], [{
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
    key: 'sanitiseHTML',
    value: function sanitiseHTML(html) {
      return Token.sanitiseHTML(html);
    }
  }]);

  return SignificantToken;
}(Token);

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwiaHRtbCIsInR5cGUiLCJpbm5lckhUTUwiLCJjbGFzc05hbWUiLCJzYW5pdGlzZUhUTUwiLCJDbGFzcyIsImh0bWxGcm9tQ29udGVudEFuZFR5cGUiLCJzaWduaWZpY2FudFRva2VuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLFVBQVIsQ0FBWjs7SUFFTUMsZ0I7OztBQUNKLDRCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQkMsSUFBM0IsRUFBaUNDLElBQWpDLEVBQXVDO0FBQUE7O0FBQUEsb0lBQy9CSCxPQUQrQixFQUN0QkMsSUFEc0IsRUFDaEJDLElBRGdCOztBQUdyQyxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFIcUM7QUFJdEM7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzJDQUU2QkgsTyxFQUFTRyxJLEVBQU07QUFDM0MsVUFBSUMsWUFBWUosT0FBaEI7QUFBQSxVQUF5QjtBQUNyQkssa0JBQVlGLElBRGhCLENBRDJDLENBRXJCOztBQUV0QkMsa0JBQVlQLE1BQU1TLFlBQU4sQ0FBbUJGLFNBQW5CLENBQVo7O0FBRUEsVUFBSUYseUJBQXVCRyxTQUF2QixVQUFxQ0QsU0FBckMsWUFBSjs7QUFFQSxhQUFPRixJQUFQO0FBQ0Q7Ozt1Q0FFeUJGLE8sRUFBU0MsSSxFQUFnQztBQUFBLFVBQTFCTSxLQUEwQix1RUFBbEJSLGdCQUFrQjs7QUFDakUsVUFBSUksT0FBT0ksTUFBTUosSUFBakI7QUFBQSxVQUNJRCxPQUFPSyxNQUFNQyxzQkFBTixDQUE2QlIsT0FBN0IsRUFBc0NHLElBQXRDLENBRFg7QUFBQSxVQUVJTSxtQkFBbUIsSUFBSUYsS0FBSixDQUFVUCxPQUFWLEVBQW1CQyxJQUFuQixFQUF5QkMsSUFBekIsRUFBK0JDLElBQS9CLENBRnZCOztBQUlBLGFBQU9NLGdCQUFQO0FBQ0Q7OzsyQ0FFNkJULE8sRUFBU0MsSSxFQUFNRSxJLEVBQU07QUFDakQsVUFBSUQsT0FBT0gsaUJBQWlCUyxzQkFBakIsQ0FBd0NSLE9BQXhDLEVBQWlERyxJQUFqRCxDQUFYO0FBQUEsVUFDSU0sbUJBQW1CLElBQUlWLGdCQUFKLENBQXFCQyxPQUFyQixFQUE4QkMsSUFBOUIsRUFBb0NDLElBQXBDLEVBQTBDQyxJQUExQyxDQUR2Qjs7QUFHQSxhQUFPTSxnQkFBUDtBQUNEOzs7aUNBRW1CUCxJLEVBQU07QUFBRSxhQUFPTCxNQUFNUyxZQUFOLENBQW1CSixJQUFuQixDQUFQO0FBQWtDOzs7O0VBckNqQ0wsSzs7QUF3Qy9CYSxPQUFPQyxPQUFQLEdBQWlCWixnQkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUsIGh0bWwsIHR5cGUpIHtcbiAgICBzdXBlcihjb250ZW50LCBsaW5lLCBodG1sKTtcbiAgICBcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgc3RhdGljIGh0bWxGcm9tQ29udGVudEFuZFR5cGUoY29udGVudCwgdHlwZSkge1xuICAgIHZhciBpbm5lckhUTUwgPSBjb250ZW50LCAvLy9cbiAgICAgICAgY2xhc3NOYW1lID0gdHlwZTsgLy8vXG5cbiAgICBpbm5lckhUTUwgPSBUb2tlbi5zYW5pdGlzZUhUTUwoaW5uZXJIVE1MKTtcblxuICAgIHZhciBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHtpbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuKSB7XG4gICAgdmFyIHR5cGUgPSBDbGFzcy50eXBlLFxuICAgICAgICBodG1sID0gQ2xhc3MuaHRtbEZyb21Db250ZW50QW5kVHlwZShjb250ZW50LCB0eXBlKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCBodG1sLCB0eXBlKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSkge1xuICAgIHZhciBodG1sID0gU2lnbmlmaWNhbnRUb2tlbi5odG1sRnJvbUNvbnRlbnRBbmRUeXBlKGNvbnRlbnQsIHR5cGUpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV3IFNpZ25pZmljYW50VG9rZW4oY29udGVudCwgbGluZSwgaHRtbCwgdHlwZSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBzYW5pdGlzZUhUTUwoaHRtbCkgeyByZXR1cm4gVG9rZW4uc2FuaXRpc2VIVE1MKGh0bWwpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==