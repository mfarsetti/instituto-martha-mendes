import type { Post, Course } from "../types";

const enriquecaImg =
  "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1600&h=900&fit=crop&auto=format";
const floraisImg =
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1600&h=900&fit=crop&auto=format";
const psicobiosofiaImg =
  "https://images.unsplash.com/photo-1532153259564-a5f24f261f51?w=1600&h=900&fit=crop&auto=format";
const psicoeducacaoImg =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=900&fit=crop&auto=format";

const floraisBachBlogImg =
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600&h=900&fit=crop&auto=format";
const encontroSagradoImg =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&h=900&fit=crop&auto=format";
const psicofobiaImg =
  "https://images.unsplash.com/photo-1520637836862-4d197d17c7a2?w=1600&h=900&fit=crop&auto=format";
const raioDeLuzImg =
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1600&h=900&fit=crop&auto=format";
const tvpImg =
  "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=1600&h=900&fit=crop&auto=format";
const reikiBlogImg =
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=1600&h=900&fit=crop&auto=format";

export const seedPosts: Post[] = [
  {
    id: 'post_1',
    title: 'Encontro com o Sagrado',
    slug: 'encontro-com-o-sagrado',
    summary: 'Reflexão sobre autoconhecimento, fé e o despertar do sagrado interior — além de crenças religiosas — como caminho de transformação e realização.',
    image: encontroSagradoImg,
    tags: ['Autoconhecimento', 'Espiritualidade', 'Consciência'],
    content: `# Encontro com o Sagrado

**Por Martha Mendes**

> A gente arruma os cabelos todos os dias; por que não o coração?  
> *Provérbio chinês.*

Todos os dias pela manhã recebemos informações sobre autoajuda vindas de diversos meios de comunicação: através da leitura de um livro, de um programa de televisão, de um programa na rádio, de uma matéria lida na internet ou no jornal, de revistas, de conversas corriqueiras etc. Entretanto, apegamo-nos a repetições que geralmente não condizem com a nossa crença.

O sistema de crenças é tão enraizado que não nos damos conta de que ele existe e passamos a repetir frases feitas de maneira automática, acreditando que isso irá mudar a nossa vida. Mas nada muda, tudo continua igual.

Certa vez, um cliente questionou o porquê de isso acontecer. Relatou ter lido diversos livros de autoajuda, posto em prática todas as técnicas possíveis, assistido a vários filmes e a contribuição disso tudo foi ter se tornado uma pessoa ainda mais insatisfeita.

É importante esclarecer que os livros de autoajuda são ferramentas magníficas, quando se sabe exatamente qual o sujeito a que se destinam. Mas como ajudar alguém que não se conhece?

O autoconhecimento deve anteceder a autoajuda. Dessa forma, é possível conhecer as necessidades, as habilidades, os desejos e as dificuldades de quem precisa ser ajudado. Só assim a autoajuda faz sentido.

Conhecer-se é despertar o sagrado que há dentro de si. E o sagrado independe de crenças religiosas. O despertar do sagrado é a fé que se traduz em confiança em si e no fluxo da vida. Quanto maior for a disponibilidade de olhar para dentro, mais eficazes tornam-se as habilidades divinas impressas no Ser.

Os pensamentos, as emoções e as sensações influenciam as células do corpo e agem diretamente na formação das crenças, que respondem a qualquer comando contrário.

Sufocados, viciados por velhos padrões e velhas crenças, nos colocamos como vítimas de nossas próprias armadilhas. Vivemos em guerra com as informações que obtemos e com medo do desconhecido. Geralmente, vivemos uma dicotomia: contradição e ambiguidade. Um exemplo disso é a vontade de se afastar das pessoas e viver isoladamente, mas temer a solidão.

Quanto mais reviramos arquivos sem olhar de fato para o que já está lá, mais amarras criamos. E isso favorece a vontade de desistir.

Entretanto, a consciência solicita que “arrumemos” o coração, onde o verdadeiro EU habita. O coração é o primeiro órgão do corpo humano a ser formado e é nele que se encontram as mensagens para esta encarnação. “Arrumar” o coração e contactar o sagrado é aproveitar a existência sem desperdícios. E, na medida em que nos permitimos conhecer, possibilita-se ao indivíduo que nos coloca frente ao sagrado, onde a vida é plena.

O sentido do sagrado na vida possibilita e potencializa a renovação, a transformação e a realização. Em algum momento, o autoconhecimento e a autotranscendência nos convidam para conhecer o desconhecido (o inconsciente) e buscar novos horizontes… Esse é o processo de evolução espiritual.

## Como iniciar um processo de autoconhecimento?

Simples: comece por observar-se quando for contrariado. Como reage? Quais são os pensamentos, emoções e sensações no momento? Que impressão você tem da situação? Sua reação é proporcional ao fato?

Coloque-se como observador de si e perceberá que vários “EUS” habitam dentro de você. Conhecer, harmonizar e integrar as diversas energias (subpersonalidades) favorece o autoconhecimento, o encontro com seu EU divino e o caminho para a felicidade.

O que você entende por felicidade?

## Sobre a autora

Martha Mendes é educadora, pós-graduada em Psicossomática e Psicobiofísica, Psicanalista Clínica, especialista em Florais de Bach, Terapia Regressiva, Hipnose Clínica e Ericksoniana. Mestre em Bioeletrografia pela IUMAB (International Union of Medical and Applied Bioelectrography in Brazil), presidente do II e VII Congresso de Hipnoterapia e Terapia Regressiva (São Paulo – SP, 2010 e 2019). Membro certificado pela EARTH (European Association for Regression Therapy), autora da filosofia/metodologia Psicobiosofia® e escritora.`,
    status: 'published',
    publishedAt: '2026-02-21T00:00:00.000Z',
    createdAt: '2026-02-21T00:00:00.000Z',
    updatedAt: '2026-02-21T00:00:00.000Z',
    author: 'Martha Mendes',
    readTime: '7 min',
  },
  {
    id: 'post_2',
    title: 'Florais de Bach, um recurso na psicoterapia',
    slug: 'florais-de-bach-um-recurso-na-psicoterapia',
    summary: 'Uma visão clínica sobre a atuação dos Florais de Bach no processo psicoterapêutico, a partir do princípio de ressonância, recuperação da força vital e integração de subpersonalidades.',
    image: floraisBachBlogImg,
    tags: ['Florais de Bach', 'Psicoterapia', 'Terapias Integrativas'],
    content: `# Florais de Bach, um recurso na psicoterapia

**Por Martha Mendes**

> “Não é necessário brigar com o que somos, mas sim desenvolver virtudes opostas.”  
> *Dr. Edward Bach*

Minha hipótese de trabalho é baseada no poder de ressonância existente entre as essências florais e o ser humano no sistema de energias de ambos.

Em 1997, quando fotografei as essências dos florais do Dr. Bach (bioeletrografia), fiquei maravilhada ao constatar a energia vital impressa em cada gota, energias semelhantes às nossas (yin, yang, ki — força vital), também constatadas pelo mesmo sistema fotográfico, reconhecido cientificamente na Rússia.

Desde a realização das fotos, passei a pesquisar a atuação das essências florais no processo terapêutico.

As essências florais de Bach (objeto da minha pesquisa) atuam na recuperação da força vital, promovendo a homeostasia, que favorece a reconciliação das subpersonalidades (cápsulas de energias poderosas, muitas vezes confundidas com obsessão espiritual) que habitam em nossa consciência, gerando a “força” necessária para despertar o curador interno. O floral, quando empregado adequadamente, possibilita ao cliente e ao terapeuta entender a origem do desequilíbrio.

As memórias (tanto de cunho extracerebral como de corpo astral-emocional) de vivências passadas, genético-ancestrais e espirituais são transportadas do inconsciente para o consciente por meio de sensações/impressões e sonhos. As sensações/impressões são uma ampliação da consciência, geradas por vários fatores como a mediunidade, os traumas de vida atual, da vida intrauterina, de intravida e seculares.

Os sonhos são resultado de conteúdos das várias almas (existências, personagens vividos, padrões) e pode-se dizer que é uma atuação do espírito enquanto se dorme.

Ao longo do tempo, mediante relatos de clientes em meu consultório, pude observar que no sono REM (em que acontece o movimento rápido dos olhos e há intensa atividade cerebral, como se a pessoa estivesse acordada, mas com tônus muscular diminuído), havia a sensação de estar vivendo aquele sonho de maneira tão lúcida, com carga emocional tão intensa, que comecei a explorar aspectos como pensamentos, sentimentos, emoções e sensações. Isso tudo, além de tempos remotos, lugares desconhecidos, pessoas desconhecidas, mas ao mesmo tempo habituais, condutas parecidas em contextos diferentes, fazia muito sentido na busca pela origem do desequilíbrio. Passamos, assim, a explorar com mais intensidade e a adequar o floral às necessidades expressas durante o sono.

O sono do meu cliente, no processo terapêutico, é de suma importância. Sem um sono tranquilo, não há como recuperar a energia vital empregada nas atividades diárias. Durante o sono, há atividades fisiológicas, produção de hormônios e de outras substâncias químicas necessárias para a manutenção do corpo humano, merecendo, portanto, atenção especial. Sendo assim, é necessário que o cliente durma bem.

Quando isso não acontece, ficamos como uma flor murcha: sem vitalidade (veja as bioeletrografias abaixo, no final). Aproveitamos o sono para trazer à consciência memórias necessárias para o processo de autocura/transformação. Brinco assim com meu cliente: enquanto ele dorme, trabalha por si mesmo.

Buscamos (sim, buscamos, é uma parceria) nos conteúdos oníricos, informações sobre as necessidades de sua alma, as dificuldades, tendências e intolerâncias que se repetem. O cliente identifica aquelas forças (subpersonalidades) como grandes aliadas em seu processo de autocura.

Muitas pessoas encontram dificuldades nas relações pessoais, familiares, afetivas, profissionais e espirituais por estarem “espalhadas” (até mesmo dissociadas) e não conseguem fazer a síntese de suas energias (forças), algo muito comum nas pessoas que sofrem algum tipo de trauma ou possuem um grau de percepção ampliada e não refinada.

Os florais contribuem levando luz para que, no processo terapêutico, haja uma desidentificação com a parte que está em conflito (na sombra). Os florais de Bach são gotas de luz que adentram a escuridão da alma; sem o direcionamento psicoterapêutico, a transformação, ou seja, o desenvolvimento das virtudes opostas, segundo Dr. Bach, pode ficar comprometido.

Conhecer-se tem o propósito de transformar aquilo que não é mais necessário e focar nas habilidades conquistadas ao longo dos tempos.

## Bioeletrografias de humanos e das essências Florais de Bach

*(imagens/figuras a inserir)*

## Sobre a autora

Martha Mendes é educadora, pós-graduada em Psicossomática e Psicobiofísica, Psicanalista Clínica, especialista em Florais de Bach, Terapia Regressiva, Hipnose Clínica e Ericksoniana. Mestre em Bioeletrografia pela IUMAB (International Union of Medical and Applied Bioelectrography in Brazil), presidente do II e VII Congresso de Hipnoterapia e Terapia Regressiva (São Paulo – SP, 2010 e 2019). Membro certificado pela EARTH (European Association for Regression Therapy), autora da filosofia/metodologia Psicobiosofia® e escritora.`,
    status: 'published',
    publishedAt: '2026-02-21T00:00:00.000Z',
    createdAt: '2026-02-21T00:00:00.000Z',
    updatedAt: '2026-02-21T00:00:00.000Z',
    author: 'Martha Mendes',
    readTime: '9 min',
  },
  {
    id: 'post_3',
    title: 'Psicobiosofia: Na era de uma verdadeira revolução espiritual e científica',
    slug: 'psicobiosofia-na-era-de-uma-verdadeira-revolucao-espiritual-e-cientifica',
    summary: 'Uma reflexão sobre autocura, filosofia e ciência diante de uma revolução espiritual e científica, convidando o leitor ao autoconhecimento e à responsabilidade sobre a própria verdade.',
    image: psicofobiaImg,
    tags: ['Psicobiosofia', 'Autoconhecimento', 'Filosofia'],
    content: `# Psicobiosofia: Na era de uma verdadeira revolução espiritual e científica

**Por Martha Mendes**

É provável que o leitor amigo estranhe o título deste trabalho.

A filosofia faz parte do processo de autocura. Estamos condicionados a ver, tocar e mensurar o conhecimento, mesmo porque a ciência é epistemológica. A era em que estamos vivendo é de verdadeira revolução científica e espiritual. Nada pode ser ignorado. Tudo deve ser, no mínimo, observado. O novo sempre causa impacto e é muitas vezes refutado pela falta de dados consistentes.

> “O dia em que a ciência começar a estudar os fenômenos não físicos, fará mais progressos numa década do que em todos os séculos anteriores.”  
> *Nikola Tesla.*

Voltando no tempo, podemos observar que grandes filósofos e cientistas foram, muitas vezes, ridicularizados para posteriormente serem considerados verdadeiros pilares no processo de desenvolvimento das ciências biopsicossocial e espiritual. Todos experimentaram, de certa forma, a rejeição de suas ideias por serem consideradas empíricas. Filósofos e cientistas adentram o mundo das ideias, insights, descobertas e invenções pela arte de raciocinar, pela capacidade de análise e de síntese. Eles buscam a verdade! E o que é verdade?

Meu espírito é movido pela pesquisa. Sempre busquei respostas para a existência e as dificuldades que nós, seres humanos, encontramos em Ser.

Busquei na filosofia, na biologia, na psicologia e nas religiões informações que pudessem elucidar minhas dúvidas. Percebi que a verdade é aquilo em que acreditamos, com o complexo psicobiofísico. Talvez essa seja uma crença inadequada, mas é a minha verdade pessoal.

Algumas ciências tentam anular a existência de uma força maior, outras a colocam como tirânica, outras, ainda, como salvadora. Creio numa força maior que nos permite a vida, o intelecto, a emoção, a razão, a percepção e, também, a responsabilidade com o ser humano e com o universo. Não fomos jogados ao acaso num planeta maravilhoso, de uma natureza inenarrável, sem eira nem beira e com todas as ferramentas ‘psicobiofísico e espirituais’. Decididamente, não somos vítimas do acaso.

A reflexão permite ao curador pessoal despertar alguns questionamentos: De que maneira nos relacionamos com o mundo nos diferentes aspectos de nossas vidas? Quais são nossas crenças, nossas verdades? Essas crenças nos limitam ou nos liberta?

A diversidade de situações no processo de vida e dos diferentes selfs nos coloca diante de vivências que podem ser percebidas como castigo ou como bênção do aprendizado. A verdade é a percepção pessoal.

A compreensão dessa verdade faz com que encontremos momentos especiais de aprendizado e de amadurecimento, nos permitindo entrar no mundo das ideias dos filósofos e dos cientistas. O saber de si e da energia gerada pela condição mental e emocional é ferramenta imprescindível para sairmos da condição de vítimas e nos posicionarmos como aprendizes.

Estamos acostumados a ter uma visão somente do que acontece exteriormente, dificultando o processo de autocura. Poder observar o que acontece em nosso íntimo, em nosso ser, em nossa química, nos possibilita a condição para a imutável verdade de Sócrates: “Conhece-te e cura-te.”

Todo processo de autocura necessita de coragem e de ousadia. Identificar habilidades e limitações nos dá as rédeas de nossas vidas. Encontrar em nós a “semente divina” desperta Chiron, o arquétipo do curador. O autoconhecimento nos leva até o ponto de diferenciação, até o equilíbrio do “eu” e do “não eu”, do “ser” e do “estar”.

Quando assumimos a responsabilidade sobre nós mesmos, praticamos a verdadeira alquimia, que abre o caminho para a energia psíquica fluir naturalmente e modificar os humores que agem de maneira inteligente em todo o Ser. Adentrar ao mundo das ideias requer uma química harmônica.

A Bioeletrografia nos auxilia na observação da energia que geramos por nossas verdades e que, muitas vezes, entram em conflito com nosso modo de nos relacionar com o mundo. Os conflitos geram uma desorganização ‘psicobiofísico e espiritual’, resultando na somatização de diversas doenças.

Ter uma vida saudável é um convide da própria alma.

Reflita!

## Sobre a autora

Martha Mendes é educadora, pós-graduada em Psicossomática e Psicobiofísica, Psicanalista Clínica, especialista em Florais de Bach, Terapia Regressiva, Hipnose Clínica e Ericksoniana. Mestre em Bioeletrografia pela IUMAB (International Union of Medical and Applied Bioelectrography in Brazil), presidente do II e VII Congresso de Hipnoterapia e Terapia Regressiva (São Paulo – SP, 2010 e 2019). Membro certificado pela EARTH (European Association for Regression Therapy), autora da filosofia/metodologia Psicobiosofia® e escritora.`,
    status: 'published',
    publishedAt: '2026-02-21T00:00:00.000Z',
    createdAt: '2026-02-21T00:00:00.000Z',
    updatedAt: '2026-02-21T00:00:00.000Z',
    author: 'Martha Mendes',
    readTime: '6 min',
  },
  {
    id: 'post_4',
    title: 'Psicobiosofia — Raios de Luz (Parte I)',
    slug: 'psicobiosofia-raios-de-luz-parte-i',
    summary: 'Uma reflexão sobre ancestralidade, força raiz e a “semente divina”, convidando a integrar as múltiplas energias que habitam em nós e escolher viver com potência e consciência.',
    image: raioDeLuzImg,
    tags: ['Psicobiosofia', 'Ancestralidade', 'Autoconhecimento'],
    content: `# Psicobiosofia — Raios de Luz (Parte I)

**Por Martha Mendes**

No processo evolutivo da alma, muitas energias são mobilizadas, uma delas é a energia ancestral, a força raiz, ou seja, para estar aqui fisicamente dois seres magníficos se uniram e num ato de amor uma célula começou a tomar forma. Esses dois seres vieram da união de dois outros, que vieram de mais dois e assim formando uma arvore grande, frondosa com raízes muito fortes. Podemos chamar a célula que se formou de semente divina, que germina, cria raízes, tronco, folhas e frutos que naturalmente embelezam com cores, perfumes e sabores a existência.

Muito bem!… Já pensou quanta gente mora dentro de você?

Quantos seres já vividos em diferentes tempos e espaços?

Por conta da decisão deles hoje você está aqui.

Agora imagine quanta energia existe aí dentro…

O segredo agora é administrar esses condomínios, consciente de que a união faz a força. E que força!!!

Você já ouviu falar de genealogia? A genealogia é a ciência que estuda a origem, a disseminação, a evolução da família. Família é um grande laboratório. É nela que aprendemos valores, convivência, respeito, limites, amor e tantas outras coisas, até mesmo o que não devemos fazer.

Certa vez, um cliente começou a queixar-se demasiadamente sobre seus pais, que isso, aquilo… eu o ouvia atentamente. Após suas queixas, disse-lhe: Que injustiça, não é mesmo?! Com tantas famílias no universo, você foi nascer justamente nessa. Deve existir um motivo muito forte para que isso tenha lhe acontecido não é mesmo? Ficou a olhar-me com espanto… então eu lhe disse o que será que tem nesse núcleo familiar que você precisa aprender e a superar?

Qual é o sentido de família pra você? O que você pode aprender com seus familiares, o que pode ensinar à eles, o que podem compartilhar e construir?

Geralmente se dá conta da ancestralidade quando numa consulta médica tem-se a tradicional pergunta: alguém em sua família é portador disso ou aquilo? Será que só se herda doenças?

Seus antepassados, suas forças, estão esperando você desvendar a sua história. E nela descobrir “Eus maravilhosos”.

Então, os raios de luz da Psicobiosofia vão abrindo as trilhas para que, com um único propósito, os moradores do condomínio, chamado você, possam certificar a sua evolução.

Divino não é mesmo?!

A união dessas forças dá a sustentação necessária à vida no corpo… o templo de sua alma.

Você não herdou doenças como na maioria das vezes, olha para trás e procura. Você herdou força, coragem, determinação, criatividade e muitas habilidades.

Você tem uma linhagem divina.

Partindo do princípio de que o tempo não existe, as ondas de sua consciência acessam os universos paralelos onde cada parte dessa energia continua viva e atuante.

A energia ancestral não é consciente, é uma energia estrutural.

No corpo físico existem espirais de energia, são microespirais… elas são extremamente importantes… no núcleo dessas espirais alojam-se os genes… eles são os mensageiros que transportam as informações de uma geração à outra, essas informações determinam as suas características como cor de pele, cabelos, olhos, altura, sexo e tantas outras…. Na verdade, eles são os engenheiros do templo da alma.

Sinta, perceba quão magnífico você é!!!!

Existe no corpo físico um ponto entre os rins onde é ancorada a energia ancestral… leve sua atenção até lá… na medicina tradicional chinesa, é chamado de Ming Men… São as suprarrenais. É o portão da vitalidade, aí reside um cabedal de energia para realização, manifestação, sinta… perceba em você a força, a sua capacidade de realizar, de ir em busca daquilo que deseja.

Quando se olha para aquilo que é belo, sente-se o belo, percebe-se o belo, no sentido amplo da palavra você acaba por gerar um êxtase que o coloca num estado pleno e integral de gratidão, faz o religare com o transcendental, com a força do seu EU SUPERIOR. O seu estado de Divindade.

Esse estado amplia o Ser experimentado a felicidade e faz o resgate secular de seu saber.

A consciência necessita, convida, solicita para que se arrume o coração. Lá habita o conhecimento do EU. O coração, como falamos há pouco, é o primeiro órgão a ser formado e nele se encontram suas mensagens para esta encarnação. “Arrumar” o coração, contatar o sagrado que existe lá, é aproveitar a existência, sem desperdícios. E à medida que vamos nos conhecendo, vai se tornando possível o “indivíduo” que nos coloca frente ao sagrado, onde a vida se torna plena.

Então, pense em algo que deseja realizar, construir com a sua bagagem, com aquilo que você já aprendeu… Talvez um estudo, quem sabe um trabalho, ou até mesmo uma condição emocional/espiritual que lhe traga satisfação… SIM, pense nisso agora… Veja o que pensa… Como sente o que pensa… perceba a sensação que o pensamento gerou, um sentimento/emoção se manifesta em você… imagine isso acontecendo de forma alegre, dinâmica… Einstein disse: a imaginação é mais importante do que o conhecimento… Imaginação é imagem em ação, é dar vida à imagem.

Substitua o “não consigo” por eu posso.

Participe da vida com toda sua potência!

Escolha ser quem você nasceu para Ser!

## Sobre a autora

Martha Mendes é educadora, pós-graduada em Psicossomática e Psicobiofísica, Psicanalista Clínica, especialista em Florais de Bach, Terapia Regressiva, Hipnose Clínica e Ericksoniana. Mestre em Bioeletrografia pela IUMAB (International Union of Medical and Applied Bioelectrography in Brazil), presidente do II e VII Congresso de Hipnoterapia e Terapia Regressiva (São Paulo – SP, 2010 e 2019). Membro certificado pela EARTH (European Association for Regression Therapy), autora da filosofia/metodologia Psicobiosofia® e escritora.`,
    status: 'published',
    publishedAt: '2026-02-21T00:00:00.000Z',
    createdAt: '2026-02-21T00:00:00.000Z',
    updatedAt: '2026-02-21T00:00:00.000Z',
    author: 'Martha Mendes',
    readTime: '8 min',
  },
  {
    id: 'post_5',
    title: 'Reiki: uma experiência de autolibertação',
    slug: 'reiki-uma-experiencia-de-autolibertacao',
    summary: 'Reiki como prática de amor, disciplina e autoconhecimento: uma energia que mobiliza e harmoniza, favorecendo autocura, dignidade e transformação interior.',
    image: reikiBlogImg,
    tags: ['Reiki', 'Autoconhecimento', 'Terapias Integrativas'],
    content: `# Reiki: uma experiência de autolibertação

**Por Martha Mendes**

O Reiki é uma técnica que está muito além da imposição de mãos, é muito mais amplo, é o verdadeiro exercício do amor e do autoconhecimento. É estar vinculado à disciplina e à responsabilidade consigo mesmo, vivenciando a autolibertação.

Dentro do que pude vivenciar no Reiki, ficou bastante claro para mim, tanto no campo pessoal quanto no campo terapêutico, que essa energia divina exerce influências profundas em nosso ser. Mobiliza todo o amálgama energético, promovendo a autocura que advém de informação e conhecimento, despertando em cada um a vontade de se autoconhecer. Sendo assim, o Reiki torna-se um estilo de vida.

Existem muitos mestres de Reiki no Brasil e no mundo com características peculiares, as quais entendo ser a verdade de cada um. Uma das maravilhas da consciência humana é a percepção diferenciada.

Quando iniciamos um percurso em direção ao autoconhecimento, muitas respostas são encontradas em nós mesmos, tornando-se o Reiki uma ferramenta valiosíssima nesse processo, pois nos permite fazer o resgate da própria capacidade de cura.

A mobilização do amálgama energético, a higienização e a harmonização da força dos elementos Terra, Ar, Água e Fogo promovem a transformação química no complexo glandular, modificando nosso humor. De acordo com Paracelso, o humor é o licor da vida. O que para Mikao Usui era a dignidade. Segundo Mikao, o homem adoece pela perda da dignidade (amor próprio, satisfação, realização).

Nossa mente é geradora de pensamentos que, consequentemente, geram emoções. Dependendo da qualidade dos pensamentos, geramos harmonia ou desequilíbrio em nossa saúde.

Muitas pessoas sentem-se diferentes após a iniciação em Reiki. Essa diferença se dá pela reorganização dos elementos, período em que se faz necessário o respeito e o carinho para consigo mesmo.

O Reiki não faz milagres em nossas vidas, ele é tão somente uma ferramenta para que cada um, no seu tempo, processe a própria dádiva da transformação para tornar-se um ser melhor a cada dia, vivenciando a autolibertação. Reiki-se!

## Livros

- *Reiki uma Experiência de Libertação*  
  Prefácio: Geraldo Medeiros Jr.  
  Lançamento: Bienal do Livro/2000 — SP

- *Reiki um Processo Alquímico*  
  Prefácio: Wagner Borges  
  Lançamento: Bienal do Livro/2002 — SP

## Sobre a autora

Martha Mendes é educadora, pós-graduada em Psicossomática e Psicobiofísica, Psicanalista Clínica, especialista em Florais de Bach, Terapia Regressiva, Hipnose Clínica e Ericksoniana. Mestre em Bioeletrografia pela IUMAB (International Union of Medical and Applied Bioelectrography in Brazil), presidente do II e VII Congresso de Hipnoterapia e Terapia Regressiva (São Paulo – SP, 2010 e 2019). Membro certificado pela EARTH (European Association for Regression Therapy), autora da filosofia/metodologia Psicobiosofia® e escritora.`,
    status: 'published',
    publishedAt: '2026-02-21T00:00:00.000Z',
    createdAt: '2026-02-21T00:00:00.000Z',
    updatedAt: '2026-02-21T00:00:00.000Z',
    author: 'Martha Mendes',
    readTime: '6 min',
  },
  {
    id: 'post_6',
    title: 'Terapia de Vivências Passadas: crença ou ciência?',
    slug: 'terapia-de-vivencias-passadas-crenca-ou-ciencia',
    summary: 'Uma leitura da Terapia de Vivências Passadas (TVP) a partir de Hipócrates, da hipnose como foco e autoconsciência, e do “curador interno” como recurso de ressignificação e autocura.',
    image: tvpImg,
    tags: ['Terapia Regressiva', 'Hipnose', 'Psicoterapia'],
    content: `# Terapia de Vivências Passadas: crença ou ciência?

**Por Martha Mendes**

Antes de entrar na questão da terapia regressiva, que responde à pergunta do título, vale pensar na frase de Mario Quintana: “O passado não reconhece o seu lugar: está sempre presente”.

As memórias, situações de imensa alegria ou de extremo desprazer, estão arquivadas e impressas em cada célula dos nossos corpos.

O cérebro consegue armazenar informações de toda uma existência e, dependendo da carga afetiva que produz, desencadeia uma ciranda bioquímica que altera o funcionamento do sistema corporal, levando o indivíduo do paraíso ao inferno, sendo o inverso também verdadeiro.

Dito isto e pensando nas informações que a história do passado nos revela, mais especificamente o legado do considerado Pai da Medicina — Hipócrates de Cós (ilha da Grécia Antiga onde médicos e terapeutas atuavam, atendendo personalizadamente o ser humano que adoeceu). Constatamos que já naquela época Hipócrates consagrou-se pela habilidade em usar sua sabedoria com amor, interessando-se pela dinâmica da vida de seus pacientes e procurando entender, com base na visão holística, como cada ser/paciente se posicionava diante de sua própria existência. Da observação dos diversos e peculiares sintomas nasceu então o conceito e exercício das clínicas multidisciplinares.

O desequilíbrio era visto sem crendices. Consciente da importância da espiritualidade, Hipócrates afirmou que o adoecer se dava pela desarmonia do indivíduo com o cosmo. Esta ordem de raciocínio/diagnóstico comprova a existência de um ruído desagregador entre o corpo e a alma humana.

A alma necessita de um corpo, via natural de evolução, para se manifestar e se autoaprimorar, independente da escolha religiosa que o indivíduo tenha.

Hipócrates direcionava seus conhecimentos de forma científica, e não supersticiosamente, entendendo os humores corporais (bioquímica) e a personalidade. “Tuas forças naturais, as quais estão em ti, serão as que curarão suas doenças”, afirmava ele.

Compreendendo os conceitos de Hipócrates, reporto-me às terapias regressivas, ou Terapias de Vida Passadas (TVP), tema desta matéria.

A hipnose, desde a antiguidade era considerada misteriosa e, provavelmente pela desinformação das pessoas, era uma forma de impor uma espécie de poder sobre o outro.

Hoje, graças aos estudos sobre a técnica, posso dizer que a hipnose é uma das formas mais assertivas de o indivíduo se conectar com a própria força.

A hipnose não é o sono profundo, pelo contrário, é estar desperto em um estado em que todos os seus sentidos trabalham em conjunto. É uma verdadeira equipe que trabalha para favorecer o próprio indivíduo.

O terapeuta que utiliza desse recurso deve ter em mente que a hipnose facilita o cliente a manter o foco de atenção, auxiliando-o a se concentrar em suas habilidades; habilidades essas que, futuramente, irão auxiliá-lo a encontrar a origem de suas dificuldades/desequilíbrios.

A hipnose não tira a consciência, ela é um dos recursos para a autoconsciência.

É importante que o profissional tenha conhecimentos de neuroanatomia funcional e transpessoal (estados modificados de consciência), o que lhe conferirá segurança em sua atuação.

Cada cliente é um universo sendo preciso estar munido de diferentes recursos para auxiliá-lo.

O terapeuta, como já indicava Hipócrates, precisa se informar sobre como o cliente participa efetivamente da vida, encontrando com ele a maior dificuldade. Através da hipnose (transe leve-médio), é possível acessar um arquivo com memórias onde a origem dessa dificuldade (o motivo que o levou até o consultório) possa ser encontrada e resignificada por ele com a consciência de suas habilidades internas. É a manifestação de seu “curador interno”.

E é simples explicar o “curador interno” se fizermos uma mera comparação com a tecnologia criada pela própria inteligência humana para a ciência da computação. Sabendo que existem nas máquinas as funções restart ou “reparar configurações”, pergunto então: “Como o corpo e a mente humana, máquinas perfeitas em sua concepção, não teriam como acessar essas funções?” Ora, mas é claro que elas têm essa permissão de acesso! São acessos realizados através do curador interno de cada ser-corpo e alma.

Durante a terapia regressiva, tudo é importante e carregado de conteúdo simbólico, independente do tempo em que esteja. O mais importante é o sentido que esse conteúdo tem na vida do Ser.

Estando o cliente rememorando sua adolescência, sua infância, sua vida intrauterina, um período entre vidas, outra vida, inimigos ou seres espirituais, nós, terapeutas, devemos respeitar e acolher essas memórias para serem trabalhadas na psicoterapia. O conteúdo é recheado de significados e, por consequência, de entendimentos, resultando em soluções para as mais inusitadas fontes de dor, desequilíbrios e doenças.

Desejo do corpo, aspiração da alma — esse é o conflito ao qual Hipócrates se referiu.

A terapia regressiva é um recurso da psicoterapia utilizado por profissionais habilitados, portanto, difere da terapia em si. Assim, é importante ressaltar que acessar conteúdos sem trabalhá-los é acentuar um desequilíbrio.

Sabemos que o ser humano tem capacidade e habilidade de lembrar-se de fatos há muito tempo vivenciados. A memória é um recurso cognitivo que utiliza os sentidos para armazenar as experiências de toda a existência.

A terapia regressiva favorece ao Ser/paciente recordar e vivenciar fatos (muitas vezes registrados distorcidamente), esgotando assim a tensão emocional desse núcleo de dor e dando um novo significado a ele. Trauma significa uma ferida aberta (dor emocional) infeccionada (carga afetiva intensa) que ao menor esbarro (gatilho) dói, levando a reações diversas e desproporcionais.

A terapia regressiva permite ao indivíduo higienizar sua ferida e curá-la com seus próprios recursos, recuperando a força despendida no momento traumático. Sendo um trauma uma ferida, produz alterações funcionais.

No cérebro existem as amigadas (arquivos de momentos traumáticos) que armazenam a emoção vivenciada e sinalizam o perigo, enviando mensagens de sobrevivência. Assim, todo o conjunto cerebral envolvido se mobiliza para a proteção, dificultando a interpretação do evento. Quando há um gatilho, a carga emocional é acionada (sem a lembrança do fato), perdendo a capacidade de diferenciar o perigo. A atividade elétrica do cérebro é alterada, fica desordenada, produz irritação do funcionamento do hipocampo (autobiografia — história do indivíduo) e libera o hormônio do estresse. Logo, os dois lados do cérebro trabalham de maneira irregular, alterando o discernimento.

O terapeuta não é um juiz e sim um acolhedor dos conteúdos, que serão objeto da psicoterapia.

Como psicoterapeuta, utilizo várias ferramentas tais como a Bioeletrografia, para verificar como está a energia gerada pelo cliente e os florais de Bach, para recuperar força e promover a homeostasia (recuperação da força vital). Recorro também aos conteúdos de sonhos para, depois, utilizar a terapia regressiva ou a hipnoterapia, já com um endereço certo, sem dar voltas no passado.

A espiritualidade é uma condição do ser humano, a religião é uma escolha. Estamos vivendo uma grande revolução científica e espiritual e nada pode ser ignorado, tudo precisa ser, no mínimo, observado.

Espiritualize-se e se liberte das limitações nas diversas áreas da sua vida.

## Sobre a autora

Martha Mendes é educadora, pós-graduada em Psicossomática e Psicobiofísica, Psicanalista Clínica, especialista em Florais de Bach, Terapia Regressiva, Hipnose Clínica e Ericksoniana. Mestre em Bioeletrografia pela IUMAB (International Union of Medical and Applied Bioelectrography in Brazil), presidente do II e VII Congresso de Hipnoterapia e Terapia Regressiva (São Paulo – SP, 2010 e 2019). Membro certificado pela EARTH (European Association for Regression Therapy), autora da filosofia/metodologia Psicobiosofia® e escritora.`,
    status: 'published',
    publishedAt: '2026-02-21T00:00:00.000Z',
    createdAt: '2026-02-21T00:00:00.000Z',
    updatedAt: '2026-02-21T00:00:00.000Z',
    author: 'Martha Mendes',
    readTime: '12 min',
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
    certification: 'Extensao',
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
    certification: 'Extensao',
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
    certification: 'Extensao',
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
