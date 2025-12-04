import {useNavigate} from "react-router-dom";
export default function UserForm({userData, handleOnUserSubmit, handleOnUserChange, currentPage, nextPage, postResponse}){
  const navigate =useNavigate()  ;
  return (
    <div>
      <h1>{currentPage}</h1>
      <form onSubmit={handleOnUserSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={userData.name}
          onChange={handleOnUserChange}
          placeholder="Enter name"
          required
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={userData.password}
          onChange={handleOnUserChange}
          placeholder="Enter password"
          required
        />
        <br />
        <button>Submit</button>
      </form>
      <p>{postResponse}</p>
      <button onClick={() => navigate(`/${nextPage}`)}>Go to login page</button>
    </div>
  );
}