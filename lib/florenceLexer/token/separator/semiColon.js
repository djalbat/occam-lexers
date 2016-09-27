'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SeparatorToken = require('../separator');

var SemiColonSeparatorToken = function (_SeparatorToken) {
  _inherits(SemiColonSeparatorToken, _SeparatorToken);

  function SemiColonSeparatorToken(str) {
    _classCallCheck(this, SemiColonSeparatorToken);

    return _possibleConstructorReturn(this, (SemiColonSeparatorToken.__proto__ || Object.getPrototypeOf(SemiColonSeparatorToken)).call(this, str));
  }

  _createClass(SemiColonSeparatorToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getStr();

      return new SemiColonSeparatorToken(str);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      var matches = content.match(/(^;)\b/);

      if (!matches) {
        return null;
      }

      var str = matches[1],
          equals = new SemiColonSeparatorToken(str);

      return equals;
    }
  }]);

  return SemiColonSeparatorToken;
}(SeparatorToken);

module.exports = SemiColonSeparatorToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9mbG9yZW5jZUxleGVyL3Rva2VuL3NlcGFyYXRvci9zZW1pQ29sb24uanMiXSwibmFtZXMiOlsiU2VwYXJhdG9yVG9rZW4iLCJyZXF1aXJlIiwiU2VtaUNvbG9uU2VwYXJhdG9yVG9rZW4iLCJzdHIiLCJnZXRTdHIiLCJjb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiZXF1YWxzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxpQkFBaUJDLFFBQVEsY0FBUixDQUFyQjs7SUFFTUMsdUI7OztBQUNKLG1DQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQUEsNklBQ1RBLEdBRFM7QUFFaEI7Ozs7NEJBRU87QUFDTixVQUFJQSxNQUFNLEtBQUtDLE1BQUwsRUFBVjs7QUFFQSxhQUFPLElBQUlGLHVCQUFKLENBQTRCQyxHQUE1QixDQUFQO0FBQ0Q7OztnQ0FFa0JFLE8sRUFBUztBQUMxQixVQUFJQyxVQUFVRCxRQUFRRSxLQUFSLENBQWMsUUFBZCxDQUFkOztBQUVBLFVBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1osZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBSUgsTUFBTUcsUUFBUSxDQUFSLENBQVY7QUFBQSxVQUNJRSxTQUFTLElBQUlOLHVCQUFKLENBQTRCQyxHQUE1QixDQURiOztBQUdBLGFBQU9LLE1BQVA7QUFDRDs7OztFQXRCbUNSLGM7O0FBeUJ0Q1MsT0FBT0MsT0FBUCxHQUFpQlIsdUJBQWpCIiwiZmlsZSI6InNlbWlDb2xvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFNlcGFyYXRvclRva2VuID0gcmVxdWlyZSgnLi4vc2VwYXJhdG9yJyk7XG5cbmNsYXNzIFNlbWlDb2xvblNlcGFyYXRvclRva2VuIGV4dGVuZHMgU2VwYXJhdG9yVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihzdHIpIHtcbiAgICBzdXBlcihzdHIpO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMuZ2V0U3RyKCk7XG5cbiAgICByZXR1cm4gbmV3IFNlbWlDb2xvblNlcGFyYXRvclRva2VuKHN0cik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIHZhciBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvKF47KVxcYi8pO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgc3RyID0gbWF0Y2hlc1sxXSxcbiAgICAgICAgZXF1YWxzID0gbmV3IFNlbWlDb2xvblNlcGFyYXRvclRva2VuKHN0cik7XG5cbiAgICByZXR1cm4gZXF1YWxzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VtaUNvbG9uU2VwYXJhdG9yVG9rZW47XG5cbiJdfQ==