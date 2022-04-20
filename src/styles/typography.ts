// Typography
// ___________________________________________________________________

import { css } from 'styled-components'

// Aeonik Regular
import AeonikRegularEot from './fonts/AeonikRegular.eot'
import AeonikRegularWoff2 from './fonts/AeonikRegular.woff2'
import AeonikRegularWoff from './fonts/AeonikRegular.woff'
import AeonikRegularOtf from './fonts/AeonikRegular.otf'

// Aeonik Light
import AeonikLightEot from './fonts/AeonikLight.eot'
import AeonikLightWoff2 from './fonts/AeonikLight.woff2'
import AeonikLightWoff from './fonts/AeonikLight.woff'
import AeonikLightOtf from './fonts/AeonikLight.otf'

// Aeonik Bold
import AeonikBoldEot from './fonts/AeonikBold.eot'
import AeonikBoldWoff2 from './fonts/AeonikBold.woff2'
import AeonikBoldWoff from './fonts/AeonikBold.woff'
import AeonikBoldOtf from './fonts/AeonikBold.otf'

// Aeonik Black
import AeonikBlackEot from './fonts/AeonikBlack.eot'
import AeonikBlackWoff2 from './fonts/AeonikBlack.woff2'
import AeonikBlackWoff from './fonts/AeonikBlack.woff'
import AeonikBlackOtf from './fonts/AeonikBlack.otf'

// ___________________________________________________________________

const Typography = css`
  :root {
    // font family
    --font-primary: 'Menlo', Liberation Mono, Menlo, Courier, monospace;
    --font-mono: 'Menlo', Liberation Mono, Menlo, Courier, monospace;
    --font-sans: 'Aeonik', Helvetica, Arial, sans;

    // font size
    --text-base-size: 1rem; // body font-size
    --text-scale-ratio: 1.25; // multiplier used to generate the type scale values 👇

    // font weight
    --body-font-weight: 500;
    --heading-font-weight: 500;

    // line-height
    --body-line-height: 1.5;
    --heading-line-height: 1.25;

    // letter-spacing
    --heading-letter-spacing: 0em;
    --body-letter-spacing: 0em;

    // capital letters - used in combo with the lhCrop mixin
    --font-primary-capital-letter: 1;

    // unit - don't modify unless you want to change the typography unit (e.g., from Rem to Em units)
    --text-unit: var(--text-base-size); // if Em units → --text-unit: 1em;

    // @include breakpoint(sm) {
    //   --text-base-size: 1rem;
    // }
  }

  :root,
  * {
    // type scale
    --text-xs: calc(
      (var(--text-unit) / var(--text-scale-ratio)) / var(--text-scale-ratio)
    );
    --text-sm: calc(var(--text-xs) * var(--text-scale-ratio));
    --text-md: calc(
      var(--text-sm) * var(--text-scale-ratio) * var(--text-scale-ratio)
    );
    --text-lg: calc(var(--text-md) * var(--text-scale-ratio));
    --text-xl: calc(var(--text-lg) * var(--text-scale-ratio));
    --text-xxl: calc(var(--text-xl) * var(--text-scale-ratio));
    --text-xxxl: calc(var(--text-xxl) * var(--text-scale-ratio));
    --text-xxxxl: calc(var(--text-xxxl) * var(--text-scale-ratio));
  }

  /* Aeonik Regular */
  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikRegularEot});
    src: url(${AeonikRegularWoff2}) format('woff2'),
      url(${AeonikRegularWoff}) format('woff'),
      url(${AeonikRegularOtf}) format('opentype'),
      url(${AeonikRegularEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* Aeonik Light */
  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikLightEot});
    src: url(${AeonikLightWoff2}) format('woff2'),
      url(${AeonikLightWoff}) format('woff'),
      url(${AeonikLightOtf}) format('opentype'),
      url(${AeonikLightEot}?#iefix) format('embedded-opentype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  /* Aeonik Bold */
  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikBoldEot});
    src: url(${AeonikBoldWoff2}) format('woff2'),
      url(${AeonikBoldWoff}) format('woff'),
      url(${AeonikBoldOtf}) format('opentype'),
      url(${AeonikBoldEot}?#iefix) format('embedded-opentype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  /* Aeonik Black */
  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikBlackEot});
    src: url(${AeonikBlackWoff2}) format('woff2'),
      url(${AeonikBlackWoff}) format('woff'),
      url(${AeonikBlackOtf}) format('opentype'),
      url(${AeonikBlackEot}?#iefix) format('embedded-opentype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  ::selection {
    color: var(--color-white);
    background-color: gray;
  }

  body,
  html {
    @include fontSmooth;

    color: var(--color-text);
    font-family: var(--font-primary);
    font-size: var(--text-base-size);
    font-weight: var(--body-font-weight);
    line-height: var(--body-line-height);

    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-feature-settings: 'pnum';

    text-rendering: geometricPrecision;
    font-feature-settings: 'pnum';
    font-variant-numeric: proportional-nums;
    font-variant-ligatures: discretionary-ligatures;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: var(--color-text);
    font-family: var(--font-sans);
    font-weight: var(--heading-font-weight);
    line-height: var(--heading-line-height);
  }

  h1 {
    font-size: var(--text-xxxxl);
  }

  h2 {
    font-size: var(--text-xl);
  }

  h3 {
    font-size: var(--text-lg);
  }

  h4 {
    font-size: var(--text-md);
    font-weight: 600;
  }

  h5 {
    font-size: var(--text-base-size);
    font-weight: 700;
  }

  // --------------------------------

  // Inline Text

  // --------------------------------

  p {
    font-size: var(--text-base-size);
    line-height: var(--body-line-height);

    &:not(:last-child) {
      margin-bottom: var(--space-md);
    }
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: var(--transition-all);

    &:hover {
      color: var(--color-primary-light);
    }

    &.link {
      color: var(--color-accent);
      text-decoration: none;
      transition: var(--transition-all);

      &:hover {
        // color: var(--color-primary-light);
        text-decoration: underline;
      }
    }
  }

  small {
    font-size: var(--text-sm);
  }

  strong {
    font-weight: 700;
  }

  s {
    text-decoration: line-through;
  }

  u {
    text-decoration: underline;
  }

  mark {
    background-color: var(--color-warning-light);
    color: inherit;
  }

  .text-component {
    --line-height-multiplier: 1;
    --text-space-y-multiplier: 1;

    > * {
      // use Em units
      --text-unit: 1em;
      --space-unit: 1em;
    }

    blockquote {
      padding-left: 1em;
      border-left: 4px solid var(--color-contrast-lower);
      font-style: italic;
    }

    hr {
      background: var(--color-contrast-lower);
      height: 1px;
    }

    figcaption {
      font-size: var(--text-sm);
      color: var(--color-contrast-low);
    }
  }
`

export default Typography
