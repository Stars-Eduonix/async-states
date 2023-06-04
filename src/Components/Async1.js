
import React,{useState} from "react";

const Async1 = () => {
    let [count, setCount] = useState(0);


    // function increment1() {
    //     setCount(count + 1);
    //     console.log(count); 
    // }

    // function increment2() {
    //     setCount(count + 1);  
    //     setCount(count + 1);
        
    // }

    // function increment3() {
    //     setCount(prevCount => prevCount + 1);  
    //     setCount(prevCount => prevCount + 1);
        
    // }

    function increment4() {
        
        setCount(count+1)
        setCount(count+1)
        setCount(prevCount => prevCount + 1);
        
    }

    return(
        <div>

            <h1>Count: {count}</h1>
            <button onClick={increment4}>Increment</button>

        </div>
    )
}

export default Async1;