import { observable } from 'mobx';

class ObservableAuthStore {
    @observable email = '';
    @observable password = '';

    onEmailChanged(text) {
        this.email = text;
    }

    onPasswordChanged(text) {
        this.password = text;
    }
}

const observableAuthStore = new ObservableAuthStore();
export default observableAuthStore;
