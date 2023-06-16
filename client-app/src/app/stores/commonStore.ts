import { ServerError } from '../models/ServerError'
import { makeAutoObservable } from 'mobx';

export default class commonStore {
    error: ServerError | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setServerError(error: ServerError) {
        this.error = error;
    }


}
