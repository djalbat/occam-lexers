'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../../types'),
    MultiLineCommentToken = require('../../comment/multiLine');

var hyperlinkMultiLineCommentType = types.hyperlinkMultiLineCommentType;

var HyperlinkMultiLineCommentToken = function (_MultiLineCommentToke) {
  _inherits(HyperlinkMultiLineCommentToken, _MultiLineCommentToke);

  function HyperlinkMultiLineCommentToken() {
    _classCallCheck(this, HyperlinkMultiLineCommentToken);

    return _possibleConstructorReturn(this, (HyperlinkMultiLineCommentToken.__proto__ || Object.getPrototypeOf(HyperlinkMultiLineCommentToken)).apply(this, arguments));
  }

  _createClass(HyperlinkMultiLineCommentToken, [{
    key: 'asHTML',
    value: function asHTML(filePath) {
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
      return _get(HyperlinkMultiLineCommentToken.prototype.__proto__ || Object.getPrototypeOf(HyperlinkMultiLineCommentToken.prototype), 'clone', this).call(this, HyperlinkMultiLineCommentToken, startPosition, endPosition);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      return MultiLineCommentToken.fromContent(HyperlinkMultiLineCommentToken, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(content) {
      return MultiLineCommentToken.fromWithinContent(HyperlinkMultiLineCommentToken, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      return MultiLineCommentToken.positionWithinContent(HyperlinkMultiLineCommentToken, content);
    }
  }]);

  return HyperlinkMultiLineCommentToken;
}(MultiLineCommentToken);

var type = hyperlinkMultiLineCommentType,
    regularExpression = /\bhttps?:\/\/[^\s\*]+/;

Object.assign(HyperlinkMultiLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = HyperlinkMultiLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvaHlwZXJsaW5rLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIk11bHRpTGluZUNvbW1lbnRUb2tlbiIsImh5cGVybGlua011bHRpTGluZUNvbW1lbnRUeXBlIiwiSHlwZXJsaW5rTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiZmlsZVBhdGgiLCJocmVmIiwiY29udGVudCIsImNsYXNzTmFtZSIsInR5cGUiLCJodG1sIiwiaW5uZXJIVE1MIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiZnJvbUNvbnRlbnQiLCJmcm9tV2l0aGluQ29udGVudCIsInBvc2l0aW9uV2l0aGluQ29udGVudCIsInJlZ3VsYXJFeHByZXNzaW9uIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsbUJBQVIsQ0FBZDtBQUFBLElBQ01DLHdCQUF3QkQsUUFBUSx5QkFBUixDQUQ5Qjs7SUFHUUUsNkIsR0FBa0NILEssQ0FBbENHLDZCOztJQUVGQyw4Qjs7Ozs7Ozs7Ozs7MkJBQ0dDLFEsRUFBVTtBQUNmLFVBQU1DLE9BQU8sS0FBS0MsT0FBbEI7QUFBQSxVQUE0QjtBQUN0QkMsa0JBQVksS0FBS0MsSUFEdkI7QUFBQSxVQUM4QjtBQUN4QkMsK0JBQXVCRixTQUF2QixtQkFBOENGLElBQTlDLDBCQUF1RSxLQUFLSyxTQUE1RSxnQkFGTjs7QUFJQSxhQUFPRCxJQUFQO0FBQ0Q7OzswQkFFS0UsYSxFQUFlQyxXLEVBQWE7QUFBRSxtS0FBbUJULDhCQUFuQixFQUFtRFEsYUFBbkQsRUFBa0VDLFdBQWxFO0FBQWlGOzs7Z0NBRWxHTixPLEVBQVM7QUFBRSxhQUFPTCxzQkFBc0JZLFdBQXRCLENBQWtDViw4QkFBbEMsRUFBa0VHLE9BQWxFLENBQVA7QUFBb0Y7OztzQ0FFekZBLE8sRUFBUztBQUFFLGFBQU9MLHNCQUFzQmEsaUJBQXRCLENBQXdDWCw4QkFBeEMsRUFBd0VHLE9BQXhFLENBQVA7QUFBMEY7OzswQ0FFakdBLE8sRUFBUztBQUFFLGFBQU9MLHNCQUFzQmMscUJBQXRCLENBQTRDWiw4QkFBNUMsRUFBNEVHLE9BQTVFLENBQVA7QUFBOEY7Ozs7RUFmM0ZMLHFCOztBQWtCN0MsSUFBTU8sT0FBT04sNkJBQWI7QUFBQSxJQUNNYyxvQkFBb0IsdUJBRDFCOztBQUdBQyxPQUFPQyxNQUFQLENBQWNmLDhCQUFkLEVBQThDO0FBQzVDSyxRQUFNQSxJQURzQztBQUU1Q1EscUJBQW1CQTtBQUZ5QixDQUE5Qzs7QUFLQUcsT0FBT0MsT0FBUCxHQUFpQmpCLDhCQUFqQiIsImZpbGUiOiJoeXBlcmxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vdHlwZXMnKSxcbiAgICAgIE11bHRpTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1lbnQvbXVsdGlMaW5lJyk7XG5cbmNvbnN0IHsgaHlwZXJsaW5rTXVsdGlMaW5lQ29tbWVudFR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBIeXBlcmxpbmtNdWx0aUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBNdWx0aUxpbmVDb21tZW50VG9rZW4ge1xuICBhc0hUTUwoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBocmVmID0gdGhpcy5jb250ZW50LCAgLy8vXG4gICAgICAgICAgY2xhc3NOYW1lID0gdGhpcy50eXBlLCAgLy8vXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPjxhIGhyZWY9XCIke2hyZWZ9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHt0aGlzLmlubmVySFRNTH08L2E+PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShIeXBlcmxpbmtNdWx0aUxpbmVDb21tZW50VG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBNdWx0aUxpbmVDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoSHlwZXJsaW5rTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudChjb250ZW50KSB7IHJldHVybiBNdWx0aUxpbmVDb21tZW50VG9rZW4uZnJvbVdpdGhpbkNvbnRlbnQoSHlwZXJsaW5rTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gTXVsdGlMaW5lQ29tbWVudFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChIeXBlcmxpbmtNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG5cbmNvbnN0IHR5cGUgPSBoeXBlcmxpbmtNdWx0aUxpbmVDb21tZW50VHlwZSxcbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gL1xcYmh0dHBzPzpcXC9cXC9bXlxcc1xcKl0rLztcblxuT2JqZWN0LmFzc2lnbihIeXBlcmxpbmtNdWx0aUxpbmVDb21tZW50VG9rZW4sIHtcbiAgdHlwZTogdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb246IHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBIeXBlcmxpbmtNdWx0aUxpbmVDb21tZW50VG9rZW47XG4iXX0=