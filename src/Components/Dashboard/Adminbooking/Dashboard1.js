// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from '../Navbar';
// import Sidebar from '../Sidebar';

// const Dashboard1 = () => {
//   let { component } = useParams();

//   // Logic to render different components based on the 'component' parameter
//   let componentToRender;
//   switch (component) {
//     case 'home':
//       componentToRender = <div>Home Component</div>;
//       break;
//     case 'profile':
//       componentToRender = <div>Profile Component</div>;
//       break;
//     case 'settings':
//       componentToRender = <div>Settings Component</div>;
//       break;
//     default:
//       componentToRender = <div>Not Found</div>;
//   }

//   return (
//     <div className="dashboard">

//         <Navbar/>
//         <Sidebar/>
//       {componentToRender}
//     </div>
//   );
// };

// export default Dashboard1;
