# ExProjeto Web - Frontend React

Frontend moderno em React + TypeScript para sistema de autenticação completo, construído com Vite e Tailwind CSS.

## 🚀 Tecnologias

- **React 19** + **TypeScript** - Interface moderna e type-safe
- **Vite 6.3** - Build tool rápido e otimizado
- **Tailwind CSS v4** - Estilização utilitária moderna
- **React Router DOM v7** - Roteamento SPA
- **Sonner v2** - Notificações toast elegantes
- **JWT** - Autenticação segura com refresh token automático

## 📋 Funcionalidades

### ✅ Autenticação Completa

- **Login seguro** com validação em tempo real
- **Refresh token automático** via cookies HttpOnly
- **Logout seguro** com limpeza de dados
- **Proteção de rotas** para áreas autenticadas
- **Redirecionamento inteligente** após login
- **Decodificação JWT** para extrair dados do usuário

### ✅ Interface de Usuário

- **Design responsivo** com Tailwind CSS
- **Componentes reutilizáveis** (Button, Input)
- **Sistema de notificações** com feedback visual
- **Loading states** e tratamento de erros
- **Formulários validados** com UX otimizada
- **Estados interativos** com animações suaves

### ✅ Arquitetura Robusta

- **Clean Architecture** com separação de responsabilidades
- **Services layer** para comunicação com API
- **Custom hooks** para lógica reutilizável
- **Context API** separado por responsabilidade
- **TypeScript** com tipagem rigorosa
- **Interceptação automática** de requisições

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
# Arquivo .env já configurado
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

# Lint do código
npm run lint
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base (Button, Input)
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── index.ts
│   ├── feedback/       # Loading, Error, Toast
│   │   └── Loading.tsx
│   ├── ProtectedRoute.tsx
│   └── index.ts
├── pages/              # Páginas da aplicação
│   ├── Login/          # Tela de login completa
│   │   ├── index.tsx
│   │   └── components/
│   │       ├── LoginForm.tsx
│   │       ├── RememberMeCheckbox.tsx
│   │       └── ForgotPasswordLink.tsx
│   └── Dashboard/      # Área autenticada
│       └── index.tsx
├── contexts/           # Context API
│   └── AuthContext.tsx # Apenas definição do contexto
├── providers/          # Providers separados
│   └── AuthProvider.tsx # Lógica do AuthProvider
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
│   ├── jwt.ts          # Types JWT
│   └── index.ts        # Barrel exports
└── config/             # Configurações
    └── constants.ts    # Constantes da aplicação
```

## 🔐 Sistema de Autenticação

### Arquitetura de Auth

```
AuthContext (contexto) → AuthProvider (lógica) → useAuth (hook)
```

### Fluxo de Autenticação

1. **Login** → JWT token + refresh token (cookie)
2. **Requests** → Token automático no header Authorization
3. **Refresh automático** → Interceptação 401 e renovação
4. **Logout** → Limpeza de tokens e redirecionamento

### Segurança Implementada

- ✅ JWT tokens com expiração automática
- ✅ Refresh tokens em cookies HttpOnly
- ✅ Interceptação automática de requisições
- ✅ Proteção contra XSS e CSRF
- ✅ Limpeza automática de dados sensíveis
- ✅ Timeout de requisições configurável (10s)

## 🎨 Sistema de Design

### Componentes Base

```tsx
// Button com variants e loading
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

### Estrutura de Componentes

- **UI Components**: Componentes básicos reutilizáveis
- **Feedback Components**: Loading, Error, Toast
- **Page Components**: Componentes específicos de páginas
- **Form Components**: Checkbox, Links, etc.

## 🚦 Rotas da Aplicação

```tsx
/ → /dashboard           # Redirect para área autenticada
/login                   # Tela de login pública
/dashboard              # Área protegida (requer auth)
/* → /dashboard         # Fallback para 404
```

### Proteção de Rotas

- **ProtectedRoute** wrapper para áreas autenticadas
- **Redirecionamento automático** baseado no estado de auth
- **Preservação de rota** original após login
- **Loading states** durante verificação de auth

## 📡 Integração com API

### Cliente HTTP (apiService)

```typescript
// Configuração automática:
- Base URL: http://localhost:5097/api
- Timeout: 10 segundos
- Cookies: credentials: 'include'
- Headers: Content-Type: application/json
- Authorization: Bearer {token} (automático)
```

### Endpoints Utilizados

```typescript
POST /auth/login         # Login do usuário
POST /auth/refresh-token # Refresh automático
POST /auth/logout        # Logout seguro
POST /user/register      # Registro de usuário
```

### Tratamento de Erros Avançado

- **Interceptação automática** de erros HTTP
- **Refresh token automático** em caso de 401
- **Retry automático** após refresh
- **Feedback visual** com notificações toast
- **Validação de campos** com mensagens específicas
- **Timeout handling** com mensagens apropriadas

## 🧪 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Vite dev server

# Build
npm run build           # TypeScript + Vite build
npm run preview         # Preview da build local

# Qualidade de Código
npm run lint            # ESLint + TypeScript check
```

## 🔧 Configurações Avançadas

### TypeScript (Strict Mode)

```json
{
  "strict": true,
  "noImplicitAny": true,
  "strictNullChecks": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true,
  "moduleResolution": "bundler"
}
```

### ESLint

- **React Hooks** rules
- **React Refresh** warnings
- **TypeScript** integration
- **Modern JS** standards

### Vite

- **React Plugin** otimizado
- **Tailwind CSS v4** plugin
- **Fast refresh** habilitado
- **Tree shaking** automático

## 🏗️ Arquitetura de Componentes

### Estrutura Padrão

```tsx
// 1. Imports externos
import React, { useState } from "react";
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
  const { user } = useAuth();

  // 6. States
  const [loading, setLoading] = useState(false);

  // 7. Effects & Handlers
  const handleClick = () => {
    // logic
  };

  // 8. Render
  return <div>{title}</div>;
};
```

### Custom Hooks Pattern

- **useAuth**: Gerenciamento de autenticação
- **useApiToast**: Notificações de API
- **useApiError**: Tratamento de erros de API

### Context/Provider Pattern

```tsx
// Context separado da lógica
const AuthContext = createContext();

// Provider com toda a lógica
export const AuthProvider = ({ children }) => {
  // lógica do estado...
  return (
    <AuthContext.Provider value={...}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook customizado
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error(...);
  return context;
};
```

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

### Configuração de Servidor

```apache
# .htaccess para SPA routing
RewriteEngine On
RewriteRule ^(?!.*\.).*$ /index.html [L]
```

## 🤝 Contribuição

### Padrões de Código

1. **TypeScript strict** mode
2. **ESLint** compliance
3. **Componentes funcionais** com hooks
4. **Props interface** sempre tipada
5. **Error boundaries** implementados

### Workflow

1. **Fork** do projeto
2. **Branch** para feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** das mudanças (`git commit -m 'Add: AmazingFeature'`)
4. **Push** para branch (`git push origin feature/AmazingFeature`)
5. **Pull Request** com descrição detalhada

### Naming Conventions

- **Components**: PascalCase (`UserProfile`)
- **Files**: PascalCase para components (`UserProfile.tsx`)
- **Hooks**: camelCase com 'use' prefix (`useAuth`)
- **Types**: PascalCase (`AuthContextType`)
- **Variables**: camelCase (`isLoading`)
- **Constants**: SCREAMING_SNAKE_CASE (`API_ENDPOINTS`)

## 📊 Performance

### Otimizações Implementadas

- **Tree shaking** automático com Vite
- **Code splitting** por rotas
- **Lazy loading** de componentes
- **Memoização** de contexts caros
- **Barrel exports** organizados

### Bundle Analysis

```bash
# Analisar bundle size
npm run build
npx vite-bundle-analyzer dist
```

## 🔍 Debugging

### Desenvolvimento

```bash
# Console logs estruturados
console.error('Auth Error:', error);

# React DevTools
# Redux DevTools (se necessário)
```

### Erros Comuns

1. **Fast Refresh**: Componentes e hooks em arquivos separados
2. **CORS**: Configurar credentials: 'include'
3. **Token Refresh**: Evitar loops infinitos
4. **TypeScript**: Verificar tipos de retorno

## 📞 Suporte

### Debug Checklist

1. ✅ API backend rodando em http://localhost:5097
2. ✅ Variável VITE_API_URL configurada
3. ✅ Cookies habilitados no navegador
4. ✅ Network tab para verificar requisições
5. ✅ Console para erros de JavaScript

### Logs Importantes

```typescript
// Verificar autenticação
localStorage.getItem("auth_token");

// Verificar usuário
localStorage.getItem("user_data");

// Network requests
// F12 → Network → verificar headers e responses
```

---

**Desenvolvido usando React + TypeScript + Vite**

### 📈 Status do Projeto

- ✅ **Autenticação** - Completa com JWT + Refresh Token
- ✅ **Roteamento** - Protegido com redirecionamento
- ✅ **Interface** - Responsiva com Tailwind CSS
- ✅ **Tipagem** - TypeScript strict mode
- ✅ **Testing** - Estrutura preparada
- 🔄 **Features** - Em desenvolvimento contínuo

**Versão atual: 0.0.0**
