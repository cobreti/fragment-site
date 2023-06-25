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

    async onFragmentInit(): Promise<void> {
        console.log('fragment group init');

        let fragmentCodePromises = [];

        for(let child of this.childrenFragmentElementIterator()) {
            if (child instanceof FragmentCode) {
                console.log('fragment code found');

                fragmentCodePromises.push(child.ready);

                child.onFragmentInit();
            }
        }

        if (fragmentCodePromises.length > 0) {
            console.log('fragment code element found : waiting for them to complete');

            await Promise.all(fragmentCodePromises);

            console.log('all fragment code element ready');
        }

        // super.onFragmentInit();
    }
}

