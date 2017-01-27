'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('../token/significant');

var WhitespaceToken = function (_SignificantToken) {
  _inherits(WhitespaceToken, _SignificantToken);

  function WhitespaceToken(content, line) {
    _classCallCheck(this, WhitespaceToken);

    var type = SignificantToken.types.whitespace;

    return _possibleConstructorReturn(this, (WhitespaceToken.__proto__ || Object.getPrototypeOf(WhitespaceToken)).call(this, content, line, type));
  }

  _createClass(WhitespaceToken, [{
    key: 'clone',
    value: function clone() {
      return _get(WhitespaceToken.prototype.__proto__ || Object.getPrototypeOf(WhitespaceToken.prototype), 'clone', this).call(this, WhitespaceToken);
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
      var whitespaceToken = null,
          matches = content.match(/([\t ]+)/);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        whitespaceToken = new WhitespaceToken(content, line);
      }

      return whitespaceToken;
    }
  }]);

  return WhitespaceToken;
}(SignificantToken);

module.exports = WhitespaceToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vd2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuIiwicmVxdWlyZSIsIldoaXRlc3BhY2VUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwidHlwZSIsInR5cGVzIiwid2hpdGVzcGFjZSIsInBvc2l0aW9uIiwic2VhcmNoIiwid2hpdGVzcGFjZVRva2VuIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsbUJBQW1CQyxRQUFRLHNCQUFSLENBQXZCOztJQUVNQyxlOzs7QUFDSiwyQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkI7QUFBQTs7QUFDekIsUUFBSUMsT0FBT0wsaUJBQWlCTSxLQUFqQixDQUF1QkMsVUFBbEM7O0FBRHlCLDZIQUduQkosT0FIbUIsRUFHVkMsSUFIVSxFQUdKQyxJQUhJO0FBSTFCOzs7OzRCQUVRO0FBQUUscUlBQW1CSCxlQUFuQjtBQUFzQzs7OzZCQUVqQ0MsTyxFQUFTO0FBQ3ZCLFVBQUlLLFdBQVdMLFFBQVFNLE1BQVIsQ0FBZSxRQUFmLENBQWY7O0FBRUEsYUFBT0QsUUFBUDtBQUNEOzs7Z0NBRWtCTCxPLEVBQVNDLEksRUFBTTtBQUNoQyxVQUFJTSxrQkFBa0IsSUFBdEI7QUFBQSxVQUNJQyxVQUFVUixRQUFRUyxLQUFSLENBQWMsVUFBZCxDQURkOztBQUdBLFVBQUlELE9BQUosRUFBYTtBQUNYLFlBQUlFLGFBQWFDLE1BQU1ILE9BQU4sQ0FBakI7O0FBRUFSLGtCQUFVVSxVQUFWLENBSFcsQ0FHVzs7QUFFdEJILDBCQUFrQixJQUFJUixlQUFKLENBQW9CQyxPQUFwQixFQUE2QkMsSUFBN0IsQ0FBbEI7QUFDRDs7QUFHRCxhQUFPTSxlQUFQO0FBQ0Q7Ozs7RUE3QjJCVixnQjs7QUFnQzlCZSxPQUFPQyxPQUFQLEdBQWlCZCxlQUFqQjs7QUFFQSxTQUFTWSxLQUFULENBQWVHLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ3aGl0ZXNwYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL3NpZ25pZmljYW50Jyk7XG5cbmNsYXNzIFdoaXRlc3BhY2VUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lKSB7XG4gICAgdmFyIHR5cGUgPSBTaWduaWZpY2FudFRva2VuLnR5cGVzLndoaXRlc3BhY2U7XG4gICAgXG4gICAgc3VwZXIoY29udGVudCwgbGluZSwgdHlwZSk7XG4gIH1cblxuICBjbG9uZSAoKSB7IHJldHVybiBzdXBlci5jbG9uZShXaGl0ZXNwYWNlVG9rZW4pOyB9XG5cbiAgc3RhdGljIHBvc2l0aW9uKGNvbnRlbnQpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvW1xcdCBdKy8pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpIHtcbiAgICB2YXIgd2hpdGVzcGFjZVRva2VuID0gbnVsbCxcbiAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goLyhbXFx0IF0rKS8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG4gICAgICBcbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgd2hpdGVzcGFjZVRva2VuID0gbmV3IFdoaXRlc3BhY2VUb2tlbihjb250ZW50LCBsaW5lKTtcbiAgICB9XG5cblxuICAgIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXaGl0ZXNwYWNlVG9rZW47XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19