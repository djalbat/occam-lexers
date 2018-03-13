'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../../types'),
    MultiLineCommentToken = require('../../comment/multiLine');

var hyperlinkMultiLineCommentType = types.hyperlinkMultiLineCommentType;

var HyperlinkMultiLineCommentTokenn = function (_MultiLineCommentToke) {
  _inherits(HyperlinkMultiLineCommentTokenn, _MultiLineCommentToke);

  function HyperlinkMultiLineCommentTokenn() {
    _classCallCheck(this, HyperlinkMultiLineCommentTokenn);

    return _possibleConstructorReturn(this, (HyperlinkMultiLineCommentTokenn.__proto__ || Object.getPrototypeOf(HyperlinkMultiLineCommentTokenn)).apply(this, arguments));
  }

  _createClass(HyperlinkMultiLineCommentTokenn, [{
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
      return _get(HyperlinkMultiLineCommentTokenn.prototype.__proto__ || Object.getPrototypeOf(HyperlinkMultiLineCommentTokenn.prototype), 'clone', this).call(this, HyperlinkMultiLineCommentTokenn, startPosition, endPosition);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      return MultiLineCommentToken.fromContent(HyperlinkMultiLineCommentTokenn, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(content) {
      return MultiLineCommentToken.fromWithinContent(HyperlinkMultiLineCommentTokenn, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      return MultiLineCommentToken.positionWithinContent(HyperlinkMultiLineCommentTokenn, content);
    }
  }]);

  return HyperlinkMultiLineCommentTokenn;
}(MultiLineCommentToken);

var type = hyperlinkMultiLineCommentType,
    regularExpression = /https?:\/\/[^\s]+/;

Object.assign(HyperlinkMultiLineCommentTokenn, {
  type: type,
  regularExpression: regularExpression
});

module.exports = HyperlinkMultiLineCommentTokenn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvaHlwZXJsaW5rLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIk11bHRpTGluZUNvbW1lbnRUb2tlbiIsImh5cGVybGlua011bHRpTGluZUNvbW1lbnRUeXBlIiwiSHlwZXJsaW5rTXVsdGlMaW5lQ29tbWVudFRva2VubiIsImZpbGVQYXRoIiwiaHJlZiIsImNvbnRlbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwiaHRtbCIsImlubmVySFRNTCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImZyb21Db250ZW50IiwiZnJvbVdpdGhpbkNvbnRlbnQiLCJwb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLG1CQUFSLENBQWQ7QUFBQSxJQUNNQyx3QkFBd0JELFFBQVEseUJBQVIsQ0FEOUI7O0lBR1FFLDZCLEdBQWtDSCxLLENBQWxDRyw2Qjs7SUFFRkMsK0I7Ozs7Ozs7Ozs7OzJCQUNHQyxRLEVBQVU7QUFDZixVQUFNQyxPQUFPLEtBQUtDLE9BQWxCO0FBQUEsVUFBNEI7QUFDdEJDLGtCQUFZLEtBQUtDLElBRHZCO0FBQUEsVUFDOEI7QUFDeEJDLCtCQUF1QkYsU0FBdkIsbUJBQThDRixJQUE5QywwQkFBdUUsS0FBS0ssU0FBNUUsZ0JBRk47O0FBSUEsYUFBT0QsSUFBUDtBQUNEOzs7MEJBRUtFLGEsRUFBZUMsVyxFQUFhO0FBQUUscUtBQW1CVCwrQkFBbkIsRUFBb0RRLGFBQXBELEVBQW1FQyxXQUFuRTtBQUFrRjs7O2dDQUVuR04sTyxFQUFTO0FBQUUsYUFBT0wsc0JBQXNCWSxXQUF0QixDQUFrQ1YsK0JBQWxDLEVBQW1FRyxPQUFuRSxDQUFQO0FBQXFGOzs7c0NBRTFGQSxPLEVBQVM7QUFBRSxhQUFPTCxzQkFBc0JhLGlCQUF0QixDQUF3Q1gsK0JBQXhDLEVBQXlFRyxPQUF6RSxDQUFQO0FBQTJGOzs7MENBRWxHQSxPLEVBQVM7QUFBRSxhQUFPTCxzQkFBc0JjLHFCQUF0QixDQUE0Q1osK0JBQTVDLEVBQTZFRyxPQUE3RSxDQUFQO0FBQStGOzs7O0VBZjNGTCxxQjs7QUFrQjlDLElBQU1PLE9BQU9OLDZCQUFiO0FBQUEsSUFDTWMsb0JBQW9CLG1CQUQxQjs7QUFHQUMsT0FBT0MsTUFBUCxDQUFjZiwrQkFBZCxFQUErQztBQUM3Q0ssUUFBTUEsSUFEdUM7QUFFN0NRLHFCQUFtQkE7QUFGMEIsQ0FBL0M7O0FBS0FHLE9BQU9DLE9BQVAsR0FBaUJqQiwrQkFBakIiLCJmaWxlIjoiaHlwZXJsaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3R5cGVzJyksXG4gICAgICBNdWx0aUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi9jb21tZW50L211bHRpTGluZScpO1xuXG5jb25zdCB7IGh5cGVybGlua011bHRpTGluZUNvbW1lbnRUeXBlIH0gPSB0eXBlcztcblxuY2xhc3MgSHlwZXJsaW5rTXVsdGlMaW5lQ29tbWVudFRva2VubiBleHRlbmRzIE11bHRpTGluZUNvbW1lbnRUb2tlbiB7XG4gIGFzSFRNTChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGhyZWYgPSB0aGlzLmNvbnRlbnQsICAvLy9cbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLnR5cGUsICAvLy9cbiAgICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+PGEgaHJlZj1cIiR7aHJlZn1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke3RoaXMuaW5uZXJIVE1MfTwvYT48L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKEh5cGVybGlua011bHRpTGluZUNvbW1lbnRUb2tlbm4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBNdWx0aUxpbmVDb21tZW50VG9rZW4uZnJvbUNvbnRlbnQoSHlwZXJsaW5rTXVsdGlMaW5lQ29tbWVudFRva2VubiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gTXVsdGlMaW5lQ29tbWVudFRva2VuLmZyb21XaXRoaW5Db250ZW50KEh5cGVybGlua011bHRpTGluZUNvbW1lbnRUb2tlbm4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7IHJldHVybiBNdWx0aUxpbmVDb21tZW50VG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KEh5cGVybGlua011bHRpTGluZUNvbW1lbnRUb2tlbm4sIGNvbnRlbnQpOyB9XG59XG5cbmNvbnN0IHR5cGUgPSBoeXBlcmxpbmtNdWx0aUxpbmVDb21tZW50VHlwZSxcbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gL2h0dHBzPzpcXC9cXC9bXlxcc10rLztcblxuT2JqZWN0LmFzc2lnbihIeXBlcmxpbmtNdWx0aUxpbmVDb21tZW50VG9rZW5uLCB7XG4gIHR5cGU6IHR5cGUsXG4gIHJlZ3VsYXJFeHByZXNzaW9uOiByZWd1bGFyRXhwcmVzc2lvblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSHlwZXJsaW5rTXVsdGlMaW5lQ29tbWVudFRva2VubjtcbiJdfQ==