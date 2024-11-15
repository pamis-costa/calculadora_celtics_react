import { useState } from "react";
import "./styles.scss";

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
    //console.log(e.target.value);
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
    //console.log(e.target.value);
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  const zerar = () => {
    setPrimeiroValor(undefined);
    setSegundoValor(undefined);
    setResultado(undefined);
  };

  return (
    <main>
      <h1>Calculadora Celtics</h1>
      {/* o Onchange evento de mudança*/}
      <input onChange={capturandoPrimeiroValor} />
      <input onChange={capturandoSegundoValor} />
      <div class="botoes">
        <button onClick={soma}>+</button>
        <button onClick={subtracao}>-</button>
        <button onClick={multiplicacao}>x</button>
        <button onClick={divisao}>/</button>
        <button onClick={zerar}>Zerar</button>
        {resultado !== undefined && <h3>Sua resposta é: {resultado}</h3>}
      </div>
    </main>
  );
}
