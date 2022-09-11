import { FragmentCode } from "./fragment-code";
import { FragmentElement } from "./fragment-element";

export class FragmentGroup extends FragmentElement {
    constructor() {
        super();

    }

    connectedCallback() {
        console.log('FragmentGroup connected');

        this.attachShadow({mode: 'open'});

        // this.addEventListener('fragment-init', (ev) => {
        //     console.log('fragment-init');
        // });
    }

    disconnectedCallback() {

    }

    attributeChangedCallback() {

    }

    adoptedCallback() {

    }

    onFragmentInit() {
        console.log('fragment group init');

        for(let child of this.childrenFragmentElementIterator()) {
            if (child instanceof FragmentCode) {
                console.log('fragment code found');
            }
        }

        // super.onFragmentInit();
    }
}

