import { Post, Course } from '@/types';

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
    id: 'course_1',
    title: 'Florais de Bach',
    slug: 'florais-de-bach',
    summary: 'Formação completa em terapia floral com as 38 essências do Dr. Edward Bach. Aprenda diagnóstico, preparação e prescrição floral.',
    category: 'Terapia Floral',
    duration: '120h',
    modality: 'EAD',
    certification: 'Extensão',
    investment: 'R$ 1.997,00',
    startDates: ['2024-05-15', '2024-06-10', '2024-07-05'],
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
    content: `Formação completa em terapia floral com as 38 essências do Dr. Edward Bach. Curso destinado a terapeutas holísticos, psicólogos, profissionais da saúde e pessoas em busca de autoconhecimento.

### Para quem é este curso

Este curso é ideal para terapeutas holísticos iniciantes ou experientes, psicólogos e profissionais da saúde mental, profissionais de saúde em geral e pessoas em busca de autoconhecimento e desenvolvimento pessoal.`,
    modules: [
      {
        id: 'mod_1',
        title: 'Fundamentos da Terapia Floral',
        topics: [
          'História e filosofia do Dr. Edward Bach',
          'Os 7 grupos emocionais',
          'Princípios da terapia floral',
          'Bases científicas e filosóficas'
        ]
      },
      {
        id: 'mod_2',
        title: 'As 38 Essências',
        topics: [
          'Estudo detalhado de cada essência',
          'Indicações e contraindicações',
          'Diferenciação entre essências similares',
          'Propriedades terapêuticas'
        ]
      },
      {
        id: 'mod_3',
        title: 'Diagnóstico e Anamnese',
        topics: [
          'Técnicas de anamnese',
          'Identificação de estados emocionais',
          'Estudos de caso práticos',
          'Ferramentas de avaliação'
        ]
      },
      {
        id: 'mod_4',
        title: 'Prescrição e Prática Clínica',
        topics: [
          'Preparação de fórmulas florais',
          'Dosagem e posologia',
          'Ética profissional',
          'Atendimento na prática clínica'
        ]
      }
    ],
    teachers: [
      {
        id: 'teacher_1',
        name: 'Profª Ana Costa',
        photo: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
        role: 'Coordenadora do Curso',
        bio: 'Terapeuta Floral Senior com 15 anos de experiência. Especialista em Florais de Bach e formação de terapeutas. Autora de diversos artigos sobre terapia floral.',
        specialties: ['Florais de Bach', 'Terapia Floral', 'Formação de Terapeutas']
      },
      {
        id: 'teacher_2',
        name: 'Dr. Paulo Santos',
        photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
        role: 'Professor Associado',
        bio: 'Médico especializado em Medicina Integrativa com foco em terapias florais. 10 anos de prática clínica e pesquisa em essências florais.',
        specialties: ['Medicina Integrativa', 'Pesquisa Floral']
      }
    ],
    faqs: [
      {
        id: 'faq_1',
        question: 'Preciso ter formação prévia para fazer este curso?',
        answer: 'Não é necessário ter formação prévia em terapias. O curso é desenvolvido do básico ao avançado, permitindo que iniciantes aprendam desde os fundamentos até técnicas avançadas de prescrição floral.'
      },
      {
        id: 'faq_2',
        question: 'O certificado é reconhecido pelo MEC?',
        answer: 'Sim, nosso certificado de Extensão é reconhecido pelo MEC e válido em todo território nacional, habilitando você para atuar profissionalmente como terapeuta floral.'
      },
      {
        id: 'faq_3',
        question: 'Como funcionam as aulas online?',
        answer: 'As aulas são ao vivo via plataforma de videoconferência, com possibilidade de interação em tempo real com professores e colegas. Todas as aulas ficam gravadas para revisão.'
      },
      {
        id: 'faq_4',
        question: 'Qual é a carga horária do curso?',
        answer: 'O curso possui 120 horas distribuídas em aulas teóricas, práticas supervisionadas e atividades complementares ao longo de 6 meses.'
      }
    ],
    status: 'published',
    seoTitle: 'Curso de Florais de Bach - Formação Completa Online',
    seoDescription: 'Formação completa em Terapia Floral pelo Sistema Bach. Certificado reconhecido pelo MEC. Aprenda online com os melhores professores.',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
    students: 2500,
  },
  {
    id: 'course_2',
    title: 'Psicobiosofia®',
    slug: 'psicobiosofia',
    summary: 'Metodologia exclusiva que integra psicologia, biologia e filosofia para o autoconhecimento e transformação pessoal profunda.',
    category: 'Metodologia Exclusiva',
    duration: '200h',
    modality: 'Híbrido',
    certification: 'Pós',
    investment: 'R$ 4.997,00',
    startDates: ['2024-06-01', '2024-09-01'],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    content: `Metodologia exclusiva que integra psicologia, biologia e filosofia para o autoconhecimento e transformação pessoal profunda. Uma pós-graduação completa para terapeutas e profissionais da saúde.

### Para quem é este curso

Destinado a terapeutas que buscam aprofundamento teórico-prático, psicólogos interessados em abordagens integrativas, profissionais da saúde em busca de visão holística e pesquisadores em terapias complementares.`,
    modules: [
      {
        id: 'mod_1',
        title: 'Fundamentos da Psicobiosofia®',
        topics: [
          'História e desenvolvimento da metodologia',
          'Os três pilares: Psicologia, Biologia e Filosofia',
          'Visão integral do ser humano',
          'Bases epistemológicas'
        ]
      },
      {
        id: 'mod_2',
        title: 'Psicologia Profunda',
        topics: [
          'Estruturas psíquicas',
          'Inconsciente e consciência',
          'Processos de transformação pessoal',
          'Psicoterapia integrativa'
        ]
      },
      {
        id: 'mod_3',
        title: 'Biologia da Consciência',
        topics: [
          'Neurociência e mente',
          'Epigenética e saúde',
          'Corpo como expressão da consciência',
          'Psiconeuroimunologia'
        ]
      },
      {
        id: 'mod_4',
        title: 'Filosofia do Ser',
        topics: [
          'Existencialismo e propósito',
          'Ética e valores humanos',
          'Espiritualidade e transcendência',
          'Fenomenologia aplicada'
        ]
      },
      {
        id: 'mod_5',
        title: 'Prática Clínica Integrativa',
        topics: [
          'Técnicas terapêuticas avançadas',
          'Estudo de casos clínicos',
          'Supervisão clínica',
          'Trabalho de conclusão'
        ]
      }
    ],
    teachers: [
      {
        id: 'teacher_1',
        name: 'Dra. Martha Mendes',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
        role: 'Fundadora e Coordenadora',
        bio: 'Doutora em Psicologia, especialista em Terapias Integrativas com mais de 20 anos de experiência. Criadora da metodologia Psicobiosofia®.',
        specialties: ['Psicologia', 'Terapias Integrativas', 'Psicobiosofia®']
      },
      {
        id: 'teacher_2',
        name: 'Prof. Carlos Silva',
        photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
        role: 'Professor Associado',
        bio: 'Mestre em Filosofia e especialista em Bioética. Atua há 15 anos na formação de terapeutas holísticos e profissionais de saúde integrativa.',
        specialties: ['Filosofia', 'Bioética', 'Fenomenologia']
      },
      {
        id: 'teacher_3',
        name: 'Dra. Ana Costa',
        photo: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
        role: 'Professora Visitante',
        bio: 'Doutora em Neurociências com especialização em Medicina Integrativa. Pesquisadora nas áreas de consciência e neuroplasticidade.',
        specialties: ['Neurociências', 'Medicina Integrativa', 'Neuroplasticidade']
      }
    ],
    faqs: [
      {
        id: 'faq_1',
        question: 'Preciso ter formação prévia para fazer este curso?',
        answer: 'Para a Pós-Graduação em Psicobiosofia®, é recomendado ter formação superior completa em áreas da saúde, educação ou terapias. Avaliamos cada candidatura individualmente.'
      },
      {
        id: 'faq_2',
        question: 'O certificado é reconhecido pelo MEC?',
        answer: 'Sim, nossos cursos de Pós são reconhecidos pelo MEC e seguem todas as diretrizes e normas estabelecidas para a formação em terapias integrativas.'
      },
      {
        id: 'faq_3',
        question: 'Qual é a carga horária do curso?',
        answer: 'O curso tem duração de 200h, distribuídos em aulas teóricas, práticas supervisionadas e atividades complementares. A carga horária é compatível com as exigências do MEC.'
      },
      {
        id: 'faq_4',
        question: 'Há possibilidade de parcelamento?',
        answer: 'Sim, oferecemos condições facilitadas de pagamento em até 12x sem juros. Entre em contato com nossa equipe para conhecer todas as opções disponíveis.'
      },
      {
        id: 'faq_5',
        question: 'O curso oferece estágio supervisionado?',
        answer: 'Sim, o curso inclui carga horária de estágio supervisionado onde os alunos poderão aplicar os conhecimentos adquiridos sob orientação de profissionais experientes.'
      }
    ],
    status: 'published',
    seoTitle: 'Psicobiosofia® - Pós-Graduação em Terapias Integrativas',
    seoDescription: 'Pós-Graduação em Psicobiosofia®. Metodologia exclusiva que integra psicologia, biologia e filosofia. Reconhecido pelo MEC.',
    createdAt: '2024-01-05T00:00:00.000Z',
    updatedAt: '2024-01-05T00:00:00.000Z',
    students: 1800,
  },
  {
    id: 'course_3',
    title: 'Hipnose e Regressão',
    slug: 'hipnose-e-regressao',
    summary: 'Técnicas avançadas de hipnose clínica, terapia regressiva e ericsoniana para transformação profunda do inconsciente.',
    category: 'Terapia Regressiva',
    duration: '160h',
    modality: 'EAD',
    certification: 'Extensão',
    investment: 'R$ 2.497,00',
    startDates: ['2024-05-20', '2024-07-15', '2024-09-10'],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop',
    content: `Formação avançada em hipnose clínica e terapia regressiva. Curso destinado a psicólogos, psicoterapeutas, terapeutas holísticos experientes e profissionais da saúde mental.

### Para quem é este curso

Ideal para psicólogos e psicoterapeutas, terapeutas holísticos experientes, profissionais da saúde mental e terapeutas em busca de especialização em técnicas de hipnose e regressão.`,
    modules: [
      {
        id: 'mod_1',
        title: 'Fundamentos da Hipnose',
        topics: [
          'História e evolução da hipnose',
          'Estados de consciência',
          'Técnicas de indução hipnótica',
          'Fenômenos hipnóticos'
        ]
      },
      {
        id: 'mod_2',
        title: 'Hipnose Ericksoniana',
        topics: [
          'Técnicas de Milton Erickson',
          'Linguagem hipnótica avançada',
          'Metáforas terapêuticas',
          'Padrões de linguagem'
        ]
      },
      {
        id: 'mod_3',
        title: 'Terapia Regressiva',
        topics: [
          'Regressão a causas de sintomas',
          'Linha do tempo terapêutica',
          'Ressignificação de traumas',
          'Técnicas de ancoragem'
        ]
      },
      {
        id: 'mod_4',
        title: 'Prática Clínica',
        topics: [
          'Protocolos de atendimento',
          'Ética profissional em hipnose',
          'Supervisão e prática',
          'Casos clínicos'
        ]
      }
    ],
    teachers: [
      {
        id: 'teacher_1',
        name: 'Dr. Carlos Eduardo',
        photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
        role: 'Coordenador do Curso',
        bio: 'Hipnoterapeuta com 20 anos de experiência clínica. Especialista em Hipnose Ericksoniana e formação de hipnoterapeutas.',
        specialties: ['Hipnose Clínica', 'Hipnose Ericksoniana', 'Terapia Regressiva']
      },
      {
        id: 'teacher_2',
        name: 'Dra. Maria Santos',
        photo: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
        role: 'Professora Associada',
        bio: 'Psicóloga especializada em hipnose clínica e terapia cognitivo-comportamental. 12 anos de experiência em atendimento e formação.',
        specialties: ['Psicologia Clínica', 'Hipnose', 'TCC']
      }
    ],
    faqs: [
      {
        id: 'faq_1',
        question: 'É seguro praticar hipnose?',
        answer: 'Sim, quando realizada por profissionais qualificados e dentro de contextos terapêuticos adequados, a hipnose é totalmente segura e uma ferramenta poderosa para transformação.'
      },
      {
        id: 'faq_2',
        question: 'Preciso ser psicólogo para fazer o curso?',
        answer: 'Não é obrigatório, mas é recomendada experiência prévia em atendimento terapêutico ou formação em áreas relacionadas à saúde mental.'
      },
      {
        id: 'faq_3',
        question: 'Qual é a carga horária do curso?',
        answer: 'O curso possui 160 horas distribuídas em aulas teóricas e práticas supervisionadas ao longo de 8 meses.'
      },
      {
        id: 'faq_4',
        question: 'O curso oferece certificado?',
        answer: 'Sim, o curso oferece Certificado de Extensão reconhecido pelo MEC, válido em todo território nacional.'
      }
    ],
    status: 'published',
    seoTitle: 'Curso de Hipnose e Regressão - Formação Online',
    seoDescription: 'Formação avançada em Hipnose Clínica e Terapia Regressiva. Técnicas ericksonianas. Certificado MEC.',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
    students: 3200,
  },
];
