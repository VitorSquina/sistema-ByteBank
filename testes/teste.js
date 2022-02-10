class Aluno {
    nome;
    idade;
}

let notaMedia = 0;

class NotasAluno {
    matematica;
    portugues;
    historia;
 
    somar(nota1, nota2, nota3){
        let notas = [nota1, nota2, nota3]
        console.log(notas)
        let i = 0;

        notaMedia += notas[i];
        console.log(notaMedia);
        i += 1;

        notaMedia += notas[i];
        console.log(notaMedia);
        i += 1;

        notaMedia += notas[i];
        console.log(notaMedia);
        
        return notaMedia ;
    }
}

const aluno1 = new Aluno();
aluno1.nome = "vitor";
aluno1.idade = 17;


const NotasAlunoVitor = new NotasAluno()
NotasAlunoVitor.portugues = 9;
NotasAlunoVitor.matematica = 8;
NotasAlunoVitor.historia = 10;


NotasAlunoVitor.somar(NotasAlunoVitor.portugues,NotasAlunoVitor.matematica,NotasAlunoVitor.historia);


console.log(aluno1);
console.log(NotasAlunoVitor);
console.log("A media do aluno" , aluno1.nome, "é", notaMedia / 3)

let lista = [-5 , -10, -310, -10, 10];
let soma = 0;


function analizar(lista) {
    for(x = 0; x < lista.length; x ++){
        if (lista[x] < 0){
            lista.splice(x, lista.length + 2);
            soma += 0;
            return;
        }
        else {
        soma += lista[x];
        if (x == lista.length){
            return soma ;
        }
    }
    }   
}
analizar(lista)
console.log(lista.splice(1));
