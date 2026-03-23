import Button from "./Button";

const ImcTable = ({ data }) => {
  return (
    <div id="result-container" className="text-center flex flex-col">
      <p id="imc-number" className="text-4xl mb-2.5">
        Seu Imc:
      </p>

      <p id="imc-info" className="text-2xl text-light-gray">
        Situação atual:
      </p>

      <h3 className="mt-4 text-smoke-gray">
        Confira as classificações
      </h3>

      <div id="imc-table" className="mx-0 my-6 text-xs">
        
        {/* Header */}
        <div className="grid grid-cols-3 mb-2 pb-2 border-b border-b-gray font-bold text-light-gray">
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
        </div>

        {/* Dados */}
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 mb-2 pb-2 border-b border-b-gray"
          >
            <p>{item.info}</p>
            <p>{item.classification}</p>
            <p>{item.obesity}</p>
          </div>
        ))}
      </div>

      <Button
        id="back-btn"
        text="Voltar"
        className="self-center"
      />
    </div>
  );
};

export default ImcTable;