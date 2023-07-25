import IConsulta from "./types/IConsulta"
import useFetch from "./useTech"

const useDadosConsulta = () => {
    return useFetch<IConsulta[]>({url: 'consultas'});
}

export default useDadosConsulta;