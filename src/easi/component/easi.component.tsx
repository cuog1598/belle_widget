import React from "react";

interface ComponentProps {
  users: any[];
}
type Props = ComponentProps;

const Easi: React.FunctionComponent<Props> = ({ users }) => {
  const renderUser = (): React.ReactElement[] => {
    return users.map((item, index) => {
      return <li key={item.id}>{item.title}</li>;
    });
  };

  return <ul>{renderUser()}</ul>;
};

export default Easi;
