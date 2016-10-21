'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var IncludeDirectiveToken = function (_Token) {
  _inherits(IncludeDirectiveToken, _Token);

  function IncludeDirectiveToken(str, line, filePath) {
    _classCallCheck(this, IncludeDirectiveToken);

    var _this = _possibleConstructorReturn(this, (IncludeDirectiveToken.__proto__ || Object.getPrototypeOf(IncludeDirectiveToken)).call(this, str, line));

    _this.filePath = filePath;
    return _this;
  }

  _createClass(IncludeDirectiveToken, [{
    key: 'getFilePath',
    value: function getFilePath() {
      return this.filePath;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var html = this.str; ///

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

        includeDirectiveToken = new IncludeDirectiveToken(str, line, filePath);
      }

      return includeDirectiveToken;
    }
  }]);

  return IncludeDirectiveToken;
}(Token);

module.exports = IncludeDirectiveToken;

function first(array) {
  return array[0];
}
function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vaW5jbHVkZURpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJUb2tlbiIsInJlcXVpcmUiLCJJbmNsdWRlRGlyZWN0aXZlVG9rZW4iLCJzdHIiLCJsaW5lIiwiZmlsZVBhdGgiLCJodG1sIiwiY29udGVudCIsInBvc2l0aW9uIiwic2VhcmNoIiwiaW5jbHVkZURpcmVjdGl2ZVRva2VuIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0Iiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxVQUFSLENBQVo7O0lBRU1DLHFCOzs7QUFDSixpQ0FBWUMsR0FBWixFQUFpQkMsSUFBakIsRUFBdUJDLFFBQXZCLEVBQWlDO0FBQUE7O0FBQUEsOElBQ3pCRixHQUR5QixFQUNwQkMsSUFEb0I7O0FBRy9CLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBSCtCO0FBSWhDOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQSxRQUFaO0FBQ0Q7Ozs4QkF3QlM7QUFDUixVQUFJQyxPQUFPLEtBQUtILEdBQWhCLENBRFEsQ0FDYzs7QUFFdEIsYUFBT0csSUFBUDtBQUNEOzs7NkJBMUJlQyxPLEVBQVM7QUFDdkIsVUFBSUMsV0FBV0QsUUFBUUUsTUFBUixDQUFlLG9CQUFmLENBQWY7O0FBRUEsYUFBT0QsUUFBUDtBQUNEOzs7Z0NBRWtCRCxPLEVBQVNILEksRUFBTTtBQUNoQyxVQUFJTSx3QkFBd0IsSUFBNUI7QUFBQSxVQUNJQyxVQUFVSixRQUFRSyxLQUFSLENBQWMsdUJBQWQsQ0FEZDs7QUFHQSxVQUFJRCxPQUFKLEVBQWE7QUFDWCxZQUFJRSxhQUFhQyxNQUFNSCxPQUFOLENBQWpCO0FBQUEsWUFDSUksY0FBY0MsT0FBT0wsT0FBUCxDQURsQjtBQUFBLFlBRUlSLE1BQU1VLFVBRlY7QUFBQSxZQUVzQjtBQUNsQlIsbUJBQVdVLFdBSGYsQ0FEVyxDQUlpQjs7QUFFNUJMLGdDQUF3QixJQUFJUixxQkFBSixDQUEwQkMsR0FBMUIsRUFBK0JDLElBQS9CLEVBQXFDQyxRQUFyQyxDQUF4QjtBQUNEOztBQUVELGFBQU9LLHFCQUFQO0FBQ0Q7Ozs7RUEvQmlDVixLOztBQXdDcENpQixPQUFPQyxPQUFQLEdBQWlCaEIscUJBQWpCOztBQUVBLFNBQVNZLEtBQVQsQ0FBZUssS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzFDLFNBQVNILE1BQVQsQ0FBZ0JHLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoiaW5jbHVkZURpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4nKTtcblxuY2xhc3MgSW5jbHVkZURpcmVjdGl2ZVRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihzdHIsIGxpbmUsIGZpbGVQYXRoKSB7XG4gICAgc3VwZXIoc3RyLCBsaW5lKTtcblxuICAgIHRoaXMuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uKGNvbnRlbnQpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvaW5jbHVkZVxcKFwiW15cIl0qXCJcXCkvKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBsaW5lKSB7XG4gICAgdmFyIGluY2x1ZGVEaXJlY3RpdmVUb2tlbiA9IG51bGwsXG4gICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9eaW5jbHVkZVxcKFwiKFteXCJdKilcIlxcKS8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgc3RyID0gZmlyc3RNYXRjaCwgLy8vXG4gICAgICAgICAgZmlsZVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICAgIGluY2x1ZGVEaXJlY3RpdmVUb2tlbiA9IG5ldyBJbmNsdWRlRGlyZWN0aXZlVG9rZW4oc3RyLCBsaW5lLCBmaWxlUGF0aCk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBpbmNsdWRlRGlyZWN0aXZlVG9rZW47XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIHZhciBodG1sID0gdGhpcy5zdHI7ICAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5jbHVkZURpcmVjdGl2ZVRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiJdfQ==