import React, { useEffect, useState } from 'react'
import {Space, Table, Tag} from 'antd'
import axios from 'axios';
import { baseUrl } from '../App';

function Traveres() {
  const [response, setResponse] = useState([]);
  const columns = [
    {
      firstName: 'First Name',
      lastName: 'Last Name',
      nic: 'NIC',

    }
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${baseUrl}/client`);
        if (res) {
          console.log(res.data);
          setResponse(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  console.log("data:", response);
  return (
    <div>
        <Table dataSource={response.data} columns={columns} />
    </div>
  )
}

export default Traveres