import { AddContastForm } from "./components/AddContastForm/AddContastForm";
import { Container } from "@mui/material";
import { ContactsList } from "./components/ContactsList/ContactsList";
import { Filter } from "./components/Filter/Filter";

export const App = () => {
  return (
    <Container maxWidth="xl">
      <h1>Phonebook</h1>
      <AddContastForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
};
