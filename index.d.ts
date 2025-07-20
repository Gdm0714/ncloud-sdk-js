// Type definitions for ncloud-sdk
// Project: https://github.com/NaverCloudPlatform/ncloud-sdk-js
// Definitions by: NAVER Cloud Platform <https://github.com/NaverCloudPlatform>

export = NCloud;

declare class NCloud {
  constructor(options?: NCloud.NCloudOptions);
  
  /**
   * Initialize credentials using credential provider chain
   * @param callback - Callback function with error and credentials
   */
  init(callback: (err: Error | null, credentials?: NCloud.Credentials) => void): void;
  
  /**
   * Get configure file path
   */
  getConfigureFilePath(): string;
  
  /**
   * Read configure file
   */
  readConfigureFile(): NCloud.Config;
  
  /**
   * Get API keys from options or configure file
   */
  keys(): NCloud.Credentials;
}

declare namespace NCloud {
  interface NCloudOptions {
    accessKey?: string;
    secretKey?: string;
  }
  
  interface Credentials {
    accessKey: string;
    secretKey: string;
  }
  
  interface Config {
    ncloud_access_key_id?: string;
    ncloud_secret_access_key?: string;
  }
}