const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footerStyle">
      <p>Copyright &#169; {year}</p>
    </footer>
  );
};
export default Footer;
