import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { Head, SpanFirst, SpanSecond } from 'components/Section/Section.styled';

export default function ContactsPage() {
  return (
    <>
      <Section>
        <Head>
          <SpanFirst>Phonebook</SpanFirst>
          <SpanSecond>Phonebook</SpanSecond>
        </Head>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
