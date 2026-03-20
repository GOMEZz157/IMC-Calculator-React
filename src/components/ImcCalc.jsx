const ImcCalc = () => {
  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div id="form-inputs">
          <div id="form-control">
            <label htmlFor="height">Altura (m):</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo: 1.75"
            />
          </div>
          <div id="form-control">
            <label htmlFor="weight">Peso (kg):</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo: 70"
            />
          </div>
        </div>
        <div id="action-control">
          <button>Calcular</button>
          <button>Limpar</button>
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
