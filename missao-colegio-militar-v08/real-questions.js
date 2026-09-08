// v0.8 — questões verificadas em provas anteriores.
// O enunciado é condensado/adaptado para o formato digital quando necessário.
// A referência sempre identifica escola, edição, caderno e número da questão.
(function(){
const PDF='https://www2.fab.mil.br/ctrb/images/2024/CONCURSOADMISSAO2025/Caderno_de_Questoes_6ano_Ensino_Fundamental_II_2025_Tipo_1.pdf';
const R=(n)=>({school:'CTRB',year:'2024/2025',exam:'Exame de Admissão • 6º ano • Tipo 1',question:'Questão '+n,adapted:true,url:PDF});
const REAL_Q=[
{id:201,dg:1,real:true,s:'Matemática',t:'Frações',d:2,q:'Cinco amigos dividiram uma pizza. Gustavo comeu 2/15, Chacon 1/3, Carlos 11/45 e Fernando 1/5. Sem sobrar pizza, quem comeu a maior parte?',a:['Gilberto','Chacon','Gustavo','Fernando','Carlos'],c:1,e:'Comparando as frações: 1/3 = 15/45, 11/45, 1/5 = 9/45 e 2/15 = 6/45. A maior é 1/3.',ref:R(31)},
{id:202,dg:1,real:true,s:'Matemática',t:'Volume e medidas',d:3,q:'Uma barragem é modelada como paralelepípedo de 2.000 m de largura, 180 m de altura e 205 km de extensão. Qual é seu volume aproximado em km³?',a:['7,38','73,8','7.380','73.800','73.800.000'],c:1,e:'Converta para quilômetros: 2 km × 0,18 km × 205 km = 73,8 km³.',ref:R(33)},
{id:203,dg:1,real:true,s:'Matemática',t:'Sistema de numeração',d:1,q:'Um número de quatro algarismos possui dois algarismos 1, um algarismo que vale 3.000 e outro que vale 6 dezenas. Qual é esse número?',a:['1.163','1.361','1.631','3.161','3.116'],c:3,e:'3.000 determina o 3 na ordem dos milhares e 6 dezenas determina o 6 nas dezenas. Com dois algarismos 1, forma-se 3.161.',ref:R(34)},
{id:204,dg:1,real:true,s:'Matemática',t:'Tempo',d:2,q:'A preparação de um bolo começou às 8h56 e terminou às 15h45. Quantos minutos durou o trabalho?',a:['350','409','563','950','1.450'],c:1,e:'De 8h56 a 15h45 são 6h49. Em minutos: 6 × 60 + 49 = 409.',ref:R(36)},
{id:205,dg:1,real:true,s:'Matemática',t:'Múltiplos e divisores',d:2,q:'Dois grupos passam pelo mesmo ponto a cada 15 e 18 minutos. Se coincidiram às 21h, quando ocorrerá o próximo encontro?',a:['22h30','23h15','0h18','1h','2h30'],c:0,e:'MMC(15,18) = 90 minutos. Somando 1h30 a 21h, chegamos a 22h30.',ref:R(39)},
{id:206,dg:1,real:true,s:'Matemática',t:'Perímetro',d:2,q:'Um colégio possui 6 quadras retangulares de 27 m por 16 m. Qual é a soma dos perímetros das seis quadras?',a:['1.119.744 m','186.624 m','516 m','258 m','86 m'],c:2,e:'Cada quadra tem perímetro 2 × (27 + 16) = 86 m. Para 6 quadras: 86 × 6 = 516 m.',ref:R(42)},
{id:207,dg:1,real:true,s:'Matemática',t:'Raciocínio algébrico',d:2,q:'Um número foi multiplicado por 2; depois somaram 8 e mais 20. O resultado foi 70. Qual era o número inicial?',a:['18','19','20','21','22'],c:3,e:'2x + 8 + 20 = 70. Assim, 2x = 42 e x = 21.',ref:R(43)},
{id:208,dg:1,real:true,s:'Matemática',t:'Média aritmética',d:3,q:'A média de 20 alunos é 6,7. Retirando as notas 8,0 e 0,0, qual passa a ser a média dos 18 alunos restantes?',a:['6,6','6,7','6,8','6,9','7,0'],c:4,e:'A soma original é 20 × 6,7 = 134. Retirando 8 e 0, restam 126 pontos. 126 ÷ 18 = 7,0.',ref:R(47)},
{id:209,dg:1,real:true,s:'Matemática',t:'Problemas',d:1,q:'Um aluno recebeu 10 pacotes de figurinhas do pai, 7 da mãe, 15 do avô e mais 8 figurinhas avulsas. Cada pacote tem 5. Quantas recebeu?',a:['200','198','188','172','168'],c:4,e:'São 32 pacotes: 32 × 5 = 160. Somando 8 figurinhas, totalizam 168.',ref:R(59)},
{id:210,dg:1,real:true,s:'Matemática',t:'Frações',d:3,q:'Dois sócios compraram uma empresa. Um pagou 5/8 do preço e o outro pagou os 3/8 restantes, equivalentes a R$ 450.000. Qual foi o preço total?',a:['R$ 1.150.000','R$ 1.300.000','R$ 1.200.000','R$ 1.500.000','R$ 2.000.000'],c:2,e:'Se 3/8 = R$ 450.000, então 1/8 = R$ 150.000. Logo, 8/8 = R$ 1.200.000.',ref:R(60)},
{id:211,dg:1,real:true,s:'Português',t:'Classes gramaticais',d:1,q:'Na expressão “os pequenos amigos”, a palavra “pequenos” pertence a qual classe gramatical?',a:['Artigo','Numeral','Substantivo','Advérbio','Adjetivo'],c:4,e:'“Pequenos” atribui uma característica ao substantivo “amigos”; portanto, é adjetivo.',ref:R(20)},
{id:212,dg:1,real:true,s:'Português',t:'Concordância verbal',d:2,q:'Em “ainda há muitas espécies para serem encontradas”, qual substituição mantém o sentido e a concordância?',a:['ainda existe muitas espécies','ainda existem muitas espécies','ainda procuramos muitas espécies','ainda estudamos muitas espécies','ainda se esconde muitas espécies'],c:1,e:'No sentido de existir, “haver” é impessoal. Ao trocar por “existir”, o verbo concorda com “muitas espécies”: existem.',ref:R(21)},
{id:213,dg:1,real:true,s:'Português',t:'Ortografia e sentido',d:2,q:'Assinale a frase em que “mal” ou “mau” está empregado corretamente.',a:['Seu mal humor é insuportável.','Antônio é um mal funcionário.','Hoje não estou bem e passo mal com despedidas.','Passo mau quando viajo de barco.','Gosto de carne mau passada.'],c:2,e:'“Mal” é o contrário de “bem”. Na frase, “passo mal” está correto. Já “mau” é o contrário de “bom”.',ref:R(25)},
{id:214,dg:1,real:true,s:'Português',t:'Verbos',d:1,q:'Na frase “Passou o tempo de brincar no quintal”, em que tempo do indicativo está o verbo “passou”?',a:['Presente','Pretérito perfeito','Pretérito imperfeito','Futuro do presente','Futuro do pretérito'],c:1,e:'“Passou” indica uma ação concluída no passado; está no pretérito perfeito do indicativo.',ref:R(27)}
];
REAL_Q.forEach(q=>{if(!Q.some(x=>x.id===q.id))Q.push(q)});

sourceHtml=function(q){
 if(!q.ref)return '';
 const p=[q.ref.school,q.ref.year,q.ref.exam,q.ref.question].filter(Boolean).map(esc);
 const label=q.ref.adapted?'🧾 Adaptada de prova real':'📚 Questão de prova anterior';
 const txt=`${label}: ${p.join(' • ')}`;
 return q.ref.url?`<div class="source"><a href="${q.ref.url}" target="_blank" rel="noopener" style="color:inherit;text-decoration:none">${txt}</a></div>`:`<div class="source">${txt}</div>`;
};

const chooseV07=choose;
choose=function(m){
 const c=ch();
 if(m==='diagnostico'){
   // Mantém o diagnóstico equilibrado, mas dá presença real a questões verificadas.
   const selected=chooseV07(m), real=shuffle(Q.filter(q=>q.real&&q.dg));
   const bySub=s=>real.filter(q=>q.s===s).slice(0,s==='Matemática'?5:3);
   const forced=[...bySub('Matemática'),...bySub('Português')];
   const ids=new Set(forced.map(q=>q.id));
   const rest=selected.filter(q=>!ids.has(q.id));
   const out=[...forced,...rest].slice(0,20);
   // garante 10/10
   const math=out.filter(q=>q.s==='Matemática').slice(0,10), port=out.filter(q=>q.s==='Português').slice(0,10);
   if(math.length<10) math.push(...shuffle(Q.filter(q=>(q.g||q.dg)&&q.s==='Matemática'&&!math.some(x=>x.id===q.id))).slice(0,10-math.length));
   if(port.length<10) port.push(...shuffle(Q.filter(q=>(q.g||q.dg)&&q.s==='Português'&&!port.some(x=>x.id===q.id))).slice(0,10-port.length));
   return shuffle([...math,...port]);
 }
 if(m==='exercicio'){
   const seen=new Set(c.answers.map(x=>x.qid)),recent=new Set(c.answers.slice(-30).map(x=>x.qid));
   const target=c.diagnostic.level==='Inicial'?1:c.diagnostic.level==='Intermediário'?2:3;
   const realRank=Q.filter(q=>q.real).map(q=>({q,sc:(!seen.has(q.id)?250:-80)+(recent.has(q.id)?-220:0)+(q.d===target?35:10)+Math.random()*10})).sort((a,b)=>b.sc-a.sc).map(x=>x.q);
   const freshReal=realRank.filter(q=>!seen.has(q.id)&&!recent.has(q.id));
   if(freshReal.length>=10)return diverse(freshReal,10);
   const base=chooseV07(m),out=[...freshReal];
   for(const q of base){if(!out.some(x=>x.id===q.id))out.push(q);if(out.length===10)break}
   return diverse(out,10);
 }
 return chooseV07(m);
};

// Pequeno indicador no painel do aluno para deixar claro o que está sendo treinado.
const oldRenderExerciseGate=renderExerciseGate;
renderExerciseGate=function(){
 oldRenderExerciseGate();
 if(ch()?.diagnostic?.completed){
   $('exerciseIntro').innerHTML+=`<br><span class="pill">🧾 Banco atual: ${Q.filter(q=>q.real).length} questões verificadas de prova anterior</span>`;
 }
};
})();
