import { AddContastForm } from "./components/ContactForm/ContactForm";
import { Container } from "@mui/material";
import { ContactsList } from "./components/ContactList/Contact";
import { Filter } from "./components/Filter/SearchBox";

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
