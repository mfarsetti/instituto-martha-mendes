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
    content: `# Florais de Bach - Formação Completa

## Para quem é este curso

- Terapeutas holísticos iniciantes ou experientes
- Psicólogos e profissionais da saúde mental
- Profissionais de saúde em geral
- Pessoas em busca de autoconhecimento e desenvolvimento pessoal

## Conteúdo Programático

### Módulo 1 - Fundamentos
- História e filosofia do Dr. Edward Bach
- Os 7 grupos emocionais
- Princípios da terapia floral

### Módulo 2 - As 38 Essências
- Estudo detalhado de cada essência
- Indicações e contraindicações
- Diferenciação entre essências similares

### Módulo 3 - Diagnóstico
- Técnicas de anamnese
- Identificação de estados emocionais
- Estudos de caso

### Módulo 4 - Prescrição e Prática
- Preparação de fórmulas
- Dosagem e posologia
- Ética profissional
- Atendimento na prática

## Corpo Docente

**Profª Ana Costa** - Terapeuta Floral Senior com 15 anos de experiência.

## Certificação

Certificado de Extensão reconhecido pelo MEC, válido em todo território nacional.

## Perguntas Frequentes

**Preciso ter formação prévia?**
Não é necessário ter formação prévia em terapias. O curso é desenvolvido do básico ao avançado.

**O certificado é reconhecido?**
Sim, nosso certificado é reconhecido pelo MEC e válido em todo território nacional.

**Como funcionam as aulas online?**
As aulas são ao vivo via plataforma de videoconferência, com possibilidade de interação em tempo real.`,
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
    content: `# Psicobiosofia® - Pós-Graduação

## Para quem é este curso

- Terapeutas que buscam aprofundamento teórico-prático
- Psicólogos interessados em abordagens integrativas
- Profissionais da saúde em busca de visão holística
- Pesquisadores em terapias complementares

## Conteúdo Programático

### Módulo 1 - Fundamentos da Psicobiosofia®
- História e desenvolvimento da metodologia
- Os três pilares: Psicologia, Biologia e Filosofia
- Visão integral do ser humano

### Módulo 2 - Psicologia Profunda
- Estruturas psíquicas
- Inconsciente e consciência
- Processos de transformação

### Módulo 3 - Biologia da Consciência
- Neurociência e mente
- Epigenética e saúde
- Corpo como expressão da consciência

### Módulo 4 - Filosofia do Ser
- Existencialismo e propósito
- Ética e valores
- Espiritualidade e transcendência

### Módulo 5 - Prática Clínica
- Técnicas terapêuticas
- Estudo de casos
- Supervisão clínica

## Corpo Docente

**Dra. Martha Mendes** - Criadora da metodologia, com mais de 25 anos de experiência.

## Certificação

Pós-Graduação reconhecida pelo MEC.

## Perguntas Frequentes

**É necessário ter formação prévia?**
Sim, é recomendada formação em áreas da saúde ou terapias.

**Como funciona o formato híbrido?**
Parte das aulas são online ao vivo, com encontros presenciais intensivos trimestrais.`,
    status: 'published',
    seoTitle: 'Pós-Graduação em Psicobiosofia® - Metodologia Exclusiva',
    seoDescription: 'Pós-graduação que integra psicologia, biologia e filosofia. Metodologia exclusiva desenvolvida pela Dra. Martha Mendes. Certificado MEC.',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
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
    content: `# Hipnose e Regressão - Formação Avançada

## Para quem é este curso

- Psicólogos e psicoterapeutas
- Terapeutas holísticos experientes
- Profissionais da saúde mental
- Terapeutas em busca de especialização

## Conteúdo Programático

### Módulo 1 - Fundamentos da Hipnose
- História e evolução da hipnose
- Estados de consciência
- Indução hipnótica

### Módulo 2 - Hipnose Ericksoniana
- Técnicas de Milton Erickson
- Linguagem hipnótica
- Metáforas terapêuticas

### Módulo 3 - Terapia Regressiva
- Regressão a causas
- Linha do tempo
- Ressignificação de traumas

### Módulo 4 - Prática Clínica
- Protocolos de atendimento
- Ética profissional
- Supervisão e prática

## Corpo Docente

**Dr. Carlos Eduardo** - Hipnoterapeuta com 20 anos de experiência clínica.

## Certificação

Certificado de Extensão reconhecido pelo MEC.

## Perguntas Frequentes

**É seguro praticar hipnose?**
Sim, quando realizada por profissionais qualificados, a hipnose é totalmente segura.

**Preciso ser psicólogo?**
Não é obrigatório, mas é recomendada experiência prévia em atendimento terapêutico.`,
    status: 'published',
    seoTitle: 'Curso de Hipnose e Regressão - Formação Online',
    seoDescription: 'Formação avançada em Hipnose Clínica e Terapia Regressiva. Técnicas ericksonianas. Certificado MEC.',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
    students: 3200,
  },
];
