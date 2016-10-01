'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../comment');

var EndOfMultiLineCommentToken = function (_CommentToken) {
  _inherits(EndOfMultiLineCommentToken, _CommentToken);

  function EndOfMultiLineCommentToken(str) {
    _classCallCheck(this, EndOfMultiLineCommentToken);

    return _possibleConstructorReturn(this, (EndOfMultiLineCommentToken.__proto__ || Object.getPrototypeOf(EndOfMultiLineCommentToken)).call(this, str));
  }

  _createClass(EndOfMultiLineCommentToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getStr();

      return new EndOfMultiLineCommentToken(str);
    }
  }], [{
    key: 'position',
    value: function position(content) {
      var position = content.search(/\*\)/);

      return position;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content) {
      var endOfMultiLineCommentToken = null,
          matches = content.match(/^(\*\))/);

      if (matches) {
        var firstMatch = first(matches),
            str = firstMatch; ///

        endOfMultiLineCommentToken = new EndOfMultiLineCommentToken(str);
      }

      return endOfMultiLineCommentToken;
    }
  }]);

  return EndOfMultiLineCommentToken;
}(CommentToken);

module.exports = EndOfMultiLineCommentToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9nYWxsaW5hL3Rva2VuL2NvbW1lbnQvZW5kT2ZNdWx0aUxpbmUuanMiXSwibmFtZXMiOlsiQ29tbWVudFRva2VuIiwicmVxdWlyZSIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwic3RyIiwiZ2V0U3RyIiwiY29udGVudCIsInBvc2l0aW9uIiwic2VhcmNoIiwiZW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxZQUFSLENBQW5COztJQUVNQywwQjs7O0FBQ0osc0NBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFBQSxtSkFDVEEsR0FEUztBQUVoQjs7Ozs0QkFFTztBQUNOLFVBQUlBLE1BQU0sS0FBS0MsTUFBTCxFQUFWOztBQUVBLGFBQU8sSUFBSUYsMEJBQUosQ0FBK0JDLEdBQS9CLENBQVA7QUFDRDs7OzZCQUVlRSxPLEVBQVM7QUFDdkIsVUFBSUMsV0FBV0QsUUFBUUUsTUFBUixDQUFlLE1BQWYsQ0FBZjs7QUFFQSxhQUFPRCxRQUFQO0FBQ0Q7OztnQ0FFa0JELE8sRUFBUztBQUMxQixVQUFJRyw2QkFBNkIsSUFBakM7QUFBQSxVQUNJQyxVQUFVSixRQUFRSyxLQUFSLENBQWMsU0FBZCxDQURkOztBQUdBLFVBQUlELE9BQUosRUFBYTtBQUNYLFlBQUlFLGFBQWFDLE1BQU1ILE9BQU4sQ0FBakI7QUFBQSxZQUNJTixNQUFNUSxVQURWLENBRFcsQ0FFVzs7QUFFdEJILHFDQUE2QixJQUFJTiwwQkFBSixDQUErQkMsR0FBL0IsQ0FBN0I7QUFDRDs7QUFFRCxhQUFPSywwQkFBUDtBQUNEOzs7O0VBN0JzQ1IsWTs7QUFnQ3pDYSxPQUFPQyxPQUFQLEdBQWlCWiwwQkFBakI7O0FBRUEsU0FBU1UsS0FBVCxDQUFlRyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoiZW5kT2ZNdWx0aUxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tZW50Jyk7XG5cbmNsYXNzIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgY29uc3RydWN0b3Ioc3RyKSB7XG4gICAgc3VwZXIoc3RyKTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cigpO1xuXG4gICAgcmV0dXJuIG5ldyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbihzdHIpO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uKGNvbnRlbnQpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvXFwqXFwpLyk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIHZhciBlbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGwsXG4gICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9eKFxcKlxcKSkvKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgIHN0ciA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBlbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG5ldyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbihzdHIpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==