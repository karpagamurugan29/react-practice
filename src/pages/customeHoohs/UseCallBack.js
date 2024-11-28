import React, { useCallback, useState } from 'react';

const UseCallBack = () => {
    const [count, setCount] = useState(0);

    const conter = useCallback((type) => {
        setCount((prevCount) => {
            if (type === 'add') return prevCount + 1;
            if (type === 'minus') return prevCount - 1;
            if (type === 'reset') return 0;
            return prevCount;
        });
    }, []);


    const handleAdd = useCallback(() => conter('add'), [conter]);
    const handleMinus = useCallback(() => conter('minus'), [conter]);
    const handleReset = useCallback(() => conter('reset'), [conter]);

    return (
        <div>
            <div>
                <h1>Count : {count}</h1>
                <ButtonComp onClick={handleAdd}>Add</ButtonComp>
                <ButtonComp onClick={handleMinus}>Minus</ButtonComp>
                <ButtonComp onClick={handleReset}>Reset</ButtonComp>
            </div>
        </div>
    );
};

export default UseCallBack;

export const ButtonComp = React.memo(({ onClick, children }) => {
    console.log('Rendering button:', children);
    return <button onClick={onClick}>{children}</button>;
});
