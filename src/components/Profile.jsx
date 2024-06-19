import styles from "./Profile.module.css";
export const Profile = (props) => {
  const idStyle = {
    color: "green",
    fontSize: "2rem",
  }
  let user = props.function();
  console.log(user);
  return (
    <div className="row">
      <div className="col-md-4">
        <img className="img-fluid"
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg"
          alt="Фото пользователя"
        />
      </div>
      <div className="col-md-8">
        <h2 className={styles.name}>
          Фамилия имя: <span> Серега </span>
        </h2>
        <p className={styles.email}>
          Email: <span> sergo@mail.ru </span>
        </p>
        <p style={idStyle}>
          Id: <span> 4 </span>
        </p>
        <p style={{ fontSize: 24, color: "red" }}>История о себе: </p>
      </div>
    </div>
  );
};
