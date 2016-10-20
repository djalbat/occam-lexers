'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../../common/token');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9pbmNsdWRlRGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbIlRva2VuIiwicmVxdWlyZSIsIkluY2x1ZGVEaXJlY3RpdmVUb2tlbiIsInN0ciIsImxpbmUiLCJmaWxlUGF0aCIsImh0bWwiLCJjb250ZW50IiwicG9zaXRpb24iLCJzZWFyY2giLCJpbmNsdWRlRGlyZWN0aXZlVG9rZW4iLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLG9CQUFSLENBQVo7O0lBRU1DLHFCOzs7QUFDSixpQ0FBWUMsR0FBWixFQUFpQkMsSUFBakIsRUFBdUJDLFFBQXZCLEVBQWlDO0FBQUE7O0FBQUEsOElBQ3pCRixHQUR5QixFQUNwQkMsSUFEb0I7O0FBRy9CLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBSCtCO0FBSWhDOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQSxRQUFaO0FBQ0Q7Ozs4QkF3QlM7QUFDUixVQUFJQyxPQUFPLEtBQUtILEdBQWhCLENBRFEsQ0FDYzs7QUFFdEIsYUFBT0csSUFBUDtBQUNEOzs7NkJBMUJlQyxPLEVBQVM7QUFDdkIsVUFBSUMsV0FBV0QsUUFBUUUsTUFBUixDQUFlLG9CQUFmLENBQWY7O0FBRUEsYUFBT0QsUUFBUDtBQUNEOzs7Z0NBRWtCRCxPLEVBQVNILEksRUFBTTtBQUNoQyxVQUFJTSx3QkFBd0IsSUFBNUI7QUFBQSxVQUNJQyxVQUFVSixRQUFRSyxLQUFSLENBQWMsdUJBQWQsQ0FEZDs7QUFHQSxVQUFJRCxPQUFKLEVBQWE7QUFDWCxZQUFJRSxhQUFhQyxNQUFNSCxPQUFOLENBQWpCO0FBQUEsWUFDSUksY0FBY0MsT0FBT0wsT0FBUCxDQURsQjtBQUFBLFlBRUlSLE1BQU1VLFVBRlY7QUFBQSxZQUVzQjtBQUNsQlIsbUJBQVdVLFdBSGYsQ0FEVyxDQUlpQjs7QUFFNUJMLGdDQUF3QixJQUFJUixxQkFBSixDQUEwQkMsR0FBMUIsRUFBK0JDLElBQS9CLEVBQXFDQyxRQUFyQyxDQUF4QjtBQUNEOztBQUVELGFBQU9LLHFCQUFQO0FBQ0Q7Ozs7RUEvQmlDVixLOztBQXdDcENpQixPQUFPQyxPQUFQLEdBQWlCaEIscUJBQWpCOztBQUVBLFNBQVNZLEtBQVQsQ0FBZUssS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzFDLFNBQVNILE1BQVQsQ0FBZ0JHLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoiaW5jbHVkZURpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRva2VuID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Rva2VuJyk7XG5cbmNsYXNzIEluY2x1ZGVEaXJlY3RpdmVUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgY29uc3RydWN0b3Ioc3RyLCBsaW5lLCBmaWxlUGF0aCkge1xuICAgIHN1cGVyKHN0ciwgbGluZSk7XG5cbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbihjb250ZW50KSB7XG4gICAgdmFyIHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goL2luY2x1ZGVcXChcIlteXCJdKlwiXFwpLyk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSkge1xuICAgIHZhciBpbmNsdWRlRGlyZWN0aXZlVG9rZW4gPSBudWxsLFxuICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXmluY2x1ZGVcXChcIihbXlwiXSopXCJcXCkvKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHN0ciA9IGZpcnN0TWF0Y2gsIC8vL1xuICAgICAgICAgIGZpbGVQYXRoID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gICAgICBpbmNsdWRlRGlyZWN0aXZlVG9rZW4gPSBuZXcgSW5jbHVkZURpcmVjdGl2ZVRva2VuKHN0ciwgbGluZSwgZmlsZVBhdGgpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gaW5jbHVkZURpcmVjdGl2ZVRva2VuO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICB2YXIgaHRtbCA9IHRoaXMuc3RyOyAgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEluY2x1ZGVEaXJlY3RpdmVUb2tlbjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iXX0=