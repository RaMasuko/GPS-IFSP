// Definição das variáveis de seleção de curso e dia
var curso = 4;
var dia_da_semana = 1;
let origem="";
let destino="";
let turma="";


// Exibição do menu de cursos no console
console.log("Escolha seu curso: ");
console.log("\n1. Desenvolvimento de Sistemas");
console.log("\n2. Energias Renováveis");
console.log("\n3. Telecomunicações");
console.log("\n4. Mecânica");

// Estrutura de decisão para selecionar o curso
switch (curso) {
    case 1:
        // Definição do dia letivo e variáveis de rota
         dia = 4;
         origem;
         destino;

        // Estrutura de decisão para os roteiros diários do curso 1
        switch (dia) {
            case 1:
                origem = "entrada principal";
                destino = "314";
                console.log("13:15 - 14:45");
                console.log("\nPartindo da ", origem, ", siga em frente e desça para o bloco A inferior.\nEm seguida, vire à esquerda na rampa e suba até o bloco A.\nDepois, vire à direita no primeiro corredor.\nSua sala (", destino, ") estará à sua esquerda.");

                origem = destino;
                destino = "317";
                console.log("\n\n14:45 - 16:15");
                console.log("\nPartindo da ", origem, ", vire à direita no corredor.\nEm seguida, vire na primeira esquerda no corredor em frente ao caracol.\nDepois, vire à esquerda e siga em frente.\nSua sala (", destino, ") estará à sua esquerda.");

                origem = destino;
                destino = "304";
                console.log("\n\n16:30 - 18:00");
                console.log("\nPartindo da ", origem, ", vire à direita no corredor.\nEm seguida, vire à direita no corredor em frente ao caracol.\nDepois, vire à esquerda no corredor.\nSua sala (", destino, ") estará à sua direita.");
                break;

            case 2:
                origem = "entrada principal";
                destino = "214";
                console.log("13:15 - 14:45");
                console.log("\nPartindo da ", origem, ", siga em frente e desça para o bloco A inferior.\nEm seguida, vire na segunda esquerda nas escadas que ligam ao bloco C.\nDepois, suba até o final das escadas (3 lances).\nSiga em frente; sua sala (", destino, ") estará à sua esquerda.");

                origem = destino;
                destino = "215";
                console.log("\n\n14:45 - 16:15");
                console.log("\nPartindo da ", origem, ", vire à esquerda.\nSua sala (", destino, ") estará à sua esquerda.");

                origem = destino;
                destino = "322";
                console.log("\n\n16:30 - 18:00");
                console.log("\nPartindo da ", origem, ", vire à esquerda, desça um lance de escada e saia do bloco C.\nEm seguida, vire à esquerda no saguão.\nDepois, vire à esquerda e suba o caracol até o bloco A.\nApós isso, vire à esquerda no segundo corredor.\nSua sala (", destino, ") estará à sua direita.");
                break;

            case 3:
                origem = "entrada principal";
                destino = "116";
                console.log("13:15 - 15:30");
                console.log("\nPartindo da ", origem, ", siga em frente e desça para o bloco A inferior.\nEm seguida, vire na segunda esquerda nas escadas que ligam ao bloco C.\nDepois, suba um lance da escada e siga em frente.\nA sua sala (", destino, ") estará à sua esquerda.");

                origem = destino;
                destino = "133";
                console.log("\n\n15:45 - 18:00");
                console.log("\nPartindo da ", origem, ", vire à direita.\nSua sala (", destino, ") estará à sua direita.");
                break;

            case 4:
                origem = "entrada principal";
                destino = "Ginásio";
                console.log("13:15 - 14:45");
                console.log("\nPartindo da ", origem, ", vire à esquerda e siga em frente.\nEm seguida, vire à direita.\nDepois, vire à esquerda até chegar ao ", destino + ".");

                origem = destino;
                destino = "315";
                console.log("\n\n14:45 - 16:15");
                console.log("\nPartindo da ", origem, ", vire à direita.\nVire à esquerda na lateral da quadra externa.\nEm seguida, siga em frente até chegar ao caracol.\nSuba o caracol até o bloco A.\nVire à esquerda no primeiro corredor.\nSua sala (", destino, ") estará à sua direita.");

                origem = destino;
                destino = "302";
                console.log("\n\n16:30 - 18:00");
                console.log("\nPartindo da ", origem, ", vire à direita.\nSiga em frente.\nSua sala (", destino, ") estará à sua direita.");
                break;

            case 5:
                origem = "entrada principal";
                destino = "325";
                console.log("13:15 - 14:45");
                console.log("\nPartindo da ", origem, ", siga em frente e desça para o bloco A inferior.\nEm seguida, vire à esquerda nas rampas.\nDepois, suba a rampa até o bloco A.\nVire à esquerda no segundo corredor.\nSiga em frente; sua sala (", destino, ") estará à sua esquerda.");

                origem = destino;
                destino = "310";
                console.log("\n\n14:45 - 16:15");
                console.log("\nPartindo da ", origem, ", vire à esquerda no corredor em frente ao caracol.\nEm seguida, vire à esquerda no corredor.\nSiga em frente; sua sala (", destino, ") estará à sua direita.");

                origem = destino;
                destino = "323";
                console.log("\n\n16:30 - 18:00");
                console.log("\nPartindo da ", origem, ", vire à esquerda.\nSiga em frente.\nSua sala (", destino, ") estará à sua direita.");
                break;
        }
        break;

    case 2:

        // Exibe mensagens de boas-vindas para o curso de Energias Renováveis
        console.log("Olá, aluno do curso de Energias Renováveis!");
        console.log("Irei ser seu sistema de navegação escolar!");

        // Definição da variável que controla o dia da semana
        var semana = 2;

        switch (semana) {
            case 1:
                // Cronograma de Segunda-feira
                console.log("\n--------- Cronograma Segunda-feira ---------");

                // Aula 1, 2 e 3: Rota da entrada principal para o bloco C
                 origem = "Entrada Principal";
                 destino = "Sala 206 C";

                console.log("1ª, 2ª e 3ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                console.log("\nCalculando rota...");
                console.log("\n...............................");
                console.log("Siga reto e vire na segunda esquerda; suba as três escadas para chegar à parte superior do bloco C.");
                console.log("Vire na primeira esquerda e siga reto; vire à direita e vá até a última sala à direita.");
                console.log("Parabéns, você chegou ao seu destino. Tenha uma boa aula!");

                // Aula 4, 5 e 6: Rota para o bloco D
                origem = destino;
                destino = "Salas 109 e 107 D";

                console.log("\n4ª, 5ª e 6ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                console.log("\nCalculando rota, tenha paciência...");
                console.log("\n..................................");
                console.log("Desça a escada próxima à sala, saia de dentro para a parte de fora do campus e siga reto à direita.");
                console.log("Ignore a segunda placa de entrada do Bloco C e siga; entre na primeira à direita, onde está a placa do Bloco D.");
                console.log("Entre e vire na segunda esquerda e siga em frente; as salas 109 e 107 estão nesse corredor à esquerda.");
                console.log("Parabéns, você chegou ao seu destino. Tenha uma boa aula!");
                break;

            case 2:
                // Cronograma de Terça-feira
                console.log("\n--------- Cronograma Terça-feira ---------");

                // Aula 1 e 2: Rota para o bloco A superior via caracol
                 origem = "Entrada Principal";
                 destino = "Sala 317 A";

                console.log("1ª e 2ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                console.log("\nCalculando rota...");
                console.log("\n...............................");
                console.log("Siga reto e entre na primeira esquerda; suba até o saguão principal.");
                console.log("Vire à esquerda (oposto à biblioteca) e siga até o caracol central e suba-o.");
                console.log("Você verá 4 corredores, dois à esquerda e dois à direita; vire na segunda esquerda e siga. A sala estará à esquerda neste corredor.");
                console.log("Parabéns, você chegou ao seu destino. Tenha uma boa aula!");

                // Aula 3 e 4: Deslocamento interno no bloco A
                origem = destino;
                destino = "Sala 310 A";

                console.log("\n3ª e 4ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                console.log("\nCalculando rota...");
                console.log("\n...............................");
                console.log("Vire à direita e siga; vire novamente à direita e vire à direita novamente. A sala estará nesse corredor à esquerda.");
                console.log("Parabéns, você chegou ao seu destino. Tenha uma boa aula!");

                // Aula 5 e 6: Sala próxima no mesmo corredor
                origem = destino;
                destino = "Sala 316 A";

                console.log("\n5ª e 6ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                console.log("\nCalculando rota...");
                console.log("\n...............................");
                console.log("A sala 316 está no mesmo corredor; apenas siga-o e ela estará à sua esquerda.");
                console.log("Parabéns, você chegou ao seu destino. Tenha uma boa aula!");
                break;

            case 3:
                // Cronograma de Quarta-feira
                console.log("\n--------- Cronograma Quarta-feira ---------");

                // Aula 1 e 2: Bloco D
                 origem = "Entrada Principal";
                 destino = "Sala 212 D";

                console.log("1ª e 2ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                console.log("\nCalculando rota...");
                console.log("\n...............................");
                console.log("Na entrada principal, vire à esquerda e siga; você andará pelo lado de fora da escola.");
                console.log("Siga e entre onde está a placa do Bloco D; suba as escadas e entre na primeira esquerda.");
                console.log("A sala estará à sua direita no corredor.");
                console.log("Parabéns, você chegou ao seu destino. Tenha uma boa aula!");

                // Aula 3 e 4: Divisão por turmas/salas
                origem = destino;
                destino = "Sala 318 A";
                var destino2 = "Sala 213 C";

                // Rota para Sala 318 A
                console.log("\n3ª e 4ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                console.log("\nCalculando rota...");
                console.log("\n...............................");
                console.log("Se for o dia da parte da sua turma na sala de aula normal (318):");
                console.log("Saia do bloco D e vá para o saguão principal.");
                console.log("Vá para o caracol principal e suba-o; lá em cima, você verá 4 corredores.");
                console.log("Vire na primeira esquerda e siga.");
                console.log("Dica: A sala está quase no fim do corredor à esquerda.");
                console.log("Parabéns, você chegou ao seu destino. Tenha uma boa aula!");

                // Rota para Sala 213 C
                console.log("\n3ª e 4ª Aulas: " + destino2 + " (Saindo de: " + origem + ")");
                console.log("\nCalculando rota...");
                console.log("\n...............................");
                console.log("Desça o caracol, volte para o saguão principal no centro e vire à esquerda.");
                console.log("Vá em sentido à placa do Bloco C, entre e vá para o corredor superior.");
                console.log("Suba a escada, vire à esquerda, passe a pontezinha e, na primeira porta à esquerda, estará sua sala.");
                console.log("Parabéns, você chegou ao seu destino. Tenha uma boa aula!");

                // Aula 5 e 6: Ginásio
                origem = "Blocos de Aula";
                destino = "Ginásio";

                console.log("\n5ª e 6ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                console.log("\nCalculando rota...");
                console.log("\n...............................");
                console.log("Vá para o lado externo do campus e siga em direção aos campos abertos; é provável que seja dentro do ginásio, apenas entre lá.");
                console.log("Parabéns, você chegou ao seu destino. Tenha uma boa aula!");
                break;

            case 4:
                // Cronograma de Quinta-feira
                console.log("\n--------- Cronograma Quinta-feira ---------");

                // Aula 1 e 2: Bloco A
                 origem = "Entrada Principal";
                 destino = "Salas 310 e 312 A";

                console.log("1ª e 2ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                console.log("\nCalculando rota...");
                console.log("\n...............................");
                console.log("Siga reto e entre na primeira esquerda; suba até o saguão principal.");
                console.log("Vire à esquerda (oposto à biblioteca) e siga até o caracol central e suba-o.");
                console.log("Você verá 4 corredores; vire na primeira esquerda.");
                console.log("As duas salas estão logo à frente, no lado esquerdo.");
                console.log("Parabéns, você chegou ao seu destino. Tenha uma boa aula!");

                // Aula 3 e 4: Divisão Turma A e Turma B
                origem = destino;
                destino = "Sala 226 A";
                var destino2 = "Sala 333 A";

                // Turma A
                console.log("\nTurma A - 3ª e 4ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                console.log("\nCalculando rota...");
                console.log("\n...............................");
                console.log("Volte para o centro onde há 4 corredores e pegue a primeira à esquerda.");
                console.log("Siga o corredor até o fim; é a última sala, você irá vê-la de frente.");
                console.log("Parabéns, você chegou ao seu destino. Tenha uma boa aula!");

                // Turma B
                console.log("\nTurma B - 3ª e 4ª Aulas: " + destino2 + " (Saindo de: " + origem + ")");
                console.log("\nCalculando rota...");
                console.log("\n...............................");
                console.log("Volte para o centro onde há 4 corredores e pegue o último à esquerda.");
                console.log("Siga-o até o final; quando chegar em uma parte sem saída, a sala estará à esquerda.");
                console.log("Parabéns, você chegou ao seu destino. Tenha uma boa aula!");

                // Aula 5 e 6: Sala 309 A
                origem = "Bloco A Superior";
                destino = "Sala 309 A";

                console.log("\n5ª e 6ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                console.log("\nCalculando rota...");
                console.log("\n...............................");
                console.log("Faça o caminho reverso e volte para o centro (onde estão as placas dos quatro corredores).");
                console.log("Vá para o primeiro à direita e a sala estará próxima.");
                console.log("Dica: A sala é a primeira do corredor, de frente ao banheiro.");
                console.log("Parabéns, você chegou ao seu destino. Tenha uma boa aula!");
                break;

            case 5:
                // Cronograma de Sexta-feira
                console.log("\n--------- Cronograma Sexta-feira ---------");

                // Aula 1, 2 e 3: Sala 316 A
                 origem = "Entrada Principal";
                 destino = "Sala 316 A";

                console.log("Chegamos ao último dia da semana, aproveite!");
                console.log("1ª, 2ª e 3ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                console.log("\nCalculando rota...");
                console.log("\n...............................");
                console.log("Siga reto e entre na primeira esquerda; suba até o saguão principal.");
                console.log("Vire à esquerda (oposto à biblioteca) e siga até o caracol central e suba-o.");
                console.log("Vire na primeira esquerda e siga.");
                console.log("Dica: A sala está quase no meio do corredor, no lado esquerdo.");
                console.log("Parabéns, você chegou ao seu destino. Tenha uma boa aula!");

                // Aula 4, 5 e 6: Rota para o Bloco F
                origem = destino;
                destino = "Sala 805 F";

                console.log("\n4ª, 5ª e 6ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                console.log("\nCalculando rota...");
                console.log("\n...............................");
                console.log("Vire à direita e desça o caracol.");
                console.log("Quando estiver no saguão principal, vire à esquerda e siga até ver a placa do Bloco F.");
                console.log("Entre no bloco, suba as escadas e siga.");
                console.log("Dica: É a penúltima sala do corredor superior à esquerda.");
                console.log("Parabéns, você chegou ao seu destino. Tenha uma boa aula!");
                break;
        }

        // Fim da navegação
        break;

    case 3:
        // Exibe mensagens de boas-vindas para o curso de Telecomunicações
        console.log("Olá, aluno do curso de Telecomunicações!");
        console.log("Serei seu sistema de navegação escolar!");
        console.log("Escolha um dia da Semana: ");
        console.log("\n1. Segunda\n2. Terça\n3. Quarta\n4. Quinta\n5. Sexta");

         origem;
         destino;
         dia_da_semana = 3; // Variável de controle do dia
         turma = "b";       // Variável de controle da turma

        switch (dia_da_semana) {
            case 1:
                // Cronograma de Segunda-feira
                console.log("\n--------- Cronograma Segunda-feira ---------");
                
                // Aula 1 e 2: Rota para o Ginásio
                origem = "Entrada Principal";
                destino = "Ginásio";
                console.log("1ª e 2ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                console.log("\nCalculando rota...");
                console.log("...............................");
                console.log("Vire à esquerda, siga reto e vire à direita.");
                console.log("Siga reto até chegar no campo e siga a trilha que vai até o ginásio.");
                console.log("Parabéns, você chegou ao seu destino. Tenha uma boa aula!");

                // Aula 3 e 4: Divisão por turmas (Bloco D)
                origem = destino;
                switch (turma) {
                    case "a":
                        destino = "Sala 211 D";
                        break;
                    case "b":
                        destino = "Sala 212 D";
                        break;
                }
                console.log("\n3ª e 4ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                console.log("\nCalculando rota...");
                console.log("Do ginásio, atravesse o campus e vá até o saguão.");
                console.log("Procure pelo Bloco D e entre em qualquer uma das entradas.");
                console.log("Suba as escadas e siga reto até o último corredor de cima e entre na sala.");
                console.log("Parabéns, você chegou ao seu destino!");

                // Aula 5 e 6: Divisão por turmas (Bloco C ou H)
                origem = destino;
                if (turma === "a") {
                    destino = "Sala 202 C";
                    console.log("\n5ª e 6ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                    console.log("A partir do Bloco D, vá até o saguão.");
                    console.log("Vá reto pelo saguão em direção à biblioteca e entre pela segunda entrada do bloco C.");
                    console.log("Suba as escadas e entre na sala à direita.");
                } else {
                    destino = "Sala 205 H";
                    console.log("\n5ª e 6ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                    console.log("A partir do Bloco D, vá até o saguão.");
                    console.log("Vá reto pelo saguão em direção à biblioteca e entre pela entrada do bloco H à esquerda.");
                    console.log("Suba as escadas e siga reto; a sala está ao final do corredor na esquerda.");
                }
                console.log("Parabéns, você chegou ao seu destino!");
                break;

            case 2:
                // Cronograma de Terça-feira
                console.log("\n--------- Cronograma Terça-feira ---------");
                origem = "Entrada Principal";
                destino = "Sala 314 A";
                console.log("1ª e 2ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                console.log("Siga reto, vire na terceira esquerda e suba o caracol até o final.");
                console.log("Vire à esquerda no primeiro corredor; sala à esquerda no meio do corredor.");

                origem = destino;
                destino = (turma === "a") ? "Sala 317 A" : "Sala 318 A";
                console.log("\n3ª e 4ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                console.log("Siga pelo corredor até encontrar sua sala (317 ou 318).");

                origem = destino;
                destino = (turma === "a") ? "Sala 310 A" : "Sala 312 A";
                console.log("\n5ª e 6ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                console.log("Desloque-se para a sala correspondente no Bloco A.");
                break;

            case 3:
                // Cronograma de Quarta-feira
                console.log("\n--------- Cronograma Quarta-feira ---------");
                origem = "Entrada Principal";
                destino = (turma === "a") ? "Sala 214 D" : "Sala 216 D";
                console.log("1ª, 2ª e 3ª Aulas: " + destino);
                console.log("Vire na segunda esquerda, atravesse o saguão até o Bloco D e suba ao último corredor.");

                origem = destino;
                destino = "Sala 206 C";
                console.log("\n4ª, 5ª e 6ª Aulas: " + destino);
                console.log("Vá ao Bloco C, entre pelo segundo portão e suba até a última sala à direita.");
                break;

            case 4:
                // Cronograma de Quinta-feira
                console.log("\n--------- Cronograma Quinta-feira ---------");
                origem = "Entrada Principal";
                destino = (turma === "a") ? "Sala 314 A" : "Sala 342 A";
                console.log("1ª e 2ª Aulas: " + destino);
                console.log("Suba o caracol do Bloco A e siga para o corredor da sua sala.");

                origem = destino;
                destino = "Sala 309 A";
                console.log("\n3ª e 4ª Aulas: " + destino);
                console.log("Vá para a sala em frente ao banheiro.");

                origem = destino;
                destino = "Sala 326 e 333 A";
                console.log("\n5ª e 6ª Aulas: " + destino);
                console.log("Siga para o fundo do bloco A.");
                break;

            case 5:
                // Cronograma de Sexta-feira
                console.log("\n--------- Cronograma Sexta-feira ---------");
                origem = "Entrada Principal";
                destino = "Sala 302 ou 304 A";
                console.log("1ª e 2ª Aulas: " + destino);
                console.log("Suba a rampa do bloco A até o final e entre no primeiro corredor.");

                origem = destino;
                destino = "Sala 318 A";
                console.log("\n3ª, 4ª, 5ª e 6ª Aulas: " + destino);
                console.log("Vire à direita e siga até o meio do segundo corredor.");
                break;

            default:
                console.log("Dia da semana inválido.");
                break;
    } break;

    case 4:

        // --- Sistema de Navegação Escolar - Curso de Mecânica ---

        console.log("Olá, aluno do curso de Mecânica!");
        console.log("Irei ser seu Sistema de navegação escolar!");
        console.log("Escolha um dia da Semana: ");
        console.log("\n1. Segunda-feira");
        console.log("\n2. Terça-feira");
        console.log("\n3. Quarta-feira");
        console.log("\n4. Quinta-feira");
        console.log("\n5. Sexta-feira");
        console.log("============================================================================\n");

        // Configurações iniciais de teste
        dia = 3; // 1=Segunda, 2=Terça, 3=Quarta, 4=Quinta, 5=Sexta
        origem = "Entrada Principal";
        destino = "";
        turma = "b";

        // Switch principal para selecionar o dia da semana
        switch (dia) {
            
            // --- SEGUNDA-FEIRA ---
            case 1:
                console.log("\n--------- Cronograma Segunda-feira ---------\n");
                destino = "Sala 309 A";
                console.log(" 1ª e 2ª Aula: " + destino + " (Saindo de: " + origem + ")");
                console.log("\n Calculando rota...");
                console.log("\n...............................\n");
                console.log('Desça pela batcaverna\n');
                console.log('até a rampa à esquerda\n');
                console.log('Suba até o bloco A no segundo andar\n');
                console.log('Entre no primeiro corredor à esquerda\n');
                console.log('Siga até a última porta à direita perto do primeiro caracol\n');
                console.log("Parabéns, você chegou ao seu destino, tenha uma boa aula!");
                
                origem = destino; // Atualiza a origem para a próxima aula

                console.log("============================================================================\n");
                destino = "Sala 314 A";
                console.log(" 4ª e 5ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                console.log("\n Calculando rota...");
                console.log("\n...............................\n");
                console.log('Saindo da sala à direita, siga reto no mesmo corredor\n');
                console.log('Passando o caracol, siga em frente até a 4ª porta à esquerda\n');
                console.log("Parabéns, você chegou ao seu destino, tenha uma boa aula!");
                
                origem = destino;
                console.log("============================================================================\n");

                // Verificação de rota específica por turma na Segunda
                switch (turma) {
                    case "a":
                        destino = "Sala 217 A";
                        console.log(" 5ª e 6ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                        console.log("\n Calculando rota...");
                        console.log("\n...............................\n");
                        console.log('Vire à esquerda na saída da sala até o primeiro caracol\n');
                        console.log('Vire à esquerda até o segundo corredor\n');
                        console.log('Vire à esquerda no corredor e siga reto até a 1ª sala à esquerda\n');
                        console.log("Parabéns, você chegou ao seu destino, tenha uma boa aula!");
                        break;
                    case "b":
                        destino = "Sala 221 A";
                        console.log(" 5ª e 6ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                        console.log("\n Calculando rota...");
                        console.log("\n...............................\n");
                        console.log('Vire à esquerda na saída da sala até o primeiro caracol\n');
                        console.log('Vire à esquerda até o segundo corredor\n');
                        console.log('Vire à esquerda no corredor e siga reto até a 2ª sala à esquerda\n');
                        console.log("Parabéns, você chegou ao seu destino, tenha uma boa aula!");
                        break;
                    default:
                        console.log("============================================================================\n");
                        console.log('Turma inválida');
                }
                console.log("============================================================================\n");
                break;

            // --- TERÇA-FEIRA ---
            case 2:
                console.log("\n--------- Cronograma Terça-feira ---------\n");
                switch (turma) {
                    case "a":
                        destino = "Sala 803 F";
                        console.log(" Todas as Aulas: " + destino + " (Saindo de: " + origem + ")");
                        console.log("\n Calculando rota...");
                        console.log("\n...............................\n");
                        console.log('Desça pela batcaverna\n');
                        console.log('até a rampa à esquerda\n');
                        console.log('Suba até o saguão no 1º andar\n');
                        console.log('Vire à esquerda e siga até o final do saguão\n');
                        console.log('Quando chegar no fim do saguão, vire à direita e entre no bloco\n');
                        console.log('Suba a escada e siga até a terceira (3ª) porta à esquerda\n');
                        console.log("Parabéns, você chegou ao seu destino, tenha uma boa aula!");
                        break;

                    case "b":
                        destino = "Sala 805 F";
                        console.log(" 1ª, 2ª e 3ª Aula: " + destino + " (Saindo de: " + origem + ")");
                        console.log("\n Calculando rota...");
                        console.log("\n...............................\n");
                        console.log('Desça pela batcaverna\n');
                        console.log('até a rampa à esquerda\n');
                        console.log('Suba até o saguão no 1º andar\n');
                        console.log('Vire à esquerda e siga até o final do saguão\n');
                        console.log('Quando chegar no fim do saguão, vire à direita e entre no bloco\n');
                        console.log('Suba a escada e siga até a quinta (5ª) porta à esquerda\n');
                        console.log("Parabéns, você chegou ao seu destino, tenha uma boa aula!");
                        
                        origem = destino;
                        console.log("============================================================================\n");

                        destino = "Sala 811 F";
                        console.log(" 4ª, 5ª e 6ª Aulas: " + destino + " (Saindo de: " + origem + ")");
                        console.log("\n Calculando rota...");
                        console.log("\n...............................\n");
                        console.log('Saia da sala e vire à esquerda\n');
                        console.log('Desça a escada\n');
                        console.log('Ande reto até a 3ª porta verde à direita\n');
                        console.log("Parabéns, você chegou ao seu destino, tenha uma boa aula!");
                        break;
                }
                break;

            // --- QUARTA-FEIRA ---
            case 3:
                console.log("\n--------- Cronograma Quarta-feira ---------\n");
                destino = "Sala 711 E";
                console.log(" 1ª e 2ª Aula: " + destino + " (Saindo de: " + origem + ")");
                console.log("\n Calculando rota...");
                console.log("\n...............................\n");
                console.log('Desça pela batcaverna\n');
                console.log('até a rampa à esquerda\n');
                console.log('Suba até o saguão no 1º andar\n');
                console.log('Vire à esquerda e siga até o final do saguão\n');
                console.log('Quando chegar no fim do saguão, vire à esquerda e entre no bloco\n');
                console.log('Desça a escada e siga até a terceira (3ª) porta à direita\n');
                console.log("Parabéns, você chegou ao seu destino, tenha uma boa aula!");
                
                origem = destino;
                console.log("============================================================================\n");

                switch (turma) {
                    case "a":
                        destino = "Sala 333 A";
                        console.log(" 3ª e 4ª Aula: " + destino + " (Saindo de: " + origem + ")");
                        console.log("\n Calculando rota...");
                        console.log("\n...............................\n");
                        console.log('Saia da sala e vire à esquerda\n');
                        console.log('Suba até o saguão no 1º andar\n');
                        console.log('Vire à direita e siga até o primeiro caracol\n');
                        console.log("Suba o caracol até o bloco A (segundo andar)");
                        console.log("Vire à esquerda no primeiro corredor");
                        console.log("Siga até a segunda (2ª) sala à sua direita");
                        console.log("Parabéns, você chegou ao seu destino, tenha uma boa aula!");
                        
                        origem = destino;
                        console.log("============================================================================\n");
                        console.log("Saia da sala e vire à esquerda\n");
                        console.log("Passe o caracol e siga em frente na segunda sala à sua direita\n");
                        console.log("Parabéns, você chegou ao seu destino, tenha uma boa aula!");
                        break;
                    case "b":
                        destino = "Sala 326 A";
                        console.log(" 3ª e 4ª Aula: " + destino + " (Saindo de: " + origem + ")");
                        console.log("\n Calculando rota...");
                        console.log("\n...............................\n");
                        console.log('Saia da sala e vire à esquerda\n');
                        console.log('Suba até o saguão no 1º andar\n');
                        console.log('Vire à direita e siga até o primeiro caracol\n');
                        console.log("Suba o caracol até o bloco A (segundo andar)");
                        console.log("Vire à esquerda no primeiro corredor");
                        console.log("Siga até o fim do corredor na porta à sua frente");
                        console.log("Parabéns, você chegou ao seu destino, tenha uma boa aula!");
                        
                        origem = destino;
                        console.log("============================================================================\n");
                        console.log("Saia da sala e vire à esquerda\n");
                        console.log("Desça o caracol até o saguão\n");
                        console.log("Vire à direita e siga em frente\n");
                        console.log("Passe o caracol e entre na primeira porta à sua direita\n");
                        console.log("Suba a escada e vire à esquerda na ponte\n");
                        console.log("Entre na primeira porta à esquerda\n");
                        console.log("Parabéns, você chegou ao seu destino, tenha uma boa aula!");
                        break;
                }
                break; // Adicionado break para não vazar para o Caso 4

            // --- QUINTA-FEIRA ---
            case 4:
                console.log("\n--------- Cronograma Quinta-feira ---------\n");
                destino = "Sala 711 E";
                console.log(" 1ª e 2ª Aula: " + destino + " (Saindo de: " + origem + ")");
                console.log("\n Calculando rota...");
                console.log("\n...............................\n");
                console.log('Desça pela batcaverna\n');
                console.log('até a rampa à esquerda\n');
                console.log('Suba até o saguão no 1º andar\n');
                console.log('Vire à esquerda e siga até o final do saguão\n');
                console.log('Quando chegar no fim do saguão, vire à esquerda e entre no bloco\n');
                console.log('Desça a escada e siga até a terceira (3ª) porta à direita\n');
                console.log("Parabéns, você chegou ao seu destino, tenha uma boa aula!");
                
                origem = destino;
                console.log("============================================================================\n");

                destino = "Ginásio";
                console.log(" 3ª e 4ª Aula: " + destino + " (Saindo de: " + origem + ")");
                console.log("\n Calculando rota...");
                console.log("\n...............................\n");
                console.log('Saia da sala e vire à esquerda\n');
                console.log('Seguindo reto, suba a escada e vire à esquerda\n');
                console.log('Saindo pela porta, vire à esquerda\n');
                console.log('Siga reto até chegar no Ginásio\n');
                console.log('Vire à esquerda entre as quadras e o Ginásio\n');
                console.log('Vire à direita na porta\n');
                console.log("Parabéns, você chegou ao seu destino, tenha uma boa aula!");
                
                origem = destino;
                console.log("============================================================================\n");

                destino = "Sala 315 A";
                console.log(" 5ª e 6ª Aula: " + destino + " (Saindo de: " + origem + ")");
                console.log("\n Calculando rota...");
                console.log("\n...............................\n");
                console.log("Saindo do ginásio, vire à direita");
                console.log("Quando chegar no fim da quadra, vire à esquerda");
                console.log("Siga reto pelo caminho entre as árvores");
                console.log("Suba o caracol até o bloco A (segundo andar)");
                console.log("Vire à esquerda no primeiro corredor");
                console.log("Siga reto até a primeira porta à direita");
                console.log("Parabéns, você chegou ao seu destino, tenha uma boa aula!");
                break;

            // --- SEXTA-FEIRA ---
            case 5:
                console.log("\n--------- Cronograma Sexta-feira ---------\n");
                destino = "Sala 318 A";
                console.log(" 1ª e 2ª Aula: " + destino + " (Saindo de: " + origem + ")");
                console.log("\n Calculando rota...");
                console.log("\n...............................\n");
                console.log('Desça pela batcaverna\n');
                console.log('até a rampa à esquerda\n');
                console.log('Suba até o bloco A no segundo andar\n');
                console.log('Entre no primeiro corredor à esquerda\n');
                console.log('Siga reto\n');
                console.log('Passe o caracol e siga reto\n');
                console.log('até a 6ª porta à sua esquerda\n');
                console.log("Parabéns, você chegou ao seu destino, tenha uma boa aula!");
                
                origem = destino;

                switch (turma) {
                    case "a":
                        destino = "Sala 302 A";
                        console.log(" 3ª e 4ª Aula: " + destino + " (Saindo de: " + origem + ")");
                        console.log("\n Calculando rota...");
                        console.log("\n...............................\n");
                        console.log('Saia da sala e vire à direita\n');
                        console.log('Siga reto e passe o caracol\n');
                        console.log('Siga reto até o final do corredor\n');
                        console.log('À sua esquerda estará a 302\n');
                        console.log("Parabéns, você chegou ao seu destino, tenha uma boa aula!");
                        
                        origem = destino;
                        console.log("============================================================================\n");
                        console.log("Saia da sala e vire à esquerda");
                        console.log("Siga reto e passe o primeiro caracol");
                        console.log("Sua sala é a segunda (2ª) porta à sua esquerda");
                        break;
                    case "b":
                        console.log("\n--------- Cronograma Sexta-feira (Turma B) ---------\n");
                        destino = "Sala 304 A";
                        console.log(" 3ª e 4ª Aula: " + destino + " (Saindo de: " + origem + ")");
                        console.log("\n Calculando rota...");
                        console.log("\n...............................\n");
                        console.log('Saia da sala e vire à direita\n');
                        console.log('Siga reto e passe o caracol\n');
                        console.log('Siga reto até o final do corredor\n');
                        console.log('À sua esquerda estará a 304\n');
                        console.log("Parabéns, você chegou ao seu destino, tenha uma boa aula!");
                        
                        origem = destino;
                        console.log("============================================================================\n");
                        console.log("Saia da sala e vire à esquerda");
                        console.log("Siga reto e passe o primeiro caracol");
                        console.log("Sua sala é a terceira (3ª) porta à sua esquerda");
                        break;
                }
                break;

            default:
                console.log("============================================================================\n");
                console.log('Número não corresponde a um dia da semana');
                break;
        }
    break;

    default:
    console.log("Curso Inválido")
}