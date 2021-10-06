import axios from "axios";
import React, { useEffect, useState } from "react";
import { List } from "semantic-ui-react";

const YaziDetayi = (props) => {
  const { id } = props.match.params;
  const [yaziDetayi, setyaziDetayi] = useState({});
  useEffect(() => {
    axios
      .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
      .then((response) => {
        setyaziDetayi(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <List.Content>
        <List.Header >
          {yaziDetayi.title}
          <List.Description >{yaziDetayi.created_at}</List.Description>
          <List.Description >{yaziDetayi.content}</List.Description>
        </List.Header>
      </List.Content>
    </React.Fragment>
  );
};

export default YaziDetayi;
