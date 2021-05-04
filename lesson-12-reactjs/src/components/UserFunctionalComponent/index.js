import './style.css'

function UserFunctionalComponent(props) {
  const { name, age, gender } = props

  return (
    <div className="func-component">
      <p className="func-component__name">Name: {name}</p>
      <p className="func-component__age">Age: {age}</p>
      <p className="func-component__gender">Gender: {gender}</p>
    </div>
  );
}

export default UserFunctionalComponent;