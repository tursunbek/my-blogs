import React from "react";
import About from "../../components/About/About";
import PopularPosts from "../../components/PopularPost/PopularPosts";
import Tags from "../../components/Tags/Tags";

class Info extends React.Component{
    render() {
        return(
            <div className="w3-col l4">
                <About/>
                <hr/>
                <PopularPosts/>
                <hr/>
                <Tags/>
            </div>
        )
    }
}

export default Info;