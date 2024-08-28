export const BASE_ROUTE="/";
export const ABOUT="/about";
export const CONTACT="/contact";

// Student Routes for client
export const STUDENT='/student'
export const REGISTER_STUDENT=`${STUDENT}/registerStudent`;
export const STUDENT_DASHBOARD=`/${STUDENT}/studentDashboard`;
export const STUDENT_NOTES=`/${STUDENT}/notes`
export const STUDENT_QUIZ=`/${STUDENT}/quiz`
export const STUDENT_PROFILE=`/${STUDENT}/profile`

// Teacher Routes for client
export const TEACHER='/teacher'
export const TEACHER_DASHBOARD=`/${TEACHER}/studentDashboard`;
export const TEACHER_NOTES=`/${TEACHER}/notes`
export const TEACHER_QUIZ=`/${TEACHER}/quiz`
export const TEACHER_PROFILE=`/${TEACHER}/profile`

// Admin Routes for client
export const ADMIN='admin'
export const ADMIN_DASHBOARD=`${ADMIN}/Dashboard`;
export const ADD_USER=`${ADMIN}/addUser`
export const MANAGE_USER=`${ADMIN}/manageUser`