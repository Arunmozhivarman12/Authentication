import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';

const Proute = () => {
  const [data, setData] = useState({});
  
  
  useEffect(() => {
  const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if(!token){
          return  window.location.href = '/login'
        }
    
        const response = await axios.get('http://localhost:8000/proute', {
          headers: {
            Authorization: `Bearer ${token}`,
          }, 
        });
          const datas =await response.data;
        setData(datas);
      } catch (error) {
        console.error(error);
      }
    };

  
    

    fetchData();
  }, []);

  const logout = () =>{
    localStorage.removeItem('token');
    window.location.href = '/';
  }

  return (
    <div>
      <Container className='text-center mt-5'>
        {data.name?(<div><p> welcome {data.name}</p>
<Button onClick={logout}>logout</Button></div>):(<div>...loading</div>)}
      </Container>
    </div>
  );
};

export default Proute;
