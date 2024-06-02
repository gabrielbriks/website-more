# Click More

_Site Click More, que oferece soluções digitais para empresas de todos os portes, com implementação de 3 idiomas Japonês, Inglês e Português_

**CONVERTENDO CLIQUES EM OPORTUNIDADES DE NEGÓCIO**
**Mais que um clique, mais do que imagina, na medida que sua empresa precisa...**

**CLICKMORE - CHANGING CLICKS INTO BUSINESS OPPORTUNITIES**
**More than a click, more than you think, to the extent your company needs...**

**クリックを変える ビジネスチャンス**

## Tecnologias e Recursos

- **Next.js** (Framework React para construção de sites e aplicações web estáticas e dinâmicas)
- **Typescript**
- **ESLint**
- **Prettier**
- **Tailwind CSS** (Framework CSS para criação de interfaces de usuário responsivas e personalizadas)
- **React Spring** (Biblioteca para criação de animações e interações com o usuário)
- **Framer Motion** (Biblioteca para criação de animações complexas e interativas)
- **Shadcn-UI** (Biblioteca de componentes personalizáveis)
- **i18Next** (Framework de internacionalização escrito em e para JavaScript. Mas é muito mais do que isso)
- **nodemailer** (Biblioteca para envio de emails)
- **universal-cookie**
- **React Hook Form** (Biblioteca para tratamento de formulários)

## Aspectos Técnicos Relevantes

### Execução do projeto

- Configure as variáveis de ambiente contidas no `.env.exemple` em um novo arquivo `.env`(Obs: Verificar o tópico _**Outros Aspectos Relevantes**_ )

- Instale todas as dependências
  ```bash
  	pnpm install
  ```
- Execução do projeto

  ```bash
  	pnpm dev
  ```

  - Visualize a execução do projeto em [http://localhost:3000](http://localhost:3000)

## Outros Aspectos Relevantes

### Idiomas - Uso e implementação

_Ao criar qualquer interface nesse projeto, deve ser implementado também as respectivas variações de idiomas, seguindo a sequencia descritas abaixo:_

- Deve-se especificar a tipagem da estrutura a ser implementada em `./src/types/dictionary-18next-type.ts`(_estrutura dos textos existentes na interface_)
- Em seguida replicar a estrutura/campos com os devidos textos para os _dictionaries_ de cada idioma localizados em `./src/dictionaries`
- Para implementação/uso nas interfaces, basta observar abordagem já utilizada nas interfaces e componentes já existentes.

### Formulário de Contato - Configuração

O formulário de contato implementado na interface `home` utiliza o `nodemailer` para enviar as mensagens de contato para o email configurado. E para realizar a configuração desse email, é necessário seguir alguns passos para gerar uma senha especifica e então configura-la no arquivo `.env`

**Configuração `.env`**

- Nesse arquivo deve ser informado o **email** e o **app password** para autenticação do email. Esse email escolhido deve ser do Google, ou seja, `@gmail`(_Mas é possível personalizar a configuração para outros_).

  **Variáveis:**

  ```properties
  MY_EMAIL="exemplo@gmail.com"
  MY_PASSWORD_EMAIL="exemple pass"
  ```

  **`# LEMBRANDO QUE AS VARIÁVEIS TBM DEVE EXISTIR CONFIGURADAS NA VERCEL`**

**Geração da senha (MY_PASSWORD_EMAIL)**

- Para geração da senha que mencionei acima pode seguir os passos do video abaixo

  [Generate App Password in Gmail/Google Workspace](https://www.youtube.com/watch?v=lSURGX0JHbA)

### Utilização do Typebot.io

- Foi implementada a integração com [typebot.io](https://app.typebot.io/pt-BR) para exemplificar uma forma simples de como utiliza-lo na implementação do fluxo pré-briefing, com fim de validação inicial. _Eu `gabriel`, vejo essa abordagem como uma PoC que deve anteceder a implementação do fluxo completo posteriormente, por ser uma abordagem testável, simples e de baixo custo. O `typebot` possibilita ajustes rápidos e uma personalização de ponta a ponta com ilimitadas integrações e utilização de inúmeras abordagens_

#### Exemplificação para implementação

- Ao selecionar um dos planos foi implementado o redirecionamento para uma interface que utiliza a integração de exemplo com o [typebot.io](https://app.typebot.io/pt-BR), onde ele é aberto automaticamente após o carregamento completo da interface, dando início a captura das informações iniciais solicitadas para exemplificação.
  Dessa forma será possível implementar o fluxo completo e totalmente personalizável conforme a necessidade/plano selecionado.

  - Atualmente nesse fluxo de exemplo do `typebot.io`, é utilizado os cookies para identificar o plano selecionado. Esse aspecto foi implementado de forma mais simples possível, para utilizar como exemplo inicial, deixando completamente livre para as posteriores adequações/melhorias.

  - Para visualizar esse simples fluxo que mencionei acima, que armazena o valor representativo do plano selecionado nos cookies, que o typebot consegue recuperar, pode ser visualizado no componente localizado em `./src/components/plans/button-hire-card.ts`. E para visualizar a lógica de recuperação desse valor do lado do typebot, basta acessar o fluxo de exemplo pela plataforma.

- Para acessar o fluxo de exemplo implementado na plataforma `typebot`, é necessário solicitar acesso ao email **`tech@clickmore.org`**, tendo o email logado no browser, basta autenticar utilizando o Google.
