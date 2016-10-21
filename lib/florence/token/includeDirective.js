'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IncludeDirectiveToken = function () {
  function IncludeDirectiveToken(filePath) {
    _classCallCheck(this, IncludeDirectiveToken);

    this.filePath = filePath;
  }

  _createClass(IncludeDirectiveToken, [{
    key: 'getFilePath',
    value: function getFilePath() {
      return this.filePath;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var html = this.filePath; ///

      return html;
    }
  }], [{
    key: 'position',
    value: function position(content) {
      var position = content.search(/include\("[^"]*"\)/);

      return position;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content, line) {
      var includeDirectiveToken = null,
          matches = content.match(/^include\("([^"]*)"\)/);

      if (matches) {
        var firstMatch = first(matches),
            secondMatch = second(matches),
            str = firstMatch,
            ///
        filePath = secondMatch; ///

        includeDirectiveToken = new IncludeDirectiveToken(filePath);
      }

      return includeDirectiveToken;
    }
  }]);

  return IncludeDirectiveToken;
}();

module.exports = IncludeDirectiveToken;

function first(array) {
  return array[0];
}
function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9pbmNsdWRlRGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbIkluY2x1ZGVEaXJlY3RpdmVUb2tlbiIsImZpbGVQYXRoIiwiaHRtbCIsImNvbnRlbnQiLCJwb3NpdGlvbiIsInNlYXJjaCIsImxpbmUiLCJpbmNsdWRlRGlyZWN0aXZlVG9rZW4iLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsInN0ciIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxxQjtBQUNKLGlDQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtBLFFBQVo7QUFDRDs7OzhCQXdCUztBQUNSLFVBQUlDLE9BQU8sS0FBS0QsUUFBaEIsQ0FEUSxDQUNtQjs7QUFFM0IsYUFBT0MsSUFBUDtBQUNEOzs7NkJBMUJlQyxPLEVBQVM7QUFDdkIsVUFBSUMsV0FBV0QsUUFBUUUsTUFBUixDQUFlLG9CQUFmLENBQWY7O0FBRUEsYUFBT0QsUUFBUDtBQUNEOzs7Z0NBRWtCRCxPLEVBQVNHLEksRUFBTTtBQUNoQyxVQUFJQyx3QkFBd0IsSUFBNUI7QUFBQSxVQUNJQyxVQUFVTCxRQUFRTSxLQUFSLENBQWMsdUJBQWQsQ0FEZDs7QUFHQSxVQUFJRCxPQUFKLEVBQWE7QUFDWCxZQUFJRSxhQUFhQyxNQUFNSCxPQUFOLENBQWpCO0FBQUEsWUFDSUksY0FBY0MsT0FBT0wsT0FBUCxDQURsQjtBQUFBLFlBRUlNLE1BQU1KLFVBRlY7QUFBQSxZQUVzQjtBQUNsQlQsbUJBQVdXLFdBSGYsQ0FEVyxDQUlpQjs7QUFFNUJMLGdDQUF3QixJQUFJUCxxQkFBSixDQUEwQkMsUUFBMUIsQ0FBeEI7QUFDRDs7QUFFRCxhQUFPTSxxQkFBUDtBQUNEOzs7Ozs7QUFTSFEsT0FBT0MsT0FBUCxHQUFpQmhCLHFCQUFqQjs7QUFFQSxTQUFTVyxLQUFULENBQWVNLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMxQyxTQUFTSixNQUFULENBQWdCSSxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6ImluY2x1ZGVEaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEluY2x1ZGVEaXJlY3RpdmVUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVQYXRoKSB7ICAgIFxuICAgIHRoaXMuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uKGNvbnRlbnQpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvaW5jbHVkZVxcKFwiW15cIl0qXCJcXCkvKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBsaW5lKSB7XG4gICAgdmFyIGluY2x1ZGVEaXJlY3RpdmVUb2tlbiA9IG51bGwsXG4gICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9eaW5jbHVkZVxcKFwiKFteXCJdKilcIlxcKS8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgc3RyID0gZmlyc3RNYXRjaCwgLy8vXG4gICAgICAgICAgZmlsZVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICAgIGluY2x1ZGVEaXJlY3RpdmVUb2tlbiA9IG5ldyBJbmNsdWRlRGlyZWN0aXZlVG9rZW4oZmlsZVBhdGgpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gaW5jbHVkZURpcmVjdGl2ZVRva2VuO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICB2YXIgaHRtbCA9IHRoaXMuZmlsZVBhdGg7ICAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5jbHVkZURpcmVjdGl2ZVRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiJdfQ==