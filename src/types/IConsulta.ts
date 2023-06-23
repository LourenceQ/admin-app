import IProfissional from "./IProfissional";

export default interface IConsulta extends IProfissional {
    id: number,
    data: string,
    horario: string,
    profissional: Array<IProfissional>,
    epecialidade: string,
    paciente: string,
    modalidade: string
}