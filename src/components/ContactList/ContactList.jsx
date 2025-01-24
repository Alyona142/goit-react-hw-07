import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const valueOfFilter = useSelector(selectNameFilter);

  return (
    <ul className={s.contactList}>
      {contacts
        .filter((contact) =>
          contact.name.toLowerCase().includes(valueOfFilter.toLowerCase())
        )
        .map(({ id, number, name }) => (
          <Contact key={id} id={id} number={number} name={name} />
        ))}
    </ul>
  );
};

export default ContactList;
