<?php
require_once __DIR__ . '/src/db.php';
require_once __DIR__ . '/src/cliente.php';
require_once __DIR__ . '/src/request.php';
class RestAPI {
    function GetClientes() {
        $db = new Conexao();

        // Pega os 10 últimos clientes
        $query = $db->prepare('SELECT * FROM clientes ORDER BY id DESC LIMIT 10');
        $query->execute();

        // Retorna os dados e salva na array clientes
        return $this->TratarDados($query);
    }

    function GetClientePorId($id) {
        $db = new Conexao();

        // Pega os 10 últimos clientes
        $query = $db->prepare('SELECT * FROM clientes WHERE id = :id');
        $query->execute(array(
            ':id' => $id
        ));

        // Retorna os dados e salva na array clientes
        $result = $this->TratarDados($query);
        return reset($result);
    }

    function ProcurarClientes($search) {
        $db = new Conexao();
        
        // Procura pela query tanto no nome quanto email dos clientes
        $query = $db->prepare("SELECT * FROM clientes WHERE (lower(nome) LIKE :q1) OR (lower(email) LIKE :q2) LIMIT 10");
        $query->execute(array(
            ':q1' => "%$search%",
            ':q2' => "%$search%"
        ));

        // Retorna os dados e salva na array clientes
        return $this->TratarDados($query);
    }

    function CriarCliente($cliente)
    {
        $db = new Conexao();

        // Seta os dados da query
        $query = $db->prepare("INSERT INTO clientes (nome, nascimento, cpf, celular, email, endereco, observacoes)
            VALUES (:nome, :nascimento, :cpf, :celular, :email, :endereco, :observacoes)");

        var_dump($cliente);

        // Executa a query, adicionando um novo cliente na database
        $query->execute(array(
            ':nome' => $cliente->nome,
            ':nascimento' => $cliente->nascimento,
            ':cpf' => $cliente->cpf,
            ':celular' => $cliente->celular,
            ':email' => $cliente->email,
            ':endereco' => $cliente->endereco,
            ':observacoes' => $cliente->observacoes,
        ));
    }

    function AtualizarCliente($dados)
    {
        $db = new Conexao();

        // Pega os dados do usuário, transforme em json e dps decodifica para torná-lo um objeto
        $array = $this->GetClientePorId($dados->id);
        $backup = json_decode(json_encode($array));
        if (!isset($backup))
        {
            throw new Exception('Tentando modificar usuário não existente', 100);
        }

        // Primeiro cria o cliente seguindo o modelo, depois pega os dados inseridos e por último os da database
        $cliente = new Cliente();
        $cliente = $this->TratarCliente($cliente, $dados);
        $cliente = $this->TratarCliente($cliente, $backup);

        // Seta os dados da query
        $query = $db->prepare("UPDATE clientes SET nome = :nome, nascimento = :nascimento, cpf = :cpf, 
            celular = :celular, email = :email, endereco = :endereco, observacoes = :observacoes WHERE id = :id");
        
        // Executa a query, atualizando os dados
        $query->execute(array(
            ':nome' => $cliente->nome,
            ':nascimento' => $cliente->nascimento,
            ':cpf' => $cliente->cpf,
            ':celular' => $cliente->celular,
            ':email' => $cliente->email,
            ':endereco' => $cliente->endereco,
            ':observacoes' => $cliente->observacoes,
            ':id' => $cliente->id
        ));
    }

    function DeletarCliente($id)
    {
        $db = new Conexao();

        // Seta os dados da query
        $query = $db->prepare("DELETE FROM clientes WHERE id = :id");

        // Executa a query, deletando o cliente caso ele exista
        $query->execute(array(
            ':id' => $id
        ));
    }

    // Trata os dados json recebidos pela query do banco de dados em uma array clientes e retorna ela
    function TratarDados($query) {
        $clientes = array();
        while ($OutputData = $query->fetch(PDO::FETCH_ASSOC))
        {
            $clientes[$OutputData['id']] = array(
                'id'            => $OutputData['id'],
                'nome'          => $OutputData['nome'],
                'nascimento'    => $OutputData['nascimento'],
                'cpf'           => $OutputData['cpf'],
                'celular'       => $OutputData['celular'],
                'email'         => $OutputData['email'],
                'endereco'      => $OutputData['endereco'],
                'observacoes'   => $OutputData['observacoes']
            );
        }
        
        return $clientes;
    }

    // Clona os dados válidos de um backup para o cliente, para prevenir propriedades nulas
    function TratarCliente($cliente, $backup) {
        if (!isset($cliente->id) && isset($backup->id)) {
            $cliente->id = $backup->id;
        }
        
        if (!isset($cliente->nome) && isset($backup->nome)) {
            $cliente->nome = $backup->nome;
        }

        if (!isset($cliente->nascimento) && isset($backup->nascimento)) {
            $cliente->nascimento = $backup->nascimento;
        }

        if (!isset($cliente->cpf) && isset($backup->cpf)) {
            $cliente->cpf = $backup->cpf;
        }

        if (!isset($cliente->celular) && isset($backup->celular)) {
            $cliente->celular = $backup->celular;
        }

        if (!isset($cliente->email) && isset($backup->email)) {
            $cliente->email = $backup->email;
        }

        if (!isset($cliente->endereco) && isset($backup->endereco)) {
            $cliente->endereco = $backup->endereco;
        }

        if (!isset($cliente->observacoes) && isset($backup->observacoes)) {
            $cliente->observacoes = $backup->observacoes;
        }

        return $cliente;
    }
}

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

$API = new RestAPI();
$Requisicao = new Requisicao();

// Configura todas as rotas da API Rest
$method = $_SERVER['REQUEST_METHOD'];
if ($method == 'GET')
{
    if (isset($Requisicao->dados->id))
    {
        echo json_encode($API->GetClientePorId($Requisicao->dados->id));
    }
    else
    {
        if (isset($Requisicao->query))
        {
            echo json_encode($API->ProcurarClientes($Requisicao->query));
        }
        else
        {
            echo json_encode($API->GetClientes());
        }
    }
}

if ($method == 'POST')
{
    try {
        $API->CriarCliente($Requisicao->dados);
        echo "Cliente cadastrado com sucesso!";
    } catch (Exception $ex) {
        echo "Ocorreu um erro ao criar o cadastro cliente. ";
        echo $ex->getMessage();
    }
}

if ($method == 'PUT')
{
    if (isset($Requisicao->dados->id))
    {
        try {
            $API->AtualizarCliente($Requisicao->dados);

            echo "Cliente atualizado com sucesso!";
        } catch (Exception $ex) {
            echo "Ocorreu um erro ao atualizar o cliente. ";
            echo $ex->getMessage();
        }
    }
    else
    {
        echo "Informe um ID de cliente para ser atualizado!";
    }
}

if ($method == 'DELETE')
{
    try {
        $API->DeletarCliente($Requisicao->dados->id);

        echo "Cliente deletado com sucesso!";
    } catch (Exception $ex) {
        echo "Ocorreu um erro ao deletar o cadastro cliente. ";
        echo $ex->getMessage();
    }
}
?>