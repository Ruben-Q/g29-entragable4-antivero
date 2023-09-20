const UserCard = ({ user, deleteUsers, setInfoUpdate, isModal }) => { 
  const handleDelete = () => {
    deleteUsers('/users', user.id)
  }

const handleEdit = () => {
  setInfoUpdate(user)
}
  return (
    <article className="footer">
      <h3 className="footer-userName" >#{`${user.id} ${user.first_name} ${user.last_name}`}</h3>
      <hr className="footer-line" />
      <ul className="footer-info">
        <li><span>Email: </span><span>{user.email}</span></li>
        <li><span>Birthday: </span><span>{user.birthday}</span></li>
      </ul>
      <button className="button-delete" onClick={handleDelete}>Delete</button>
      <button className="button-edit" onClick={handleEdit}>Edit</button>
    </article>
  )
}

export default UserCard