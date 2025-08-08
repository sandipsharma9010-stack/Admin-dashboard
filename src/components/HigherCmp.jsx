import { useState } from "react";

const HigherCmp = () => {
  return (
    <>
      <h1>HOC</h1>
      <HocRed cmp={Counter} />
    </>
  );
};

function HocRed(props) {
  return <h2 className="bg-sky-500 w-100 p-10">{props.cmp}</h2>;
}

function Counter() {
  const [inc, setInc] = useState(0);
  return (
    <>
      <h2>{inc}</h2>
      <button className="bg-sky-500" onClick={() => setInc(inc + 1)}>
        Counter
      </button>
    </>
  );
}
export default HigherCmp;
