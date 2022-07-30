import React from "react";
import styled from "styled-components";


const Container = styled.div``;

const ProfileUser = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const User = () => {
  return (
    <Container>
      <ProfileUser>
        <Avatar src="" />
      
      </ProfileUser>

    </Container>
  );
};

export default User;
