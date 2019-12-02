const code = (s: string) => (s ? `\`${s}\`` : "");
const transformAttributes = (attributes: any[]) => `
## Attributes

| Attribute | Type | Description |
| --------- | ---- | ----------- |
${attributes
  .map(
    attr => `| ${code(attr.name)} | ${code(attr.type)} | ${attr.description} |`
  )
  .join("\n")}
`;

const transformProperties = (properties: any[]) => `
## Properties

| Property | Attribute | Type | Default | Description |
| -------- | --------- | ---- | ------- | ----------- |
${properties
  .map(
    prop =>
      `| ${code(prop.name)} | ${code(prop.attribute)} | ${code(prop.type)} | ${
        prop.default
      } | ${prop.description} |`
  )
  .join("\n")}
`;

const transformEvents = (events: any[]) => `
## Events

| Event | Description |
| ----- | ----------- |
${events
  .map(event => `| ${code(event.name)} | ${code(event.description)} |`)
  .join("\n")}
`;

const transformSlots = (slots: any[]) => `
## Slots

| Name | Description |
| ---- | ----------- |
${slots.map(slot => `| ${code(slot.name)} | ${slot.description} |`).join("\n")}
`;

const transformCSSParts = (shadowParts: any[]) => `
## CSS Shadow Parts

| Part | Description |
| ---- | ----------- |
${shadowParts
  .map(part => `| ${code(part.name)} | ${part.description} |`)
  .join("\n")}
`;

const transformCSSProperties = (cssProperties: any[]) => `
## CSS Custom Properties

| Property | Description |
| -------- | ----------- |
${cssProperties
  .map(cssProp => `| ${code(cssProp.name)} | ${cssProp.description} |`)
  .join("\n")}
`;

export default customElements => {
  const customElement = customElements.tags[0];
  let markdownParts = [`# ${customElement.name}`];
  markdownParts.push(customElement.description);
  customElement.attributes &&
    markdownParts.push(transformAttributes(customElement.attributes));
  customElement.properties &&
    markdownParts.push(transformProperties(customElement.properties));
  customElement.events &&
    markdownParts.push(transformEvents(customElement.events));
  customElement.slots &&
    markdownParts.push(transformSlots(customElement.slots));
  customElement.cssParts &&
    markdownParts.push(transformCSSParts(customElement.cssParts));
  customElement.cssProperties &&
    markdownParts.push(transformCSSProperties(customElement.cssProperties));
  return markdownParts.join("\n");
};
