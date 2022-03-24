import React, { Component } from 'react'

export default class Settings extends Component {
    state = {
        a: 'boolean'
    }

    b

    constructor(){
        super()
 
        // const obj1 = ['x',1,'y',2];
        const obj2 = {x:3, w:4};

    //   this.b = [...obj1, 1,2,3,4,5,5, {'5':9} ];

      const [,,,,d] = [1,2,3,4,5,6,7];
      const { x,...rest } =  {x:3, w:4};
      this.b = rest
       //this.b = {...obj2,'x': 8, ...a};
        // this.b = [...obj2];
    
      const foo = (...x) => {
          return x
      }

    //   this.b = foo(1,2,3,4,5,6,7,8);


    }

  componentDidMount(){
    // this.setState({a:7})
    // console.log(this.state);

    this.setState({
        a : this.b  
      })
  }



  render() {
    // console.log("render");
    return (<b>
      {JSON.stringify(this.state.a)}
      </b>
    )
  }
}
