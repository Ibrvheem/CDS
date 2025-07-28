import * as Haptics from "expo-haptics";
import React, { useEffect, useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  Animated,
  KeyboardTypeOptions,
  Text,
  TextInput,
  TextStyle,
  View,
} from "react-native";

interface ControlledInputProps {
  name: string;
  placeholder: string;
  label?: string;
  description?: string;
  className?: string;
  secureTextEntry?: boolean;
  disabled?: boolean;
  keyboardType?: KeyboardTypeOptions;
  dark?: boolean;
}

const ControlledInput = ({
  name,
  placeholder,
  label,
  description,
  className,
  secureTextEntry = false,
  disabled = false,
  keyboardType,
  dark,
}: ControlledInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (errors[name]) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
      Animated.sequence([
        Animated.timing(shakeAnimation, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: -10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: 6,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: -6,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [errors[name]]);

  return (
    <View>
      {label && (
        <Text
          style={{
            fontFamily: "PoppinsBold",
            fontSize: 16,
            color: dark ? "#fff" : "#1C332B",
            paddingBottom: 6,
          }}
        >
          {label}
        </Text>
      )}

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <Animated.View
            style={{
              transform: [{ translateX: shakeAnimation }],
            }}
          >
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              editable={!disabled}
              keyboardType={keyboardType}
              autoCapitalize="none"
              placeholderTextColor={dark ? "rgba(255,255,255,0.6)" : "#888"}
              style={[
                {
                  height: 56,
                  borderRadius: 12,
                  borderWidth: 2,
                  borderColor: errors[name] ? "#f87171" : "#E5E7EB",
                  paddingHorizontal: 16,
                  fontFamily: "PoppinsBold",
                  color: dark ? "#fff" : "#000",
                  backgroundColor: dark ? "rgba(255,255,255,0.1)" : "#fff",
                } as TextStyle,
              ]}
            />
          </Animated.View>
        )}
      />

      {description && (
        <Text
          style={{
            fontSize: 12,
            color: "#6B7280",
            marginTop: 4,
            fontWeight: "bold",
          }}
        >
          {description}
        </Text>
      )}
    </View>
  );
};

export default ControlledInput;
