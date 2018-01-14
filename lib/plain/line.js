'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    CommentTokens = require('./tokens/comment'),
    WhitespaceTokens = require('./tokens/whitespace'),
    StringLiteralTokens = require('./tokens/stringLiteral'),
    RegularExpressionTokens = require('./tokens/regularExpression');

var PlainLine = function (_CommonLine) {
  _inherits(PlainLine, _CommonLine);

  function PlainLine() {
    _classCallCheck(this, PlainLine);

    return _possibleConstructorReturn(this, (PlainLine.__proto__ || Object.getPrototypeOf(PlainLine)).apply(this, arguments));
  }

  _createClass(PlainLine, null, [{
    key: 'fromContentRulesAndConfiguration',
    value: function fromContentRulesAndConfiguration(content, rules, configuration) {
      var plainLine = _get(PlainLine.__proto__ || Object.getPrototypeOf(PlainLine), 'fromContentRulesAndConfiguration', this).call(this, PlainLine, content, rules, configuration);

      plainLine.initialise(CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens);

      return plainLine;
    }
  }]);

  return PlainLine;
}(CommonLine);

module.exports = PlainLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wbGFpbi9saW5lLmpzIl0sIm5hbWVzIjpbIkNvbW1vbkxpbmUiLCJyZXF1aXJlIiwiQ29tbWVudFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJTdHJpbmdMaXRlcmFsVG9rZW5zIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbnMiLCJQbGFpbkxpbmUiLCJjb250ZW50IiwicnVsZXMiLCJjb25maWd1cmF0aW9uIiwicGxhaW5MaW5lIiwiaW5pdGlhbGlzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGdCQUFSLENBQW5CO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLGtCQUFSLENBRHRCO0FBQUEsSUFFTUUsbUJBQW1CRixRQUFRLHFCQUFSLENBRnpCO0FBQUEsSUFHTUcsc0JBQXNCSCxRQUFRLHdCQUFSLENBSDVCO0FBQUEsSUFJTUksMEJBQTBCSixRQUFRLDRCQUFSLENBSmhDOztJQU1NSyxTOzs7Ozs7Ozs7OztxREFDb0NDLE8sRUFBU0MsSyxFQUFPQyxhLEVBQWU7QUFDckUsVUFBTUMsK0hBQW1ESixTQUFuRCxFQUE4REMsT0FBOUQsRUFBdUVDLEtBQXZFLEVBQThFQyxhQUE5RSxDQUFOOztBQUVBQyxnQkFBVUMsVUFBVixDQUFxQlQsYUFBckIsRUFBb0NHLHVCQUFwQyxFQUE2REQsbUJBQTdELEVBQWtGRCxnQkFBbEY7O0FBRUEsYUFBT08sU0FBUDtBQUNEOzs7O0VBUHFCVixVOztBQVV4QlksT0FBT0MsT0FBUCxHQUFpQlAsU0FBakIiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IENvbW1vbkxpbmUgPSByZXF1aXJlKCcuLi9jb21tb24vbGluZScpLFxyXG4gICAgICBDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvY29tbWVudCcpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvd2hpdGVzcGFjZScpLFxyXG4gICAgICBTdHJpbmdMaXRlcmFsVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc3RyaW5nTGl0ZXJhbCcpLFxyXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3JlZ3VsYXJFeHByZXNzaW9uJyk7XHJcblxyXG5jbGFzcyBQbGFpbkxpbmUgZXh0ZW5kcyBDb21tb25MaW5lIHtcclxuICBzdGF0aWMgZnJvbUNvbnRlbnRSdWxlc0FuZENvbmZpZ3VyYXRpb24oY29udGVudCwgcnVsZXMsIGNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGNvbnN0IHBsYWluTGluZSA9IHN1cGVyLmZyb21Db250ZW50UnVsZXNBbmRDb25maWd1cmF0aW9uKFBsYWluTGluZSwgY29udGVudCwgcnVsZXMsIGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgIHBsYWluTGluZS5pbml0aWFsaXNlKENvbW1lbnRUb2tlbnMsIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zLCBTdHJpbmdMaXRlcmFsVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKTtcclxuXHJcbiAgICByZXR1cm4gcGxhaW5MaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQbGFpbkxpbmU7XHJcbiJdfQ==