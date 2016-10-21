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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9pbmNsdWRlRGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbIlRva2VuIiwicmVxdWlyZSIsIkluY2x1ZGVEaXJlY3RpdmVUb2tlbiIsInN0ciIsImxpbmUiLCJmaWxlUGF0aCIsImh0bWwiLCJjb250ZW50IiwicG9zaXRpb24iLCJzZWFyY2giLCJpbmNsdWRlRGlyZWN0aXZlVG9rZW4iLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLG9CQUFSLENBQVo7O0lBRU1DLHFCOzs7QUFDSixpQ0FBWUMsR0FBWixFQUFpQkMsSUFBakIsRUFBdUJDLFFBQXZCLEVBQWlDO0FBQUE7O0FBQUEsOElBQ3pCRixHQUR5QixFQUNwQkMsSUFEb0I7O0FBRy9CLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBSCtCO0FBSWhDOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQSxRQUFaO0FBQ0Q7Ozs4QkF3QlM7QUFDUixVQUFJQyxPQUFPLEtBQUtELFFBQWhCLENBRFEsQ0FDbUI7O0FBRTNCLGFBQU9DLElBQVA7QUFDRDs7OzZCQTFCZUMsTyxFQUFTO0FBQ3ZCLFVBQUlDLFdBQVdELFFBQVFFLE1BQVIsQ0FBZSxvQkFBZixDQUFmOztBQUVBLGFBQU9ELFFBQVA7QUFDRDs7O2dDQUVrQkQsTyxFQUFTSCxJLEVBQU07QUFDaEMsVUFBSU0sd0JBQXdCLElBQTVCO0FBQUEsVUFDSUMsVUFBVUosUUFBUUssS0FBUixDQUFjLHVCQUFkLENBRGQ7O0FBR0EsVUFBSUQsT0FBSixFQUFhO0FBQ1gsWUFBSUUsYUFBYUMsTUFBTUgsT0FBTixDQUFqQjtBQUFBLFlBQ0lJLGNBQWNDLE9BQU9MLE9BQVAsQ0FEbEI7QUFBQSxZQUVJUixNQUFNVSxVQUZWO0FBQUEsWUFFc0I7QUFDbEJSLG1CQUFXVSxXQUhmLENBRFcsQ0FJaUI7O0FBRTVCTCxnQ0FBd0IsSUFBSVIscUJBQUosQ0FBMEJDLEdBQTFCLEVBQStCQyxJQUEvQixFQUFxQ0MsUUFBckMsQ0FBeEI7QUFDRDs7QUFFRCxhQUFPSyxxQkFBUDtBQUNEOzs7O0VBL0JpQ1YsSzs7QUF3Q3BDaUIsT0FBT0MsT0FBUCxHQUFpQmhCLHFCQUFqQjs7QUFFQSxTQUFTWSxLQUFULENBQWVLLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMxQyxTQUFTSCxNQUFULENBQWdCRyxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6ImluY2x1ZGVEaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90b2tlbicpO1xuXG5jbGFzcyBJbmNsdWRlRGlyZWN0aXZlVG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHN0ciwgbGluZSwgZmlsZVBhdGgpIHtcbiAgICBzdXBlcihzdHIsIGxpbmUpO1xuXG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb24oY29udGVudCkge1xuICAgIHZhciBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKC9pbmNsdWRlXFwoXCJbXlwiXSpcIlxcKS8pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpIHtcbiAgICB2YXIgaW5jbHVkZURpcmVjdGl2ZVRva2VuID0gbnVsbCxcbiAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL15pbmNsdWRlXFwoXCIoW15cIl0qKVwiXFwpLyk7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgdmFyIGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBzdHIgPSBmaXJzdE1hdGNoLCAvLy9cbiAgICAgICAgICBmaWxlUGF0aCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICAgICAgaW5jbHVkZURpcmVjdGl2ZVRva2VuID0gbmV3IEluY2x1ZGVEaXJlY3RpdmVUb2tlbihzdHIsIGxpbmUsIGZpbGVQYXRoKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGluY2x1ZGVEaXJlY3RpdmVUb2tlbjtcbiAgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgdmFyIGh0bWwgPSB0aGlzLmZpbGVQYXRoOyAgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEluY2x1ZGVEaXJlY3RpdmVUb2tlbjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iXX0=