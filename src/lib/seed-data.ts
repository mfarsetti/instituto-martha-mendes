import { Post, Course } from '@/types';

import enriquecaImg from "@/assets/cursos/enriqueça.png";
import floraisImg from "@/assets/cursos/florais.png";
import psicobiosofiaImg from "@/assets/cursos/psicobiosofia.png";
import psicoeducacaoImg from "@/assets/cursos/psicoeducacao.png";

export const seedPosts: Post[] = [
  {
    id: 'post_1',
    title: 'Os Benefícios Científicos da Meditação',
    slug: 'beneficios-cientificos-meditacao',
    summary: 'Descubra como a prática meditativa regular transforma o cérebro e promove bem-estar físico e mental.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop',
    tags: ['Bem-estar', 'Meditação', 'Ciência'],
    content: `# Os Benefícios Científicos da Meditação

A meditação tem sido praticada há milhares de anos, mas só recentemente a ciência moderna começou a compreender seus profundos efeitos sobre o cérebro e o corpo.

## Neuroplasticidade e Meditação

Estudos de neuroimagem mostram que a prática regular de meditação pode literalmente remodelar o cérebro, fortalecendo áreas associadas à atenção, empatia e regulação emocional.

## Benefícios Comprovados

- Redução do estresse e ansiedade
- Melhora da concentração e foco
- Maior equilíbrio emocional
- Fortalecimento do sistema imunológico
- Redução da pressão arterial

## Como Começar

Apenas 10 minutos diários de prática já podem trazer benefícios significativos para sua saúde mental e física.`,
    status: 'published',
    publishedAt: '2024-03-15T00:00:00.000Z',
    createdAt: '2024-03-15T00:00:00.000Z',
    updatedAt: '2024-03-15T00:00:00.000Z',
    author: 'Dra. Martha Mendes',
    readTime: '8 min',
  },
  {
    id: 'post_2',
    title: 'Florais de Bach: Ciência ou Placebo?',
    slug: 'florais-de-bach-ciencia-ou-placebo',
    summary: 'Uma análise científica sobre como as essências florais atuam no equilíbrio emocional.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
    tags: ['Terapias', 'Florais', 'Ciência'],
    content: `# Florais de Bach: Ciência ou Placebo?

Os Florais de Bach são essências naturais desenvolvidas pelo Dr. Edward Bach na década de 1930. Mas qual é a base científica por trás dessa terapia?

## O Sistema Bach

Dr. Bach identificou 38 essências florais, cada uma correspondendo a um estado emocional específico. A proposta é que essas essências ajudam a restaurar o equilíbrio emocional.

## Evidências Científicas

Embora muitos estudos mostrem resultados positivos, a comunidade científica ainda debate os mecanismos de ação dos florais. Alguns estudos sugerem efeitos além do placebo, enquanto outros pedem mais pesquisas.

## Aplicação Clínica

Independentemente do debate científico, milhares de terapeutas ao redor do mundo relatam resultados positivos no tratamento de ansiedade, estresse e desequilíbrios emocionais.`,
    status: 'published',
    publishedAt: '2024-03-10T00:00:00.000Z',
    createdAt: '2024-03-10T00:00:00.000Z',
    updatedAt: '2024-03-10T00:00:00.000Z',
    author: 'Profª Ana Costa',
    readTime: '10 min',
  },
  {
    id: 'post_3',
    title: 'Psicobiosofia®: Uma Nova Visão do Ser Humano',
    slug: 'psicobiosofia-nova-visao-ser-humano',
    summary: 'Compreendendo a integração entre psicologia, biologia e filosofia na prática terapêutica.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    tags: ['Metodologia', 'Psicobiosofia', 'Terapia'],
    content: `# Psicobiosofia®: Uma Nova Visão do Ser Humano

A Psicobiosofia® é uma metodologia exclusiva que integra três dimensões fundamentais do ser humano: psicologia, biologia e filosofia.

## Os Três Pilares

### Psicologia
Compreensão dos processos mentais, emocionais e comportamentais.

### Biologia
Entendimento dos processos fisiológicos e sua relação com a saúde integral.

### Filosofia
Reflexão sobre o sentido da existência e propósito de vida.

## Aplicações Práticas

A Psicobiosofia® oferece ferramentas para autoconhecimento profundo, transformação pessoal e desenvolvimento de propósito de vida.

## Formação

O Instituto Martha Mendes oferece formação completa em Psicobiosofia®, com certificação reconhecida.`,
    status: 'published',
    publishedAt: '2024-02-20T00:00:00.000Z',
    createdAt: '2024-02-20T00:00:00.000Z',
    updatedAt: '2024-02-20T00:00:00.000Z',
    author: 'Dra. Martha Mendes',
    readTime: '20 min',
  },
];

export const seedCourses: Course[] = [
  {
    id: 'course_4',
    title: 'Enriqueça-se para Enriquecer!',
    slug: 'enriqueca-se-para-enriquecer',
    summary: 'A jornada da consciência para transformar crenças de escassez em maturidade emocional e prosperidade. De onde você estiver.',
    category: 'Desenvolvimento Pessoal',
    duration: '16h',
    modality: 'EAD',
    certification: 'Outro',
    investment: null,
    startDates: ['2026-07-26'],
    image: enriquecaImg,
    content: `A jornada da consciência para transformar crenças de escassez em maturidade emocional e prosperidade.

### Objetivo é tornar-se:
- **Consciente das crenças inconscientes que operam sua vida**
- **Capaz de identificar, ressignificar e substituir padrões de escassez**

### Este curso entrega com certeza:
- Clareza sobre crenças limitantes e seus mecanismos emocionais
- Ferramentas práticas de observação, ressignificação e integração
- Um método consciente para lidar com escassez interna

### Depende do aluno:
- Prática honesta
- Autorresponsabilidade emocional
- Aplicação no cotidiano após o curso

### Este curso NÃO promete:
- Enriquecimento financeiro rápido
- Cura instantânea
- Eliminação total de desafios emocionais

## Para quem é este curso?

- Pessoa interessada em autoconhecimento, prosperidade e consciência emocional
- Já percebe padrões repetidos de bloqueio financeiro/emocional, mas não entende a raiz
- Busca profundidade, não fórmulas mágicas – quer compreender e transformar

## Estrutura do Curso

**Online | Intensivo ao vivo**
📅 2 sábados curso + 1 sábado para compartilhar experiências
⏱️ 16 horas/aula totais (8h por sábado)
🎥 Encontros síncronos + exercícios guiados + tarefas entre encontros

## Feche os olhos e veja como se sente diante de:

- Preso em crenças de escassez (medo de errar, não merecimento, foco na falta)
- Repetindo padrões emocionais e comportamentais sem consciência
- Confundindo pensamento positivo com repressão emocional`,
    modules: [
      {
        id: 'mod_1',
        title: 'MÓDULO 1 — A origem das crenças (Freud e Jung) ⏱️ 2h',
        topics: [
          'Conceito essencial: Inconsciente, repressão e complexos',
          'Exemplo real: padrões herdados familiares',
          'Exercício guiado: rastreio da origem emocional',
          'Exercício autônomo: checklist de padrões repetidos',
          'Critério de qualidade: clareza + honestidade emocional'
        ]
      },
      {
        id: 'mod_2',
        title: 'MÓDULO 2 — Emoção não integrada gera escassez ⏱️ 2h',
        topics: [
          'Conceito: emoção sentida x emoção reprimida',
          'Eduard Bach e a leitura emocional',
          'Exercício: acolhimento emocional consciente',
          'Checklist: sinais de fuga emocional',
          '🔍 Registros:',
          'Diagnóstico: onde você ainda evita sentir?',
          'Erros comuns: espiritualizar para fugir',
          'Padrão-ouro: sentir sem se identificar'
        ]
      },
      {
        id: 'mod_3',
        title: 'MÓDULO 3 — Ressignificação consciente ⏱️ 2h',
        topics: [
          'Hill, Goddard e Shinn aplicados com maturidade',
          'Diferença entre imaginar e negar a realidade',
          'Exercício guiado: ressignificação estruturada',
          'Exercício autônomo: script consciente'
        ]
      },
      {
        id: 'mod_4',
        title: 'MÓDULO 4 — Escolha, merecimento e direção ⏱️ 2h',
        topics: [
          'Merecimento como estado interno',
          'O medo de errar como bloqueio central',
          'Exercício: escolha consciente baseada em valor, não medo',
          'Checklist: decisões guiadas pela falta vs consciência',
          '🔍 Registros',
          'Diagnóstico de maturidade emocional',
          'Correção de distorções comuns',
          'Integração final dos pilares'
        ]
      },
      {
        id: 'bloco_1',
        title: 'Bloco 1 - Quebra de padrão: "Por que você ainda trava?" ⏱️ 60 min',
        topics: [
          'Objetivo: Romper a ilusão de que o problema é externo (dinheiro, oportunidade, sorte)',
          'atividade - material'
        ]
      }
    ],
    teachers: [
      {
        id: 'teacher_1',
        name: 'Martha Mendes',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
        role: 'Instituto Martha Mendes',
        bio: 'Criadora da Psicobiosofia®, metodologia terapêutica, elaborou o curso Enriqueça-se para Enriquecer, com o propósito de auxiliar pessoas a compreender e ressignificar suas crenças, desbloquear potenciais e conquistar uma vida mais autêntica e realizada.',
        specialties: ['Crenças Limitantes', 'Maturidade Emocional', 'Transformação Consciente']
      }
    ],
    faqs: [
      {
        id: 'faq_1',
        question: 'Para quem é este curso?',
        answer: 'Para pessoas interessadas em autoconhecimento, prosperidade e consciência emocional. Se você já percebe padrões repetidos de bloqueio financeiro/emocional mas não entende a raiz, e busca profundidade ao invés de fórmulas mágicas, este curso é para você.'
      },
      {
        id: 'faq_2',
        question: 'Este curso promete enriquecimento rápido?',
        answer: 'NÃO. Este curso não promete enriquecimento financeiro rápido, cura instantânea ou eliminação total de desafios emocionais. O curso oferece ferramentas de consciência e transformação interna.'
      },
      {
        id: 'faq_3',
        question: 'Qual é a carga horária?',
        answer: 'São 16 horas/aula totais distribuídas em 2 sábados de curso (8h cada) + 1 sábado para compartilhar experiências, no formato online ao vivo.'
      },
      {
        id: 'faq_4',
        question: 'O que depende do aluno?',
        answer: 'O aproveitamento depende de: prática honesta, autorresponsabilidade emocional e aplicação no cotidiano após o curso. Este é um processo de transformação que requer compromisso pessoal.'
      },
      {
        id: 'faq_5',
        question: 'Qual é a metodologia do curso?',
        answer: 'O curso integra conceitos de Freud, Jung, Eduard Bach, Napoleon Hill, Neville Goddard e Florence Scovel Shinn, aplicados com maturidade e foco em consciência emocional, não em pensamento mágico.'
      },
      {
        id: 'faq_6',
        question: 'Quando começa o curso?',
        answer: 'O curso está programado para começar em Julho/26, com data específica a ser confirmada. Formato: Online/Ao vivo via Zoom.'
      }
    ],
    status: 'published',
    seoTitle: 'Enriqueça-se para Enriquecer - Transformação de Crenças Limitantes',
    seoDescription: 'Jornada de consciência para transformar crenças de escassez em maturidade emocional e prosperidade. 16h intensivas online. Julho/2026.',
    createdAt: '2026-01-15T00:00:00.000Z',
    updatedAt: '2026-01-15T00:00:00.000Z',
    students: 0,
  },
  {
    id: 'course_2',
    title: 'Psicobiosofia® - Transformação e Integração',
    slug: 'psicobiosofia-transformacao-integracao',
    summary: 'Formação completa que integra psicologia, biologia e filosofia. Um processo profundo que começa quando você decide olhar para o ser humano além do sintoma, da queixa e do comportamento visível.',
    category: 'Metodologia Exclusiva',
    duration: '200h',
    modality: 'EAD',
    certification: 'Extensão',
    investment: null,
    startDates: ['2026-08-01'],
    image: psicobiosofiaImg,
    content: `A Psicobiosofia® nasce da prática clínica real, de décadas de escuta profunda, observação cuidadosa e integração entre mente, corpo, história, emoções e consciência.

Este não é apenas um curso. É um processo. Um processo que começa no momento em que você decide olhar para o ser humano além do sintoma, além da queixa e além do comportamento visível.

Aqui, você não aprende técnicas soltas. Você constrói um olhar clínico. Um olhar capaz de perceber o que não é dito, compreender o que se repete e intervir com responsabilidade, ética e presença.

Ao longo desta formação, você será conduzido por profissionais reconhecidos entre os melhores em suas áreas, que unem conhecimento técnico, experiência prática e compromisso com o desenvolvimento humano.

### Este curso foi criado para quem deseja atuar com profundidade, segurança e propósito.

Se você busca apenas informação, este curso não é para você. Mas se você busca transformação profissional e pessoal, seja bem-vindo.

### Para quem é este curso

- Terapeutas que buscam formação completa e integrativa
- Psicólogos interessados em abordagens transpessoais
- Profissionais da saúde que desejam visão holística
- Pessoas em busca de transformação pessoal profunda

### O que você receberá gratuitamente

- 1 aula de empreendedorismo
- 1 aula sobre Marketing Digital para Terapeutas
- Código de Postura Clínica do Terapeuta Psicobiosofia®
- Calendário das atividades
- Estrutura para construir sua apostila durante as aulas
- Grupo de alunos no Telegram
- Lives exclusivas`,
    modules: [
      {
        id: 'mod_1',
        title: 'Módulo 1 - Onde Tudo Começa',
        topics: [
          'O primeiro contato com o cliente',
          'A recepção na primeira sessão',
          'A construção da anamnese',
          'A importância da empatia',
          'Visitando o corpo (psicossomática) e bloqueios/conflitos instalados',
          'Terapia ao longo da noite de sono: decodificando mensagens do inconsciente',
          'Revisitando a história pessoal e familiar',
          'Pergunta mágica ao cliente (ao inconsciente)',
          'O Terapeuta no mercado de trabalho'
        ]
      },
      {
        id: 'mod_2',
        title: 'Módulo 2 - Os Caminhos para o Rapport',
        topics: [
          'O que é a PNL e como ela surgiu',
          'Objetivos da PNL',
          'Estágios de aprendizagem',
          'Estrutura da comunicação',
          'Estrutura de funcionamento do cérebro e geração de comportamento',
          'Pressupostos da PNL',
          'Submodalidades',
          'Fisiologia',
          'Sistema representacional',
          'Pista de acesso ocular',
          'Metamodelo de linguagem'
        ]
      },
      {
        id: 'mod_3',
        title: 'Módulo 3 - Ética na Prática Terapêutica',
        topics: [
          'A Ética e Seus Fundamentos',
          'Sob o prisma da Ética',
          'O que é ética',
          'A ética na profissão',
          'A ética no consultório',
          'A ética cotidiana'
        ]
      },
      {
        id: 'mod_4',
        title: 'Módulo 4 - Atendimento On-line com Qualidade',
        topics: [
          'Introdução aos atendimentos online',
          'Preparação do espaço virtual',
          'Estabelecendo rapport à distância',
          'Mantendo a confidencialidade e privacidade',
          'Ferramentas e recursos para atendimentos online',
          'Lidando com desafios e garantindo qualidade',
          'Desmistificando o atendimento online',
          'Prática'
        ]
      },
      {
        id: 'mod_5',
        title: 'Módulo 5 - Os Florais de Bach no Processo Terapêutico',
        topics: [
          'O que são os Florais',
          'Para que são - queixa/sentido',
          'Quais caminhos percorrem',
          'Essências e suas aplicações',
          'Estado profundo de consciência - conteúdo onírico',
          'Como e quando empregar',
          'O trauma e o caminho neuronal',
          'O resgate da potência',
          'Prática'
        ]
      },
      {
        id: 'mod_6',
        title: 'Módulo 6 - Identificação, Desidentificação e Integração',
        topics: [
          'Curando as feridas da criança',
          'Adolescentes e fases do adulto',
          'Prática',
          'Avaliação'
        ]
      },
      {
        id: 'mod_7',
        title: 'Módulo 7 - A Hipnose no Processo Terapêutico',
        topics: [
          'O que é hipnose',
          'Como atua no cérebro/mente e corpo',
          'A hipnose e a neurociência',
          'Situações específicas de atuação',
          'Metáforas terapêuticas',
          'Prática'
        ]
      },
      {
        id: 'mod_8',
        title: 'Módulo 8 - Fundamentos da Meditação Terapêutica',
        topics: [
          'Impacto na Saúde Emocional através da Meditação',
          'Introdução às bases fundamentais da meditação terapêutica',
          'Explorar ferramenta para saúde mental e física',
          'Gestão eficaz das emoções',
          'Desenvolvimento da inteligência emocional',
          'Importância no processo terapêutico',
          'Prática'
        ]
      },
      {
        id: 'mod_9',
        title: 'Módulo 9 - Desenvolvimento Infantil e Prática Clínica',
        topics: [
          'Terapia com Crianças',
          'Desenvolvimento Infantil',
          'Desenvolvimento Atípico de forma breve',
          'Prática Clínica na terapia com crianças',
          'Prática'
        ]
      },
      {
        id: 'mod_10',
        title: 'Módulo 10 - Os Alicerces Teóricos da Psicanálise',
        topics: [
          'O que é Psicanálise',
          'Principais Alicerces da Psicanálise',
          'Desenvolvimentos Teóricos',
          'Olhar Transpessoal',
          'Prática'
        ]
      },
      {
        id: 'mod_11',
        title: 'Módulo 11 - Sustentabilidade e o Terapeuta no Mundo dos Negócios',
        topics: [
          'O que é sustentabilidade',
          'Desenvolvimento do tema sustentabilidade/ESG',
          'O que é ESG',
          'Importância no cenário atual',
          'Importância do ESG para área da saúde',
          'Ações básicas implementáveis',
          'O Terapeuta no Mundo dos Negócios'
        ]
      },
      {
        id: 'mod_12',
        title: 'Módulo 12 - Terapia Regressiva na Prática Clínica',
        topics: [
          'O que é Terapia Regressiva',
          'No processo terapêutico',
          'Memória afetiva',
          'Mecanismo de senso de percepção',
          'Técnicas',
          'Personificação',
          'Exploração da aura',
          'Prática'
        ]
      },
      {
        id: 'mod_13',
        title: 'Módulo 13 - Metodologia Científica',
        topics: [
          'O que é um Artigo Científico',
          'Tipos de artigos Científicos',
          'Apresentação dos quesitos para o artigo',
          'Imersão na cultura acadêmica e científica',
          'Perfil individual de pesquisador',
          'Metodologia do curso para elaboração do artigo',
          'Proposta de laboratório de pesquisa',
          'Elaboração do projeto'
        ]
      },
      {
        id: 'mod_14',
        title: 'Módulo 14 - Colocando o Projeto em Prática',
        topics: [
          'Bases de dados e construção de corpus',
          'Modalidades de leituras',
          'Tipos de leitores',
          'Coletânea de pesquisas',
          'Eleição subtítulos do artigo',
          'Catalogação da coletânea',
          'Habilidades de escrita',
          'Tipos de escritores',
          'Esboço avançado'
        ]
      },
      {
        id: 'mod_15',
        title: 'Módulo 15 - Finalização do Artigo',
        topics: [
          'Inclusão de elementos coesivos',
          'Ajustes finais',
          'Formatação do artigo',
          'Preparação para arguição',
          'Modalidades de apresentação',
          'Habilidades de oratória'
        ]
      },
      {
        id: 'mod_16',
        title: 'Módulo 16 - Filosofia e Espiritualidade na Clínica',
        topics: [
          'Filosofia Estoica e o Pensamento livre',
          'Contribuição dos Filósofos',
          'Espiritualidade no Consultório',
          'Reconhecendo-se como um Ser Espiritual',
          'O Papel da Alma e o Papel do Ego',
          'Quando Alma e Ego se Tornam Parceiros'
        ]
      },
      {
        id: 'mod_17',
        title: 'Módulo 17 - O Terapeuta e o Escritor',
        topics: [
          'Escuta Ativa',
          'Percepção Ativa',
          'Escrita Ativa',
          'Filosofando: Um bate papo com Escuta, Percepção e Escrita',
          'A Manifestação do Conhecimento: Livro'
        ]
      },
      {
        id: 'mod_18',
        title: 'Módulo 18 - Conhecimento Manifesto',
        topics: [
          'Psicobiosofia: A União que Transforma e Faz Crescer',
          'Celebração da jornada de aprendizado',
          'Manifestação do conhecimento',
          'Reflexo das conquistas alcançadas'
        ]
      }
    ],
    teachers: [
      {
        id: 'teacher_1',
        name: 'Dra. Martha Mendes',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
        role: 'Fundadora e Coordenadora',
        bio: 'Doutora em Psicologia, especialista em Terapias Integrativas com mais de 20 anos de experiência. Criadora da metodologia Psicobiosofia® que integra décadas de prática clínica, escuta profunda e observação cuidadosa.',
        specialties: ['Psicologia Integrativa', 'Psicobiosofia®', 'Terapia Transpessoal']
      }
    ],
    faqs: [
      {
        id: 'faq_1',
        question: 'Preciso ter formação prévia para fazer este curso?',
        answer: 'O curso é destinado a terapeutas, psicólogos e profissionais da saúde, mas também aceita pessoas em busca de transformação pessoal profunda. Avaliamos cada candidatura individualmente.'
      },
      {
        id: 'faq_2',
        question: 'O certificado é válido nacionalmente?',
        answer: 'Sim, o curso é livre conforme Decreto Presidencial nº 5.154/2004 e pela Lei nº 9.394/96, com certificado válido em todo território nacional.'
      },
      {
        id: 'faq_3',
        question: 'Qual é a carga horária do curso?',
        answer: 'O curso possui 200 horas distribuídas em 18 módulos completos, incluindo teoria, prática supervisionada e elaboração de artigo científico.'
      },
      {
        id: 'faq_4',
        question: 'O que recebo de bônus neste curso?',
        answer: 'Você receberá gratuitamente: aula de empreendedorismo, aula de Marketing Digital para Terapeutas, Código de Postura Clínica, calendário de atividades, estrutura para apostila, grupo no Telegram e lives exclusivas.'
      },
      {
        id: 'faq_5',
        question: 'Como funciona a elaboração do artigo científico?',
        answer: 'Os módulos 13, 14 e 15 são dedicados à metodologia científica e construção do saber, conduzindo você desde a escolha do tema até a apresentação final do artigo, desenvolvendo habilidades de pesquisa e escrita acadêmica.'
      },
      {
        id: 'faq_6',
        question: 'Este curso substitui formações técnicas?',
        answer: 'Não. A Psicobiosofia® não substitui formações técnicas, mas aprofunda o olhar clínico e qualifica o terapeuta para uma prática integrativa que vai além da técnica, integrando corpo, mente e espírito.'
      }
    ],
    status: 'published',
    seoTitle: 'Psicobiosofia® - Formação Completa em Terapia Integrativa',
    seoDescription: 'Formação completa que integra psicologia, biologia e filosofia. 18 módulos, 200h, com metodologia científica e visão transpessoal.',
    createdAt: '2026-01-15T00:00:00.000Z',
    updatedAt: '2026-01-15T00:00:00.000Z',
    students: 0,
  },
  {
    id: 'course_3',
    title: 'Florais de Bach: Recurso na Prática Clínica',
    slug: 'florais-de-bach-recurso-pratica-clinica',
    summary: 'Aprenda a integrar os Florais de Bach ao seu repertório terapêutico com embasamento, ética e clareza psicoeducativa. "Gotas de luz que adentram a escuridão da alma."',
    category: 'Terapia Floral',
    duration: '152h',
    modality: 'EAD',
    certification: 'Extensão',
    investment: null,
    startDates: ['2026-03-01'],
    image: floraisImg,
    content: `Os seres humanos são movidos por missão e propósito. 

Aprenda a integrar os Florais de Bach ao seu repertório terapêutico com embasamento, ética e clareza psicoeducativa, conduzindo processos de autoconhecimento e equilíbrio emocional de forma segura e responsável.

Com mais de três décadas de prática clínica, a psicoeducadora Martha Mendes desenvolveu uma metodologia didática e humana para formar profissionais capazes de aplicar os Florais de Bach com profundidade, clareza e responsabilidade — integrando teoria, prática e psicoeducação.

### Para quem é este curso

Ideal para profissionais da saúde mental e do bem-estar que desejam uma abordagem complementar sólida; e para interessados em autoconhecimento que buscam uma prática segura e responsável.

### Florais de Bach: a energia vital que transforma o ser

O curso aborda aspectos físicos e espirituais das essências, sistemas bioenergéticos dos seres vivos, bioeletrografia das essências, e como as mensagens são recebidas e decodificadas pelas células do ser vivo.

### Estrutura do Curso

**8 módulos teórico/práticos**
- EAD sábado e domingo/mensal
- Carga horária: 128h/aula
- Encontro/discussão: 1 terça-feira ao mês 19h/21h (24h extras)
- **Total: 152h**

### O que o curso desenvolve

Os módulos e a experiência do aluno com os Florais visam desenvolver:
- O raciocínio clínico
- A escuta ativa
- Criação do próprio material de estudos

### Diferenciais

- Aulas ao vivo/gravadas
- Materiais de apoio
- Estudos de caso
- Exercícios guiados
- Fóruns para troca e supervisão opcional
- Certificação ao final da formação
- Grupo de alunos no Telegram
- Vagas limitadas para bom aproveitamento

Diretrizes claras, linguagem de esclarecimento, alinhamento com práticas baseadas em respeito ao indivíduo e à atuação profissional de cada área.

Experiência de 30+ anos em clínica, método psicoeducativo, foco em autonomia do cliente, materiais aplicáveis e supervisão.`,
    modules: [
      {
        id: 'mod_1',
        title: 'Módulo 1 - O Início da Confiança',
        topics: [
          'Onde cada história começa a florescer',
          'O primeiro contato com o cliente',
          'A recepção na primeira sessão',
          'A construção da anamnese',
          'A importância da empatia',
          'Visitando o corpo (psicossomática) e bloqueios/conflitos instalados',
          'Terapia ao longo da noite de sono: decodificando mensagens do inconsciente através dos sonhos (identificar)',
          'Revisitando a história pessoal e familiar',
          'Pergunta mágica ao cliente (ao inconsciente)',
          'O Terapeuta no mercado de trabalho'
        ]
      },
      {
        id: 'mod_2',
        title: 'Módulo 2 - Da Essência à Energia',
        topics: [
          'Desvendando o universo dos Florais de Bach',
          'Florais de Bach: a energia vital que transforma o ser',
          'Aspectos físicos e espirituais das essências Florais por Dr. Edward Bach',
          'Sistemas bioenergéticos dos seres vivos e das essências dos Florais de Bach',
          'Bioeletrografia das essências dos florais de Bach'
        ]
      },
      {
        id: 'mod_3',
        title: 'Módulo 3 - Potência e Reconhecimento pelas Células',
        topics: [
          'Da essência à célula: a inteligência vital dos Florais de Bach',
          'Potência e Realização - resgate da capacidade de Ser',
          'Eletricidade das essências dos florais de Bach',
          'As essências dos florais de Bach funcionam. Por quê?',
          'O mensageiro das essências dos florais de Bach para o ser vivo',
          'Como as mensagens são recebidas e decodificadas pelas células do ser vivo'
        ]
      },
      {
        id: 'mod_4',
        title: 'Módulo 4 - Rastreando a Causa do Desequilíbrio',
        topics: [
          'Florais de Bach: escutando a dor, revelando a causa, promovendo equilíbrio',
          'A simbologia da dor - do desequilíbrio',
          'Psicossomática: a emoção que adoeceu e quer ser ouvida',
          'Memória e emoção',
          'Sonhos: Florais de Bach em busca da memória traumática - cronotipo',
          'Florais de Bach na Prática Clínica'
        ]
      },
      {
        id: 'mod_5',
        title: 'Módulo 5 - Prática Clínica: O Terapeuta no Processo',
        topics: [
          'Florais na clínica: sensibilidade, ética e vínculo no florescer do cuidado',
          'Anamnese: olhos de ver e ouvidos de ouvir, o feeling do terapeuta floral',
          'Freud, Jung e Edward Bach - libido e energia psíquica - o ponto de convergência',
          'As essências e suas aplicabilidades',
          'Reconhecer tipo na aplicabilidade: ressonância',
          'Suporte no/para o processo terapêutico',
          'Vínculo: terapeuta e cliente',
          'Quem é, e como é o terapeuta da terapia de Florais de Bach',
          'Quem é o cliente que procura a terapia de florais de Bach',
          'Ética e acolhimento',
          'O processo terapêutico com os recursos dos Florais de Bach'
        ]
      },
      {
        id: 'mod_6',
        title: 'Módulo 6 - Prática Clínica',
        topics: [
          'Florais de Bach: Autoconsciência e cura a partir da essência mais profunda do Ser',
          'Profundidade das essências dos Florais de Bach',
          'O sistema imunológico como morada do curador interno',
          'Reconhecer situação na aplicabilidade: ressonância',
          'Autoconsciência - reconhecer-se',
          'Profundidade e resgate da capacidade de Ser',
          'Revendo as essências florais e aplicabilidade (revisão)'
        ]
      },
      {
        id: 'mod_7',
        title: 'Módulo 7 - Prática Clínica: Aprendendo com o Processo',
        topics: [
          'Florais de Bach: curando traumas, acessando potências, transformando vidas',
          'O trauma e o caminho neuronal',
          'Estado profundo de consciência - conteúdo onírico',
          'O resgate da potência',
          'Curando as feridas da criança - adolescente e fases do adulto'
        ]
      },
      {
        id: 'mod_8',
        title: 'Módulo 8 - Prática Clínica: Mergulhando no Inconsciente',
        topics: [
          'Mergulho no inconsciente: ampliando consciência, sensibilidade e integração clínica',
          'Estado profundo de consciência - conteúdo onírico',
          'Escuta Ativa; Percepção Ativa',
          'Manifestando o conhecimento - Avaliação final'
        ]
      }
    ],
    teachers: [
      {
        id: 'teacher_1',
        name: 'Martha Mendes',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
        role: 'Psicoeducadora e Fundadora',
        bio: 'Com mais de 30 anos de prática clínica, desenvolveu uma metodologia didática e humana para formar profissionais capazes de aplicar os Florais de Bach com profundidade, clareza e responsabilidade.',
        specialties: ['Florais de Bach', 'Psicoeducação', 'Terapia Integrativa']
      }
    ],
    faqs: [
      {
        id: 'faq_1',
        question: 'Preciso ter formação prévia para fazer este curso?',
        answer: 'Não é obrigatório, mas o curso é ideal para profissionais da saúde mental e do bem-estar que desejam uma abordagem complementar sólida, e também para interessados em autoconhecimento que buscam uma prática segura e responsável.'
      },
      {
        id: 'faq_2',
        question: 'Qual é a carga horária do curso?',
        answer: 'O curso possui 152 horas totais, sendo 128h de aulas teórico-práticas em EAD (sábados e domingos mensais) + 24h extras em encontros de discussão (terças-feiras 19h-21h).'
      },
      {
        id: 'faq_3',
        question: 'Como funcionam as aulas?',
        answer: 'São 8 módulos teórico/práticos em formato EAD, com aulas ao vivo/gravadas, materiais de apoio, estudos de caso, exercícios guiados, fóruns para troca e supervisão opcional.'
      },
      {
        id: 'faq_4',
        question: 'O curso oferece certificado?',
        answer: 'Sim, ao final da formação você receberá certificação válida. O curso também inclui grupo de alunos no Telegram.'
      },
      {
        id: 'faq_5',
        question: 'O que diferencia este curso de outros sobre Florais?',
        answer: 'A metodologia de Martha Mendes, com 30+ anos de experiência clínica, integra teoria, prática e psicoeducação com foco em clareza ética, autonomia do cliente e aplicação responsável dos Florais de Bach.'
      },
      {
        id: 'faq_6',
        question: 'As vagas são limitadas?',
        answer: 'Sim, as vagas são limitadas para garantir o bom aproveitamento do aluno, com acompanhamento adequado e possibilidade de supervisão.'
      }
    ],
    status: 'published',
    seoTitle: 'Florais de Bach: Recurso na Prática Clínica - Formação Completa',
    seoDescription: 'Formação completa em Florais de Bach com Martha Mendes. 152h, metodologia psicoeducativa, prática clínica e supervisão. Março/2026.',
    createdAt: '2026-01-15T00:00:00.000Z',
    updatedAt: '2026-01-15T00:00:00.000Z',
    students: 0,
  },
  {
    id: 'course_1',
    title: 'Psicoeducação Terapêutica Integrativa',
    slug: 'psicoeducacao-terapeutica-integrativa',
    summary: 'Aprofunde o olhar terapêutico integrando educação, filosofia e espiritualidade. Aprenda a estar diante do outro com clareza, ética e segurança.',
    category: 'Formação Integrativa',
    duration: '32h',
    modality: 'EAD',
    certification: 'Extensão',
    investment: null,
    startDates: ['2026-05-17'],
    image: psicoeducacaoImg,
    content: `A Psicoeducação Terapêutica Integrativa nasce para apoiar terapeutas que sentem que a técnica, sozinha, já não dá conta da complexidade humana – mas que também não querem ultrapassar limites éticos, confundir espiritualidade com religião ou atuar a partir de crenças pessoais não elaboradas.

Este curso oferece clareza onde antes havia medo, estrutura onde havia intuição e segurança para transformar perguntas difíceis em diálogos terapêuticos responsáveis. Ao longo de quatro sábados, você será conduzido por uma jornada que amplia a percepção clínica, integra educação, filosofia e espiritualidade como dimensões humanas legítimas e ensina como traduzir tudo isso em prática real no consultório.

### Para quem é este curso

Este curso é para você que é:

- Terapeuta iniciante ou intermediário que já atende ou está começando na clínica
- Busca mais profundidade e sentido no atendimento, além da técnica
- Tem interesse em espiritualidade, mas medo de errar, invadir ou misturar religião

### O que este curso oferece

**Não substitui formações técnicas, mas aprofunda o olhar.**
Não padroniza o cliente, mas qualifica o terapeuta.
Ao final, você não apenas saberá o que fazer – terá mais clareza sobre como estar diante do outro.

### O que você aprenderá

- Compreender o ser humano de forma integrada, sem fragmentações
- Diferenciar com clareza espiritualidade, religião e prática clínica
- Comunicar-se com mais segurança, sensibilidade e limites
- Utilizar a psicoeducação como ferramenta terapêutica viva
- Construir um modelo de atendimento coerente com seus valores e com a clínica contemporânea

### Estrutura do Curso

**4 sábados | 32h totais (8h por sábado)**

Formato online síncrono, com pausas, prática e materiais de apoio via Zoom.

### Do Conceito ao Consultório

Primeiro clareza (ética e fundamentos), depois compreensão (filosofia e espiritualidade), e só então aplicação clínica guiada, reduzindo medo e aumentando segurança.`,
    modules: [
      {
        id: 'mod_1',
        title: 'Quebra de Mitos e Alinhamento Ético',
        topics: [
          'Desconstrução de crenças sobre espiritualidade na clínica',
          'Limites éticos no atendimento terapêutico',
          'Diferenciação entre espiritualidade e religião',
          'Responsabilidade profissional e postura terapêutica'
        ]
      },
      {
        id: 'mod_2',
        title: 'Fundamentos do Ser Integral',
        topics: [
          'Visão integrativa: corpo-mente-espírito',
          'Compreensão holística do ser humano',
          'Como evitar fragmentações no atendimento',
          'Integração das múltiplas dimensões humanas'
        ]
      },
      {
        id: 'mod_3',
        title: 'Base Filosófica Aplicada à Clínica',
        topics: [
          'Fundamentos filosóficos da terapia integrativa',
          'Existencialismo e sentido de vida',
          'Fenomenologia aplicada ao consultório',
          'Filosofia como ferramenta terapêutica'
        ]
      },
      {
        id: 'mod_4',
        title: 'Espiritualidade como Dimensão Humana',
        topics: [
          'Espiritualidade não religiosa na clínica',
          'Escuta qualificada da dimensão espiritual',
          'Como trabalhar questões existenciais profundas',
          'Presença ética diante do sagrado do outro'
        ]
      },
      {
        id: 'mod_5',
        title: 'Psicoeducação Terapêutica na Prática',
        topics: [
          'Psicoeducação como ferramenta terapêutica viva',
          'Técnicas de educação terapêutica integral',
          'Aplicação prática no consultório',
          'Casos clínicos e supervisão'
        ]
      },
      {
        id: 'mod_6',
        title: 'Comunicação Clínica Segura',
        topics: [
          'Comunicação com segurança e sensibilidade',
          'Perguntas adequadas e respeitosas',
          'Estabelecimento de limites claros',
          'Linguagem terapêutica integrativa'
        ]
      },
      {
        id: 'mod_7',
        title: 'Integração no Atendimento Real',
        topics: [
          'Construção de modelo próprio de atendimento',
          'Integração teoria-prática',
          'Coerência com valores pessoais e ética profissional',
          'Adaptação à clínica contemporânea'
        ]
      }
    ],
    teachers: [
      {
        id: 'teacher_1',
        name: 'Dra. Martha Mendes',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
        role: 'Coordenadora e Fundadora',
        bio: 'Doutora em Psicologia, especialista em Terapias Integrativas com mais de 20 anos de experiência. Criadora da metodologia Psicobiosofia® e pioneira em abordagens que integram dimensões humanas sem fragmentações.',
        specialties: ['Psicologia Integrativa', 'Espiritualidade na Clínica', 'Psicoeducação Terapêutica']
      }
    ],
    faqs: [
      {
        id: 'faq_1',
        question: 'Preciso ter formação prévia para fazer este curso?',
        answer: 'Sim, o curso é destinado a terapeutas iniciantes ou intermediários que já atendem ou estão começando na clínica. É importante ter alguma base em atendimento terapêutico.'
      },
      {
        id: 'faq_2',
        question: 'Este curso substitui formações técnicas?',
        answer: 'Não. O curso não substitui formações técnicas nem regulamentação profissional. Ele aprofunda o olhar e qualifica o terapeuta para trabalhar com dimensões que vão além da técnica.'
      },
      {
        id: 'faq_3',
        question: 'O curso é religioso?',
        answer: 'Não. Aqui, espiritualidade não é doutrina nem promessa de cura. É dimensão humana, escuta qualificada, linguagem adequada e presença ética. O curso ensina a diferenciar claramente espiritualidade, religião e prática clínica.'
      },
      {
        id: 'faq_4',
        question: 'Qual é a carga horária do curso?',
        answer: 'O curso possui 32 horas totais, distribuídas em 4 sábados (8h por sábado), em formato online síncrono via Zoom, com pausas, prática e materiais de apoio.'
      },
      {
        id: 'faq_5',
        question: 'O que o curso promete entregar?',
        answer: 'O curso entrega: clareza conceitual entre espiritualidade, religião e prática clínica; estrutura segura para psicoeducação terapêutica integrativa; e ferramentas práticas para uso imediato no consultório. Não promete cura, iluminação ou resultados místicos.'
      },
      {
        id: 'faq_6',
        question: 'O que depende do aluno?',
        answer: 'O aproveitamento do curso depende de: estudo reflexivo, prática entre encontros e abertura para revisar crenças pessoais. O curso não entrega respostas prontas – entrega base, discernimento e aplicação consciente.'
      }
    ],
    status: 'published',
    seoTitle: 'Psicoeducação Terapêutica Integrativa - Curso Online',
    seoDescription: 'Aprofunde o olhar terapêutico integrando educação, filosofia e espiritualidade. Aprenda a estar diante do outro com clareza, ética e segurança.',
    createdAt: '2026-01-15T00:00:00.000Z',
    updatedAt: '2026-01-15T00:00:00.000Z',
    students: 0,
  },
];
