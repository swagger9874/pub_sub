import React, { Component } from "react"

class Components extends Component{
    constructor(props){
        super(props)
        this.ps = this.props.pubsub
        this.toSub = ''
        this.state = {
            animals : this.props.animals,
            cards : this.props.cards,
            toSub : ''
        }
        
        this.list = []
    }
    onPublishClicked(message,topic){
        const list1 = this.ps.publish(message,topic)
        this.cards = list1[1];
        this.setState({cards : list1})
    }
    handleSubChange = (event) => {
        this.setState({toSub : event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault();
    }
    onSubClick(toSub,id){
    const list1 = this.ps.subscribe(toSub,id)
    this.setState({animals : list1[0]})
    this.setState({cards : list1[1]})
    console.log(list1)
}
    render(){
        return(
            <div>
                <div className="row">
                { this.state.animals.map(animal => {
                    return (
                        <div className="card ml-3 mb-3 mt-3" key = {animal.id} style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Topic : {animal.topic}</h5>
                                <p className="card-text">Message : {animal.message}</p>
                                <button type="button" className="btn btn-primary mt-3" 
                                    onClick={() => this.onPublishClicked(animal.message,animal.topic)}
                                    >Publish</button>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className="row">
                {this.state.cards.map(card => {
                    return (
                        <div className="card ml-3 mb-3 mt-3" key = {card.id}style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Subscriber To : {card.subTo}</h5>
                                <p className="card-text">Content : {card.content}</p>
                                <form onSubmit={this.handleSubmit}>
                                <input type="text" value = {this.state.toSub} onChange={this.handleSubChange}></input>
                                <button type="submit" onClick = {() => this.onSubClick(this.state.toSub,card.id)}>Subscribe</button>
                                </form>
                                
                            </div>
                        </div>
                    )
                })
                }
            </div>

            </div>
        )}
        
 
}
export default Components