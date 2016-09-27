'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../comment');

var MiddleOfMultiLineCommentToken = function (_CommentToken) {
  _inherits(MiddleOfMultiLineCommentToken, _CommentToken);

  function MiddleOfMultiLineCommentToken(str) {
    _classCallCheck(this, MiddleOfMultiLineCommentToken);

    return _possibleConstructorReturn(this, (MiddleOfMultiLineCommentToken.__proto__ || Object.getPrototypeOf(MiddleOfMultiLineCommentToken)).call(this, str));
  }

  _createClass(MiddleOfMultiLineCommentToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getStr();

      return new MiddleOfMultiLineCommentToken(str);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      var str = content,
          ///
      middleOfMultiLineToken = new MiddleOfMultiLineCommentToken(str);

      return middleOfMultiLineToken;
    }
  }]);

  return MiddleOfMultiLineCommentToken;
}(CommentToken);

module.exports = MiddleOfMultiLineCommentToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9mbG9yZW5jZUxleGVyL3Rva2VuL2NvbW1lbnQvbWlkZGxlT2ZNdWx0aUxpbmUuanMiXSwibmFtZXMiOlsiQ29tbWVudFRva2VuIiwicmVxdWlyZSIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwic3RyIiwiZ2V0U3RyIiwiY29udGVudCIsIm1pZGRsZU9mTXVsdGlMaW5lVG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsWUFBUixDQUFuQjs7SUFFTUMsNkI7OztBQUNKLHlDQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQUEseUpBQ1RBLEdBRFM7QUFFaEI7Ozs7NEJBRU87QUFDTixVQUFJQSxNQUFNLEtBQUtDLE1BQUwsRUFBVjs7QUFFQSxhQUFPLElBQUlGLDZCQUFKLENBQWtDQyxHQUFsQyxDQUFQO0FBQ0Q7OztnQ0FFa0JFLE8sRUFBUztBQUMxQixVQUFJRixNQUFNRSxPQUFWO0FBQUEsVUFBbUI7QUFDZkMsK0JBQXlCLElBQUlKLDZCQUFKLENBQWtDQyxHQUFsQyxDQUQ3Qjs7QUFHQSxhQUFPRyxzQkFBUDtBQUNEOzs7O0VBaEJ5Q04sWTs7QUFtQjVDTyxPQUFPQyxPQUFQLEdBQWlCTiw2QkFBakIiLCJmaWxlIjoibWlkZGxlT2ZNdWx0aUxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tZW50Jyk7XG5cbmNsYXNzIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgY29uc3RydWN0b3Ioc3RyKSB7XG4gICAgc3VwZXIoc3RyKTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cigpO1xuXG4gICAgcmV0dXJuIG5ldyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbihzdHIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICB2YXIgc3RyID0gY29udGVudCwgLy8vXG4gICAgICAgIG1pZGRsZU9mTXVsdGlMaW5lVG9rZW4gPSBuZXcgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4oc3RyKTtcblxuICAgIHJldHVybiBtaWRkbGVPZk11bHRpTGluZVRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47XG5cbiJdfQ==