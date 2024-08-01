import { useEffect, useState } from "react";
import { HomeHeader } from "./Header";
import { HomeContainer, HomeContent, ListCardsContainer,  } from "./styles";
import { Card } from "@/app/components/Card";
import { FlatList, SafeAreaView } from "react-native";
import { ScrollView } from "react-native";

export function Home() {
    const [reciepes, setReciepes] = useState([1,2,3,4])

    return (
        <HomeContainer>
            <HomeHeader />
            <HomeContent>
                <ListCardsContainer>
                    <FlatList
                        data={reciepes}
                        keyExtractor={reciepe => reciepe.toString()}
                        numColumns={2}
                        renderItem={(reciepe) => (
                            <Card/>
                        )}
                    />
                </ListCardsContainer>
            
            </HomeContent>
        </HomeContainer>
    )
}