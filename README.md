# Treino Híbrido

Aplicativo web de personal trainer híbrido e adaptativo, com foco em força, condicionamento, estética, desempenho e preparação operacional.

## Versões publicadas

- [GitHub Pages](https://thiagotrsj-max.github.io/-treino-hibrido-app/)
- [Sites](https://treino-hibrido-app.trsj.chatgpt.site)

## Recursos da V002

- Entrevista inicial equilibrada com idade, peso, altura e IMC de referência.
- Objetivos múltiplos com definição de uma prioridade principal.
- Registro de experiência, restrições, dias disponíveis, duração e ambientes.
- Perfis independentes com identidade visual e oito paletas personalizadas.
- Planejamento para todos os dias da semana, incluindo descanso.
- Aquecimento obrigatório antes do treino principal.
- Academia completa como padrão e modos alternativos.
- Três seções organizadas: treino principal, calistenia e condicionamento.
- Links de vídeos para auxiliar a execução de cada exercício.
- Registro de cargas, resultados, RPE e complementos concluídos.
- Salvamento do treino completo com bloqueio do dia.
- Registro independente de corridas.
- Histórico e acompanhamento de evolução por perfil.

## Estrutura

```text
.
├── docs/
│   └── especificacao-v006.json
├── scripts/
│   ├── export-static.mjs
│   └── validate.mjs
├── worker/
│   └── index.js
├── index.html
├── .gitignore
├── package.json
└── README.md
```

O aplicativo completo está em `worker/index.js`. O arquivo `index.html` é a versão estática gerada para o GitHub Pages.

## Verificação

Requer Node.js 18 ou superior.

```bash
npm run build:pages
npm run validate
```

## Persistência atual

Os perfis e registros são armazenados em `localStorage`. Assim, os dados permanecem separados por navegador e aparelho. Sincronização entre dispositivos exigirá autenticação e banco de dados em uma evolução futura.

## Privacidade

A versão pública não contém perfil pessoal pré-carregado. Cada visitante cria seus próprios perfis e os dados ficam somente no `localStorage` do respectivo navegador.
