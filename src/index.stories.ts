import transform from "./index";

const customElements = {
  _comment:
    "EXPERIMENTAL FORMAT -> https://github.com/webcomponents/custom-elements-json",
  tags: [
    {
      name: "custom-element",
      description: "Description of the custom element.",
      attributes: [
        {
          name: "attr1",
          type: "string",
          description: "Attribute 1",
          defaultValue: "",
          required: false
        }
      ],
      properties: [
        {
          name: "prop1",
          type: "string",
          attribute: "attr1",
          description: "Property 1",
          defaultValue: "",
          required: false
        }
      ],
      events: [
        {
          name: "changed",
          description: "",
          type: "CustomEvent"
        }
      ],
      methods: [
        {
          name: "method1",
          description: ""
        }
      ],
      slots: [
        {
          name: "slot1",
          description: ""
        }
      ],
      cssCustomProperties: [
        {
          name: "--cssprop1",
          description: "",
          type: "color"
        }
      ],
      cssShadowParts: [
        {
          name: "part1",
          description: ""
        }
      ]
    }
  ]
};

export const story1 = () => `<pre>${transform(customElements)}</pre>`;
