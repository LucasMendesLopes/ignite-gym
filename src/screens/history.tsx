import { HistoryCard, ScreenHeader } from "@components";
import { Box, Heading, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { SectionList } from "react-native";

export function History() {
    const [exercises, setExercises] = useState([
        {
            title: "03.11.2024",
            data: ["Puxada frontal", "Remada unilateral"]
        },
        {
            title: "04.11.2024",
            data: ["Puxada frontal", "Remada unilateral"]
        },
        {
            title: "05.11.2024",
            data: ["Puxada frontal"]
        },
        {
            title: "06.11.2024",
            data: ["Puxada frontal"]
        }
    ])
    return (
        <VStack flex={1}>
            <ScreenHeader title="Histórico de Exercícios" />

            <SectionList
                sections={exercises}
                keyExtractor={item => item}
                renderItem={() => <HistoryCard />}
                style={{ paddingHorizontal: 32, marginBottom: 40 }}
                contentContainerStyle={exercises.length === 0 && {
                    flex: 1,
                    justifyContent: "center"
                }}
                ItemSeparatorComponent={() => <Box mb="$3" />}
                renderSectionHeader={({ section }) => (
                    <Heading
                        fontFamily="$heading"
                        color="$gray200"
                        fontSize="$md"
                        mt="$10"
                        mb="$3"
                    >
                        {section.title}
                    </Heading>
                )}
            />
        </VStack>
    )
}