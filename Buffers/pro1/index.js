const a= new ArrayBuffer(4);

const view= new DataView(a)

view.setInt16(0,302)
view.setInt16(2,302)

console.log(a)