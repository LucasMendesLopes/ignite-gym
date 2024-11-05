import { ExerciseCard, Group, HomeHeader } from "@components";
import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { FlatList } from "react-native";

export function Home() {
    const [groups, setGroups] = useState(["peito", "perna", "ombro", "costas", "braço"])
    const [selectedGroup, setSelectedGroup] = useState("peito")

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
                        isActive={selectedGroup === item}
                    />
                )}
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 32
                }}
                style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
                showsHorizontalScrollIndicator={false}
            />

            <VStack px="$8">
                <HStack alignItems="center" justifyContent="space-between" mb="$5">
                    <Heading color="$gray200" fontSize="$md" fontFamily="$heading">Exercícios</Heading>

                    <Text color="$gray200" fontSize="$sm" fontFamily="$body">4</Text>
                </HStack>

                <ExerciseCard />
            </VStack>
        </VStack>
    )
}