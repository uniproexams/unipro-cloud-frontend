import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>S'identifier</Title>
        <SubTitle> pour continuer </SubTitle>
        <Input placeholder="Nom d'utilisateur" />
        <Input type="password" placeholder="mot de passe" />
        <Button>S'identifier</Button>
        <Title>ou</Title>
        <Input placeholder="Nom d'utilisateur" />
        <Input placeholder="Email" />
        <Input type="password" placeholder="mot de passe" />
        <Button>S'inscrire</Button>
      </Wrapper>
      <More>
        Francais(fr)
        <Links>
          <Link>Aide</Link>
          <Link>Confidentialité </Link>
          <Link>Conditions</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
