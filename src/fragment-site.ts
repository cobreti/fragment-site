import { FragmentElement } from './fragment-element';
import { FragmentPortal } from './fragment-portal';
import { FragmentClient } from './fragment-client'
import { FragmentGroup } from './fragment-group';
import { FragmentRoot } from './fragment-root';
import { FragmentFrame } from './fragment-frame';
import { FragmentCode } from './fragment-code';



function defineCustomElement<T extends CustomElementConstructor>(name: string, obj: T): void {
    if (!customElements.get(name)) {
        customElements.define(name, obj);
    }
}


defineCustomElement('fs-fragment-code', FragmentCode);
defineCustomElement('fs-fragment', FragmentFrame);
defineCustomElement('fs-fragment-group', FragmentGroup);
defineCustomElement('fs-fragment-root', FragmentRoot);



export {
    FragmentElement,
    FragmentPortal,
    FragmentClient,
    FragmentGroup,
    FragmentRoot,
    FragmentFrame,
    FragmentCode
}

