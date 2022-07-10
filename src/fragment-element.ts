import { FragmentInfo } from "fragment-info";
import { FragmentWindow } from "fragment-window";
import { v4 as uuidv4 } from "uuid";
import { FragmentPortal } from "./fragment-portal";


export class FragmentElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const nameAttr = this.getAttribute('name');

        const iframe = document.createElement('iframe');
        iframe.onload = () => {
            let fragmentPortal = FragmentPortal.instance;
            if (iframe.contentWindow) {
                let window = iframe.contentWindow as FragmentWindow;
                let fragmentInfo: FragmentInfo = {
                    portal: fragmentPortal,
                    id: uuidv4()
                }
                window.fragmentInfo = fragmentInfo;
                window.postMessage('ready');
            }
        }

        const srcAttr = this.getAttribute('src');
        if (srcAttr) {
            iframe.setAttribute('src', srcAttr);
        }

        const classesAttr = this.getAttribute('class');
        if (classesAttr) {
            iframe.setAttribute('class', classesAttr);
        }

        // let fragmentPortal = FragmentPortal.instance;
        // (iframe.contentWindow as any)['fragmentPortal'] = fragmentPortal;

        const provider = this.getAttribute('provider');
        if (provider) {
            const obj = (window as any)[provider];
            console.log(provider);
        }

        // let p = document.createElement('p')
        this.appendChild(iframe);
        // this.appendChild(p);
    }

    disconnectedCallback() {

    }

    attributeChangedCallback(name: string, oldValue: any, newValue: any) {

    }

    adoptedCallback() {

    }
}


customElements.define('nyx-fragment', FragmentElement);


// export { FragmentElement }
