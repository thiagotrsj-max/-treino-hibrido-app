# Treino Híbrido

Aplicativo web de personal trainer híbrido e adaptativo, com prescrição personalizada para força, desempenho, hipertrofia, condicionamento, corrida, saúde e preparação operacional.

## Versão publicada

- [GitHub Pages](https://thiagotrsj-max.github.io/-treino-hibrido-app/)

## Novidades da V004

- Separação entre exercício, método e intensidade.
- EMOM apresentado como método, com exercício, minuto, repetições e rodadas definidos.
- Zona 2 apresentada como intensidade de uma modalidade concreta: bicicleta, esteira, corrida leve ou caminhada.
- Modos alternativos também disponíveis nas sessões aeróbias.
- Aquecimentos e mobilidade com movimentos executáveis em vez de rótulos genéricos.
- Testes automáticos impedem que EMOM, circuito, técnica ou zona sejam cadastrados como exercício.

## Personalização da V003

- Programas distintos para força, desempenho atlético, hipertrofia, emagrecimento, condicionamento, corrida, TAF, estética, operacional, mobilidade e saúde.
- TAF somente quando escolhido explicitamente; desempenho atlético não é tratado como TAF.
- Seleção semanal adaptada à prioridade, objetivos complementares e frequência disponível.
- Volume e intensidade ajustados ao nível, duração, idade, IMC de referência e restrições informadas.
- Métricas de evolução específicas para o objetivo principal.
- Entrevista inicial com idade, peso, altura, experiência, restrições, frequência, duração e ambientes.
- Perfis independentes, planejamento diário, aquecimento, modos alternativos, registros de cargas, corridas, histórico e evolução.

## Verificação

Requer Node.js 18 ou superior.

```bash
npm run build:pages
npm run validate
```

## Persistência e privacidade

Os perfis e registros são armazenados em `localStorage`. Cada visitante cria seus próprios perfis, e os dados permanecem somente no navegador e aparelho utilizados.
