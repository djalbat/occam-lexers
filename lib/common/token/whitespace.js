'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('../token/significant');

var WhitespaceToken = function (_SignificantToken) {
  _inherits(WhitespaceToken, _SignificantToken);

  function WhitespaceToken(str, line) {
    _classCallCheck(this, WhitespaceToken);

    var type = WhitespaceToken.type;

    return _possibleConstructorReturn(this, (WhitespaceToken.__proto__ || Object.getPrototypeOf(WhitespaceToken)).call(this, str, line, type));
  }

  _createClass(WhitespaceToken, [{
    key: 'getHTML',
    value: function getHTML() {
      var str = this.getString(),
          html = str; ///

      return html;
    }
  }], [{
    key: 'position',
    value: function position(content) {
      var position = content.search(/[\t ]+/);

      return position;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content, line) {
      var matches = content.match(/^([\t ]+)/);

      if (!matches) {
        return null;
      }

      var firstMatch = first(matches),
          str = firstMatch,
          ///
      whitespaceToken = new WhitespaceToken(str, line);

      return whitespaceToken;
    }
  }]);

  return WhitespaceToken;
}(SignificantToken);

WhitespaceToken.type = "whitespace";

module.exports = WhitespaceToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vd2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuIiwicmVxdWlyZSIsIldoaXRlc3BhY2VUb2tlbiIsInN0ciIsImxpbmUiLCJ0eXBlIiwiZ2V0U3RyaW5nIiwiaHRtbCIsImNvbnRlbnQiLCJwb3NpdGlvbiIsInNlYXJjaCIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJmaXJzdCIsIndoaXRlc3BhY2VUb2tlbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxtQkFBbUJDLFFBQVEsc0JBQVIsQ0FBdkI7O0lBRU1DLGU7OztBQUNKLDJCQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixFQUF1QjtBQUFBOztBQUNyQixRQUFJQyxPQUFPSCxnQkFBZ0JHLElBQTNCOztBQURxQiw2SEFHZkYsR0FIZSxFQUdWQyxJQUhVLEVBR0pDLElBSEk7QUFJdEI7Ozs7OEJBRVM7QUFDUixVQUFJRixNQUFNLEtBQUtHLFNBQUwsRUFBVjtBQUFBLFVBQ0lDLE9BQU9KLEdBRFgsQ0FEUSxDQUVROztBQUVoQixhQUFPSSxJQUFQO0FBQ0Q7Ozs2QkFFZUMsTyxFQUFTO0FBQ3ZCLFVBQUlDLFdBQVdELFFBQVFFLE1BQVIsQ0FBZSxRQUFmLENBQWY7O0FBRUEsYUFBT0QsUUFBUDtBQUNEOzs7Z0NBRWtCRCxPLEVBQVNKLEksRUFBTTtBQUNoQyxVQUFJTyxVQUFVSCxRQUFRSSxLQUFSLENBQWMsV0FBZCxDQUFkOztBQUVBLFVBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1osZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBSUUsYUFBYUMsTUFBTUgsT0FBTixDQUFqQjtBQUFBLFVBQ0lSLE1BQU1VLFVBRFY7QUFBQSxVQUNzQjtBQUNsQkUsd0JBQWtCLElBQUliLGVBQUosQ0FBb0JDLEdBQXBCLEVBQXlCQyxJQUF6QixDQUZ0Qjs7QUFJQSxhQUFPVyxlQUFQO0FBQ0Q7Ozs7RUFoQzJCZixnQjs7QUFtQzlCRSxnQkFBZ0JHLElBQWhCLEdBQXVCLFlBQXZCOztBQUVBVyxPQUFPQyxPQUFQLEdBQWlCZixlQUFqQjs7QUFFQSxTQUFTWSxLQUFULENBQWVJLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ3aGl0ZXNwYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL3NpZ25pZmljYW50Jyk7XG5cbmNsYXNzIFdoaXRlc3BhY2VUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3RvcihzdHIsIGxpbmUpIHtcbiAgICB2YXIgdHlwZSA9IFdoaXRlc3BhY2VUb2tlbi50eXBlO1xuICAgIFxuICAgIHN1cGVyKHN0ciwgbGluZSwgdHlwZSk7XG4gIH1cbiAgXG4gIGdldEhUTUwoKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgIGh0bWwgPSBzdHI7IC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb24oY29udGVudCkge1xuICAgIHZhciBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKC9bXFx0IF0rLyk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSkge1xuICAgIHZhciBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXihbXFx0IF0rKS8pO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICBzdHIgPSBmaXJzdE1hdGNoLCAvLy9cbiAgICAgICAgd2hpdGVzcGFjZVRva2VuID0gbmV3IFdoaXRlc3BhY2VUb2tlbihzdHIsIGxpbmUpO1xuXG4gICAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcbiAgfVxufVxuXG5XaGl0ZXNwYWNlVG9rZW4udHlwZSA9IFwid2hpdGVzcGFjZVwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdoaXRlc3BhY2VUb2tlbjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=