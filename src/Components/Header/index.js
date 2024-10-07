import React from 'react';
import "./index.css";
import { Flex } from 'antd';

class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            bookName : "",
            added : 0,
            hide : false,
        }
    };

   handleEvent = (e) => {
      const {name,value} = e.target;
      this.setState({
         [name] : value
      });
      console.log(this.state);
      
        
   };

   addChild = (e) => {
      e.preventDefault();
      let value = this.state.bookName;
      let p = document.createElement('p');
      p.innerHTML = value;
      document.getElementById('content').appendChild(p);
      this.setState({added: this.state.added + 1})
     
      

   };

   hideContent = () =>{
      this.setState({
           hide : !this.state.hide
      })
   }

    render(){
  
       return (
        <div className='header'>
             <div className='header-content1'>
                <Flex vertical align='center' gap='small'>
               <p style={{marginTop:'20px',fontSize:'30px'}}>Libarary</p>
               <p>Books for Students</p>
      
               <form>
                 <input type='text' placeholder='Search books...'></input>
               </form>
               </Flex>
               
               </div>

               <div className='header-content2' style={{marginTop:'50px'}}>
                  <p>Books To Read</p>

                
                  <div id='content' style={{fontSize:'18px'}}>
                  
                 </div>

                 
                  <Flex justify='center'>
                  <form>
                    
                    <input type='text' name='bookName' placeholder='Add a book' onChange={this.handleEvent} className='input2'/><button onClick={this.addChild} className='button2'>Add</button>
                  </form>
                  </Flex>
               </div>
        </div>
       )
    }
};


export default Header;


