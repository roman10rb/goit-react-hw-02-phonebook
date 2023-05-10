



const ContactList = ({todos, onDeleteTodo}) => {
    return (<div>
        <ul>
    {todos.map(({ id, name, number}) => (
      <li key={id}>
            {name}: {number}
            <button
          type="button"
          onClick={() => onDeleteTodo(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
    </div>)

    
}
export default ContactList;


