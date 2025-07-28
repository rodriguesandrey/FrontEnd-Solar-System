# 🌟 **FrontEnd-Solar-System**

Este é um projeto **React** que simula um Sistema Solar interativo, mostrando planetas e missões espaciais históricas.

## 🚀 **Como Executar o Projeto**

```bash
# Clone o repositório
git clone https://github.com/rodriguesandrey/FrontEnd-Solar-System.git

# Entre no diretório
cd FrontEnd-Solar-System

# Instale as dependências
npm install

# Execute o projeto
npm start
```

O projeto estará disponível em: `http://localhost:3000`

## 🏗️ **Estrutura de Diretórios**

```
FrontEnd-Solar-System/
├── 📁 public/                    # Arquivos públicos
│   ├── index.html               # HTML principal
│   ├── favicon.ico              # Ícone do site
│   ├── manifest.json            # Configurações PWA
│   ├── 📁 examples/             # Imagens de exemplo
│   └── 📁 planets/              # Imagens dos planetas (duplicatas)
│
├── 📁 src/                      # Código fonte principal
│   ├── App.js                   # Componente principal da aplicação
│   ├── App.css                  # Estilos do componente App
│   ├── index.js                 # Ponto de entrada do React
│   ├── setupTests.js            # Configuração de testes
│   │
│   ├── 📁 components/           # Componentes React
│   │   ├── Header.jsx           # Cabeçalho da aplicação
│   │   ├── Title.jsx            # Componente de título reutilizável
│   │   ├── SolarSystem.jsx      # Container dos planetas
│   │   ├── PlanetCard.jsx       # Card individual de cada planeta
│   │   ├── Missions.jsx         # Container das missões
│   │   ├── MissionCard.jsx      # Card individual de cada missão
│   │   └── index.js             # Arquivo de exportação (vazio)
│   │
│   ├── 📁 data/                 # Dados estáticos
│   │   ├── planets.js           # Array com dados dos planetas
│   │   └── missions.js          # Array com dados das missões
│   │
│   └── 📁 images/               # Imagens dos planetas
│       ├── background.png       # Imagem de fundo
│       ├── Jupiter.png          # Imagem de Júpiter
│       ├── Marte.png           # Imagem de Marte
│       ├── Mercurio.png        # Imagem de Mercúrio
│       ├── Netuno.png          # Imagem de Netuno
│       ├── Saturno.png         # Imagem de Saturno
│       ├── Terra.png           # Imagem da Terra
│       ├── Urano.png           # Imagem de Urano
│       └── Venus.png           # Imagem de Vênus
│
├── 📄 package.json              # Dependências e scripts
├── 📄 README.md                 # Documentação do projeto
├── 📄 .eslintrc.json           # Configuração do ESLint
├── 📄 .stylelintrc.json        # Configuração do StyleLint
└── 📁 node_modules/            # Dependências instaladas
```

## � **Tecnologias Utilizadas**

- **React 18.2.0** - Biblioteca principal
- **Create React App** - Configuração base
- **PropTypes** - Validação de props
- **ESLint** - Linting de código
- **StyleLint** - Linting de CSS
- **Testing Library** - Testes

## 🧩 **Componentes da Aplicação**

### 📍 **Componente Principal**
- **`App.js`** - Orquestra toda a aplicação

### 🎨 **Componentes de Interface**
- **`Header.jsx`** - Título principal "Sistema Solar"
- **`Title.jsx`** - Componente reutilizável para títulos
- **`SolarSystem.jsx`** - Seção dos planetas
- **`PlanetCard.jsx`** - Card individual de cada planeta
- **`Missions.jsx`** - Seção das missões espaciais
- **`MissionCard.jsx`** - Card individual de cada missão

### 📊 **Dados**
- **`planets.js`** - 8 planetas do sistema solar
- **`missions.js`** - 21 missões espaciais históricas

## 🎯 **Funcionalidades**

✅ **Exibição de Planetas** - Mostra os 8 planetas com imagens  
✅ **Missões Espaciais** - Lista missões históricas com detalhes  
✅ **Interface Responsiva** - Componentes reutilizáveis  
✅ **Dados Estruturados** - Separação clara entre dados e interface  

## 🚀 **Scripts Disponíveis**

- `npm start` - Inicia servidor de desenvolvimento
- `npm build` - Cria build de produção  
- `npm test` - Executa testes
- `npm run lint` - Verifica código com ESLint

## 📸 **Demonstração**

O projeto inclui:
- **8 Planetas** do Sistema Solar com suas respectivas imagens
- **21 Missões Espaciais** históricas incluindo Apollo 11, Voyager 1, Telescópio James Webb
- **Interface interativa** desenvolvida em React

## 👨‍💻 **Desenvolvimento**

Este projeto foi desenvolvido como parte dos estudos em React, demonstrando:
- Componentização
- Props e PropTypes
- Manipulação de arrays com map()
- Importação de dados estáticos
- Estruturação de projetos React

---

⭐ **Feito com React e muito ☕ por [rodriguesandrey](https://github.com/rodriguesandrey)**