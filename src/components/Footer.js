function Footer() {
  return (
    <footer className="footer page__footer">
      <p className="footer__text">
        &copy;&nbsp;{(new Date).getFullYear()} Mesto Russia
      </p>
    </footer>
  );
};
export default Footer;