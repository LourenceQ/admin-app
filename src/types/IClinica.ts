export default interface IClinica {
    email: string,
    nome: string,
    senha: string,
    endereco: {
        cep: string,
        rua: string,
        numero: string,
        complemento: string,
        estado: string
    }
}
