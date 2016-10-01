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
      var str = this.getString(),
          line = this.getLine();

      return new ErrorToken(str, line);
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var str = this.getString(),
          html = '<span class="error">' + str + '</span>';

      return html;
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content, line) {
      var str = content,
          ///
      errorToken = new ErrorToken(str, line);

      return errorToken;
    }
  }]);

  return ErrorToken;
}(Token);

module.exports = ErrorToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vZXJyb3IuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiRXJyb3JUb2tlbiIsInN0ciIsImdldFN0cmluZyIsImxpbmUiLCJnZXRMaW5lIiwiaHRtbCIsImNvbnRlbnQiLCJlcnJvclRva2VuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLFVBQVIsQ0FBWjs7SUFFTUMsVTs7Ozs7Ozs7Ozs7NEJBQ0k7QUFDTixVQUFJQyxNQUFNLEtBQUtDLFNBQUwsRUFBVjtBQUFBLFVBQ0lDLE9BQU8sS0FBS0MsT0FBTCxFQURYOztBQUdBLGFBQU8sSUFBSUosVUFBSixDQUFlQyxHQUFmLEVBQW9CRSxJQUFwQixDQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQUlGLE1BQU0sS0FBS0MsU0FBTCxFQUFWO0FBQUEsVUFDSUcsT0FBTyx5QkFBeUJKLEdBQXpCLEdBQStCLFNBRDFDOztBQUdBLGFBQU9JLElBQVA7QUFDRDs7O2dDQUVrQkMsTyxFQUFTSCxJLEVBQU07QUFDaEMsVUFBSUYsTUFBTUssT0FBVjtBQUFBLFVBQW9CO0FBQ2hCQyxtQkFBYSxJQUFJUCxVQUFKLENBQWVDLEdBQWYsRUFBb0JFLElBQXBCLENBRGpCOztBQUdBLGFBQU9JLFVBQVA7QUFDRDs7OztFQXBCc0JULEs7O0FBdUJ6QlUsT0FBT0MsT0FBUCxHQUFpQlQsVUFBakIiLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG5cbmNsYXNzIEVycm9yVG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGNsb25lKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICBsaW5lID0gdGhpcy5nZXRMaW5lKCk7XG5cbiAgICByZXR1cm4gbmV3IEVycm9yVG9rZW4oc3RyLCBsaW5lKTtcbiAgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgIGh0bWwgPSAnPHNwYW4gY2xhc3M9XCJlcnJvclwiPicgKyBzdHIgKyAnPC9zcGFuPic7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBsaW5lKSB7XG4gICAgdmFyIHN0ciA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgZXJyb3JUb2tlbiA9IG5ldyBFcnJvclRva2VuKHN0ciwgbGluZSk7XG5cbiAgICByZXR1cm4gZXJyb3JUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yVG9rZW47XG4iXX0=