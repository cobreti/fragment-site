import { FragmentElement } from './fragment-element';
import { FragmentPortal } from './fragment-portal';
import { FragmentClient } from './fragment-client'
import { FragmentGroup } from './fragment-group';
import { FragmentRoot } from './fragment-root';
import { FragmentFrame } from './fragment-frame';


customElements.define('nyx-fragment', FragmentFrame);
customElements.define('nyx-fragment-group', FragmentGroup);
customElements.define('nyx-fragment-root', FragmentRoot);



export {
    FragmentElement,
    FragmentPortal,
    FragmentClient,
    FragmentGroup,
    FragmentRoot,
    FragmentFrame
}

