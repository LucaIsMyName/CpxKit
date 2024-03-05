# CpxKit

CpxKit is a simple JS Frameworks that let's you code Web Components out of the Box.

## `Cpx.Element`

CpxKit provides a base class to use for crearting Web Components. `Cpx.Element` provides several methos and evemtListeners out of the Box.

## `Cpx.Components`

Based on the `Cpx.Element` class, CpxKit comes with a set of predefined headless Webs Components. They provide the functionality but are styel agnbostic and easily adaptablle to your needs.

## Cpx Utilities

CPx comes with a set of utility functions and helpers for sanitizing (eg. `Cpx.Sanitize.html('<body>')`), get User Parameters, or Store Data into local Storage.

Utilities:
- `Cpx.Geo`
- `Cpx.Http.fetch()`
- `Cpx.Http.xhr()`
- `Cpx.Http.get()`

## Folders

CpxKit follows the following folder convetions:
- `./app/*`: Root Folder for the JS App
- `./app/components/*`: All Re-Usable Web Components
- `./app/pages/*`: All Routes and Pages as Web Components
- `./app/cpx/`: Cpx Module
- `./db/*`: Mock DB Objects
- `./css/*`: Sass Stylesheets

It's recommended to fololwo this convention but not required. (No control flow for Folder Structure)

