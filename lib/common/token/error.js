'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var ErrorToken = function (_Token) {
  _inherits(ErrorToken, _Token);

  function ErrorToken(string, line, message) {
    _classCallCheck(this, ErrorToken);

    var _this = _possibleConstructorReturn(this, (ErrorToken.__proto__ || Object.getPrototypeOf(ErrorToken)).call(this, string, line, message));

    _this.message = message;
    return _this;
  }

  _createClass(ErrorToken, [{
    key: 'getHTML',
    value: function getHTML() {
      var innerHTML = this.getString(),
          ///
      className = 'error',
          ///
      dataMessage = this.message,
          html = '<span class="' + className + '" data-message="' + dataMessage + '">' + innerHTML + '</span>';

      return html;
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content, line, message) {
      var string = content,
          ///
      errorToken = new ErrorToken(string, line, message);

      return errorToken;
    }
  }]);

  return ErrorToken;
}(Token);

module.exports = ErrorToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZXJyb3IuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiRXJyb3JUb2tlbiIsInN0cmluZyIsImxpbmUiLCJtZXNzYWdlIiwiaW5uZXJIVE1MIiwiZ2V0U3RyaW5nIiwiY2xhc3NOYW1lIiwiZGF0YU1lc3NhZ2UiLCJodG1sIiwiY29udGVudCIsImVycm9yVG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVFDLFFBQVEsVUFBUixDQUFaOztJQUVNQyxVOzs7QUFDSixzQkFBWUMsTUFBWixFQUFvQkMsSUFBcEIsRUFBMEJDLE9BQTFCLEVBQW1DO0FBQUE7O0FBQUEsd0hBQzNCRixNQUQyQixFQUNuQkMsSUFEbUIsRUFDYkMsT0FEYTs7QUFHakMsVUFBS0EsT0FBTCxHQUFlQSxPQUFmO0FBSGlDO0FBSWxDOzs7OzhCQUVTO0FBQ1IsVUFBSUMsWUFBWSxLQUFLQyxTQUFMLEVBQWhCO0FBQUEsVUFBa0M7QUFDOUJDLGtCQUFZLE9BRGhCO0FBQUEsVUFDMEI7QUFDdEJDLG9CQUFjLEtBQUtKLE9BRnZCO0FBQUEsVUFHSUsseUJBQXVCRixTQUF2Qix3QkFBbURDLFdBQW5ELFVBQW1FSCxTQUFuRSxZQUhKOztBQUtBLGFBQU9JLElBQVA7QUFDRDs7O2dDQUVrQkMsTyxFQUFTUCxJLEVBQU1DLE8sRUFBUztBQUN6QyxVQUFJRixTQUFTUSxPQUFiO0FBQUEsVUFBdUI7QUFDbkJDLG1CQUFhLElBQUlWLFVBQUosQ0FBZUMsTUFBZixFQUF1QkMsSUFBdkIsRUFBNkJDLE9BQTdCLENBRGpCOztBQUdBLGFBQU9PLFVBQVA7QUFDRDs7OztFQXJCc0JaLEs7O0FBd0J6QmEsT0FBT0MsT0FBUCxHQUFpQlosVUFBakIiLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG5cbmNsYXNzIEVycm9yVG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbGluZSwgbWVzc2FnZSkge1xuICAgIHN1cGVyKHN0cmluZywgbGluZSwgbWVzc2FnZSk7XG5cbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICB2YXIgaW5uZXJIVE1MID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgIGNsYXNzTmFtZSA9ICdlcnJvcicsICAvLy9cbiAgICAgICAgZGF0YU1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UsXG4gICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIiBkYXRhLW1lc3NhZ2U9XCIke2RhdGFNZXNzYWdlfVwiPiR7aW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSwgbWVzc2FnZSkge1xuICAgIHZhciBzdHJpbmcgPSBjb250ZW50LCAgLy8vXG4gICAgICAgIGVycm9yVG9rZW4gPSBuZXcgRXJyb3JUb2tlbihzdHJpbmcsIGxpbmUsIG1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIGVycm9yVG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcnJvclRva2VuO1xuIl19