'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('../token/significant');

var WhitespaceToken = function (_SignificantToken) {
  _inherits(WhitespaceToken, _SignificantToken);

  function WhitespaceToken() {
    _classCallCheck(this, WhitespaceToken);

    return _possibleConstructorReturn(this, (WhitespaceToken.__proto__ || Object.getPrototypeOf(WhitespaceToken)).apply(this, arguments));
  }

  _createClass(WhitespaceToken, [{
    key: 'toPosition',
    value: function toPosition(position) {
      return SignificantToken.toPosition(this, position, WhitespaceToken);
    }
  }, {
    key: 'fromPosition',
    value: function fromPosition(position) {
      return SignificantToken.fromPosition(this, position, WhitespaceToken);
    }
  }], [{
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      var whitespaceToken = null,
          matches = content.match(/([\t ]+)/);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        whitespaceToken = SignificantToken.fromContentAndLine(content, line, WhitespaceToken);
      }

      return whitespaceToken;
    }
  }, {
    key: 'position',
    value: function position(content) {
      var position = content.search(/[\t ]+/);

      return position;
    }
  }]);

  return WhitespaceToken;
}(SignificantToken);

WhitespaceToken.type = SignificantToken.types.whitespace;

module.exports = WhitespaceToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vd2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuIiwicmVxdWlyZSIsIldoaXRlc3BhY2VUb2tlbiIsInBvc2l0aW9uIiwidG9Qb3NpdGlvbiIsImZyb21Qb3NpdGlvbiIsImNvbnRlbnQiLCJsaW5lIiwid2hpdGVzcGFjZVRva2VuIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwiZnJvbUNvbnRlbnRBbmRMaW5lIiwic2VhcmNoIiwidHlwZSIsInR5cGVzIiwid2hpdGVzcGFjZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxtQkFBbUJDLFFBQVEsc0JBQVIsQ0FBdkI7O0lBRU1DLGU7Ozs7Ozs7Ozs7OytCQUNPQyxRLEVBQVU7QUFBRSxhQUFPSCxpQkFBaUJJLFVBQWpCLENBQTRCLElBQTVCLEVBQWtDRCxRQUFsQyxFQUE0Q0QsZUFBNUMsQ0FBUDtBQUFxRTs7O2lDQUUvRUMsUSxFQUFVO0FBQUUsYUFBT0gsaUJBQWlCSyxZQUFqQixDQUE4QixJQUE5QixFQUFvQ0YsUUFBcEMsRUFBOENELGVBQTlDLENBQVA7QUFBdUU7Ozt1Q0FFdEVJLE8sRUFBU0MsSSxFQUFNO0FBQ3ZDLFVBQUlDLGtCQUFrQixJQUF0QjtBQUFBLFVBQ0lDLFVBQVVILFFBQVFJLEtBQVIsQ0FBYyxVQUFkLENBRGQ7O0FBR0EsVUFBSUQsT0FBSixFQUFhO0FBQ1gsWUFBSUUsYUFBYUMsTUFBTUgsT0FBTixDQUFqQjs7QUFFQUgsa0JBQVVLLFVBQVYsQ0FIVyxDQUdXOztBQUV0QkgsMEJBQWtCUixpQkFBaUJhLGtCQUFqQixDQUFvQ1AsT0FBcEMsRUFBNkNDLElBQTdDLEVBQW1ETCxlQUFuRCxDQUFsQjtBQUNEOztBQUVELGFBQU9NLGVBQVA7QUFDRDs7OzZCQUVlRixPLEVBQVM7QUFDdkIsVUFBSUgsV0FBV0csUUFBUVEsTUFBUixDQUFlLFFBQWYsQ0FBZjs7QUFFQSxhQUFPWCxRQUFQO0FBQ0Q7Ozs7RUF4QjJCSCxnQjs7QUEyQjlCRSxnQkFBZ0JhLElBQWhCLEdBQXVCZixpQkFBaUJnQixLQUFqQixDQUF1QkMsVUFBOUM7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJqQixlQUFqQjs7QUFFQSxTQUFTVSxLQUFULENBQWVRLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ3aGl0ZXNwYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL3NpZ25pZmljYW50Jyk7XG5cbmNsYXNzIFdoaXRlc3BhY2VUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICB0b1Bvc2l0aW9uKHBvc2l0aW9uKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLnRvUG9zaXRpb24odGhpcywgcG9zaXRpb24sIFdoaXRlc3BhY2VUb2tlbikgfVxuXG4gIGZyb21Qb3NpdGlvbihwb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tUG9zaXRpb24odGhpcywgcG9zaXRpb24sIFdoaXRlc3BhY2VUb2tlbikgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIHZhciB3aGl0ZXNwYWNlVG9rZW4gPSBudWxsLFxuICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvKFtcXHQgXSspLyk7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgdmFyIGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcbiAgICAgIFxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICB3aGl0ZXNwYWNlVG9rZW4gPSBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBXaGl0ZXNwYWNlVG9rZW4pO1xuICAgIH1cblxuICAgIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb24oY29udGVudCkge1xuICAgIHZhciBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKC9bXFx0IF0rLyk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxuV2hpdGVzcGFjZVRva2VuLnR5cGUgPSBTaWduaWZpY2FudFRva2VuLnR5cGVzLndoaXRlc3BhY2U7XG5cbm1vZHVsZS5leHBvcnRzID0gV2hpdGVzcGFjZVRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==