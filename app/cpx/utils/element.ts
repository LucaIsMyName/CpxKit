export function define(element: string, name: any) {
  if (customElements.get(element) === undefined) {
    customElements.define(element, name);
  } else {
    console.error(`Element ${element} already exists`);
  }
}
