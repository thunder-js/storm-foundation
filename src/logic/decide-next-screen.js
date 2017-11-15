export default ({
  loading,
  allowGuest,
  authenticated,
  shouldGoToMain,
  loadMainScreen,
  loadOnboardingScreen,
}) => {
  if (loading) return

  /**
   * Maybe the user has the shouldGoToMain but his account is not valid anymore
   * So he can only to to mainScreen if is authenticated (account still valid)
   * or the app allows guest.
   */
  if (shouldGoToMain && (allowGuest || authenticated)) {
    loadMainScreen()
  }

  if (!shouldGoToMain || (!allowGuest && !authenticated)) {
    loadOnboardingScreen()
  }
}
