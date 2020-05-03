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
var exampleView = React.createElement(View, null);
exampleView.appendTo(body);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsicmVuZGVyU3R5bGVzIiwid2l0aFN0eWxlIiwiVmlldyIsImJvZHkiLCJCb2R5IiwiZXhhbXBsZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwiQk5GVmlldyIsIkJhc2ljVmlldyIsIkZsb3JlbmNlVmlldyIsImV4YW1wbGVWaWV3IiwiYXBwZW5kVG8iXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7O0FBTjBDO0lBUWxDQSxZLEdBQWlCQyx5QixDQUFqQkQsWTtBQUVSLElBQUlFLElBQUo7QUFFQSxJQUFNQyxJQUFJLEdBQUcsSUFBSUMsVUFBSixFQUFiO0FBQUEsSUFDTUMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLENBQXVCQyxTQUF2QixDQUFpQyxDQUFqQyxDQURoQixDLENBQ3NEOztBQUV0RCxRQUFRSixPQUFSO0FBQ0UsT0FBSyxLQUFMO0FBQWFILElBQUFBLElBQUksR0FBR1EsZ0JBQVA7QUFBZ0I7O0FBQzdCLE9BQUssT0FBTDtBQUFlUixJQUFBQSxJQUFJLEdBQUdTLGlCQUFQO0FBQWtCOztBQUNqQyxPQUFLLFVBQUw7QUFBa0JULElBQUFBLElBQUksR0FBR1UsaUJBQVA7QUFBcUI7QUFIekM7O0FBTUFaLFlBQVk7QUFFWixJQUFNYSxXQUFXLEdBRWYsb0JBQUMsSUFBRCxPQUZGO0FBTUFBLFdBQVcsQ0FBQ0MsUUFBWixDQUFxQlgsSUFBckIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwianV4dGFwb3NlXCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQk5GVmlldyBmcm9tIFwiLi9leGFtcGxlL2JuZi92aWV3XCI7XG5pbXBvcnQgQmFzaWNWaWV3IGZyb20gXCIuL2V4YW1wbGUvYmFzaWMvdmlld1wiO1xuaW1wb3J0IEZsb3JlbmNlVmlldyBmcm9tIFwiLi9leGFtcGxlL2Zsb3JlbmNlL3ZpZXdcIjtcblxuY29uc3QgeyByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxubGV0IFZpZXc7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwiYm5mXCIgOiBWaWV3ID0gQk5GVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJiYXNpY1wiIDogVmlldyA9IEJhc2ljVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJmbG9yZW5jZVwiIDogVmlldyA9IEZsb3JlbmNlVmlldzsgYnJlYWs7XG59XG5cbnJlbmRlclN0eWxlcygpO1xuXG5jb25zdCBleGFtcGxlVmlldyA9XG5cbiAgPFZpZXcgLz5cblxuO1xuXG5leGFtcGxlVmlldy5hcHBlbmRUbyhib2R5KTtcbiJdfQ==