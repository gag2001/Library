import React from "react";
import { useState } from "react";
import "./index.css";
import { Flex } from "antd";

const Header = () => {
  const [bookName, setBookName] = useState("");
  const [books, SetBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [hide, changeHide] = useState(true);

  const handleEvent = (e) => {
    setBookName(e.target.value);
  };

  const addChild = (e) => {
    e.preventDefault();
    SetBooks([...books, bookName]);
    setFilteredBooks([...books, bookName]);
    setBookName("");
  };

  const hideContent = () => {
    changeHide(!hide);
  };

  const deleteBook = (i) => {
    SetBooks(books.filter((book, index) => index !== i));
    setFilteredBooks(filteredBooks.filter((book, index) => index !== i));
  };

  const searchBooks = (event) => {
    event.preventDefault();
    const searchItem = event.target.value;
    try {
      if (searchItem) {
        const results = books.filter((book) => book.includes(searchItem));
        setFilteredBooks(results);
      } else {
        setFilteredBooks(books);
      }
<<<<<<< HEAD
    } catch (error) {
      alert(error.message);
    } finally {
      alert("oops");
      alert("bye");
=======
         catch(error){
         alert(error.message);
      }
      finally{
         alert('oops');
         alert('bye');
         alert('thanks');
      }
       
   }
   



       return (
        <div className='header'>
             <div className='header-content1'>
                <Flex vertical align='center' gap='small'>
               <p style={{marginTop:'20px',fontSize:'30px'}}>Libarary</p>
               <p>Books for Students</p>
      
               <form onSubmit={searchBooks}>
                 <input type='text' placeholder='Search books...' onChange={searchBooks}></input>
               </form>
               </Flex>
               
               </div>

               <div className='header-content2' style={{marginTop:'50px'}}>
                  <p>Books To Read</p>

                
                {hide && <div id='content' style={{fontSize:'18px'}}>
                   {
                     filteredBooks.map((book,i) => {
                        return <p>{book} <button className='buttonss' onClick={()=> deleteBook(i)}>Delete</button></p>
                     })
                   }
                  
                  </div>
                  }

                  <Flex vertical align='center' gap='small'>
                  <div className='hidden'>
                     <form>
                     <input type="checkbox" onChange={hideContent}/><span>Hide All Books</span>
                     </form>
                  </div>
                  <form>
                    
                     <input type='text' name='bookName' placeholder='Add a book' onChange={handleEvent} className='input2' value={bookName}/><button onClick={addChild} className='button2'>Add</button>
                   
                  </form>
                  </Flex>
               </div>
        </div>
       )
>>>>>>> new-changes
    }
  };

  return (
    <div className="header">
      <div className="header-content1">
        <Flex vertical align="center" gap="small">
          <p style={{ marginTop: "20px", fontSize: "30px" }}>Libarary</p>
          <p>Books for Students</p>

          <form onSubmit={searchBooks}>
            <input
              type="text"
              placeholder="Search books..."
              onChange={searchBooks}
            ></input>
          </form>
        </Flex>
      </div>

      <div className="header-content2" style={{ marginTop: "50px" }}>
        <p>Books To Read</p>

        {hide && (
          <div id="content" style={{ fontSize: "18px" }}>
            {filteredBooks.map((book, i) => {
              return (
                <p>
                  {book}{" "}
                  <button className="buttonss" onClick={() => deleteBook(i)}>
                    Delete
                  </button>
                </p>
              );
            })}
          </div>
        )}

        <Flex vertical align="center" gap="small">
          <div className="hidden">
            <form>
              <input type="checkbox" onChange={hideContent} />
              <span>Hide All Books</span>
            </form>
          </div>
          <form>
            <input
              type="text"
              name="bookName"
              placeholder="Add a book"
              onChange={handleEvent}
              className="input2"
              value={bookName}
            />
            <button onClick={addChild} className="button2">
              Add
            </button>
          </form>
        </Flex>
      </div>
    </div>
  );
};

export default Header;
