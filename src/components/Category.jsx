import React, { Component,Fragment } from 'react';
import {Row} from 'react-materialize'
import Navgbar from '../Subcompo/Navgbar';
import Cards from '../Subcompo/Cards';
import Footer from '../Subcompo/Footer';
import '../index.css';
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
        const { match} = this.props;
        const token=localStorage.getItem("token")
        
        fetch(`${API}category/${match.params.name}`,{
            method:'GET',
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

        })
    }
    render() { 
        return (
            <div>
            <Navgbar Group=""/>
           
            {this.state.isloaded?
            
            <iframe src="https://giphy.com/embed/3ohzdOrcdpiD26TPt6" width="100" height="100" frameBorder="0" class="giphy-embed"></iframe>
                :
                <Fragment>
                    <div className="bkground">
                <h3 className="bkgroundtxt">Category:{this.props.match.params.name}</h3>
                </div>
           <Row>
        
        {this.state.items.map(item =>(
            <Cards title={item.name}
            date_post={item.date}
            id={item._id}
            price={item.price+"/-"}
            location={item.location}
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
 
export default Category;