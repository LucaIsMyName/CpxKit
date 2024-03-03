interface Element {
    new (): HTMLElement;
}

export function define(element: string, name: Element): void {
    if (customElements.get(element) === undefined) {
        customElements.define(element, name);
    } else {
        console.error(`Element ${element} already exists`);
    }
}