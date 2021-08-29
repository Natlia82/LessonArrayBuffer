export default class ArrayBufferConverter {
  load(buffer) {
    this.buf = buffer;
  }

  toString() {
    let rez = '';
    for (let i = 0; i < this.buf.length; i += 1) {
      rez += String.fromCharCode(this.buf[i]);
    }
    return rez;
  }
}
