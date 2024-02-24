import { BindingKey } from "@loopback/core";
import { UserService } from "@loopback/authentication";
import { User } from "./models";
import { Credentials } from "./repositories/user.repository";
import { PasswordHasher } from "./services/hash.password.bcryt";
import { JWTservices } from "./services/jwt-services";

export namespace TokenServicesContent {
  export const TOKEN_SECRET_VALUE = 'ee7e783g73njfw3';
  export const TOKEN_EXPIRES_IN_VALUE = '24h';
}
export namespace TokenSecviceBindings {
  export const TOKEN_SECRET = BindingKey.create<string>('authentication.jwt.secret');
  export const TOKEN_EXPIRES_IN = BindingKey.create<string>('authentication.jwt.expiresIn'); 
  export const TOKEN_SERVICE = BindingKey.create<JWTservices>('services.jwt.service');
}

export namespace passwordHasherBinding {
  export const PASSWORD_HASHER = BindingKey.create<PasswordHasher>(
    'service.hasher',
    );
  export const ROUNDS = BindingKey.create<number>('services.hasher.rounds');
}

export namespace UserServiceBindings {
  export const USER_SERVICE = BindingKey.create<UserService<Credentials, User>>('services.user.service');
}

// import { BindingKey } from "@loopback/core";
// import { UserService } from "@loopback/authentication";
// import { User } from "./models";
// import { Credentials } from "./repositories/user.repository";
// import { passwordHasher } from "./services/hash.password.bcryt";
// import { JWTservices } from "./services/jwt-services";

// export namespace TokenServicesContent{
//     export const TOKEN_SECRET_VALUE='ee7e783g73njfw34';
//     export const TOKEN_EXPIRES_IN_VALUE='7h';
// }
// export namespace TokenSecviceBindings{
//     export const TOKEN_SECRET=BindingKey.create<string>(
//         'authentication.jwt.secret',
//         );
//     export const TOKEN_EXPIRES_IN=BindingKey.create<string>(
//         'authentication.jwt.expriesIn',
//     );
//     export namespace TokenSecviceBindings {
//         export const TOKEN_SERVICE = BindingKey.create<JWTservices>(
//           'services.jwt.service',
//         );
//       }
      
// }
// export namespace passwordHasherBinding{
//     export const PASSWORD_HASHER=BindingKey.create<passwordHasher>(
//         'service.hasher',
//     );
//     export const ROUNDS=BindingKey.create<number>('services.hasher.rounds');
// }
// export namespace UserServiceBindings{
//     export const USER_SERVICE=BindingKey.create<UserService<Credentials,User>>(
//         'services.user.service',
//     );

// }
