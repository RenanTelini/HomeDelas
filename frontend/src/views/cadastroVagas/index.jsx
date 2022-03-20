import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CadastroVagasService from "../../services/CadastroVagasService";

export default function Index(){
    const [cadastroVagas, setCadastroVagas] = useState([]);

    const getAllCadastroVagas = () => {
        CadastroVagasService.getAllCadastroVagas().then((response) => {
            setCadastroVagas(response.data);
        }).catch((error) => { console.log(error); });
    };

    useEffect(() => { getAllCadastroVagas(); }, []);

    const deleteCadastroVagas = (cadastroVagasId) => {
        CadastroVagasService.deleteCadastroVagas(cadastroVagasId).then((response) => {
            getAllCadastroVagas();
        }).catch((error) => {
            console.log(error);
            const { data } = error.response;
            if (data.status === 500) {
              alert("Erro na API");
            }
          });
    };
    
    return(
        <>
        </>
    );
}