import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormLabel = styled.label`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.FontWeight.medium};
`;

export const FormInput = styled.input`
  font-size: ${props => props.theme.spacing(6)};
  font-weight: ${props => props.theme.FontWeight.medium};
`;

export const FormBtn = styled.button`
  font-size: ${props => props.theme.spacing(6)};
  font-weight: ${props => props.theme.FontWeight.medium};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.accent};
  width: 200px;
  hight: 100px;
  border-radius: 10px;
  text-align: center;
`;
