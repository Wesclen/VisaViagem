

document.addEventListener('DOMContentLoaded', () => {
      // Tabs
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

      // Condicional: Formar e Qualificar
      const acoes = document.getElementById('acoes');
      const qualificacaoBox = document.getElementById('qualificacaoBox');
      function updateQualificacao(){
        const v = (acoes?.value || "").toLowerCase();
        if (qualificacaoBox) qualificacaoBox.style.display = v.includes("formar") ? "block" : "none";
      }
      if (acoes) acoes.addEventListener('change', updateQualificacao);
      updateQualificacao();

      // Fonte do recurso (PAS/Extrapas) -> códigos
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

        // limpa a fonte final quando trocar PAS/Extrapas
        if (fonteFinal) fonteFinal.value = '';
      }

      function updateFonteFinal(){
        // Grava o valor "final" exatamente na coluna da planilha:
        // Fonte do Recurso Usado = "PAS - 1.659..." ou "Extrapas - 2.659..."
        const selected = radios.find(r => r.checked)?.value;
        const cod = codigo?.value;

        if (!fonteFinal) return;
        if (selected && cod) fonteFinal.value = `${selected} - ${cod}`;
        else fonteFinal.value = '';
      }

      radios.forEach(r => r.addEventListener('change', () => { updateCodigoRecurso(); updateFonteFinal(); }));
      if (codigo) codigo.addEventListener('change', updateFonteFinal);

      updateCodigoRecurso();
      updateFonteFinal();

      // Validação SEI simples (além do pattern)
      const sei = document.getElementById('sei');
      const seiError = document.getElementById('seiError');
      function validateSEI(){
        const re = /^\d{4}\.\d{6}\/\d{4}\-\d{2}$/;
        const value = (sei?.value || "").trim();
        if (!value){ if (seiError) seiError.style.display = "none"; return true; }
        const ok = re.test(value);
        if (seiError) seiError.style.display = ok ? "none" : "block";
        return ok;
      }
      if (sei) sei.addEventListener('blur', validateSEI);

      const form = document.getElementById('formViagem');
      if (form){
        form.addEventListener('submit', (e) => {
          if (!validateSEI()){
            e.preventDefault();
            sei.focus();
          }
        });
      }
    });