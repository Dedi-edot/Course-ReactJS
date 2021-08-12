import React from "react";

class Form extends React.Component {
  state = {
    name: "",
    gender: "Male",
    description: "",
    term: false,
  };

  inputHandle = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [name]: [value] });
  };

  //   genderChangeHandle = (e) => {
  //     this.setState({ gender: e.target.value });
  //   };

  //   deschandle = (e) => {
  //     this.setState({ description: e.target.value });
  //   };

  //   termHandle = (e) => {
  //     this.setState({ term: e.target.checked });
  //   };

  formPrevent = (e) => {
    e.preventDefault();
    alert(
      `Name : ${this.state.name}\nGender : ${this.state.gender} \nDescription : ${this.state.description}\nTerm : ${this.state.term}`
    );
  };

  render() {
    return (
      <form onSubmit={this.formPrevent}>
        <div>
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              onChange={this.inputHandle}
            />
          </label>
        </div>
        <div>
          <label htmlFor="gender">
            Gender
            <select name="gender" id="gender" onChange={this.inputHandle}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description
            <textarea
              name="description"
              id="description"
              onChange={this.inputHandle}
            ></textarea>
          </label>
        </div>
        <div>
          <label htmlFor="term">
            Term Agreement
            <input name="term" type="checkbox" onChange={this.inputHandle} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
