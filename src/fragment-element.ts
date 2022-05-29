class FragmentElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const nameAttr = this.getAttribute('name');

        const iframe = document.createElement('iframe');
        iframe.onload = () => {
            console.log('iframe loaded');
        }

        const srcAttr = this.getAttribute('src');
        if (srcAttr) {
            iframe.setAttribute('src', srcAttr);
        }

        const classesAttr = this.getAttribute('class');
        if (classesAttr) {
            iframe.setAttribute('class', classesAttr);
        }

        let p = document.createElement('p');
        this.appendChild(iframe);
        this.appendChild(p);
    }

    disconnectedCallback() {

    }

    attributeChangedCallback(name: string, oldValue: any, newValue: any) {

    }

    adoptedCallback() {

    }
}


customElements.define('nyx-fragment', FragmentElement);
