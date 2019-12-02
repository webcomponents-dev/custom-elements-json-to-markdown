[![edit-in-webcomponents.dev](https://webcomponents.dev/assets/ext/edit_in_wcd.svg)](https://webcomponents.dev/edit/XPmoswtdx4DjIFzaPMBB)
# text-field

A text field web component

## Attributes

| Attribute     | Type      | Description            |
| ------------- | --------- | ---------------------- |
| `disabled`    | `boolean` | Disables this element  |
| `size`        | `string`  | Size of the text field |
| `placeholder` | `any`     | undefined              |

## Properties

| Property | Attribute | Type     | Default   | Description            |
| -------- | --------- | -------- | --------- | ---------------------- |
| `size`   |           | `string` | undefined | Size of the text field |
| `value`  |           | `string` | undefined | undefined              |

## Events

| Event    | Description                                          |
| -------- | ---------------------------------------------------- |
| `enter`  | `Dispatched when the enter key is pressed`           |
| `change` | `Dispatched when the text of the text field changes` |

## Slots

| Name     | Description                                     |
| -------- | ----------------------------------------------- |
| `header` | Content placed in the header of the text field  |
|          | Default content placed inside of the text field |

## CSS Shadow Parts

| Part          | Description                 |
| ------------- | --------------------------- |
| `placeholder` | Placeholder css shadow part |

## CSS Custom Properties

| Property              | Description                           |
| --------------------- | ------------------------------------- |
| `--placeholder-color` | Controls the color of the placeholder |

> Created with [webcomponents.dev](https://webcomponents.dev)
