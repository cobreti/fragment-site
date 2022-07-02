class FragmentPortal {

    static get instance(): FragmentPortal {
        let instance = (window as any)['fragmentPortal'];
        if (instance) {
            return instance;
        }

        instance = new FragmentPortal();
        (window as any)['fragmentPortal'] = instance;

        return instance;
    }

    private constructor() {
    }
}

export { FragmentPortal }
