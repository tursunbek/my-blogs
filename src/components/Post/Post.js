import React from "react";
import PostCard from "../PostCard/PostCard";

class Post extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            postList:[]
        }
    }

    componentDidMount( ) {
        fetch('http://localhost:3003/posts')
            .then(response => {
                if(response.ok){
                    return response.json();
                }else {
                    alert('error');
                }
            })
            .then(data => this.setState({postList:data}))
    }

    render() {
        return (
            <>
                <div className="w3-col l8 s12">
                    {
                        this.state.postList.map(item => {
                            return <PostCard
                                title={item.title}
                                tag={item.tag}
                                createData={item.createData}
                                desc={item.desc}
                                img={item.img[0]}
                                id={item.id}
                            />
                        })
                    }
                </div>
            </>
        );
    }
}

export default Post;