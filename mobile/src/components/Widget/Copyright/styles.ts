import styled from "styled-components/native"

export const Text = styled.Text`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text_secondary};
  font-family: ${({ theme }) => theme.fonts.medium};
`
