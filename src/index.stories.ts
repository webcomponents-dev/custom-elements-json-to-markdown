import transform from "./index";
const customElements = {
  version: 2,
  tags: [
    {
      name: "text-field",
      description: "A text field web component",
      jsDoc:
        "/**\n * A text field web component\n * @attr {Boolean} disabled - Disables this element\n * @fires change - Dispatched when the text of the text field changes\n * @slot - Default content placed inside of the text field\n * @slot header - Content placed in the header of the text field\n * @cssprop --placeholder-color - Controls the color of the placeholder\n * @csspart placeholder - Placeholder css shadow part\n */",
      attributes: [
        {
          name: "disabled",
          description: "Disables this element",
          type: "boolean"
        },
        {
          name: "size",
          description: "Size of the text field",
          jsDoc:
            '/**\n   * Size of the text field\n   * @attr\n   * @type {"small"|"large"}\n   */',
          type: "string"
        },
        {
          name: "placeholder",
          type: "any"
        }
      ],
      properties: [
        {
          name: "size",
          description: "Size of the text field",
          jsDoc:
            '/**\n   * Size of the text field\n   * @attr\n   * @type {"small"|"large"}\n   */',
          type: "string"
        },
        {
          name: "value",
          type: "string"
        }
      ],
      events: [
        {
          name: "enter",
          description: "Dispatched when the enter key is pressed",
          jsDoc: "/**\n     * Dispatched when the enter key is pressed\n     */"
        },
        {
          name: "change",
          description: "Dispatched when the text of the text field changes"
        }
      ],
      slots: [
        {
          name: "header",
          description: "Content placed in the header of the text field"
        },
        {
          name: "",
          description: "Default content placed inside of the text field"
        }
      ],
      cssProperties: [
        {
          name: "--placeholder-color",
          description: "Controls the color of the placeholder"
        }
      ],
      cssParts: [
        {
          name: "placeholder",
          description: "Placeholder css shadow part"
        }
      ]
    }
  ]
};

export const story1 = () => transform(customElements);
