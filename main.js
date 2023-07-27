const Cargo = function(name, titulo) {
    this.name = name;
    this.titulo = titulo;
    this.apresentacao = function() {
        console.log(`Olá, meu nome é ${this.name} e sou o ${this.titulo}.`)
    }
}

const funcionario = new Cargo('Jose', 'gerente');
funcionario.name;
funcionario.titulo;
funcionario.apresentacao();