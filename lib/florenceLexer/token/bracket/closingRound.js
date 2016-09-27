'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BracketToken = require('../bracket');

var RoundClosingBracketToken = function (_BracketToken) {
  _inherits(RoundClosingBracketToken, _BracketToken);

  function RoundClosingBracketToken(str) {
    _classCallCheck(this, RoundClosingBracketToken);

    return _possibleConstructorReturn(this, (RoundClosingBracketToken.__proto__ || Object.getPrototypeOf(RoundClosingBracketToken)).call(this, str));
  }

  _createClass(RoundClosingBracketToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getStr();

      return new RoundClosingBracketToken(str);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      var matches = content.match(/^(\)).*/);

      if (!matches) {
        return null;
      }

      var str = matches[1],
          round = new RoundClosingBracketToken(str);

      return round;
    }
  }]);

  return RoundClosingBracketToken;
}(BracketToken);

module.exports = RoundClosingBracketToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9mbG9yZW5jZUxleGVyL3Rva2VuL2JyYWNrZXQvY2xvc2luZ1JvdW5kLmpzIl0sIm5hbWVzIjpbIkJyYWNrZXRUb2tlbiIsInJlcXVpcmUiLCJSb3VuZENsb3NpbmdCcmFja2V0VG9rZW4iLCJzdHIiLCJnZXRTdHIiLCJjb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwicm91bmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsWUFBUixDQUFuQjs7SUFFTUMsd0I7OztBQUNKLG9DQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQUEsK0lBQ1RBLEdBRFM7QUFFaEI7Ozs7NEJBRU87QUFDTixVQUFJQSxNQUFNLEtBQUtDLE1BQUwsRUFBVjs7QUFFQSxhQUFPLElBQUlGLHdCQUFKLENBQTZCQyxHQUE3QixDQUFQO0FBQ0Q7OztnQ0FFa0JFLE8sRUFBUztBQUMxQixVQUFJQyxVQUFVRCxRQUFRRSxLQUFSLENBQWMsU0FBZCxDQUFkOztBQUVBLFVBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1osZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBSUgsTUFBTUcsUUFBUSxDQUFSLENBQVY7QUFBQSxVQUNJRSxRQUFRLElBQUlOLHdCQUFKLENBQTZCQyxHQUE3QixDQURaOztBQUdBLGFBQU9LLEtBQVA7QUFDRDs7OztFQXRCb0NSLFk7O0FBeUJ2Q1MsT0FBT0MsT0FBUCxHQUFpQlIsd0JBQWpCIiwiZmlsZSI6ImNsb3NpbmdSb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEJyYWNrZXRUb2tlbiA9IHJlcXVpcmUoJy4uL2JyYWNrZXQnKTtcblxuY2xhc3MgUm91bmRDbG9zaW5nQnJhY2tldFRva2VuIGV4dGVuZHMgQnJhY2tldFRva2VuIHtcbiAgY29uc3RydWN0b3Ioc3RyKSB7XG4gICAgc3VwZXIoc3RyKTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cigpO1xuXG4gICAgcmV0dXJuIG5ldyBSb3VuZENsb3NpbmdCcmFja2V0VG9rZW4oc3RyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgdmFyIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9eKFxcKSkuKi8pO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgc3RyID0gbWF0Y2hlc1sxXSxcbiAgICAgICAgcm91bmQgPSBuZXcgUm91bmRDbG9zaW5nQnJhY2tldFRva2VuKHN0cik7XG5cbiAgICByZXR1cm4gcm91bmQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSb3VuZENsb3NpbmdCcmFja2V0VG9rZW47XG5cbiJdfQ==