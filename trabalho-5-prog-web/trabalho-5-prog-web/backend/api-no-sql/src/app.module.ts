import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CarrosModule } from './service/usuarios/carros.module';
import { ModelosModule } from './service/modelos/modelos.module';
import { MarcasModule } from './service/marcas/marcas.module';
import { UsuariosModule } from './service/auth_usuarios/usuarios.module';
import { AuthModule } from './service/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_CONNECTION'),
      }),
      inject: [ConfigService],
    }),
    CarrosModule,
    MarcasModule,
    ModelosModule,
    UsuariosModule,
    AuthModule,
  ],
})
export class AppModule {}
