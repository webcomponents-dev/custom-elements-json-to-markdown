const code = (s: string) => (s ? `\`${s}\`` : "");
const transformAttributes = (attributes: any[]) => `
## Attributes

| Attribute | Type | Description |
| --------- | ---- | ----------- |
${attributes
  .map(
    attr => `| ${code(attr.name)} | ${code(attr.type)} | ${attr.description} |`
  )
  .join("\n")}`;

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
  .join("\n")}`;

const transformEvents = (events: any[]) => `
## Events

| Event | Description |
| ----- | ----------- |
${events
  .map(event => `| ${code(event.name)} | ${code(event.description)} |`)
  .join("\n")}`;

const transformSlots = (slots: any[]) => `
## Slots

| Name | Description |
| ---- | ----------- |
${slots
  .map(slot => `| ${code(slot.name)} | ${slot.description} |`)
  .join("\n")}`;

const transformCSSParts = (shadowParts: any[]) => `
## CSS Shadow Parts

| Part | Description |
| ---- | ----------- |
${shadowParts
  .map(part => `| ${code(part.name)} | ${part.description} |`)
  .join("\n")}`;

const transformCSSProperties = (cssProperties: any[]) => `
## CSS Custom Properties

| Property | Syntax | Description |
| -------- | ------ | ----------- |
${cssProperties
  .map(
    cssProp =>
      `| ${code(cssProp.name)} | ${code(cssProp.syntax)} | ${
        cssProp.description
      } |`
  )
  .join("\n")}`;

export default customElements => {
  let markdownParts = [];
  for (const customElement of customElements.tags) {
    if (!customElement) return undefined;
    const {
      name,
      description,
      attributes,
      properties,
      events,
      slots,
      cssParts,
      cssProperties
    } = customElement;
    markdownParts.push(`# ${name}`);
    markdownParts.push(description);
    attributes &&
      attributes.length > 0 &&
      markdownParts.push(transformAttributes(attributes));
    properties &&
      properties.length > 0 &&
      markdownParts.push(transformProperties(properties));
    events && events.length > 0 && markdownParts.push(transformEvents(events));
    slots && slots.length > 0 && markdownParts.push(transformSlots(slots));
    cssParts &&
      cssParts.length > 0 &&
      markdownParts.push(transformCSSParts(cssParts));
    cssProperties &&
      cssProperties.length > 0 &&
      markdownParts.push(transformCSSProperties(cssProperties));
  }
  return markdownParts.join("\n\n");
};
