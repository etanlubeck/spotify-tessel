exports.config = {
  spotify: {
    clientID:'c7681136fdbb4af0904683f95ea6fcd9',
    clientSecret:'b463d9cdcb8e413194c93fac42ff37cb',
    authUrl:'https://accounts.spotify.com/api/token',
    header: this.clientID + ':' + this.clientSecret
  }
}
