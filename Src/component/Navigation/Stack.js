import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
const StackNavigation = (props) => {

    const [path, setPath] = useState(props.initialRoute)
    const navigate = (path) => {
        setPath(path)
    }
    return (
        <View style={{ height: "100%", width: "100%", backgroundColor: "blue" }} >
            {props.children.map(child => {
                if (path === child.type.name) {
                    return React.cloneElement(child, {
                        path: path,
                        navigate: navigate,
                        key: child.type.name,
                    });
                }
            })}

        </View>
    )
}
export default StackNavigation;