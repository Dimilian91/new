import { NavLink } from "react-router-dom";

const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.id}</td>
      <td>
        <NavLink to={"/profile/" + props.id}>
          {props.name} {props.lastname}
        </NavLink>
      </td>
      <td>{props.email}</td>
    </tr>
  );
}

export const Friends = (props) => {
  let users = props.function();
  // console.log(users);
  let usersCount = Object.keys(users).length;
  let usersRow = [];
  for(let i = 0; i < usersCount; i++) {
    usersRow.push(<TableRow key={i} index={i} name={users[i].name} lastname={users[i].lastname} id={users[i].id} email={users[i].email} />);
  }
  return (
    <div className="row">
      <div className="col-12">
      <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th>Id</th>
      <th scope="col">Имя И Фамилия</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {usersRow}
  </tbody>
</table>
      </div>
    </div>
  );
};
