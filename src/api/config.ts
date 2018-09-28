
export const header = (version: number = 1, Json: boolean = true) => {
  let config = {
    Accept: "application/vnd.linhuiba.v" + version + "+json"
  }
  if (Json) config = Object.assign(config, {"Content-Type": "appliction/x-www-form-urlencoded"})
  return config
}