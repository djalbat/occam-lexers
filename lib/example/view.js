"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
const _easylayout = require("easy-layout");
const _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
const _sizeable = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable"));
const _tokens = /*#__PURE__*/ _interop_require_default(require("./view/textarea/tokens"));
const _entries = /*#__PURE__*/ _interop_require_default(require("./view/textarea/entries"));
const _content = /*#__PURE__*/ _interop_require_default(require("./view/textarea/content"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class View extends _easy.Element {
    keyUpHandler = (event, element)=>{
        try {
            const tokens = this.getTokens();
            this.setTokens(tokens);
        } catch (error) {
            console.log(error);
            this.clearTokens();
        }
    };
    getTokens() {
        const { Lexer } = this.constructor, entries = this.getEntries(), content = this.getContent(), lexer = Lexer.fromEntries(entries), tokens = lexer.tokenise(content);
        return tokens;
    }
    childElements() {
        return [
            /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Entries"), /*#__PURE__*/ React.createElement(_entries.default, {
                onKeyUp: this.keyUpHandler
            }))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                onKeyUp: this.keyUpHandler
            }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Tokens"), /*#__PURE__*/ React.createElement(_tokens.default, null))))
        ];
    }
    initialise() {
        this.assignContext();
        const { initialContent, Lexer } = this.constructor, { entries } = Lexer, content = initialContent; ///
        this.setContent(content);
        this.setEntries(entries);
        this.keyUpHandler();
    }
    static tagName = "div";
    static defaultProperties = {
        className: "view"
    };
}
const _default = (0, _easywithstyle.default)(View)`

  padding: 1rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3ZpZXcvc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgVG9rZW5zVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS90b2tlbnNcIjtcbmltcG9ydCBFbnRyaWVzVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9lbnRyaWVzXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvY29udGVudFwiO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLmdldFRva2VucygpO1xuXG4gICAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2tlbnMoKTtcbiAgICB9XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgeyBMZXhlciB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBlbnRyaWVzID0gdGhpcy5nZXRFbnRyaWVzKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBFbnRyaWVzXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8RW50cmllc1RleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFRva2Vuc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFRva2Vuc1RleHRhcmVhIC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbENvbnRlbnQsIExleGVyIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHsgZW50cmllcyB9ID0gTGV4ZXIsXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50OyAvLy9cblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0RW50cmllcyhlbnRyaWVzKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDsiXSwibmFtZXMiOlsiVmlldyIsIkVsZW1lbnQiLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJzZXRUb2tlbnMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclRva2VucyIsIkxleGVyIiwiZW50cmllcyIsImdldEVudHJpZXMiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImxleGVyIiwiZnJvbUVudHJpZXMiLCJ0b2tlbmlzZSIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiU2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiU3ViSGVhZGluZyIsIkVudHJpZXNUZXh0YXJlYSIsIm9uS2V5VXAiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiQ29udGVudFRleHRhcmVhIiwiVG9rZW5zVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50Iiwic2V0Q29udGVudCIsInNldEVudHJpZXMiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVGQTs7O2VBQUE7OztzRUFyRnNCO3NCQUVFOzRCQUM0QzttRUFFN0M7aUVBQ0M7K0RBQ0c7Z0VBQ0M7Z0VBQ0E7Ozs7OztBQUU1QixNQUFNQSxhQUFhQyxhQUFPO0lBQ3hCQyxlQUFlLENBQUNDLE9BQU9DO1FBQ3JCLElBQUk7WUFDRixNQUFNQyxTQUFTLElBQUksQ0FBQ0MsU0FBUztZQUU3QixJQUFJLENBQUNDLFNBQVMsQ0FBQ0Y7UUFDakIsRUFBRSxPQUFPRyxPQUFPO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFFWixJQUFJLENBQUNHLFdBQVc7UUFDbEI7SUFDRixFQUFDO0lBRURMLFlBQVk7UUFDVixNQUFNLEVBQUVNLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQzVCQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJDLFFBQVFMLE1BQU1NLFdBQVcsQ0FBQ0wsVUFDMUJSLFNBQVNZLE1BQU1FLFFBQVEsQ0FBQ0o7UUFFOUIsT0FBT1Y7SUFDVDtJQUVBZSxnQkFBZ0I7UUFDZCxPQUFROzBCQUVOLG9CQUFDQyxzQkFBVSxzQkFDVCxvQkFBQ0MsaUJBQVcsc0JBQ1Ysb0JBQUNDLG1CQUFPLHNCQUNOLG9CQUFDQyxtQkFBVSxRQUFDLDBCQUdaLG9CQUFDQyxnQkFBZTtnQkFBQ0MsU0FBUyxJQUFJLENBQUN4QixZQUFZO2dDQUcvQyxvQkFBQ3lCLCtCQUFtQix1QkFDcEIsb0JBQUNDLHFCQUFTLHNCQUNSLG9CQUFDTCxtQkFBTyxzQkFDTixvQkFBQ0MsbUJBQVUsUUFBQywwQkFHWixvQkFBQ0ssZ0JBQWU7Z0JBQUNILFNBQVMsSUFBSSxDQUFDeEIsWUFBWTs4QkFDM0Msb0JBQUNzQixtQkFBVSxRQUFDLHlCQUdaLG9CQUFDTSxlQUFjO1NBS3RCO0lBQ0g7SUFFQUMsYUFBYTtRQUNYLElBQUksQ0FBQ0MsYUFBYTtRQUVsQixNQUFNLEVBQUVDLGNBQWMsRUFBRXJCLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQzVDLEVBQUVDLE9BQU8sRUFBRSxHQUFHRCxPQUNkRyxVQUFVa0IsZ0JBQWdCLEdBQUc7UUFFbkMsSUFBSSxDQUFDQyxVQUFVLENBQUNuQjtRQUVoQixJQUFJLENBQUNvQixVQUFVLENBQUN0QjtRQUVoQixJQUFJLENBQUNYLFlBQVk7SUFDbkI7SUFFQSxPQUFPa0MsVUFBVSxNQUFNO0lBRXZCLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUN2QyxLQUFLLENBQUM7Ozs7QUFJL0IsQ0FBQyJ9