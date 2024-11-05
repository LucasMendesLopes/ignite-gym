import { Group, HomeHeader } from "@components";
import { VStack } from "@gluestack-ui/themed";
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
        </VStack>
    )
}