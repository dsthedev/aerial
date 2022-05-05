import 'src/aerial.css'

const AerialLayout = ({ children }) => {
  return <>

    <div id="wrapper">
      <div id="bg"></div>
      <div id="overlay"></div>
      <div id="main">
        {children}
      </div>
    </div>
  </>
}

export default AerialLayout
