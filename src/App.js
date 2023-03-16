import { useState } from 'react';
import { ClientList, Controls, Header } from './components';
import { CreateClientModal, ViewClientModal, DeleteClientModal } from './components/Modals';

function App() {
  const [showCreate, setShowCreate] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [editing, setEditing] = useState(false);

  // Seta o showCreate para true, eixando o CreateClientModal visível
  function showCreateClientModal() {
    setShowCreate(true);
    setEditing(false);
  }

  // Seta o showCreate para true e muda o CreateClientModal para o modo de edição ao invés de criação
  function showEditClientModal() {
    setShowCreate(true);
    setEditing(true);
  }

  // Seta o showView para true, deixando o ViewClientModel visível
  function showViewClientModal() {
    setShowView(true);
  }

  // Seta o showDelete para true, deixando o DeleteClientModel visível
  function showDeleteClientModal() {
    setShowDelete(true);
  }

  return (
    <>
      <Header/>
      <Controls onCreate = {showCreateClientModal}/>

      <ClientList
        onView = {showViewClientModal}
        onEdit = {showEditClientModal}
        onDelete = {showDeleteClientModal}
      />

      <CreateClientModal
        show={showCreate}
        editing={editing}
        onClose={() => setShowCreate(false)}
      />

      <ViewClientModal
        show={showView} onClose={() => setShowView(false)}
      />

      <DeleteClientModal
        show={showDelete} onClose={() => setShowDelete(false)}
      />
    </>
  );
}

export default App;
