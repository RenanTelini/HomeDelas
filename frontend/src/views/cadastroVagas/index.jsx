import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CadastroVagasService from "../../services/CadastroVagasService";

export default function Index() {
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

    return (
        <>
          <header className="header">
              <h1 className="container">Vagas disponíveis </h1>
          </header>
          <div className="container p-5">
              {/* Botão "Criar" */}
              {/* <Link to="/CadastroVagas-Create" className="btn btn-primary">Criar Vaga</Link> */}
              <div className="table-responsive">
                  <table className="table table-hover table-sm">
                      {/* <thead>
                          <tr>
                              <th>Empresa</th>
                              <th>Vaga</th>
                              <th>Descrição</th>
                              <th>Linkedln da empresa</th>
                              <th>Link para se candidatar</th>
                          </tr>
                      </thead> */}
                      <tbody >
                          {cadastroVagas.map((cadastro) => (
                              <tr key={cadastro.id}>
                                <div className="container">
                                  <div className="row">
                                    <div className="col-3">
                                    <td>
                                      <div class="card-body">
                                              <h5 class="card-title">{cadastro.nome_empresa}</h5>
                                                <h6 class="card-title">{cadastro.nome_vaga}</h6>
                                                <p class="card-text">{cadastro.descricao_vaga}</p>
                                                <a href={cadastro.linkedin_empresa} >{cadastro.linkedin_empresa}</a><br/>
                                                <a href={cadastro.vaga_link} >{cadastro.vaga_link}</a>
                                          </div>

                                          <Link
                                            to={`/CadastroVagas-Update/${cadastro.id}`} className="btn btn-info"> Editar
                                          </Link>

                                          <button
                                            className="btn btn-danger"
                                            onClick={() => deleteCadastroVagas(cadastro.id)}
                                            style={{ marginLeft: "10px" }}>Deletar
                                          </button>
                                
                                        </td>
                                      </div>
                                    </div>
                                  </div>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}