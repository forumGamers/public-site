import { type JwtPayload, type Secret, verify } from "jsonwebtoken";

export interface jwtValue extends JwtPayload {
  UUID: string;
  loggedAs: "User" | "Admin" | "Seller";
}

export default new (class JWT {
  private secret: Secret;

  constructor() {
    this.secret = process.env.SECRET as Secret;
  }

  public verifyToken(token: string) {
    return verify(token, this.secret) as jwtValue;
  }
})();
