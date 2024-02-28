import styled, { css } from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Estilizando o DatePicker
export const StyledDatePicker = styled(DatePicker)`
    padding: 5px 5px;
    width: 100px;
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large};
    margin: ${theme.spacings.large} 0;
    display: flex;
    justify-content: center;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    padding: 5px 5px;
    cursor: pointer;

    &:disabled  {
      background: ${theme.colors.darkerGray};
    }
  `}
`;

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    margin-top: 10rem;
    margin-bottom: ${theme.spacings.xlarge};
    padding: 0 ${theme.spacings.xlarge};
    max-width: 120rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `}
`;

export const SearchButtonContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    margin-bottom: ${theme.spacings.xlarge};
    max-width: 120rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    padding: 5px 5px;

    &:disabled  {
      outline: 0.1rem solid ${theme.colors.secondary};
    }
  `}
`;
