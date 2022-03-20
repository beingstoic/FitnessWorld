import React, { useState, useEffect } from 'react'
import {Table} from 'reactstrap';
export default function Homepage() {
  const[searchInput, setSearchInput] = useState('');
  const[searchData, setSearchData]=useState('');
  useEffect(() => {
 }, [searchData, searchInput]);
  const [data, setData]=useState(
    [
      { id:1,
        firstName: "Mark",
        lastName:"Otto",
        username:"@mdo"
      },
      { id:2,
        firstName: "Jacob",
        lastName:"Thornton",
        username:"@jcb"
      },
      { id:3,
        firstName: "Guddu",
        lastName:"Pandit",
        username:"@arnold"
      },
      { id:4,
        firstName: "Thomas",
        lastName:"Shelby",
        username:"@tshel"
      }
    ]
    )

    const handleSearchInput = (event) => {
      event.persist();
      const inp= event.target.value;
      setSearchInput(inp);
      
      
    };
   const handleSearch= ()=>{
     const inp= searchInput;
     setSearchData(inp);
     setSearchInput('');
     console.log(searchData)
   }
  return (
    <div>
        <div className="banner">
        <div className="banner-content">
          <h1 className="heading">Fitness World</h1>
          <div className="button-violet">Join Now!</div>
        </div>
      </div>
      <div className="carousel">
        <a href="#" className="carousel-item">
          <img
            class="carousel-img"
            src="/assets/fw_mar_flash_sale_join_for_10_web_950x598.png"
            alt=""
          />
        </a>
        <a href="#" className="carousel-item">
          <img
            class="carousel-img"
            src="/assets/Free-Pass-Slider-REOPEN.png"
            alt=""
          />
        </a>
      </div>
      <div className="feature">
        <img
          src="/assets/fw-Hero-rev_v2-1.jpg"
          alt=""
          className="feature-img"
        />
        <div className="feature-content">
          <h2>Welcome to Fitness World</h2>
          <p className="content">
            Fitness World is a gym for everyone. Training for a marathon?
            Keeping up with your kids? Maintaining your fitness? Setting a new
            Personal Best? Just want to get moving? Our goal is to help you
            reach your goal. With convenient locations and low-cost memberships,
            we’re committed to being BC’s best gym.
          </p>
          <button className="button-black">Join Now</button>
        </div>
      </div>
      <div className="feature-rev">
        <div className="feature-content">
          <h2>Grab a 3 day free Pass</h2>
          <p className="content">
            Fitness World is a gym for everyone. Training for a marathon?
            Keeping up with your kids? Maintaining your fitness? Setting a new
            Personal Best? Just want to get moving? Our goal is to help you
            reach your goal. With convenient locations and low-cost memberships,
            we’re committed to being BC’s best gym.
          </p>
          <button className="button-black">Learn More</button>
        </div>
        <img
          src="/assets/fw-Hero-105_v1-1.jpg"
          alt=""
          className="feature-img"
        />
      </div>
      <div className="search-section">
          <div class=" search-bar d-flex form-inputs">
            <input
              className="form-control"
              type="text"
              value={searchInput}
              onChange={handleSearchInput}
              placeholder="Search for FirstName"
            />{" "}
            <button className="button-black" onClick={handleSearch}>Search</button> 
        </div>
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(user=>(
               (searchData==='' || searchData.includes(user.firstName)) && <tr key={user.id}>
                  <td>2</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.username}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}
