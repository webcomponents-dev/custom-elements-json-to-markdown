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
  let markdownParts = [];
  for (const customElement of customElements.tags) {
    if (!customElement) return undefined;
    markdownParts.push(`# ${customElement.name}`);
    markdownParts.push(customElement.description);
    customElement.attributes &&
      customElement.attributes.length > 0 &&
      markdownParts.push(transformAttributes(customElement.attributes));
    customElement.properties &&
      customElement.properties.length > 0 &&
      markdownParts.push(transformProperties(customElement.properties));
    customElement.events &&
      customElement.events.length > 0 &&
      markdownParts.push(transformEvents(customElement.events));
    customElement.slots &&
      customElement.slots.length > 0 &&
      markdownParts.push(transformSlots(customElement.slots));
    customElement.cssParts &&
      customElement.cssParts.length > 0 &&
      markdownParts.push(transformCSSParts(customElement.cssParts));
    customElement.cssProperties &&
      customElement.cssProperties.length > 0 &&
      markdownParts.push(transformCSSProperties(customElement.cssProperties));
  }
  return markdownParts.join("\n");
};
