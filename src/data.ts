export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Course {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  flag: string;
  code: string;
  description: string;
  details: string[];
  levels: string;
  focus: string;
  accentColor: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  comment: string;
  avatar: string;
  rating: number;
}

export interface TranslationService {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Ebook {
  id: string;
  title: string;
  description: string;
  coverColor: string;
  tag: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre-nos' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Tradução', href: '#traducao' },
  { label: 'Contato', href: '#contato' },
];

export const HERO_FEATURES: Feature[] = [
  {
    icon: 'Sparkles',
    title: 'Aulas individuais',
    description: '100% personalizadas e no seu ritmo.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Ensino com valores',
    description: 'Educação transformadora com base humana.',
  },
  {
    icon: 'Compass',
    title: 'Metodologia imersiva',
    description: 'Foco em conversação prática desde a primeira aula.',
  },
  {
    icon: 'GraduationCap',
    title: 'Professores qualificados',
    description: 'Certificados internacionalmente e experientes.',
  },
];

export const COURSES: Course[] = [
  {
    id: 'en',
    name: 'Inglês',
    slug: 'ingles',
    tagline: 'O idioma para conexões globais.',
    flag: '🇺🇸',
    code: 'USA',
    description: 'Foco em comunicação global, negócios, segurança em viagens e tecnologia. Conquiste sua independência internacional com fluidez e naturalidade.',
    details: [
      'Material didático digital interativo incluso',
      'Metodologia focada em conversação em cenários reais',
      'Preparação estruturada para certificações (TOEFL, IELTS, Cambridge)',
      'Suporte individual para dúvidas entre as aulas',
    ],
    levels: 'A1 ao C2 (Iniciante ao Avançado)',
    focus: 'Aulas Customizadas para Negócios, Viagens ou Acadêmico',
    accentColor: 'indigo',
  },
  {
    id: 'de',
    name: 'Alemão',
    slug: 'alemao',
    tagline: 'Abra portas na maior economia da Europa.',
    flag: '🇩🇪',
    code: 'DEU',
    description: 'Desenvolva raciocínio fluido, domine a estrutura do idioma de forma natural e prepare-se para oportunidades acadêmicas e de carreira na Alemanha.',
    details: [
      'Abordagem lógica e simplificada da gramática',
      'Simulações constantes de situações profissionais',
      'Preparação completa para exames Goethe-Institut e TestDaF',
      'Aulas culturais para entender o mercado de trabalho europeu',
    ],
    levels: 'A1 ao B2 (Iniciante ao Intermediário Avançado)',
    focus: 'Carreiras Tecnológicas, Engenharia e Intercâmbio',
    accentColor: 'amber',
  },
  {
    id: 'fr',
    name: 'Francês',
    slug: 'frances',
    tagline: 'A língua da diplomacia, cultura e arte.',
    flag: '🇫🇷',
    code: 'FRA',
    description: 'Fale com pronúncia precisa, estude a riqueza cultural e expanda seus horizontes acadêmicos ou turísticos através da língua mais romântica do mundo.',
    details: [
      'Ensino focado na sofisticação fonética e pronúncia',
      'Vocabulário gastronômico, turístico e literário',
      'Preparação detalhada para exames DELF e DALF',
      'Discussões ativas sobre atualidades, música e cinema francês',
    ],
    levels: 'A1 ao C1 (Iniciante ao Fluente)',
    focus: 'Diplomacia, Artes, Gastronomia e Viagens de Lazer',
    accentColor: 'cyan',
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Mariana Silva',
    role: 'Engenheira de Software na Alemanha',
    comment: 'A metodologia personalizada de alemão da Indra foi o divisor de águas que precisava. Passei na entrevista técnica em Berlim e hoje moro aqui sem nenhum medo de me comunicar!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    rating: 5,
  },
  {
    id: '2',
    name: 'Felipe Albuquerque',
    role: 'Diretor de Marketing Global',
    comment: 'As aulas de inglês são focadas diretamente no meu dia a dia de reuniões corporativas e apresentações. Prático, eficiente e muito enriquecedor culturalmente.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    rating: 5,
  },
  {
    id: '3',
    name: 'Clara Dupont',
    role: 'Estudante de Gastronomia',
    comment: 'O francês na Indra Idiomas não é apenas gramática; aprendemos a alma do idioma. Professora incrível e material de extremo bom gosto. Super recomendo!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    rating: 5,
  },
  {
    id: '4',
    name: 'Thomas Oliveira',
    role: 'Pesquisador Acadêmico',
    comment: 'Consegui proficiência no nível B2 de alemão em tempo recorde graças à flexibilidade dos horários e ao acompanhamento próximo. O ensino focado no aluno é real.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    rating: 5,
  },
];

export const STUDENT_GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400', alt: 'Estudantes sorrindo' },
  { url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400', alt: 'Grupo de alunos' },
  { url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400', alt: 'Aluna na biblioteca' },
  { url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400', alt: 'Alunos estudando juntos' },
  { url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400', alt: 'Estudante com notebook' },
  { url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=400', alt: 'Estudante sorridente' },
  { url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400', alt: 'Jovem estudante' },
  { url: 'https://images.unsplash.com/photo-1517256064527-09c53b2d0bc6?auto=format&fit=crop&q=80&w=400', alt: 'Estudantes rindo' },
];

export const TRANSLATION_SERVICES: TranslationService[] = [
  {
    title: 'Documentos corporativos',
    description: 'Contratos, relatórios financeiros, propostas comerciais e correspondências com rigor técnico.',
    icon: 'Building2',
  },
  {
    title: 'Históricos acadêmicos',
    description: 'Diga adeus a burocracias. Diplomas, ementas curriculares e históricos escolares formatados.',
    icon: 'GraduationCap',
  },
  {
    title: 'Conteúdos técnicos',
    description: 'Manuais técnicos, especificações de produtos, patentes e publicações de engenharia e TI.',
    icon: 'Cpu',
  },
  {
    title: 'Textos criativos',
    description: 'Livros, artigos literários, websites, blogs e campanhas publicitárias mantendo o tom e estilo.',
    icon: 'PenTool',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Qual a frequência e duração das aulas?',
    answer: 'As aulas normais acontecem 1, 2 ou 3 vezes por semana com duração padrão de 50 a 60 minutos. Como nossa metodologia é integralmente individualizada, a frequência, horários e duração podem ser adaptados dinamicamente para atender às suas necessidades exatas de tempo e ritmo.',
  },
  {
    id: 'faq-2',
    question: 'Quem pode se inscrever?',
    answer: 'Nossos programas são formatados para jovens a partir de 14 anos, adultos, profissionais liberais e executivos que necessitam de eficácia imediata no aprendizado de idiomas para fins profissionais, de turismo ou acadêmicos.',
  },
  {
    id: 'faq-3',
    question: 'A metodologia é adequada para iniciantes?',
    answer: 'Sim! Com certeza. Nossa metodologia de imersão gradual começa focada em comunicação situacional básica. Desde a primeira aula o aluno é estimulado a produzir e compreender oralmente o idioma de forma ativa e acolhedora, construindo segurança passo a passo.',
  },
  {
    id: 'faq-4',
    question: 'As aulas são gravadas ou ao vivo?',
    answer: 'Todas as nossas aulas regulares individuais são 100% ao vivo e interativas através de nossa sala virtual personalizada. Isso garante feedback imediato, conversação real e correções de pronúncia em tempo real pelo professor certificado.',
  },
  {
    id: 'faq-5',
    question: 'Quais são as opções de pagamento disponíveis?',
    answer: 'Oferecemos opções flexíveis de contratação com recorrência mensal (via boleto ou cartão de crédito) ou planos semestrais/anuais parcelados sem juros, garantindo total controle orçamentário para o estudante.',
  },
];

export const EBOOKS: Ebook[] = [
  {
    id: 'eb-1',
    title: 'Destravando a Pronúncia no Inglês',
    description: 'Guia definitivo de fonética prática para soar natural e confiante ao falar com falantes nativos.',
    coverColor: 'from-[#4C1D24] to-[#6B2933]',
    tag: 'Inglês',
  },
  {
    id: 'eb-2',
    title: 'Gramática de Alemão Sem Segredos',
    description: 'Como dominar as estruturas gramaticais complexas e os casos dativo/acusativo memorizando com lógica visual.',
    coverColor: 'from-[#Cfa374] to-[#B08A62]',
    tag: 'Alemão',
  },
  {
    id: 'eb-3',
    title: 'Falar Francês no Cotidiano',
    description: 'Expressões essenciais de rua, gírias amigáveis e etiqueta cultural parisiense para não dar bola fora.',
    coverColor: 'from-[#DF8477] to-[#E7A79D]',
    tag: 'Francês',
  },
];
