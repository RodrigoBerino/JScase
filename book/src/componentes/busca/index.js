import React from "react";
import Input from "../input";
import styled from "styled-components";
import  { useState } from 'react';
import { livros } from "./dadosBusca";

const BuscaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`
const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`
const Label = styled.p`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

function Busca() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]) //nome do estado e função que muda seus valores = valor importado em user state

    return(
        <BuscaContainer>
            <Titulo>O que está procurando?</Titulo>
            <Label>Buscar:</Label>;
            <Input
                placeholder="Insira seu objeto de busca"
                onBlur={evento => setLivrosPesquisados(evento.target.value)} //apontando justamente para o valor do texto digitado
            />
        </BuscaContainer>
    )
}

export default Busca