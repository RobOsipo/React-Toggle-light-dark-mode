

import React from 'react-dom'
import Navbar from './Navbar'
import Main from './Main'

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
    function toggle() {
        setDarkMode(prevState => !prevState)
    }
    return (
        <div className="container">
            <Navbar
            toggleDarkMode={toggle}
             darkMode={darkMode} 
             />
            <Main 
            
            darkMode={darkMode} 
            />
        </div>
    )
}

export default App;
