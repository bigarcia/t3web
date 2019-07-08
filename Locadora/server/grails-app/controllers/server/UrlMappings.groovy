package server

class UrlMappings {
    static mappings = {
        "/locacoes"(resources:"locacao")
        "/locadoras"(resources:"locadora")
        "/clientes"(resources:"cliente")
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}