import NavSidebar from "./nav-sidebar/NavSidebar.tsx";

const App = () => {
  return(
    <div>
      <NavSidebar resourceUrl={'/menu-items'}/>
    </div>
  )
}

export default App;