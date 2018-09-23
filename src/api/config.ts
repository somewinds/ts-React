
export const header = (version: number = 1, notJson: boolean = true) => {
  let config = {
    Accept: "application/vnd.linhuiba.v" + version + "+json"
  }
  if (notJson) config = Object.assign(config, {"Content-Type": "appliction/x-www-form-urlencoded"})
  return config
}