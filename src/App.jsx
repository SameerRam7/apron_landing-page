import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"


function App() {
  

  return (
    <>
      <div className="bg-[#fbefaf] min-h-screen min-w-fit px-20 py-7 flex flex-col gap-10">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </>
  )
}

export default App
