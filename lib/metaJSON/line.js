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

var MetaJSONLine = function (_CommonLine) {
      _inherits(MetaJSONLine, _CommonLine);

      function MetaJSONLine() {
            _classCallCheck(this, MetaJSONLine);

            return _possibleConstructorReturn(this, (MetaJSONLine.__proto__ || Object.getPrototypeOf(MetaJSONLine)).apply(this, arguments));
      }

      _createClass(MetaJSONLine, null, [{
            key: 'fromContent',
            value: function fromContent(content, context, rules) {
                  return _get(MetaJSONLine.__proto__ || Object.getPrototypeOf(MetaJSONLine), 'fromContent', this).call(this, MetaJSONLine, content, context, rules, CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens);
            }
      }]);

      return MetaJSONLine;
}(CommonLine);

module.exports = MetaJSONLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9tZXRhSlNPTi9saW5lLmpzIl0sIm5hbWVzIjpbIkNvbW1vbkxpbmUiLCJyZXF1aXJlIiwiQ29tbWVudFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJTdHJpbmdMaXRlcmFsVG9rZW5zIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbnMiLCJNZXRhSlNPTkxpbmUiLCJjb250ZW50IiwiY29udGV4dCIsInJ1bGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZ0JBQVIsQ0FBbkI7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsa0JBQVIsQ0FEdEI7QUFBQSxJQUVNRSxtQkFBbUJGLFFBQVEscUJBQVIsQ0FGekI7QUFBQSxJQUdNRyxzQkFBc0JILFFBQVEsd0JBQVIsQ0FINUI7QUFBQSxJQUlNSSwwQkFBMEJKLFFBQVEsNEJBQVIsQ0FKaEM7O0lBTU1LLFk7Ozs7Ozs7Ozs7O3dDQUNlQyxPLEVBQVNDLE8sRUFBU0MsSyxFQUFPO0FBQUUsNkhBQXlCSCxZQUF6QixFQUF1Q0MsT0FBdkMsRUFBZ0RDLE9BQWhELEVBQXlEQyxLQUF6RCxFQUFnRVAsYUFBaEUsRUFBK0VHLHVCQUEvRSxFQUF3R0QsbUJBQXhHLEVBQTZIRCxnQkFBN0g7QUFBaUo7Ozs7RUFEdEtILFU7O0FBSTNCVSxPQUFPQyxPQUFQLEdBQWlCTCxZQUFqQiIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgQ29tbW9uTGluZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9saW5lJyksXHJcbiAgICAgIENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9jb21tZW50JyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy93aGl0ZXNwYWNlJyksXHJcbiAgICAgIFN0cmluZ0xpdGVyYWxUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9zdHJpbmdMaXRlcmFsJyksXHJcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvcmVndWxhckV4cHJlc3Npb24nKTtcclxuXHJcbmNsYXNzIE1ldGFKU09OTGluZSBleHRlbmRzIENvbW1vbkxpbmUge1xyXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCBydWxlcykgeyByZXR1cm4gc3VwZXIuZnJvbUNvbnRlbnQoTWV0YUpTT05MaW5lLCBjb250ZW50LCBjb250ZXh0LCBydWxlcywgQ29tbWVudFRva2VucywgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMsIFN0cmluZ0xpdGVyYWxUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpOyB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTWV0YUpTT05MaW5lO1xyXG4iXX0=