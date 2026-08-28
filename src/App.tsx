import { useState, type ChangeEvent, type ChangeEventHandler } from "react";

function Input({
  handleChange,
  inputValue,
}: {
  handleChange: ChangeEventHandler;
  inputValue: string;
}) {
  return <input type="text" onChange={handleChange} value={inputValue} />;
}

function App() {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }
  return (
    <div>
      <h1>{inputValue}</h1>
      <Input handleChange={handleChange} inputValue={inputValue} />
    </div>
  );
}
export { App, Input };
