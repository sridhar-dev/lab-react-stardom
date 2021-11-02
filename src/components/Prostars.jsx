import React, {Component} from "react";
import prostar from "../resources/prostars.json"

export default class Prostars extends Component{
    constructor(){
        super();
            this.state = {
                prostars: [...prostar].splice(0,5)
            }
    }


    randomStars = () => {
        let allStar = [...prostar];
        let oldArray = [...this.state.prostars];
        let uniqueArray = [...new Set(oldArray)];
        let newArray =[];
            for( let i = 0; i < 1; i++){
            let num = Math.floor(Math.random() * 47) + 6;   
                newArray.push(allStar[num]);
            }
        this.setState({
            prostars: [...uniqueArray,...newArray]
        })
    }

    

    popularityOfStars = () => {
        let stars = [...this.state.prostars];
        let popularity = stars.sort ((a,b) => {
            return b.popularity - a.popularity;
        })
        this.setState({
            prostars: [...popularity]
        })
        }

    sortStars = () =>{
        let stars = [...this.state.prostars];
        let sorted = stars.sort((a,b) => {
            return a.name.localeCompare(b.name);
        });
        this.setState({
            prostars: [...sorted]
        })
    }



    deleteStar = (current) => {
        let stars = [...this.state.prostars];
        let newStars = stars.filter ((star) => {
            return star.id !== current.target.value
        })
        this.setState({
            prostars: [...newStars]
        })
    }



    render(){
        return (
            <div className="container">
                <div className="header">
                    <h1>ProStars</h1>
                </div>
                <div className="table" key={this.state.prostars.id}>

                    <button className="random" onClick={this.randomStars}>Get Random Contact</button>
                    <button className="sort" onClick={this.sortStars}>Sort By Name</button>
                    <button className="popularity" onClick={this.popularityOfStars}>Sort By popularity</button>

                    <table border="1">
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                        
                        {this.state.prostars.map ((prostar) => {
                            return <tr>
                                 <td><img src={prostar.pictureUrl} alt="" /></td>
                                 <td>{prostar.name}</td>
                                 <td>{prostar.popularity}</td>
                                 <td><button className="Delete" onClick={this.deleteStar} value={prostar.id}>Delete</button></td>
                            </tr>
                       
                        })
                        
    }
                    </table>
                </div>
            </div>
        )
    }
}