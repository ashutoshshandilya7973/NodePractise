import fs from "fs/promises"

const a=await fs.readFile("AshutoshPic.jpeg")
console.log(a)
await fs.writeFile("xyz.jpeg",a)
const codes = a.toString("base64")
const x=await fs.writeFile("text.jpeg",codes)

const z=await fs.readFile("text.jpeg","utf-8")
console.log(Buffer.from(z,"base64"))
await fs.writeFile("ashu.jpeg",z,"base64")
const b=await fs.readFile("ashu.jpeg")
console.log(b)





//tese are very helpful in email and json networking communication which is text based and there the base64 is very important for sending the all kind of data as text


