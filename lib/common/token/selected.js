'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var SelectedToken = function (_Token) {
  _inherits(SelectedToken, _Token);

  function SelectedToken() {
    _classCallCheck(this, SelectedToken);

    return _possibleConstructorReturn(this, (SelectedToken.__proto__ || Object.getPrototypeOf(SelectedToken)).apply(this, arguments));
  }

  _createClass(SelectedToken, [{
    key: 'getHTML',
    value: function getHTML() {
      var content = this.getContent(),
          html = content; ///

      return html;
    }
  }]);

  return SelectedToken;
}(Token);

module.exports = SelectedToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2VsZWN0ZWQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiU2VsZWN0ZWRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiaHRtbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxVQUFSLENBQVo7O0lBRU1DLGE7Ozs7Ozs7Ozs7OzhCQUNNO0FBQ1IsVUFBSUMsVUFBVSxLQUFLQyxVQUFMLEVBQWQ7QUFBQSxVQUNJQyxPQUFPRixPQURYLENBRFEsQ0FFYTs7QUFFckIsYUFBT0UsSUFBUDtBQUNEOzs7O0VBTnlCTCxLOztBQVM1Qk0sT0FBT0MsT0FBUCxHQUFpQkwsYUFBakIiLCJmaWxlIjoic2VsZWN0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG5cbmNsYXNzIFNlbGVjdGVkVG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIGdldEhUTUwoKSB7XG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgaHRtbCA9IGNvbnRlbnQ7ICAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0ZWRUb2tlbjtcbiJdfQ==