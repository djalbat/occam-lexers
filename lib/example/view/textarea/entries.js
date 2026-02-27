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
        const value = JSON.stringify(entries, null, "  ");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyaWVzVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldEVudHJpZXMoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgZW50cmllcyA9IEpTT04ucGFyc2UodmFsdWUpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzZXRFbnRyaWVzKGVudHJpZXMpIHtcbiAgICBjb25zdCB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGVudHJpZXMsIG51bGwsIFwiICBcIik7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0RW50cmllcyA9IHRoaXMuZ2V0RW50cmllcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldEVudHJpZXMgPSB0aGlzLnNldEVudHJpZXMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0RW50cmllcyxcbiAgICAgIHNldEVudHJpZXNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZW50cmllc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkVudHJpZXNUZXh0YXJlYSIsIlRleHRhcmVhIiwiZ2V0RW50cmllcyIsInZhbHVlIiwiZ2V0VmFsdWUiLCJlbnRyaWVzIiwiSlNPTiIsInBhcnNlIiwic2V0RW50cmllcyIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7aUVBRkE7Ozs7OztBQUVOLE1BQU1BLHdCQUF3QkMsaUJBQVE7SUFDbkRDLGFBQWE7UUFDWCxNQUFNQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsVUFBVUMsS0FBS0MsS0FBSyxDQUFDSjtRQUUzQixPQUFPRTtJQUNUO0lBRUFHLFdBQVdILE9BQU8sRUFBRTtRQUNsQixNQUFNRixRQUFRRyxLQUFLRyxTQUFTLENBQUNKLFNBQVMsTUFBTTtRQUU1QyxJQUFJLENBQUNLLFFBQVEsQ0FBQ1A7SUFDaEI7SUFFQVEsZ0JBQWdCO1FBQ2QsTUFBTVQsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ1UsSUFBSSxDQUFDLElBQUksR0FDdENKLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNJLElBQUksQ0FBQyxJQUFJO1FBRTVDLE9BQVE7WUFDTlY7WUFDQU07UUFDRjtJQUNGO0lBRUEsT0FBT0ssb0JBQW9CO1FBQ3pCQyxXQUFXO1FBQ1hDLFlBQVk7SUFDZCxFQUFFO0FBQ0oifQ==