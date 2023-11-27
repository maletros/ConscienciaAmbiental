import './App.css';
import TextoImagem from './components/textoImagem';
import Texto from './components/texto';
import Noticia from './components/noticia'
import TextoLista from './components/textoLista';

const Header = () => (
  <header>
    <div className="menu">
      <div className="menu-item inicio">Início</div>
      <div className="menu-item tire-duvidas">Tire suas dúvidas</div>
    </div>
  </header>
);

const App = () => {
    // Exemplo de useState
    const [contador, setContador] = useState(0);
  
    // Função para incrementar o contador
    const incrementarContador = () => {
      setContador(contador + 1);
  };

  <div>
    <Header />
    <main>
      <TextoImagem
        id="texto"
        imagemSrc="https://www.brasilcoleta.com.br/wp-content/uploads/2020/01/01-Concieniza%C3%A7%C3%A3o-Ambiental.png"
        titulo="Por que a conservação ambiental é importante?"
        texto="A conservação ambiental é crucial para proteger nosso planeta e suas diversas formas de vida. Ela ajuda a preservar a biodiversidade, manter os ecossistemas saudáveis e garantir um futuro sustentável para as próximas gerações."
      />
      <Texto
        id="problemas"
        titulo="Quais problemas estamos enfrentando?"
        texto="Os principais problemas ambientais observados no mundo são a poluição atmosférica, o aquecimento global, a poluição hídrica e dos solos, o desmatamento, as queimadas, a desertificação a perda de biodiversidade etc."
      />
      <Noticia
        id="noticia"
        titulo="Notícia Relacionada"
        texto="Aqui está algumas notícias recentes sobre danos ambientais:"
        noticiaLink="https://g1.globo.com/meio-ambiente/"
      />
      <TextoImagem
        id="texto"
        imagemSrc="https://s1.static.brasilescola.uol.com.br/be/2021/06/foto-de-um-espaco-com-industrias-lancando-fumaca-por-suas-chamines-e-contaminando-todo-o-ar.jpg"
        titulo="O que é poluição atmosférica e quais suas causas?"
        texto="A poluição do ar é um problema ambiental observado principalmente nos grandes centros urbanos. É causada pela emissão de poluentes, como material particulado e gás carbônico. A poluição atmosférica é causada principalmente por fatores antrópicos, como a emissão de gases poluentes por veículos."
      />
      <TextoLista
        id="problemas"
        titulo="Como combater a poluição atmosférica?"
        texto="Combater a poluição atmosférica é fundamental para proteger o meio ambiente e a saúde das pessoas. Aqui estão algumas ações que podemos tomar para reduzir a poluição do ar:"
        textoLista={[
          "Usar transporte público, bicicletas ou carros elétricos para reduzir as emissões de poluentes provenientes de veículos a combustão;",
          "Economizar energia em casa e no trabalho, utilizando lâmpadas de baixo consumo e aparelhos elétricos mais eficientes;",
          "Reciclar e reduzir o uso de plásticos, que liberam poluentes quando queimados ou descartados de forma inadequada;",
          "Plantar árvores e promover áreas verdes para absorver poluentes atmosféricos e melhorar a qualidade do ar;",
          "Participar de campanhas de conscientização e apoiar políticas públicas que visam a redução da poluição atmosférica."
        ]}
      />
      <Noticia
        id="noticia"
        titulo="Notícia Relacionada"
        texto="Aqui está uma notícia recente sobre poluição atmosferica:"
        noticiaLink="https://g1.globo.com/sp/sao-paulo/noticia/2021/08/26/poluicao-do-ar-na-cidade-de-sp-aumenta-44percent-em-agosto-queimadas-e-fim-da-quarentena-estao-entre-as-causas.ghtml"
      />
      <TextoImagem
        id="texto"
        imagemSrc="https://static.vecteezy.com/ti/fotos-gratis/t1/9273868-imagem-conceito-do-aquecimento-global-mostrando-os-efeitos-da-terra-seca-no-ambiente-em-mudanca-gratis-foto.jpg"
        titulo="O que é aquecimento global e quais suas causas?"
        texto="O aquecimento global designa o aumento das temperaturas médias do planeta ao longo dos últimos tempos, o que, em tese, é causado pelas práticas humanas embora existam discordâncias quanto a isso no campo científico. A principal causa desse problema climático que afeta todo o planeta é a intensificação do efeito estufa, fenômeno natural responsável pela manutenção do calor na Terra e que vem apresentando uma maior intensidade em razão da poluição do ar resultante das práticas humanas."
      />
      <TextoLista
        id="problemas"
        titulo="Como combater o aquecimento global?"
        texto="O aquecimento global é um desafio global que requer ações concretas para mitigar seus impactos. Aqui estão algumas medidas que podemos tomar para combater o aquecimento global:"
        textoLista={[
          "Reduzir a emissão de gases de efeito estufa, como dióxido de carbono (CO2) e metano (CH4), reduzindo o consumo de combustíveis fósseis;",
          "Promover o uso de energias renováveis, como solar e eólica, para diminuir a dependência de fontes de energia poluentes;",
          "Incentivar práticas de agricultura sustentável e reduzir o desperdício de alimentos;",
          "Fomentar a conservação de florestas e o reflorestamento, que atuam como sumidouros de carbono;",
          "Participar de iniciativas de conscientização e apoiar políticas ambientais que visam reduzir as emissões de gases de efeito estufa."
        ]}
      />
      <Noticia
        id="noticia"
        titulo="Notícia Relacionada"
        texto="Aqui está uma notícia recente sobre danos ambientais:"
        noticiaLink="https://g1.globo.com/natureza/aquecimento-global/"
      />
      <TextoImagem
        id="texto"
        imagemSrc="https://s1.static.brasilescola.uol.com.br/be/2023/01/consequencia-poluicao-agua.jpg"
        titulo="O que é poluição da água e quais suas causas?"
        texto="A poluição da água é qualquer alteração das características físicas, químicas ou biológicas que impactam negativamente na qualidade dos corpos hídricos.São exemplos de atividades que causam a poluição da água: atividades agropecuárias que utilizam agrotóxicos, atividades mineradoras que exploram recursos hídricos, atividades industriais que emitem poluentes líquidos e sólidos, instalações humanas como cemitérios e aterros sanitários, ausência de estruturas de saneamento básico."
      />
      <TextoLista
        id="problemas"
        titulo="Como combater a poluição da água?"
        texto="A poluição da água é um problema sério que afeta ecossistemas aquáticos e a saúde humana. Aqui estão algumas ações que podemos tomar para combater a poluição da água:"
        textoLista={[
          "Reduzir o uso de produtos químicos tóxicos, como pesticidas e fertilizantes, em atividades agrícolas;",
          "Descartar adequadamente produtos químicos, medicamentos e resíduos perigosos, evitando jogá-los em rios, lagos ou no mar;",
          "Promover a reciclagem e o descarte correto de resíduos sólidos, como plásticos e produtos eletrônicos, para evitar que acabem nos corpos d'água;",
          "Economizar água em casa, reparando vazamentos e evitando o desperdício;",
          "Participar de ações de limpeza de praias, rios e lagos;",
          "Apoiar políticas públicas e regulamentações que visam a proteção e preservação dos recursos hídricos."
        ]}
      />
      <Noticia
        id="noticia"
        titulo="Notícia Relacionada"
        texto="Aqui está uma notícia recente sobre poluição da água:"
        noticiaLink="https://g1.globo.com/al/alagoas/noticia/2023/03/22/estudo-constata-que-poluicao-afeta-a-qualidade-da-agua-nas-bacias-da-mata-atlantica-em-alagoas.ghtml"
      />
      <TextoImagem
        id="texto"
        imagemSrc="https://static.biologianet.com/conteudo/images/o-descarte-incorreto-substancias-pode-levar-poluicao-solo-55a93df8c1130.jpg"
        titulo="O que é poluição do solo e quais suas causas?"
        texto="A poluição do solo refere-se à contaminação ou degradação do solo devido à presença de substâncias ou poluentes que causam impactos adversos em sua qualidade e fertilidade. Isso pode ter diversas causas e origens. São algumas das causas mais comuns da poluição do solo: Descarga de Resíduos Sólidos: O descarte inadequado de resíduos sólidos, como lixo doméstico, resíduos industriais e produtos químicos não tratados em aterros sanitários ou em locais inadequados, pode levar à contaminação do solo. Agricultura Intensiva: O uso excessivo de fertilizantes químicos e pesticidas em práticas agrícolas pode resultar na acumulação de produtos químicos no solo, afetando sua qualidade e prejudicando a biodiversidade."
      />
      <TextoLista
        id="problemas"
        titulo="Como combater a poluição do solo?"
        texto="A poluição do solo é um problema ambiental que afeta a qualidade e a fertilidade do solo. Aqui estão algumas ações que podemos tomar para combater a poluição do solo:"
        textoLista={[
          "Evitar o descarte inadequado de resíduos sólidos, como produtos químicos, plásticos e materiais contaminados;",
          "Praticar a compostagem de resíduos orgânicos em casa para reduzir a quantidade de resíduos enviados para aterros sanitários;",
          "Usar métodos de agricultura sustentável que evitem o excesso de uso de produtos químicos e fertilizantes;",
          "Monitorar e controlar vazamentos de substâncias poluentes, como óleos e produtos químicos, que podem contaminar o solo;",
          "Promover a recuperação de áreas degradadas, como antigas áreas industriais, para restaurar a qualidade do solo;",
          "Apoiar políticas de gestão de resíduos e regulamentações que visam a prevenção da poluição do solo."
        ]}
      />
      <Noticia
        id="noticia"
        titulo="Noticia Relacionada"
        texto="Aqui está uma notícia recente sobre poluição do solo:"
        noticiaLink="https://g1.globo.com/natureza/noticia/2019/11/05/mudanca-de-uso-do-solo-e-responsavel-por-44percent-das-emissoes-de-gases-do-efeito-estufa-no-brasil-aponta-relatorio.ghtml"
      />
      <TextoImagem
        id="desmatamento"
        imagemSrc="https://s2-oglobo.glbimg.com/ksj9RLb-ysrzHIaPUh8gnBVVan4=/0x0:3900x2925/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/q/0/U0H2hARvWBfuxHQXUYHA/102174492-files-this-file-photo-taken-on-september-16-2022-shows-an-aerial-view-of-a-deforested-and.jpg"
        titulo="O que é desmatamento e quais suas causas?"
        texto="Desmatamento consiste na retirada total ou parcial da cobertura vegetal em um local. A retirada da cobertura vegetal pode desencadear diversos problemas, como perda da biodiversidade, degradação de habitat e alterações climáticas. O desmatamento é ocasionado principalmente pelas ações humanas, como as expansões agropecuária e urbana, A retirada da vegetação de um local para dar lugar à moradias, plantações ou para a utilização da madeira retirada."
      />
      <TextoLista
        id="combateDesmatamento"
        titulo="Como combater o desmatamento?"
        texto="O desmatamento é uma ameaça significativa para nossas florestas e o meio ambiente. Aqui estão algumas ações que podemos tomar para combater o desmatamento:"
        textoLista={[
          "Promover o uso sustentável da madeira, incentivando o manejo florestal responsável;",
          "Combater o desmatamento ilegal por meio de leis rigorosas e fiscalização eficaz;",
          "Investir em reflorestamento e restauração de áreas desmatadas para recuperar ecossistemas;",
          "Educar e conscientizar a população sobre os impactos negativos do desmatamento;",
          "Desenvolver políticas de conservação florestal e programas de pagamento por serviços ambientais;",
          "Promover o uso de energias limpas e renováveis para reduzir a pressão sobre as florestas."
        ]}
      />
      <Noticia
        id="noticia"
        titulo="Notícia Relacionada"
        texto="Aqui está uma notícia recente sobre desmatamento:"
        noticiaLink="https://www.cnnbrasil.com.br/tudo-sobre/desmatamento/"
      />
      <TextoImagem
        id="queimadas"
        imagemSrc="https://www.neoenergia.com/documents/d/guest/queimadas-te-interessa"
        titulo="O que são queimadas e quais suas causas?"
        texto="Queimadas são incêndios florestais controlados ou não, que podem ocorrer em áreas naturais, como florestas, savanas, pastagens e áreas agrícolas. Elas são caracterizadas pela queima de biomassa, que inclui árvores, arbustos, capim, folhas e outros materiais orgânicos.Exemplos Causas Naturais: Em algumas regiões, as queimadas são parte natural do ciclo de renovação e crescimento das plantas. Agricultura e Pastagem: Muitas queimadas são deliberadamente iniciadas para limpar terras para a agricultura, pecuária e pastagem."
      />
      <TextoLista
        id="combateQueimadas"
        titulo="Como combater as queimadas?"
        texto="As queimadas são incêndios florestais que podem causar danos significativos ao meio ambiente e à biodiversidade. São algumas ações que podemos tomar para combater as queimadas:"
        textoLista={[
          "Implementar políticas de prevenção e combate a incêndios florestais, incluindo treinamento de equipes de combate a incêndios;",
          "Educar o público sobre os perigos das queimadas e promover práticas seguras de uso do fogo;",
          "Monitorar e alertar sobre condições climáticas propícias a incêndios;",
          "Promover o uso de técnicas de queimada controlada, quando apropriado, para reduzir a quantidade de material combustível;",
          "Investir em pesquisa e desenvolvimento de tecnologias para detecção e combate a incêndios;",
          "Proteger áreas naturais e florestas, que atuam como barreiras naturais contra incêndios;",
          "Adotar práticas agrícolas sustentáveis que evitem o uso do fogo para limpeza de terras."
        ]}
      />
      <Noticia
        id="noticia"
        titulo="Notícia Relacionada"
        texto="Aqui está uma notícia recente sobre queimadas:"
        noticiaLink="https://www.cnnbrasil.com.br/tudo-sobre/queimadas/"
      />
      <TextoImagem
        id="biodiversidade"
        imagemSrc="https://tamar.org.br/fotos/lixo%20e%20aves%20marinhas.jpg"
        titulo="O que é perda da biodiversidade e suas causas?"
        texto="A perda de biodiversidade refere-se à diminuição da variedade de vida na Terra, tanto em termos de diversidade de espécies quanto de diversidade genética dentro dessas espécies. As principais causas da perda de biodiversidade incluem: Desmatamento: A conversão de florestas em áreas urbanas, agrícolas e de mineração, Expansão Urbana: O crescimento das cidades e a expansão das infraestruturas urbanas reduzem os habitats naturais e afetam a biodiversidade local.O uso excessivo de recursos naturais também é uma grande ameaça à biodiversidade. A caça e a pesca, por exemplo, são práticas responsáveis pela diminuição do número de indivíduos de várias espécies anualmente, bem como a retirada ilegal de madeira e a exploração de plantas."
      />
      <TextoLista
        id="combateBiodiversidade"
        titulo="Como combater a perda da biodiversidade?"
        texto="A perda da biodiversidade é um desafio global que afeta a variedade de vida na Terra. Aqui estão algumas ações que podemos tomar para combater a perda da biodiversidade:"
        textoLista={[
          "Estabelecer e proteger áreas de conservação e parques naturais para preservar habitats e espécies ameaçadas;",
          "Promover práticas agrícolas sustentáveis que minimizem o impacto sobre a biodiversidade;",
          "Combater a caça e pesca ilegais que ameaçam espécies em perigo;",
          "Controlar e eliminar espécies invasoras que competem com as espécies nativas;",
          "Reduzir a poluição do ar, água e solo para proteger ecossistemas frágeis;",
          "Educar o público sobre a importância da biodiversidade e promover a conservação;",
          "Participar de iniciativas de reflorestamento e restauração de habitats degradados;",
          "Implementar políticas de conservação e regulamentações eficazes para proteger espécies em risco de extinção."
        ]}
      />
      <Noticia
        id="noticia"
        titulo="Notícia Relacionada"
        texto="Aqui está uma notícia recente sobre perda da biodiversidade:"
        noticiaLink="https://g1.globo.com/ac/acre/natureza/amazonia/noticia/2022/02/24/desmatamento-reduz-biodiversidade-na-amazonia-e-coloca-em-risco-mais-de-seis-especies-ameacadas-de-extincao-no-ac.ghtml"
      />
      <div>
        <p>Contador: {contador}</p>
        <button onClick={incrementarContador}>Incrementar</button>
      </div>
    </main>
    <footer>
      <p>&copy; 2023</p>
    </footer>
  </div>
};

export default App;
