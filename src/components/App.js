import React from 'react';
import '../scss/App.scss';
import ReactLogo from '../assets/react.png';
import WebpackLogo from '../assets/webpack.png';
import BabelLogo from '../assets/babel.svg';
import ESLintLogo from '../assets/eslintlogo.png';
import PrettierLogo from '../assets/prettier.svg';

const App = () => (
  <div className="App">
    <div className="App-Content">
      <h1>React Webpack and Babel Template</h1>
      <h2>With ESLint and Prettier</h2>
      <div className="logos">
        <a href="https://reactjs.org/">
          <img alt="react logo" src={ReactLogo} width="100" height="100" />
        </a>
        <a href="https://webpack.js.org/">
          <img alt="webpack logo" src={WebpackLogo} width="100" height="100" />
        </a>
        <a href="https://babeljs.io">
          <img alt="babel logo" src={BabelLogo} width="100" height="100" />
        </a>
        <a href="https://eslint.org/">
          <img alt="eslint logo" src={ESLintLogo} width="100" height="100" />
        </a>
        <a href="https://prettier.io/">
          <img alt="prettier logo" src={PrettierLogo} width="100" height="100" />
        </a>
      </div>
    </div>
  </div>
);

export default App;
