import { Cliente } from './cliente';
import { Locadora } from './locadora';

export class Locacao {
    id: string;
    data: string;
    hora: string;
    cliente: Cliente;
    locadora: Locadora
}
