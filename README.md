# four for business - Corporate Brand Logo

This packages provides the `four for business` [corporate brand logo][].

[corporate brand logo]: https://github.com/fourforbusiness/corporate-brand-logo

## Installation

npm

```bash
npm i @fourforbusiness/corporate-brand-logo
```

yarn

```bash
yarn add @fourforbusiness/corporate-brand-logo
```

## Usage

The component consumes two props and inherits text color:
- icon (boolean) - changes from logo to icon  
- width (number)

The default width is 275px.

### Logo 
<!-- prettier-ignore -->
```jsx
import Logo from '@fourforbusiness/corporate-brand-logo'

<Logo />

<Logo width={320} />
```
### Icon 
<!-- prettier-ignore -->
```jsx
import Logo from '@fourforbusiness/corporate-brand-logo'

<Logo icon />
```

## License

[MIT][]

[mit]: ./LICENSE.md

The logo, icon and corporate brand name itself is protected by copyright laws.
