import { useState, useRef, createRef } from 'react';
import { ClientList, Controls, Header } from './components';
import { CreateClientModal, ViewClientModal, DeleteClientModal } from './components/Modals';
import { getCliente } from './services/ClienteService';

function App() {
  // Cliente atualmente sendo modificado ou criado
  const [cliente, setCliente] = useState();

  // Variáveis para controlar quais telas são mostradas
  const [showCreate, setShowCreate] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [editing, setEditing] = useState(false);

  // Seta o showCreate para true, eixando o CreateClientModal visível
  function showCreateClientModal() {
    setShowCreate(true);
    setEditing(false);

    setCliente(null);
  }

  // Seta o showCreate para true e muda o CreateClientModal para o modo de edição ao invés de criação
  async function showEditClientModal(id) {
    setShowCreate(true);
    setEditing(true);

    const cliente = await getCliente(id);
    setCliente(cliente);
  }

  // Seta o showView para true, deixando o ViewClientModel visível
  async function showViewClientModal(id) {
    setShowView(true);
    setCliente(await getCliente(id));
  }

  // Seta o showDelete para true, deixando o DeleteClientModel visível
  async function showDeleteClientModal(id) {
    setShowDelete(true);
    setCliente(await getCliente(id));
  }

  return (
    <>
      <Header/>
      <Controls onCreate = {showCreateClientModal}/>

      <ClientList
        onView = {(id) => showViewClientModal(id)}
        onEdit = {(id) => showEditClientModal(id)}
        onDelete = {(id) => showDeleteClientModal(id)}
      />

      <CreateClientModal
        show={showCreate}
        editing={editing}
        cliente={cliente}
        onClose={() => setShowCreate(false)}
      />

      <ViewClientModal
        show={showView} onClose={() => setShowView(false)}
        cliente={cliente}
      />

      <DeleteClientModal
        show={showDelete} onClose={() => setShowDelete(false)}
        cliente={cliente}
      />
    </>
  );
}

export default App;
