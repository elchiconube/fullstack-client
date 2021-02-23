import { useState } from "react";

import BackofficePageContainer from "./BackofficePageContainer";

const BackofficeContainer = () => {
  const [type, setType] = useState("pages");
  return (
    <div>
      <h1>Backoffice</h1>
      {type === "pages" && <BackofficePageContainer />}
    </div>
  );
};
export default BackofficeContainer;
