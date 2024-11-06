import { ExerciseCard, Group, HomeHeader } from "@components";
import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useState } from "react";
import { FlatList } from "react-native";

export function Home() {
    const [exercises, setExercises] = useState(["Puxada frontal", "Remada curvada", "Remada unilateral", "Levantamento terra", "1", "2", "3"])
    const [groups, setGroups] = useState(["peito", "perna", "ombro", "costas", "braço"])
    const [selectedGroup, setSelectedGroup] = useState("peito")

    const navigation = useNavigation<AppNavigatorRoutesProps>()

    const handleOpenExerciseDetails = () => {
        navigation.navigate("exercise")
    }

    return (
        <VStack flex={1}>
            <HomeHeader />

            <FlatList
                data={groups}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Group
                        title={item}
                        onPress={() => setSelectedGroup(item)}
                        isActive={selectedGroup.toLowerCase() === item.toLowerCase()}
                    />
                )}
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 32
                }}
                style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
                showsHorizontalScrollIndicator={false}
            />

            <VStack px="$8" flex={1}>
                <HStack alignItems="center" justifyContent="space-between" mb="$5">
                    <Heading color="$gray200" fontSize="$md" fontFamily="$heading">Exercícios</Heading>

                    <Text color="$gray200" fontSize="$sm" fontFamily="$body">4</Text>
                </HStack>

                <FlatList
                    data={exercises}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <ExerciseCard onPress={handleOpenExerciseDetails} />
                    )}
                    contentContainerStyle={{ gap: 12 }}
                    style={{ marginBottom: 40 }}
                    showsVerticalScrollIndicator={false}
                />
            </VStack>
        </VStack>
    )
}