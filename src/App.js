import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context';
// import { ProjectsProvider } from './context/projects-context';
// import { SelectedProjectProvider } from './context/selected-projects-context';

export const App = () => {
  // const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main
          data-testid="application"
        >
          <Header />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

// App.propTypes = {
//   darkModeDefault: PropTypes.bool,
// };