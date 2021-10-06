import { List } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const YaziListesi = () => {
  const [yaziListesi, setYaziListesi] = useState([]);

  useEffect(() => {
    axios.get("https://react-yazi-yorum.herokuapp.com/posts").then((response) => {
      setYaziListesi(response.data);
    });
  }, []);

  return (
    <List divided relaxed>
      {yaziListesi.map((yaz) => (
        <List.Item key={yaz.id}>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as={Link} to={`/posts/{yaz.id}`}>
              {yaz.title}
            </List.Header>
            <List.Description as="a">{yaz.created_at}</List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default YaziListesi;
