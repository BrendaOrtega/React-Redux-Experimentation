/**
 * Created by BlisS on 26/03/17.
 */
import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';




describe('Manage Course PAge', () =>{
  it('sets error message when trying to save empty title', () =>{
    // const wrapper = mount(
    //   <Provider store={store}>
    //     <ManageCoursePage />
    //   </Provider>);

    const props = {
      course: {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
      },
      actions: { saveCourse: () => {return Promise.resolve();} },
      authors: []
    };

    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
