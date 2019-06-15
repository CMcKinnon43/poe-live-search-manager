import React from "react";
import firebase from "firebase/app";
import styled from "styled-components";
import { container, signOutButton } from "./Header.style";

const StyledContainer = styled.div`
  ${container}
`;

const StyledSignOutButton = styled.button`
  ${signOutButton}
`;

const header = () => {
  const { currentUser } = firebase.auth();

  const headerMessage = `Logged in as ${currentUser.displayName ||
    currentUser.email}`;

  return (
    <StyledContainer>
      <h3>{headerMessage}</h3>
      <StyledSignOutButton
        type="button"
        onClick={() => firebase.auth().signOut()}
      >
        Sign out
      </StyledSignOutButton>
    </StyledContainer>
  );
};

export default header;
