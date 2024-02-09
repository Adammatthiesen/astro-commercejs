# `Astro-CommerceJS`

This is an [Astro integration](https://docs.astro.build/en/guides/integrations-guide/) that brings the CommerceJS SDK into Astro snap in package.

## Installation

Install the integration **automatically** using the Astro CLI:

```bash
pnpm astro add @adammatthiesen/astro-commercejs
```

```bash
npm astro add @adammatthiesen/astro-commercejs
```

```bash
yarn astro add @adammatthiesen/astro-commercejs
```

Or install it **manually**:

1. Install the required dependencies

```bash
pnpm add @adammatthiesen/astro-commercejs
```

```bash
npm install @adammatthiesen/astro-commercejs
```

```bash
yarn add @adammatthiesen/astro-commercejs
```

2. Add the integration to your astro config

```diff
+import astroCommerceJS from "@adammatthiesen/astro-commercejs";

export default defineConfig({
  integrations: [
+    astroCommerceJS(),
  ],
});
```

## Basic Usage

This will present you will the json output of Merchant, Categories, and Products,  and should act as a starting point for integrating this project with the CommerceJS SDK

```astro
---
import { AstroCommerceJS } from "@adammatthiesen/astro-commercejs";
const commercejs = await AstroCommerceJS();
const { merchant, categories, products } = commercejs
---
<div>
    <h1>This is a API Test Below is the JSON output from the API</h1>
    <h2>Merchants</h2>
    <pre>{JSON.stringify(merchant, null, 2)}</pre>
    <h2>Categories</h2>
    <pre>{JSON.stringify(categories, null, 2)}</pre>
    <h2>Products</h2>
    <pre>{JSON.stringify(products, null, 2)}</pre>
</div>
```

## Full SDK Access

This will present you with a interface to the full js SDK provided by Commerce.js, All you will need to make sure is your env variables are set then youll be able to follow along with any of the tutorials to link it in! just pointing to this commerce client instead of creating a client yourself with the normal lib.

```astro
---
import { commerce } from "@adammatthiesen/astro-commercejs";
const merchantAbout = await commerce.merchants.about();

export async function getFullCatalog() {
    const { data: categories } = await commerce.categories.list();
    const { data: products } = await commerce.products.list();

    return { categories, products};
}

const { categories, products } = await getFullCatalog()
---
<h1>{merchantAbout.business_name}</h1>

<div>
    <h1>This is a API Test Below is the JSON output from the API</h1>
    <h2>Categories</h2>
    <pre>{JSON.stringify(categories, null, 2)}</pre>
    <h2>Products</h2>
    <pre>{JSON.stringify(products, null, 2)}</pre>
</div>
```

## Contributing

This package is structured as a monorepo:

- `playground` contains code for testing the package
- `package` contains the actual package

Install dependencies using pnpm: 

```bash
pnpm i --frozen-lockfile
```

Start the playground:

```bash
pnpm playground:dev
```

You can now edit files in `package`. Please note that making changes to those files may require restarting the playground dev server.

## Licensing

[MIT Licensed](./LICENSE). Made with ❤️ by [Adam M.](https://github.com/AdamMatthiesen).

## Acknowledgements

TODO:
