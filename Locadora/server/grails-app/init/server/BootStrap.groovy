package server

import br.ufscar.dc.dsw.Locadora
import br.ufscar.dc.dsw.Locacao
import br.ufscar.dc.dsw.Cliente
import br.ufscar.dc.dsw.User
import br.ufscar.dc.dsw.UserRole
import br.ufscar.dc.dsw.Role

class BootStrap {
    def init = { servletContext ->
        Role admin = new Role(authority: 'ROLE_ADMIN').save()
        Role roleCliente = new Role(authority: 'ROLE_CLIENTE').save()
        Role roleLocadora = new Role(authority: 'ROLE_LOCADORA').save()
        
        User user = new User(username: "admin", password: "admin").save()
        UserRole.create(user, admin, true)
                
        Locadora locadora = new Locadora(cnpj:'123456789', nome: 'Locadora StarVideo', cidade: 'Araraquara', username: 'locadora@locadora', password:'locadora')
        locadora.save()
        UserRole.create(locadora, roleLocadora, true)   
        
        Cliente cliente = new Cliente(cpf:'12312312312', nome:'Maria Silva', telefone:'38881122', sexo:'f', data:'01/07/2019', username: 'cliente@cliente', password: 'cliente')
        cliente.save()
        UserRole.create(cliente, roleCliente, true)
        
        Locacao locacao = new Locacao (data: '05/07/2019', hora: '15h00', cliente: cliente, locadora: locadora)
        locacao.save()
        
        if (admin.hasErrors()){
            println admin.errors
        }
        if (locadora.hasErrors()) {
            println locadora.errors
        }
        if (cliente.hasErrors()) {
            println cliente.errors
        }
    }
    
    def destroy = {
    }
}