import { FragmentElement } from "./fragment-element";

export class FragmentGroup extends FragmentElement {
    constructor() {
        super();

    }

    connectedCallback() {
        console.log('FragmentGroup connected');

        this.addEventListener('fragment-init', (ev) => {
            console.log('fragment-init');
        });
    }

    disconnectedCallback() {

    }

    attributeChangedCallback() {

    }

    adoptedCallback() {

    }

    onFragmentInit() {
        super.onFragmentInit();
    }
}

