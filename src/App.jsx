import { useState } from "react"

const App = () => {

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const [result, setResult] = useState(null);
  const [sign, setSign] = useState("");

  function handleOperation() {
    switch(sign) {
      case "+":
        setResult(input1 + input2);
        break;
      case "-":
        setResult(input1 - input2);
        break;
      case "x":
        setResult(input1 * input2);
        break;
      case "/":
        setResult(input1 / input2);
        break;
      default:
        alert("Please choose operation (+, -, x or /)");
        break;
    }
  }

  return (
    <div className="grid w-fit ml-150 mt-30 p-8 border border-gray-500 rounded-lg">
      <div className="grid mx-auto">
        <label className="mb-5 text-lg font-semibold">
          Input1: <input value={input1} onChange={(event) => setInput1(Number(event.currentTarget.value))} className="pl-2 border border-gray-400 rounded-sm h-8 ml-3" type="number" />
        </label>
        <p className="w-10 h-10 border border-gray-700 mb-5 mx-auto ml-44 rounded-full font-bold text-center text-2xl pt-0.5">{sign}</p>
        <label className="mb-4 text-lg font-semibold">
          Input2: <input value={input2} onChange={event => setInput2(Number(event.currentTarget.value))} className="pl-2 border border-gray-400 rounded-sm h-8 ml-3" type="number" />
        </label>
        <label className="mb-20 text-lg font-semibold">
          Result: <input value={result} readOnly className="pl-2 border border-gray-400 rounded-sm h-8 ml-3" type="text" />
        </label>
      </div>
      <div className="grid gap-8 font-bold">
        <div className="flex gap-6">
          <button onClick={() => setSign("+")} className="text-3xl text-white px-8 py-2 rounded-sm bg-orange-950"> + </button>

          <button onClick={() => setSign("-")} className="text-3xl text-white px-8 rounded-sm bg-orange-950"> - </button>

          <button onClick={() => setSign("x")} className="text-3xl text-white px-8 rounded-sm bg-orange-950"> x </button>

          <button onClick={() => setSign("/")} className="text-3xl text-white px-8 rounded-sm bg-orange-950">/</button>
        </div>
        <div className="flex gap-5 mx-auto">
          <button onClick={handleOperation} className="text-3xl text-white px-4 py-2 rounded-sm bg-black w-30 "> = </button>
          <button 
            onClick={() => {
              setInput1("");
              setInput2("");
              setResult("");
              setSign("");
            }}
            className="text-3xl text-white px-4 rounded-sm bg-red-700 w-30">Clear</button>
        </div>
        </div>
      </div>
  )
}

export default App
