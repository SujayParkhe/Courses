import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CourseList from './components/CourseList';
import SingleCourse from './components/SingleCourse';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/course/:slug' component={SingleCourse} />
        <Route path='/course' component={CourseList} />
      </Switch>
    </div>
  )
}

export default App;
