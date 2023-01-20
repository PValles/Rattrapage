import data1 from "../data/users.json";

const UsersData = () => {
  return (
    <div>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>phone</th>
          <th>email</th>
        </tr>
        {data1.map((user) => {
          return (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default UsersData;
