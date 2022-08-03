import React from 'react'

import { forwardRef, useImperativeHandle, useState } from 'react'

function Loading(props, ref) {
    const [show, setShow] = useState(false)
    useImperativeHandle(ref, () => ({
        show: () => {
            setShow(true);
        },
        hide: () => {
            setShow(false);
        }
    }));
    return (
        <div className={`${show ? "flex" : "hidden"}  z-[1000] items-center justify-center fixed top-0 left-0 bottom-0 bg-black/50 right-0 text-white font-bold text-[2rem]`}>انتظار...</div>
    )
}

export default forwardRef(Loading)