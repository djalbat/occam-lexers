"use strict";

require("juxtapose");

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _view = _interopRequireDefault(require("./example/bnf/view"));

var _view2 = _interopRequireDefault(require("./example/basic/view"));

var _view3 = _interopRequireDefault(require("./example/florence/view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var renderStyles = _easyWithStyle["default"].renderStyles;
var View;
var body = new _easy.Body(),
    example = window.location.search.substring(1); ///

switch (example) {
  case "bnf":
    View = _view["default"];
    break;

  case "basic":
    View = _view2["default"];
    break;

  case "florence":
    View = _view3["default"];
    break;
}

renderStyles();
var exampleView = /*#__PURE__*/React.createElement(View, null);
exampleView.appendTo(body);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsicmVuZGVyU3R5bGVzIiwid2l0aFN0eWxlIiwiVmlldyIsImJvZHkiLCJCb2R5IiwiZXhhbXBsZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwiQk5GVmlldyIsIkJhc2ljVmlldyIsIkZsb3JlbmNlVmlldyIsImV4YW1wbGVWaWV3IiwiYXBwZW5kVG8iXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7O0FBTjBDO0lBUWxDQSxZLEdBQWlCQyx5QixDQUFqQkQsWTtBQUVSLElBQUlFLElBQUo7QUFFQSxJQUFNQyxJQUFJLEdBQUcsSUFBSUMsVUFBSixFQUFiO0FBQUEsSUFDTUMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLENBQXVCQyxTQUF2QixDQUFpQyxDQUFqQyxDQURoQixDLENBQ3NEOztBQUV0RCxRQUFRSixPQUFSO0FBQ0UsT0FBSyxLQUFMO0FBQWFILElBQUFBLElBQUksR0FBR1EsZ0JBQVA7QUFBZ0I7O0FBQzdCLE9BQUssT0FBTDtBQUFlUixJQUFBQSxJQUFJLEdBQUdTLGlCQUFQO0FBQWtCOztBQUNqQyxPQUFLLFVBQUw7QUFBa0JULElBQUFBLElBQUksR0FBR1UsaUJBQVA7QUFBcUI7QUFIekM7O0FBTUFaLFlBQVk7QUFFWixJQUFNYSxXQUFXLGdCQUVmLG9CQUFDLElBQUQsT0FGRjtBQU1BQSxXQUFXLENBQUNDLFFBQVosQ0FBcUJYLElBQXJCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcImp1eHRhcG9zZVwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEJORlZpZXcgZnJvbSBcIi4vZXhhbXBsZS9ibmYvdmlld1wiO1xuaW1wb3J0IEJhc2ljVmlldyBmcm9tIFwiLi9leGFtcGxlL2Jhc2ljL3ZpZXdcIjtcbmltcG9ydCBGbG9yZW5jZVZpZXcgZnJvbSBcIi4vZXhhbXBsZS9mbG9yZW5jZS92aWV3XCI7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbmxldCBWaWV3O1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIGV4YW1wbGUgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTsgIC8vL1xuXG5zd2l0Y2ggKGV4YW1wbGUpIHtcbiAgY2FzZSBcImJuZlwiIDogVmlldyA9IEJORlZpZXc7IGJyZWFrO1xuICBjYXNlIFwiYmFzaWNcIiA6IFZpZXcgPSBCYXNpY1ZpZXc7IGJyZWFrO1xuICBjYXNlIFwiZmxvcmVuY2VcIiA6IFZpZXcgPSBGbG9yZW5jZVZpZXc7IGJyZWFrO1xufVxuXG5yZW5kZXJTdHlsZXMoKTtcblxuY29uc3QgZXhhbXBsZVZpZXcgPVxuXG4gIDxWaWV3IC8+XG5cbjtcblxuZXhhbXBsZVZpZXcuYXBwZW5kVG8oYm9keSk7XG4iXX0=