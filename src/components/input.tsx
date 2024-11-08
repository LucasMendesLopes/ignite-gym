import { Input as GlueStackInput, InputField } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof InputField> & {
    isReadOnly?: boolean
}

export const Input = ({ isReadOnly, ...rest }: Props) => {
    return (
        <GlueStackInput
            h="$14"
            borderWidth="$0"
            borderRadius="$md"
            $focus={
                {
                    borderWidth: 1,
                    borderColor: "$green500"
                }
            }
            isReadOnly={isReadOnly}
            opacity={isReadOnly ? 0.5 : 1}
        >
            <InputField
                bg="$gray700"
                px="$4"
                color="$white"
                fontFamily="$body"
                placeholderTextColor="$gray300"
                {...rest}
            />
        </GlueStackInput>
    )
}