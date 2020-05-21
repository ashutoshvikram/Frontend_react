import React, { Component,Fragment } from 'react';

import {Row} from 'react-materialize';
import Navgbar from '../Subcompo/Navgbar';
import Cards from '../Subcompo/Cards';
import Footer from '../Subcompo/Footer';
import '../App.css';
import { API } from '../helper/Auth';
class Favourites extends Component {
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
        fetch(`${API}allfavourites`,
        {
            method:'POST',
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
            <h3>Favourites</h3>
            {this.state.loading===true?
            
            <iframe src="https://giphy.com/embed/3ohzdOrcdpiD26TPt6" width="100" height="100" frameBorder="0" class="giphy-embed"></iframe>
                :
                <Fragment>
                
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
 
export default Favourites;