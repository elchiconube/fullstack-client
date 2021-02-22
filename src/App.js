import BackofficeContainer from "./Backoffice/containers/BackofficeContainer";

const App = () => {
  const getComponent = (str) => {
    switch (str) {
      case "/backoffice":
        return <BackofficeContainer />;
      default:
        break;
    }
  };

  const pathname = window.location.pathname;

  return (
    <div>
      <h1>Welcome</h1>
      {getComponent(pathname)}
    </div>
  );
};

export default App;
