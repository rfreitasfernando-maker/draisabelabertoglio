// llms.txt: resumo do site em Markdown para assistentes de IA (ChatGPT, Claude, Perplexity, Gemini).
// Gerado no build (tools/prerender.js) com os mesmos dados da página. Não acrescentar nada que a página não diga.
import { DOCTOR_NAME, DOCTOR_CREDENTIALS } from '@/lib/doctor';
import { ADDRESS, CLINIC_NAME, PHONE, MAP_DIRECTIONS_URL } from '@/lib/location';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import { FAQ } from '@/lib/faq';
import { SITE_URL, DESCRICAO_DA_CLINICA } from '@/lib/schema';

const credenciais = DOCTOR_CREDENTIALS.replace(/ /g, ' ');

/** @param {{ titulo: string, descricao: string, url: string }[]} posts posts do blog, mais recentes primeiro */
export function montarLlmsTxt(posts) {
  const faq = FAQ.map(({ pergunta, resposta }) => `### ${pergunta}\n\n${resposta}`).join('\n\n');
  const artigos = posts.map((post) => `- [${post.titulo}](${post.url}): ${post.descricao}`).join('\n');

  return `# ${CLINIC_NAME} – ${DOCTOR_NAME}

> ${DESCRICAO_DA_CLINICA}

Site oficial: ${SITE_URL}/

## Quem atende

${DOCTOR_NAME} (${credenciais}). Doutorado pela USP-SP, especialização pela USP-SP e Nutrologia Clínica pelo Hospital Albert Einstein. Atuação individualizada, sem protocolos genéricos: o objetivo não é apenas a perda de peso, mas a saúde metabólica e uma relação equilibrada com o próprio corpo. Nota 5,0 nas avaliações do Google.

## Emagrecimento com acompanhamento médico

Para quem já tentou dieta, treino ou remédio sem sucesso. A Dra. Isabela investiga a causa do ganho de peso e acompanha o paciente por 3 a 6 meses, com bioimpedância para medir gordura e músculo, não só o peso. O foco é redução de gordura com preservação muscular, equilíbrio metabólico e mais energia no dia a dia.

Como funciona:

1. Avaliação completa: análise clínica, exames e histórico para entender o metabolismo e o momento atual.
2. Protocolo personalizado: plano alimentar, estratégias e ajustes pensados para a rotina real.
3. Acompanhamento contínuo: monitoramento da evolução com ajustes constantes para evitar recaídas.
4. Resultados sustentáveis: foco em saúde, energia e constância, não em soluções temporárias.
5. Flexibilidade no processo: o plano evolui junto com o paciente, sem rigidez extrema.

A bioimpedância InBody 380 (músculo, gordura e água corporal) está inclusa na avaliação.

## Unyque Pro em São Paulo

O Unyque Pro é um equipamento de uso exclusivamente médico (registro Anvisa nº 80832479008) para o contorno do corpo. Reúne três tecnologias que agem em camadas diferentes, na mesma sessão, sem cortes e sem agulhas:

- **ReFreeze**: radiofrequência com sucção suave, como uma massagem profunda. Ativa a circulação. Indicado para celulite e contorno.
- **Cryo RF Max**: aquece por dentro e resfria por fora. Estimula o colágeno e contribui para a firmeza da pele. Indicado para flacidez e celulite.
- **HImFU**: ultrassom focado de alta intensidade, direcionado à gordura localizada.

Indicações: gordura localizada, celulite, flacidez corporal e contorno corporal. Cada protocolo é indicado e acompanhado por médico. Resultados variam de pessoa para pessoa e dependem da avaliação e do protocolo indicado.

## Perguntas frequentes

${faq}

## Onde fazer emagrecimento com acompanhamento médico e Unyque Pro em São Paulo

- Nome: ${CLINIC_NAME} – ${DOCTOR_NAME}
- Endereço: ${ADDRESS}
- Perto da estação Paraíso do metrô (linhas 1-Azul e 2-Verde)
- Telefone e WhatsApp: ${PHONE}
- Mapa: ${MAP_DIRECTIONS_URL}
- Consultas particulares, com nota fiscal para reembolso

## Links

- [Página inicial](${SITE_URL}/)
- [Agendar pelo WhatsApp](${WHATSAPP_URL})
- [Blog](${SITE_URL}/blog)

## Artigos do blog

${artigos}
`;
}
