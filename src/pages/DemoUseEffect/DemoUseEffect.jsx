import { useEffect, useState } from "react";

function DemoUseEffect() {
    const [count, setCount] = useState(0);

    // component Did UPDATE
    useEffect(() => {
        console.log("useEffect - component Did UPDATE");
    });

    // component Did MOUNT
    useEffect(() => {
        console.log("useEffect - component Did MOUNT");
    }, []);

    useEffect(() => {
        console.log("useEffect - Dependence");
    }, [count]);

    const handleTang = () => {
        setCount(count + 1);
    };

    return (
        <div>
            DemoUseEffect
            <p>count: {count}</p>
            <button
                className="btn btn-success"
                onClick={() => {
                    handleTang();
                }}
            >
                Tang
            </button>
        </div>
    );
}

export default DemoUseEffect;
