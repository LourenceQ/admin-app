import { makeObservable, observable } from "mobx";

interface IUsuario {
    email: string,
    token: string
}

class AutenticaStore {
    estadoAutenticado = false;
    usuario: IUsuario = {email: "", token: ""};

    constructor() {
        makeObservable(this, {
            estadoAutenticado: observable,
            usuario: observable
        })
    }
}

const autentitcaStore = new AutenticaStore();

export default AutenticaStore;