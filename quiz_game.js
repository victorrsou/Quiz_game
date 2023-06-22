class quiz {
    constructor(pergunta, alternativa, resposta) {
        this.pergunta = pergunta;
        this.alternativa = alternativa;
        this.resposta = resposta;
    }
}

// VARIÁVEIS
var resposta_inserida = ""
var resposta_correta = 0
var perguntas_cadastradas = []
var qtd_acertos = 0
var qtd_pontos = 0

// OBJETOS CRIADOS A PARTIR DA CLASSE
var quiz1 = new quiz("De quem é a famosa frase 'Penso, logo existo'?", ["Platão", "Galileu Galilei", "Descartes", "Sócrates", "Francis Bacon"], "Descartes")
var quiz2 = new quiz("De onde é a invenção do chuveiro elétrico?", ["França", "Inglaterra", "Austrália", "Brasil", "Itália"], "Brasil")
var quiz3 = new quiz("Qual o nome do presidente do Brasil que ficou conhecido como Jango?", ["Jânio Quadros", "Jacinto Anjos", "Getúlio Vargas", "João Figueiredo", "João Goulart"], "João Goulart")
var quiz4 = new quiz("Qual o grupo em que todas as palavras foram escritas corretamente?", ["Asterístico, beneficiente, meteorologia, entertido", "Asterisco, beneficente, meteorologia, entretido", "Asterisco, beneficente, metereologia, entretido", "Asterístico, beneficiente, metereologia, entretido", "Asterisco, beneficiente, metereologia, entretido"], "Asterisco, beneficente, meteorologia, entretido")
var quiz5 = new quiz("Qual o livro mais vendido no mundo a seguir à Bíblia?", ["O Senhor dos Anéis", "Dom Quixote", "O Pequeno Príncipe", "Ela, a Feiticeira", "Um Conto de Duas Cidades"], "Dom Quixote")
var quiz6 = new quiz("Atualmente, quantos elementos químicos a tabela periódica possui?", ["113", "109", "108", "118", "92"], "118")
var quiz7 = new quiz("Quais as duas datas que são comemoradas em novembro?", ["Proclamação da República e Dia Nacional da Consciência Negra", "Independência do Brasil e Dia da Bandeira", "Dia do Médico e Dia de São Lucas", "Dia de Finados e Dia Nacional do Livro", "Black Friday e Dia da Árvore"], "Proclamação da República e Dia Nacional da Consciência Negra")
var quiz8 = new quiz("As pessoas de qual tipo sanguíneo são consideradas doadores universais?", ["Tipo A", "Tipo B", "Tipo O", "Tipo AB", "Tipo ABO"], "Tipo O")
var quiz9 = new quiz("Jim Morrison era vocalista de que grupo?", ["The Police", "The Doors", "Pink Floyd", "Nirvana", "AC/DC"], "The Doors")
var quiz10 = new quiz("As obras Abaporu, Operários e Antropofagia foram pintadas por qual artista brasileiro?", ["Tarsila do Amaral", "Di Cavalcanti", "Anita Malfatti", "Candido Potinari", "Romero Britto"], "Tarsila do Amaral")

perguntas_cadastradas.push(quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7, quiz8, quiz9, quiz10)
contador_perguntas = perguntas_cadastradas.length

pergunta_escrita = document.getElementById("question-js")
pergunta_escrita.innerHTML = perguntas_cadastradas[0].pergunta

alternativa_a = document.getElementById("alternativa_a")
alternativa_b = document.getElementById("alternativa_b")
alternativa_c = document.getElementById("alternativa_c")
alternativa_d = document.getElementById("alternativa_d")
alternativa_e = document.getElementById("alternativa_e")

alternativa_a.innerHTML = perguntas_cadastradas[0].alternativa[0]
alternativa_b.innerHTML = perguntas_cadastradas[0].alternativa[1]
alternativa_c.innerHTML = perguntas_cadastradas[0].alternativa[2]
alternativa_d.innerHTML = perguntas_cadastradas[0].alternativa[3]
alternativa_e.innerHTML = perguntas_cadastradas[0].alternativa[4]






// for (cont = 0; (cont < contador_perguntas); cont++) {
//     console.log(`${perguntas_cadastradas[cont].pergunta} \n a) ${perguntas_cadastradas[cont].alternativa[0]} \n b) ${perguntas_cadastradas[cont].alternativa[1]} \n c) ${perguntas_cadastradas[cont].alternativa[2]} \n d) ${perguntas_cadastradas[cont].alternativa[3]} \n e) ${perguntas_cadastradas[cont].alternativa[4]}`)
//     while(true) {
//         resposta_inserida = prompt("Digite a letra da alternativa correta: ")
//         resposta_inserida = resposta_inserida.toLowerCase()
//         if (resposta_inserida == "a" || resposta_inserida == "b" || resposta_inserida == "c" || resposta_inserida == "d" || resposta_inserida == "e") {
//             break;
//         }
//         console.log("Opção inválida. Digite somente 'A', 'B', 'C', 'D' ou 'E'")
//     }
//     for (i = 0; i < (perguntas_cadastradas[cont].alternativa.length); i++) {
//         if (perguntas_cadastradas[cont].alternativa[i] == perguntas_cadastradas[cont].resposta)
//             resposta_correta = perguntas_cadastradas[cont].alternativa[i]
//     }

//     switch (resposta_inserida) {
//         case "a":
//             if (perguntas_cadastradas[cont].alternativa[0] == resposta_correta) {
//                 console.log("Parabéns, você acertou!")
//                 qtd_acertos++
//                 qtd_pontos += 10
//             } else {
//                 console.log("Você errou.")
//             }
//             break
//         case "b":
//             if (perguntas_cadastradas[cont].alternativa[1] == resposta_correta) {
//                 console.log("Parabéns, você acertou!")
//                 qtd_acertos++
//                 qtd_pontos += 10
//             } else {
//                 console.log("Você errou.")
//             }
//             break
//         case "c":
//             if (perguntas_cadastradas[cont].alternativa[2] == resposta_correta) {
//                 console.log("Parabéns, você acertou!")
//                 qtd_acertos++
//                 qtd_pontos += 10
//             } else {
//                 console.log("Você errou.")
//             }
//             break
//         case "d":
//             if (perguntas_cadastradas[cont].alternativa[3] == resposta_correta) {
//                 console.log("Parabéns, você acertou!")
//                 qtd_acertos++
//                 qtd_pontos += 10
//             } else {
//                 console.log("Você errou.")
//             }
//             break
//         case "e":
//             if (perguntas_cadastradas[cont].alternativa[4] == resposta_correta) {
//                 console.log("Parabéns, você acertou!")
//                 qtd_acertos++
//                 qtd_pontos += 10
//             } else {
//                 console.log("Você errou.")
//             }
//             break
//     }
// }

// console.log(`Parabéns! você acertou ${qtd_acertos} questões, totalizando ${qtd_pontos} pontos. Até a próxima.`)