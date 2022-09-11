import { FragmentElement } from './fragment-element';
import { FragmentGroup } from './fragment-group';

export class FragmentRoot extends FragmentElement {

    constructor() {
        super();

    }

    connectedCallback() {
        console.log('FragmentRoot connected');

        this.attachShadow({mode: 'open'});

        if (document.readyState !== 'loading') {
            console.log('document already loaded');
            this.onFragmentInit();
        }
        else {
            console.log('document loading');

            document.addEventListener('DOMContentLoaded', () => {
                this.onFragmentInit();
            })
        }

    }

    disconnectedCallback() {

    }

    attributeChangedCallback() {

    }

    adoptedCallback() {

    }

    onFragmentInit() {
        console.log('fragmentRoot init');
        super.onFragmentInit();
    }
}