package server

import br.ufscar.dc.dsw.Cliente
import br.ufscar.dc.dsw.Locadora
import br.ufscar.dc.dsw.Locacao

class BootStrap {

    def init = { servletContext ->
    
        Locadora locadora = new Locadora(cnpj: '2222222222222', nome: 'Locadora1')
        locadora.save()
    
        Cliente cliente = new Cliente (cpf: '11111111111', nome: 'Cliente1')
        cliente.save()
        
        Locacao locacao = new Locacao (data: '11/11/1111', hora: '09:00', cliente: cliente, locadora: locadora)
        locacao.save()

     

        if (cliente.hasErrors()) {
            println "Cadastro de Cliente com erros"
            println cliente.errors
        } else {
            println "Cliente criado com sucesso"
        }
		
        println " "

        if (locadora.hasErrors()) {
            println "Cadastro de Locadora com erros"
            println locadora.errors
        } else {
            println "Locadora criado com sucesso"
        }
		
        println " "

        if (locacao.hasErrors()) {
            println "Cadastro de Locacao com erros"
            println locacao.errors
        } else {
            println "Locacao criado com sucesso"
        }
		
        println " "
    }
    def destroy = {
    }
}
