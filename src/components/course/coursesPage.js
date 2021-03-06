/**
 * Created by BlisS on 20/03/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './courseList';
import {browserHistory} from 'react-router';



class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);

    // this.state = {
    //   course: { title: '' }
    // };
    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
  }

  // onTitleChange(event){
  //   const course = this.state.course;
  //   course.title = event.target.value;
  //   this.setState({course: course});
  // }
  //
  // onClickSave(e){
  //   // e.preventDefault();
  //   // this.props.dispatch(courseActions.createCourse(this.state.course));
  //   this.props.actions.createCourse(this.state.course);
  // }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }

  render() {
    const {courses} = this.props;

    return(
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage} />

        <CourseList courses={courses} deleteCourse={this.props.deleteCourse}/>
      </div>
    );
  }
}

CoursePage.propTypes = {
  actions: React.PropTypes.object.isRequired,
  courses: React.PropTypes.array.isRequired,
  deleteCourse: React.PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);


