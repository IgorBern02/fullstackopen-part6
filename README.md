📚 Full Stack Open — Parte 6: State Management com Redux

Este repositório contém os exercícios e aplicações desenvolvidas durante a Parte 6 do curso University of Helsinki — Full Stack Open.

🚀 Sobre esta parte

Na Parte 6, o foco é aprender gerenciamento de estado em aplicações React utilizando ferramentas modernas como Redux e alternativas mais leves.

Até aqui, o estado das aplicações estava dentro dos componentes React. Porém, conforme as aplicações crescem, isso se torna difícil de manter. Nesta parte, aprendemos a mover o estado para fora dos componentes, tornando o código mais escalável e organizado.

🧠 Conceitos principais

🔹 Redux e Flux Architecture

- Introdução ao padrão Flux
- Uso de store, actions e reducers
- Separação entre lógica de estado e UI
- Atualizações previsíveis de estado

👉 No Redux, o estado não é alterado diretamente — ele é atualizado através de ações que passam por reducers.

🛠️ Tecnologias utilizadas

- React
- Redux Toolkit
- React Redux
- JavaScript (ES6+)
- Fetch API
- JSON Server (simulação de backend)

📂 Estrutura do projeto

```
src/
 ├── components/
 ├── reducers/
 ├── services/
 ├── App.jsx
 └── main.jsx
```

📌 Funcionalidades implementadas

- Listagem de dados (anecdotes)
- Criação de novos itens
- Votação (incremento de votos)
- Filtro de conteúdo
- Notificações temporárias
- Integração com API

📈 Aprendizados

Durante esta parte, desenvolvi habilidades importantes como:

- Gerenciamento de estado global
- Organização de código em aplicações maiores
- Separação de responsabilidades
- Integração frontend ↔ backend
- Debug de problemas comuns em Redux (actions, reducers, async)

⚠️ Desafios encontrados

- Entender fluxo de dados do Redux
- Evitar mutações diretas do estado
- Trabalhar com async (thunks)
- Nomeação e organização de actions/reducers

🎯 Conclusão

A Parte 6 foi essencial para entender como escalar aplicações React.
Apesar do Redux adicionar complexidade inicial, ele traz previsibilidade, organização e controle total do estado.

🔗 Link do curso
👉 https://fullstackopen.com/en/part6

🧑‍💻 Autor
Feito por Igor Bernardes — futuro dev full stack 🚀
