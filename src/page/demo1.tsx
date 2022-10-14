import React, { useEffect, useRef, useState } from "react";

const Demo = () => {
    const [name, setName] = useState('');
    const renderCount = useRef<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const previousName = useRef<string>('');

    useEffect(() => {
        renderCount.current += 1;
        previousName.current = name;
    }, [name])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleClick = () => {
        inputRef.current && inputRef.current.focus();
    }

    return (
        <>
            <input
                type='text'
                ref={inputRef}
                value={name}
                onChange={handleChange}
            />
            <p>{`my name is ${name}`}</p>
            <p>{`my previouse name is ${previousName.current}`}</p>
            <p>{`render times ${renderCount.current}`}</p>
            <button onClick={handleClick}>click</button>

        </>

    )

}

export default Demo;

// useage
// 1. 計算 Render 了幾次
// 2. inputRef.current.focus()
// 3. 抓 Previous 的值