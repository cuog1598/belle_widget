import React, { useEffect, useState } from "react";
import Easi from "./component/easi.component";

interface ComponentProps {
  domElement: Element;
}

type Props = ComponentProps;

const App: React.FunctionComponent<Props> = ({ domElement }) => {
  // get pass data from class
  const id = domElement.getAttribute("data-subreddit");
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    const headers = { "Content-Type": "application/json" };
    fetch("https://jsonplaceholder.typicode.com/todos", {
      headers,
    })
      .then((response) => response.json())
      .then((res) => setUsers(res))
      .catch((ex) => {
        console.log(ex);
      });
  };

  return <Easi users={users} />;
};

export default App;
