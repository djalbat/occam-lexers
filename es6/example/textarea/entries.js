"use strict";

import Textarea from "../textarea";

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

  static defaultProperties = {
    className: "entries",
    spellCheck: "false"
  };
}
