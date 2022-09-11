import { FragmentElement } from './fragment-element';
import { FragmentPortal } from './fragment-portal';
import { FragmentClient } from './fragment-client'
import { FragmentGroup } from './fragment-group';
import { FragmentRoot } from './fragment-root';
import { FragmentFrame } from './fragment-frame';
import { FragmentCode } from './fragment-code';


customElements.define('fs-fragment-code', FragmentCode);
customElements.define('fs-fragment', FragmentFrame);
customElements.define('fs-fragment-group', FragmentGroup);
customElements.define('fs-fragment-root', FragmentRoot);



export {
    FragmentElement,
    FragmentPortal,
    FragmentClient,
    FragmentGroup,
    FragmentRoot,
    FragmentFrame,
    FragmentCode
}

