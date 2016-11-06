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
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var content = this.getContent(),
          html = content; ///

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vd2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuIiwicmVxdWlyZSIsIldoaXRlc3BhY2VUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwidHlwZSIsInR5cGVzIiwid2hpdGVzcGFjZSIsImdldENvbnRlbnQiLCJodG1sIiwicG9zaXRpb24iLCJzZWFyY2giLCJ3aGl0ZXNwYWNlVG9rZW4iLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxtQkFBbUJDLFFBQVEsc0JBQVIsQ0FBdkI7O0lBRU1DLGU7OztBQUNKLDJCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQjtBQUFBOztBQUN6QixRQUFJQyxPQUFPTCxpQkFBaUJNLEtBQWpCLENBQXVCQyxVQUFsQzs7QUFEeUIsNkhBR25CSixPQUhtQixFQUdWQyxJQUhVLEVBR0pDLElBSEk7QUFJMUI7Ozs7NEJBRVE7QUFBRSxxSUFBbUJILGVBQW5CO0FBQXNDOzs7OEJBRXZDO0FBQ1IsVUFBSUMsVUFBVSxLQUFLSyxVQUFMLEVBQWQ7QUFBQSxVQUNJQyxPQUFPTixPQURYLENBRFEsQ0FFWTs7QUFFcEIsYUFBT00sSUFBUDtBQUNEOzs7NkJBRWVOLE8sRUFBUztBQUN2QixVQUFJTyxXQUFXUCxRQUFRUSxNQUFSLENBQWUsUUFBZixDQUFmOztBQUVBLGFBQU9ELFFBQVA7QUFDRDs7O2dDQUVrQlAsTyxFQUFTQyxJLEVBQU07QUFDaEMsVUFBSVEsa0JBQWtCLElBQXRCO0FBQUEsVUFDSUMsVUFBVVYsUUFBUVcsS0FBUixDQUFjLFVBQWQsQ0FEZDs7QUFHQSxVQUFJRCxPQUFKLEVBQWE7QUFDWCxZQUFJRSxhQUFhQyxNQUFNSCxPQUFOLENBQWpCOztBQUVBVixrQkFBVVksVUFBVixDQUhXLENBR1c7O0FBRXRCSCwwQkFBa0IsSUFBSVYsZUFBSixDQUFvQkMsT0FBcEIsRUFBNkJDLElBQTdCLENBQWxCO0FBQ0Q7O0FBR0QsYUFBT1EsZUFBUDtBQUNEOzs7O0VBcEMyQlosZ0I7O0FBdUM5QmlCLE9BQU9DLE9BQVAsR0FBaUJoQixlQUFqQjs7QUFFQSxTQUFTYyxLQUFULENBQWVHLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ3aGl0ZXNwYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL3NpZ25pZmljYW50Jyk7XG5cbmNsYXNzIFdoaXRlc3BhY2VUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lKSB7XG4gICAgdmFyIHR5cGUgPSBTaWduaWZpY2FudFRva2VuLnR5cGVzLndoaXRlc3BhY2U7XG4gICAgXG4gICAgc3VwZXIoY29udGVudCwgbGluZSwgdHlwZSk7XG4gIH1cblxuICBjbG9uZSAoKSB7IHJldHVybiBzdXBlci5jbG9uZShXaGl0ZXNwYWNlVG9rZW4pOyB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICBodG1sID0gY29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbihjb250ZW50KSB7XG4gICAgdmFyIHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goL1tcXHQgXSsvKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBsaW5lKSB7XG4gICAgdmFyIHdoaXRlc3BhY2VUb2tlbiA9IG51bGwsXG4gICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC8oW1xcdCBdKykvKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuICAgICAgXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgIHdoaXRlc3BhY2VUb2tlbiA9IG5ldyBXaGl0ZXNwYWNlVG9rZW4oY29udGVudCwgbGluZSk7XG4gICAgfVxuXG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2hpdGVzcGFjZVRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==