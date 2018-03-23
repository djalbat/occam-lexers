'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../../types'),
    MultiLineCommentToken = require('../../comment/multiLine');

var hyperlinkInMultiLineCommentType = types.hyperlinkInMultiLineCommentType;

var HyperlinkInMultiLineCommentToken = function (_MultiLineCommentToke) {
  _inherits(HyperlinkInMultiLineCommentToken, _MultiLineCommentToke);

  function HyperlinkInMultiLineCommentToken() {
    _classCallCheck(this, HyperlinkInMultiLineCommentToken);

    return _possibleConstructorReturn(this, (HyperlinkInMultiLineCommentToken.__proto__ || Object.getPrototypeOf(HyperlinkInMultiLineCommentToken)).apply(this, arguments));
  }

  _createClass(HyperlinkInMultiLineCommentToken, [{
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
      return _get(HyperlinkInMultiLineCommentToken.prototype.__proto__ || Object.getPrototypeOf(HyperlinkInMultiLineCommentToken.prototype), 'clone', this).call(this, HyperlinkInMultiLineCommentToken, startPosition, endPosition);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      return MultiLineCommentToken.fromContent(HyperlinkInMultiLineCommentToken, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(content) {
      return MultiLineCommentToken.fromWithinContent(HyperlinkInMultiLineCommentToken, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      return MultiLineCommentToken.positionWithinContent(HyperlinkInMultiLineCommentToken, content);
    }
  }]);

  return HyperlinkInMultiLineCommentToken;
}(MultiLineCommentToken);

var type = hyperlinkInMultiLineCommentType,
    regularExpression = /\bhttps?:\/\/[^\s\*]+/;

Object.assign(HyperlinkInMultiLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = HyperlinkInMultiLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvaHlwZXJsaW5rSW4uanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1aXJlIiwiTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiaHlwZXJsaW5rSW5NdWx0aUxpbmVDb21tZW50VHlwZSIsIkh5cGVybGlua0luTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiZmlsZVBhdGgiLCJocmVmIiwiY29udGVudCIsImNsYXNzTmFtZSIsInR5cGUiLCJodG1sIiwiaW5uZXJIVE1MIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiZnJvbUNvbnRlbnQiLCJmcm9tV2l0aGluQ29udGVudCIsInBvc2l0aW9uV2l0aGluQ29udGVudCIsInJlZ3VsYXJFeHByZXNzaW9uIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsbUJBQVIsQ0FBZDtBQUFBLElBQ01DLHdCQUF3QkQsUUFBUSx5QkFBUixDQUQ5Qjs7SUFHUUUsK0IsR0FBb0NILEssQ0FBcENHLCtCOztJQUVGQyxnQzs7Ozs7Ozs7Ozs7MkJBQ0dDLFEsRUFBVTtBQUNmLFVBQU1DLE9BQU8sS0FBS0MsT0FBbEI7QUFBQSxVQUE0QjtBQUN0QkMsa0JBQVksS0FBS0MsSUFEdkI7QUFBQSxVQUM4QjtBQUN4QkMsK0JBQXVCRixTQUF2QixtQkFBOENGLElBQTlDLDBCQUF1RSxLQUFLSyxTQUE1RSxnQkFGTjs7QUFJQSxhQUFPRCxJQUFQO0FBQ0Q7OzswQkFFS0UsYSxFQUFlQyxXLEVBQWE7QUFBRSx1S0FBbUJULGdDQUFuQixFQUFxRFEsYUFBckQsRUFBb0VDLFdBQXBFO0FBQW1GOzs7Z0NBRXBHTixPLEVBQVM7QUFBRSxhQUFPTCxzQkFBc0JZLFdBQXRCLENBQWtDVixnQ0FBbEMsRUFBb0VHLE9BQXBFLENBQVA7QUFBc0Y7OztzQ0FFM0ZBLE8sRUFBUztBQUFFLGFBQU9MLHNCQUFzQmEsaUJBQXRCLENBQXdDWCxnQ0FBeEMsRUFBMEVHLE9BQTFFLENBQVA7QUFBNEY7OzswQ0FFbkdBLE8sRUFBUztBQUFFLGFBQU9MLHNCQUFzQmMscUJBQXRCLENBQTRDWixnQ0FBNUMsRUFBOEVHLE9BQTlFLENBQVA7QUFBZ0c7Ozs7RUFmM0ZMLHFCOztBQWtCL0MsSUFBTU8sT0FBT04sK0JBQWI7QUFBQSxJQUNNYyxvQkFBb0IsdUJBRDFCOztBQUdBQyxPQUFPQyxNQUFQLENBQWNmLGdDQUFkLEVBQWdEO0FBQzlDSyxRQUFNQSxJQUR3QztBQUU5Q1EscUJBQW1CQTtBQUYyQixDQUFoRDs7QUFLQUcsT0FBT0MsT0FBUCxHQUFpQmpCLGdDQUFqQiIsImZpbGUiOiJoeXBlcmxpbmtJbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi90eXBlcycpLFxuICAgICAgTXVsdGlMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vLi4vY29tbWVudC9tdWx0aUxpbmUnKTtcblxuY29uc3QgeyBoeXBlcmxpbmtJbk11bHRpTGluZUNvbW1lbnRUeXBlIH0gPSB0eXBlcztcblxuY2xhc3MgSHlwZXJsaW5rSW5NdWx0aUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBNdWx0aUxpbmVDb21tZW50VG9rZW4ge1xuICBhc0hUTUwoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBocmVmID0gdGhpcy5jb250ZW50LCAgLy8vXG4gICAgICAgICAgY2xhc3NOYW1lID0gdGhpcy50eXBlLCAgLy8vXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPjxhIGhyZWY9XCIke2hyZWZ9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHt0aGlzLmlubmVySFRNTH08L2E+PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShIeXBlcmxpbmtJbk11bHRpTGluZUNvbW1lbnRUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE11bHRpTGluZUNvbW1lbnRUb2tlbi5mcm9tQ29udGVudChIeXBlcmxpbmtJbk11bHRpTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gTXVsdGlMaW5lQ29tbWVudFRva2VuLmZyb21XaXRoaW5Db250ZW50KEh5cGVybGlua0luTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gTXVsdGlMaW5lQ29tbWVudFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChIeXBlcmxpbmtJbk11bHRpTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cbn1cblxuY29uc3QgdHlwZSA9IGh5cGVybGlua0luTXVsdGlMaW5lQ29tbWVudFR5cGUsXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9cXGJodHRwcz86XFwvXFwvW15cXHNcXCpdKy87XG5cbk9iamVjdC5hc3NpZ24oSHlwZXJsaW5rSW5NdWx0aUxpbmVDb21tZW50VG9rZW4sIHtcbiAgdHlwZTogdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb246IHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBIeXBlcmxpbmtJbk11bHRpTGluZUNvbW1lbnRUb2tlbjtcbiJdfQ==