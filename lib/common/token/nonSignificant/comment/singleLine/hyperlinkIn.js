'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../../types'),
    SingleLineCommentToken = require('../../comment/singleLine');

var hyperlinkInSingleLineCommentType = types.hyperlinkInSingleLineCommentType;

var HyperlinkInSingleLineCommentToken = function (_SingleLineCommentTok) {
  _inherits(HyperlinkInSingleLineCommentToken, _SingleLineCommentTok);

  function HyperlinkInSingleLineCommentToken() {
    _classCallCheck(this, HyperlinkInSingleLineCommentToken);

    return _possibleConstructorReturn(this, (HyperlinkInSingleLineCommentToken.__proto__ || Object.getPrototypeOf(HyperlinkInSingleLineCommentToken)).apply(this, arguments));
  }

  _createClass(HyperlinkInSingleLineCommentToken, [{
    key: 'asHTML',
    value: function asHTML() {
      var href = this.content,
          ///
      className = this.type,
          ///
      html = '<span class="' + className + '"><a href="' + href + '" target="_blank">' + this.innerHTML + '</a></span>';

      return html;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(HyperlinkInSingleLineCommentToken.prototype.__proto__ || Object.getPrototypeOf(HyperlinkInSingleLineCommentToken.prototype), 'clone', this).call(this, HyperlinkInSingleLineCommentToken, startPosition, endPosition);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      return SingleLineCommentToken.fromContent(HyperlinkInSingleLineCommentToken, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(content) {
      return SingleLineCommentToken.fromWithinContent(HyperlinkInSingleLineCommentToken, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      return SingleLineCommentToken.positionWithinContent(HyperlinkInSingleLineCommentToken, content);
    }
  }]);

  return HyperlinkInSingleLineCommentToken;
}(SingleLineCommentToken);

var type = hyperlinkInSingleLineCommentType,
    regularExpression = /\bhttps?:\/\/[^\s*]+/;

Object.assign(HyperlinkInSingleLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = HyperlinkInSingleLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lL2h5cGVybGlua0luLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJoeXBlcmxpbmtJblNpbmdsZUxpbmVDb21tZW50VHlwZSIsIkh5cGVybGlua0luU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsImhyZWYiLCJjb250ZW50IiwiY2xhc3NOYW1lIiwidHlwZSIsImh0bWwiLCJpbm5lckhUTUwiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJmcm9tQ29udGVudCIsImZyb21XaXRoaW5Db250ZW50IiwicG9zaXRpb25XaXRoaW5Db250ZW50IiwicmVndWxhckV4cHJlc3Npb24iLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxtQkFBUixDQUFkO0FBQUEsSUFDTUMseUJBQXlCRCxRQUFRLDBCQUFSLENBRC9COztJQUdRRSxnQyxHQUFxQ0gsSyxDQUFyQ0csZ0M7O0lBRUZDLGlDOzs7Ozs7Ozs7Ozs2QkFDSztBQUNQLFVBQU1DLE9BQU8sS0FBS0MsT0FBbEI7QUFBQSxVQUE0QjtBQUN0QkMsa0JBQVksS0FBS0MsSUFEdkI7QUFBQSxVQUM4QjtBQUN4QkMsK0JBQXVCRixTQUF2QixtQkFBOENGLElBQTlDLDBCQUF1RSxLQUFLSyxTQUE1RSxnQkFGTjs7QUFJQSxhQUFPRCxJQUFQO0FBQ0Q7OzswQkFFS0UsYSxFQUFlQyxXLEVBQWE7QUFBRSx5S0FBbUJSLGlDQUFuQixFQUFzRE8sYUFBdEQsRUFBcUVDLFdBQXJFO0FBQW9GOzs7Z0NBRXJHTixPLEVBQVM7QUFBRSxhQUFPSix1QkFBdUJXLFdBQXZCLENBQW1DVCxpQ0FBbkMsRUFBc0VFLE9BQXRFLENBQVA7QUFBd0Y7OztzQ0FFN0ZBLE8sRUFBUztBQUFFLGFBQU9KLHVCQUF1QlksaUJBQXZCLENBQXlDVixpQ0FBekMsRUFBNEVFLE9BQTVFLENBQVA7QUFBOEY7OzswQ0FFckdBLE8sRUFBUztBQUFFLGFBQU9KLHVCQUF1QmEscUJBQXZCLENBQTZDWCxpQ0FBN0MsRUFBZ0ZFLE9BQWhGLENBQVA7QUFBa0c7Ozs7RUFmNUZKLHNCOztBQWtCaEQsSUFBTU0sT0FBT0wsZ0NBQWI7QUFBQSxJQUNNYSxvQkFBb0Isc0JBRDFCOztBQUdBQyxPQUFPQyxNQUFQLENBQWNkLGlDQUFkLEVBQWlEO0FBQy9DSSxZQUQrQztBQUUvQ1E7QUFGK0MsQ0FBakQ7O0FBS0FHLE9BQU9DLE9BQVAsR0FBaUJoQixpQ0FBakIiLCJmaWxlIjoiaHlwZXJsaW5rSW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vdHlwZXMnKSxcbiAgICAgIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi9jb21tZW50L3NpbmdsZUxpbmUnKTtcblxuY29uc3QgeyBoeXBlcmxpbmtJblNpbmdsZUxpbmVDb21tZW50VHlwZSB9ID0gdHlwZXM7XG5cbmNsYXNzIEh5cGVybGlua0luU2luZ2xlTGluZUNvbW1lbnRUb2tlbiBleHRlbmRzIFNpbmdsZUxpbmVDb21tZW50VG9rZW4ge1xuICBhc0hUTUwoKSB7XG4gICAgY29uc3QgaHJlZiA9IHRoaXMuY29udGVudCwgIC8vL1xuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMudHlwZSwgIC8vL1xuICAgICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj48YSBocmVmPVwiJHtocmVmfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7dGhpcy5pbm5lckhUTUx9PC9hPjwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoSHlwZXJsaW5rSW5TaW5nbGVMaW5lQ29tbWVudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2luZ2xlTGluZUNvbW1lbnRUb2tlbi5mcm9tQ29udGVudChIeXBlcmxpbmtJblNpbmdsZUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpbmdsZUxpbmVDb21tZW50VG9rZW4uZnJvbVdpdGhpbkNvbnRlbnQoSHlwZXJsaW5rSW5TaW5nbGVMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2luZ2xlTGluZUNvbW1lbnRUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoSHlwZXJsaW5rSW5TaW5nbGVMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxufVxuXG5jb25zdCB0eXBlID0gaHlwZXJsaW5rSW5TaW5nbGVMaW5lQ29tbWVudFR5cGUsXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9cXGJodHRwcz86XFwvXFwvW15cXHMqXSsvO1xuXG5PYmplY3QuYXNzaWduKEh5cGVybGlua0luU2luZ2xlTGluZUNvbW1lbnRUb2tlbiwge1xuICB0eXBlLFxuICByZWd1bGFyRXhwcmVzc2lvblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSHlwZXJsaW5rSW5TaW5nbGVMaW5lQ29tbWVudFRva2VuO1xuIl19