/**
 * Base config.
 */
export class Config {
  /**
   * The API config
   * @type {{port: number}}
   */
  api: {
    port: number,
  } = {
    port: 8080,
  };

}

export default new Config();
