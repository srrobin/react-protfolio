import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Protfolio from './components/Protfolio';
import "./App.css"
import Navbar from './components/Navbar';
import {  AnimatePresence } from "framer-motion"
import ProjectExplor from './components/ProjectExplor';
import Experienced from './components/Experienced';

const App = () => {
  const location = useLocation();
  return (
    <main>
      <Navbar />
      <AnimatePresence initial={false} mode='wait'>
      <Routes  location={location} key={location.pathname}>
         <Route path="/" element={<Home />} />
          <Route path="/robin" element={<Protfolio  />}/>
          <Route path="/robin/demo-work" element={<ProjectExplor/>}/>
          <Route path="/robin/experienced" element={<Experienced/>}/>
      </Routes>
      </AnimatePresence>
    </main>
  );
};

export default App;

// import React from 'react';
// import Srbutton from './components/srbutton/Srbutton';
// import "./styles/index.scss";
// const App = () => {
//   return (
//     <div className='home'>
//       <h1>Md. Sayam Rahman Robin</h1>
//       <p>Each font selected for these categories offers unique characteristics that make it suitable for specific design elements and projects. Whether you are designing a website, creating a logo, or working on print materials, choosing the right font can enhance the overall look and feel of your design. Experiment with these popular Google Fonts to find the perfect match for your next design endeavor</p>
//       <Srbutton />

//       <p>https://calendly.com/app/scheduled_events/user/me</p>

//       <div>
//       Job Title
// Wassim Chegham, Senior Developer Advocate Engineer at Microsoft


// Mantra
// Don't dream about success, work hard for it.


// Education
// Wassim is a graduate of the University of Rennes 1, France, where he received a M.S. in Computer Science.


// Short 1st person biography
// I'm Wassim, I create tools for developers. I am a long-time Angular active contributor and currently a Node.js core contributor. I work at Microsoft as a Senior Developer Advocate Engineer specialized in JavaScript. I am the creator of Azure Static Web Apps CLI, thundr.dev, xlayers.dev, ngx.tools, hexa.run, and many more. I am also a GDE for Google and an ambassador for Auth0.


// Long 3rd person biography
// Wassim works for Microsoft as Senior Developer Advocate Engineer, specialized in JavaScript and Web technologies. In addition to being a contributor on Angular, Bazel and Node.js, Wassim is also the author of many tools for developers such as Azure Static Web Apps CLI, xlayers.dev and ngx.tools. For his many contributions to the developer community, Auth0 nominated Wassim as an Auth Ambassador, and Google nominated him as a GDE on Web technologies, Angular, Google Assistant as well as formerly in Google Cloud Platform. In his free time, Wassim is learning electronic music (EDM) as well as drawing and sketch noting.
//       </div>
//     </div>
//   );
// };

// export default App;