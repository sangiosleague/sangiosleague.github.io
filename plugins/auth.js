export default function ({ $auth }) {
  if (!$auth.loggedIn) {
    return
  }

  // eslint-disable-next-line no-console
  console.log($auth.user)
}
