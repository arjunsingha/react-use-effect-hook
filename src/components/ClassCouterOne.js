import React, {Component} from 'react';
class ClassCounterOne extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0,
            name:''
         }
    }

    componentDidMount(){
        document.title = `You clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count){
            console.log("updateing document title" + JSON.stringify(this.state));
            document.title = `You clicked ${this.state.count} times`;
        }
    }
    

    render() { 
        return ( 
            <div>
                <input type="text" 
                value={this.state.name} 
                onChange={ e => {
                    this.setState({
                        ...this.state,
                        name: e.target.value
                    });
                }}/>
                <button onClick={()=>this.setState({count: this.state.count+1})}>Clicked {this.state.count} times</button>
            </div>
         );
    }
}
 
export default ClassCounterOne;