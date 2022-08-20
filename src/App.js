import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import _ from 'lodash';
import Button from '@mui/material/Button';
export default function App() {
  const image_arr = [0, 1, 10, 100, 1000, 1001, 1002, 1003, 1008, 1009, 101];
  const [image, setImage] = useState(0);
  var getUrl = (id) => {
    return 'https://picsum.photos/id/' + id + '/300/300';
  };
  var changeImage = (position) => {
    var index = _.indexOf(image_arr, image);
    index = (position > 0 ? index + 1 : index - 1) % image_arr.length;
    if (index < 0) index = image_arr.length - 1;
    console.log(index);
    setImage(image_arr[index]);
  };

  return (
    <div>
      <div className="div_image">
        <img className="image" src={getUrl(image)} key={image} />
      </div>
      <br></br>
      <div className="div_button">
        <Button
          className="button_minus"
          variant="contained"
          onClick={() => changeImage(-1)}
        >
          -
        </Button>

        <Button
          className="button_plus"
          variant="contained"
          onClick={() => changeImage(1)}
        >
          +
        </Button>
      </div>
    </div>
  );
}
