const buffer=new ArrayBuffer(4,{maxByteLength:16})
buffer.resize(16)
console.log(buffer)
const view =new DataView(buffer)
view.setUint32(0,500);
console.log(view.getInt32(0))
view.setUint32(4,253)
console.log(view)