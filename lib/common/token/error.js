'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var ErrorToken = function (_Token) {
  _inherits(ErrorToken, _Token);

  function ErrorToken() {
    _classCallCheck(this, ErrorToken);

    return _possibleConstructorReturn(this, (ErrorToken.__proto__ || Object.getPrototypeOf(ErrorToken)).apply(this, arguments));
  }

  _createClass(ErrorToken, null, [{
    key: 'fromContent',
    value: function fromContent(content, line) {
      var str = content,
          ///
      type = 'error',
          errorToken = new ErrorToken(str, type, line);

      return errorToken;
    }
  }]);

  return ErrorToken;
}(Token);

module.exports = ErrorToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZXJyb3IuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiRXJyb3JUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwic3RyIiwidHlwZSIsImVycm9yVG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVFDLFFBQVEsVUFBUixDQUFaOztJQUVNQyxVOzs7Ozs7Ozs7OztnQ0FDZUMsTyxFQUFTQyxJLEVBQU07QUFDaEMsVUFBSUMsTUFBTUYsT0FBVjtBQUFBLFVBQW9CO0FBQ2hCRyxhQUFPLE9BRFg7QUFBQSxVQUVJQyxhQUFhLElBQUlMLFVBQUosQ0FBZUcsR0FBZixFQUFvQkMsSUFBcEIsRUFBMEJGLElBQTFCLENBRmpCOztBQUlBLGFBQU9HLFVBQVA7QUFDRDs7OztFQVBzQlAsSzs7QUFVekJRLE9BQU9DLE9BQVAsR0FBaUJQLFVBQWpCIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xuXG5jbGFzcyBFcnJvclRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSkge1xuICAgIHZhciBzdHIgPSBjb250ZW50LCAgLy8vXG4gICAgICAgIHR5cGUgPSAnZXJyb3InLFxuICAgICAgICBlcnJvclRva2VuID0gbmV3IEVycm9yVG9rZW4oc3RyLCB0eXBlLCBsaW5lKTtcblxuICAgIHJldHVybiBlcnJvclRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JUb2tlbjtcbiJdfQ==