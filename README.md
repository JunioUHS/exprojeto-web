# ExProjeto Web - Frontend React

Frontend moderno em React + TypeScript para sistema de autenticação completo, construído com Vite e Tailwind CSS.

## 🚀 Tecnologias

- **React 19** + **TypeScript** - Interface moderna e type-safe
- **Vite** - Build tool rápido e otimizado
- **Tailwind CSS v4** - Estilização utilitária moderna
- **React Router DOM** - Roteamento SPA
- **Sonner** - Notificações toast elegantes
- **JWT** - Autenticação segura com refresh token automático

## 📋 Funcionalidades

### ✅ Autenticação Completa

- **Login seguro** com validação em tempo real
- **Refresh token automático** via cookies HttpOnly
- **Logout seguro** com limpeza de dados
- **Proteção de rotas** para áreas autenticadas
- **Redirecionamento inteligente** após login

### ✅ Interface de Usuário

- **Design responsivo** com Tailwind CSS
- **Componentes reutilizáveis** (Button, Input, Card)
- **Sistema de notificações** com feedback visual
- **Loading states** e tratamento de erros
- **Formulários validados** com UX otimizada

### ✅ Arquitetura Robusta

- **Clean Architecture** com separação de responsabilidades
- **Services layer** para comunicação com API
- **Custom hooks** para lógica reutilizável
- **Context API** para gerenciamento de estado
- **TypeScript** com tipagem rigorosa

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- API Backend ExProjetoAPI rodando

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd exprojeto-web
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

```bash
# Crie o arquivo .env na raiz do projeto
VITE_API_URL=http://localhost:5097/api
```

### 4. Execute o projeto

```bash
# Modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base (Button, Input)
│   ├── feedback/       # Loading, Error, Toast
│   └── ProtectedRoute.tsx
├── pages/              # Páginas da aplicação
│   ├── Login/          # Tela de login + componentes
│   └── Dashboard/      # Área autenticada
├── contexts/           # Context API (Auth)
├── hooks/              # Custom hooks
│   ├── useAuth.ts      # Hook de autenticação
│   ├── useApiToast.ts  # Notificações API
│   └── useApiError.ts  # Tratamento de erros
├── services/           # Camada de serviços
│   ├── apiService.ts   # Cliente HTTP base
│   └── authService.ts  # Serviços de autenticação
├── types/              # Definições TypeScript
│   ├── api.ts          # Types da API
│   ├── auth.ts         # Types de autenticação
│   ├── context.ts      # Types de contexto
│   └── jwt.ts          # Types JWT
└── config/             # Configurações
    └── constants.ts    # Constantes da aplicação
```

## 🔐 Sistema de Autenticação

### Fluxo de Autenticação

1. **Login** → JWT token + refresh token (cookie)
2. **Requests** → Token automático no header Authorization
3. **Refresh** → Renovação automática quando token expira
4. **Logout** → Limpeza de tokens e redirecionamento

### Segurança Implementada

- ✅ JWT tokens com expiração (15min)
- ✅ Refresh tokens em cookies HttpOnly (7 dias)
- ✅ Interceptação automática de requisições
- ✅ Proteção contra XSS e CSRF
- ✅ Limpeza automática de dados sensíveis

## 🎨 Sistema de Design

### Componentes Base

```tsx
// Button com variants e estados
<Button
  variant="primary"
  loading={isLoading}
  onClick={handleClick}
>
  Entrar
</Button>

// Input com validação e erro
<Input
  label="Nome de usuário"
  error={errors.userName}
  onChange={handleChange}
  required
/>
```

### Classes Tailwind Organizadas

- Componentes com `@apply` para reutilização
- Sistema de cores consistente
- Estados interativos padronizados
- Responsividade mobile-first

## 🚦 Rotas da Aplicação

```tsx
/ → /dashboard           # Redirect para área autenticada
/login                   # Tela de login pública
/dashboard              # Área protegida (requer auth)
/* → /dashboard         # Fallback para 404
```

### Proteção de Rotas

- **ProtectedRoute** component para áreas autenticadas
- **Redirecionamento automático** baseado no estado de auth
- **Preservação de rota** original após login

## 📡 Integração com API

### Configuração Base

```typescript
// API Service configurado para:
- Base URL: http://localhost:5097/api
- Timeout: 10 segundos
- Cookies automáticos: credentials: 'include'
- Headers padrão: Content-Type: application/json
```

### Endpoints Utilizados

```typescript
POST /auth/login        # Login do usuário
POST /auth/refresh-token # Refresh automático
POST /auth/logout       # Logout seguro
POST /user/register     # Registro de usuário
```

### Tratamento de Erros

- **Interceptação automática** de erros HTTP
- **Refresh token automático** em caso de 401
- **Feedback visual** com notificações toast
- **Validação de campos** com mensagens específicas

## 🧪 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Servidor de desenvolvimento

# Build
npm run build           # Build otimizado para produção
npm run preview         # Preview da build local

# Qualidade de Código
npm run lint            # ESLint + TypeScript check
```

## 🔧 Configurações Avançadas

### TypeScript

- **Strict mode** habilitado
- **No implicit any** forçado
- **Null checks** rigorosos
- **Module resolution** bundler

### ESLint

- **React hooks** rules
- **React refresh** warnings
- **TypeScript** integration
- **Modern JS** standards

### Vite

- **React plugin** otimizado
- **Tailwind CSS** plugin
- **Fast refresh** habilitado
- **Tree shaking** automático

## 🚀 Deploy

### Build de Produção

```bash
# Gerar build otimizado
npm run build

# Arquivos gerados em /dist
# Servir como SPA com fallback para index.html
```

### Variáveis de Ambiente

```bash
# Produção
VITE_API_URL=https://api.seudominio.com/api
```

## 🤝 Contribuição

1. **Fork** do projeto
2. **Branch** para feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** das mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para branch (`git push origin feature/AmazingFeature`)
5. **Pull Request**

## 📝 Padrões de Código

### Estrutura de Componentes

```tsx
// 1. Imports externos
import React from "react";
import { useNavigate } from "react-router-dom";

// 2. Imports internos
import { useAuth } from "../hooks/useAuth";
import { Button } from "../components/ui";

// 3. Types/Interfaces
interface ComponentProps {
  title: string;
}

// 4. Component
export const Component: React.FC<ComponentProps> = ({ title }) => {
  // 5. Hooks
  const navigate = useNavigate();

  // 6. States
  const [loading, setLoading] = useState(false);

  // 7. Effects
  useEffect(() => {
    // logic
  }, []);

  // 8. Handlers
  const handleClick = () => {
    // logic
  };

  // 9. Render
  return <div>{title}</div>;
};
```

### Naming Conventions

- **Components**: PascalCase (`UserProfile`)
- **Files**: PascalCase para components (`UserProfile.tsx`)
- **Hooks**: camelCase com 'use' prefix (`useAuth`)
- **Types**: PascalCase (`AuthContextType`)
- **Variables**: camelCase (`isLoading`)

## 📞 Suporte

Para dúvidas ou problemas:

1. Verifique a [documentação da API](./contexto.txt)
2. Confira se a API backend está rodando
3. Valide as variáveis de ambiente
4. Abra uma issue no repositório

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido usando React + TypeScript**
