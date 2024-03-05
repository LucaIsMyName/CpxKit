# CpxKit

CpxKit is a simple JS Frameworks that let's you code Web Components out of the Box.

## `Cpx.Element`

CpxKit provides a base class to use for crearting Web Components. `Cpx.Element` provides several methods and eventListeners out of the Box.

## `Cpx.Components`

Based on the `Cpx.Element` class, CpxKit comes with a set of predefined headless Webs Components. They provide the functionality but are styele agnostic and easily adaptablle to your needs.

## Cpx Utilities

Cpx comes with a set of utility functions and helpers for sanitizing (eg. `Cpx.Sanitize.html('<body>')`), get User Parameters, or Store Data into local Storage, ...

Utilities:
- `Cpx.Geo`
- `Cpx.Http.fetch()`
- `Cpx.Http.xhr()`
- `Cpx.Http.get()`
- `...`

## Folders Structur

CpxKit follows the following folder conventions:
- `./app/*`: Root Folder for the JS App
- `./app/components/*`: All Re-Usable Web Components
- `./app/components/MyComponent/MyComponents.ts`: Each Component get's a folder and a file in it with the same name
- `./app/pages/*`: All Routes and Pages as Web Components
- `./app/pages/home.ts`: This is where the Components are set to the layout of the Website, pages are also exported WebComponents
- `./app/cpx/`: Cpx Module
- `./db/*`: Mock DB Objects, insert as DB requires or use JSON placeholder to fetch Mock-Data
- `./css/*`: Global Sass Stylesheets

It's recommended to fololwo this convention but not required. (No control flow for Folder Structure)

## Styling

Cpx is style agnotic, it comes with parcel so SASS can be used globally.
CpxKit comes with a `./css` folder and a `normalize.scss` and `config.scss` file and has an example `.scss` file inside a component