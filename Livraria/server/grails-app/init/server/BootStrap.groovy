package server
import br.ufscar.dc.dsw.Cliente
import br.ufscar.dc.dsw.Locadora


class BootStrap {

    def init = { servletContext ->
    
        Locadora locadora1 = new Locadora(cnpj: '111111111', nome: 'locadora1')
        locadora1.save()
    
        Cliente clente1 = new Cliente (cpf: '11111111111', nome: 'cliente 1')
        cliente1.save()
    }
    def destroy = {
    }
}
