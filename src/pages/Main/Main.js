import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Post from "../Post/Post";
import Info from "../Info/info";

class Main extends React.Component{
    render(){
        return (
            <>
                <div className="w3-content" style={ {maxWidth:'1400px'} }>
                    <Header/>
                    <div className="w3-row">
                        <Post/>
                        <Info/>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Main;