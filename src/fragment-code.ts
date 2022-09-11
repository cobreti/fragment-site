import { FragmentElement } from "./fragment-element";

export class FragmentCode extends FragmentElement {

    // private _srcFilename : string | null = null;
    // private _srcContent : string | null = null;
    // private _ready: Promise<void>;
    // private _ready_resolve: (() => void) | null = null;
    // private _ready_reject: ((reason: any) => void) | null = null;

    constructor() {
        super();
        console.log('fragment-code constructor');

        // this._ready = new Promise<void>((resolve, reject) => {
        //     this._ready_resolve = resolve;
        //     this._ready_reject = reject;
        // });
    }

    // get codeLoaded(): Promise<void> { return this._ready; }

    connectedCallback() {
        console.log('FragmentCode connected');
        this.attachShadow({mode: 'open'});


        // const srcFile = this.getAttribute('src');
        // if (srcFile) {
        //     this.loadFile(srcFile);
        // }
    }

    disconnectedCallback() {

    }

    attributeChangedCallback(name: string, oldValue: any, newValue: any) {

    }

    adoptedCallback() {

    }

    onFragmentInit(): void {
        console.log('fragment code init');
    }


    // loadFile(uri: string) {
    //     fetch('test.js')
    //         .then((response) => {
    //             return response.text();
    //         })
    //         .then((text) => {
    //             this._srcFilename = uri;
    //             this._srcContent = text;
    //             if (this._ready_resolve) {
    //                 this._ready_resolve();
    //             }
    //             console.log(text);
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //             if (this._ready_reject) {
    //                 this._ready_reject(err);
    //             }
    //         });
    // }

}
