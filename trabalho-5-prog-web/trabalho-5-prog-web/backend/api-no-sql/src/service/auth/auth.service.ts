import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../auth_usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const usuario = await this.usuarioService.findOneByEmail(email);

    if (usuario?.senha !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: usuario.senha, email: usuario.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}