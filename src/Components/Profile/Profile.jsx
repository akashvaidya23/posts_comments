const Profile = (props) => {
  const { listUsers } = props;
  return (
    <>
      <div
        style={{
          border: "3px solid black",
          padding: "5px"
        }}
      >
        {listUsers.map((users, index) => {
          return (
            <div
              key={index}
              style={{
                border: "1px solid black",
                margin: "2px",
                backgroundColor: "beige"
              }}
            >
              <p>{index + 1}</p>
              <h4>{users.title}</h4>
              <p>{users.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Profile;
