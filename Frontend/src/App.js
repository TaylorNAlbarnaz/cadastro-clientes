import { useState, useEffect } from 'react';
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
  const [update, setUpdate] = useState(0);

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

    const cliente = await getCliente(id);
    setCliente(cliente);
  }

  // Seta o showDelete para true, deixando o DeleteClientModel visível
  async function showDeleteClientModal(id) {
    setShowDelete(true);
    
    const cliente = await getCliente(id);
    setCliente(cliente);
  }

  function updateDatabase() {
    console.log(update);
    setUpdate(update + 1);
    console.log(update);
  }

  return (
    <>
      <Header/>
      <Controls onCreate = {showCreateClientModal}/>

      <ClientList
        onView = {(id) => showViewClientModal(id)}
        onEdit = {(id) => showEditClientModal(id)}
        onDelete = {(id) => showDeleteClientModal(id)}
        updateDatabase = {update}
      />

      <CreateClientModal
        show = {showCreate}
        editing = {editing}
        cliente = {cliente}
        onClose = {() => setShowCreate(false)}
        onUpdate = {() => updateDatabase()}
      />

      <ViewClientModal
        show = {showView} onClose={() => setShowView(false)}
        cliente = {cliente}
      />

      <DeleteClientModal
        show = {showDelete} onClose={() => setShowDelete(false)}
        cliente = {cliente}
        onUpdate = {() => updateDatabase()}
      />
    </>
  );
}

export default App;
