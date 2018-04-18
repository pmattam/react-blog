import React, { Component } from 'react';
import Title from './Title';
import Greeting from './Greeting';
import Footer from './Footer';
import BlogList from './BlogList';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {          
          blogs: [],
          allBlogs: [],
          selectValue: 'All',
          currentlyEditingBlog: null
      }
  }

  componentDidMount() {
      this.fetchData();
  }

  fetchData() {
      fetch("https://jsonplaceholder.typicode.com/posts")
          .then(res => res.json())
          .then(
              (result) => {
                  console.log(result);
                  this.setState({
                      blogs: result,
                      allBlogs: result
                  });
              }
          )
  };

  render() {
      let { blogs, allBlogs, selectValue, currentlyEditingBlog } = this.state;

      let refreshPage = () => {
        this.fetchData();
            this.setState({
                selectValue: 'All'
            })
        };

    let handleSelectOption = (value) => {
        let userBlogs;
        if(value !== 'All') {
            userBlogs = allBlogs.filter(blog => blog.userId.toString() === value);
        } else {
            userBlogs = allBlogs;
        }
        this.setState({
            blogs: userBlogs,
            selectValue: value
        })       
    }; 

    let renderSelectOptions = () => {
        let reducer = (currentTotalArray, currentObject) => {
            if(currentTotalArray.includes(currentObject.userId)) {
                return currentTotalArray;
            } else {
                currentTotalArray.push(currentObject.userId);
                return currentTotalArray;
            }
        }
        let arrayOfIds = allBlogs.reduce(reducer, ['All']);
        return arrayOfIds.map(userId => <option>{userId}</option>);
    };

      let removeBlog = (rmBlog) => {
          let { id } = rmBlog;
          let updatedBlogs = blogs.filter(blog => id !== blog.id);
          this.setState({
              blogs: updatedBlogs
          });
      };

      let changeEditBlogState = (blogState) => {
          this.setState({
              currentlyEditingBlog: Object.assign({}, blogState)
          });
      };

      let updateBlogTitle = (blogObjectForTitle, value) => {
          blogObjectForTitle.title = value;
          this.setState({
              currentlyEditingBlog: Object.assign({}, blogObjectForTitle)
          });
      };
      
      let updateBlogBody = (blogObjectForBody, value) => {
          blogObjectForBody.body = value;
          this.setState({
              currentlyEditingBlog: Object.assign({}, blogObjectForBody)
          });
      };

      let saveUpdatedBlog = (blogBeingEditedToSave) => {
          let blog = blogs.find(blog => blog.id === blogBeingEditedToSave.id);
          Object.assign(blog, blogBeingEditedToSave);
          this.setState({    
              currentlyEditingBlog: null
          });
      };

      return (
          <div>
              <Title />
              <Greeting person="Prathyusha" />
              <button onClick={refreshPage}>Refresh</button>
              <label> select blog by user id: <select value={selectValue} onChange={(event) => handleSelectOption(event.target.value)}>{renderSelectOptions()}</select></label>
              <BlogList 
                  blogs={blogs} 
                  currentlyEditingBlog={currentlyEditingBlog}
                  removeBlog={removeBlog}
                  changeEditBlogState={changeEditBlogState}
                  updateBlogTitle={updateBlogTitle}
                  updateBlogBody={updateBlogBody}
                  saveUpdatedBlog={saveUpdatedBlog}
              />
              <Footer />
          </div>
      )      
  }
}

export default App;
