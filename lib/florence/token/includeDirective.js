'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../../common/token');

var IncludeDirectiveToken = function (_Token) {
  _inherits(IncludeDirectiveToken, _Token);

  function IncludeDirectiveToken(content, line, filePath) {
    _classCallCheck(this, IncludeDirectiveToken);

    var _this = _possibleConstructorReturn(this, (IncludeDirectiveToken.__proto__ || Object.getPrototypeOf(IncludeDirectiveToken)).call(this, content, line));

    _this.filePath = filePath;
    return _this;
  }

  _createClass(IncludeDirectiveToken, [{
    key: 'clone',
    value: function clone() {
      var content = this.getContent(),
          line = this.getLine(),
          filePath = this.getFilePath(),
          IncludeDirectiveToken = new IncludeDirectiveToken(content, line, filePath);

      return IncludeDirectiveToken;
    }
  }, {
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
            filePath = secondMatch; ///

        content = firstMatch; ///

        includeDirectiveToken = new IncludeDirectiveToken(content, line, filePath);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9pbmNsdWRlRGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbIlRva2VuIiwicmVxdWlyZSIsIkluY2x1ZGVEaXJlY3RpdmVUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwiZmlsZVBhdGgiLCJnZXRDb250ZW50IiwiZ2V0TGluZSIsImdldEZpbGVQYXRoIiwiaHRtbCIsInBvc2l0aW9uIiwic2VhcmNoIiwiaW5jbHVkZURpcmVjdGl2ZVRva2VuIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0Iiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxvQkFBUixDQUFaOztJQUVNQyxxQjs7O0FBQ0osaUNBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQTJCQyxRQUEzQixFQUFxQztBQUFBOztBQUFBLDhJQUM3QkYsT0FENkIsRUFDcEJDLElBRG9COztBQUduQyxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUhtQztBQUlwQzs7Ozs0QkFFTztBQUNOLFVBQUlGLFVBQVUsS0FBS0csVUFBTCxFQUFkO0FBQUEsVUFDSUYsT0FBTyxLQUFLRyxPQUFMLEVBRFg7QUFBQSxVQUVJRixXQUFXLEtBQUtHLFdBQUwsRUFGZjtBQUFBLFVBR0lOLHdCQUF3QixJQUFJQSxxQkFBSixDQUEwQkMsT0FBMUIsRUFBbUNDLElBQW5DLEVBQXlDQyxRQUF6QyxDQUg1Qjs7QUFLQSxhQUFPSCxxQkFBUDtBQUNEOzs7a0NBRWE7QUFDWixhQUFPLEtBQUtHLFFBQVo7QUFDRDs7OzhCQXlCUztBQUNSLFVBQUlJLE9BQU8sS0FBS0osUUFBaEIsQ0FEUSxDQUNtQjs7QUFFM0IsYUFBT0ksSUFBUDtBQUNEOzs7NkJBM0JlTixPLEVBQVM7QUFDdkIsVUFBSU8sV0FBV1AsUUFBUVEsTUFBUixDQUFlLG9CQUFmLENBQWY7O0FBRUEsYUFBT0QsUUFBUDtBQUNEOzs7Z0NBRWtCUCxPLEVBQVNDLEksRUFBTTtBQUNoQyxVQUFJUSx3QkFBd0IsSUFBNUI7QUFBQSxVQUNJQyxVQUFVVixRQUFRVyxLQUFSLENBQWMsdUJBQWQsQ0FEZDs7QUFHQSxVQUFJRCxPQUFKLEVBQWE7QUFDWCxZQUFJRSxhQUFhQyxNQUFNSCxPQUFOLENBQWpCO0FBQUEsWUFDSUksY0FBY0MsT0FBT0wsT0FBUCxDQURsQjtBQUFBLFlBRUlSLFdBQVdZLFdBRmYsQ0FEVyxDQUdpQjs7QUFFNUJkLGtCQUFVWSxVQUFWLENBTFcsQ0FLVzs7QUFFdEJILGdDQUF3QixJQUFJVixxQkFBSixDQUEwQkMsT0FBMUIsRUFBbUNDLElBQW5DLEVBQXlDQyxRQUF6QyxDQUF4QjtBQUNEOztBQUVELGFBQU9PLHFCQUFQO0FBQ0Q7Ozs7RUF6Q2lDWixLOztBQWtEcENtQixPQUFPQyxPQUFQLEdBQWlCbEIscUJBQWpCOztBQUVBLFNBQVNjLEtBQVQsQ0FBZUssS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzFDLFNBQVNILE1BQVQsQ0FBZ0JHLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoiaW5jbHVkZURpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRva2VuID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Rva2VuJyk7XG5cbmNsYXNzIEluY2x1ZGVEaXJlY3RpdmVUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgZmlsZVBhdGgpIHtcbiAgICBzdXBlcihjb250ZW50LCBsaW5lKTtcblxuICAgIHRoaXMuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgIGxpbmUgPSB0aGlzLmdldExpbmUoKSxcbiAgICAgICAgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgIEluY2x1ZGVEaXJlY3RpdmVUb2tlbiA9IG5ldyBJbmNsdWRlRGlyZWN0aXZlVG9rZW4oY29udGVudCwgbGluZSwgZmlsZVBhdGgpO1xuXG4gICAgcmV0dXJuIEluY2x1ZGVEaXJlY3RpdmVUb2tlbjtcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uKGNvbnRlbnQpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvaW5jbHVkZVxcKFwiW15cIl0qXCJcXCkvKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBsaW5lKSB7XG4gICAgdmFyIGluY2x1ZGVEaXJlY3RpdmVUb2tlbiA9IG51bGwsXG4gICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9eaW5jbHVkZVxcKFwiKFteXCJdKilcIlxcKS8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgZmlsZVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgaW5jbHVkZURpcmVjdGl2ZVRva2VuID0gbmV3IEluY2x1ZGVEaXJlY3RpdmVUb2tlbihjb250ZW50LCBsaW5lLCBmaWxlUGF0aCk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBpbmNsdWRlRGlyZWN0aXZlVG9rZW47XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIHZhciBodG1sID0gdGhpcy5maWxlUGF0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbmNsdWRlRGlyZWN0aXZlVG9rZW47XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19