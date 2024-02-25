import { KeyboardTypeOptions, Text, TextInput } from "react-native"
import { styles } from "./FormInputStyles"

interface props {
    labelText: string,
    placeholderTextInput: string
    keyboardType?: KeyboardTypeOptions
    numberOfLines?: number 
}

export default function FormInput(props: props) {
    return (
        <>
            <Text style={{ marginBottom: 10 }}>{props.labelText}</Text>
            <TextInput 
            style={styles.input}
            keyboardType={props.keyboardType}
            placeholder={props.placeholderTextInput}
            multiline={true}
            numberOfLines={props.numberOfLines ? props.numberOfLines : 1}
            />
        </>
    )
}