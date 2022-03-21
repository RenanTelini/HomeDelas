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
            <header className="header">
                <h1 className="container">Cadastro de vagas</h1>
            </header>
            <div className="container p-5">

                {/* Botão "Criar" */}
                {/* <Link to="/CadastroVagas-Create" className="btn btn-primary">Criar Vaga</Link> */}

                <div className="table-responsive">
                    <table className="table table-hover table-sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Empresa</th>
                                <th>Vaga</th>
                                <th>Descrição</th>
                                <th>Linkedln empresa</th>
                                <th>Link para se candidatar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cadastroVagas.map((cadastro) => (
                                <tr key={cadastro.id}>
                                    <td>{cadastro.id}</td>
                                    <td>{cadastro.nome_empresa}</td>
                                    <td>{cadastro.nome_vaga}</td>
                                    <td>{cadastro.descricao_vaga}</td>
                                    <td>{cadastro.linkedin_empresa}</td>
                                    <td>{cadastro.vaga_link}</td>
                                    <td className="d-flex">
                                        <Link 
                                            to={`/CadastroVagas-Update/${cadastro.id}`} 
                                            className="btn btn-info"> Editar
                                        </Link>
                                        <button 
                                            className="btn btn-danger"
                                            onClick={() => deleteCadastroVagas(cadastro.id)}
                                            style={{marginLeft:"10px"}}
                                            >Deletar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}