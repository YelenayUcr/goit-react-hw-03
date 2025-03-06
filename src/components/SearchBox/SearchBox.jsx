import styles from './SearchBox.module.css';

function SearchBox({ filter, onChange }) {
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Search contacts"
      />
    </div>
  );
}

export default SearchBox;
