import React, { useState } from "react";
import { Dropdown, Button, ListGroup, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const users = [
  { id: 1, name: "Artem", userAvatar: "/img/Artem.jpg" },
  { id: 2, name: "Anastasiia", userAvatar: "/img/Anastasiia.jpg" },
  { id: 3, name: "Fedor", userAvatar: "/img/Fedor.jpg" },
  { id: 4, name: "Yuri", userAvatar: "/img/Yuri.jpg" },
];

const Chat = () => {
  const [selectedUser, setSelectedUsers] = useState(users[0]);
  const [messagesAll, setMessagesAll] = useState([]);
  const [message, setMessage] = useState("");

  const sendMessageUser = () => {
    const newMessage = {
      text: message,
      user: selectedUser,
      date: new Date(),
    };
    setMessagesAll([...messagesAll, newMessage]);
    setMessage("");
  };
  return (
    <div className="container mt-5 ml-5 pl-0 border border-secondary rounded">
      <div className="row flex-nowrap p-4">
        <div className="col-md-3">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-split-basic">
              {selectedUser.name}
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              {users.map((users) => (
                <Dropdown.Item usersKey={users.id} onClick={() => setSelectedUsers(users)}>
                  {users.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-md-9">
          <input class="form-control" type="text" placeholder="Enter message" value={message}
            onChange={(meaning) => setMessage(meaning.target.value)} />
          <Button className="mt-3" variant="success" onClick={sendMessageUser}>
            Send message
          </Button>
        </div>
      </div>
      <div className="row my-5 justify-content-center">
        <div className="col-md-5">
          <ListGroup>
            {messagesAll.map((message, x) => (
              <ListGroup.Item key={x}>
                <div>
                  <Image
                    className="mr-5"
                    src={message.user.userAvatar}
                    roundedCircle
                    width="50"
                    height="50"
                  />
                  <span className="font-weight-bold">
                    {message.user.name}
                  </span>{" "}
                  <span className="text-muted">
                    {message.date.toLocaleString()}
                  </span>
                </div>
                <p className="mt-2">{message.text}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    </div>

  )
};
export default Chat;
