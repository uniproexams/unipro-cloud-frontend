import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 90px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={logo} />
            UNIPRO CLOUD
          </Logo>
          <Item>
            <HomeIcon />
            Acceil
          </Item>
        </Link>
        <Link to="/Actu" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <ArticleOutlinedIcon />
            Actu
          </Item>
        </Link>
        <Hr />
        <Item>
          <HistoryOutlinedIcon />
          Archives
        </Item>
        <Hr />
        Envoyer votre Examen ou Devoir ici
        <Button>
          <DriveFolderUploadIcon />
          UPLOAD
        </Button>
        <Hr />
        <Title>Emploie du temps</Title>
        <Item>
          <EventBusyIcon />
          Ouvrir
        </Item>
        <Hr />
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
