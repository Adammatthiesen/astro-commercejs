# `Astro-CommerceJS`

This is an [Astro integration](https://docs.astro.build/en/guides/integrations-guide/) that brings the CommerceJS SDK into Astro snap in package.

## Usage

### Prerequisites

TODO:

### Installation

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

### Configuration

TODO:configuration

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
