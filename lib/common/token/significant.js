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
    key: 'toPosition',
    value: function toPosition(position) {
      return SignificantToken.toPosition(this, position);
    }
  }, {
    key: 'fromPosition',
    value: function fromPosition(position) {
      return SignificantToken.fromPosition(this, position);
    }
  }], [{
    key: 'toPosition',
    value: function toPosition(position) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SignificantToken;
      return Token.toPosition(this, position, Class);
    }
  }, {
    key: 'fromPosition',
    value: function fromPosition(position) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SignificantToken;
      return Token.fromPosition(this, position, Class);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwiaHRtbCIsInR5cGUiLCJwb3NpdGlvbiIsInRvUG9zaXRpb24iLCJmcm9tUG9zaXRpb24iLCJDbGFzcyIsImh0bWxGcm9tQ29udGVudEFuZFR5cGUiLCJzaWduaWZpY2FudFRva2VuIiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwic2FuaXRpc2VIVE1MIiwidHlwZXMiLCJzdHJpbmciLCJlbmRPZkxpbmUiLCJ3aGl0ZXNwYWNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLFVBQVIsQ0FBWjs7SUFFTUMsZ0I7OztBQUNKLDRCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQkMsSUFBM0IsRUFBaUNDLElBQWpDLEVBQXVDO0FBQUE7O0FBQUEsb0lBQy9CSCxPQUQrQixFQUN0QkMsSUFEc0IsRUFDaEJDLElBRGdCOztBQUdyQyxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFIcUM7QUFJdEM7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OytCQUVVQyxRLEVBQVU7QUFBRSxhQUFPTCxpQkFBaUJNLFVBQWpCLENBQTRCLElBQTVCLEVBQWtDRCxRQUFsQyxDQUFQO0FBQW9EOzs7aUNBRTlEQSxRLEVBQVU7QUFBRSxhQUFPTCxpQkFBaUJPLFlBQWpCLENBQThCLElBQTlCLEVBQW9DRixRQUFwQyxDQUFQO0FBQXNEOzs7K0JBRTdEQSxRLEVBQW9DO0FBQUEsVUFBMUJHLEtBQTBCLHVFQUFsQlIsZ0JBQWtCO0FBQUUsYUFBT0YsTUFBTVEsVUFBTixDQUFpQixJQUFqQixFQUF1QkQsUUFBdkIsRUFBaUNHLEtBQWpDLENBQVA7QUFBZ0Q7OztpQ0FFcEZILFEsRUFBb0M7QUFBQSxVQUExQkcsS0FBMEIsdUVBQWxCUixnQkFBa0I7QUFBRSxhQUFPRixNQUFNUyxZQUFOLENBQW1CLElBQW5CLEVBQXlCRixRQUF6QixFQUFtQ0csS0FBbkMsQ0FBUDtBQUFrRDs7O3VDQUVsRlAsTyxFQUFTQyxJLEVBQWdDO0FBQUEsVUFBMUJNLEtBQTBCLHVFQUFsQlIsZ0JBQWtCOztBQUNqRSxVQUFJSSxPQUFPSSxNQUFNSixJQUFqQjtBQUFBLFVBQ0lELE9BQU9LLE1BQU1DLHNCQUFOLENBQTZCUixPQUE3QixFQUFzQ0csSUFBdEMsQ0FEWDtBQUFBLFVBRUlNLG1CQUFtQixJQUFJRixLQUFKLENBQVVQLE9BQVYsRUFBbUJDLElBQW5CLEVBQXlCQyxJQUF6QixFQUErQkMsSUFBL0IsQ0FGdkI7O0FBSUEsYUFBT00sZ0JBQVA7QUFDRDs7OzJDQUU2QlQsTyxFQUFTQyxJLEVBQU1FLEksRUFBTTtBQUNqRCxVQUFJRCxPQUFPSCxpQkFBaUJTLHNCQUFqQixDQUF3Q1IsT0FBeEMsRUFBaURHLElBQWpELENBQVg7QUFBQSxVQUNJTSxtQkFBbUIsSUFBSVYsZ0JBQUosQ0FBcUJDLE9BQXJCLEVBQThCQyxJQUE5QixFQUFvQ0MsSUFBcEMsRUFBMENDLElBQTFDLENBRHZCOztBQUdBLGFBQU9NLGdCQUFQO0FBQ0Q7OzsyQ0FFNkJULE8sRUFBU0csSSxFQUFNO0FBQzNDLFVBQUlPLFlBQVlWLE9BQWhCO0FBQUEsVUFBeUI7QUFDckJXLGtCQUFZUixJQURoQixDQUQyQyxDQUVyQjs7QUFFdEJPLGtCQUFZYixNQUFNZSxZQUFOLENBQW1CRixTQUFuQixDQUFaOztBQUVBLFVBQUlSLHlCQUF1QlMsU0FBdkIsVUFBcUNELFNBQXJDLFlBQUo7O0FBRUEsYUFBT1IsSUFBUDtBQUNEOzs7aUNBRW1CQSxJLEVBQU07QUFBRSxhQUFPTCxNQUFNZSxZQUFOLENBQW1CVixJQUFuQixDQUFQO0FBQWtDOzs7O0VBN0NqQ0wsSzs7QUFnRC9CRSxpQkFBaUJjLEtBQWpCLEdBQXlCO0FBQ3ZCQyxVQUFRLFFBRGU7QUFFdkJDLGFBQVcsV0FGWTtBQUd2QkMsY0FBWTtBQUhXLENBQXpCOztBQU1BQyxPQUFPQyxPQUFQLEdBQWlCbkIsZ0JBQWpCIiwiZmlsZSI6InNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCBodG1sLCB0eXBlKSB7XG4gICAgc3VwZXIoY29udGVudCwgbGluZSwgaHRtbCk7XG4gICAgXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHRvUG9zaXRpb24ocG9zaXRpb24pIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4udG9Qb3NpdGlvbih0aGlzLCBwb3NpdGlvbikgfVxuXG4gIGZyb21Qb3NpdGlvbihwb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tUG9zaXRpb24odGhpcywgcG9zaXRpb24pIH1cblxuICBzdGF0aWMgdG9Qb3NpdGlvbihwb3NpdGlvbiwgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuKSB7IHJldHVybiBUb2tlbi50b1Bvc2l0aW9uKHRoaXMsIHBvc2l0aW9uLCBDbGFzcykgfVxuXG4gIHN0YXRpYyBmcm9tUG9zaXRpb24ocG9zaXRpb24sIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbikgeyByZXR1cm4gVG9rZW4uZnJvbVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uLCBDbGFzcykgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuKSB7XG4gICAgdmFyIHR5cGUgPSBDbGFzcy50eXBlLFxuICAgICAgICBodG1sID0gQ2xhc3MuaHRtbEZyb21Db250ZW50QW5kVHlwZShjb250ZW50LCB0eXBlKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCBodG1sLCB0eXBlKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSkge1xuICAgIHZhciBodG1sID0gU2lnbmlmaWNhbnRUb2tlbi5odG1sRnJvbUNvbnRlbnRBbmRUeXBlKGNvbnRlbnQsIHR5cGUpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV3IFNpZ25pZmljYW50VG9rZW4oY29udGVudCwgbGluZSwgaHRtbCwgdHlwZSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBodG1sRnJvbUNvbnRlbnRBbmRUeXBlKGNvbnRlbnQsIHR5cGUpIHtcbiAgICB2YXIgaW5uZXJIVE1MID0gY29udGVudCwgLy8vXG4gICAgICAgIGNsYXNzTmFtZSA9IHR5cGU7IC8vL1xuXG4gICAgaW5uZXJIVE1MID0gVG9rZW4uc2FuaXRpc2VIVE1MKGlubmVySFRNTCk7XG5cbiAgICB2YXIgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7aW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgc2FuaXRpc2VIVE1MKGh0bWwpIHsgcmV0dXJuIFRva2VuLnNhbml0aXNlSFRNTChodG1sKTsgfVxufVxuXG5TaWduaWZpY2FudFRva2VuLnR5cGVzID0ge1xuICBzdHJpbmc6ICdzdHJpbmcnLFxuICBlbmRPZkxpbmU6ICdlbmRPZkxpbmUnLFxuICB3aGl0ZXNwYWNlOiAnd2hpdGVzcGFjZSdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==