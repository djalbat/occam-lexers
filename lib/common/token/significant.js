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
    value: function toPosition(token, position) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : SignificantToken;
      return Token.toPosition(token, position, Class);
    }
  }, {
    key: 'fromPosition',
    value: function fromPosition(token, position) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : SignificantToken;
      return Token.fromPosition(token, position, Class);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwiaHRtbCIsInR5cGUiLCJwb3NpdGlvbiIsInRvUG9zaXRpb24iLCJmcm9tUG9zaXRpb24iLCJ0b2tlbiIsIkNsYXNzIiwiaHRtbEZyb21Db250ZW50QW5kVHlwZSIsInNpZ25pZmljYW50VG9rZW4iLCJpbm5lckhUTUwiLCJjbGFzc05hbWUiLCJzYW5pdGlzZUhUTUwiLCJ0eXBlcyIsInN0cmluZyIsImVuZE9mTGluZSIsIndoaXRlc3BhY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVFDLFFBQVEsVUFBUixDQUFaOztJQUVNQyxnQjs7O0FBQ0osNEJBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQTJCQyxJQUEzQixFQUFpQ0MsSUFBakMsRUFBdUM7QUFBQTs7QUFBQSxvSUFDL0JILE9BRCtCLEVBQ3RCQyxJQURzQixFQUNoQkMsSUFEZ0I7O0FBR3JDLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUhxQztBQUl0Qzs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0EsSUFBWjtBQUNEOzs7K0JBRVVDLFEsRUFBVTtBQUFFLGFBQU9MLGlCQUFpQk0sVUFBakIsQ0FBNEIsSUFBNUIsRUFBa0NELFFBQWxDLENBQVA7QUFBb0Q7OztpQ0FFOURBLFEsRUFBVTtBQUFFLGFBQU9MLGlCQUFpQk8sWUFBakIsQ0FBOEIsSUFBOUIsRUFBb0NGLFFBQXBDLENBQVA7QUFBc0Q7OzsrQkFFN0RHLEssRUFBT0gsUSxFQUFvQztBQUFBLFVBQTFCSSxLQUEwQix1RUFBbEJULGdCQUFrQjtBQUFFLGFBQU9GLE1BQU1RLFVBQU4sQ0FBaUJFLEtBQWpCLEVBQXdCSCxRQUF4QixFQUFrQ0ksS0FBbEMsQ0FBUDtBQUFpRDs7O2lDQUU1RkQsSyxFQUFPSCxRLEVBQW9DO0FBQUEsVUFBMUJJLEtBQTBCLHVFQUFsQlQsZ0JBQWtCO0FBQUUsYUFBT0YsTUFBTVMsWUFBTixDQUFtQkMsS0FBbkIsRUFBMEJILFFBQTFCLEVBQW9DSSxLQUFwQyxDQUFQO0FBQW1EOzs7dUNBRTFGUixPLEVBQVNDLEksRUFBZ0M7QUFBQSxVQUExQk8sS0FBMEIsdUVBQWxCVCxnQkFBa0I7O0FBQ2pFLFVBQUlJLE9BQU9LLE1BQU1MLElBQWpCO0FBQUEsVUFDSUQsT0FBT00sTUFBTUMsc0JBQU4sQ0FBNkJULE9BQTdCLEVBQXNDRyxJQUF0QyxDQURYO0FBQUEsVUFFSU8sbUJBQW1CLElBQUlGLEtBQUosQ0FBVVIsT0FBVixFQUFtQkMsSUFBbkIsRUFBeUJDLElBQXpCLEVBQStCQyxJQUEvQixDQUZ2Qjs7QUFJQSxhQUFPTyxnQkFBUDtBQUNEOzs7MkNBRTZCVixPLEVBQVNDLEksRUFBTUUsSSxFQUFNO0FBQ2pELFVBQUlELE9BQU9ILGlCQUFpQlUsc0JBQWpCLENBQXdDVCxPQUF4QyxFQUFpREcsSUFBakQsQ0FBWDtBQUFBLFVBQ0lPLG1CQUFtQixJQUFJWCxnQkFBSixDQUFxQkMsT0FBckIsRUFBOEJDLElBQTlCLEVBQW9DQyxJQUFwQyxFQUEwQ0MsSUFBMUMsQ0FEdkI7O0FBR0EsYUFBT08sZ0JBQVA7QUFDRDs7OzJDQUU2QlYsTyxFQUFTRyxJLEVBQU07QUFDM0MsVUFBSVEsWUFBWVgsT0FBaEI7QUFBQSxVQUF5QjtBQUNyQlksa0JBQVlULElBRGhCLENBRDJDLENBRXJCOztBQUV0QlEsa0JBQVlkLE1BQU1nQixZQUFOLENBQW1CRixTQUFuQixDQUFaOztBQUVBLFVBQUlULHlCQUF1QlUsU0FBdkIsVUFBcUNELFNBQXJDLFlBQUo7O0FBRUEsYUFBT1QsSUFBUDtBQUNEOzs7aUNBRW1CQSxJLEVBQU07QUFBRSxhQUFPTCxNQUFNZ0IsWUFBTixDQUFtQlgsSUFBbkIsQ0FBUDtBQUFrQzs7OztFQTdDakNMLEs7O0FBZ0QvQkUsaUJBQWlCZSxLQUFqQixHQUF5QjtBQUN2QkMsVUFBUSxRQURlO0FBRXZCQyxhQUFXLFdBRlk7QUFHdkJDLGNBQVk7QUFIVyxDQUF6Qjs7QUFNQUMsT0FBT0MsT0FBUCxHQUFpQnBCLGdCQUFqQiIsImZpbGUiOiJzaWduaWZpY2FudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4nKTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgaHRtbCwgdHlwZSkge1xuICAgIHN1cGVyKGNvbnRlbnQsIGxpbmUsIGh0bWwpO1xuICAgIFxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICB0b1Bvc2l0aW9uKHBvc2l0aW9uKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLnRvUG9zaXRpb24odGhpcywgcG9zaXRpb24pIH1cblxuICBmcm9tUG9zaXRpb24ocG9zaXRpb24pIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSB9XG5cbiAgc3RhdGljIHRvUG9zaXRpb24odG9rZW4sIHBvc2l0aW9uLCBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW4pIHsgcmV0dXJuIFRva2VuLnRvUG9zaXRpb24odG9rZW4sIHBvc2l0aW9uLCBDbGFzcykgfVxuXG4gIHN0YXRpYyBmcm9tUG9zaXRpb24odG9rZW4sIHBvc2l0aW9uLCBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW4pIHsgcmV0dXJuIFRva2VuLmZyb21Qb3NpdGlvbih0b2tlbiwgcG9zaXRpb24sIENsYXNzKSB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW4pIHtcbiAgICB2YXIgdHlwZSA9IENsYXNzLnR5cGUsXG4gICAgICAgIGh0bWwgPSBDbGFzcy5odG1sRnJvbUNvbnRlbnRBbmRUeXBlKGNvbnRlbnQsIHR5cGUpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIGh0bWwsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKSB7XG4gICAgdmFyIGh0bWwgPSBTaWduaWZpY2FudFRva2VuLmh0bWxGcm9tQ29udGVudEFuZFR5cGUoY29udGVudCwgdHlwZSksXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXcgU2lnbmlmaWNhbnRUb2tlbihjb250ZW50LCBsaW5lLCBodG1sLCB0eXBlKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGh0bWxGcm9tQ29udGVudEFuZFR5cGUoY29udGVudCwgdHlwZSkge1xuICAgIHZhciBpbm5lckhUTUwgPSBjb250ZW50LCAvLy9cbiAgICAgICAgY2xhc3NOYW1lID0gdHlwZTsgLy8vXG5cbiAgICBpbm5lckhUTUwgPSBUb2tlbi5zYW5pdGlzZUhUTUwoaW5uZXJIVE1MKTtcblxuICAgIHZhciBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHtpbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBzYW5pdGlzZUhUTUwoaHRtbCkgeyByZXR1cm4gVG9rZW4uc2FuaXRpc2VIVE1MKGh0bWwpOyB9XG59XG5cblNpZ25pZmljYW50VG9rZW4udHlwZXMgPSB7XG4gIHN0cmluZzogJ3N0cmluZycsXG4gIGVuZE9mTGluZTogJ2VuZE9mTGluZScsXG4gIHdoaXRlc3BhY2U6ICd3aGl0ZXNwYWNlJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuO1xuIl19