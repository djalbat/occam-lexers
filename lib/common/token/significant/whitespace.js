'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('../significant');

var WhitespaceToken = function (_SignificantToken) {
  _inherits(WhitespaceToken, _SignificantToken);

  function WhitespaceToken() {
    _classCallCheck(this, WhitespaceToken);

    return _possibleConstructorReturn(this, (WhitespaceToken.__proto__ || Object.getPrototypeOf(WhitespaceToken)).apply(this, arguments));
  }

  _createClass(WhitespaceToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(this, startPosition, endPosition, WhitespaceToken);
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var html = this.innerHTML; ///

      return html;
    }
  }], [{
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      return SignificantToken.fromContentLineAndType(content, line, type, WhitespaceToken);
    }
  }, {
    key: 'fromWithinContentAndLine',
    value: function fromWithinContentAndLine(content, line) {
      var whitespaceToken = null;

      var matches = content.match(/([\t ]+)/);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        var type = WhitespaceToken.type;

        whitespaceToken = WhitespaceToken.fromContentLineAndType(content, line, type);
      }

      return whitespaceToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      var position = content.search(/[\t ]+/);

      return position;
    }
  }]);

  return WhitespaceToken;
}(SignificantToken);

module.exports = WhitespaceToken;

WhitespaceToken.type = 'whitespace';

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvd2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuIiwicmVxdWlyZSIsIldoaXRlc3BhY2VUb2tlbiIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNsb25lIiwiaHRtbCIsImlubmVySFRNTCIsImNvbnRlbnQiLCJsaW5lIiwidHlwZSIsImZyb21Db250ZW50TGluZUFuZFR5cGUiLCJ3aGl0ZXNwYWNlVG9rZW4iLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJwb3NpdGlvbiIsInNlYXJjaCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxtQkFBbUJDLFFBQVEsZ0JBQVIsQ0FBekI7O0lBRU1DLGU7Ozs7Ozs7Ozs7OzBCQUNFQyxhLEVBQWVDLFcsRUFBYTtBQUFFLGFBQU9KLGlCQUFpQkssS0FBakIsQ0FBdUIsSUFBdkIsRUFBNkJGLGFBQTdCLEVBQTRDQyxXQUE1QyxFQUF5REYsZUFBekQsQ0FBUDtBQUFtRjs7OzhCQUU3RztBQUNSLFVBQU1JLE9BQU8sS0FBS0MsU0FBbEIsQ0FEUSxDQUNzQjs7QUFFOUIsYUFBT0QsSUFBUDtBQUNEOzs7MkNBRTZCRSxPLEVBQVNDLEksRUFBTUMsSSxFQUFNO0FBQUUsYUFBT1YsaUJBQWlCVyxzQkFBakIsQ0FBd0NILE9BQXhDLEVBQWlEQyxJQUFqRCxFQUF1REMsSUFBdkQsRUFBNkRSLGVBQTdELENBQVA7QUFBdUY7Ozs2Q0FFNUdNLE8sRUFBU0MsSSxFQUFNO0FBQzdDLFVBQUlHLGtCQUFrQixJQUF0Qjs7QUFFQSxVQUFNQyxVQUFVTCxRQUFRTSxLQUFSLENBQWMsVUFBZCxDQUFoQjs7QUFFQSxVQUFJRCxPQUFKLEVBQWE7QUFDWCxZQUFNRSxhQUFhQyxNQUFNSCxPQUFOLENBQW5COztBQUVBTCxrQkFBVU8sVUFBVixDQUhXLENBR1c7O0FBRXRCLFlBQU1MLE9BQU9SLGdCQUFnQlEsSUFBN0I7O0FBRUFFLDBCQUFrQlYsZ0JBQWdCUyxzQkFBaEIsQ0FBdUNILE9BQXZDLEVBQWdEQyxJQUFoRCxFQUFzREMsSUFBdEQsQ0FBbEI7QUFDRDs7QUFFRCxhQUFPRSxlQUFQO0FBQ0Q7OzswQ0FFNEJKLE8sRUFBUztBQUNwQyxVQUFNUyxXQUFXVCxRQUFRVSxNQUFSLENBQWUsUUFBZixDQUFqQjs7QUFFQSxhQUFPRCxRQUFQO0FBQ0Q7Ozs7RUFqQzJCakIsZ0I7O0FBb0M5Qm1CLE9BQU9DLE9BQVAsR0FBaUJsQixlQUFqQjs7QUFFQUEsZ0JBQWdCUSxJQUFoQixHQUF1QixZQUF2Qjs7QUFFQSxTQUFTTSxLQUFULENBQWVLLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ3aGl0ZXNwYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgV2hpdGVzcGFjZVRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBXaGl0ZXNwYWNlVG9rZW4pOyB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5pbm5lckhUTUw7ICAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUsIFdoaXRlc3BhY2VUb2tlbik7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHtcbiAgICBsZXQgd2hpdGVzcGFjZVRva2VuID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvKFtcXHQgXSspLyk7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuICAgICAgXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG4gICAgICBcbiAgICAgIGNvbnN0IHR5cGUgPSBXaGl0ZXNwYWNlVG9rZW4udHlwZTtcblxuICAgICAgd2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goL1tcXHQgXSsvKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdoaXRlc3BhY2VUb2tlbjtcblxuV2hpdGVzcGFjZVRva2VuLnR5cGUgPSAnd2hpdGVzcGFjZSc7IFxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==