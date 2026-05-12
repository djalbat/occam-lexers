"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EntriesTextarea;
    }
});
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class EntriesTextarea extends _textarea.default {
    getEntries() {
        const value = this.getValue(), entries = JSON.parse(value);
        return entries;
    }
    setEntries(entries) {
        const value = JSON.stringify(entries, null, 2);
        this.setValue(value);
    }
    parentContext() {
        const getEntries = this.getEntries.bind(this), setEntries = this.setEntries.bind(this);
        return {
            getEntries,
            setEntries
        };
    }
    static defaultProperties = {
        className: "entries",
        spellCheck: "false"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyaWVzVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldEVudHJpZXMoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgZW50cmllcyA9IEpTT04ucGFyc2UodmFsdWUpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzZXRFbnRyaWVzKGVudHJpZXMpIHtcbiAgICBjb25zdCB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGVudHJpZXMsIG51bGwsIDIpO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldEVudHJpZXMgPSB0aGlzLmdldEVudHJpZXMuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRFbnRyaWVzID0gdGhpcy5zZXRFbnRyaWVzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEVudHJpZXMsXG4gICAgICBzZXRFbnRyaWVzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImVudHJpZXNcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJFbnRyaWVzVGV4dGFyZWEiLCJUZXh0YXJlYSIsImdldEVudHJpZXMiLCJ2YWx1ZSIsImdldFZhbHVlIiwiZW50cmllcyIsIkpTT04iLCJwYXJzZSIsInNldEVudHJpZXMiLCJzdHJpbmdpZnkiLCJzZXRWYWx1ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7O2lFQUZBOzs7Ozs7QUFFTixNQUFNQSx3QkFBd0JDLGlCQUFRO0lBQ25EQyxhQUFhO1FBQ1gsTUFBTUMsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJDLFVBQVVDLEtBQUtDLEtBQUssQ0FBQ0o7UUFFM0IsT0FBT0U7SUFDVDtJQUVBRyxXQUFXSCxPQUFPLEVBQUU7UUFDbEIsTUFBTUYsUUFBUUcsS0FBS0csU0FBUyxDQUFDSixTQUFTLE1BQU07UUFFNUMsSUFBSSxDQUFDSyxRQUFRLENBQUNQO0lBQ2hCO0lBRUFRLGdCQUFnQjtRQUNkLE1BQU1ULGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNVLElBQUksQ0FBQyxJQUFJLEdBQ3RDSixhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDSSxJQUFJLENBQUMsSUFBSTtRQUU1QyxPQUFRO1lBQ05WO1lBQ0FNO1FBQ0Y7SUFDRjtJQUVBLE9BQU9LLG9CQUFvQjtRQUN6QkMsV0FBVztRQUNYQyxZQUFZO0lBQ2QsRUFBRTtBQUNKIn0=