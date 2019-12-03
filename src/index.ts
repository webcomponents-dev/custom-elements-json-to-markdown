const code = (s: string) => (s ? `\`${s}\`` : "");
const transformAttributes = (attributes: any[]) => `
## Attributes

| Attribute | Type | Description | Default value | Required |
| --------- | ---- | ----------- | ------------- | -------- |
${attributes
  .map(
    attr =>
      `| ${code(attr.name)} | ${code(attr.type)} | ${attr.description} | ${code(
        attr.defaultValue
      )} | ${attr.required} |`
  )
  .join("\n")}`;

const transformProperties = (properties: any[]) => `
## Properties

| Property | Attribute | Type | Description   | Default value | Required |
| -------- | --------- | ---- | ------------- | ------------- | -------- |
${properties
  .map(
    prop =>
      `| ${code(prop.name)} | ${code(prop.attribute)} | ${code(prop.type)} | ${
        prop.description
      } | ${prop.defaultValue} | ${prop.required} |`
  )
  .join("\n")}`;

const transformEvents = (events: any[]) => `
## Events

| Event | Type | Description |
| ----- | ---- | ----------- |
${events
  .map(
    event =>
      `| ${code(event.name)} | ${code(event.type)} | ${code(
        event.description
      )} |`
  )
  .join("\n")}`;

const transformSlots = (slots: any[]) => `
## Slots

| Name | Description |
| ---- | ----------- |
${slots
  .map(slot => `| ${code(slot.name)} | ${slot.description} |`)
  .join("\n")}`;

const transformCSSProperties = (cssProperties: any[]) => `
## CSS Custom Properties

| Property | Type | Description |
| -------- | ---- | ----------- |
${cssProperties
  .map(
    cssProp =>
      `| ${code(cssProp.name)} | ${code(cssProp.type)} | ${
        cssProp.description
      } |`
  )
  .join("\n")}`;

const transformCSSParts = (shadowParts: any[]) => `
## CSS Shadow Parts

| Part | Description |
| ---- | ----------- |
${shadowParts
  .map(part => `| ${code(part.name)} | ${part.description} |`)
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
      cssCustomProperties,
      cssShadowParts
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
    cssCustomProperties &&
      cssCustomProperties.length > 0 &&
      markdownParts.push(transformCSSProperties(cssCustomProperties));
    cssShadowParts &&
      cssShadowParts.length > 0 &&
      markdownParts.push(transformCSSParts(cssShadowParts));
  }
  return markdownParts.join("\n\n");
};
