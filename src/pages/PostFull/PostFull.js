import React from "react";



import woods from '../../media/image/woods.jpg';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CommentsPub from "../../components/CommentsPub/CommentsPub";



class FullPost extends React.Component {
    constructor(props ) {
        super(props);

        this.state = {
            post:{}
        }
    }

    componentDidMount( ) {
        this.getPostById();
    }

    getPostById(){
        const URL = `http://localhost:3003/posts/${this.props.match.params.id}`;

        fetch(URL)
            .then(response => {
                if (response.ok){
                    return response.json();
                }else{
                    alert('error')
                }
            })

            .then(data => {
                this.setState({
                    post:data,
                })
        })
    }

    render() {
        return (
            <>
                <Header/>
                {/*Full Post*/}
                <div className="w3-card-4 w3-margin w3-white">
                    <img src={woods} alt="Nature" style={{width: '100%'}}/>
                    <div className="w3-container">
                        <h3><b>{ this.state.post.title }</b></h3>
                        <h5>{ this.state.post.tag } <span className="w3-opacity">{ this.state.post.createdData }</span></h5>
                    </div>
                    <div className="w3-container">
                        <p>
                            {
                                this.state.post.desc
                            }
                        </p><hr/>
                    </div>
                    {/*Comments add*/}
                    <div className="w3-container">
                        <div className="w3-row">
                            <div className="w3-col">
                                <p><span className="w3-padding w3-tag">Comments</span></p>
                                <input className="w3-input w3-border" type="text"/>
                                <button className="w3-button w3-section w3-wide w3-padding-large w3-white w3-border w3-right">
                                    <b>ADD</b>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/*Published comments*/}
                    <div className="w3-row w3-margin">
                        <div className="w3-col w3-margin-bottom">
                            <p><span className="w3-padding w3-tag">Published comments:</span></p>
                            <CommentsPub/>
                            <CommentsPub/>
                        </div>
                    </div>
                </div>
                <div className="w3-card-4 w3-margin w3-white">
                    <div className="w3-container">
                        <button onClick={() => this.props.history.goBack()} className="w3-button w3-section w3-padding-large w3-white w3-border w3-block">
                            <b>to main</b>
                        </button>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default FullPost;