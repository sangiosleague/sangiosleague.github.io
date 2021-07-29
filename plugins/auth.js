export default function ({ $auth }) {
  if (!$auth.loggedIn) {
    return
  }

  const username = $auth.user.username
  // eslint-disable-next-line no-console
  console.log(username)
  const email = $auth.user.email
  // eslint-disable-next-line no-console
  console.log(email)
}
