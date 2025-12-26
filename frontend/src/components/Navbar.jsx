import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        background: "#f5f5f5",
        gap: "15px"
      }}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        width="40"
        style={{ cursor: "pointer" }}
        onClick={() => window.location.href = "/"}
      />

      <h3>MySocial</h3>

      {/* Navigation Links */}
      <a href="/">Home</a>
      <a href="/profile">Profile</a>
      <a href="/friends">Friends</a>
      <a href="/messages">Messages</a>
      <a href="/notifications">Notifications</a>

      {/* Push right */}
      <div style={{ marginLeft: "auto", display: "flex", gap: "10px" }}>
        <input type="text" placeholder="Search..." />

        {/* Login & Register */}
        <a href="/login">
          <button>Login</button>
        </a>
        <a href="/register">
          <button>Register</button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;