import { Toolbar } from '@mui/material';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  flex-grow: 1;

  #header-button a li {
    color: black;
    background-color: green;
  }
`;

const HeaderToolbar = styled(Toolbar)`
  align-self: center;
  width: 100%;
`;

export { HeaderContainer, HeaderToolbar };
