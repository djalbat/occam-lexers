'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../comment');

var StartOfMultiLineCommentToken = function (_CommentToken) {
  _inherits(StartOfMultiLineCommentToken, _CommentToken);

  function StartOfMultiLineCommentToken(str) {
    _classCallCheck(this, StartOfMultiLineCommentToken);

    return _possibleConstructorReturn(this, (StartOfMultiLineCommentToken.__proto__ || Object.getPrototypeOf(StartOfMultiLineCommentToken)).call(this, str));
  }

  _createClass(StartOfMultiLineCommentToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getStr();

      return new StartOfMultiLineCommentToken(str);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      var startOfMultiLineCommentToken = null,
          matches = content.match(/^(\(\*)/);

      if (matches) {
        var firstMatch = first(matches),
            str = firstMatch; ///

        startOfMultiLineCommentToken = new StartOfMultiLineCommentToken(str);
      }

      return startOfMultiLineCommentToken;
    }
  }, {
    key: 'positionInContent',
    value: function positionInContent(content) {
      var position = -1,
          matches = content.match(/(.*?)\(\*/);

      if (matches) {
        var firstMatch = first(matches),
            str = firstMatch;

        position = str.length; ///
      }

      return position;
    }
  }]);

  return StartOfMultiLineCommentToken;
}(CommentToken);

module.exports = StartOfMultiLineCommentToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9nYWxsaW5hL3Rva2VuL2NvbW1lbnQvc3RhcnRPZk11bHRpTGluZS5qcyJdLCJuYW1lcyI6WyJDb21tZW50VG9rZW4iLCJyZXF1aXJlIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsInN0ciIsImdldFN0ciIsImNvbnRlbnQiLCJzdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwicG9zaXRpb24iLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxZQUFSLENBQW5COztJQUVNQyw0Qjs7O0FBQ0osd0NBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFBQSx1SkFDVEEsR0FEUztBQUVoQjs7Ozs0QkFFTztBQUNOLFVBQUlBLE1BQU0sS0FBS0MsTUFBTCxFQUFWOztBQUVBLGFBQU8sSUFBSUYsNEJBQUosQ0FBaUNDLEdBQWpDLENBQVA7QUFDRDs7O2dDQUVrQkUsTyxFQUFTO0FBQzFCLFVBQUlDLCtCQUErQixJQUFuQztBQUFBLFVBQ0lDLFVBQVVGLFFBQVFHLEtBQVIsQ0FBYyxTQUFkLENBRGQ7O0FBR0EsVUFBSUQsT0FBSixFQUFhO0FBQ1gsWUFBSUUsYUFBYUMsTUFBTUgsT0FBTixDQUFqQjtBQUFBLFlBQ0lKLE1BQU1NLFVBRFYsQ0FEVyxDQUVXOztBQUV0QkgsdUNBQStCLElBQUlKLDRCQUFKLENBQWlDQyxHQUFqQyxDQUEvQjtBQUNEOztBQUdELGFBQU9HLDRCQUFQO0FBQ0Q7OztzQ0FFd0JELE8sRUFBUztBQUNoQyxVQUFJTSxXQUFXLENBQUMsQ0FBaEI7QUFBQSxVQUNJSixVQUFVRixRQUFRRyxLQUFSLENBQWMsV0FBZCxDQURkOztBQUdBLFVBQUlELE9BQUosRUFBYTtBQUNYLFlBQUlFLGFBQWFDLE1BQU1ILE9BQU4sQ0FBakI7QUFBQSxZQUNJSixNQUFNTSxVQURWOztBQUdBRSxtQkFBV1IsSUFBSVMsTUFBZixDQUpXLENBSWE7QUFDekI7O0FBRUQsYUFBT0QsUUFBUDtBQUNEOzs7O0VBdEN3Q1gsWTs7QUF5QzNDYSxPQUFPQyxPQUFQLEdBQWlCWiw0QkFBakI7O0FBRUEsU0FBU1EsS0FBVCxDQUFlSyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoic3RhcnRPZk11bHRpTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIENvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1lbnQnKTtcblxuY2xhc3MgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBleHRlbmRzIENvbW1lbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHN0cikge1xuICAgIHN1cGVyKHN0cik7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICB2YXIgc3RyID0gdGhpcy5nZXRTdHIoKTtcblxuICAgIHJldHVybiBuZXcgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbihzdHIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICB2YXIgc3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGwsXG4gICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9eKFxcKFxcKikvKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgIHN0ciA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBzdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbmV3IFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4oc3RyKTtcbiAgICB9XG5cblxuICAgIHJldHVybiBzdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uSW5Db250ZW50KGNvbnRlbnQpIHtcbiAgICB2YXIgcG9zaXRpb24gPSAtMSxcbiAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goLyguKj8pXFwoXFwqLyk7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgdmFyIGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKSxcbiAgICAgICAgICBzdHIgPSBmaXJzdE1hdGNoO1xuICAgICAgXG4gICAgICBwb3NpdGlvbiA9IHN0ci5sZW5ndGg7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==