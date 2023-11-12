interface AppState {
    [key: string]: any;
}
class State {
    state: AppState;

    constructor() {
        this.state = {};
    }

    get() {
        return this.state;
    }

    update(data: AppState = {}) {
        this.state = { ...this.state, ...data };
        // this.notify(this.state);
    }
}

export default State;
