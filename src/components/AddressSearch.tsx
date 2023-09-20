import axios from 'axios';
import { useState } from 'react';

const AddressSearch = () => {

  // 郵便番号
  const [zip, setZip] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  // API
  const apiUrl: string = "https://zipcloud.ibsnet.co.jp/api/search";

  /*
  * 住所を検索する
  */
  const searchAddress = async () => {
    const url: string = `${apiUrl}?zipcode=${zip}`
    
    axios.get(url)
    .then((response) => {
      const results = response.data.results[0];
      setAddress(results.address1 + results.address2 + results.address3);
    })
    .catch((error) => {
      console.log("Error fetching address:");
      console.log(error.status);
    })
  }

  return (
    <div>

      <div className='searchBtn'>
        <input
        type='text'
        value={zip}
        onChange={(event) => setZip(event.target.value)}
        placeholder="Enter postal code"
        />
        <button onClick={searchAddress}>検索する</button>
      </div>            
      <>
        {address}
      </>
    </div>
  )
}

export default AddressSearch