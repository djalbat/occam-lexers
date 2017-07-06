'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    StringTokens = require('./tokens/string'),
    CommentTokens = require('./tokens/comment'),
    WhitespaceTokens = require('./tokens/whitespace');

var PlainLine = function (_CommonLine) {
      _inherits(PlainLine, _CommonLine);

      function PlainLine() {
            _classCallCheck(this, PlainLine);

            return _possibleConstructorReturn(this, (PlainLine.__proto__ || Object.getPrototypeOf(PlainLine)).apply(this, arguments));
      }

      _createClass(PlainLine, null, [{
            key: 'fromContent',
            value: function fromContent(content, context, rules) {
                  return _get(PlainLine.__proto__ || Object.getPrototypeOf(PlainLine), 'fromContent', this).call(this, PlainLine, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens);
            }
      }]);

      return PlainLine;
}(CommonLine);

module.exports = PlainLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wbGFpbi9saW5lLmpzIl0sIm5hbWVzIjpbIkNvbW1vbkxpbmUiLCJyZXF1aXJlIiwiU3RyaW5nVG9rZW5zIiwiQ29tbWVudFRva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJQbGFpbkxpbmUiLCJjb250ZW50IiwiY29udGV4dCIsInJ1bGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZ0JBQVIsQ0FBbkI7QUFBQSxJQUNNQyxlQUFlRCxRQUFRLGlCQUFSLENBRHJCO0FBQUEsSUFFTUUsZ0JBQWdCRixRQUFRLGtCQUFSLENBRnRCO0FBQUEsSUFHTUcsbUJBQW1CSCxRQUFRLHFCQUFSLENBSHpCOztJQUtNSSxTOzs7Ozs7Ozs7Ozt3Q0FDZUMsTyxFQUFTQyxPLEVBQVNDLEssRUFBTztBQUFFLHVIQUF5QkgsU0FBekIsRUFBb0NDLE9BQXBDLEVBQTZDQyxPQUE3QyxFQUFzREMsS0FBdEQsRUFBNkRMLGFBQTdELEVBQTRFRCxZQUE1RSxFQUEwRkUsZ0JBQTFGO0FBQThHOzs7O0VBRHRJSixVOztBQUl4QlMsT0FBT0MsT0FBUCxHQUFpQkwsU0FBakIiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IENvbW1vbkxpbmUgPSByZXF1aXJlKCcuLi9jb21tb24vbGluZScpLFxyXG4gICAgICBTdHJpbmdUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9zdHJpbmcnKSxcclxuICAgICAgQ29tbWVudFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL2NvbW1lbnQnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3doaXRlc3BhY2UnKTtcclxuXHJcbmNsYXNzIFBsYWluTGluZSBleHRlbmRzIENvbW1vbkxpbmUge1xyXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCBydWxlcykgeyByZXR1cm4gc3VwZXIuZnJvbUNvbnRlbnQoUGxhaW5MaW5lLCBjb250ZW50LCBjb250ZXh0LCBydWxlcywgQ29tbWVudFRva2VucywgU3RyaW5nVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKTsgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBsYWluTGluZTtcclxuIl19