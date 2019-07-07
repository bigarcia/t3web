## Projeto 3 da disciplina Desenvolvimento de Software para Web - 2019.1

# Desenvolvedoras:
- Bianca Martins
- Gabrieli Santos
- Giulia Mazzuti 
- Isadora Gallerani

# Instruções para Compilar o Sistema:
- cd client; $ ng serve
- cd server; $grails run-app
- Usuário padrão (admin) -> user: admin, password: admin

# Especificações do Sistema para Locação de Bicicletas:
- O sistema deve possuir um cadastro de clientes, com os seguintes dados: e-mail,
senha, CPF, nome, telefone, sexo e data de nascimento.
- O sistema deve possuir um cadastro de locadoras, com os seguintes dados: email, senha, CNPJ, nome e cidade.
- O sistema deve possuir um cadastro de locações, com os seguintes dados:
cliente, locadora e dia/horário da locação. Assume-se que a duração da locação é de 1 hora e sempre inicia-se em “hora cheia” (13h 00min etc).

# Requisitos do Sistema:
- R1: CRUD de clientes (requer login de administrador).
- R2: CRUD de locadoras (requer login de administrador).
- R3: Listagem de todos as locadoras em uma única página (não requer login).
- R4: Listagem de todos as locadoras por cidade (não requer login). Para tal, deve-se digitar o nome da cidade ou escolher a cidade a partir de uma lista.
- R5: Locação de uma bicicleta em uma locadora (requer login do cliente via e-mail + senha). Depois de fazer login, o cliente pode cadastrar uma locação. Para isso, deve escolher uma locadora (a partir de uma lista), um dia/horário, e deve ser gravado a locação na base de dados.
- R6: Listagem de todas as locações de um cliente (requer login do cliente via e-mail + senha). Depois de fazer login, o cliente pode visualizar todas as suas locações gravadas. 
- R7: O sistema não deve permitir o cadastro de locações de um mesmo cliente ou de um mesma locadora em um mesmo dia/horário.
- R8: Listagem de todas as locações de uma locadora (requer login da locadora via e-mail + senha). Depois de fazer login, a locadora pode visualizar todas as suas locações gravadas.
