import { reducer } from '../redux/reducer'

describe('actions', () => {
  it('should create an action to set the pending login', () => {
    const isLoginPending = false
    const expectedAction = {
      type: 'SET_LOGIN_PENDING',
      isLoginPending
    }
    expect(reducer.setLoginPending(isLoginPending)).toEqual(expectedAction)
  })
})