/**
 * Created by BlisS on 21/03/17.
 */
import React, {PropTypes} from 'react';
import CourseListRow from './courseListRow';

const CourseList = ({courses, deleteCourse}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
      {courses.map(course =>
        <CourseListRow key={course.id} course={course} />
      )}
      </tbody>
      <tr>
        <td></td>
      </tr>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  deleteCourse: PropTypes.func.isRequired
};

export default CourseList;
