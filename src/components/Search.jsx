import React, { Component,Fragment } from 'react';

import {Row} from 'react-materialize';
import Navgbar from '../Subcompo/Navgbar';
import Cards from '../Subcompo/Cards';
import Footer from '../Subcompo/Footer';
import '../App.css';
import { API } from '../helper/Auth';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: true,
            items:[]
            
         }
    }
    componentDidMount() {
        const { match} = this.props;
        const token=localStorage.getItem('token')
        fetch(`${API}search/${this.props.match.params.key}`,{
            method:'POST',
            headers:{
                Authorization:"Bearer "+token,
                'Content-Type':'application/json'
            }
        })
        .then(res =>(res.json()))
        .then(result =>{
            this.setState({
              loading:false,
              items:result.items  
            });

        }).catch(err=>console.log(err))
    }
    render() { 
        return (
            <div>
            <Navgbar Group=""/>
            {this.state.loading===true?
            <Fragment>
            <h3>Search:{this.props.match.params.key}</h3>
           <iframe src="https://giphy.com/embed/MDrmyLuEV8XFOe7lU6" width="200" height="200" />
           </Fragment>  :
                <Fragment>
                 <h3>Search:{this.props.match.params.key}</h3>
           <Row>
        
        {this.state.items.map(item =>(
            <Cards title={item.name}
            date_post={item.date}
            id={item._id}
            price={item.price+"/-"}
            location={item.location}
            image={item.imagesUrl[0]}
            description={item.description}
            />
        

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
 
export default Search;