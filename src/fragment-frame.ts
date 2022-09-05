import { FragmentElement } from "./fragment-element";
import { FragmentInfo } from "./fragment-info";
import { FragmentWindow } from "./fragment-window";
import { FragmentPortal } from "./fragment-portal";
import { v4 as uuidv4 } from "uuid";

export class FragmentFrame extends FragmentElement {

    constructor() {
        super();
    }

    connectedCallback() {
        console.log('FragmentElement connected');
    }

    disconnectedCallback() {

    }

    attributeChangedCallback(name: string, oldValue: any, newValue: any) {

    }

    adoptedCallback() {

    }
    
    onFragmentInit() {
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

        const provider = this.getAttribute('provider');
        if (provider) {
            const obj = (window as any)[provider];
            console.log(provider);
        }

        this.appendChild(iframe);
    }

}
