import { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

type FormErrors = Partial<Record<'name' | 'email' | 'password', string>>

const Form = ({onSubmit}: any) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    const nextErrors: FormErrors = {}

    if (!name.trim()) {
      nextErrors.name = 'Enter your name.'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.'
    }

    setErrors(nextErrors)
    setSubmitted(Object.keys(nextErrors).length === 0)
    onSubmit?.()
  }

  return (
    <View style={styles.screen} accessibilityLabel="login-form">
      <View style={styles.form}>
        <Text style={styles.eyebrow}>YOUR ACCOUNT</Text>
        <Text style={styles.title}>Create your login</Text>
        <Text style={styles.subtitle}>Enter your details to continue.</Text>

        <View style={styles.field}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            accessibilityLabel="name-input"
            testID="name-input"
            autoCapitalize="words"
            onChangeText={(value) => {
              setName(value)
              setSubmitted(false)
            }}
            placeholder="Your name"
            placeholderTextColor="#7B8580"
            returnKeyType="next"
            style={styles.input}
            value={name}
          />
          {errors.name ? <Text style={styles.error} testID="name-error">{errors.name}</Text> : null}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            accessibilityLabel="email-input"
            testID="email-input"
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            onChangeText={(value) => {
              setEmail(value)
              setSubmitted(false)
            }}
            placeholder="you@example.com"
            placeholderTextColor="#7B8580"
            returnKeyType="next"
            style={styles.input}
            value={email}
          />
          {errors.email ? <Text style={styles.error} testID="email-error">{errors.email}</Text> : null}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            accessibilityLabel="password-input"
            testID="password-input"
            autoComplete="new-password"
            onChangeText={(value) => {
              setPassword(value)
              setSubmitted(false)
            }}
            placeholder="At least 8 characters"
            placeholderTextColor="#7B8580"
            secureTextEntry
            style={styles.input}
            value={password}
          />
          {errors.password ? <Text style={styles.error} testID="password-error">{errors.password}</Text> : null}
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="submit-button"
          testID="submit-button"
          onPress={handleSubmit}
          style={({ pressed }) => [styles.submitButton, pressed && styles.submitButtonPressed]}>
          <Text style={styles.submitText}>Submit</Text>
        </Pressable>

        {submitted ? (
          <Text accessibilityLiveRegion="polite" style={styles.success}>
            Details validated successfully.
          </Text>
        ) : null}
      </View>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F2F5F1',
    padding: 24,
  },
  form: {
    width: '100%',
    maxWidth: 440,
    alignSelf: 'center',
  },
  eyebrow: {
    color: '#39705B',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
    marginBottom: 10,
  },
  title: {
    color: '#192820',
    fontSize: 30,
    fontWeight: '700',
  },
  subtitle: {
    color: '#58665E',
    fontSize: 15,
    marginTop: 8,
    marginBottom: 28,
  },
  field: {
    marginBottom: 18,
  },
  label: {
    color: '#26372E',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    minHeight: 52,
    borderWidth: 1,
    borderColor: '#C8D2CA',
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    color: '#192820',
    fontSize: 16,
    paddingHorizontal: 14,
  },
  error: {
    color: '#B33F32',
    fontSize: 13,
    marginTop: 6,
  },
  submitButton: {
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#39705B',
    marginTop: 4,
  },
  submitButtonPressed: {
    backgroundColor: '#2D5A48',
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  success: {
    color: '#28634A',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 16,
  },
})