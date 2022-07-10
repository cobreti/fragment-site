import { FragmentWindow, getFragmentWindow } from "./fragment-window";

export class FragmentClient {

    constructor() {
        console.log('FragmentClient constructor');
        let window = getFragmentWindow();
    }

    private initFromWindow(window: FragmentWindow) {
        if (window.fragmentInfo) {
            debugger;
        }
        else {
            window.addEventListener('onmessage', this.onWindowMessage.bind(this));
        }
    }

    private onWindowMessage(message: any) {
        let window = getFragmentWindow();

        if (window.fragmentInfo) {
            window.removeEventListener('onmessage', this.onWindowMessage.bind(this));
            debugger;
        }
    }
}
