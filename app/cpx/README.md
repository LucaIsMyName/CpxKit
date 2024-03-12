# ./app/cpx

Welcome to your custom web components library/framework! This README provides an overview of the features and utilities included in this library, along with instructions on how to use them.

This web components library/framework is designed to provide a flexible and customizable solution for building web applications using modern web standards. It includes a base component class that extends HTMLElement and offers additional features such as state management, storage management, and event handling. Additionally, it provides utility functions/APIs for common tasks like HTTP requests, geolocation, clipboard operations, and more.

## Installation
To use this library/framework in your project, you can install it via npm:
`npm install your-web-components-library`

## Usage
To use the components and utilities provided by this library, you can import them into your project as needed. For example:

```ts
// Import Cpx
import { Cpx } from 'Cpx';

// Create a class
class MyComponent extends Cpx.Element {
    /**
     * TypeScript if needed 
     * */
    attribute: string;

    constructor() {
        super();
        // Set an attribute automatically to every instance of the comonent
        this.setAttribute('class', 'my-class')
        // Grab an Attribute
        this.attribute = this.getAttribute('data-my-attribute')
    }
    //  Call the render() function from Cpx.Element
    render() {
        // Print out the attribute
        this.innerHTML = `
        <p>${this.attribute}</p>
        `
    }
}

customElements.define(`my-components`, MyComponent);

```

### javascript

`import { Cpx } from 'cpx';`

Then, you can extend the CpxElement class to create custom components, and utilize the utility functions/APIs as required.

## Features

### `Cpx.Element`

`Cpx.Element` serves as the base component for all custom elements in your application. It provides the following features:

- Automatic generation of unique component IDs
- Storage of initial content and state
- Methods for setting initial state, adding event handlers, and rendering components
- Integration with state management and storage utilities via `this.state` and `this.storage`

## State

State is handled via URL Search Params. Cpx provides `Cpx.State` as a functionset and route Handler.

```ts
// Import Cpx
import { Cpx } from 'Cpx';

// Create a class
class MyComponent extends Cpx.Element {
    /**
     * TypeScript if needed 
     * */
    attribute: string;

    constructor() {
        super();
        // Set an attribute automatically to every instance of the comonent
        this.setAttribute('class', 'my-class')
        // Grab an Attribute
        this.attribute = this.getAttribute('data-my-attribute');
        // Get the color theme from the URL and make it available to the element when rendering
        this.colorTheme = this.state.get('theme') === 'dark' : 'light';
    }
    //  Call the render() function from Cpx.Element
    render() {
        // Print out the attribute
        this.innerHTML = `
        <p class="color-theme-${this.colorTheme}">${this.attribute}</p>
        `
    }
}


#### Changing State

```ts
// Import Cpx
import { Cpx } from 'Cpx';

// Create a class
class MyComponent extends Cpx.Element {
    /**
     * TypeScript if needed 
     * */
    attribute: string;

    constructor() {
        super();
        // Set an attribute automatically to every instance of the comonent
        this.setAttribute('class', 'my-class')
        // Grab an Attribute
        this.attribute = this.getAttribute('data-my-attribute');
        // Get the color theme from the URL and make it available to the element when rendering
        this.colorTheme = this.state.get('theme') === 'dark' : 'light';
    }

    connectedCallback() {
        this.render();
        this.myEventListener();
    }

    myEventListener() {
        const colorToggle = this.querySelector('[data-toggle="color-scheme"]');
        colorToggle.foreach(el, () => {
            el.addEventlistener('click', () => {
                this.state.set(
                    'theme', 
                    this.state.get('theme') === 'light' ? 'dark' : 'light'
                );
                this.render();
            })
        })
    }
    //  Call the render() function from Cpx.Element
    render() {
        // Print out the attribute
        this.innerHTML = `
        <p class="color-theme-${this.colorTheme}">${this.attribute}</p>
        <button data-toggle="color-scheme">Change Color Scheme</button>
        `
    }
}




### `Cpx.Components`

Cpx comes with a set of pre-made mostly headles or easy styleable web components.

### `<accordion-group></accordion-group>`
### `<accordion-group-item></accordion-group-item>`
### `<avatar-element></avatar-element>`
### `<avatar-list></avatar-list>`
### `<badge-element></badge-element>`
### `<code-block></code-block>`
### `<dropdown-container></dropdown-container>`
### `<dropdown-item></dropdown-item>`
### `<dropdown-trigger></dropdown-trigger>`
### `<icon-element></icon-element>`
### `<parse-markdown></parse-markdown>`
### `<progress-element></progress-element>`
### `<picture-element></picture-element>`
### `<render-element></render-element>`
### `<skeleton-element></skeleton-element>`
### `<slider-container></slider-container>`
### `<slider-item></slider-item>`
### `<tab-container></tab-container>`
### `<tab-content></tab-content>`
### `<tab-header></tab-header>`
### `<tab-toggle></tab-toggle>`
### `<slider-item></slider-item>`
### `<tool-tip></tool-tip>`
### `<video-player></video-player>`
### `<video-playlist></video-playlist>`
### `<video-playlist-item></video-playlist-item>`
### `<video-controls></video-controls>`
### `<video-current></video-current>`

### `Cpx.Element`
- State Management: Allows you to manage state using State.get, State.set, State.has, and State.hasNot.
- Storage Management: Provides methods for accessing browser local storage and session storage with Storage.get, Storage.set, Storage.has, and Storage.hasNot.
- HTTP Requests: Offers functionality for making HTTP requests using methods like Http.fetch, Http.post, Http.get, Http.delete, and Http.patch.
- Geolocation: Provides utilities for translating coordinates to location and vice versa.
- Clipboard Operations: Enables copying content to the clipboard or to a DOM element.
- Media Players: Includes APIs for HTML video and audio playback.

## Examples
For examples on how to use the components and utilities provided by this library/framework, please refer to the examples directory in this repository.

## Contributing
Contributions to this project are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request on GitHub.

## License
This library/framework is licensed under the MIT License.