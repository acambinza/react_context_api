
import {useContext, useState} from 'react'

import AuthContext from '../../contexts/auth'

export default function Home() {

    //const {logado} = useContext(AuthContext)

    const [logado, setLogado] = useState(false)
   
    return (
        <>
            <h2>Home</h2>
            {logado}
        </>
    )
}