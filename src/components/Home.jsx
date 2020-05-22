import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { withRouter } from "react-router-dom";
import Navgbar from '../Subcompo/Navgbar';
import Cards from '../Subcompo/Cards';
import Footer from '../Subcompo/Footer';
import {API} from '../helper/Auth'

import {Row } from 'react-materialize'
import Sliders from '../Subcompo/Sliders';

class Home extends Component{
    constructor(){
        super();
        this.state={
            loading:true,
            items: [],
           
        };
    }
    async componentDidMount(){
        await fetch(`${API}`,{
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res =>res.json())
        .then(
            result =>{
              console.error(result);
                this.setState({
                    loading :false,
                    items : result.items,
                    
                });
            
            }
        )
    
    }


    

    render() { 
       
        return(
            <div>
            <Navgbar/>
           <Sliders/>
            {this.state.loading?
            
            <iframe src="https://giphy.com/embed/3ohzdOrcdpiD26TPt6" width="100" height="100" frameBorder="0" class="giphy-embed"></iframe>
                :
            <Fragment>
                <h3>Recent Adds</h3>
           <Row>
          {this.state.items.map(item =>(
            <Cards title={item.name}
            date_post={item.date}
            id={item._id}
            price={item.price+"/-"}
            location={item.location}
            description={item.description}
            image={item.imagesUrl[0]}/>
            

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
 

export default withRouter(Home);