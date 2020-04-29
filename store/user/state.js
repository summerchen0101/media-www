export const initProfile = () => ({
  account: '',
  phone: '',
  email: ''
})
export default function () {
  return {
    profile: initProfile(),
    registerData: {}
  }
}
