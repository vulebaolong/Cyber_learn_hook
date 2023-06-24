import { memo } from "react";

function Children(props) {
    console.log("Children render");
    const { count } = props;
    return (
        <div>
            <h3>Children</h3>
            <p>count {count}</p>
        </div>
    );
}

export default memo(Children);

// export default memo(Children, (prevProps, newProps) => {
//     không render
//     return true;

//     render tới chết
//     return false;
// });
