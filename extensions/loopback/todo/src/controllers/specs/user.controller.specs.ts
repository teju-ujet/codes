import { RequestBodyObject,SchemaObject} from "@loopback/rest";//import the then the error will resove this for login route

export const CredentialsSchema: SchemaObject = {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email: {
        type: 'string',
        format: 'email',
      },
      password: {
        type: 'string',
        minLength: 5,
      },
    },
  };
  
  export const CredentialsRequestBody: RequestBodyObject = {
    description: 'The input of login function',
    required: true,
    content: {
      'application/json': {schema: CredentialsSchema},
    },
  };