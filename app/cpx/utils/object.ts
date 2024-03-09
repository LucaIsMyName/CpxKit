interface Object {
  create: (elementType: string) => any;
  insert: (element: any, parent?: any) => void;
  remove: (element: any, parent: any) => void;
  Add: {
    attribute: (element: any, attribute: string, value: string) => void;
    id: (element: any, id: string) => void;
    class: (element: any, className: string) => void;
  };
  Delete: {
    attribute: (element: any, attribute: string) => void;
    id: (element: any) => void;
    class: (element: any, className: string) => void;
  };
}

export const Object = {
  /**
   * @name create
   * @param elementType
   * @returns {HTMLElement}
   * @description Create a new element
   * @example
   * const newElement = Object.create("div");
   */
  create: (elementType: string = "div") => {
    return document.createElement(elementType);
  },
  /**
   * @name insert
   * @param element
   * @param parent
   * @description Insert an element into the DOM
   * @example
   * Object.insert(newElement, parentElement);
   */
  insert: (element: any, parent: any = document.querySelector("body")) => {
    parent.appendChild(element);
  },
  /**
   * @name remove
   * @param element
   * @param parent
   * @description Remove an element from the DOM
   * @example
   * Object.remove(newElement, parentElement);
   */
  remove: (element: any, parent: any) => {
    if (parent) {
      parent.removeChild(element);
    } else {
      element.remove();
    }
  },
  Add: {
    /**
     * @name attribute
     * @param element 
     * @param attribute 
     * @param value 
     * @description Add an attribute to an element
     * @example
     * Object.Add.attribute(newElement, "id", "new-id");
     */
    attribute: (element: any, attribute: string, value: string) => {
      element.setAttribute(attribute, value);
    },
    /**
     * @name id
     * @param element 
     * @param id
     * @description Add an id to an element
     * @example
     * Object.Add.id(newElement, "new-id"); 
     */
    id: (element: any, id: string) => {
      element.id = id;
    },
    /**
     * @name class
     * @param element 
     * @param className 
     * @description Add a class to an element
     * @example
     * Object.Add.class(newElement, "new-class");
     */
    class: (element: any, className: string) => {
      element.classList.add(className);
    },
  },
  Delete: {
    /**
     * @name attribute
     * @param element 
     * @param attribute 
     * @description Remove an attribute from an element
     * @example
     * Object.Delete.attribute(newElement, "id");
     */
    attribute: (element: any, attribute: string) => {
      element.removeAttribute(attribute);
    },
    /**
     * @name id
     * @param element 
     * @description Remove an id from an element
     * @example
     * Object.Delete.id(newElement);
     */
    id: (element: any) => {
      element.id = "";
    },
    /**
     * @name class
     * @param element 
     * @param className
     * @description Remove a class from an element
     * @example
     * Object.Delete.class(newElement, "new-class"); 
     */
    class: (element: any, className: string) => {
      element.classList.remove(className);
    },
  },
};
