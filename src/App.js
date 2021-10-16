import { useRef, useState } from 'react';
import Delayed from './components/Delayed';

function LengthDisplayer(props) {
    return <div className='display-length'>The length of the text is {props.length}</div>
}

function App() {
  const inputRef = useRef();
  const [length, setLength] = useState(0);

  const buttonOnClickHandler = () => {
    const value = inputRef.current.value;
    setLength(value.length);
};

  return (
    <>
        <input type="text" className="text-input" ref={inputRef}/>
        <button onClick={buttonOnClickHandler} >Display Length</button>
        {length >= 1 && <Delayed><LengthDisplayer length={length} /></Delayed>}
    </>
  );
}

export default App;
