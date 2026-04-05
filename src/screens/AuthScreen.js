import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import GetStart from '../components/authComponents/GetStart';
import LogInScreen from '../components/authComponents/LogInScreen';
import SignUpScreen from '../components/authComponents/SignUpScreen';

const AuthScreen = () => {
  const [step, setStep] = useState(0); // 0 = GetStart, 1 = Auth
  const [logInScreen, setLogInScreen] = useState(false); // false = Signup, true = Login

  return (
    <>
      {/* 🔥 Step 0 → Get Started */}
      {step === 0 && <GetStart step={step} setStep={setStep} />}

      {/* 🔥 Step 1 → Auth Screen */}
      {step > 0 &&
        (logInScreen ? (
          <LogInScreen
            logInScreen={logInScreen}
            setLogInScreen={setLogInScreen}
          />
        ) : (
          <SignUpScreen
            logInScreen={logInScreen}
            setLogInScreen={setLogInScreen}
          />
        ))}
    </>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
