'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../comment');

var MiddleOfMultiLineCommentToken = function (_CommentToken) {
  _inherits(MiddleOfMultiLineCommentToken, _CommentToken);

  function MiddleOfMultiLineCommentToken(str) {
    _classCallCheck(this, MiddleOfMultiLineCommentToken);

    return _possibleConstructorReturn(this, (MiddleOfMultiLineCommentToken.__proto__ || Object.getPrototypeOf(MiddleOfMultiLineCommentToken)).call(this, str));
  }

  _createClass(MiddleOfMultiLineCommentToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getStr();

      return new MiddleOfMultiLineCommentToken(str);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      var str = content,
          ///
      middleOfMultiLine = new MiddleOfMultiLineCommentToken(str);

      return middleOfMultiLine;
    }
  }]);

  return MiddleOfMultiLineCommentToken;
}(CommentToken);

module.exports = MiddleOfMultiLineCommentToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9nYWxsaW5hL3Rva2VuL2NvbW1lbnQvbWlkZGxlT2ZNdWx0aUxpbmUuanMiXSwibmFtZXMiOlsiQ29tbWVudFRva2VuIiwicmVxdWlyZSIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwic3RyIiwiZ2V0U3RyIiwiY29udGVudCIsIm1pZGRsZU9mTXVsdGlMaW5lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLFlBQVIsQ0FBbkI7O0lBRU1DLDZCOzs7QUFDSix5Q0FBWUMsR0FBWixFQUFpQjtBQUFBOztBQUFBLHlKQUNUQSxHQURTO0FBRWhCOzs7OzRCQUVPO0FBQ04sVUFBSUEsTUFBTSxLQUFLQyxNQUFMLEVBQVY7O0FBRUEsYUFBTyxJQUFJRiw2QkFBSixDQUFrQ0MsR0FBbEMsQ0FBUDtBQUNEOzs7Z0NBRWtCRSxPLEVBQVM7QUFDMUIsVUFBSUYsTUFBTUUsT0FBVjtBQUFBLFVBQW1CO0FBQ2ZDLDBCQUFvQixJQUFJSiw2QkFBSixDQUFrQ0MsR0FBbEMsQ0FEeEI7O0FBR0EsYUFBT0csaUJBQVA7QUFDRDs7OztFQWhCeUNOLFk7O0FBbUI1Q08sT0FBT0MsT0FBUCxHQUFpQk4sNkJBQWpCIiwiZmlsZSI6Im1pZGRsZU9mTXVsdGlMaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbWVudCcpO1xuXG5jbGFzcyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBleHRlbmRzIENvbW1lbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHN0cikge1xuICAgIHN1cGVyKHN0cik7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICB2YXIgc3RyID0gdGhpcy5nZXRTdHIoKTtcblxuICAgIHJldHVybiBuZXcgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4oc3RyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgdmFyIHN0ciA9IGNvbnRlbnQsIC8vL1xuICAgICAgICBtaWRkbGVPZk11bHRpTGluZSA9IG5ldyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbihzdHIpO1xuXG4gICAgcmV0dXJuIG1pZGRsZU9mTXVsdGlMaW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47XG5cbiJdfQ==