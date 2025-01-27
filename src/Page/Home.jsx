import Header from "../components/Home/Header";
import Featured from "../components/Home/Featured";
import Colser from "../components/Home/Colser";
import InfoHome from "../components/Home/InfoHome";
import Deal from "../components/Home/Deal";
import PropertieHome from "../components/Home/PropertieHome";
import ContactHome from "../components/Home/ContactHome";

const Home = () => {
  
  return (
<div className="">
    <Header/>
    <Featured/>
    <Colser/>
    <InfoHome/>
    <Deal/>
    <PropertieHome/>
    <ContactHome/>
</div>
  );
};

export default Home;
