import { Button, Input, ScreenHeader, ToastMessage, UserPhoto } from "@components";
import { Center, Heading, Text, Toast, useToast, VStack } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker"
import * as FileSystem from "expo-file-system"
import { useState } from "react";

export function Profile() {
    const [userPhoto, setUserPhoto] = useState("https://github.com/LucasMendesLopes.png")

    const toast = useToast()

    const handleSelectUserPhoto = async () => {
        try {
            const selectedPhoto = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true
            })

            if (selectedPhoto.canceled) return null

            const photoUri = selectedPhoto.assets[0].uri

            if (photoUri) {
                const photoInfo = (await FileSystem.getInfoAsync(photoUri)) as { size: number }

                if (photoInfo.size && (photoInfo.size / 1024 / 1024) > 5) {
                    return toast.show({
                        placement: "top",
                        render: ({ id }) => (
                            <ToastMessage
                                id={id}
                                title="Imagem muito grande"
                                description="Essa imagem é muito grande, escolha uma de até 5MB."
                                action="error"
                                onClose={() => toast.close(id)}
                            />
                        )
                    })
                }
            }

            setUserPhoto(photoUri)

            toast.show({
                placement: "top",
                render: ({ id }) => (
                    <ToastMessage
                        id={id}
                        title="Alteração de foto"
                        description="Foto alterada com sucesso"
                        action="success"
                        onClose={() => toast.close(id)}
                    />
                )
            })
        } catch (error) {
            console.log('error :>> ', error);
        }
    }

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
                    <UserPhoto source={{ uri: userPhoto }} size="xl" />

                    <TouchableOpacity
                        style={{ marginTop: 12, marginBottom: 32 }}
                        onPress={handleSelectUserPhoto}
                    >
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
