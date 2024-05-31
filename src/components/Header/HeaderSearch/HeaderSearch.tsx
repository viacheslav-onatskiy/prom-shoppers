import SearchIcon from '@mui/icons-material/Search';
import {
  SearchIconWrapper,
  SearchWrapper,
  StyledInputBase,
} from './HeaderSearch.styles';

const HeaderSearch = () => {
  return (
    <SearchWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchWrapper>
  );
};

export default HeaderSearch;
