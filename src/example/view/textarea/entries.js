"use strict";

import Textarea from "../textarea";

export default class EntriesTextarea extends Textarea {
  getEntries() {
    const value = this.getValue(),
          jsonString = value, ///
          json = JSON.parse(jsonString),
          entries = json; ///

    return entries;
  }

  setEntries(entries) {
    const json = entries, ///
          jsonString = JSON.stringify(json, null, 2),
          value = jsonString; ///

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
