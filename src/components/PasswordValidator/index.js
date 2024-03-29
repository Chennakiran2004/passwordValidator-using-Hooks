import {useState} from 'react'

import {
  AppContainer,
  PasswordContainer,
  Heading,
  Text,
  PasswordInput,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const validPassword = password.length < 8

  const errorMessage = 'Your password must be at least 8 characters'

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <AppContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <PasswordInput
          type="password"
          onChange={onChangePassword}
          value={password}
        />
        {validPassword && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </PasswordContainer>
    </AppContainer>
  )
}

export default PasswordValidator
