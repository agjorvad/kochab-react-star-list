import React from 'react';


//Pure / Dumb / Function component (rather than Impure / Smart / Class)
const NewStarForm = props => (

  <form onSubmit={props.handleSubmitChild}>
    <input value={props.newStar.name} onChange={props.handleChangeForChild('name')} placeholder="User Name" />
    <input value={props.newStar.diameter} onChange={props.handleChangeForChild('diameter')} placeholder="Diameter" />
    {/* <button onClick={this.handleClick}>Submit</button> */}
    {/* // The first item in the array is: {this.state.starList} */}
    <input type="submit" value="Click to submit" />
  </form>
);
export default NewStarForm;
