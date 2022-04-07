const spawn = require("cross-spawn")

const runCmd = (command, args = []) =>
  new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: "inherit" })
    child.on("close", (code) => {
      if (code !== 0) {
        return reject({ message: "error" })
      }
      return resolve({ message: "success" })
    })
  })
run()
async function run() {
  console.log("打包生成企业端部署代码 =>>")
  await runCmd("npm", ["run", "build:enterprise"]).catch((err) => {
    console.log(err)
    process.exit(0)
  })
  console.log("")
  console.log("打包生成政府端部署代码 =>>")
  await runCmd("npm", ["run", "build:government"]).catch((err) => {
    console.log(err)
    process.exit(0)
  })
}
