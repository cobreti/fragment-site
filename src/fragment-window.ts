import { FragmentInfo } from "fragment-info";

export interface FragmentWindow extends Window {
    fragmentInfo: FragmentInfo | null
}

export function getFragmentWindow(): FragmentWindow {
    return (window as Window) as FragmentWindow;
}