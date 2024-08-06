import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ABOUT, ADD_USER, ADMIN_DASHBOARD, BASE_ROUTE, CONTACT, MANAGE_USER, REGISTER_STUDENT, STUDENT_DASHBOARD, STUDENT_NOTES, STUDENT_PROFILE, STUDENT_QUIZ, TEACHER_DASHBOARD, TEACHER_NOTES, TEACHER_PROFILE, TEACHER_QUIZ } from './constants/appConstants'
import Navbar from './components/Common/Navbar';

function App() {
  return (
    <BrowserRouter>

    <Navbar/>

      <Routes>
        <Route path={BASE_ROUTE} element={''}/>
        <Route path={ABOUT} element={''}/>
        <Route path={CONTACT} element={''}/>

        {/* Admin Routes */}
        <Route path={ADMIN_DASHBOARD} element={''}/>
        <Route path={ADD_USER} element={''}/>
        <Route path={MANAGE_USER} element={''}/>

        {/* Student Routes */}
        <Route path={REGISTER_STUDENT} element={''}/>
        <Route path={STUDENT_DASHBOARD} element={''}/>
        <Route path={STUDENT_NOTES} element={''}/>
        <Route path={STUDENT_QUIZ} element={''}/>
        <Route path={STUDENT_PROFILE} element={''}/>

        {/* Teacher Routes */}
        <Route path={TEACHER_DASHBOARD} element={''}/>
        <Route path={TEACHER_NOTES} element={''}/>
        <Route path={TEACHER_QUIZ} element={''}/>
        <Route path={TEACHER_PROFILE} element={''}/>
      </Routes>

      {/* Footer element here */}
    </BrowserRouter>
  );
}

export default App;

/*

Reference Code

<Route path={urlPath} element={<element/>}/>

for TailwindCss

    <div className="App">
      <h1 className="text-3xl font-bold">
      Hello world!
    </h1>
    </div>

*/