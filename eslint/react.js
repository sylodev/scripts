module.exports = {
  extends: require.resolve("./portable.js"),
  rules: {
    "unicorn/no-useless-undefined": "off",
    "react/function-component-definition": "off",
    "react/jsx-no-useless-fragment": "off",
    "react/jsx-fragments": ["error", "element"],
    "@typescript-eslint/no-floating-promises": "off",
    "import/dynamic-import-chunkname": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/no-autofocus": "off",
    "no-restricted-globals": "off",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-unused-expressions": "off",
  },
};
