import styles from './Footer.module.css';

const contacts = [
  { label: 'Linkedin', href: 'https://linkedin.com' },
  { label: 'Telegram', href: 'https://t.me/daria' },
  { label: 'Скачать резюме', href: '/resume.pdf' },
  { label: 'daryadyatlova96@gmail.com', href: 'mailto:daryadyatlova96@gmail.com' },
];

const Footer = () => (
  <footer className={styles.footer} id="contacts">
    <div className={`container ${styles.inner}`}>
      <h2 className={styles.title}>Связаться со мной</h2>
      <ul className={styles.list}>
        {contacts.map((contact) => (
          <li key={contact.label}>
            <a href={contact.href} className={styles.link} target="_blank" rel="noreferrer">
              {contact.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
