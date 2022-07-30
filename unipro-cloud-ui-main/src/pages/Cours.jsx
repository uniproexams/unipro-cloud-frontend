import React from "react";
import styled from "styled-components";
// import User from "../components/User";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;
const CourseContent = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Profil = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfilInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const UserName = styled.span`
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Cours = () => {
  return (
    <Container>
      <Content>
        <CourseContent>
          <Title>Test Cours My SQL</Title>
          <Hr />

          <Hr />
          {/* <iframe
            width="100%"
            height="720"
            src="https://www.i3s.unice.fr/~edemaria/cours/c2.pdf"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
        </CourseContent>
      </Content>
    </Container>
  );
};

export default Cours;
