/** @format */

import React, {useEffect} from 'react'

function App(): JSX.Element {
    const a = () => {}
    useEffect(() => {
        a()
    }, [])

    return <div>666</div>
}

export default App
