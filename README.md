<!DOCTYPE html>
<html lang="pt-BR">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Viagens</title>

<link rel="stylesheet" href="/Frontend/estilo/viagem.css">

</head>

<body>

<div class="page">

<header class="topbar">

<div class="brand">Viagens</div>

<div class="subtitle">
Registro (final da viagem — diárias e despesas)
</div>

</header>

<nav class="tabs">

<button class="tab-btn active" type="button" data-tab="tab-1">
Relatório de Viagem
</button>

<button class="tab-btn" type="button" data-tab="tab-2">
Resumo de Despesas
</button>

<button class="tab-btn" type="button" data-tab="tab-3">
Histórico de Viagens
</button>

</nav>

<main class="wrap">

<!-- TAB 1 -->
<section class="card tab-content active" id="tab-1">

<h1>Novo relatório de viagem</h1>

<p class="hint">
Campos seguem sua planilha. Preencha ao final da viagem.
</p>

<form id="formViagem">

<input type="hidden" name="Carimbo de data/hora" id="carimboDataHora">

<!-- DADOS GERAIS -->
<div class="grid">

<label class="field">

<span>Setor que está fornecendo a Informação</span>

<select name="Setor que está fornecendo a Informação" id="setor_inf">

<option value="" disabled selected>Selecione...</option>

<option value="Gerencia">Gerencia</option>
<option value="Alimentos">Alimentos</option>
<option value="Descentralização">Descentralização</option>
<option value="Engenharia e Arquitetura Hospitalar">Engenharia e Arquitetura Hospitalar</option>
<option value="Medicamentos">Medicamentos</option>
<option value="Saneantes e Cosméticos">Saneantes e Cosméticos</option>
<option value="Sangue">Sangue</option>

<option value="Programa CCIH + NSP">
Programa CCIH + NSP
</option>

<option value="Serviço de Saúde (Radiação Ionizante, Cozinha Hospitalar, Laboratório,...)">
Serviço de Saúde (Radiação Ionizante, Cozinha Hospitalar, Laboratório,...)
</option>

<option value="Não Programado">
Não Programado
</option>

</select>

</label>

<label class="field">

<span>Planejamento</span>

<select name="Planejamento" required>

<option value="" disabled selected>Selecione...</option>

<option>PAS</option>
<option>Não Planejado</option>

</select>

</label>

<label class="field">

<span>No caso Portaria Ministerial (numero/ano)</span>

<input
type="text"
name="No caso Portaria Ministerial citar o numero da Portaria (numero/ano)"
placeholder="Ex.: 123/2026">

</label>

<label class="field" style="grid-column:1/-1;">

<span>Finalidade da Viagem</span>

<select name="Finalidade da Viagem">

<option value="" disabled selected>Selecione...</option>

<option value="Fiscalização / Inspeção">
Fiscalização / Inspeção
</option>

<option value="Monitoramento / Supervisão de atividade pactuada com o município">
Monitoramento / Supervisão de atividade pactuada com o município
</option>

<option value="Atendimento de Demandas Judiciais / Parceiros">
Atendimento de Demandas Judiciais / Parceiros
</option>

<option value="Viagem para fora do estado / qualificação profissional">
Viagem para fora do estado / qualificação profissional
</option>

<option value="Processo de Aquisição de serviços / Material de Distribuição Gratuita / Equipamentos / Material permanente">
Processo de Aquisição de serviços / Material de Distribuição Gratuita / Equipamentos / Material permanente
</option>

</select>

</label>

<label class="field">

<span>Processo SEI (0000.000000/0000-00)</span>

<input
id="sei"
type="text"
name="Processo SEI (use o formato 0000.000000/0000-00)"
placeholder="0000.000000/0000-00">

</label>

</div>

<div id="seiError" class="error">
Formato SEI inválido. Use 0000.000000/0000-00.
</div>

<hr>

<!-- FONTE DO RECURSO -->

<div class="fonte-recurso">

<p>Fonte do Recurso Usado*</p>

<ul>PAS</ul>
<ul>1.659.0.00001 (estado) | 1.600.0.00001 (federal)</ul>

<ul>EXTRAPAS</ul>
<ul>2.659.0.00001 (estado) | 2.600.0.00001 (federal)</ul>

</div>

<div class="row" role="group" aria-label="Fonte do Recurso Usado">

<label class="pill">
<input type="radio" name="Fonte do Recurso Usado" value="PAS" required>
PAS
</label>

<label class="pill">
<input type="radio" name="Fonte do Recurso Usado" value="Extrapas">
Extrapas
</label>

</div>

<hr>

<!-- PA -->
<p>PA da Ação*</p>

<div class="radio-group">

<label class="radio-item">
<input type="radio" name="pa" value="2946">
2946
</label>

<label class="radio-item">

<input type="radio" name="pa" value="outro" id="radioOutro">

Outro:

<input
type="text"
id="campoOutro"
name="PA Outro"
placeholder="Digite aqui">

</label>

</div>

<hr class="separador">

<div class="grid">

<label class="field">
<span>Indicador da Ação Planejada - Metas 2026</span>
<input type="text" name="Indicador da Ação Planejada - Metas 2026">
</label>

<label class="field">
<span>Número da Ação SESAU</span>
<input type="text" name="Número da Ação SESAU">
</label>

<label class="field">

<span>AÇÕES</span>

<select id="acoes" name="AÇÕES" required>

<option disabled selected>Selecione...</option>

<option>Formar e Qualificar</option>
<option>Fiscalização</option>
<option>Reunião técnica</option>
<option>Outro</option>

</select>

</label>

<label class="field">

<span>Bimestre Planejado</span>

<select name="Bimestre Planejado" required>

<option disabled selected>Selecione...</option>

<option>1º</option>
<option>2º</option>
<option>3º</option>
<option>4º</option>

</select>

</label>

</div>

<div id="qualificacaoBox">

<label class="field">

<span>No caso de Formar e Qualificar: município e estado</span>

<input
type="text"
name="No caso de Formar e Qualificar, cite o municipio e o estado onde foi desenvolvida a qualificação"
placeholder="Ex.: Ji-Paraná/RO">

</label>

</div>

<div class="grid">

<label class="field">
<span>Total de Diárias (339014) em Reais</span>
<input type="number" step="0.01" min="0" name="Total de Diárias (339014) em Reais">
</label>

<label class="field">
<span>Total de Material de Consumo (339030) em Reais</span>
<input type="number" step="0.01" min="0" name="Total de Material de Consumo (339030) em Reais">
</label>

<label class="field">
<span>Total de Material de Distribuição Gratuito (339032) em Reais</span>
<input type="number" step="0.01" min="0" name="Total de Material de Distribuição Gratuito (339032) em Reais">
</label>

<label class="field">
<span>Total de Passagens Aéreas (339033) em Reais</span>
<input type="number" step="0.01" min="0" name="Total de Passagens Aéreas (339033) em Reais">
</label>

<label class="field">
<span>Total de Colaborador Externo - Pessoa Física (339036) em Reais</span>
<input type="number" step="0.01" min="0" name="Total de Colaborador Externo - Pessoa Física (339036) em Reais">
</label>

<label class="field">
<span>Total de Eventos - Pessoa Jurídica (339039) em Reais</span>
<input type="number" step="0.01" min="0" name="Total de Eventos - Pessoa Jurídica (339039) em Reais">
</label>

<label class="field">
<span>Total de Equipamento / Material Permanente (449052) em Reais</span>
<input type="number" step="0.01" min="0" name="Total de Equipamento / Material Permanente (449052) em Reais">
</label>

</div>

<label class="field" style="grid-column:1/-1;">

<span>Municípios da Viagem</span>

<input type="text" name="Municípios da Viagem" required>

</label>

<div id="formError" class="error"></div>

<div class="actions">

<button class="btn" type="submit">
Finalizar e Enviar
</button>

<button class="btn btn-ghost" type="reset">
Limpar
</button>

</div>

</form>

</section>

<section class="card tab-content" id="tab-2">

<h1>Resumo de Despesas</h1>

<p class="hint">
Visualize o resumo de despesas registradas (tela futura).
</p>

</section>

<section class="card tab-content" id="tab-3">

<h1>Histórico de Viagens</h1>

<p class="hint">
Consulta (tela futura).
</p>

</section>

</main>

</div>

<script src="/Backend/viagem.js"></script>

</body>
</html>
