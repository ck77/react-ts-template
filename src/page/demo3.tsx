import React, { useRef } from 'react'
import UseFocus from '../hooks/useFocus'

const Demo3 = () => {
    const [ref, isFocus] = UseFocus();

    return (
        <div>
            <input type="text" ref={ref as React.RefObject<HTMLInputElement>} />
            {isFocus && <p>focused</p>}
        </div>
    )
}

export default Demo3