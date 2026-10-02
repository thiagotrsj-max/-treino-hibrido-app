# Missão Colégio Militar v0.15 — Questões Reais

Versão focada em provas anteriores verificadas.

## Principais mudanças
- Treino real com anti-repetição por aluno.
- Questão marcada como vista no momento da seleção pelo backend.
- Provas anteriores por instituição e ano.
- Modo prova completa quando todo o caderno está pronto.
- Revisão que prioriza assuntos com erros anteriores, mas busca outra questão inédita.
- Resposta salva por questão, com tempo real por item.
- Fila local de respostas pendentes quando a internet falha.
- Sessão de treino pode ser retomada após recarregar a página.
- Questões visuais permanecem bloqueadas até o suporte à imagem original estar pronto.

## Banco
A interface consulta as RPCs Supabase `get_real_bank_stats`, `get_real_exam_catalog`, `get_my_real_question_set` e `get_my_complete_real_exam`.
