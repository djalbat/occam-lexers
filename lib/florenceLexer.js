'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlorenceLine = require('./florence/line');

var FlorenceLexer = function () {
  function FlorenceLexer() {
    _classCallCheck(this, FlorenceLexer);
  }

  _createClass(FlorenceLexer, null, [{
    key: 'linesFromContent',
    value: function linesFromContent(content, context) {
      var lines = CommonLexer.linesFromContent(content, context, FlorenceLine);

      return lines;
    }
  }]);

  return FlorenceLexer;
}();

module.exports = FlorenceLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mbG9yZW5jZUxleGVyLmpzIl0sIm5hbWVzIjpbIkZsb3JlbmNlTGluZSIsInJlcXVpcmUiLCJGbG9yZW5jZUxleGVyIiwiY29udGVudCIsImNvbnRleHQiLCJsaW5lcyIsIkNvbW1vbkxleGVyIiwibGluZXNGcm9tQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLGlCQUFSLENBQW5COztJQUVNQyxhOzs7Ozs7O3FDQUNvQkMsTyxFQUFTQyxPLEVBQVM7QUFDeEMsVUFBSUMsUUFBUUMsWUFBWUMsZ0JBQVosQ0FBNkJKLE9BQTdCLEVBQXNDQyxPQUF0QyxFQUErQ0osWUFBL0MsQ0FBWjs7QUFFQSxhQUFPSyxLQUFQO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCUCxhQUFqQiIsImZpbGUiOiJmbG9yZW5jZUxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIEZsb3JlbmNlTGluZSA9IHJlcXVpcmUoJy4vZmxvcmVuY2UvbGluZScpO1xyXG5cclxuY2xhc3MgRmxvcmVuY2VMZXhlciB7XHJcbiAgc3RhdGljIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCkge1xyXG4gICAgdmFyIGxpbmVzID0gQ29tbW9uTGV4ZXIubGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCBGbG9yZW5jZUxpbmUpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlTGV4ZXI7XHJcbiJdfQ==