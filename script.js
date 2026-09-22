const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const progressoBarra = document.getElementById("progresso");
const btnReiniciar = document.getElementById("btn-reiniciar");

const perguntas = [
    {
        enunciado: "Ao iniciar a construção de um novo software, como você prefere agir?",
        alternativas: [
            {
                texto: "Arquitetar todo o projeto, definir estruturas de dados e criar diagramas antes de digitar uma linha.",
                afirmacao: "Sua mentalidade é fortemente **Estratégica e Analítica**, priorizando a prevenção de erros e a clareza arquitetural."
            },
            {
                texto: "Criar um protótipo rápido e ir evoluindo o código de forma iterativa à medida que vejo as coisas funcionando.",
                afirmacao: "Você demonstra um perfil altamente **Prático e Ágil**, com foco em entregas rápidas e adaptação constante."
            }
        ]
    },
    {
        enunciado: "Diante de um bug misterioso que está travando o sistema, qual seu primeiro passo?",
        alternativas: [
            {
                texto: "Investigar logs, usar o debugger linha por linha e isolar o problema por conta própria.",
                afirmacao: "Sua autonomia se destaca no **Diagnóstico Técnico**, confiando na sua capacidade de investigação profunda."
            },
            {
                texto: "Trocar uma ideia com outro dev ou abrir uma discussão no fórum da equipe para levantar hipóteses.",
                afirmacao: "Você fortalece a **Cultura Colaborativa**, entendendo que múltiplos pontos de vista aceleram a solução de problemas complexos."
            }
        ]
    },
    {
        enunciado: "Em relação ao design e à experiência do usuário (UX), qual sua visão?",
        alternativas: [
            {
                texto: "Se o código for performático, seguro e funcional, a interface é um detalhe secundário.",
                afirmacao: "Sua atenção se volta para a **Engenharia de Base e Performance**, onde a estabilidade do sistema vem sempre em primeiro lugar."
            },
            {
                texto: "Uma interface bonita, fluida e intuitiva é tão fundamental quanto a estabilidade do código.",
                afirmacao: "Sua visão é focada em **Experiência do Usuário (UI/UX)**, valorizando o impacto visual e a facilidade de uso do software."
            }
        ]
    },
    {
        enunciado: "Qual sua postura ao se deparar com novas ferramentas ou frameworks que surgem no mercado?",
        alternativas: [
            {
                texto: "Prefiro dominar com maestria a stack que já utilizo antes de investir tempo em novidades.",
                afirmacao: "Você possui **Especialização Consolidada**, buscando profundidade técnica nas ferramentas que já domina."
            },
            {
                texto: "Adoro testar novas bibliotecas e linguagens em pequenos projetos para entender seu potencial.",
                afirmacao: "Seu motor é a **Inovação Contínua**, mantendo sua curiosidade acesa em relação às tendências tecnológicas."
            }
        ]
    },
    {
        enunciado: "Qual ambiente de trabalho te traz melhores resultados?",
        alternativas: [
            {
                texto: "Um ambiente onde posso focar 100% nas minhas tarefas com autonomia e controle total da solução.",
                afirmacao: "Sua força está na **Execução Autônoma**, entregando alto rendimento com independência."
            },
            {
                texto: "Um ambiente colaborativo com constantes trocas, pair programming e decisões tomadas em conjunto.",
                afirmacao: "Sua sinergia brilha na **Sincronia de Equipe**, multiplicando o potencial do time por meio da cooperação."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    
    // Atualiza a barra de progresso
    const porcentagem = (atual / perguntas.length) * 100;
    progressoBarra.style.width = `${porcentagem}%`;

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + "<br><br>";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    progressoBarra.style.width = `100%`;
    caixaPerguntas.textContent = "Mapeamento Concluído! Confira seu perfil:";
    textoResultado.innerHTML = historiaFinal;
    caixaAlternativas.innerHTML = "";
    btnReiniciar.style.display = "block";
}

btnReiniciar.addEventListener("click", () => {
    atual = 0;
    historiaFinal = "";
    btnReiniciar.style.display = "none";
    mostraPergunta();
});

mostraPergunta();