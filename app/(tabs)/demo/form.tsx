import React, { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppTheme } from '@/components/app-theme-provider';

export default function FormDemoScreen() {
  const { colorScheme } = useAppTheme();
  const isDark = colorScheme === 'dark';
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  function onValidateEmail(nextValue: string) {
    setEmail(nextValue);
    if (!nextValue) {
      setEmailError('');
      return;
    }
    const isValid = /\S+@\S+\.\S+/.test(nextValue);
    setEmailError(isValid ? '' : 'Please enter a valid email address.');
  }

  function onSubmit() {
    if (!email || emailError) {
      Alert.alert('Validation', 'Please enter a valid email address.');
      return;
    }
    Alert.alert('Success', 'Form submitted successfully.');
  }

  return (
    <SafeAreaView className={isDark ? 'flex-1 bg-slate-900' : 'flex-1 bg-slate-50'}>
      <View className="px-6 py-6">
        <View
          className={
            isDark
              ? 'rounded-2xl bg-slate-800 p-6'
              : 'rounded-2xl bg-white p-6 shadow-sm'
          }
        >
          <Text className={isDark ? 'text-xl font-semibold text-white' : 'text-xl font-semibold text-slate-900'}>
            Form validation
          </Text>
          <Text className={isDark ? 'mt-2 text-sm text-slate-300' : 'mt-2 text-sm text-slate-600'}>
            Validate input and provide clear feedback.
          </Text>

          <TextInput
            value={email}
            onChangeText={onValidateEmail}
            placeholder="Email address"
            keyboardType="email-address"
            autoCapitalize="none"
            className={
              isDark
                ? 'mt-6 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white'
                : 'mt-6 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900'
            }
            placeholderTextColor={isDark ? '#94A3B8' : '#94A3B8'}
          />
          {emailError ? (
            <Text className="mt-2 text-xs text-red-400">{emailError}</Text>
          ) : null}

          <Pressable
            className={
              isDark
                ? 'mt-4 items-center rounded-xl bg-white px-4 py-3'
                : 'mt-4 items-center rounded-xl bg-slate-900 px-4 py-3'
            }
            onPress={onSubmit}
            accessibilityRole="button"
            accessibilityLabel="Submit form"
          >
            <Text className={isDark ? 'text-sm font-semibold text-slate-900' : 'text-sm font-semibold text-white'}>
              Submit
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
