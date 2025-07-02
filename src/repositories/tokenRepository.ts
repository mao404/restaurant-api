import Token from "../models/token";
import bcrypt from "bcrypt";
import crypto from "crypto";

interface TokenData {
  id: number;
  UserId?: number;
  token?: string;
}

interface TokenResponse {
  cryptoToken: string;
}

class TokenRepository {
  constructor() {}

  async create(tokenData: TokenData): Promise<TokenResponse> {
    const cryptoToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = await bcrypt.hash(cryptoToken, 10);
    
    await Token.create({
      UserId: tokenData.id,
      token: hashedToken,
    });
    
    return { cryptoToken };
  }

  async findByUserId(UserId: number) {
    return await Token.findOne({ where: { UserId } });
  }

  async remove(UserId: number) {
    return await Token.destroy({ where: { UserId } });
  }
}

export default TokenRepository; 