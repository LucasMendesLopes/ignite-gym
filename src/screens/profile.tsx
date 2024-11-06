import { Button, Input, ScreenHeader, UserPhoto } from "@components";
import { Center, Heading, Text, VStack } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function Profile() {
    return (
        <VStack flex={1}>
            <ScreenHeader title="Perfil" />

            <KeyboardAwareScrollView
                contentContainerStyle={{ flexGrow: 1, position: "relative" }}
                showsVerticalScrollIndicator={false}
                enableOnAndroid={true}
                keyboardShouldPersistTaps="handled"
                extraScrollHeight={20}
            >
                <Center mt="$6" px="$10">
                    <UserPhoto source={{ uri: "https://github.com/LucasMendesLopes.png" }} size="xl" />

                    <TouchableOpacity style={{ marginTop: 12, marginBottom: 32 }}>
                        <Text color="$green500" fontSize="$md" fontFamily="$heading">
                            Alterar foto
                        </Text>
                    </TouchableOpacity>

                    <Center w="$full" gap="$4">
                        <Input placeholder="Nome" bg="$gray600" />
                        <Input value="email@test.com" bg="$gray600" isReadOnly />
                    </Center>

                    <Heading color="$gray200" fontSize="$md" fontFamily="$heading" alignSelf="flex-start" mt="$12" mb="$2">
                        Alterar senha
                    </Heading>

                    <Center w="$full" gap="$4">
                        <Input placeholder="Senha antiga" bg="$gray600" secureTextEntry />
                        <Input placeholder="Nova senha" bg="$gray600" secureTextEntry />
                        <Input placeholder="Confirme a nova senha" bg="$gray600" secureTextEntry />
                    </Center>

                    <Button title="Atualizar" mt="$12" />
                </Center>
            </KeyboardAwareScrollView >
        </VStack>
    );
}
