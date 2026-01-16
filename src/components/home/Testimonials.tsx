import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Maria Joselice Santos Silva",
    location: "SP",
    role: "Psicoterapeuta Holística",
    text: "Há momentos em nossa vida profissional que sentimos necessidade de um upgrade na profissão. Foi assim que surgiu o Instituto Martha Mendes em minha vida profissional. Íntegros e comprometidos com suas propostas de ensino, apresentou-me entre outros cursos, a Pós Graduação em Regressão. Curso reconhecido pelo MEC, trouxe para minha vida como psicoterapeuta, uma extensão maior e melhor para trabalhar com meus clientes.",
    rating: 5,
  },
  {
    name: "Emerson Vieira Peixoto",
    location: "São Paulo, SP",
    role: "Hipnólogo",
    text: "Quando busquei as formações do Instituto Martha Mendes, não tinha ideia da importância que teria para meu desenvolvimento profissional. Tive oportunidade de conhecer pessoas maravilhosas e com uma vasta bagagem acadêmica e profissional, o que proporcionou trocas muito ricas. Os professores são excepcionais, sempre mostrando exemplos práticos para que assim consigamos aplicar os conhecimentos no cotidiano, além da excelência de manter todos os alunos integrados durante os treinamentos. Tenho apenas a agradecer a essa maravilhosa equipe e dizer que a cada treinamento minha forma de trabalhar se modifica para um patamar cada vez mais alto de excelência. É mais que recomendado.",
    rating: 5,
  },
  {
    name: "Rosângela Marques Valentim",
    location: "São Paulo, SP",
    role: "Psicóloga",
    text: "Iniciei o curso após indicação de amigos profissionais que lá cursavam e estavam muito satisfeitos. Eu confirmo aqui todos os elogios feitos por eles: o nível de aprendizado é alto, os professores são experientes e queridos, a organização geral tem muito respeito para com os alunos, a interação com colegas e professores dentro e fora de sala de aula é deliciosa! Sobre a pessoa Martha Mendes? Só elogios e agradecimentos!",
    rating: 5,
  },
  {
    name: "Karla Karenina",
    location: "Fortaleza / CE",
    role: "Atriz e Terapeuta",
    text: "O Instituto Martha Mendes tem proporcionado a nós, terapeutas, oportunidades únicas de aperfeiçoamento profissional com cursos de alto nível. É muito importante sua atuação na área educacional num tempo em que somos bombardeados com um cem número de cursos no mercado sem qualidade técnica e certificação confiável. Atesto a seriedade do Instituto Martha Mendes e recomendo para os terapeutas e profissionais que desejem formações e aprimoramentos de qualidade.",
    rating: 5,
  },
  {
    name: "Vera Regina Klein",
    location: "Cascavel, PR",
    role: "Terapeuta",
    text: "Minha experiência com o Instituto Martha Mendes foi uma mudança de paradigmas para mim. Foi inspirador consolidar conhecimentos e ferramentas para agregar às minhas práticas em consultório. É um empoderamento conviver com pessoas ávidas por conhecimento, criando essa conexão que possibilita novas relações interpessoais. Superou todas as minhas expectativas, com certeza saí carregando uma bagagem muito maior do que fui buscar.",
    rating: 5,
  },
  {
    name: "Ana Luiza Toledo de Paula",
    location: "Taubaté, SP",
    role: "Fonoaudióloga Clínica, Hipnoterapeuta e Programadora Mental",
    text: "Os cursos que realizei no Instituto Martha Mendes, foram incríveis, com muito aprendizado e convívio com profissionais extraordinários. Eu sempre priorizo o aprendizado na 'fonte', de forma direta ou com quem tem conexão direta com a 'fonte'. Parabéns ao Instituto Martha Mendes e a todos os envolvidos na organização impecável dos cursos e aos Mestres que são trazidos e transmitem o conhecimento de forma apaixonante, clara, profunda e generosa. Meu coração transborda de alegria, satisfação e gratidão.",
    rating: 5,
  },
  {
    name: "Fátima Myrrha",
    location: "Belo Horizonte / MG",
    role: "Terapeuta",
    text: "Participei de vários cursos sobre Regressão e Hipnose pelo Instituto Martha Mendes. Só tenho à agradecer pelo grande e vasto conhecimento que adquiri com bases reais, e pelos professores de altíssimo gabarito. Conhecimento esse, que me traz a cada dia mais recursos terapêuticos dentro do meu consultório. Todo o conhecimento adquirido trouxe mais profundidade ao meu trabalho , personalizando meus atendimentos. Workshops nacionais, internacionais e congressos. Gratidão a Martha e sua equipe especial de grandes e competentes Mestres, trazendo o melhor de seus conhecimentos.",
    rating: 5,
  },
  {
    name: "Carlos Eugênio Gonçalves",
    location: "RJ",
    role: "Psicólogo Clínico – Especialista em Terapia Regressiva",
    text: "Estudar e aprender é sempre edificante, agrega, e nos prepara para o trabalho, favorecendo-nos, a cada dia, cabedais de conhecimentos implicados no processo. Por outro lado, precisamos de instituições qualificadas, com mestres qualificados, com metodologias e didática que atendam às necessidades profissionais da área pretendida pelos discentes inscritos e, ainda, uma grade curricular de ensino bem elaborada e estruturada nos moldes do curso a ser aplicado. É aí que entra a instituição responsável por toda essa organização. E, por falar em organização, destaco aqui o Instituto Martha Mendes, onde tive o privilégio de estudar durante 20 meses com toda a estrutura já comentada acima.",
    rating: 5,
  },
  {
    name: "Maria Luiza Jacobson",
    location: "DF",
    role: "Psicologia Transpessoal — Hipnoterapia — Terapia Regressiva",
    text: "Fui aluna do Instituto Martha Mendes, onde participei de alguns dos cursos que considero terem sido os mais importantes da minha vida, tanto para a minha formação profissional, como para o meu desenvolvimento pessoal. Sou psicóloga clínica e no Instituto Martha Mendes dei um upgrade na minha carreira, pelo acesso a conhecimentos de vanguarda, ministrados por alguns expoentes em áreas ainda revolucionárias da Psicologia. Como a TVP (Terapia de Vidas Passadas, ou Terapia Regressiva), entre os quais se destaca o grande terapeuta holandês Hans TenDam, um habitué do Instituto Martha Mendes. Já o ser humano Martha Mendes merece um capítulo à parte: seu carisma, seu acolhimento e sua generosidade são como um lindo farol a iluminar a noite escura da nossa ignorância. Permitindo-me a máxima: 'Amai-vos e Instruí-vos'.",
    rating: 5,
  },
  {
    name: "Josy Santos Silva",
    location: "SP",
    role: "Psicóloga — Ressonância Psicoterapêutica — Fundadora do Aura Terapia Integrativa",
    text: "O Instituto Martha Mendes se destacou em minha vida profissional pela abordagem holística e inovadora em seus programas de pós-graduação. Em 2016, tive a oportunidade de realizar minha pós-graduação em Regressão no Instituto Martha Mendes, uma experiência que foi fundamental para o meu crescimento profissional. Durante o curso, fui exposta a uma variedade de técnicas e conceitos que expandiram significativamente minha compreensão do campo terapêutico. A abordagem integrativa e o corpo docente altamente qualificado contribuíram para uma formação rica e transformadora na minha prática clínica. Fui surpreendida com o currículo do Instituto, cuidadosamente elaborado para englobar tanto a teoria quanto a prática, permitindo que os alunos adquirissem habilidades aplicáveis em contextos reais. A combinação de aulas teóricas, workshops práticos e supervisão clínica proporcionou uma formação completa para meu desenvolvimento profissional. Além disso, o ambiente acolhedor e a troca de experiências e conhecimentos entre colegas e professores enriqueceram ainda mais a formação, promovendo um crescimento mútuo. Minha experiência no Instituto Martha Mendes foi, sem dúvida, um marco na minha trajetória profissional, contribuindo de maneira significativa para o meu desenvolvimento como terapeuta.",
    rating: 5,
  },
  {
    name: "Maria das Graças M. Miramon",
    location: "Cotia – SP",
    role: "Psicóloga - Especialização em Terapia Regressiva",
    text: "Gostaria de expressar minha profunda gratidão pelos diversos cursos feitos com vocês, inclusive a pós-graduação, culminando com um grande aprendizado, o que tem me ajudado muito em todo meu processo profissional. Os cursos feitos me abriram processos mentais que até então precisavam de maior clareza, isto foi graças aos exercícios feitos em grupo e individual durante as aulas. Os professores, cada um em sua especialização, foram espetaculares, me ajudaram a clarear dúvidas e melhorar o aprendizado. Agradeço de coração por todo o empenho colocado por Martha Mendes e pelos profissionais por ela escolhidos. Fico aguardando os cursos de mestrado em psicologia.",
    rating: 5,
  },
  {
    name: "Maria Emília Castro",
    location: "Piracicaba – SP",
    role: "Administradora de Empresa",
    text: "Minha primeira experiência com o Instituto Martha Mendes, antes Harmonia Cursos e Terapias Complementares, foi em 2000, após ler o livro Reiki: Uma Experiência de Autolibertação. Nunca vi ninguém olhar para o Reiki com tamanha habilidade e respeito. Fiz o curso de Reiki nível I e, em 2002, o nível II, respeitando o tempo de maturidade da energia em mim. No mesmo ano, estive no lançamento do segundo livro: Reiki: Um Processo Alquímico. Fiquei muito feliz com o processo de aprendizado sobre mim mesma.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const truncateText = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Depoimentos"
            subtitle="O que nossos alunos dizem sobre suas experiências"
            centered
            className="mb-16"
          />

          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => {
                const isExpanded = expandedIndex === index;
                const displayText = isExpanded 
                  ? testimonial.text 
                  : truncateText(testimonial.text, 200);
                const shouldShowButton = testimonial.text.length > 200;

                return (
                  <CarouselItem key={testimonial.name} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 relative h-full flex flex-col">
                      {/* Quote Icon */}
                      <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />

                      {/* Rating */}
                      <div className="flex space-x-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>

                      {/* Text */}
                      <div className="mb-6 flex-grow">
                        <p className="text-muted-foreground leading-relaxed relative z-10">
                          "{displayText}"
                        </p>
                        {shouldShowButton && (
                          <button
                            onClick={() => toggleExpanded(index)}
                            className="text-primary text-sm font-medium mt-2 hover:underline focus:outline-none"
                          >
                            {isExpanded ? "Ver menos" : "Ver mais"}
                          </button>
                        )}
                      </div>

                      {/* Author */}
                      <div className="border-t border-border pt-4">
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-xs text-primary mt-1">{testimonial.location}</div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Ir para o slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
