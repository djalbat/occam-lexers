"use strict";
require("juxtapose");
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _bnf = _interopRequireDefault(require("./example/view/bnf"));
var _basic = _interopRequireDefault(require("./example/view/basic"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyles = _easyWithStyle.default.renderStyles;
var View;
var body = new _easy.Body(), example = window.location.search.substring(1); ///
switch(example){
    case "bnf":
        View = _bnf.default;
        break;
    case "basic":
        View = _basic.default;
        break;
}
renderStyles();
body.mount(/*#__PURE__*/ React.createElement(View, null));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBCTkZWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9ibmZcIjtcbmltcG9ydCBCYXNpY1ZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2Jhc2ljXCI7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbmxldCBWaWV3O1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIGV4YW1wbGUgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTsgIC8vL1xuXG5zd2l0Y2ggKGV4YW1wbGUpIHtcbiAgY2FzZSBcImJuZlwiOiBWaWV3ID0gQk5GVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJiYXNpY1wiOiBWaWV3ID0gQmFzaWNWaWV3OyBicmVhaztcbn1cblxucmVuZGVyU3R5bGVzKCk7XG5cbmJvZHkubW91bnQoXG5cbiAgPFZpZXcgLz5cblxuKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOztBQUlVLEdBQWlCLENBQWpCLGNBQWlCO0FBRWxCLEdBQU0sQ0FBTixLQUFNO0FBRVAsR0FBb0IsQ0FBcEIsSUFBb0I7QUFDbEIsR0FBc0IsQ0FBdEIsTUFBc0I7Ozs7OztBQUU1QyxHQUFLLENBQUcsWUFBWSxHQVBFLGNBQWlCLFNBTy9CLFlBQVk7QUFFcEIsR0FBRyxDQUFDLElBQUk7QUFFUixHQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FUSyxLQUFNLFNBVXJCLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFJLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztPQUVqRCxPQUFPO1VBQ1IsR0FBSztRQUFFLElBQUksR0FYRSxJQUFvQjs7VUFZakMsS0FBTztRQUFFLElBQUksR0FYRSxNQUFzQjs7O0FBYzVDLFlBQVk7QUFFWixJQUFJLENBQUMsS0FBSyxtQ0FFUCxJQUFJIn0=