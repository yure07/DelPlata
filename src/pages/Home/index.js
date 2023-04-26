import Header from "../../components/Header/index.js";
import Filter from "../../components/Filter/index.js";
import Marketing from "../../components/Marketing/index.js";
import Logistic from "../../components/Logistic/index.js";
import Catalog from "../../components/Catalog/index.js";
import Footer from "../../components/Footer/index.js";

export default function Home () {
    return(
        <>
            <Header/>
            <Filter/>
            <Marketing/>
            <Logistic/>
            <Catalog/>
            <Footer/>
        </>
    )
}