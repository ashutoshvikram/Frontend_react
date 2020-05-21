import React, { Component,Fragment } from 'react';

import {Row} from 'react-materialize';
import Navgbar from '../Subcompo/Navgbar';
import Cards from '../Subcompo/Cards';
import Footer from '../Subcompo/Footer';
import '../index.css';
class MyAdds extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: true,
            items:[]
            
         }
    }
    componentDidMount() {
        const { match} = this.props;
        const token =localStorage.getItem('token')
        fetch('https://buyapi.herokuapp.com/api/myadds',{
            method:'GET',
            headers:{
                Authorization:"Bearer "+token
            }
        })
        .then(res =>(res.json()))
        .then(result =>{
            this.setState({
              loading:false,
              items:result.items  
            });

        })
    }
    render() { 
        return (
            <div>
            <Navgbar Group=""/>
            {this.state.isloaded?
            <Fragment>
            <div className="bkground">
            <h3 className="bkgroundtxt">My Adds:{this.props.match.params.name}</h3>
            </div>
           <img src="https://giphy.com/embed/MDrmyLuEV8XFOe7lU6" width="200" height="200" />
           </Fragment>  :
                <Fragment>
               <div className="bkground">
            <h3 className="bkgroundtxt">My Adds:{this.props.match.params.name}</h3>
            </div>
           <Row>
        
        {this.state.items.map(item =>(
            <Cards title={item.name}
            date_post={item.date}
            id={item._id}
            price={item.price+"/-"}
            location={item.location}
            image={item.imagesUrl[0]}
            description={item.description}
            delete='true'/>
        

        ))
       
        }
    </Row>
    
     
       </Fragment>
        }
        
    <Footer/>
    </div>
         );
          
    }
}
 
export default MyAdds;