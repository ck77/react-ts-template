import React, { useCallback, useMemo, useState, memo } from 'react'

const expensiveCaculation = (num: number) => {
    console.log('calculating...');
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }

    return num;
}

const Demo2 = () => {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState<string[]>([]);
    // const calculation = expensiveCaculation(count);
    const calculation = useMemo(() => expensiveCaculation(count), [count])

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const addTodo = useCallback(() => {
        setTodos(prev => [...prev, "new todo"])
    }, [todos])

    return (
        <div>
            <TodoList todos={todos} addTodo={addTodo} />

            <hr />
            <div>
                {`Count: ${count}`}
                <button onClick={increment}>+</button>
            </div>
            <div>
                {`Calculation ${calculation}`}
            </div>
        </div>
    )
}


const TodoList = memo(({ todos, addTodo }: { todos: string[], addTodo: () => void }) => {

    console.log('re-render')
    return (
        <>
            <button onClick={addTodo}>ADD TODO</button>
            {
                todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>
                })
            }
        </>
    )
})

export default Demo2