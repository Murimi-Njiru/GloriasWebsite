import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Registration } from './registration/Registration';
import { initializeIcons, loadTheme } from "@fluentui/react";
import { Home } from './home/Home';

function App() {
  return (
    <div>
      <Switch>
        <Route  path="/" exact component={Home}/>
        <Route path="/registration" component={Registration}/>
      </Switch>
    </div>
  );
}

initializeIcons();
loadTheme({
  palette: {
    "themePrimary": "#DC143C",
    "themeLighterAlt": "#fef4f6",
    "themeLighter": "#f9d5dc",
    "themeLight": "#f4b2bf",
    "themeTertiary": "#ea6a84",
    "themeSecondary": "#e02d50",
    "themeDarkAlt": "#c51236",
    "themeDark": "#a70f2d",
    "themeDarker": "#7b0b21",
    "neutralLighterAlt": "#faf9f8",
    "neutralLighter": "#f3f2f1",
    "neutralLight": "#edebe9",
    "neutralQuaternaryAlt": "#e1dfdd",
    "neutralQuaternary": "#d0d0d0",
    "neutralTertiaryAlt": "#c8c6c4",
    "neutralTertiary": "#a19f9d",
    "neutralSecondary": "#605e5c",
    "neutralPrimaryAlt": "#3b3a39",
    "neutralPrimary": "#323130",
    "neutralDark": "#201f1e",
    "black": "#000000",
    "white": "#ffffff"
  }  
})

export default App;
