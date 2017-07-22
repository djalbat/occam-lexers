'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    CommentTokens = require('../common/tokens/comment'),
    WhitespaceTokens = require('../common/tokens/whitespace'),
    StringLiteralTokens = require('../common/tokens/stringLiteral'),
    RegularExpressionTokens = require('./tokens/regularExpression'),
    EndOfLineToken = require('../common/token/significant/endOfLine');

var FlorenceLine = function (_CommonLine) {
  _inherits(FlorenceLine, _CommonLine);

  function FlorenceLine() {
    _classCallCheck(this, FlorenceLine);

    return _possibleConstructorReturn(this, (FlorenceLine.__proto__ || Object.getPrototypeOf(FlorenceLine)).apply(this, arguments));
  }

  _createClass(FlorenceLine, null, [{
    key: 'fromContent',
    value: function fromContent(content, context, rules) {
      var line = _get(FlorenceLine.__proto__ || Object.getPrototypeOf(FlorenceLine), 'fromContent', this).call(this, FlorenceLine, content, context, rules, CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens),
          lineInComment = line.isInComment();

      if (!lineInComment) {
        var endOfLineToken = EndOfLineToken.fromLine(line);

        line.pushToken(endOfLineToken);
      }

      return line;
    }
  }]);

  return FlorenceLine;
}(CommonLine);

module.exports = FlorenceLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9saW5lLmpzIl0sIm5hbWVzIjpbIkNvbW1vbkxpbmUiLCJyZXF1aXJlIiwiQ29tbWVudFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJTdHJpbmdMaXRlcmFsVG9rZW5zIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbnMiLCJFbmRPZkxpbmVUb2tlbiIsIkZsb3JlbmNlTGluZSIsImNvbnRlbnQiLCJjb250ZXh0IiwicnVsZXMiLCJsaW5lIiwibGluZUluQ29tbWVudCIsImlzSW5Db21tZW50IiwiZW5kT2ZMaW5lVG9rZW4iLCJmcm9tTGluZSIsInB1c2hUb2tlbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGdCQUFSLENBQW5CO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLDBCQUFSLENBRHRCO0FBQUEsSUFFTUUsbUJBQW1CRixRQUFRLDZCQUFSLENBRnpCO0FBQUEsSUFHTUcsc0JBQXNCSCxRQUFRLGdDQUFSLENBSDVCO0FBQUEsSUFJTUksMEJBQTBCSixRQUFRLDRCQUFSLENBSmhDO0FBQUEsSUFLTUssaUJBQWlCTCxRQUFRLHVDQUFSLENBTHZCOztJQU9NTSxZOzs7Ozs7Ozs7OztnQ0FDZUMsTyxFQUFTQyxPLEVBQVNDLEssRUFBTztBQUMxQyxVQUFNQywyR0FBeUJKLFlBQXpCLEVBQXVDQyxPQUF2QyxFQUFnREMsT0FBaEQsRUFBeURDLEtBQXpELEVBQWdFUixhQUFoRSxFQUErRUcsdUJBQS9FLEVBQXdHRCxtQkFBeEcsRUFBNkhELGdCQUE3SCxDQUFOO0FBQUEsVUFDTVMsZ0JBQWdCRCxLQUFLRSxXQUFMLEVBRHRCOztBQUdBLFVBQUksQ0FBQ0QsYUFBTCxFQUFvQjtBQUNsQixZQUFNRSxpQkFBaUJSLGVBQWVTLFFBQWYsQ0FBd0JKLElBQXhCLENBQXZCOztBQUVBQSxhQUFLSyxTQUFMLENBQWVGLGNBQWY7QUFDRDs7QUFFRCxhQUFPSCxJQUFQO0FBQ0Q7Ozs7RUFad0JYLFU7O0FBZTNCaUIsT0FBT0MsT0FBUCxHQUFpQlgsWUFBakIiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IENvbW1vbkxpbmUgPSByZXF1aXJlKCcuLi9jb21tb24vbGluZScpLFxyXG4gICAgICBDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy9jb21tZW50JyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3doaXRlc3BhY2UnKSxcclxuICAgICAgU3RyaW5nTGl0ZXJhbFRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvc3RyaW5nTGl0ZXJhbCcpLFxyXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3JlZ3VsYXJFeHByZXNzaW9uJyksXHJcbiAgICAgIEVuZE9mTGluZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2VuZE9mTGluZScpO1xyXG5cclxuY2xhc3MgRmxvcmVuY2VMaW5lIGV4dGVuZHMgQ29tbW9uTGluZSB7XHJcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzKSB7XHJcbiAgICBjb25zdCBsaW5lID0gc3VwZXIuZnJvbUNvbnRlbnQoRmxvcmVuY2VMaW5lLCBjb250ZW50LCBjb250ZXh0LCBydWxlcywgQ29tbWVudFRva2VucywgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMsIFN0cmluZ0xpdGVyYWxUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpLFxyXG4gICAgICAgICAgbGluZUluQ29tbWVudCA9IGxpbmUuaXNJbkNvbW1lbnQoKTtcclxuXHJcbiAgICBpZiAoIWxpbmVJbkNvbW1lbnQpIHtcclxuICAgICAgY29uc3QgZW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5mcm9tTGluZShsaW5lKTtcclxuXHJcbiAgICAgIGxpbmUucHVzaFRva2VuKGVuZE9mTGluZVRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGluZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMaW5lO1xyXG4iXX0=