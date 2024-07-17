import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const H1Estilizado = styled.h1`
    color: #ffffff;
    text-shadow: 1px 1px 50px white;
    text-align: center;
    margin-top: 170px;
`

export const Suceso = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{navigate('/')}, 1300)
    }, [])
    return(
        <main>
            <H1Estilizado>Operacion realizada com exito! </H1Estilizado>
        </main>
    )
}