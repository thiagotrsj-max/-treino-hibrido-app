# Treino Híbrido

Aplicativo web de personal trainer híbrido e adaptativo, com foco em força, condicionamento, estética, desempenho e preparação operacional.

## Versão publicada

[Abrir o aplicativo](https://treino-hibrido-app.trsj.chatgpt.site)

## Recursos

- Entrevista inicial curta com múltiplos objetivos e ambientes de treino.
- Perfis independentes com identidade visual personalizada.
- Oito combinações automáticas de paleta clara e escura.
- Planejamento para todos os dias da semana, incluindo descanso.
- Aquecimento obrigatório antes do treino principal.
- Academia completa como modo padrão e opções alternativas.
- Registro de cargas, resultados, RPE e exercícios concluídos.
- Salvamento do treino completo com bloqueio do dia.
- Registro independente de corridas.
- Histórico e acompanhamento de evolução por perfil.

## Estrutura

```text
.
├── docs/
│   └── especificacao-v006.json
├── scripts/
│   └── validate.mjs
├── worker/
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

O aplicativo completo está em `worker/index.js`. Ele exporta uma função `fetch` no formato de JavaScript Worker e entrega a interface HTML, CSS e JavaScript ao navegador.

## Verificação

Requer Node.js 18 ou superior.

```bash
npm run validate
```

## Persistência atual

Os perfis e registros são armazenados em `localStorage`. Assim, os dados permanecem separados por navegador e aparelho. Sincronização entre dispositivos exigirá autenticação e banco de dados em uma evolução futura.

## Especificação

O arquivo `docs/especificacao-v006.json` reúne os requisitos funcionais, modelo de dados, regras de adaptação, identidade visual, critérios de aceitação e próximas evoluções sugeridas.

## Privacidade

Este repositório é privado. O código contém um perfil inicial e resultados de treino usados na personalização da versão atual.

