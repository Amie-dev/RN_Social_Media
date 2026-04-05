import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Auth } from '../../services/AuthAPI';

const COLORS = {
  background: '#0f172a',
  card: '#1e293b',
  primary: '#d8d100',
  text: '#ffffff',
  textSecondary: '#94a3b8',
  border: '#334155',
  error: '#ef4444',
};

const SignUpScreen = ({ logInScreen, setLogInScreen }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      username: '',
      password: '',
      role: 'ADMIN',
    },
    mode: 'onChange',
  });

  const onSubmit = async data => {
    try {
      const res = await Auth.register(data);
      console.log('register res', res);
      Alert.alert('Success', 'Account Created ✅');
      console.log(data);
      setLogInScreen(!logInScreen);
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Error on register',
        error?.response?.data?.message || error.message,
      );
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: COLORS.background }]}>
      {/* Header */}
      <Text style={styles.title}>Create Account 🚀</Text>
      <Text style={styles.subtitle}>Start your journey with us</Text>

      {/* Card */}
      <View style={[styles.card, { backgroundColor: COLORS.card }]}>
        {/* Name */}
        <Controller
          control={control}
          name="name"
          rules={{ required: 'Name is required' }}
          render={({ field: { value, onChange } }) => (
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={20} color="#94a3b8" />
              <TextInput
                placeholder="Full Name"
                placeholderTextColor={COLORS.textSecondary}
                style={styles.input}
                value={value}
                onChangeText={onChange}
              />
            </View>
          )}
        />
        {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

        {/* Email */}
        <Controller
          control={control}
          name="email"
          rules={{ required: 'Email is required' }}
          render={({ field: { value, onChange } }) => (
            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color="#94a3b8" />
              <TextInput
                placeholder="Email"
                placeholderTextColor={COLORS.textSecondary}
                style={styles.input}
                value={value}
                onChangeText={onChange}
              />
            </View>
          )}
        />
        {errors.email && (
          <Text style={styles.error}>{errors.email.message}</Text>
        )}

        {/* Username */}
        <Controller
          name="username"
          control={control}
          rules={{
            required: 'Username required',
            minLength: { value: 3, message: 'Min 3 characters' },
          }}
          render={({ field: { value, onChange } }) => (
            <View style={styles.inputContainer}>
              <Ionicons name="at-outline" size={20} color="#94a3b8" />
              <TextInput
                placeholder="Username"
                placeholderTextColor={COLORS.textSecondary}
                style={styles.input}
                value={value}
                onChangeText={text => onChange(text.trim().toLowerCase())}
              />
            </View>
          )}
        />
        {errors.username && (
          <Text style={styles.error}>{errors.username.message}</Text>
        )}

        {/* Password */}
        <Controller
          name="password"
          control={control}
          rules={{
            required: 'Password required',
            minLength: { value: 4, message: 'Min 4 characters' },
          }}
          render={({ field: { value, onChange } }) => (
            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={20} color="#94a3b8" />
              <TextInput
                placeholder="Password"
                placeholderTextColor={COLORS.textSecondary}
                style={styles.input}
                secureTextEntry={!showPassword}
                keyboardType="ascii-capable"
                value={value}
                onChangeText={onChange}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  color="#94a3b8"
                />
              </TouchableOpacity>
            </View>
          )}
        />
        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}

        {/* Button */}
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: isValid ? COLORS.primary : '#475569',
            },
          ]}
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => setLogInScreen(!logInScreen)}>
          Login
        </Text>
      </Text>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: '#94a3b8',
    marginBottom: 30,
  },

  card: {
    borderRadius: 16,
    padding: 18,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0f172a',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },

  input: {
    flex: 1,
    color: '#fff',
    paddingVertical: 12,
    marginLeft: 8,
  },

  button: {
    marginTop: 15,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#111827',
    fontWeight: '700',
    fontSize: 16,
  },

  footerText: {
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: 20,
  },

  link: {
    color: '#d8d100',
    fontWeight: 'bold',
  },

  error: {
    color: '#ef4444',
    fontSize: 12,
    marginBottom: 8,
  },
});
