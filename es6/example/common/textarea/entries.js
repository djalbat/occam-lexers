'use strict';

const easy = require('easy');

const { InputElement } = easy;

class EntriesTextarea extends InputElement {
  constructor(selector, changeHandler, keyUpHandler) {
    super(selector, changeHandler);

    this.onKeyUp(keyUpHandler);
  }

  onKeyUp(keyUpHandler) {
    this.on('keyUp', keyUpHandler);
  }

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

  static fromProperties(properties) {
    const { onKeyUp } = properties,
          keyUpHandler = onKeyUp, ///
          entriesTextarea = InputElement.fromProperties(EntriesTextarea, properties, keyUpHandler);

    return entriesTextarea;
  }
}

Object.assign(EntriesTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'entries',
    spellCheck: false,
    readOnly: true
  },
  ignoredProperties: [
    'onKeyUp'
  ]
});

module.exports = EntriesTextarea;
