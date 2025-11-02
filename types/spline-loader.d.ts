declare module "@splinetool/loader" {
  import * as THREE from "three";

  export default class SplineLoader extends THREE.Loader {
    load(
      url: string,
      onLoad?: (scene: THREE.Group) => void,
      onProgress?: (event: ProgressEvent<EventTarget>) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}
