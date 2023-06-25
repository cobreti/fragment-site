import { FragmentElement } from "./fragment-element";

export class FragmentCode extends FragmentElement {

    private _srcFilename : string | null = null;
    private _srcContent : string | null = null;
    private _ready: Promise<void>;
    private _ready_resolve: (() => void) | null = null;
    private _ready_reject: ((reason: any) => void) | null = null;
    private _name: string | null = null;

    constructor() {
        super();
        console.log('fragment-code constructor');

        this._ready = new Promise<void>((resolve, reject) => {
            this._ready_resolve = resolve;
            this._ready_reject = reject;
        });
    }

    get ready(): Promise<void> {
        return this._ready;
    }

    connectedCallback() {
        console.log('FragmentCode connected');

        this._name = this.getAttribute('name');
        if (!this._name) {
            this._name = crypto.randomUUID();
        }

        this.attachShadow({mode: 'open'});
    }

    disconnectedCallback() {

    }

    attributeChangedCallback(name: string, oldValue: any, newValue: any) {

    }

    adoptedCallback() {

    }

    async onFragmentInit(): Promise<void> {
        try {
            console.log('fragment code init');

            const entryPointAttr = this.getAttribute('entrypoint');
            const srcAttr = this.getAttribute('src');
            if (srcAttr) {
                console.log(`loading : ${srcAttr}`)
                await this.loadFile(srcAttr);

                if (entryPointAttr) {
                    console.log('executing entrypoint');
                    await this.executeEntryPoint(entryPointAttr);
                }
            }
        }
        catch (err) {
            console.error(`fragment code init failure : `, err);
        }
    }


    async loadFile(uri: string): Promise<void> {

        return new Promise( (resolve, reject) => {
            let scriptElem = document.createElement('script');

            scriptElem.setAttribute('src', uri);
            scriptElem.setAttribute('type', 'text/javascript');
            scriptElem.setAttribute('async', '');

            document.body.appendChild(scriptElem);

            scriptElem.addEventListener('load', () => {
                console.log(`script content for ${uri} loaded`);
                resolve();
            });

            scriptElem.addEventListener('error', (ev) => {
                console.log(`error loading script ${uri}`, ev);
                reject(`failure to load script ${uri}`);
            });
        });
    }

    async executeEntryPoint(entryPoint: string) {
        const completedHandlerName: string = `FRAGCODE_EP_${this._name}`;

        console.log(`completion function name : ${completedHandlerName}`);

        const completionHandler = () => {
            console.log('completion handler called');
            if (this._ready_resolve) {
                this._ready_resolve();
            }
        }

        (window as any)[completedHandlerName] = completionHandler;

        const functionCode = `(async function() {
            console.log("entry point called");
            ${entryPoint}
            window["${completedHandlerName}"]()
        }())`;

        let scriptElem = document.createElement('script');

        scriptElem.setAttribute('type', 'text/javascript');
        scriptElem.setAttribute('async', '');
        scriptElem.textContent = functionCode;

        document.body.appendChild(scriptElem);
    }

}
