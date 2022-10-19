import { useEffect, useRef, useState, Ref } from "react";

const UseFocus = <T extends HTMLElement>(): [Ref<T>, boolean] => {
    const ref = useRef<T>(null);
    const [isFocus, setIsFocus] = useState(false);

    const toggle = () => {
        setIsFocus(prev => !prev)
    }

    useEffect(() => {
        const element = ref.current;

        element?.addEventListener('focus', toggle);
        element?.addEventListener('blur', toggle);

        return () => {
            element?.addEventListener('focus', toggle);
            element?.addEventListener('blur', toggle);
        }
    }, [])

    return [ref, isFocus]
}

export default UseFocus;