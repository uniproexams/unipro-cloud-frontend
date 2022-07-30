import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const CourseImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Profil = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Date = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
// https://www.cours-exercices-pdf.com/images/php-mysql.jpg

// https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo

// https://source.unsplash.com/random/200x200?sig=incrementingIdentifier

const Card = ({ type }) => {
  return (
    <Link to="/Cours/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://www.cours-exercices-pdf.com/images/php-mysql.jpg"
        />
        <Details type={type}>
          <CourseImage
            type={type}
            src="https://source.unsplash.com/random/200x200?sig=incrementingIdentifier"
          />
          <Texts>
            <Title>Test Cours</Title>
            <Profil>Siragui </Profil>
            <Date> 1 day ago</Date>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
