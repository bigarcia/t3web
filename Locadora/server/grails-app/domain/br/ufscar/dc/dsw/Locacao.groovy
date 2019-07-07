package br.ufscar.dc.dsw

import grails.rest.Resource

@Resource(uri='/locacoes', readOnly = false, formats = ['json', 'xml'])
class Locacao {

    static constraints = {
         data blank: false
         hora blank: false
         cliente nullable: false
         locadora nullable: false
    }

    String data
    String hora
    Cliente cliente
    Locadora locadora
}
