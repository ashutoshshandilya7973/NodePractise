import { Buffer } from "buffer";

const nodeBuffer=Buffer.alloc(8);

nodeBuffer.write("hello world","utf-8")
console.log(nodeBuffer.toJSON().data.map(item=>String.fromCharCode(item)))