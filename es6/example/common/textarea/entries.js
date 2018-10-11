'use strict';

const easy = require('easy');

const { InputElement } = easy;

class EntriesTextarea extends InputElement {
  getEntries() {
    const value = this.getValue(),
          entries = JSON.parse(value);

    return entries;
  }

  setEntries(entries) {
    const value = JSON.stringify(entries, null, '  ');

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

  static fromProperties(properties) { return InputElement.fromProperties(EntriesTextarea, properties, keyUpHandler); }
}

Object.assign(EntriesTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'entries',
    spellCheck: false,
    readOnly: true
  }
});

module.exports = EntriesTextarea;
