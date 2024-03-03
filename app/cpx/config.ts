interface ConfigTypes {
    name: string;
    version: string;
    enviroment: string;
    isLogging: boolean;
    isDebugMode: boolean;
}
/**
 * Config
 * @description Configuration for the application
 */
export const Config: ConfigTypes = {
  name: "cpx",
  version: "2.0",
  enviroment: "dev",
  isLogging: true,
  isDebugMode: true,
};
