# utilities.css

CSS library with utility classes

## Installation

```bash
npm install @ivteplo/utilities.css
# or, if you prefer yarn:
yarn add @ivteplo/utilities.css
```

## Usage

### Via CDN

Add this piece of code into the `<head>` tag in your HTML file:
```html
<link rel="stylesheet" href="https://unpkg.com/@ivteplo/utilities.css/build/main.css">
```

Or, if you want to use the minified version:
```html
<link rel="stylesheet" href="https://unpkg.com/@ivteplo/utilities.css/build/main.min.css">
```

### Import into JavaScript

This requires a bundler that supports importing CSS:
```javascript
import "@ivteplo/utilities.css/build/main.css"
```

Or minified version:
```javascript
import "@ivteplo/utilities.css/build/main.min.css"
```

## Classes

### Flexbox

- `.row` - flexbox container with horizontal direction
  - `.reversed-order` - reverse the order of items
  - `.wrap` - wrap the items that overflow the horizontal axis to a new line
  - `.reversed-wrap` - the same as `.wrap`, but in reverse order
  - `.no-wrap` - disable wrapping of children
  - `.items-start`, `.items-center`, `.items-end`, `.items-stretch`, `.items-baseline` - vertical alignment of children
  - `.content-start`, `.content-center`, `.content-end`, `.content-stretch`, `.content-baseline` - vertical alignment of children if there some children have been wrapped to a new row
  - `.justify-start`, `.justify-center`, `.justify-end`, `.justify-stretch`, `.justify-baseline` - horizontal alignment of children
- `.column` - flexbox container with vertical direction
  - `.reversed-order` - reverse the order of items
  - `.wrap` - wrap the items  that overflow the vertical axis to a new column
  - `.reversed-wrap` - the same as `.wrap`, but in reverse order
  - `.no-wrap` - disable wrapping of children
  - `.items-start`, `.items-center`, `.items-end`, `.items-stretch`, `.items-baseline` - horizontal alignment of children
  - `.content-start`, `.content-center`, `.content-end`, `.content-stretch`, `.content-baseline` - horizontal alignment of children if there some children have been wrapped to a new column
  - `.justify-start`, `.justify-center`, `.justify-end`, `.justify-stretch`, `.justify-baseline` - vertical alignment of children
- `.fill` - fill the parent, applies to a child of a flexbox container

### Fonts

- Font weights
  - `.font-thin` (100)
  - `.font-extra-light` (200)
  - `.font-light` (300)
  - `.font-regular` (400)
  - `.font-medium` (500)
  - `.font-semibold` (600)
  - `.font-bold` (700)
  - `.font-extra-bold` (800)
  - `.font-black` (900)
- Font families
  - `.font-system` - default system font

### Miscellaneous

Selection of text and other objects:
- `.selectable` - enable selection
- `.not-selectable` - disable selection

Mouse cursor:
- `.cursor-pointer` - show pointer cursor on hover

## Development

### Prerequisites

- Node.js and npm

### Setup

1. Clone the repository

```bash
git clone https://github.com/ivteplo/css-utils
```

2. Navigate to the folder

```bash
cd css-utils
```

3. Install dependencies

```bash
npm install
```

4. Happy hacking! 🎉

### Scripts / tasks

- Make a new CSS build

```bash
npm run build
```

- Rebuild on changes

```bash
npm run watch
```

- Format source files

```bash
npm run format
```
