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
  }, {
    key: 'positionInContent',
    value: function positionInContent(content) {
      var matches = content.match(/(.*?)\*\)/);

      if (!matches) {
        return -1;
      }

      var firstMatch = first(matches),
          str = firstMatch,
          ///
      position = str.length; ///

      return position;
    }
  }]);

  return EndOfMultiLineCommentToken;
}(CommentToken);

module.exports = EndOfMultiLineCommentToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9nYWxsaW5hL3Rva2VuL2NvbW1lbnQvZW5kT2ZNdWx0aUxpbmUuanMiXSwibmFtZXMiOlsiQ29tbWVudFRva2VuIiwicmVxdWlyZSIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwic3RyIiwiZ2V0U3RyIiwiY29udGVudCIsImVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwicG9zaXRpb24iLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxZQUFSLENBQW5COztJQUVNQywwQjs7O0FBQ0osc0NBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFBQSxtSkFDVEEsR0FEUztBQUVoQjs7Ozs0QkFFTztBQUNOLFVBQUlBLE1BQU0sS0FBS0MsTUFBTCxFQUFWOztBQUVBLGFBQU8sSUFBSUYsMEJBQUosQ0FBK0JDLEdBQS9CLENBQVA7QUFDRDs7O2dDQUVrQkUsTyxFQUFTO0FBQzFCLFVBQUlDLDZCQUE2QixJQUFqQztBQUFBLFVBQ0lDLFVBQVVGLFFBQVFHLEtBQVIsQ0FBYyxTQUFkLENBRGQ7O0FBR0EsVUFBSUQsT0FBSixFQUFhO0FBQ1gsWUFBSUUsYUFBYUMsTUFBTUgsT0FBTixDQUFqQjtBQUFBLFlBQ0lKLE1BQU1NLFVBRFYsQ0FEVyxDQUVXOztBQUV0QkgscUNBQTZCLElBQUlKLDBCQUFKLENBQStCQyxHQUEvQixDQUE3QjtBQUNEOztBQUVELGFBQU9HLDBCQUFQO0FBQ0Q7OztzQ0FFd0JELE8sRUFBUztBQUNoQyxVQUFJRSxVQUFVRixRQUFRRyxLQUFSLENBQWMsV0FBZCxDQUFkOztBQUVBLFVBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1osZUFBTyxDQUFDLENBQVI7QUFDRDs7QUFFRCxVQUFJRSxhQUFhQyxNQUFNSCxPQUFOLENBQWpCO0FBQUEsVUFDSUosTUFBTU0sVUFEVjtBQUFBLFVBQ3NCO0FBQ2xCRSxpQkFBV1IsSUFBSVMsTUFGbkIsQ0FQZ0MsQ0FTSjs7QUFFNUIsYUFBT0QsUUFBUDtBQUNEOzs7O0VBckNzQ1gsWTs7QUF3Q3pDYSxPQUFPQyxPQUFQLEdBQWlCWiwwQkFBakI7O0FBRUEsU0FBU1EsS0FBVCxDQUFlSyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoiZW5kT2ZNdWx0aUxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tZW50Jyk7XG5cbmNsYXNzIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgY29uc3RydWN0b3Ioc3RyKSB7XG4gICAgc3VwZXIoc3RyKTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmdldFN0cigpO1xuXG4gICAgcmV0dXJuIG5ldyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbihzdHIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICB2YXIgZW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsLFxuICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXihcXCpcXCkpLyk7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgdmFyIGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKSxcbiAgICAgICAgICBzdHIgPSBmaXJzdE1hdGNoOyAvLy9cbiAgICAgIFxuICAgICAgZW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBuZXcgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4oc3RyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25JbkNvbnRlbnQoY29udGVudCkge1xuICAgIHZhciBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvKC4qPylcXCpcXCkvKTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgIHN0ciA9IGZpcnN0TWF0Y2gsIC8vL1xuICAgICAgICBwb3NpdGlvbiA9IHN0ci5sZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==