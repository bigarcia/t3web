package br.ufscar.dc.dsw

import grails.rest.Resource

@Resource(uri='/clientes', readOnly = false, formats = ['json', 'xml'])
class Livro {

    static constraints = {
        cpf blank: false
        nome blank: false
        telefone nullable: true
        sexo nullable: true
        data nullable: true
    }
     
    String cpf
    String nome
    String telefone
    String sexo
    String data
}
