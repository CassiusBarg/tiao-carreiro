# 🎶 Top 5 Tião Carreiro e Pardinho - Versão 2.0

Projeto desenvolvido como parte de teste técnico (Laravel + ReactJS).  
Exibe as 5 músicas mais tocadas de Tião Carreiro e Pardinho e permite que usuários autenticados sugiram novas músicas através de links do YouTube.

---

## 🚀 Tecnologias
- **Backend:** Laravel 11 + Sanctum
- **Frontend:** React + TailwindCSS
- **Banco:** MySQL 8
- **Containerização:** Docker + Docker Compose
- **Testes:** Pest (Laravel), Jest + RTL (React)

---

## 📦 Estrutura
```
.
├── backend   # API Laravel
├── frontend  # SPA React
├── docker-compose.yml
```

---

## ⚙️ Como rodar o projeto

### 1. Clonar repositório
```bash
git clone https://github.com/CassiusBarg/tiao-carreiro.git
cd tiao-carreiro
```

### 2. Rodar com Docker
```bash
docker-compose up --build
```

- **Frontend (React):** http://localhost:3000  
- **Backend (Laravel API):** http://localhost:8000/api  
- **Banco MySQL:** host `localhost`, porta `3307`, user `tiao`, senha `secret`  

---

## 🔑 Autenticação
- Registro: `POST /api/register`
- Login: `POST /api/login`
- Logout: `POST /api/logout`

Usuário autenticado pode:
- **Adicionar música:** `POST /api/songs`
- **Editar música:** `PUT /api/songs/{id}`
- **Excluir música:** `DELETE /api/songs/{id}`

---

## 🧪 Testes

### Backend (Laravel - Pest)
```bash
cd backend
php artisan test
```

### Frontend (React - Jest + RTL)
```bash
cd frontend
npm test
```

---

## 🎨 Layout
- **Top 5** fixo em destaque (cards).
- **Outras músicas** paginadas (lista).
- Estilização com **TailwindCSS**.

---

## ✍️ Autor
Desenvolvido por **Cassius Vinicius Barg** como parte de desafio técnico da Techpines.
