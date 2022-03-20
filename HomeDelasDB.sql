create database HomeDelasDB;

use HomeDelasDB;

select cad.id, cad.nome_empresa, cad.nome_vaga, cad.descricao_vaga, cad.vaga_link, cad.linkedin_empresa
from cadastro_vagas as cad;