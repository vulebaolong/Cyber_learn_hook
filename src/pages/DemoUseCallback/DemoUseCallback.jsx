import { useCallback, useState } from "react";
import Children from "./Children";

function DemoUseCallback() {
    const [count, setCount] = useState(0);
    const [like, setLike] = useState(false);

    const getDetailChild = useCallback((id) => {
        console.log(id);
    }, []);
    console.log(getDetailChild);
    return (
        <div>
            <h1>DemoUseCallback</h1>
            <button
                className="btn btn-success"
                onClick={() => {
                    setCount((prev) => prev + 1);
                }}
            >
                tang
            </button>
            <button
                className="btn btn-success"
                onClick={() => {
                    setLike((prev) => !prev);
                }}
            >
                like
            </button>
            <Children count={count} getDetailChild={getDetailChild} />
        </div>
    );
}

export default DemoUseCallback;
