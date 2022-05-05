import theme from "../../theme"
import styled from "styled-components/native"

import { StyleSheet } from "react-native"
import { getBottomSpace } from "react-native-iphone-x-helper"

export const Button = styled.TouchableOpacity`
  width: 48px;
  height: 48px;

  border-radius: 24px;

  background: ${({ theme }) => theme.colors.brand};

  justify-content: center;
  align-items: center;

  position: absolute;

  right: 16px;
  bottom: ${getBottomSpace() + 16}px;
`

export const Container = styled.View`
  flex: 1;

  justify-content: flex-end;
  align-items: center;

	padding: 16px;
`

export const sheet = StyleSheet.create({
  modal: {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: getBottomSpace() + 16,
  },

  indicator: {
    backgroundColor: theme.colors.text_primary,
    width: 56,
    padding: 0,
  },
})
