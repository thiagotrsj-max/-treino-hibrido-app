// v0.7 — evolução incremental sobre a base v0.6
// Todas as questões adicionadas aqui são originais; por isso não exibem referência.
// Quando uma questão vier de prova externa, use: ref:{school:'CMBEL',year:'2025',exam:'Admissão 6º ano',question:'Q. 12'}

const EXTRA_Q=[
{id:101,dg:1,s:'Matemática',t:'Operações',d:1,q:'Quanto é 625 - 278?',a:['337','347','357','367'],c:1,e:'Subtraindo por ordens: 625 - 278 = 347.'},
{id:102,dg:1,s:'Matemática',t:'Operações',d:2,q:'Quanto é 36 × 17?',a:['592','602','612','622'],c:2,e:'36 × 17 = 36 × 10 + 36 × 7 = 360 + 252 = 612.'},
{id:103,dg:1,s:'Matemática',t:'Frações',d:1,q:'Qual fração representa 5 partes de um total de 8 partes iguais?',a:['3/8','5/8','5/3','8/5'],c:1,e:'São 5 partes escolhidas de um total de 8: 5/8.'},
{id:104,dg:1,s:'Matemática',t:'Frações',d:2,q:'Quanto é 1/3 + 2/3?',a:['1/3','2/3','1','5/3'],c:2,e:'Com denominadores iguais, somamos os numeradores: 1 + 2 = 3. Logo, 3/3 = 1.'},
{id:105,dg:1,s:'Matemática',t:'Geometria',d:1,q:'Um retângulo mede 6 cm por 4 cm. Qual é sua área?',a:['10 cm²','20 cm²','24 cm²','28 cm²'],c:2,e:'Área do retângulo = base × altura = 6 × 4 = 24 cm².'},
{id:106,dg:1,s:'Matemática',t:'Geometria',d:3,q:'Um terreno retangular tem 15 m de comprimento e 8 m de largura. Quantos metros de cerca são necessários para contorná-lo?',a:['46 m','92 m','120 m','240 m'],c:0,e:'Precisamos do perímetro: 15 + 8 + 15 + 8 = 46 m.'},
{id:107,dg:1,s:'Matemática',t:'Medidas',d:2,q:'1,75 kg correspondem a quantos gramas?',a:['175 g','750 g','1.075 g','1.750 g'],c:3,e:'1 kg = 1.000 g. Logo, 1,75 kg = 1.750 g.'},
{id:108,dg:1,s:'Matemática',t:'Porcentagem',d:3,q:'Uma camisa de R$ 160 recebeu desconto de 20%. Qual é o novo preço?',a:['R$ 120','R$ 128','R$ 132','R$ 140'],c:1,e:'20% de 160 = 32. Então, 160 - 32 = 128.'},
{id:109,dg:1,s:'Matemática',t:'Problemas',d:2,q:'Uma escola recebeu 168 livros para dividir igualmente entre 7 turmas. Quantos livros cada turma receberá?',a:['21','22','23','24'],c:3,e:'168 ÷ 7 = 24.'},
{id:110,dg:1,s:'Matemática',t:'Raciocínio',d:3,q:'Ana pensou em um número, multiplicou-o por 4 e obteve 52. Em qual número ela pensou?',a:['11','12','13','14'],c:2,e:'Se 4 × n = 52, então n = 52 ÷ 4 = 13.'},
{id:111,dg:1,s:'Matemática',t:'Tempo',d:1,q:'Quantos minutos existem em 2 horas e 15 minutos?',a:['105','120','135','150'],c:2,e:'2 horas = 120 minutos. 120 + 15 = 135 minutos.'},
{id:112,dg:1,s:'Matemática',t:'Sequências',d:3,q:'4, 9, 14, 19, __',a:['22','23','24','25'],c:2,e:'A sequência aumenta sempre 5 unidades: 19 + 5 = 24.'},
{id:113,dg:1,s:'Português',t:'Interpretação',d:1,q:'“Pedro levou o guarda-chuva, embora o céu ainda estivesse claro.” O objeto levado por Pedro indica que ele:',a:['esperava chuva','iria nadar','estava com frio','queria viajar'],c:0,e:'O guarda-chuva é uma pista de que Pedro considerava a possibilidade de chuva.'},
{id:114,dg:1,s:'Português',t:'Interpretação',d:3,q:'“Clara releu o enunciado duas vezes antes de responder.” Essa atitude demonstra principalmente:',a:['pressa','atenção','desinteresse','esquecimento'],c:1,e:'Reler antes de responder indica cuidado e atenção à compreensão do enunciado.'},
{id:115,dg:1,s:'Português',t:'Ortografia',d:1,q:'Assinale a palavra escrita corretamente.',a:['pesquiza','pesquisa','pesquissa','pequisa'],c:1,e:'A forma correta é “pesquisa”.'},
{id:116,dg:1,s:'Português',t:'Acentuação',d:2,q:'Qual palavra está corretamente acentuada?',a:['arvore','árvore','arvóre','árvóre'],c:1,e:'“Árvore” é proparoxítona; toda proparoxítona é acentuada.'},
{id:117,dg:1,s:'Português',t:'Classes gramaticais',d:2,q:'Em “O atleta correu rapidamente”, a palavra “rapidamente” indica:',a:['um ser','uma ação','o modo da ação','uma qualidade do atleta'],c:2,e:'“Rapidamente” modifica o verbo “correu” e indica o modo como a ação aconteceu.'},
{id:118,dg:1,s:'Português',t:'Verbos',d:1,q:'Em “Ontem nós visitamos o museu”, o verbo está no:',a:['presente','passado','futuro','infinitivo'],c:1,e:'“Visitamos”, acompanhado de “ontem”, indica uma ação passada.'},
{id:119,dg:1,s:'Português',t:'Pontuação',d:2,q:'Qual frase apresenta uma enumeração corretamente pontuada?',a:['Comprei lápis borracha, régua e caderno.','Comprei lápis, borracha, régua e caderno.','Comprei, lápis borracha régua e caderno.','Comprei lápis; borracha régua e caderno.'],c:1,e:'Os itens da enumeração devem ser separados por vírgulas.'},
{id:120,dg:1,s:'Português',t:'Vocabulário',d:1,q:'A palavra “tranquilo” tem sentido mais próximo de:',a:['calmo','agitado','barulhento','apressado'],c:0,e:'“Calmo” é um sinônimo adequado de “tranquilo”.'},
{id:121,dg:1,s:'Português',t:'Pronomes',d:2,q:'Em “Marina trouxe seu livro”, a palavra “seu” é:',a:['pronome possessivo','verbo','substantivo','artigo'],c:0,e:'“Seu” indica posse e funciona como pronome possessivo.'},
{id:122,dg:1,s:'Português',t:'Concordância',d:3,q:'Assinale a frase em que a concordância está correta.',a:['Os menino chegou cedo.','As alunas estudaram bastante.','A professores explicaram.','Os livros caiu da mesa.'],c:1,e:'Em “As alunas estudaram bastante”, artigo, substantivo e verbo concordam adequadamente.'},
{id:123,dg:1,s:'Português',t:'Coesão',d:3,q:'“Estava cansado; ______, terminou a tarefa.” Qual palavra expressa contraste?',a:['portanto','porém','porque','logo'],c:1,e:'“Porém” introduz uma ideia de contraste: estava cansado, mas terminou a tarefa.'},
{id:124,dg:1,s:'Português',t:'Interpretação',d:2,q:'“O sino tocou e os alunos guardaram os materiais.” O que provavelmente aconteceu?',a:['A aula começou','A aula terminou','Começou uma prova','Chegou um visitante'],c:1,e:'Guardar os materiais após o toque do sino sugere o encerramento da aula.'}
];
EXTRA_Q.forEach(nq=>{if(!Q.some(q=>q.id===nq.id))Q.push(nq)});

function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function sourceHtml(q){
  if(!q.ref)return '';
  if(typeof q.ref==='string')return `<div class="source">📚 Referência: ${esc(q.ref)}</div>`;
  const p=[q.ref.school,q.ref.year,q.ref.exam,q.ref.question].filter(Boolean).map(esc);
  return p.length?`<div class="source">📚 Referência: ${p.join(' • ')}</div>`:'';
}
function pickDiagnosticSubject(subject,lastIds){
  const wanted={1:3,2:4,3:3},out=[];
  const pool=Q.filter(q=>(q.g||q.dg)&&q.s===subject&&!lastIds.has(q.id));
  [1,2,3].forEach(d=>out.push(...shuffle(pool.filter(q=>q.d===d)).slice(0,wanted[d])));
  if(out.length<10){const used=new Set(out.map(q=>q.id));out.push(...shuffle(pool.filter(q=>!used.has(q.id))).slice(0,10-out.length))}
  if(out.length<10){const used=new Set(out.map(q=>q.id));out.push(...shuffle(Q.filter(q=>(q.g||q.dg)&&q.s===subject&&!used.has(q.id))).slice(0,10-out.length))}
  return out.slice(0,10);
}
function diverse(ranked,n){
  const out=[],count={};
  for(const item of ranked){const q=item.q||item,key=q.s+'|'+q.t;if((count[key]||0)>=2)continue;out.push(q);count[key]=(count[key]||0)+1;if(out.length===n)break}
  if(out.length<n){const used=new Set(out.map(q=>q.id));for(const item of ranked){const q=item.q||item;if(!used.has(q.id)){out.push(q);used.add(q.id);if(out.length===n)break}}}
  return out;
}

choose=function(m){
  const c=ch();
  if(m==='diagnostico'){
    const last=new Set(c.lastDiagnosticIds||[]);
    return shuffle([...pickDiagnosticSubject('Matemática',last),...pickDiagnosticSubject('Português',last)]);
  }
  const pool=Q;
  const seen=new Set(c.answers.map(x=>x.qid));
  const recent=new Set(c.answers.slice(-30).map(x=>x.qid));
  const wrongCount={};c.answers.filter(x=>!x.ok).forEach(x=>wrongCount[x.qid]=(wrongCount[x.qid]||0)+1);
  const subjectPerf={};['Matemática','Português'].forEach(s=>{const a=c.answers.filter(x=>x.s===s);subjectPerf[s]=a.length?Math.round(a.filter(x=>x.ok).length*100/a.length):(c.diagnostic.subject?.[s]??60)});
  const weak=Object.entries(subjectPerf).sort((a,b)=>a[1]-b[1])[0]?.[0];
  const target=c.diagnostic.level==='Inicial'?1:c.diagnostic.level==='Intermediário'?2:3;
  if(m==='revisao'){
    const ranked=pool.map(q=>({q,sc:(wrongCount[q.id]||0)*90+(q.s===weak?35:0)+(q.d===target?18:0)+(recent.has(q.id)?-45:0)+Math.random()*12})).sort((a,b)=>b.sc-a.sc);
    return diverse(ranked,Math.min(10,ranked.length));
  }
  const ranked=pool.map(q=>({q,sc:(!seen.has(q.id)?180:-70)+(recent.has(q.id)?-180:0)+(q.d===target?45:Math.abs(q.d-target)===1?15:-10)+(q.s===weak?25:0)+Math.random()*15})).sort((a,b)=>b.sc-a.sc);
  return diverse(ranked,Math.min(10,ranked.length));
};

renderDiagGate=function(){
  const c=ch(),done=!!c.diagnostic.completed;
  $('diagArea').innerHTML=done?`<div class=ok><b>Diagnóstico concluído.</b><br>Nível ${c.diagnostic.level} • ${c.diagnostic.score}%.</div>`:'';
  $('startDiag').classList.toggle('hide',done);
};

startSession=function(m){
  if(m==='diagnostico')$('startDiag').classList.add('hide');
  if(m==='exercicio')$('startExercise').classList.add('hide');
  if(m==='revisao')$('startReview').classList.add('hide');
  live={mode:m,qs:choose(m),answers:{},start:Date.now()};
  renderLive();
};

renderLive=function(){
  const box=live.mode==='diagnostico'?$('diagArea'):live.mode==='revisao'?$('reviewArea'):$('exerciseArea');
  const title=live.mode==='diagnostico'?'Diagnóstico':live.mode==='revisao'?'Revisão':'Exercícios',n=live.qs.length;
  box.innerHTML=`<div class="sticky bar"><div><b>${title} • ${n} questões</b><div class=mut><span id=answered>0</span>/${n} respondidas</div></div><div><div class=mut>Tempo</div><div id=clock class=timer>0s</div></div></div>`+
  live.qs.map((q,i)=>`<div class=question><div class=mut>${q.s} • ${q.t} • nível ${q.d}</div>${sourceHtml(q)}<h3>${i+1}. ${q.q}</h3><div class=answers>${q.a.map((a,j)=>`<label class=opt data-q="${i}" data-a="${j}"><input type=radio name="q${i}"><span><b>${String.fromCharCode(65+j)})</b> ${a}</span></label>`).join('')}</div></div>`).join('')+'<button id=finish class=btn>Entregar respostas</button>';
  box.querySelectorAll('.opt').forEach(el=>el.onclick=()=>{const i=+el.dataset.q,j=+el.dataset.a;live.answers[i]=j;el.closest('.answers').querySelectorAll('.opt').forEach(x=>x.classList.remove('selected'));el.classList.add('selected');$('answered').textContent=Object.keys(live.answers).length});
  $('finish').onclick=finish;clearInterval(timer);timer=setInterval(()=>{if($('clock'))$('clock').textContent=fmt((Date.now()-live.start)/1000)},1000);
};

finish=function(){
  const n=live.qs.length;if(Object.keys(live.answers).length<n&&!confirm('Há questões sem resposta. Entregar assim mesmo?'))return;
  clearInterval(timer);const c=ch(),modeNow=live.mode,sec=Math.max(1,Math.round((Date.now()-live.start)/1000)),per=Math.round(sec/n);let ok=0;const res=[];
  live.qs.forEach((q,i)=>{const sel=live.answers[i],hit=sel===q.c;if(hit)ok++;res.push({q,sel,hit});c.answers.push({qid:q.id,s:q.s,t:q.t,d:q.d,ok:hit,mode:modeNow,day:day(),sec:per,ts:Date.now(),ref:q.ref||null})});
  const score=Math.round(ok*100/n);c.sessions.push({mode:modeNow,day:day(),score,totalSec:sec,avgSec:per});
  if(modeNow==='diagnostico'){
    const subject={};['Matemática','Português'].forEach(s=>{const a=res.filter(x=>x.q.s===s);subject[s]=Math.round(a.filter(x=>x.hit).length*100/a.length)});
    c.diagnostic={completed:true,score,level:level(score),date:day(),subject,questionIds:res.map(x=>x.q.id)};
  }
  save();
  const box=modeNow==='diagnostico'?$('diagArea'):modeNow==='revisao'?$('reviewArea'):$('exerciseArea');
  box.innerHTML=`<div class=${score>=70?'ok':'note'}><b>${modeNow==='diagnostico'?'Diagnóstico':'Sessão'}: ${ok}/${n} (${score}%).</b><br>Tempo: ${fmt(sec)} • média ${fmt(per)} por questão.${modeNow==='diagnostico'?`<br><b>Nível identificado: ${c.diagnostic.level}</b>`:''}</div><h3>Correção comentada</h3>`+
  res.map((r,i)=>`<div class="review ${r.hit?'correct':'wrong'}"><div class=mut>${r.q.s} • ${r.q.t}</div>${sourceHtml(r.q)}<h3>${i+1}. ${r.q.q}</h3><div class=${r.hit?'ok':'bad'}><b>${r.hit?'✅ Acertou':'❌ Errou'}</b><br>Sua resposta: ${r.sel==null?'Não respondida':String.fromCharCode(65+r.sel)+') '+r.q.a[r.sel]}${r.hit?'':`<br>Correta: ${String.fromCharCode(65+r.q.c)}) ${r.q.a[r.q.c]}`}</div><div class=comment><b>Comentário:</b> ${r.q.e}</div></div>`).join('')+
  (modeNow==='diagnostico'?'<button id=goHome class=btn>Ir para meu painel</button>':'');
  live=null;navChild();
  if(modeNow==='diagnostico')$('startDiag').classList.add('hide');
  if(modeNow==='exercicio')$('startExercise').classList.remove('hide');
  if(modeNow==='revisao')$('startReview').classList.remove('hide');
  if($('goHome'))$('goHome').onclick=()=>{show('childHome');renderHome()};
};

window.resetDiag=id=>{
  const c=db.family.children.find(x=>x.id===id);if(!c)return;
  if(!confirm('Resetar o diagnóstico de '+c.name+'? No próximo acesso o teste será obrigatório novamente.'))return;
  c.lastDiagnosticIds=[...(c.diagnostic.questionIds||c.answers.filter(x=>x.mode==='diagnostico').map(x=>x.qid))];
  c.diagnostic={completed:false};
  c.answers=c.answers.filter(x=>x.mode!=='diagnostico');
  c.sessions=c.sessions.filter(x=>x.mode!=='diagnostico');
  save();renderParent();
};
