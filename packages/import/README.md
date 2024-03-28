# `import`

The `import` package contains all of the logic for importing `widgetui` files into the project:

- `*panel.json` files: defines the positions, styles, and contents of the panels that make up the in-game UI
- `materials.json`: defines the colors and textures (materials) that are displayed by the UI
- `textures`: the `.png` images used to render the UI

## Usage

```sh
# run the import script
pnpm run import

# OR run the import script any time a source file changes
pnpm run watch
```

## How importing works

Import happens in three steps:

1. Copy `json` files to `widgetui/json`

   This brings the files into the project, allowing them to be re-exported (with strict types) by the `widgetui` package.

   > [!NOTE]
   > The files aren't simply copied, their contents are _decoded_ using the corresponding `Panel` or `Materials` schema from `widgetui/schema`. This means that importing will fail if the file doesn't match the schema.

2. Copy `textures` `.png` files to `site/public/textures`

3. Create `site/src/textures.json` from `materials.json`

   This file contains an object where the keys are materials (the names of textures referenced by `Widget.StateMaterials` states) and the values are an object with this shape:

   ```ts
   interface Texture {
     href: string
     width: number
     height: number
   }
   ```
