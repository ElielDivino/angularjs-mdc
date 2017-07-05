# angularjs-mdc
AngularJS wrapper for [Material Design Components Web](https://material.io/components/web/)

## Rationale

[angular-material](https://material.angularjs.org/latest/), one of the most popular AngularJS extension packages,
is a large package with bad performance on many browsers (notably, IE11). Besides this, there are no UX designers
from the Material Design team assuring that it is consistent with the Material Design spec.

[Material Design Components Web](https://material.io/components/web/) (the successor to Material Design Lite) is 
maintained in tandem by Google engineers & designers, provides a much smaller deliverable, and performs better
and more consistently across all modern browsers.

This package aims to wrap core MDC functionality in AngularJS components with the primary goal of
being an easy and suitable replacement for angular-material.


## Building

### Setup
`npm install`

### Commands Available
- `npm run build` - build a development version in `build/`
- `npm run serve` - build a development version to memory, demos available at `localhost:8080`
- `npm run build:min` - build a production-ready version in `dist/`


## Coverage

| Component       | Status              | Module     |
| --------------- | ------------------- | ---------- |
| button          | :white_check_mark:  | mdc.button |
| card            | :x:                 | |
| checkbox        | :x:                 | |
| dialog          | :x:                 | |
| drawer          | :x:                 | |
| elevation       | :x:                 | |
| fab             | :x:                 | |
| form-field      | :x:                 | |
| grid-list       | :x:                 | |
| icon-toggle     | :x:                 | |
| linear-progress | :x:                 | |
| list            | :x:                 | |
| menu            | :x:                 | |
| radio           | :x:                 | |
| ripple          | :x:                 | |
| select          | :x:                 | |
| slider          | :x:                 | |
| snackbar        | :x:                 | |
| switch          | :x:                 | |
| tabs            | :x:                 | |
| textfield       | :x:                 | |
| theme           | :x:                 | |
| toolbar         | :x:                 | |
| typography      | :x:                 | |
