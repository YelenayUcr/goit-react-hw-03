import styles from './Contact.module.css';

function Contact({ id, name, number, onDeleteContact }) {
  const handleDelete = () => {
    onDeleteContact(id);
  };

  return (
    <div className={styles.contact}>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
      
        <p className={styles.number}>{number}</p>
      </div>
      <button className={styles.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
  