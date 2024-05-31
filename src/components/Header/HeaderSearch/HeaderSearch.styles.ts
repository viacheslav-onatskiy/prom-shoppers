import { InputBase } from '@mui/material';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  flex-grow: 1;

  #header-button a li {
    color: black;
    background-color: green;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  margin: 0 50px;
  padding: 0 20px;
  border: 1px solid lightgray;
  border-radius: 7px;
  color: white;
  background-color: rgba(255, 255, 255, 0.15);

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
`;

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  flex: 1,
  '& .MuiInputBase-input': {
    color: 'white',
    width: '100%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export { HeaderContainer, SearchIconWrapper, SearchWrapper, StyledInputBase };
