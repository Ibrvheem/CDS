import ControlledInput from "@/components/molecules/controlled-input";
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

const cdsGroups = [
  "ICT",
  "Editorial",
  "Environmental",
  "Legal Aid",
  "Charity",
  "Drug-Free Club",
];

const lgaOptions = [
  "Abakaliki",
  "Afikpo North",
  "Afikpo South",
  "Ebonyi",
  "Ezza North",
  "Ezza South",
  // Add more as needed
];

const SignupScreen = () => {
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      batchStream: "",
      stateCode: "",
      cdsGroup: "",
      lga: "",
      phoneNumber: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = form;

  const onSubmit = (data: any) => {
    console.log("✅ Form Submitted", data);
  };

  return (
    <FormProvider {...form}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1, backgroundColor: "#F1F8F4" }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
              <View style={styles.greenBar} />
              <Text style={styles.heading}>Register for NYSC CDS</Text>
              <Text style={styles.subHeading}>
                Join your CDS group and start tracking your attendance.
              </Text>
            </View>

            <ControlledInput
              name="fullName"
              label="Full Name"
              placeholder="e.g. Aminu Bello"
            />

            <ControlledInput
              name="email"
              label="Email"
              placeholder="aminu@gmail.com"
              keyboardType="email-address"
            />

            {/* Phone */}
            <View>
              <Text style={styles.label}>Phone</Text>
              <View style={styles.phoneRow}>
                <View style={styles.countryCodeBox}>
                  <Text style={styles.countryCode}>+234</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <ControlledInput
                    name="phoneNumber"
                    placeholder="7012345678"
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>

            {/* Batch + State */}
            <View style={styles.row}>
              <View style={styles.halfField}>
                <ControlledInput
                  name="batchStream"
                  label="Batch & Stream"
                  placeholder="e.g. B/Stream 2"
                />
              </View>
              <View style={styles.halfField}>
                <ControlledInput
                  name="stateCode"
                  label="State Code"
                  placeholder="e.g. AB/22B/0012"
                />
              </View>
            </View>

            {/* CDS Group Dropdown */}
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>CDS Group</Text>
              <Controller
                control={control}
                name="cdsGroup"
                render={({ field: { onChange, value } }) => (
                  <RNPickerSelect
                    onValueChange={onChange}
                    items={cdsGroups.map((g) => ({
                      label: g,
                      value: g,
                    }))}
                    value={value}
                    placeholder={{ label: "Select CDS group", value: null }}
                    style={pickerSelectStyles}
                  />
                )}
              />
            </View>

            {/* LGA Dropdown */}
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>LGA</Text>
              <Controller
                control={control}
                name="lga"
                render={({ field: { onChange, value } }) => (
                  <RNPickerSelect
                    onValueChange={onChange}
                    items={lgaOptions.map((lga) => ({
                      label: lga,
                      value: lga,
                    }))}
                    value={value}
                    placeholder={{ label: "Select LGA", value: null }}
                    style={pickerSelectStyles}
                  />
                )}
              />
            </View>

            {/* Password */}
            <ControlledInput
              name="password"
              label="Password"
              placeholder="Enter a secure password"
              secureTextEntry
            />

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={styles.submitText}>Complete Signup</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 100,
    width: "100%",
    flexGrow: 1,
    justifyContent: "center",
    gap: 4,
  },
  header: {
    marginBottom: 24,
    alignItems: "flex-start",
  },
  greenBar: {
    height: 4,
    width: 50,
    backgroundColor: "#1C332B",
    borderRadius: 2,
    marginBottom: 8,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1C332B",
    marginBottom: 6,
  },
  subHeading: {
    fontSize: 14,
    color: "#4B5563",
    fontWeight: "400",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    color: "#1C332B",
  },
  row: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },
  halfField: {
    flex: 1,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  countryCodeBox: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderColor: "#D1D5DB",
    borderWidth: 2,
    backgroundColor: "#E5F4EA",
  },
  countryCode: {
    fontWeight: "600",
    color: "#1C332B",
  },
  submitButton: {
    backgroundColor: "#1C332B",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 24,
  },
  submitText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderColor: "#D1D5DB",
    borderWidth: 2,
    backgroundColor: "white",
    color: "#1C332B",
  },
  inputAndroid: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderColor: "#D1D5DB",
    borderWidth: 2,
    backgroundColor: "white",
    color: "#1C332B",
  },
});

export default SignupScreen;
