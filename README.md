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
<link
	rel="stylesheet"
	href="https://unpkg.com/@ivteplo/utilities.css/build/main.css"
/>
```

Or, if you want to use the minified version:

```html
<link
	rel="stylesheet"
	href="https://unpkg.com/@ivteplo/utilities.css/build/main.min.css"
/>
```

### Import from JavaScript

This requires a bundler that supports importing CSS:

```javascript
import "@ivteplo/utilities.css/build/main.css"
```

Or minified version:

```javascript
import "@ivteplo/utilities.css/build/main.min.css"
```

### Import from CSS

Using bundler:

```css
@import "@ivteplo/utilities.css";
```

Using CDN:

```css
@import "https://unpkg.com/@ivteplo/utilities.css/build/main.min.css";
```

## Classes

### Flexbox

- `.row` — flexbox container with horizontal direction
  - `.reversed-order` — reverse the order of items
  - `.wrap` — wrap the items that overflow the horizontal axis to a new line
  - `.reversed-wrap` — the same as `.wrap`, but in reverse order
  - `.no-wrap` — disable wrapping of children
  - `.items-start`, `.items-center`, `.items-end`, `.items-stretch`, `.items-baseline` — vertical alignment of children
  - `.content-start`, `.content-center`, `.content-end`, `.content-stretch`, `.content-baseline` — vertical alignment of children if there some children have been wrapped to a new row
  - `.justify-start`, `.justify-center`, `.justify-end`, `.justify-stretch`, `.justify-baseline` — horizontal alignment of children
- `.column` — flexbox container with vertical direction
  - `.reversed-order` — reverse the order of items
  - `.wrap` — wrap the items that overflow the vertical axis to a new column
  - `.reversed-wrap` — the same as `.wrap`, but in reverse order
  - `.no-wrap` — disable wrapping of children
  - `.items-start`, `.items-center`, `.items-end`, `.items-stretch`, `.items-baseline` — horizontal alignment of children
  - `.content-start`, `.content-center`, `.content-end`, `.content-stretch`, `.content-baseline` — horizontal alignment of children if there some children have been wrapped to a new column
  - `.justify-start`, `.justify-center`, `.justify-end`, `.justify-stretch`, `.justify-baseline` — vertical alignment of children
- `.fill` — fill the parent, applies to a child of a flexbox container

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
- Font styles
  - `.font-normal` — normal style
  - `.font-italic` — italic font
  - `.font-oblique` — oblique font
- Font families
  - `.font-system` — default system font
  - `.font-monospace` — cross-platform monospace font
  - `.font-serif` — cross-platform serif font
  - `.font-sans-serif` — cross-platform sans-serif font

### Text

- Text alignment
  - `.text-left`
  - `.text-center`
  - `.text-right`
  - `.text-justify`

### Miscellaneous

Selection of text and other objects:

- `.selectable` — enable selection
- `.not-selectable` — disable selection

Mouse cursor:

- `.cursor-pointer` — show pointer cursor on hover

## Development

### Prerequisites

- Node.js and npm

### Setup

1. Clone the repository

```bash
git clone https://github.com/ivteplo/utilities.css
```

2. Navigate to the folder

```bash
cd utilities.css
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
