import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor} from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Vitor", 10000, 100000215544);
diretor.cadastrarSenha("122703");

const gerente = new Gerente("Matheus", 5000, 132165415455);
gerente.cadastrarSenha("122702")

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "122702");
const cliente = new Cliente ("Lais", 1541654654, "45454");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "122703")

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "45454");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);