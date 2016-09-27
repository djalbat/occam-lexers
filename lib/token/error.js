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

  _createClass(ErrorToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getString();

      return new ErrorToken(str);
    }
  }, {
    key: 'html',
    value: function html() {
      var str = this.getString(),
          html = '<span class="error">' + str + '</span>';

      return html;
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      var str = content,
          ///
      errorToken = new ErrorToken(str);

      return errorToken;
    }
  }]);

  return ErrorToken;
}(Token);

module.exports = ErrorToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi90b2tlbi9lcnJvci5qcyJdLCJuYW1lcyI6WyJUb2tlbiIsInJlcXVpcmUiLCJFcnJvclRva2VuIiwic3RyIiwiZ2V0U3RyaW5nIiwiaHRtbCIsImNvbnRlbnQiLCJlcnJvclRva2VuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLFVBQVIsQ0FBWjs7SUFFTUMsVTs7Ozs7Ozs7Ozs7NEJBQ0k7QUFDTixVQUFJQyxNQUFNLEtBQUtDLFNBQUwsRUFBVjs7QUFFQSxhQUFPLElBQUlGLFVBQUosQ0FBZUMsR0FBZixDQUFQO0FBQ0Q7OzsyQkFFTTtBQUNMLFVBQUlBLE1BQU0sS0FBS0MsU0FBTCxFQUFWO0FBQUEsVUFDSUMsT0FBTyx5QkFBeUJGLEdBQXpCLEdBQStCLFNBRDFDOztBQUdBLGFBQU9FLElBQVA7QUFDRDs7O2dDQUVrQkMsTyxFQUFTO0FBQzFCLFVBQUlILE1BQU1HLE9BQVY7QUFBQSxVQUFvQjtBQUNoQkMsbUJBQWEsSUFBSUwsVUFBSixDQUFlQyxHQUFmLENBRGpCOztBQUdBLGFBQU9JLFVBQVA7QUFDRDs7OztFQW5Cc0JQLEs7O0FBc0J6QlEsT0FBT0MsT0FBUCxHQUFpQlAsVUFBakIiLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG5cbmNsYXNzIEVycm9yVG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGNsb25lKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgcmV0dXJuIG5ldyBFcnJvclRva2VuKHN0cik7XG4gIH1cblxuICBodG1sKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICBodG1sID0gJzxzcGFuIGNsYXNzPVwiZXJyb3JcIj4nICsgc3RyICsgJzwvc3Bhbj4nO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIHZhciBzdHIgPSBjb250ZW50LCAgLy8vXG4gICAgICAgIGVycm9yVG9rZW4gPSBuZXcgRXJyb3JUb2tlbihzdHIpO1xuXG4gICAgcmV0dXJuIGVycm9yVG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcnJvclRva2VuO1xuIl19