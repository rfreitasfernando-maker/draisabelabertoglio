#!/usr/bin/env python3
# Gera as imagens de compartilhamento (Open Graph, 1200 × 630) das páginas de serviço (src/servicos).
#
#   python3 tools/og-servicos.py                 todas
#   python3 tools/og-servicos.py tratamentos-obesidade   só as indicadas (nome do arquivo, sem extensão)
#
# Desenha cada imagem em HTML no Chrome (2400 × 1260, para o texto ficar nítido) e grava o PNG em
# fotos-originais/servicos-og/ (fora do repositório). Depois, converter para public/servicos/<nome>-og.jpg com:
#   node -e "require('sharp')('fotos-originais/servicos-og/<nome>.png').resize(1200,630).jpeg({quality:84,mozjpeg:true}).toFile('public/servicos/<nome>-og.jpg')"
# O texto alternativo de cada imagem fica em `imagemSocial` (src/servicos/index.js).
import os, subprocess, sys, json
from urllib.parse import quote
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AQUI = os.path.join(R, 'fotos-originais', 'servicos-og')
os.makedirs(AQUI, exist_ok=True)
U = 'file://' + quote(R)  # caminho com espaços e acento: precisa ir codificado nas URLs
F = f'{U}/public/fonts'
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

RETRATO = (f'{U}/public/dra-isabela-bertoglio.jpg', 'center 18%')
MESA = (f'{U}/fotos-originais/quem-sou-eu.jpg', '38% 40%')
RECEPCAO = (f'{U}/fotos-originais/Thiago Travesso_18122023_006.jpg', 'center 55%')
INBODY = f'{U}/fotos-originais/inbody-380-original.png'
UNYQUE = f'{U}/public/unyque/unyque-pro-equipamento.webp'

# arquivo, sobretítulo, título, complemento em itálico, foto, alt
PAGINAS = [
 ('tratamentos', 'Nutrologia em São Paulo', 'Tratamentos', 'em nutrologia e emagrecimento', RETRATO,
  'Dra. Isabela Bertoglio, nutróloga, ao lado do título Tratamentos em nutrologia e emagrecimento'),
 ('tratamentos-obesidade', 'Tratamento', 'Obesidade', 'com acompanhamento médico', RETRATO,
  'Dra. Isabela Bertoglio, nutróloga, ao lado do título Tratamento da obesidade com acompanhamento médico'),
 ('tratamentos-canetas-emagrecedoras', 'Tratamento', 'Canetas emagrecedoras', 'com acompanhamento médico', MESA,
  'Dra. Isabela Bertoglio no consultório da Clínica Belvitá, ao lado do título Canetas emagrecedoras com acompanhamento médico'),
 ('tratamentos-resistencia-a-insulina', 'Tratamento', 'Resistência à insulina', 'e pré-diabetes', RETRATO,
  'Dra. Isabela Bertoglio, nutróloga, ao lado do título Resistência à insulina e pré-diabetes'),
 ('tratamentos-sindrome-metabolica', 'Tratamento', 'Síndrome metabólica', 'colesterol, triglicérides e glicose', MESA,
  'Dra. Isabela Bertoglio no consultório da Clínica Belvitá, ao lado do título Síndrome metabólica'),
 ('tratamentos-gordura-no-figado', 'Tratamento', 'Gordura no fígado', 'esteatose hepática', RETRATO,
  'Dra. Isabela Bertoglio, nutróloga, ao lado do título Gordura no fígado'),
 ('tratamentos-cansaco-e-deficiencia-de-vitaminas', 'Investigação', 'Cansaço constante', 'e deficiência de vitaminas', MESA,
  'Dra. Isabela Bertoglio no consultório da Clínica Belvitá, ao lado do título Cansaço constante e deficiência de vitaminas'),
 ('tratamentos-saude-da-mulher', 'Tratamento', 'Saúde da mulher', 'menopausa, SOP e pós-parto', RETRATO,
  'Dra. Isabela Bertoglio, nutróloga, ao lado do título Saúde da mulher: menopausa, SOP e pós-parto'),
 ('tratamentos-nutrologia-no-lipedema', 'Acompanhamento', 'Lipedema', 'cuidado nutrológico', MESA,
  'Dra. Isabela Bertoglio no consultório da Clínica Belvitá, ao lado do título Acompanhamento nutrológico no lipedema'),
 ('tratamentos-preparo-para-cirurgia-plastica', 'Preparo', 'Cirurgia plástica', 'nutrição no pré e pós-operatório', RETRATO,
  'Dra. Isabela Bertoglio, nutróloga, ao lado do título Preparo nutrológico para cirurgia plástica'),
 ('tecnologias-bioimpedancia-inbody', 'Tecnologia', 'Bioimpedância', 'InBody 380', ('produto', INBODY),
  'Aparelho de bioimpedância InBody 380 da Clínica Belvitá, ao lado do título Bioimpedância InBody 380'),
 ('tecnologias-unyque-pro', 'Tecnologia', 'Unyque Pro', 'contorno depois de emagrecer', ('produto', UNYQUE),
  'Equipamento Unyque Pro da Clínica Belvitá, ao lado do título Unyque Pro: contorno depois de emagrecer'),
 ('dra-isabela-bertoglio', 'Médica nutróloga', 'Dra. Isabela Bertoglio', 'nutróloga em São Paulo', RETRATO,
  'Dra. Isabela Bertoglio, nutróloga em São Paulo, no consultório'),
 ('consulta-nutrologia', 'Primeira consulta', 'Consulta de nutrologia', 'como funciona', RECEPCAO,
  'Recepção da Clínica Belvitá, ao lado do título Consulta de nutrologia: como funciona'),
]

CSS = f"""
@font-face{{font-family:Cormorant;src:url({F}/cormorant-garamond-latin.woff2) format('woff2'),url({F}/cormorant-garamond-latin-ext.woff2) format('woff2');font-weight:300 500;font-style:normal}}
@font-face{{font-family:Cormorant;src:url({F}/cormorant-garamond-italic-latin.woff2) format('woff2'),url({F}/cormorant-garamond-italic-latin-ext.woff2) format('woff2');font-weight:300 500;font-style:italic}}
@font-face{{font-family:Inter;src:url({F}/inter-latin.woff2) format('woff2'),url({F}/inter-latin-ext.woff2) format('woff2');font-weight:100 900}}
*{{margin:0;padding:0;box-sizing:border-box}}
html,body{{width:1200px;height:630px;overflow:hidden;background:#2c2824}}
.foto{{position:absolute;right:0;top:0;width:560px;height:630px;object-fit:cover}}
.veu{{position:absolute;right:0;top:0;width:560px;height:630px;background:linear-gradient(90deg,#2c2824 0%,rgba(44,40,36,.55) 16%,rgba(44,40,36,0) 42%),linear-gradient(0deg,rgba(44,40,36,.35) 0%,rgba(44,40,36,0) 30%)}}
.painel{{position:absolute;right:0;top:0;width:520px;height:630px;background:radial-gradient(ellipse 360px 300px at 55% 48%,#ffffff 0%,#f4ede2 55%,#e9dfcf 100%)}}
.painel img{{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);max-height:540px;max-width:380px;mix-blend-mode:multiply}}
.filete-v{{position:absolute;left:680px;top:0;width:2px;height:630px;background:linear-gradient(180deg,rgba(201,178,138,0),#c9b28a 30%,#c9b28a 70%,rgba(201,178,138,0))}}
.texto{{position:absolute;left:64px;top:56px;bottom:52px;width:600px;display:flex;flex-direction:column}}
.logo{{height:52px;width:auto;align-self:flex-start;opacity:.95}}
.sobre{{margin-top:44px;font-family:Inter;font-weight:500;font-size:14px;letter-spacing:.3em;text-transform:uppercase;color:#c9b28a}}
h1{{margin-top:14px;font-family:Cormorant;font-weight:300;color:#fff;font-size:var(--tam,70px);line-height:1.02;letter-spacing:-.5px}}
h1 em{{display:block;text-wrap:balance;hyphens:none;margin-top:6px;font-style:italic;font-weight:400;color:#d9c39b;font-size:.62em;line-height:1.12;letter-spacing:0}}
.filete{{margin-top:28px;width:96px;height:2px;background:linear-gradient(90deg,#c9b28a,rgba(201,178,138,0))}}
.rodape{{margin-top:auto;font-family:Inter;color:rgba(255,255,255,.86)}}
.nome{{font-size:18px;font-weight:500;letter-spacing:.01em}}
.nome span{{color:#c9b28a;font-weight:400}}
.reg{{margin-top:6px;font-size:13px;letter-spacing:.14em;color:rgba(255,255,255,.55)}}
.local{{margin-top:12px;font-size:14px;color:rgba(255,255,255,.72)}}
"""

def html(sobre, titulo, comp, foto):
    tam = '70px' if len(titulo) <= 18 else ('60px' if len(titulo) <= 23 else '54px')
    if foto[0] == 'produto':
        lado = f'<div class="painel"><img src="{foto[1]}"></div><div class="filete-v"></div>'
    else:
        lado = f'<img class="foto" src="{foto[0]}" style="object-position:{foto[1]}"><div class="veu"></div>'
    return f'''<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><style>{CSS}</style></head><body>
{lado}
<div class="texto" style="--tam:{tam}">
  <img class="logo" src="{U}/public/logo-monograma.webp">
  <p class="sobre">{sobre}</p>
  <h1>{titulo}<em>{comp}</em></h1>
  <div class="filete"></div>
  <div class="rodape">
    <p class="nome">Dra. Isabela Bertoglio <span>· Médica nutróloga</span></p>
    <p class="reg">CRM-SP 194436 · RQE 84645 · RQE 86835</p>
    <p class="local">Clínica Belvitá · Paraíso, São Paulo</p>
  </div>
</div></body></html>'''

so = sys.argv[1:]
alts = {}
for arq, sobre, titulo, comp, foto, alt in PAGINAS:
    alts[arq] = alt
    if so and arq not in so: continue
    h = os.path.join(AQUI, f'{arq}.html'); png = os.path.join(AQUI, f'{arq}.png')
    open(h, 'w', encoding='utf-8').write(html(sobre, titulo, comp, foto))
    if os.path.exists(png): os.remove(png)
    subprocess.run([CHROME, '--headless', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files',
                    '--virtual-time-budget=6000', '--force-device-scale-factor=2', '--window-size=1200,630',
                    f'--screenshot={png}', f'file://{h}'], capture_output=True)
    print(arq, os.path.exists(png))
json.dump(alts, open(os.path.join(AQUI, 'alts.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
