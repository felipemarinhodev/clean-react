import React from 'react'
import { makeLoginValidation } from './login-validation-factory'
import { Login } from '@/presentation/pages'
import { makeRemoteAuthentication } from '@/main/factories/usecases/authetication/remote-authentication-factory'
import { makeLocalSaveAccessToken } from '@/main/factories/usecases/save-access-token/local-save-access-token-factory'

export const makeLogin: React.FC = () => {
  return (
    <Login
      validation={makeLoginValidation()}
      authentication={makeRemoteAuthentication()}
      saveAccessToken={makeLocalSaveAccessToken()}
    />
  )
}
