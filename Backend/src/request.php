<?php
// Essa classe guarda todos os dados de uma requisição
class Requisicao
{
    public $dados;
    public $query;

    public function __construct()
    {
        $this->dados = new Cliente();

        // Seta todas as variáveis para seus respectivos parâmetros
        if (isset($_REQUEST['id'])) {
            $this->dados->id = $_REQUEST['id'];
        }

        if (isset($_REQUEST['query'])) {
            $this->query = $_REQUEST['query'];
        }

        $json = file_get_contents('php://input');
        $data = json_decode($json);

        if (isset($data->nome)) {
            $this->dados->nome = $data->nome;
        }

        if (isset($data->cpf)) {
            $this->dados->cpf = $data->cpf;
        }

        if (isset($data->celular)) {
            $this->dados->celular = $data->celular;
        }

        if (isset($data->email)) {
            $this->dados->email = $data->email;
        }

        if (isset($data->endereco)) {
            $this->dados->endereco = $data->endereco;
        }

        if (isset($data->nascimento)) {
            $this->dados->nascimento = $data->nascimento;
        }

        if (isset($data->observacoes)) {
            $this->dados->observacoes = $data->observacoes;
        }
    }
}
?>