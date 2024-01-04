import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { useCallback, useRef } from "react"
import { Button, FlatList, Text, View } from "react-native"

const HomeScreen = () => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  
    const handlePresentModalPress = useCallback(() => {
      console.log(bottomSheetModalRef.current)
      bottomSheetModalRef.current?.present()
    }, [bottomSheetModalRef.current])

    return(
        <View>
            <Text>Home Screen</Text>
            <Button
              onPress={handlePresentModalPress}
              title="Present Modal"
              color="black"
            />
            <FlatList
            data={Array.from(Array(20).keys())}
            keyExtractor={(_: any, index: number) => `${index}`}
            disableScrollViewPanResponder={true}
            onScroll={event => {
            }}
            renderItem={({item, index}) => {
              return <View key={index} style={{ backgroundColor: 'grey', height: 100, marginBottom: 10 }}/>
            }}
            />
            {/* <BottomSheetModal
              ref={bottomSheetModalRef}
              key={'key'}
              name={'name'}
              index={0}
              snapPoints={['30%']}
              animateOnMount={true}
              keyboardBehavior="interactive"
              enablePanDownToClose
              enableOverDrag
              overDragResistanceFactor={2}
            >
              <View>
                <Text>Test</Text>
                <Text>should be rendered above navigators</Text>
              </View>
            </BottomSheetModal> */}
        </View>
    )
}

export default HomeScreen