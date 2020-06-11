module.exports = {
  "extends": "stylelint-config-sass-guidelines",
  "rules": {
    "max-nesting-depth": null,
    "selector-class-pattern": [
      // Matches BEM
      "^([a-z\d]|-(?!-))+(__([a-z\d]|-(?!-))+)?(--([a-z\d]|-(?!-))+)?$",
      {}
    ],
    "scss/at-extend-no-missing-placeholder": null,
    "indentation": [2, {
      "baseIndentLevel": 0,
    }],
  },
}
