# Usar Node 18
FROM node:18

# Criar diretório da aplicação
WORKDIR /usr/src/app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências incluindo devDependencies (vite está em dev)
RUN npm install --include=dev

# Copiar o restante do código
COPY . .

# Expor a porta que o Vite usa
EXPOSE 3000

# Rodar o servidor de desenvolvimento
CMD ["npm", "start"]
