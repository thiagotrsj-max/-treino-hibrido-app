# Treino Híbrido

Aplicativo web de personal trainer híbrido e adaptativo, com prescrição personalizada para força, desempenho, hipertrofia, condicionamento, corrida, saúde e preparação operacional.

## Versões publicadas

- [GitHub Pages](https://thiagotrsj-max.github.io/-treino-hibrido-app/)
- [Sites](https://treino-hibrido-app.trsj.chatgpt.site)

## Recursos da V003

- Motor com programas distintos para força, desempenho atlético, hipertrofia, emagrecimento, condicionamento, corrida, TAF, estética, operacional, mobilidade e saúde.
- TAF somente quando escolhido explicitamente; desempenho atlético não é tratado como TAF.
- Seleção semanal adaptada à prioridade, objetivos complementares e frequência disponível.
- Volume e intensidade ajustados ao nível, duração, idade, IMC de referência e restrições informadas.
- Métricas de evolução específicas para o objetivo principal.
- Entrevista inicial com idade, peso, altura, experiência, restrições, frequência, duração e ambientes.
- Objetivos múltiplos com definição de uma prioridade principal.
- Perfis independentes com identidade visual e oito paletas personalizadas.
- Planejamento para todos os dias da semana, incluindo descanso.
- Aquecimento antes do treino principal.
- Academia completa como padrão e modos alternativos.
- Seções de treino principal, calistenia e condicionamento.
- Links de vídeos para auxiliar a execução dos exercícios.
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
│   ├── test-personalization.mjs
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
