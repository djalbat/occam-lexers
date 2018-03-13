'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../../types'),
    SingleLineCommentToken = require('../../comment/singleLine');

var hyperlinkSingleLineCommentType = types.hyperlinkSingleLineCommentType;

var HyperlinkSingleLineCommentToken = function (_SingleLineCommentTok) {
  _inherits(HyperlinkSingleLineCommentToken, _SingleLineCommentTok);

  function HyperlinkSingleLineCommentToken() {
    _classCallCheck(this, HyperlinkSingleLineCommentToken);

    return _possibleConstructorReturn(this, (HyperlinkSingleLineCommentToken.__proto__ || Object.getPrototypeOf(HyperlinkSingleLineCommentToken)).apply(this, arguments));
  }

  _createClass(HyperlinkSingleLineCommentToken, [{
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
      return _get(HyperlinkSingleLineCommentToken.prototype.__proto__ || Object.getPrototypeOf(HyperlinkSingleLineCommentToken.prototype), 'clone', this).call(this, HyperlinkSingleLineCommentToken, startPosition, endPosition);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      return SingleLineCommentToken.fromContent(HyperlinkSingleLineCommentToken, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(content) {
      return SingleLineCommentToken.fromWithinContent(HyperlinkSingleLineCommentToken, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      return SingleLineCommentToken.positionWithinContent(HyperlinkSingleLineCommentToken, content);
    }
  }]);

  return HyperlinkSingleLineCommentToken;
}(SingleLineCommentToken);

var type = hyperlinkSingleLineCommentType,
    regularExpression = /https?:\/\/[^\s]+/;

Object.assign(HyperlinkSingleLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = HyperlinkSingleLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lL2h5cGVybGluay5qcyJdLCJuYW1lcyI6WyJ0eXBlcyIsInJlcXVpcmUiLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiaHlwZXJsaW5rU2luZ2xlTGluZUNvbW1lbnRUeXBlIiwiSHlwZXJsaW5rU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsImZpbGVQYXRoIiwiaHJlZiIsImNvbnRlbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwiaHRtbCIsImlubmVySFRNTCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImZyb21Db250ZW50IiwiZnJvbVdpdGhpbkNvbnRlbnQiLCJwb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLG1CQUFSLENBQWQ7QUFBQSxJQUNNQyx5QkFBeUJELFFBQVEsMEJBQVIsQ0FEL0I7O0lBR1FFLDhCLEdBQW1DSCxLLENBQW5DRyw4Qjs7SUFFRkMsK0I7Ozs7Ozs7Ozs7OzJCQUNHQyxRLEVBQVU7QUFDZixVQUFNQyxPQUFPLEtBQUtDLE9BQWxCO0FBQUEsVUFBNEI7QUFDdEJDLGtCQUFZLEtBQUtDLElBRHZCO0FBQUEsVUFDOEI7QUFDeEJDLCtCQUF1QkYsU0FBdkIsbUJBQThDRixJQUE5QywwQkFBdUUsS0FBS0ssU0FBNUUsZ0JBRk47O0FBSUEsYUFBT0QsSUFBUDtBQUNEOzs7MEJBRUtFLGEsRUFBZUMsVyxFQUFhO0FBQUUscUtBQW1CVCwrQkFBbkIsRUFBb0RRLGFBQXBELEVBQW1FQyxXQUFuRTtBQUFrRjs7O2dDQUVuR04sTyxFQUFTO0FBQUUsYUFBT0wsdUJBQXVCWSxXQUF2QixDQUFtQ1YsK0JBQW5DLEVBQW9FRyxPQUFwRSxDQUFQO0FBQXNGOzs7c0NBRTNGQSxPLEVBQVM7QUFBRSxhQUFPTCx1QkFBdUJhLGlCQUF2QixDQUF5Q1gsK0JBQXpDLEVBQTBFRyxPQUExRSxDQUFQO0FBQTRGOzs7MENBRW5HQSxPLEVBQVM7QUFBRSxhQUFPTCx1QkFBdUJjLHFCQUF2QixDQUE2Q1osK0JBQTdDLEVBQThFRyxPQUE5RSxDQUFQO0FBQWdHOzs7O0VBZjVGTCxzQjs7QUFrQjlDLElBQU1PLE9BQU9OLDhCQUFiO0FBQUEsSUFDTWMsb0JBQW9CLG1CQUQxQjs7QUFHQUMsT0FBT0MsTUFBUCxDQUFjZiwrQkFBZCxFQUErQztBQUM3Q0ssUUFBTUEsSUFEdUM7QUFFN0NRLHFCQUFtQkE7QUFGMEIsQ0FBL0M7O0FBS0FHLE9BQU9DLE9BQVAsR0FBaUJqQiwrQkFBakIiLCJmaWxlIjoiaHlwZXJsaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3R5cGVzJyksXG4gICAgICBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vLi4vY29tbWVudC9zaW5nbGVMaW5lJyk7XG5cbmNvbnN0IHsgaHlwZXJsaW5rU2luZ2xlTGluZUNvbW1lbnRUeXBlIH0gPSB0eXBlcztcblxuY2xhc3MgSHlwZXJsaW5rU2luZ2xlTGluZUNvbW1lbnRUb2tlbiBleHRlbmRzIFNpbmdsZUxpbmVDb21tZW50VG9rZW4ge1xuICBhc0hUTUwoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBocmVmID0gdGhpcy5jb250ZW50LCAgLy8vXG4gICAgICAgICAgY2xhc3NOYW1lID0gdGhpcy50eXBlLCAgLy8vXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPjxhIGhyZWY9XCIke2hyZWZ9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHt0aGlzLmlubmVySFRNTH08L2E+PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShIeXBlcmxpbmtTaW5nbGVMaW5lQ29tbWVudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2luZ2xlTGluZUNvbW1lbnRUb2tlbi5mcm9tQ29udGVudChIeXBlcmxpbmtTaW5nbGVMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudChjb250ZW50KSB7IHJldHVybiBTaW5nbGVMaW5lQ29tbWVudFRva2VuLmZyb21XaXRoaW5Db250ZW50KEh5cGVybGlua1NpbmdsZUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7IHJldHVybiBTaW5nbGVMaW5lQ29tbWVudFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChIeXBlcmxpbmtTaW5nbGVMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxufVxuXG5jb25zdCB0eXBlID0gaHlwZXJsaW5rU2luZ2xlTGluZUNvbW1lbnRUeXBlLFxuICAgICAgcmVndWxhckV4cHJlc3Npb24gPSAvaHR0cHM/OlxcL1xcL1teXFxzXSsvO1xuXG5PYmplY3QuYXNzaWduKEh5cGVybGlua1NpbmdsZUxpbmVDb21tZW50VG9rZW4sIHtcbiAgdHlwZTogdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb246IHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBIeXBlcmxpbmtTaW5nbGVMaW5lQ29tbWVudFRva2VuO1xuIl19