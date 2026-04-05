/* eslint-disable no-catch-shadow */
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Auth } from '../../services/AuthAPI';
import { useAppContext } from '../../context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const COLORS = {
  background: '#0f172a',
  card: '#1e293b',
  primary: '#d8d100',
  text: '#ffffff',
  textSecondary: '#94a3b8',
  inputBorder: '#334155',
  error: '#ef4444',
};

const LogInScreen = ({ logInScreen, setLogInScreen }) => {

      
  const {saveLoginData }=useAppContext()

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async data => {
    console.log(data);

    try {
      const res=await Auth.login(data)
       
      console.log(res);
      console.log('data', res.data);
      const user = res.data.user;
      const token = res.data.accessToken;

      await saveLoginData(user,token)
  Alert.alert(res.success ? 'Success' : 'Fail', res.message);
    } catch (error) {
      console.log(
        'Error on login ',
        error?.response?.data?.message || error.message,
      );
      // console.log(error?.response?.data?.message)
      const statusCode = error?.response?.data?.statusCode || error.statusCode;
      if (statusCode === 404) {
        try {
          await AsyncStorage.removeItem('user');
          await AsyncStorage.removeItem('token');
        } catch (error) {
          console.log('Error on login from AsyncStorage.removeItem ', error);
        }
      }
      Alert.alert('Error', error?.response?.data?.message || error.message);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: COLORS.background }]}>
      
      {/* Header */}
      <Text style={styles.title}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>
        Login to continue your journey
      </Text>

      {/* Card */}
      <View style={[styles.card, { backgroundColor: COLORS.card }]}>

        {/* Username */}
        <Controller
          name="username"
          control={control}
          rules={{ required: 'Username is required' }}
          render={({ field: { value, onChange } }) => (
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={20} color="#94a3b8" />
              <TextInput
                placeholder="Username or Email"
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
            required: 'Password is required',
            minLength: {
              value: 4,
              message: 'Minimum 4 characters',
            },
          }}
          render={({ field: { value, onChange } }) => (
            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={20} color="#94a3b8" />
              <TextInput
                placeholder="Password"
                placeholderTextColor={COLORS.textSecondary}
                style={styles.input}
                secureTextEntry
                value={value}
                onChangeText={onChange}
              />
            </View>
          )}
        />
        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

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
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>
        Don’t have an account?{' '}
        <Text
          style={styles.link}
          onPress={() => setLogInScreen(!logInScreen)}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default LogInScreen;

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

  forgot: {
    color: '#3b82f6',
    textAlign: 'right',
    marginBottom: 10,
    fontSize: 13,
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