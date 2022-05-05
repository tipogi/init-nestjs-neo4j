export interface CustomConfigOptions {
  folder: string;
}

// The private and public keys will be encoded in Base64
export interface EnvironmentConfigParams {
  ddbb: {
    name: string;
    username: string;
    password: string;
  };
}
