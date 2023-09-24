import "../node_modules/bootstrap/dist/css/bootstrap.css";

function Header(props) {
  const returnUI = () => {
    if (props.loggedInUser == "Guest") {
      return <div style={{ float: "right" }}>Welcome {props.loggedInUser}</div>;
    } else {
      return (
        <div style={{ float: "right" }}>
          Welcome {props.loggedInUser}
          <button
            className="btn btn-warning"
            onClick={() => {
              props.logout();
            }}
          >
            Sign out
          </button>
        </div>
      );
    }
  };
  return (
    <div>
      <center>
        <i>
          <h1 style={{ color: " Red" }}>Profilepedia</h1>
        </i>
        <i>
          <h2 style={{ color: " Purple" }}>Profile Management System</h2>
        </i>
        <br></br>
      </center>
      {returnUI()}
    </div>
  );
}

export default Header;
