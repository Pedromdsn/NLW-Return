import BottomSheet from "@gorhom/bottom-sheet"
import Copyright from "./Copyright"
import Steps from "./Steps"

import theme from "../../theme"

import { useRef } from "react"
import { Button, Container, sheet } from "./styles"
import { ChatTeardropDots } from "phosphor-react-native"
import { gestureHandlerRootHOC } from "react-native-gesture-handler"

const Widget = () => {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const handleOpen = () => {
    bottomSheetRef.current?.expand()
  }

  return (
    <>
      <Button onPress={handleOpen}>
        <ChatTeardropDots size={24} weight="bold" color={theme.colors.text_on_brand_color} />
      </Button>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={sheet.modal}
        handleIndicatorStyle={sheet.indicator}
      >
        <Container>
          <Steps />
          <Copyright />
        </Container>
      </BottomSheet>
    </>
  )
}

export default gestureHandlerRootHOC(Widget) as any
