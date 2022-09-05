export class FragmentElement extends HTMLElement {
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


    *childrenFragmentElementIterator() {
        let notOfTypeElm : Element[] = [this];

        while (notOfTypeElm.length > 0) {
            const elm = notOfTypeElm.shift();
            if (elm) {
                const children = elm.children;
                for (let idx = 0; idx < children.length; ++idx) {
                    let child = children[idx];

                    if (child instanceof FragmentElement) {
                        yield child as FragmentElement;
                    }
                    else {
                        notOfTypeElm.push(child);
                    }
                }
            }
        }
    }


    onFragmentInit() {
    }

}
