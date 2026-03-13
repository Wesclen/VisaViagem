document.addEventListener('DOMContentLoaded', () => {

  // ================== CONFIG ==================
  const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbwBRbOTLCRsO9MUX9jeOVJzc8sbi6c8NdyHVtRwBrxFyeX7asGhMDyFfRuUyH0zbMI2/exec";

  // ================== TABS ==================
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');

      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const el = document.getElementById(tabId);
      if (el) el.classList.add('active');
    });
  });

  // ================== CONDICIONAL QUALIFICAÇÃO ==================
  const acoes = document.getElementById('acoes');
  const qualificacaoBox = document.getElementById('qualificacaoBox');

  function updateQualificacao(){
    const v = (acoes?.value || "").toLowerCase();
    if (qualificacaoBox)
      qualificacaoBox.style.display = v.includes("formar") ? "block" : "none";
  }

  if (acoes) acoes.addEventListener('change', updateQualificacao);
  updateQualificacao();

  // ================== PAS / EXTRAPAS ==================
  const codigo = document.getElementById('codigoRecurso');
  const fonteFinal = document.getElementById('fonteFinal');
  const radios = Array.from(document.querySelectorAll('input[name="Fonte do Recurso Usado"]'));

  function updateCodigoRecurso(){
    const selected = radios.find(r => r.checked)?.value;
    if (!codigo) return;

    codigo.innerHTML = '<option value="" selected disabled>Selecione...</option>';

    const opts = selected === 'PAS'
      ? ['1.659.0.00001 (estado)', '1.600.0.00001 (federal)']
      : selected === 'Extrapas'
      ? ['2.659.0.00001 (estado)', '2.600.0.00001 (federal)']
      : [];

    for (const text of opts){
      const o = document.createElement('option');
      o.value = text;
      o.textContent = text;
      codigo.appendChild(o);
    }

    if (fonteFinal) fonteFinal.value = '';
  }

  function updateFonteFinal(){
    const selected = radios.find(r => r.checked)?.value;
    const cod = codigo?.value;

    if (!fonteFinal) return;

    if (selected && cod)
      fonteFinal.value = `${selected} - ${cod}`;
    else
      fonteFinal.value = '';
  }

  radios.forEach(r =>
    r.addEventListener('change', () => {
      updateCodigoRecurso();
      updateFonteFinal();
    })
  );

  if (codigo) codigo.addEventListener('change', updateFonteFinal);

  updateCodigoRecurso();
  updateFonteFinal();

  // ================== VALIDAÇÃO SEI ==================
  const sei = document.getElementById('sei');
  const seiError = document.getElementById('seiError');

  function validateSEI(){
    const re = /^\d{4}\.\d{6}\/\d{4}\-\d{2}$/;
    const value = (sei?.value || "").trim();

    if (!value){
      if (seiError) seiError.style.display = "none";
      return true;
    }

    const ok = re.test(value);
    if (seiError)
      seiError.style.display = ok ? "none" : "block";

    return ok;
  }

  if (sei) sei.addEventListener('blur', validateSEI);

  // ================== ENVIO DO FORM ==================
  const form = document.getElementById('formViagem');
  const formError = document.getElementById('formError');

  if (form){
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!validateSEI()){
        sei.focus();
        return;
      }

      // Gera carimbo automático
      const carimbo = document.getElementById("carimboDataHora");
      if (carimbo)
        carimbo.value = new Date().toLocaleString("pt-BR");

      const formData = new FormData(form);

      try {

        const response = await fetch(WEBAPP_URL, {
          method: "POST",
          body: formData
        });

        const result = await response.json();

        if (result.ok){
          alert("Dados enviados com sucesso!");
          form.reset();
          updateCodigoRecurso();
          updateFonteFinal();
        } else {
          throw new Error(result.erro || "Erro ao enviar");
        }

      } catch (err) {
        console.error(err);
        if (formError){
          formError.style.display = "block";
          formError.textContent = "Erro ao enviar dados. Verifique a conexão ou a URL do WebApp.";
        }
      }

    });
  }

});
const radioOutro = document.getElementById("radioOutro");
const campoOutro = document.getElementById("campoOutro");
const radios = document.querySelectorAll('input[name="pa"]');

radios.forEach(radio => {
  radio.addEventListener("change", () => {

    if (radioOutro.checked) {
      campoOutro.style.display = "inline-block";
    } else {
      campoOutro.style.display = "none";
      campoOutro.value = "";
    }

  });
  // ================== PA OUTRO ==================

const radioOutro = document.getElementById("radioOutro");
const campoOutro = document.getElementById("campoOutro");
const radiosPA = document.querySelectorAll('input[name="pa"]');

radiosPA.forEach(radio => {

  radio.addEventListener("change", () => {

    if (!campoOutro || !radioOutro) return;

    if (radioOutro.checked) {

      campoOutro.style.display = "inline-block";
      campoOutro.required = true;

    } else {

      campoOutro.style.display = "none";
      campoOutro.required = false;
      campoOutro.value = "";

    }

  });

});
});