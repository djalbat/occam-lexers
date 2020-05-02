"use strict";

import { Textarea } from "easy";

export default class EntriesTextarea extends Textarea {
  getEntries() {
    const value = this.getValue(),
          entries = JSON.parse(value);

    return entries;
  }

  setEntries(entries) {
    const value = JSON.stringify(entries, null, "  ");

    this.setValue(value);
  }

  parentContext() {
    const getEntries = this.getEntries.bind(this),
          setEntries = this.setEntries.bind(this);

    return ({
      getEntries,
      setEntries
    });
  }
}

Object.assign(EntriesTextarea, {
  tagName: "textarea",
  defaultProperties: {
    className: "entries",
    spellCheck: "false"
  }
});
