'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('../../util'),
    Token = require('../token');

var ErrorToken = function (_Token) {
  _inherits(ErrorToken, _Token);

  function ErrorToken(content, line, message) {
    _classCallCheck(this, ErrorToken);

    var _this = _possibleConstructorReturn(this, (ErrorToken.__proto__ || Object.getPrototypeOf(ErrorToken)).call(this, content, line, message));

    _this.message = message;
    return _this;
  }

  _createClass(ErrorToken, [{
    key: 'clone',
    value: function clone() {
      var content = this.getContent(),
          line = this.getLine(),
          message = this.getMessage(),
          errorToken = new ErrorToken(content, line, message);

      return errorToken;
    }
  }, {
    key: 'getMessage',
    value: function getMessage() {
      return this.message;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var content = this.getContent(),
          innerHTML = content,
          ///
      className = 'error',
          ///
      sanitisedInnerHTML = util.sanitise(innerHTML),
          html = '<span class="' + className + '"">' + sanitisedInnerHTML + '</span>';

      return html;
    }
  }]);

  return ErrorToken;
}(Token);

module.exports = ErrorToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZXJyb3IuanMiXSwibmFtZXMiOlsidXRpbCIsInJlcXVpcmUiLCJUb2tlbiIsIkVycm9yVG9rZW4iLCJjb250ZW50IiwibGluZSIsIm1lc3NhZ2UiLCJnZXRDb250ZW50IiwiZ2V0TGluZSIsImdldE1lc3NhZ2UiLCJlcnJvclRva2VuIiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwic2FuaXRpc2VkSW5uZXJIVE1MIiwic2FuaXRpc2UiLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFlBQVIsQ0FBWDtBQUFBLElBQ0lDLFFBQVFELFFBQVEsVUFBUixDQURaOztJQUdNRSxVOzs7QUFDSixzQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLE9BQTNCLEVBQW9DO0FBQUE7O0FBQUEsd0hBQzVCRixPQUQ0QixFQUNuQkMsSUFEbUIsRUFDYkMsT0FEYTs7QUFHbEMsVUFBS0EsT0FBTCxHQUFlQSxPQUFmO0FBSGtDO0FBSW5DOzs7OzRCQUVPO0FBQ04sVUFBSUYsVUFBVSxLQUFLRyxVQUFMLEVBQWQ7QUFBQSxVQUNJRixPQUFPLEtBQUtHLE9BQUwsRUFEWDtBQUFBLFVBRUlGLFVBQVUsS0FBS0csVUFBTCxFQUZkO0FBQUEsVUFHSUMsYUFBYSxJQUFJUCxVQUFKLENBQWVDLE9BQWYsRUFBd0JDLElBQXhCLEVBQThCQyxPQUE5QixDQUhqQjs7QUFLQSxhQUFPSSxVQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0osT0FBWjtBQUNEOzs7OEJBRVM7QUFDUixVQUFJRixVQUFVLEtBQUtHLFVBQUwsRUFBZDtBQUFBLFVBQ0lJLFlBQVlQLE9BRGhCO0FBQUEsVUFDeUI7QUFDckJRLGtCQUFZLE9BRmhCO0FBQUEsVUFFMEI7QUFDdEJDLDJCQUFxQmIsS0FBS2MsUUFBTCxDQUFjSCxTQUFkLENBSHpCO0FBQUEsVUFJSUkseUJBQXVCSCxTQUF2QixXQUFzQ0Msa0JBQXRDLFlBSko7O0FBTUEsYUFBT0UsSUFBUDtBQUNEOzs7O0VBNUJzQmIsSzs7QUErQnpCYyxPQUFPQyxPQUFQLEdBQWlCZCxVQUFqQiIsImZpbGUiOiJlcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsJyksXG4gICAgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xuXG5jbGFzcyBFcnJvclRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCBtZXNzYWdlKSB7XG4gICAgc3VwZXIoY29udGVudCwgbGluZSwgbWVzc2FnZSk7XG5cbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG4gIFxuICBjbG9uZSgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICBsaW5lID0gdGhpcy5nZXRMaW5lKCksXG4gICAgICAgIG1lc3NhZ2UgPSB0aGlzLmdldE1lc3NhZ2UoKSxcbiAgICAgICAgZXJyb3JUb2tlbiA9IG5ldyBFcnJvclRva2VuKGNvbnRlbnQsIGxpbmUsIG1lc3NhZ2UpO1xuICAgIFxuICAgIHJldHVybiBlcnJvclRva2VuO1xuICB9XG4gIFxuICBnZXRNZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgIGlubmVySFRNTCA9IGNvbnRlbnQsIC8vL1xuICAgICAgICBjbGFzc05hbWUgPSAnZXJyb3InLCAgLy8vXG4gICAgICAgIHNhbml0aXNlZElubmVySFRNTCA9IHV0aWwuc2FuaXRpc2UoaW5uZXJIVE1MKSxcbiAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiXCI+JHtzYW5pdGlzZWRJbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yVG9rZW47XG4iXX0=