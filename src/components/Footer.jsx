const Footer = () => {
  return (
    <footer style={{
      background: "var(--color-surface)",
      borderTop: "1px solid var(--color-border)",
      padding: "20px",
      textAlign: "center",
      marginTop: "40px"
    }}>
      <p style={{ margin: 0, color: "var(--color-text-light)" }}>
        © 2026 AH-OSSOOL Dashboard
      </p>

      <div style={{
        marginTop: "8px",
        fontSize: "14px",
        color: "var(--color-text-light)"
      }}>
        Built with ❤️ by Team AH-OSSOOL
      </div>
    </footer>
  );
};

export default Footer;