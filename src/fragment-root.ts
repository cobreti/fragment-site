import { FragmentElement } from './fragment-element';
import { FragmentGroup } from './fragment-group';

export class FragmentRoot extends FragmentElement {

    constructor() {
        super();

    }

    connectedCallback() {
        console.log('FragmentRoot connected');

        this.onFragmentInit();
    }

    disconnectedCallback() {

    }

    attributeChangedCallback() {

    }

    adoptedCallback() {

    }

    onFragmentInit() {
        for (let elm of this.childrenFragmentElementIterator()) {
            console.log(elm);
            elm.onFragmentInit();
        }
    }
}