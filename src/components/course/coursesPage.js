/**
 * Created by BlisS on 20/03/17.
 */
import React from 'react';


class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: '' }
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave(e){
    // e.preventDefault();
    console.log('chet');
    alert(`Saving ${this.state.course.title}`);
  }

  render() {
    return(
      <div>
        <h1>Courses</h1>
        <div id="form">
          <h2>Add Course</h2>
          <input
            type="text"
            onChange={this.onTitleChange}
            value={this.state.course.title}/>

          <input
            type="submit"
            value="Save"
            onClick={this.onClickSave} />
        </div>
      </div>
    );
  }
}

export default CoursePage;


