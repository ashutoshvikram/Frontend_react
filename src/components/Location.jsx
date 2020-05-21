import React, { Component ,Fragment} from 'react';

import {Row} from 'react-materialize';
import Navgbar from '../Subcompo/Navgbar';
import Cards from '../Subcompo/Cards';
import Footer from '../Subcompo/Footer';
import '../App.css';
import { API } from '../helper/Auth';

class Category extends Component {
    
    constructor(props) {
         super(props);
        this.state = { 
            loading: true,
            items:[]
            
         }
    }
    componentDidMount() {
        const token=localStorage.getItem("token")
       
        const { match} = this.props;
        console.warn(this.token)
        fetch(`${API}loc/${match.params.name}`,{
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
            {this.state.loading?
            <Fragment>
             <div className="bkground">
                        <h3 className="bkgroundtxt">Location:{this.props.match.params.name}</h3>
                        </div>
                          <iframe src="https://giphy.com/embed/MDrmyLuEV8XFOe7lU6" width="300" height="300" frameBorder="0" class="giphy-embed"></iframe>
            </Fragment>:
                <Fragment>
                    <div className="bkground">
                        <h3 className="bkgroundtxt">Location:{this.props.match.params.name}</h3>
                        </div>

           <Row>
        
        {this.state.items.map(item =>(
            <Cards title={item.name}
            date_post={item.date}
            id={item._id}
            price={item.price+"/-"}
            location={item.location}
            image={item.imagesUrl[0]}
            description={item.description}/>
        

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
 
export default Category;