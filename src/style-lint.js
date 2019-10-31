module.exports = {
  extends: "stylelint-config-recommended-scss",
  plugins: [
    "stylelint-order"
  ],
  rules: {
    "color-named": "never",
    "color-no-hex": true,
    "declaration-bang-space-after": "always",
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-trailing-semicolon": "always",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "declaration-no-important": true,
    "block-opening-brace-newline-after": "always",
    "function-comma-space-after": "always",
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "indentation": 2,
    "length-zero-no-unit": true,
    "number-leading-zero": "always",
    "number-max-precision": 2,
    "property-case": "lower",
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "always",
    "selector-attribute-operator-space-before": "always",
    "selector-attribute-quotes": "never",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-before": "never",
    "selector-pseudo-element-no-unknown": [true, {
      "ignorePseudoElements": ["ng-deep"]
    }],
    "selector-pseudo-class-parentheses-space-inside": "never",
    "shorthand-property-no-redundant-values": true,
    "unit-case": "lower",
    "value-list-comma-space-after": "always",
    "order/order": [
      "custom-properties",
      "declarations",
      "at-variables",
      {
        "type": "at-rule",
        "name": "include",
        "hasBlock": false
      },
      {
        "type": "at-rule",
        "name": "include",
        "hasBlock": true
      },
      "at-rules",
      "rules"
    ],
    "order/properties-alphabetical-order": true
  }
};
