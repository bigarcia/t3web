package server

import br.ufscar.dc.dsw.Cliente
import br.ufscar.dc.dsw.Locadora

class BootStrap {

    def init = { servletContext ->
    
        Locadora locadora = new Locadora(cnpj: '2222222222222', nome: 'Locadora1')
        locadora.save()
    
        Cliente cliente = new Cliente (cpf: '11111111111', nome: 'Cliente1')
        cliente.save()

     

        if (cliente.hasErrors()) {
            println "Cadastro de Cliente1 com erros"
            println cliente.errors
        } else {
            println "Cliente criado com sucesso"
        }
		
        println " "
    }
    def destroy = {
    }
}
