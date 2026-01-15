import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppTheme } from '@/components/app-theme-provider';

export default function InputDemoScreen() {
  const { colorScheme } = useAppTheme();
  const isDark = colorScheme === 'dark';
  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  const [search, setSearch] = useState('');
  const [password, setPassword] = useState('');
  const [isSecure, setIsSecure] = useState(true);
  const [hasError, setHasError] = useState(false);

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
            TextInput
          </Text>
          <Text className={isDark ? 'mt-2 text-sm text-slate-300' : 'mt-2 text-sm text-slate-600'}>
            Single line, search, password, and multiline inputs.
          </Text>

          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Your name"
            className={
              isDark
                ? 'mt-6 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white'
                : 'mt-6 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900'
            }
            placeholderTextColor={isDark ? '#94A3B8' : '#94A3B8'}
          />

          <View
            className={
              isDark
                ? 'mt-4 flex-row items-center rounded-xl border border-slate-700 bg-slate-900 px-4 py-3'
                : 'mt-4 flex-row items-center rounded-xl border border-slate-200 bg-white px-4 py-3'
            }
          >
            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Search"
              className={isDark ? 'flex-1 text-sm text-white' : 'flex-1 text-sm text-slate-900'}
              placeholderTextColor={isDark ? '#94A3B8' : '#94A3B8'}
            />
            <Pressable
              onPress={() => setSearch('')}
              accessibilityRole="button"
              accessibilityLabel="Clear search"
            >
              <Text className={isDark ? 'text-xs text-slate-300' : 'text-xs text-slate-500'}>
                Clear
              </Text>
            </Pressable>
          </View>
          <Text className={isDark ? 'mt-2 text-xs text-slate-400' : 'mt-2 text-xs text-slate-500'}>
            Use helper text to guide users.
          </Text>

          <View
            className={
              isDark
                ? 'mt-4 flex-row items-center rounded-xl border border-slate-700 bg-slate-900 px-4 py-3'
                : 'mt-4 flex-row items-center rounded-xl border border-slate-200 bg-white px-4 py-3'
            }
          >
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry={isSecure}
              className={isDark ? 'flex-1 text-sm text-white' : 'flex-1 text-sm text-slate-900'}
              placeholderTextColor={isDark ? '#94A3B8' : '#94A3B8'}
            />
            <Pressable
              onPress={() => setIsSecure((prev) => !prev)}
              accessibilityRole="button"
              accessibilityLabel={isSecure ? 'Show password' : 'Hide password'}
            >
              <Text className={isDark ? 'text-xs text-slate-300' : 'text-xs text-slate-500'}>
                {isSecure ? 'Show' : 'Hide'}
              </Text>
            </Pressable>
          </View>

          <TextInput
            value={note}
            onChangeText={setNote}
            placeholder="Notes"
            multiline
            numberOfLines={4}
            className={
              isDark
                ? 'mt-4 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white'
                : 'mt-4 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900'
            }
            placeholderTextColor={isDark ? '#94A3B8' : '#94A3B8'}
            textAlignVertical="top"
          />

          <Pressable
            className={
              isDark
                ? 'mt-4 items-center rounded-xl border border-slate-700 px-4 py-3'
                : 'mt-4 items-center rounded-xl border border-slate-200 px-4 py-3'
            }
            onPress={() => setHasError((prev) => !prev)}
            accessibilityRole="button"
            accessibilityLabel="Toggle error state"
          >
            <Text className={isDark ? 'text-sm font-semibold text-slate-200' : 'text-sm font-semibold text-slate-700'}>
              {hasError ? 'Clear Error State' : 'Show Error State'}
            </Text>
          </Pressable>

          <TextInput
            value={hasError ? 'Invalid value' : 'Valid value'}
            placeholder="Error state"
            className={
              hasError
                ? 'mt-4 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-600'
                : isDark
                  ? 'mt-4 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white'
                  : 'mt-4 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900'
            }
            placeholderTextColor={isDark ? '#94A3B8' : '#94A3B8'}
          />
          {hasError ? (
            <Text className="mt-2 text-xs text-red-400">This field has an error.</Text>
          ) : null}

          <TextInput
            value="Readonly value"
            editable={false}
            className={
              isDark
                ? 'mt-4 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-400'
                : 'mt-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400'
            }
          />

          <Pressable
            className={
              isDark
                ? 'mt-4 items-center rounded-xl border border-slate-700 px-4 py-3'
                : 'mt-4 items-center rounded-xl border border-slate-200 px-4 py-3'
            }
            onPress={() => {
              setName('');
              setNote('');
              setSearch('');
              setPassword('');
            }}
            accessibilityRole="button"
            accessibilityLabel="Clear inputs"
          >
            <Text className={isDark ? 'text-sm font-semibold text-slate-200' : 'text-sm font-semibold text-slate-700'}>
              Clear Inputs
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
