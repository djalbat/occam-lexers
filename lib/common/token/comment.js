'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../../common/token');

var CommentToken = function (_Token) {
  _inherits(CommentToken, _Token);

  function CommentToken(str) {
    _classCallCheck(this, CommentToken);

    var type = "comment",
        line = null;

    return _possibleConstructorReturn(this, (CommentToken.__proto__ || Object.getPrototypeOf(CommentToken)).call(this, str, type, line));
  }

  _createClass(CommentToken, [{
    key: 'merge',
    value: function merge(commentToken) {
      var str = this.getString(),
          commentTokenStr = commentToken.getString();

      str += commentTokenStr;

      this.setString(str);

      return this;
    }
  }]);

  return CommentToken;
}(Token);

module.exports = CommentToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vY29tbWVudC5qcyJdLCJuYW1lcyI6WyJUb2tlbiIsInJlcXVpcmUiLCJDb21tZW50VG9rZW4iLCJzdHIiLCJ0eXBlIiwibGluZSIsImNvbW1lbnRUb2tlbiIsImdldFN0cmluZyIsImNvbW1lbnRUb2tlblN0ciIsInNldFN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxvQkFBUixDQUFaOztJQUVNQyxZOzs7QUFDSix3QkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNmLFFBQUlDLE9BQU8sU0FBWDtBQUFBLFFBQ0lDLE9BQU8sSUFEWDs7QUFEZSx1SEFJVEYsR0FKUyxFQUlKQyxJQUpJLEVBSUVDLElBSkY7QUFLaEI7Ozs7MEJBRUtDLFksRUFBYztBQUNsQixVQUFJSCxNQUFNLEtBQUtJLFNBQUwsRUFBVjtBQUFBLFVBQ0lDLGtCQUFrQkYsYUFBYUMsU0FBYixFQUR0Qjs7QUFHQUosYUFBT0ssZUFBUDs7QUFFQSxXQUFLQyxTQUFMLENBQWVOLEdBQWY7O0FBRUEsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUFqQndCSCxLOztBQW9CM0JVLE9BQU9DLE9BQVAsR0FBaUJULFlBQWpCIiwiZmlsZSI6ImNvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90b2tlbicpO1xuXG5jbGFzcyBDb21tZW50VG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHN0cikge1xuICAgIHZhciB0eXBlID0gXCJjb21tZW50XCIsXG4gICAgICAgIGxpbmUgPSBudWxsO1xuICAgIFxuICAgIHN1cGVyKHN0ciwgdHlwZSwgbGluZSk7XG4gIH1cbiAgXG4gIG1lcmdlKGNvbW1lbnRUb2tlbikge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICBjb21tZW50VG9rZW5TdHIgPSBjb21tZW50VG9rZW4uZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHIgKz0gY29tbWVudFRva2VuU3RyO1xuICAgIFxuICAgIHRoaXMuc2V0U3RyaW5nKHN0cik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbjtcbiJdfQ==