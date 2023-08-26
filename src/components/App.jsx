import ContactsPage from 'pages/ContactsPage/ContactsPage';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import Layout from './Layout/Layout';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import { Section } from './Section/Section';
// import { Head, SpanFirst, SpanSecond } from './Section/Section.styled';

export const App = () => {
  return (
    <>
      <AppBar />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>

      {/* <Section>
        <Head>
          <SpanFirst>Phonebook</SpanFirst>
          <SpanSecond>Phonebook</SpanSecond>
        </Head>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section> */}
    </>
  );
};
