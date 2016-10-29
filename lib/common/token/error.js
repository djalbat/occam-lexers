'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('./significant');

var ErrorToken = function (_SignificantToken) {
  _inherits(ErrorToken, _SignificantToken);

  function ErrorToken(str, line, type, message) {
    _classCallCheck(this, ErrorToken);

    var _this = _possibleConstructorReturn(this, (ErrorToken.__proto__ || Object.getPrototypeOf(ErrorToken)).call(this, str, line, type, message));

    _this.message = message;
    return _this;
  }

  _createClass(ErrorToken, [{
    key: 'getHTML',
    value: function getHTML() {
      var innerHTML = this.getString(),
          ///
      className = this.getType(),
          ///
      dataMessage = this.message,
          html = '<span class="' + className + '" data-message="' + dataMessage + '">' + innerHTML + '</span>';

      return html;
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content, line, message) {
      var str = content,
          ///
      type = SignificantToken.types.ERROR,
          errorToken = new ErrorToken(str, line, type, message);

      return errorToken;
    }
  }]);

  return ErrorToken;
}(SignificantToken);

module.exports = ErrorToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZXJyb3IuanMiXSwibmFtZXMiOlsiU2lnbmlmaWNhbnRUb2tlbiIsInJlcXVpcmUiLCJFcnJvclRva2VuIiwic3RyIiwibGluZSIsInR5cGUiLCJtZXNzYWdlIiwiaW5uZXJIVE1MIiwiZ2V0U3RyaW5nIiwiY2xhc3NOYW1lIiwiZ2V0VHlwZSIsImRhdGFNZXNzYWdlIiwiaHRtbCIsImNvbnRlbnQiLCJ0eXBlcyIsIkVSUk9SIiwiZXJyb3JUb2tlbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsbUJBQW1CQyxRQUFRLGVBQVIsQ0FBdkI7O0lBRU1DLFU7OztBQUNKLHNCQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixFQUF1QkMsSUFBdkIsRUFBNkJDLE9BQTdCLEVBQXNDO0FBQUE7O0FBQUEsd0hBQzlCSCxHQUQ4QixFQUN6QkMsSUFEeUIsRUFDbkJDLElBRG1CLEVBQ2JDLE9BRGE7O0FBR3BDLFVBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUhvQztBQUlyQzs7Ozs4QkFFUztBQUNSLFVBQUlDLFlBQVksS0FBS0MsU0FBTCxFQUFoQjtBQUFBLFVBQWtDO0FBQzlCQyxrQkFBWSxLQUFLQyxPQUFMLEVBRGhCO0FBQUEsVUFDaUM7QUFDN0JDLG9CQUFjLEtBQUtMLE9BRnZCO0FBQUEsVUFHSU0seUJBQXVCSCxTQUF2Qix3QkFBbURFLFdBQW5ELFVBQW1FSixTQUFuRSxZQUhKOztBQUtBLGFBQU9LLElBQVA7QUFDRDs7O2dDQUVrQkMsTyxFQUFTVCxJLEVBQU1FLE8sRUFBUztBQUN6QyxVQUFJSCxNQUFNVSxPQUFWO0FBQUEsVUFBb0I7QUFDaEJSLGFBQU9MLGlCQUFpQmMsS0FBakIsQ0FBdUJDLEtBRGxDO0FBQUEsVUFFSUMsYUFBYSxJQUFJZCxVQUFKLENBQWVDLEdBQWYsRUFBb0JDLElBQXBCLEVBQTBCQyxJQUExQixFQUFnQ0MsT0FBaEMsQ0FGakI7O0FBSUEsYUFBT1UsVUFBUDtBQUNEOzs7O0VBdEJzQmhCLGdCOztBQXlCekJpQixPQUFPQyxPQUFQLEdBQWlCaEIsVUFBakIiLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi9zaWduaWZpY2FudCcpO1xuXG5jbGFzcyBFcnJvclRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHN0ciwgbGluZSwgdHlwZSwgbWVzc2FnZSkge1xuICAgIHN1cGVyKHN0ciwgbGluZSwgdHlwZSwgbWVzc2FnZSk7XG5cbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICB2YXIgaW5uZXJIVE1MID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgIGNsYXNzTmFtZSA9IHRoaXMuZ2V0VHlwZSgpLCAgLy8vXG4gICAgICAgIGRhdGFNZXNzYWdlID0gdGhpcy5tZXNzYWdlLFxuICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCIgZGF0YS1tZXNzYWdlPVwiJHtkYXRhTWVzc2FnZX1cIj4ke2lubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUsIG1lc3NhZ2UpIHtcbiAgICB2YXIgc3RyID0gY29udGVudCwgIC8vL1xuICAgICAgICB0eXBlID0gU2lnbmlmaWNhbnRUb2tlbi50eXBlcy5FUlJPUixcbiAgICAgICAgZXJyb3JUb2tlbiA9IG5ldyBFcnJvclRva2VuKHN0ciwgbGluZSwgdHlwZSwgbWVzc2FnZSk7XG5cbiAgICByZXR1cm4gZXJyb3JUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yVG9rZW47XG4iXX0=