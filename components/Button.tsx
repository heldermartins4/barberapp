import clsx from "clsx";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
    children: React.ReactNode;
}

export const Button = ({ children, onPress, className, ...props }: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={clsx("bg-blue-500 text-white py-3 px-4 rounded-lg capitalize", className)}
            {...props}
        >
            {children}
        </TouchableOpacity>
    )
}