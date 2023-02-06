import Header from "./components/Header";
import Footer from "./components/Footer";
import Table from "./components/Table";
import Details from "./components/Details";
import Counter from "./components/Counter";

const App=()=>{

  const companyName="Capgemini";
  const address="India";
  const emailAddress="Careers@capgemini.com";

  return (
  <div className="container">
    <Header company={companyName} location={address}/>
    <h1>Content</h1>
    <Counter/>
    <Table/>
    <Details/>
    <Footer email={emailAddress}/>
    
  </div>
  )
}
export default App;