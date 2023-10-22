import { AES, enc } from "crypto-ts";

export default new (class Encryption {
  private key: string = process.env.ENCRYPTION_KEY as string;

  public encrypt(data: string) {
    return AES.encrypt(data, this.key).toString();
  }

  public decrypt(data: string) {
    return AES.decrypt(data, this.key).toString(enc.Utf8);
  }
})();
